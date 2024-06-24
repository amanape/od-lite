import { describe, beforeEach, test, expect, spyOn } from "bun:test";
import Agent from "../src/core/abc/agent";
import Runtime from "../src/core/abc/runtime";
import Session from "../src/core/session";
import { Topic } from "../src/core/types/root";
import { MockAgent } from "../implementations/basic-agent";
import { MockRuntime } from "../implementations/basic-runtime";
import { Action, Message, Observation } from "../src/core/types";

describe('Session', () => {
  test('Session flow should subscribe and handle messages', async () => {
    const agent = new MockAgent();
    const runtime = new MockRuntime();
    const session = new Session(agent, runtime);

    /* Mock the agent and runtime */
    const mockAgentQuery = spyOn(agent, 'query');
    const action: Action = { type: Topic.ACTION, data: { command: "ls" } };
    const aiMessage: Message = { type: Topic.MESSAGE, data: { role: 'ai', message: 'ai message' } };
    mockAgentQuery.mockResolvedValueOnce(action).mockResolvedValueOnce(aiMessage);

    const mockRuntimeHandle = spyOn(runtime, 'handle');
    const observation: Observation = { type: Topic.OBSERVATION, data: { input: action.data.command, output: 'observation' } };
    mockRuntimeHandle.mockResolvedValue(observation);

    const publishSpy = spyOn(session.pubsub, 'publish');

    /* Test the session flow */
    const message: Message = { type: Topic.MESSAGE, data: { role: 'user', message: 'message' } };
    session.pubsub.publish(message); // 1. user publishes a message

    expect(publishSpy).toHaveBeenCalledWith(message);
    expect(mockAgentQuery).toHaveBeenCalledWith(message.data.message); // 2. agent queries the message

    await new Promise(resolve => setImmediate(resolve)); // wait for promises to resolve

    expect(publishSpy).toHaveBeenCalledWith(action); // 3. agent publishes an action from the query
    expect(mockRuntimeHandle).toHaveBeenCalledWith(action); // 4. runtime handles the action
    expect(publishSpy).toHaveBeenCalledWith(observation); // 5. runtime publishes an observation from the action

    expect(mockAgentQuery).toHaveBeenCalledWith(observation.data.output); // 6. agent queries the observation
    expect(publishSpy).toHaveBeenCalledWith(message); // 7. agent publishes a message from the observation

    // TODO: it should loop until user types exit
  });
});
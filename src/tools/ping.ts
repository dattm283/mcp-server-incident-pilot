export const pingSchema = {
  name: "ping",
  description:
    "Verify that the counterpart is still responsive and the connection is alive.",
  inputSchema: {
    type: "object",
    properties: {},
    required: [],
  },
};

export async function ping(): Promise<Record<string, never>> {
  return {};
}

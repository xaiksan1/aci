import { Agent } from "@/lib/types/project";

export async function createAgent(
  projectId: string,
  accessToken: string,
  name: string,
  description: string,
  allowed_apps: string[] = [],
  custom_instructions: Record<string, string> = {},
): Promise<Agent> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/projects/${projectId}/agents`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        name,
        description,
        allowed_apps,
        custom_instructions,
      }),
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to create agent. Status: ${response.status}`);
  }
  return response.json();
}

export async function updateAgent(
  projectId: string,
  agentId: string,
  accessToken: string,
  name?: string,
  description?: string,
  allowed_apps?: string[],
  custom_instructions?: Record<string, string>,
): Promise<Agent> {
  const body = Object.fromEntries(
    Object.entries({
      name,
      description,
      allowed_apps,
      custom_instructions,
    })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, value]) => value !== undefined),
  );

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/projects/${projectId}/agents/${agentId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to update agent. Status: ${response.status}`);
  }
  return response.json();
}

export async function deleteAgent(
  projectId: string,
  agentId: string,
  accessToken: string,
): Promise<void> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/projects/${projectId}/agents/${agentId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to delete agent. Status: ${response.status}`);
  }
}

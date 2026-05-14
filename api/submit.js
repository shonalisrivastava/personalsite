const allowedTypes = new Set(["class-inquiry", "senior-registration"]);

const sendJson = (response, status, payload) => {
  response.status(status).json(payload);
};

const forwardSubmission = async (payload) => {
  const endpoints = [
    process.env.FORM_ENDPOINT,
    process.env.GOOGLE_SHEETS_WEBHOOK_URL,
    process.env.BASIN_ENDPOINT,
    process.env.FORMSPREE_ENDPOINT,
  ].filter(Boolean);

  await Promise.all(
    endpoints.map((endpoint) =>
      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).then((result) => {
        if (!result.ok) {
          throw new Error(`Forwarding failed with ${result.status}`);
        }
      }),
    ),
  );

  return endpoints.length;
};

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return sendJson(response, 405, { error: "Method not allowed" });
  }

  const { type, data, website } = request.body || {};

  if (website) {
    return sendJson(response, 200, { ok: true });
  }

  if (!allowedTypes.has(type) || !data || typeof data !== "object") {
    return sendJson(response, 400, { error: "Invalid submission" });
  }

  const payload = {
    type,
    data,
    submittedAt: new Date().toISOString(),
    source: "shonalisrivastava.com",
  };

  try {
    const forwardedTo = await forwardSubmission(payload);
    return sendJson(response, 200, { ok: true, forwardedTo });
  } catch (error) {
    console.error(error);
    return sendJson(response, 502, {
      error: "Submission received, but forwarding failed.",
    });
  }
}

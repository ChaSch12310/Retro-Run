function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/api/")) {
      if (!env.ACCOUNT_API) {
        return jsonResponse({ error: "Account service is not configured." }, 503);
      }
      return env.ACCOUNT_API.fetch(request);
    }
    return env.ASSETS.fetch(request);
  },
};

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
    if (url.pathname === "/moderate.html") {
      url.pathname = "/admin";
      return Response.redirect(url.href, 308);
    }
    if (url.pathname === "/admin" || url.pathname === "/admin/") {
      url.pathname = "/moderate.html";
      return env.ASSETS.fetch(new Request(url, request));
    }
    return env.ASSETS.fetch(request);
  },
};

# Cloudflare Preview Deployment

## One-time credentials

1. Create a scoped Cloudflare API token for the account that owns `retrorun`.
2. Grant only `Account > Workers Scripts > Edit` for that account.
3. Copy `.env.example` to `.env` and add the account ID and API token.
4. Never commit `.env` or paste the token into chat.

## Upload a preview

Run:

```sh
pnpm run cloudflare:preview
```

This builds `dist/`, uploads a new immutable Worker version, and assigns the
`preview` alias. It does not change the active production deployment.

Record the version ID and preview URL printed by Wrangler.

## Promote an approved preview

In Cloudflare, open **Workers & Pages > retrorun > Deployments**, select the
approved version, choose **Promote deployment**, assign it 100% of traffic, and
confirm.

Or run:

```sh
pnpm run cloudflare:promote
```

Select the approved version ID, assign it 100% of traffic, and confirm the
deployment. Do not use `wrangler deploy`; that command uploads and immediately
deploys a new version without the preview approval step.

## Roll back

Open **Workers & Pages > retrorun > Deployments**, use the three-dot menu beside
the last known-good version, and choose **Rollback**.

# Portfolio anti-harvesting setup

This is an operations guide, not an active WAF or authentication configuration. The portfolio currently publishes GitHub links but no email address in its UI source.

## Current repository settings

- `public/robots.txt` asks compliant crawlers not to crawl the site.
- `index.html` asks search engines not to index or follow pages.
- The footer prohibits automated collection, storage, redistribution, and commercial use of the published GitHub URL.
- These declarations do not block malicious clients. A public URL and its contents remain accessible to anyone who can request the page.
- On a GitHub Pages project URL such as `user.github.io/portfolio/`, `portfolio/robots.txt` is not the origin-root `/robots.txt`. Do not treat it as an effective crawler policy for that hostname.

## Option A: keep the portfolio public with Cloudflare WAF

1. Add a custom domain to the hosting provider. For GitHub Pages, configure the domain in repository Settings > Pages before adding DNS records. See [GitHub Pages custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
2. Add the domain to Cloudflare DNS and set the web-facing A/AAAA/CNAME record to **Proxied** (orange cloud). DNS-only traffic does not pass through Cloudflare WAF. See [Cloudflare proxy status](https://developers.cloudflare.com/dns/proxy-status/).
3. In Cloudflare Security settings, enable the available bot-traffic protection. Start with built-in bot protection; add WAF Managed Challenge rules only after reviewing traffic and false positives. Bot-score expressions require an eligible plan. See [Cloudflare bot protection](https://developers.cloudflare.com/waf/custom-rules/use-cases/challenge-bad-bots/).
4. If a server-side contact endpoint is added later, apply rate limiting to that endpoint. Do not indiscriminately challenge every static asset request.
5. Review Security Events and test normal desktop/mobile visits after changing rules.

**Bypass warning:** A proxied custom domain does not protect a still-public `github.io` URL. If all visitors must enter through Cloudflare, move hosting to a platform where the default origin can be disabled or redirected, then stop serving the GitHub Pages site. Cloudflare Pages documents [custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/) and [redirecting `pages.dev` to a custom domain](https://developers.cloudflare.com/pages/how-to/redirect-to-custom-domain/).

## Option B: private portfolio with Cloudflare Access

1. Put the site on a Cloudflare-managed public hostname.
2. In Zero Trust > Access controls > Applications, add a self-hosted public-hostname application for the full site.
3. Create an Allow policy for approved identities. One-time PIN can be used for approved email addresses.
4. Protect or disable every alternate hostname and preview URL; otherwise a direct origin URL can bypass Access.

This makes the portfolio unavailable to unapproved recruiters. See [Cloudflare Access application setup](https://developers.cloudflare.com/cloudflare-one/access-controls/applications/http-apps/) and [one-time PIN](https://developers.cloudflare.com/cloudflare-one/integrations/identity-providers/one-time-pin/).

## If public contact is needed later

Do not put the destination email in HTML, JavaScript, public environment variables, or a static form action. Use a server-side form handler with rate limiting and Cloudflare Turnstile. Validate each Turnstile token on the server using Siteverify; the browser widget alone is insufficient. Keep the destination address and secret key in server-side secrets. See [Turnstile server-side validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/).

## Search visibility tradeoff

The current `Disallow: /` and `noindex` settings reduce discoverability. A crawler blocked by `robots.txt` might not read the page's `noindex` tag, so the URL itself may still appear in search results. Revisit both settings together if public search visibility becomes desirable. See [Google's robots meta guidance](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag).

MASTER TEMPLATE INSTRUCTIONS - CONFIGURATION

When spinning up a new website for a client, you ONLY need to edit one file in this directory:
`siteConfig.ts`

HOW TO UPDATE:
1. Open `siteConfig.ts`
2. Replace all the dummy information (businessName, phone, email, address, etc.) with the real client's info.
3. Update the `services` array if they offer different services. The website will AUTOMATICALLY generate new SEO-optimized pages for every service you list here.
4. Update the `serviceAreas` array. The website will AUTOMATICALLY generate local landing pages for every city/town you list here.
5. If the client has a Google Business Profile (GBP), add the URL to `googleBusinessProfileUrl`. This is critical for Local SEO linking.

DO NOT touch the structural code in `src/app` or `src/components` unless you need to change the fundamental layout. The config handles the heavy lifting!

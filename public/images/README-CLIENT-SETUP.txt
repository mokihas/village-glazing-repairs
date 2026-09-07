MASTER TEMPLATE INSTRUCTIONS - IMAGES

To update the imagery for a new client, you do NOT need to touch the code. You simply replace the files in this folder.

HOW TO UPDATE:
1. Make sure you have the client's actual photos.
2. The config (`src/config/siteConfig.ts`) points to specific filenames. 
   For example, it looks for `/images/hero.jpg` or `/images/about.jpg`.
3. Simply delete the dummy files in this folder (e.g., `hero-placeholder.svg`) and paste in the client's real photos.
4. IMPORTANT: Make sure the file names you upload match exactly what is written in `siteConfig.ts`. 
   If you upload `john-workshop.jpg`, you MUST go to `siteConfig.ts` and change `aboutImage` to `"/images/john-workshop.jpg"`.

We highly recommend optimizing all images (using WebP or compressing JPEGs) before uploading them to ensure the website remains lightning fast.

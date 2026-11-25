# Hussein Abdallah, Document Control (platform preview)

Arabic (RTL) site: services page and short lessons. Vite, React 18, TypeScript, react-router-dom 6.

## Run
```
npm install
npm run dev      # local dev server
npm test         # route and content tests (vitest)
npm run build    # type check + production build in dist/
```

## Add a lesson
Add one entry to `src/data/lessons.ts`. `status: 'available'` needs `video` (file in `public/`), and gets a page at `/learn/<slug>`. `status: 'planned'` shows in the list with no page.

## Status of this version
Temporary preview. Not active, on purpose: login, student accounts, payments, prices, contact details, content protection. The video is a plain MP4 and can be downloaded or shared. Episode audio is AI-generated. The Excel example uses dummy data and the formula was tested.

## Fonts
Noto Sans Arabic in `src/fonts` under the SIL Open Font License (`src/fonts/OFL.txt`).

## Rights
See NOTICE.md. The episode video carries a visible "Hussein Abdallah" watermark. A notice and a watermark show ownership; they do not technically prevent copying.

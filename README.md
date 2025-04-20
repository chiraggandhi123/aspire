# Aspire Card Management

A modern web application for managing credit/debit cards, inspired by the Aspire application.

## Features

- View existing cards in a carousel
- Add new cards with randomly generated card numbers and expiry dates
- Freeze/unfreeze cards
- Responsive design for both desktop and mobile
- Persistent storage using localStorage
- Modern UI with smooth animations

## Tech Stack

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Headless UI
- Zustand (State Management)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  ├── app/
  │   ├── page.tsx (main page)
  │   ├── layout.tsx (root layout)
  │   └── components/
  │       ├── Card/
  │       │   ├── Card.tsx
  │       │   ├── CardList.tsx
  │       │   └── AddCardModal.tsx
  │       ├── Header/
  │       │   └── Header.tsx
  │       └── common/
  │           └── Button.tsx
  ├── types/
  │   └── index.ts
  ├── utils/
  │   └── store.ts
  └── styles/
      └── globals.css
```

## Design

The application is designed to be pixel-perfect according to the provided Adobe XD design:
- Desktop View: [Link](https://xd.adobe.com/view/80c753f2-db2f-4dfc-b6c2-ce39a4c787f0-d594/screen/7d8639be-16a2-4dc6-9ddc-c3bcd8d8f1ee/)
- Mobile View: [Link](https://xd.adobe.com/view/80c753f2-db2f-4dfc-b6c2-ce39a4c787f0-d594)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

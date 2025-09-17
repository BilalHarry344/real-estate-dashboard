# Property Finder Frontend

A modern React application for browsing and filtering property listings.

## Features

- Browse property listings
- Filter properties by price and number of bedrooms
- View detailed property information
- Responsive design for all screen sizes
- Modern UI with Tailwind CSS
- Type-safe development with TypeScript
- Efficient data fetching with React Query

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router
- React Query
- Axios
- Tailwind CSS
- HeadlessUI
- Heroicons

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd property-finder
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API URL:

   ```
   VITE_API_URL=your_api_url_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`.

### Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── services/      # API services
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
├── styles/        # Global styles and Tailwind CSS config
└── assets/        # Static assets
```

## API Integration

The application expects the following API endpoints:

- `GET /properties` - List all properties with optional filters
- `GET /properties/:id` - Get detailed information about a specific property

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

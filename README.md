# API Server

This repository contains a Node.js API server with endpoints for generating random passwords, creating harmonious color palettes, and providing dinner suggestions.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Password Generation](#password-generation)
  - [Color Palette Generation](#color-palette-generation)
  - [Dinner Suggestions](#dinner-suggestions)
- [Contributing](#contributing)
- [License](#license)
- [Try It Out](#try-it-out)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MadsenDev/api-server.git
   cd api-server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. The API server will be running at `http://localhost:3000`.

## Usage

This API server provides three main functionalities: generating passwords, generating color palettes, and getting dinner suggestions. You can use tools like Postman or curl to interact with the API.

## API Endpoints

### Password Generation

#### Generate a Random Password

- **Endpoint**: `GET /password`
- **Description**: Generates a random password based on specified criteria.
- **Query Parameters**:
  - `length` (optional): Length of the password (default: 12)
  - `includeNumbers` (optional): Include numbers in the password (default: false)
  - `includeSpecialChars` (optional): Include special characters in the password (default: false)
  - `includeUppercase` (optional): Include uppercase letters in the password (default: false)
- **Example**:
  ```bash
  curl "http://localhost:3000/password?length=16&includeNumbers=true&includeSpecialChars=true&includeUppercase=true"
  ```
- **Response**:
  ```json
  {
    "password": "A1b2C3d4E5f6G7h8"
  }
  ```

### Color Palette Generation

#### Generate a Color Palette

- **Endpoint**: `GET /color-palette`
- **Description**: Generates a harmonious color palette based on the specified criteria.
- **Query Parameters**:
  - `numColors` (optional): Number of colors in the palette (default: 5)
  - `baseColor` (optional): Base color in hex format (default: #3498db)
  - `scheme` (optional): Color scheme type (analogous, complementary, triadic, monochromatic) (default: complementary)
- **Example**:
  ```bash
  curl "http://localhost:3000/color-palette?numColors=5&baseColor=%233498db&scheme=analogous"
  ```
- **Response**:
  ```json
  {
    "palette": ["#3498db", "#3f6d9c", "#349b72", "#d43e30", "#9c34a8"]
  }
  ```

### Dinner Suggestions

#### Get a Dinner Suggestion

- **Endpoint**: `GET /dinner-suggestion`
- **Description**: Provides a random dinner suggestion based on specified criteria.
- **Query Parameters**:
  - `cuisine` (optional): Filter by cuisine type (e.g., Italian, Chinese)
  - `dietary` (optional): Filter by dietary preference (e.g., Vegetarian, Vegan)
- **Example**:
  ```bash
  curl "http://localhost:3000/dinner-suggestion?cuisine=Italian&dietary=Vegetarian"
  ```
- **Response**:
  ```json
  {
    "name": "Vegetarian Pesto Pasta",
    "cuisine": "Italian",
    "dietary": "Vegetarian",
    "ingredients": ["pasta", "basil", "pine nuts", "parmesan"]
  }
  ```

#### Get Options for Cuisines and Dietary Preferences

- **Endpoint**: `GET /dinner-suggestion/options`
- **Description**: Provides available options for cuisines and dietary preferences.
- **Example**:
  ```bash
  curl "http://localhost:3000/dinner-suggestion/options"
  ```
- **Response**:
  ```json
  {
    "cuisines": ["Italian", "Chinese", "Mexican", "American", "Greek"],
    "dietaryPreferences": ["Non-Vegetarian", "Vegetarian", "Vegan"]
  }
  ```

## Try It Out

You can try out the API live at [https://sandbox.madsens.dev](https://sandbox.madsens.dev). This sandbox environment allows you to test the API endpoints without needing to run the server locally.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any features, fixes, or enhancements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

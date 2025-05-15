# GearUp - A Bicycle Store

## Project Overview

The Bicycle Store Application is a responsive web application designed to provide users with a seamless experience for browsing, purchasing, and managing bicycles. The application includes features such as user registration and authentication, product management, order processing, and payment integration. The goal is to create a user-friendly, secure, and visually appealing platform for both customers and administrators.

> Live Site -> https://gearup-client.vercel.app/

## Credentials

> Admin Access 👇🏻

Email

```
admin@gmail.com
```

Password

```
admin@123
```

<br>

> Cutomer Access 👇🏻

Email

```
fardin@gmail.com
```

Password

```
123456
```

## Features

### User Management

- `User Authentication:` Users can register with their name, email, and password. Passwords are securely hashed before storage.
- `User Role:` Customers can view their order history and manage their profiles.
- `Admin Role:` Admins can manage products, view orders, and oversee platform activities.
- `JWT Token Management:` JSON Web Tokens are used for secure authentication and session management.
- `Logout:` Users can log out, which removes the token from local storage and redirects them to the login page.

### Payment Integration

- `Secure Payment Processing:` Payment gateway integration for safe and seamless transactions.

### Bicycle Management

- Add new bicycles with details like name, brand, price, type, and availability.
- Retrieve all bicycles or filter using search terms (e.g., type, brand, name).
- View details of a specific bicycle by its ID.
- Update bicycle information such as price, quantity, or stock status.
- Delete a bicycle from the inventory.

### Order Management

- Place orders for bicycles with email, bicycle details, quantity, and total price.
- Validate stock availability before order creation.
- Automatically reduce inventory when an order is placed.

### Inventory Management

- Update bicycle inventory dynamically.
- Mark a bicycle as out of stock when the quantity reaches zero.
- Handle insufficient stock scenarios with proper error message

## Technology Stack

### Frontend

- Shadcn
- TypeScript
- React
- Redux
- RTK Query

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JWT for authentication.

### Demo Hosted Image URL

> Bicycle Images 👇🏻

- https://i.ibb.co.com/sp29hfgP/patrick-hendry-1ow9zrlld-JU-unsplash.jpg
- https://i.ibb.co.com/CKJFnMcJ/timotheus-frobel-YDyw-GFCr-P3g-unsplash.jpg
- https://i.ibb.co.com/pvVZHW0L/jacek-dylag-gi-Fe-Tsh-EYYQ-unsplash.jpg
- https://i.ibb.co.com/RpVpTm86/jonny-kennaugh-n-POtzv-GLYW0-unsplash.jpg

- https://i.ibb.co.com/XkkZcB1Y/didier-weemaels-4yfdgmbg-BWU-unsplash.jpg
- https://i.ibb.co.com/Q3J8Tv9K/howard-bouchevereau-BRDO4-C-0h-s-unsplash.jpg
- https://i.ibb.co.com/N2HByzdK/jannik-wuster-Veusc6z31-Y-unsplash.jpg
- https://i.ibb.co.com/39R4fZ9M/patrick-hendry-OZh-OBP-fao-unsplash.jpg
- https://i.ibb.co.com/kVZ9Hzkn/will-gonzalez-u-AK3j-Jr6md4-unsplash.jpg
- https://i.ibb.co.com/ytn4fK0/aditya-wardhana-LFv9v-VBLmw-M-unsplash.jpg
- https://i.ibb.co.com/hxs9wb2H/daman-singh-1-Rh-Ec-Ngr-YEI-unsplash.jpg

## Setup Instructions

1. Clone the Repository:

   ```
   https://github.com/farrdin/gearup
   ```

2. Change Directory & npm installation

   ```
   cd client
   npm i
   ```

   ```
   cd server
   npm i
   ```

3. Set Up Environment Variables on `server`

   ```
   NODE_ENV=development
   PORT=5000
   DATABASE_URL= <your mongodb url>
   BCRYPT_SALT_ROUNDS=8
   ```

4. Run the Application (client & server):
   ```
   npm run dev
   ```
5. Access the Application:

   Open your browser and navigate to for `client`

   ```
   http://localhost:5173
   ```

   Open your browser and navigate to for `server`

   ```
   http://localhost:5000
   ```

## Conclusion

The Bicycle Store Application is designed to be a comprehensive solution for both customers and admin, offering a wide range of features and ensuring a smooth, secure, and enjoyable user experience.

## Contact

For inquiries, reach out to fardinahmed.dev@gmail.com

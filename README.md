# Vendora: A Modern E-Commerce Platform

**Vendora** is a full-stack e-commerce application designed to provide a seamless and engaging online shopping experience. It features a complete suite of functionalities for customers, sellers, and administrators, from browsing and purchasing products to managing inventory and processing orders.

---

## 🚀 Key Features

* **User Authentication & Authorization**: Secure user registration and login with role-based access control (User, Seller, Admin) using **JWT (JSON Web Tokens)**.
* **Product & Category Management**:
    * Sellers can add, update, and delete products and categorize them for easy browsing.
    * Advanced product filtering and searching by keyword and category.
* **Shopping Cart**: A persistent shopping cart that allows users to add, remove, and update the quantity of items.
* **Checkout & Payment**:
    * A multi-step checkout process for a smooth user experience.
    * Integration with **Stripe** for secure online payments.
* **Address Management**: Users can add, edit, and delete multiple shipping addresses.
* **Order Management**: Users can view their order history and track the status of their orders.

---

## 🛠️ Technologies & Architecture

This project is built on a modern, robust technology stack, following best practices for building scalable and maintainable applications.

* **Backend**:
    * **Java 21**: Leveraging the latest features of the Java language.
    * **Spring Boot 3**: For building robust, production-grade RESTful APIs.
* **Data Management**:
    * **Spring Data JPA & Hibernate**: For powerful and efficient object-relational mapping.
    * **MySQL Database**: A robust and scalable relational database for production.
* **Security**:
    * **Spring Security**: For comprehensive and customizable authentication and access control.
    * **JWT (JSON Web Tokens)**: For secure, stateless authentication.
* **Frontend**:
    * **React 19**: A modern and powerful JavaScript library for building user interfaces.
    * **Redux Toolkit**: For efficient and predictable state management.
    * **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
    * **Vite**: A next-generation frontend tooling that provides an extremely fast development experience.
* **API & Build Tools**:
    * **RESTful Architecture**: A clean and consistent RESTful API design.
    * **Maven**: For efficient project building and dependency management.

---

## 🏛️ Architectural Overview

Vendora is designed with a classic **layered architecture**, promoting a clean separation of concerns and making the application easy to test, maintain, and scale.

* **Controller Layer**: The entry point for all API requests, responsible for handling HTTP requests and responses and delegating business logic to the service layer.
* **Service Layer**: Contains the core business logic of the application. It is divided into interfaces and implementations to promote loose coupling and easy testing.
* **Repository Layer**: The data access layer, built using Spring Data JPA. It provides a clean abstraction over the database, allowing for easy data manipulation.
* **Domain Model**: A rich domain model with JPA entities (`model`) that accurately represent the core concepts of the application.
* **DTO Layer**: A dedicated layer of Data Transfer Objects (`payload`) to ensure a clean separation between the internal domain model and the external API, preventing data leakage and providing a stable API contract.

---

## 🚀 Getting Started

### Prerequisites

* **JDK 21** or newer
* **Maven 3.9** or newer
* **Node.js** and **npm** for the frontend
* A modern IDE such as **IntelliJ IDEA** or **VS Code**

### Installation & Execution

#### Backend

1.  **Clone the Repository**:
    ```bash
    git clone [https://github.com/harry121199/vendora.git](https://github.com/harry121199/vendora.git)
    cd vendora
    ```

2.  **Configure the Database**:
    * Open `src/main/resources/application.properties`.
    * Update the `spring.datasource.url`, `spring.datasource.username`, and `spring.datasource.password` properties to match your MySQL database configuration.

3.  **Build with Maven**:
    ```bash
    mvn clean install
    ```

4.  **Run the Application**:
    ```bash
    mvn spring-boot:run
    ```

The Vendora API will be up and running on `http://localhost:8080`.

#### Frontend

1.  **Navigate to the Frontend Directory**:
    ```bash
    cd FrontEnd/ecom-frontend
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Run the Development Server**:
    ```bash
    npm run dev
    ```

The frontend will be available at `http://localhost:5173`.

---

## 🔮 Future Enhancements

* **Admin Dashboard**: A comprehensive admin dashboard for managing users, products, orders, and site-wide settings.
* **Seller Portal**: A dedicated portal for sellers to manage their products, view sales analytics, and handle orders.
* **Product Reviews and Ratings**: Allow customers to leave reviews and ratings for products.
* **Wishlist Functionality**: Enable users to save products to a wishlist for future purchase.

---

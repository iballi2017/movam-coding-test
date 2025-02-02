# Angular Authentication Project

## Overview

This project is a simple Angular Authentication Application that implements a login system and a user dashboard using Angular and ReqRes API.

## Features

- User Authentication: Validates login credentials using https://reqres.in/api/users/2.

- Email Persistence: Captures the email from the login form and passes it to the dashboard.

- User List Display: Fetches and displays a list of users from https://reqres.in/api/users.

- Responsive Design: Supports mobile and desktop views.

## Technologies Used

- Angular 19

- TypeScript

- RxJS

- Angular Router

- Angular Forms

- TailwindCSS

- ngx-toastr

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js (v22+ recommended)

- Angular CLI

## Steps to Run Locally

### Clone the repository

git clone https://github.com/iballi2017/movam-coding-test.git

cd movam-coding-test

### Install dependencies

npm install

### Run the application

ng serve

## API Integration

### Login Validation

- Endpoint: https://reqres.in/api/users/2

- Method: GET

- Response Handling: If the user is found, navigate to the dashboard. If not, show an error message.

### Fetching Users

- Endpoint: https://reqres.in/api/users

- Method: GET

- Usage: Display users in the dashboard.

## Implementation Guide

### Login Component

- A simple form to enter the email.

- Calls the authentication API on submit.

- Redirects to the dashboard on success.

Note: use "janet.weaver@reqres.in" as the correct email address to test successful login

### Dashboard Component

- Fetches and displays a list of users from the API.

- Retrieves the email entered in the login form using RxJS BehaviorSubject().

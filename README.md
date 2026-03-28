# React + Laravel + Sanctum Login Best Practice

## Overview
- Laravel 13 + React 19 + Sanctum のシンプルなログインサンプルです。
- フロントエンドは Vite を使った React SPA、バックエンドは Laravel API です。

## Requirements
- PHP 8.4+
- Node.js 20.19.0+
- npm
- MySQL

## Setup
```bash
cp .env.example .env
composer install
npm install
php artisan key:generate
php artisan migrate
npm run dev
php artisan serve
```

## Main Packages
- laravel/framework: 13.2
- laravel/sanctum: 4.3
- react: 19.2
- react-dom: 19.2
- react-router-dom: 7.13
- vite: 8.0

## Add User
```php
use App\Models\User;

User::create([
    'name' => 'Test User',
    'email' => 'twilight.suz326@gmail.com',
    'password' => 'password',
]);
```

## Commands
```bash
php artisan test
npm run build
```

## Image
![image](https://github.com/user-attachments/assets/65137c53-3384-4cba-bc09-ebe2461db985)

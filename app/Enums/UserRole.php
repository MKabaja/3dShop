<?php

declare(strict_types=1);

namespace App\Enums;

/**
 * Class UserRole
 *
 * Enum representing available user roles in the application.
 *
 * Values:
 *  - ADMIN: administrative user with full access
 *  - CLIENT: regular customer
 */
enum UserRole: string
{
    case ADMIN = 'admin';
    case CLIENT = 'client';
}

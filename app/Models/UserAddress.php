<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property string $label
 * @property string $street
 * @property string $city
 * @property string $postal_code
 * @property bool $is_default
 
 */
class UserAddress extends Model
{
    protected $fillable = [
        'label',
        'street',
        'city',
        'postal_code',
        'is_default',

    ];

    
    protected function casts(): array
    {
        return [
            'is_default' => 'boolean',
        ];
    }

    
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

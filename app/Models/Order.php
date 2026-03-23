<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property string $status
 * @property int $total
 * @property array $shipping_address
 * @property string $order_number
 */
class Order extends Model
{
    protected $fillable = [
        'status',
        'total',
        'shipping_address',
        'order_number',

    ];

    protected $casts = [
        'shipping_address' => 'array',
        'total' => 'int',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function items(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property string $product_name
 * @property int $price
 * @property int $quantity
 */
class OrderItem extends Model
{
    protected $fillable = [
        'product_name',
        'price',
        'quantity',

    ];

    protected $casts = [
        'price' => 'int',
        'quantity' => 'int',
    ];

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}

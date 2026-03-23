<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * @property string $name
 * @property string $slug
 * @property string|null $description
 * @property int $price
 * @property int|null $stock
 * @property bool $is_made_to_order
 * @property int|null $production_days
 * @property bool $is_active
 */
class Product extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'price',
        'stock',
        'is_made_to_order',
        'production_days',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'is_made_to_order' => 'boolean',
            'is_active' => 'boolean',

        ];
    }

    public function images(): HasMany
    {
        return $this->hasMany(ProductImage::class);
    }
}

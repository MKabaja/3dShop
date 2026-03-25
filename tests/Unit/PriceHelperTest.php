<?php

use App\Helpers\PriceHelper;

it('converts major to minor unit correctly', function () {
    expect(PriceHelper::toMinorUnit(19.99))->toBe(1999)
        ->and(PriceHelper::toMinorUnit(10.00))->toBe(1000)
        ->and(PriceHelper::toMinorUnit(0.01))->toBe(1);
});

it('formats price for polish locale', function () {

    expect(PriceHelper::format(125050))->toBe('1 250,50 PLN');
});

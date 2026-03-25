<?php

namespace App\Helpers;

class PriceHelper
{
    /**
     * Formatuje wartość w groszach do postaci "12,34 PLN".
     *
     * @param  int  $minorUnitValue  Wartość w groszach
     * @param  string  $currency  Kod waluty (domyślnie 'PLN')
     */
    public static function format(int $minorUnitValue, string $currency = 'PLN'): string
    {
        return number_format(self::toMajorUnit($minorUnitValue), 2, ',', ' ').' '.$currency;
    }

    /**
     * Zamienia złote na grosze (np. 12.34 → 1234).
     *
     * @param  float  $majorUnitValue  Kwota w złotych
     * @return int Kwota w groszach
     */
    public static function toMinorUnit(float $majorUnitValue): int
    {
        return (int) round($majorUnitValue * 100);
    }

    /**
     * Zamienia grosze na złote (np. 1234 → 12.34).
     *
     * @param  int  $minorUnitValue  Kwota w groszach
     * @return float Kwota w złotych
     */
    public static function toMajorUnit(int $minorUnitValue): float
    {
        return $minorUnitValue / 100;
    }
}

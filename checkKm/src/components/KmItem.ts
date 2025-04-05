import { KMType } from '../types/KM';
import { dateStringConvert } from '../utils/handleDate';

export function KmItem(item: KMType) {
  return `
<div class="border-bottom border-dark m-0 mb-2 p-0">
    <div class="row">
        <div class="col">Data: ${dateStringConvert(item.date)}</div>
        <div class="col text-end">Km: ${item.currentKm}</div>
    </div>
        <div class="row">
        <div class="col text-center">Litros</div>
        <div class="col text-center">km rodados</div>
        <div class="col text-center">Km/L</div>
    </div>
    <div class="row">
        <div class="col text-center">${item.liters}</div>
        <div class="col text-center">${item.mileage}</div>
        <div class="col text-center">${item.kml}</div>
    </div>
</div>`;
}

import { registeredKmKey } from '..';
import { modalClose } from '../components/base-components/Modal';
import { KMType } from '../types/KM';
import { saveToStorage } from '../utils/handleStorage';
import { invalidateInput } from '../utils/invalidateInput';

export function saveKmInfo() {
  const kmIpt = <HTMLInputElement>document.getElementById('prevKm')!;
  const kmDate = <HTMLInputElement>document.getElementById('kmDate')!;

  const currentKm = Number(kmIpt.value);
  const date = kmDate.value;

  if (currentKm == 0) {
    invalidateInput(kmIpt);

    return;
  }

  if (date == '') {
    invalidateInput(kmDate);

    return;
  }

  const info: KMType[] = [
    {
      currentKm: Number(kmIpt.value),
      date,
      prevKm: 0,
      liters: 0,
      mileage: 0,
      kml: 0,
    },
  ];

  saveToStorage(registeredKmKey, info);

  modalClose();
}

import { save } from 'pdfkit';
import { AddKmModal } from './components/AddKmModal';
import { KmItem } from './components/KmItem';
import { NewKmModal } from './components/NewKmModal';
import { saveKmInfo } from './functions/saveKmInfo';
import { setHome } from './functions/setHome';
import { KMType } from './types/KM';
import { getStorageData, saveToStorage } from './utils/handleStorage';
import { invalidateInput } from './utils/invalidateInput';

export const registeredKmKey = 'regKm';

const registeredKm = getStorageData(registeredKmKey);

if (!registeredKm) {
  NewKmModal();

  const saveBtn = document.getElementById('confirm')!;

  saveBtn.addEventListener('click', () => {
    saveKmInfo();

    location.reload();
  });
} else {
  setHome();

  const kmSpot = document.getElementById('kmItems')!;

  const kmInfo: KMType[] = getStorageData(registeredKmKey);

  kmInfo.forEach((km) => {
    kmSpot.innerHTML += KmItem(km);
  });

  const addBtn = document.getElementById('btnAdd')!;

  addBtn.addEventListener('click', () => {
    AddKmModal();

    const currentKmIpt = <HTMLInputElement>document.getElementById('currentKm')!;
    const litersIpt = <HTMLInputElement>document.getElementById('liters')!;

    currentKmIpt.addEventListener('keyup', () => {
      const prevKm = <HTMLInputElement>document.getElementById('prevKm')!;
      const mileage = <HTMLInputElement>document.getElementById('mileage')!;

      mileage.value = String(Number(currentKmIpt.value) - Number(prevKm.value));
    });

    litersIpt.addEventListener('keyup', () => {
      const mileage = <HTMLInputElement>document.getElementById('mileage')!;
      const kml = <HTMLInputElement>document.getElementById('kml')!;

      kml.value = String((Number(mileage.value) / Number(litersIpt.value)).toFixed(2));
    });

    const saveBtn = document.getElementById('confirm')!;

    saveBtn.addEventListener('click', () => {
      const kmDate = <HTMLInputElement>document.getElementById('kmDate')!;
      const currentKm = <HTMLInputElement>document.getElementById('currentKm')!;
      const prevKm = <HTMLInputElement>document.getElementById('prevKm')!;
      const liters = <HTMLInputElement>document.getElementById('liters')!;
      const mileage = <HTMLInputElement>document.getElementById('mileage')!;
      const kml = <HTMLInputElement>document.getElementById('kml')!;

      if (!currentKm.value) {
        invalidateInput(currentKm);

        return;
      }

      if (!liters.value) {
        invalidateInput(liters);

        return;
      }

      const km: KMType = {
        date: kmDate.value,
        currentKm: Number(currentKm.value),
        prevKm: Number(prevKm.value),
        liters: Number(liters.value),
        mileage: Number(mileage.value),
        kml: Number(kml.value),
      };

      const kmInfo: KMType[] = getStorageData(registeredKmKey);

      kmInfo.push(km);

      saveToStorage(registeredKmKey, kmInfo);

      location.reload();
    });
  });
}

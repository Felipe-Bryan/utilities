import { propertyRow } from '../components/propertyRow';

export function addPropRow() {
  const props = document.querySelectorAll('.propNameIpt');

  return propertyRow(props.length);
}

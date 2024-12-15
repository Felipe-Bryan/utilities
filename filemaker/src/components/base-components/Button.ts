export interface ButtonProps {
  id: string;
  label: string;
  color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  outline?: boolean;
  disabled?: boolean;
  toggle?: boolean;
  additionalProps?: string;
  additionalClass?: string;
}

export function Button(props: ButtonProps) {
  return `<button 
type="button" 
class="btn btn-${props.outline ? 'outline-' : ''}${props.color}${
    props.additionalClass ? ` ${props.additionalClass}` : ''
  }" 
id="${props.id}"
${props.disabled ? 'disabled' : ''}
${props.toggle ? 'data-bs-toggle="button"' : ''}
${props.additionalProps ? props.additionalProps : ''}>${props.label}</button>`;
}

export function BlockButton(props: ButtonProps) {
  return `<div class="d-grid gap-2">
  <button 
    type="button" 
    class="btn btn-${props.outline ? 'outline-' : ''}${props.color}${
    props.additionalClass ? ` ${props.additionalClass}` : ''
  }" 
    id="${props.id}"
    ${props.disabled ? 'disabled' : ''}
    ${props.toggle ? 'data-bs-toggle="button"' : ''}
    ${props.additionalProps ? props.additionalProps : ''}>${props.label}</button>
</div>`;
}

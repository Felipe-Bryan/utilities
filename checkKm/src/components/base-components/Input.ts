export interface InputProps {
  id: string;
  title: string;
  type: 'text' | 'number' | 'email' | 'password' | 'date';
  placeholder?: string;
  value?: string;
  additionalClass?: string;
  disabled?: boolean;
}

export function Input(props: InputProps) {
  return `
<div class="input-group mb-2">
  <span class="input-group-text w-25" id="basic-addon1">${props.title}</span>
  <input 
    type="${props.type}" 
    class="form-control${props.additionalClass ? ` ${props.additionalClass}` : ''}" 
    id="${props.id}"
    value="${props.value ? props.value : ''}" 
    placeholder="${props.placeholder ? props.placeholder : props.title}"
    ${props.disabled ? 'disabled' : ''}>
</div>`;
}

export interface InputProps {
  id: string;
  title: string;
  type: 'text' | 'number' | 'email' | 'password' | 'date' | 'range';
  placeholder?: string;
  value?: string;
  additionalClass?: string;
}

export function Input(props: InputProps) {
  return `
<div class="input-group">
  <span class="input-group-text w-25" id="basic-addon1">${props.title}</span>
  <input 
    type="${props.type}" 
    class="form-control${props.additionalClass ? ` ${props.additionalClass}` : ''}" 
    id="${props.id}"
    value="${props.value ? props.value : ''}" 
    placeholder="${props.placeholder ? props.placeholder : props.title}">
</div>`;
}

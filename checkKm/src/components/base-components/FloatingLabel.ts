export interface InputProps {
  id: string;
  title: string;
  type: 'text' | 'number' | 'email' | 'password';
  value?: string;
  placeholder?: string;
  additionalClass?: string;
}

export function FloatingLabel(props: InputProps) {
  return `
<div class="form-floating mb-2">
  <input 
    type="${props.type}" 
    class="form-control${props.additionalClass ? ` ${props.additionalClass}` : ''}" 
    id="${props.id}" 
    value="${props.value ? props.value : ''}" 
    placeholder="${props.placeholder ? props.placeholder : props.title}">
  <label for="${props.id}">${props.title}</label>
</div>`;
}

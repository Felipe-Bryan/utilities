export interface RadioProps {
  id: string;
  sequency: number;
  label: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  inline?: boolean;
}

export function Radio(props: RadioProps) {
  return `<div class="form-check${props.inline ? ' form-check-inline' : ''}">
  <input 
    class="form-check-input" 
    type="radio" 
    name="${props.id}" 
    id="${props.id}${props.sequency}"
    ${props.checked ? ' checked ' : ''}
    ${props.disabled ? ' disabled' : ''}>
  <label class="form-check-label" for="${props.id}${props.sequency}">
    ${props.label}
  </label>
</div>`;
}

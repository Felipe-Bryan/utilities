export interface CheckboxProps {
  id: string;
  label: string;
  value: string;
  checked?: boolean;
  switch?: boolean;
  disabled?: boolean;
  inline?: boolean;
}

export function Checkbox(props: CheckboxProps) {
  return `<div class="form-check${props.switch ? ' form-switch' : ''}${props.inline ? ' form-check-inline' : ''}">
  <input 
    class="form-check-input" 
    type="checkbox" 
    value="${props.value}" 
    id="${props.id}"
    ${props.switch ? ' role="switch" ' : ''} 
    ${props.checked ? ' checked ' : ''}
    ${props.disabled ? ' disabled' : ''}>
  <label class="form-check-label" for="${props.id}">
    ${props.label}
  </label>
</div>`;
}

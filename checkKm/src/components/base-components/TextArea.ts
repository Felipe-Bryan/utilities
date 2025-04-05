export interface TextAreaProps {
  id: string;
  label: string;
  placeholder: string;
  additionalClass?: string;
  value?: string;
}

export function TextArea(props: TextAreaProps) {
  return `
<div class="form-floating">
  <textarea 
    class="form-control${props.additionalClass ? ` ${props.additionalClass}` : ``}" 
    placeholder="${props.placeholder}" 
    style="height: 120px; width: 100%"
    value="${props.value ? `${props.value}` : ``}" 
    id="${props.id}"></textarea>
  <label for="${props.id}">${props.label}</label>
</div>`;
}

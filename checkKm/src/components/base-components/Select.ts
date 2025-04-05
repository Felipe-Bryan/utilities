export function Select(props: SelectProps) {
  let result = `
<div class="m-0 mb-2 p-0">
    <select class="form-select m-0${props.additionalClass ? ` ${props.additionalClass}` : ''}" id="${props.id}">
        <option selected disabled value="0">${props.title}</option>`;

  props.options.forEach((option) => {
    result += selectOption(option);
  });

  result += `
  </select>
</div>`;

  return result;
}

function selectOption(selectOption: SelectOptionProps) {
  return `<option value="${selectOption.value}">${selectOption.name}</option>`;
}

export interface SelectOptionProps {
  value: string;
  name: string;
}

export interface SelectProps {
  id: string;
  title: string;
  options: SelectOptionProps[];
  additionalClass?: string;
}

export function checkSelectedValue(value: string) {
  const options = document.querySelectorAll('option');

  options.forEach((option) => {
    option.removeAttribute('selected');

    if (option.value === value) {
      option.setAttribute('selected', '');
    }
  });
}

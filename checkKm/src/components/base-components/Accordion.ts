export function Accordion(id: string) {
  return `<div class="accordion mb-2" id="${id}"></div>`;
}

interface AccordionButtonProps {
  id: string;
  name: string;
  parentId: string;
}

export function AccordionButton(props: AccordionButtonProps) {
  return `
<div class="accordion-Button">
    <h2 class="accordion-header">
        <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#${props.id}"
            aria-expanded="false"
            aria-controls="${props.id}">
            ${props.name}
        </button>
    </h2>
    <div id="${props.id}" class="accordion-collapse collapse" data-bs-parent="#${props.parentId}">
        <div class="accordion-body p-0 ${props.parentId}" id="content-${props.id}"></div>
    </div>
</div>`;
}

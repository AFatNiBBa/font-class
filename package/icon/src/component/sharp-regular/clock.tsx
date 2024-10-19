
import { Icon } from "../../index";

/**
 * A component that renders the `clock` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock?s=sharp-regular clock}
 * @preview ![clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDY0IDI1NkEyMDggMjA4IDAgMSAxIDQ4IDI1NmEyMDggMjA4IDAgMSAxIDQxNiAwek0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTIzMiAxMjBsMCAxMzYgMCAxMi44IDEwLjcgNy4xIDk2IDY0IDIwIDEzLjMgMjYuNi0zOS45LTIwLTEzLjNMMjgwIDI0My4yIDI4MCAxMjBsMC0yNC00OCAwIDAgMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Clock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136 0 12.8 10.7 7.1 96 64 20 13.3 26.6-39.9-20-13.3L280 243.2 280 120l0-24-48 0 0 24z" />
    </Icon>
);

export default Clock;
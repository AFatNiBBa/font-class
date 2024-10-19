
import { Icon } from "../../index";

/**
 * A component that renders the `clock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock?s=sharp-solid clock}
 * @preview ![clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDBhMjU2IDI1NiAwIDEgMSAwIDUxMkEyNTYgMjU2IDAgMSAxIDI1NiAwek0yMzIgMTIwbDAgMTM2IDAgMTIuOCAxMC43IDcuMSA5NiA2NCAyMCAxMy4zIDI2LjYtMzkuOS0yMC0xMy4zTDI4MCAyNDMuMiAyODAgMTIwbDAtMjQtNDggMCAwIDI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Clock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136 0 12.8 10.7 7.1 96 64 20 13.3 26.6-39.9-20-13.3L280 243.2 280 120l0-24-48 0 0 24z" />
    </Icon>
);

export default Clock;
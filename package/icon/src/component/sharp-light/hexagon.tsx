
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon?s=sharp-light hexagon}
 * @preview ![hexagon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTQ2LjYgNDQ4bDIxOC45IDBMNDc1LjEgMjU2IDM2NS40IDY0IDE0Ni42IDY0IDM2LjkgMjU2IDE0Ni42IDQ0OHpNMCAyNTZMMTI4IDMybDI1NiAwTDUxMiAyNTYgMzg0IDQ4MGwtMjU2IDBMMCAyNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Hexagon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M146.6 448l218.9 0L475.1 256 365.4 64 146.6 64 36.9 256 146.6 448zM0 256L128 32l256 0L512 256 384 480l-256 0L0 256z" />
    </Icon>
);

export default Hexagon;
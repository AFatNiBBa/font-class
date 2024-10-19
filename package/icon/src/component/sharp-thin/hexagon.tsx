
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon?s=sharp-thin hexagon}
 * @preview ![hexagon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTM3LjMgNDY0bDIzNy40IDBMNDkzLjYgMjU2IDM3NC43IDQ4IDEzNy4zIDQ4IDE4LjQgMjU2IDEzNy4zIDQ2NHpNMCAyNTZMMTI4IDMybDI1NiAwTDUxMiAyNTYgMzg0IDQ4MGwtMjU2IDBMMCAyNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Hexagon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M137.3 464l237.4 0L493.6 256 374.7 48 137.3 48 18.4 256 137.3 464zM0 256L128 32l256 0L512 256 384 480l-256 0L0 256z" />
    </Icon>
);

export default Hexagon;
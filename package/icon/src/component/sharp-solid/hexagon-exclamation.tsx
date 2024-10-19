
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-exclamation` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-exclamation?s=sharp-solid hexagon-exclamation}
 * @preview ![hexagon-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNTZMMTI4IDMybDI1NiAwTDUxMiAyNTYgMzg0IDQ4MGwtMjU2IDBMMCAyNTZ6TTI4MCAxMjhsLTQ4IDAgMCAyNCAwIDExMiAwIDI0IDQ4IDAgMC0yNCAwLTExMiAwLTI0ek0yMzIgMzIwbDAgNDggNDggMCAwLTQ4LTQ4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const HexagonExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256L128 32l256 0L512 256 384 480l-256 0L0 256zM280 128l-48 0 0 24 0 112 0 24 48 0 0-24 0-112 0-24zM232 320l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default HexagonExclamation;
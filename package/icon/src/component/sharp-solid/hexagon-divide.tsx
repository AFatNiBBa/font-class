
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-divide` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-divide?s=sharp-solid hexagon-divide}
 * @preview ![hexagon-divide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNTZMMTI4IDMybDI1NiAwTDUxMiAyNTYgMzg0IDQ4MGwtMjU2IDBMMCAyNTZ6TTI4OCAxMjhsLTY0IDAgMCA2NCA2NCAwIDAtNjR6TTE2OCAyMzJsLTI0IDAgMCA0OCAyNCAwIDE3NiAwIDI0IDAgMC00OC0yNCAwLTE3NiAwem01NiA4OGwwIDY0IDY0IDAgMC02NC02NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HexagonDivide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256L128 32l256 0L512 256 384 480l-256 0L0 256zM288 128l-64 0 0 64 64 0 0-64zM168 232l-24 0 0 48 24 0 176 0 24 0 0-48-24 0-176 0zm56 88l0 64 64 0 0-64-64 0z" />
    </Icon>
);

export default HexagonDivide;
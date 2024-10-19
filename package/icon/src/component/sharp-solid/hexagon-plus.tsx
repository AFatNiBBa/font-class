
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-plus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-plus?s=sharp-solid hexagon-plus}
 * @preview ![hexagon-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNTZMMTI4IDMybDI1NiAwTDUxMiAyNTYgMzg0IDQ4MGwtMjU2IDBMMCAyNTZ6TTIzMiAzNjhsNDggMCAwLTI0IDAtNjQgNjQgMCAyNCAwIDAtNDgtMjQgMC02NCAwIDAtNjQgMC0yNC00OCAwIDAgMjQgMCA2NC02NCAwLTI0IDAgMCA0OCAyNCAwIDY0IDAgMCA2NCAwIDI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HexagonPlus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256L128 32l256 0L512 256 384 480l-256 0L0 256zM232 368l48 0 0-24 0-64 64 0 24 0 0-48-24 0-64 0 0-64 0-24-48 0 0 24 0 64-64 0-24 0 0 48 24 0 64 0 0 64 0 24z" />
    </Icon>
);

export default HexagonPlus;

import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-minus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-minus?s=sharp-solid hexagon-minus}
 * @preview ![hexagon-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNTZMMTI4IDMybDI1NiAwTDUxMiAyNTYgMzg0IDQ4MGwtMjU2IDBMMCAyNTZ6bTE4NC0yNGwtMjQgMCAwIDQ4IDI0IDAgMTQ0IDAgMjQgMCAwLTQ4LTI0IDAtMTQ0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const HexagonMinus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256L128 32l256 0L512 256 384 480l-256 0L0 256zm184-24l-24 0 0 48 24 0 144 0 24 0 0-48-24 0-144 0z" />
    </Icon>
);

export default HexagonMinus;
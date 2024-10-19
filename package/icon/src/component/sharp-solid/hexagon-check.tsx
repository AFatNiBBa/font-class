
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-check?s=sharp-solid hexagon-check}
 * @preview ![hexagon-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNTZMMTI4IDMybDI1NiAwTDUxMiAyNTYgMzg0IDQ4MGwtMjU2IDBMMCAyNTZ6bTM2OS00N2wxNy0xN0wzNTIgMTU4LjFsLTE3IDE3LTExMSAxMTEtNDctNDctMTctMTdMMTI2LjEgMjU2bDE3IDE3IDY0IDY0IDE3IDE3IDE3LTE3TDM2OSAyMDl6Ii8+PC9zdmc+|width=32|height=32)
 */
const HexagonCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256L128 32l256 0L512 256 384 480l-256 0L0 256zm369-47l17-17L352 158.1l-17 17-111 111-47-47-17-17L126.1 256l17 17 64 64 17 17 17-17L369 209z" />
    </Icon>
);

export default HexagonCheck;
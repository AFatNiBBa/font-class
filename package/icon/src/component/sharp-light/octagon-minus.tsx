
import { Icon } from "../../index";

/**
 * A component that renders the `octagon-minus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-minus?s=sharp-light octagon-minus}
 * @preview ![octagon-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMzM4LjdsMC0xNjUuNUwxNzMuMyAzMmwxNjUuNSAwTDQ4MCAxNzMuM2wwIDE2NS41TDMzOC43IDQ4MGwtMTY1LjUgMEwzMiAzMzguN3pNMTYwIDBMMCAxNjAgMCAzNTIgMTYwIDUxMmwxOTIgMEw1MTIgMzUybDAtMTkyTDM1MiAwIDE2MCAwem0wIDI0MGwtMTYgMCAwIDMyIDE2IDAgMTkyIDAgMTYgMCAwLTMyLTE2IDAtMTkyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const OctagonMinus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 338.7l0-165.5L173.3 32l165.5 0L480 173.3l0 165.5L338.7 480l-165.5 0L32 338.7zM160 0L0 160 0 352 160 512l192 0L512 352l0-192L352 0 160 0zm0 240l-16 0 0 32 16 0 192 0 16 0 0-32-16 0-192 0z" />
    </Icon>
);

export default OctagonMinus;
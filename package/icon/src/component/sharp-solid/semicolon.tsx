
import { Icon } from "../../index";

/**
 * A component that renders the `semicolon` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/semicolon?s=sharp-solid semicolon}
 * @preview ![semicolon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYwIDY0bDAgMTI4TDMyIDE5MiAzMiA2NGwxMjggMHpNMTYgNTEyTDQ4IDI4OGwxMTIgMEw4MCA1MTJsLTY0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Semicolon: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M160 64l0 128L32 192 32 64l128 0zM16 512L48 288l112 0L80 512l-64 0z" />
    </Icon>
);

export default Semicolon;
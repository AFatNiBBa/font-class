
import { Icon } from "../../index";

/**
 * A component that renders the `octagon-minus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-minus?s=sharp-solid octagon-minus}
 * @preview ![octagon-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAxNjBMMCAzNTIgMTYwIDUxMmwxOTIgMEw1MTIgMzUybDAtMTkyTDM1MiAwIDE2MCAwIDAgMTYwem0xODQgNzJsMTQ0IDAgMjQgMCAwIDQ4LTI0IDAtMTQ0IDAtMjQgMCAwLTQ4IDI0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const OctagonMinus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 160L0 352 160 512l192 0L512 352l0-192L352 0 160 0 0 160zm184 72l144 0 24 0 0 48-24 0-144 0-24 0 0-48 24 0z" />
    </Icon>
);

export default OctagonMinus;
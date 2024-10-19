
import { Icon } from "../../index";

/**
 * A component that renders the `octagon-plus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-plus?s=sharp-solid octagon-plus}
 * @preview ![octagon-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAxNjBMMCAzNTIgMTYwIDUxMmwxOTIgMEw1MTIgMzUybDAtMTkyTDM1MiAwIDE2MCAwIDAgMTYwek0yMzIgMzY4bDAtMjQgMC02NC02NCAwLTI0IDAgMC00OCAyNCAwIDY0IDAgMC02NCAwLTI0IDQ4IDAgMCAyNCAwIDY0IDY0IDAgMjQgMCAwIDQ4LTI0IDAtNjQgMCAwIDY0IDAgMjQtNDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const OctagonPlus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 160L0 352 160 512l192 0L512 352l0-192L352 0 160 0 0 160zM232 368l0-24 0-64-64 0-24 0 0-48 24 0 64 0 0-64 0-24 48 0 0 24 0 64 64 0 24 0 0 48-24 0-64 0 0 64 0 24-48 0z" />
    </Icon>
);

export default OctagonPlus;
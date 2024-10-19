
import { Icon, generic } from "../../index";

/**
 * A component that renders the `triangle-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle-exclamation?s=sharp-duotone-solid triangle-exclamation}
 * @preview ![triangle-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4MGw1MTIgMEwyNTYgMzIgMCA0ODB6TTIzMiAxOTJsNDggMCAwIDI0IDAgMTEyIDAgMjQtNDggMCAwLTI0IDAtMTEyIDAtMjR6bTAgMTkybDQ4IDAgMCA0OC00OCAwIDAtNDh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODAgMjE2bDAtMjQtNDggMCAwIDI0IDAgMTEyIDAgMjQgNDggMCAwLTI0IDAtMTEyem0wIDE2OGwtNDggMCAwIDQ4IDQ4IDAgMC00OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const TriangleExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 480l512 0L256 32 0 480zM232 192l48 0 0 24 0 112 0 24-48 0 0-24 0-112 0-24zm0 192l48 0 0 48-48 0 0-48z" />
            <path d="M280 216l0-24-48 0 0 24 0 112 0 24 48 0 0-24 0-112zm0 168l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default TriangleExclamation;
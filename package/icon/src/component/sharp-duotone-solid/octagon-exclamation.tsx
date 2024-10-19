
import { Icon, generic } from "../../index";

/**
 * A component that renders the `octagon-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-exclamation?s=sharp-duotone-solid octagon-exclamation}
 * @preview ![octagon-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MEwxNjAgMCAzNTIgMCA1MTIgMTYwbDAgMTkyTDM1MiA1MTJsLTE5MiAwTDAgMzUyIDAgMTYwem0yMzItMzJsMCAyNCAwIDExMiAwIDI0IDQ4IDAgMC0yNCAwLTExMiAwLTI0LTQ4IDB6bTAgMTkybDAgNDggNDggMCAwLTQ4LTQ4IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODAgMTUybDAtMjQtNDggMCAwIDI0IDAgMTEyIDAgMjQgNDggMCAwLTI0IDAtMTEyem0wIDE2OGwtNDggMCAwIDQ4IDQ4IDAgMC00OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const OctagonExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160L160 0 352 0 512 160l0 192L352 512l-192 0L0 352 0 160zm232-32l0 24 0 112 0 24 48 0 0-24 0-112 0-24-48 0zm0 192l0 48 48 0 0-48-48 0z" />
            <path d="M280 152l0-24-48 0 0 24 0 112 0 24 48 0 0-24 0-112zm0 168l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default OctagonExclamation;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `octagon-divide` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-divide?s=sharp-duotone-solid octagon-divide}
 * @preview ![octagon-divide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MEwxNjAgMCAzNTIgMCA1MTIgMTYwbDAgMTkyTDM1MiA1MTJsLTE5MiAwTDAgMzUyIDAgMTYwem0xNDQgNzJsMCA0OCAyNCAwIDE3NiAwIDI0IDAgMC00OC0yNCAwLTE3NiAwLTI0IDB6bTgwLTEwNGwwIDY0IDY0IDAgMC02NC02NCAwem0wIDE5MmwwIDY0IDY0IDAgMC02NC02NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjI0IDEyOGw2NCAwIDAgNjQtNjQgMCAwLTY0ek0xNDQgMjMybDI0IDAgMTc2IDAgMjQgMCAwIDQ4LTI0IDAtMTc2IDAtMjQgMCAwLTQ4em0xNDQgODhsMCA2NC02NCAwIDAtNjQgNjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const OctagonDivide: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160L160 0 352 0 512 160l0 192L352 512l-192 0L0 352 0 160zm144 72l0 48 24 0 176 0 24 0 0-48-24 0-176 0-24 0zm80-104l0 64 64 0 0-64-64 0zm0 192l0 64 64 0 0-64-64 0z" />
            <path d="M224 128l64 0 0 64-64 0 0-64zM144 232l24 0 176 0 24 0 0 48-24 0-176 0-24 0 0-48zm144 88l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default OctagonDivide;
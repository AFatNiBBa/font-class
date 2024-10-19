
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ruble-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruble-sign?s=sharp-duotone-solid ruble-sign}
 * @preview ![ruble-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM1MmwwIDY0IDY0IDAgMC02NEwwIDM1MnptMTI4IDBsMCA2NCAxOTIgMCAwLTY0LTE5MiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgMzJsMzIgMCAxNDQgMGM3OS41IDAgMTQ0IDY0LjUgMTQ0IDE0NHMtNjQuNSAxNDQtMTQ0IDE0NGwtMTEyIDAgMCAxNjAtNjQgMCAwLTE2MEwwIDMyMGwwLTY0IDY0IDBMNjQgNjRsMC0zMnptNjQgMjI0bDExMiAwYzQ0LjIgMCA4MC0zNS44IDgwLTgwcy0zNS44LTgwLTgwLTgwTDEyOCA5NmwwIDE2MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const RubleSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 352l0 64 64 0 0-64L0 352zm128 0l0 64 192 0 0-64-192 0z" />
            <path d="M64 32l32 0 144 0c79.5 0 144 64.5 144 144s-64.5 144-144 144l-112 0 0 160-64 0 0-160L0 320l0-64 64 0L64 64l0-32zm64 224l112 0c44.2 0 80-35.8 80-80s-35.8-80-80-80L128 96l0 160z" />
    </Icon>
);

export default RubleSign;
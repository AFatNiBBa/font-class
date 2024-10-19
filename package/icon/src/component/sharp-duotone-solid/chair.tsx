
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chair` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chair?s=sharp-duotone-solid chair}
 * @preview ![chair](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAzODRsMCA5NiAwIDMyIDY0IDAgMC0zMiAwLTk2LTY0IDB6TTY0IDBsMCA0OCAwIDI0MCA0OCAwIDAtMjQwIDQwIDAgMCAyNDAgNDggMCAwLTI0MCA0OCAwIDAgMjQwIDQ4IDAgMC0yNDAgNDAgMCAwIDI0MCA0OCAwIDAtMjQwIDAtNDhMMzM2IDAgMTEyIDAgNjQgMHpNMzUyIDM4NGwwIDk2IDAgMzIgNjQgMCAwLTMyIDAtOTYtNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMzUydjMySDQ0OFYzNTJsLTMyLTY0SDMyTDAgMzUyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Chair: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 384l0 96 0 32 64 0 0-32 0-96-64 0zM64 0l0 48 0 240 48 0 0-240 40 0 0 240 48 0 0-240 48 0 0 240 48 0 0-240 40 0 0 240 48 0 0-240 0-48L336 0 112 0 64 0zM352 384l0 96 0 32 64 0 0-32 0-96-64 0z" />
            <path d="M0 352v32H448V352l-32-64H32L0 352z" />
    </Icon>
);

export default Chair;
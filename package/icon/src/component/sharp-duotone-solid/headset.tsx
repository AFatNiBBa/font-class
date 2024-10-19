
import { Icon, generic } from "../../index";

/**
 * A component that renders the `headset` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headset?s=sharp-duotone-solid headset}
 * @preview ![headset](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmwwIDQwIDAgMjQgNDggMCAwLTI0IDAtNDBDNDggMTQxLjEgMTQxLjEgNDggMjU2IDQ4czIwOCA5My4xIDIwOCAyMDhsMCAxODQuMUwzMjAgNDQwbDAtMjQtODAgMGMtMjYuNSAwLTQ4IDIxLjUtNDggNDhzMjEuNSA0OCA0OCA0OGw4MCAwIDAtMjQgMTY4IC4xIDI0IDAgMC0yNEw1MTIgMjU2QzUxMiAxMTQuNiAzOTcuNCAwIDI1NiAwUzAgMTE0LjYgMCAyNTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xOTIgMjI0TDgwIDIyNGwwIDE2MCAxMTIgMCAwLTE2MHptMjQwIDBsLTExMiAwIDAgMTYwIDExMiAwIDAtMTYweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Headset: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256l0 40 0 24 48 0 0-24 0-40C48 141.1 141.1 48 256 48s208 93.1 208 208l0 184.1L320 440l0-24-80 0c-26.5 0-48 21.5-48 48s21.5 48 48 48l80 0 0-24 168 .1 24 0 0-24L512 256C512 114.6 397.4 0 256 0S0 114.6 0 256z" />
            <path d="M192 224L80 224l0 160 112 0 0-160zm240 0l-112 0 0 160 112 0 0-160z" />
    </Icon>
);

export default Headset;
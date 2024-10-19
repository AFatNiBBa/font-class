
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-rotate-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-rotate-left?s=sharp-duotone-solid clock-rotate-left}
 * @preview ![clock-rotate-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2TDAgMTkybDE3NiAwLTYzLjUtNjMuNUMxNDcuNyA4OC45IDE5OC45IDY0IDI1NiA2NGMxMDYgMCAxOTIgODYgMTkyIDE5MnMtODYgMTkyLTE5MiAxOTJjLTQwLjggMC03OC42LTEyLjctMTA5LjctMzQuNGwtMzYuNiA1Mi41QzE1MS4yIDQ5NSAyMDEuNyA1MTIgMjU2IDUxMmMxNDEuNCAwIDI1Ni0xMTQuNiAyNTYtMjU2UzM5Ny40IDAgMjU2IDBDMTgxLjIgMCAxMTMuOSAzMi4xIDY3LjIgODMuMkwwIDE2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjgwIDEyOGwwIDI0IDAgOTQuMSA1NyA1NyAxNyAxN0wzMjAgMzUzLjlsLTE3LTE3LTY0LTY0LTctNyAwLTkuOSAwLTEwNCAwLTI0IDQ4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const ClockRotateLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 16L0 192l176 0-63.5-63.5C147.7 88.9 198.9 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4l-36.6 52.5C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C181.2 0 113.9 32.1 67.2 83.2L0 16z" />
            <path d="M280 128l0 24 0 94.1 57 57 17 17L320 353.9l-17-17-64-64-7-7 0-9.9 0-104 0-24 48 0z" />
    </Icon>
);

export default ClockRotateLeft;
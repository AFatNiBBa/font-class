
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-fist` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-fist?s=sharp-duotone-solid hand-fist}
 * @preview ![hand-fist](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAxNzZsMCA3Ny43YzAgNDIuNCAxNi45IDgzLjEgNDYuOSAxMTMuMWwyLjMgMi4zYzEzLjcgMTMuNyAyOS42IDI0LjYgNDYuOSAzMi41TDEyOCA1MTJsMjI0IDAgMC0xMjhjMzguOS0yOS4yIDY0LTc1LjcgNjQtMTI4bC05NiAwIDAtMzItNjQgMCAwIDQ4IDAgMTYtMTYgMC0xMTIgMC0xNiAwIDAtMzIgMTYgMCA5NiAwIDAtMzIgMC00OEwzMiAxNzZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNjAgMGwwIDE0NCA2NCAwTDIyNCAwIDE2MCAwek0xMjggMzJMNjQgMzJsMCAxMTIgNjQgMCAwLTExMnptMTkyIDBsLTY0IDAgMCAxNjAgNjQgMCAwLTE2MHptOTYgNjRsLTY0IDAgMCAxMjggNjQgMCAwLTEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const HandFist: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 176l0 77.7c0 42.4 16.9 83.1 46.9 113.1l2.3 2.3c13.7 13.7 29.6 24.6 46.9 32.5L128 512l224 0 0-128c38.9-29.2 64-75.7 64-128l-96 0 0-32-64 0 0 48 0 16-16 0-112 0-16 0 0-32 16 0 96 0 0-32 0-48L32 176z" />
            <path d="M160 0l0 144 64 0L224 0 160 0zM128 32L64 32l0 112 64 0 0-112zm192 0l-64 0 0 160 64 0 0-160zm96 64l-64 0 0 128 64 0 0-128z" />
    </Icon>
);

export default HandFist;
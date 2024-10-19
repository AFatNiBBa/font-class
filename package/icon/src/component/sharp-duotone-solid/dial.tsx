
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dial` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial?s=sharp-duotone-solid dial}
 * @preview ![dial](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmwwIDY0IDY0IDAgMC02NEwwIDI1NnpNNjQgNjRsMCA2NCA2NCAwIDAtNjRMNjQgNjR6bTAgMzg0bDAgNjQgNjQgMCAwLTY0LTY0IDB6TTI1NiAwbDAgNjQgNjQgMCAwLTY0TDI1NiAwek00NDggNjRsMCA2NCA2NCAwIDAtNjQtNjQgMHptMCAzODRsMCA2NCA2NCAwIDAtNjQtNjQgMHptNjQtMTkybDAgNjQgNjQgMCAwLTY0LTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zODMuMiAxNTguNWMtNjIuNi00Ni4yLTE1MS4zLTQxLTIwOCAxNS43Yy02Mi41IDYyLjUtNjIuNSAxNjMuOCAwIDIyNi4zczE2My44IDYyLjUgMjI2LjMgMGM1Ni43LTU2LjcgNjEuOS0xNDUuNCAxNS43LTIwOEwzMDUuMiAzMDQuM2wtMTcgMTctMzMuOS0zMy45IDE3LTE3TDM4My4yIDE1OC41eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Dial: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256l0 64 64 0 0-64L0 256zM64 64l0 64 64 0 0-64L64 64zm0 384l0 64 64 0 0-64-64 0zM256 0l0 64 64 0 0-64L256 0zM448 64l0 64 64 0 0-64-64 0zm0 384l0 64 64 0 0-64-64 0zm64-192l0 64 64 0 0-64-64 0z" />
            <path d="M383.2 158.5c-62.6-46.2-151.3-41-208 15.7c-62.5 62.5-62.5 163.8 0 226.3s163.8 62.5 226.3 0c56.7-56.7 61.9-145.4 15.7-208L305.2 304.3l-17 17-33.9-33.9 17-17L383.2 158.5z" />
    </Icon>
);

export default Dial;
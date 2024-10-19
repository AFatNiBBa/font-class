
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dial-med` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial-med?s=sharp-duotone-solid dial-med}
 * @preview ![dial-med](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmwwIDY0IDY0IDAgMC02NEwwIDI1NnpNNjQgNjRsMCA2NCA2NCAwIDAtNjRMNjQgNjR6bTAgMzg0bDAgNjQgNjQgMCAwLTY0LTY0IDB6TTI1NiAwbDAgNjQgNjQgMCAwLTY0TDI1NiAwek00NDggNjRsMCA2NCA2NCAwIDAtNjQtNjQgMHptMCAzODRsMCA2NCA2NCAwIDAtNjQtNjQgMHptNjQtMTkybDAgNjQgNjQgMCAwLTY0LTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNjQgMTI5Yy03NyAxMS42LTEzNiA3OC0xMzYgMTU4LjJjMCA4OC40IDcxLjYgMTYwIDE2MCAxNjBzMTYwLTcxLjYgMTYwLTE2MEM0NDggMjA3IDM4OSAxNDAuNiAzMTIgMTI5bDAgMTU4LjIgMCAyNC00OCAwIDAtMjRMMjY0IDEyOXoiLz48L3N2Zz4=|width=32|height=32)
 */
const DialMed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256l0 64 64 0 0-64L0 256zM64 64l0 64 64 0 0-64L64 64zm0 384l0 64 64 0 0-64-64 0zM256 0l0 64 64 0 0-64L256 0zM448 64l0 64 64 0 0-64-64 0zm0 384l0 64 64 0 0-64-64 0zm64-192l0 64 64 0 0-64-64 0z" />
            <path d="M264 129c-77 11.6-136 78-136 158.2c0 88.4 71.6 160 160 160s160-71.6 160-160C448 207 389 140.6 312 129l0 158.2 0 24-48 0 0-24L264 129z" />
    </Icon>
);

export default DialMed;
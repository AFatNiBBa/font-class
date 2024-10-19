
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-notch` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-notch?s=duotone circle-notch}
 * @preview ![circle-notch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjIuNyAzMi4xYzUgMTYuOS00LjYgMzQuOC0yMS41IDM5LjhDMTIxLjggOTUuNiA2NCAxNjkuMSA2NCAyNTZjMCAxMDYgODYgMTkyIDE5MiAxOTJzMTkyLTg2IDE5Mi0xOTJjMC04Ni45LTU3LjgtMTYwLjQtMTM3LjEtMTg0LjFjLTE2LjktNS0yNi42LTIyLjktMjEuNS0zOS44czIyLjktMjYuNiAzOS44LTIxLjVDNDM0LjkgNDIuMSA1MTIgMTQwIDUxMiAyNTZjMCAxNDEuNC0xMTQuNiAyNTYtMjU2IDI1NlMwIDM5Ny40IDAgMjU2QzAgMTQwIDc3LjEgNDIuMSAxODIuOSAxMC42YzE2LjktNSAzNC44IDQuNiAzOS44IDIxLjV6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleNotch: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z" />
    </Icon>
);

export default CircleNotch;
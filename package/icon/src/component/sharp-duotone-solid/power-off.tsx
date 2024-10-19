
import { Icon, generic } from "../../index";

/**
 * A component that renders the `power-off` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/power-off?s=sharp-duotone-solid power-off}
 * @preview ![power-off](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgMGwwIDMyIDAgMjI0IDAgMzIgNjQgMCAwLTMyIDAtMjI0IDAtMzJMMjI0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNDMuNSAxMjAuNkMxMDQuNyAxNTIuOSA4MCAyMDEuNiA4MCAyNTZjMCA5Ny4yIDc4LjggMTc2IDE3NiAxNzZzMTc2LTc4LjggMTc2LTE3NmMwLTU0LjQtMjQuNy0xMDMuMS02My41LTEzNS40bDQwLjktNDkuMkM0NjIuMiAxMTUuNCA0OTYgMTgxLjggNDk2IDI1NmMwIDEzMi41LTEwNy41IDI0MC0yNDAgMjQwUzE2IDM4OC41IDE2IDI1NmMwLTc0LjIgMzMuNy0xNDAuNiA4Ni42LTE4NC42bDQwLjkgNDkuMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const PowerOff: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 0l0 32 0 224 0 32 64 0 0-32 0-224 0-32L224 0z" />
            <path d="M143.5 120.6C104.7 152.9 80 201.6 80 256c0 97.2 78.8 176 176 176s176-78.8 176-176c0-54.4-24.7-103.1-63.5-135.4l40.9-49.2C462.2 115.4 496 181.8 496 256c0 132.5-107.5 240-240 240S16 388.5 16 256c0-74.2 33.7-140.6 86.6-184.6l40.9 49.2z" />
    </Icon>
);

export default PowerOff;
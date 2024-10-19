
import { Icon, generic } from "../../index";

/**
 * A component that renders the `compass-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compass-slash?s=sharp-duotone-solid compass-slash}
 * @preview ![compass-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAyNTZjMC0zMy42IDYuNS02NS44IDE4LjMtOTUuMkwyMjguMSAyNzUuNyAxOTIgMzg0bDEyMS45LTQwLjZMNDY4LjEgNDY0LjhDNDI2LjMgNDk0LjUgMzc1LjIgNTEyIDMyMCA1MTJDMTc4LjYgNTEyIDY0IDM5Ny40IDY0IDI1NnpNMTMzLjQgODAuOEMxODAuMSAzMS4xIDI0Ni40IDAgMzIwIDBDNDYxLjQgMCA1NzYgMTE0LjYgNTc2IDI1NmMwIDUwLjYtMTQuNyA5Ny43LTQwIDEzNy40TDM5NS44IDI4NC41IDQ0OCAxMjggMjcwLjQgMTg3LjJjLTQ1LjctMzUuNS05MS40LTcwLjktMTM3LjEtMTA2LjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yOS40IC4xbDE5IDE0LjdMNjIwLjkgNDU5LjNsMTkgMTQuNy0yOS40IDM3LjktMTktMTQuN0wxOSA1Mi43IDAgMzggMjkuNCAuMXoiLz48L3N2Zz4=|width=32|height=32)
 */
const CompassSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 256c0-33.6 6.5-65.8 18.3-95.2L228.1 275.7 192 384l121.9-40.6L468.1 464.8C426.3 494.5 375.2 512 320 512C178.6 512 64 397.4 64 256zM133.4 80.8C180.1 31.1 246.4 0 320 0C461.4 0 576 114.6 576 256c0 50.6-14.7 97.7-40 137.4L395.8 284.5 448 128 270.4 187.2c-45.7-35.5-91.4-70.9-137.1-106.4z" />
            <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default CompassSlash;
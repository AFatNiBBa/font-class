
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chevrons-down` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-down?s=regular chevrons-down}
 * @preview ![chevrons-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDcuNDA2IDI2NS4zNDRDMjE2LjcxOSAyNzQuMjE5IDIzMS4yODEgMjc0LjIxOSAyNDAuNTk0IDI2NS4zNDRMNDI0LjU5OSA4OS4zNDRDNDM0LjE2MiA4MC4xODggNDM0LjUwNiA2NSA0MjUuMzQ5IDU1LjQwNkM0MjAuNjMgNTAuNDY5IDQxNC4zMTggNDggNDA4LjAwNSA0OEM0MDIuMDM2IDQ4IDM5Ni4wNjcgNTAuMjE5IDM5MS40MTEgNTQuNjU2TDIyNCAyMTQuNzgxTDU2LjU4OSA1NC42NTZDNDYuOTk1IDQ1LjUzMSAzMS44MDcgNDUuODEyIDIyLjY1MSA1NS40MDZTMTMuODM4IDgwLjE4OCAyMy40MDEgODkuMzQ0TDIwNy40MDYgMjY1LjM0NFpNNDA4LjAwNSAyNDBDNDAyLjAzNiAyNDAgMzk2LjA2NyAyNDIuMjE5IDM5MS40MTEgMjQ2LjY1NkwyMjQgNDA2Ljc4MUw1Ni41ODkgMjQ2LjY1NkM0Ni45OTUgMjM3LjUzMSAzMS44MDcgMjM3LjgxMiAyMi42NTEgMjQ3LjQwNlMxMy44MzggMjcyLjE4OCAyMy40MDEgMjgxLjM0NEwyMDcuNDA2IDQ1Ny4zNDRDMjE2LjcxOSA0NjYuMjE5IDIzMS4yODEgNDY2LjIxOSAyNDAuNTk0IDQ1Ny4zNDRMNDI0LjU5OSAyODEuMzQ0QzQzNC4xNjIgMjcyLjE4OCA0MzQuNTA2IDI1NyA0MjUuMzQ5IDI0Ny40MDZDNDIwLjYzIDI0Mi40NjkgNDE0LjMxOCAyNDAgNDA4LjAwNSAyNDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ChevronsDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M207.406 265.344C216.719 274.219 231.281 274.219 240.594 265.344L424.599 89.344C434.162 80.188 434.506 65 425.349 55.406C420.63 50.469 414.318 48 408.005 48C402.036 48 396.067 50.219 391.411 54.656L224 214.781L56.589 54.656C46.995 45.531 31.807 45.812 22.651 55.406S13.838 80.188 23.401 89.344L207.406 265.344ZM408.005 240C402.036 240 396.067 242.219 391.411 246.656L224 406.781L56.589 246.656C46.995 237.531 31.807 237.812 22.651 247.406S13.838 272.188 23.401 281.344L207.406 457.344C216.719 466.219 231.281 466.219 240.594 457.344L424.599 281.344C434.162 272.188 434.506 257 425.349 247.406C420.63 242.469 414.318 240 408.005 240Z" />
        </Icon>
    </>
}

import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-code` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-code?s=regular file-code}
 * @preview ![file-code](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjIuMTQxIDI1Ny44NDRDMTU0LjMyOCAyNTAuMDMxIDE0MS42NzIgMjUwLjAzMSAxMzMuODU5IDI1Ny44NDRMODUuODU5IDMwNS44NDRDNzguMDQ3IDMxMy42NTYgNzguMDQ3IDMyNi4zNDQgODUuODU5IDMzNC4xNTZMMTMzLjg1OSAzODIuMTU2QzEzNy43NjYgMzg2LjA2MiAxNDIuODc1IDM4OCAxNDggMzg4UzE1OC4yMzQgMzg2LjA2MiAxNjIuMTQxIDM4Mi4xNTZDMTY5Ljk1MyAzNzQuMzQ0IDE2OS45NTMgMzYxLjY1NiAxNjIuMTQxIDM1My44NDRMMTI4LjI4MSAzMjBMMTYyLjE0MSAyODYuMTU2QzE2OS45NTMgMjc4LjM0NCAxNjkuOTUzIDI2NS42NTYgMTYyLjE0MSAyNTcuODQ0Wk0zNjUuMjU2IDkzLjM4M0wyOTAuNjI3IDE4Ljc0NkMyNzguNjI1IDYuNzQyIDI2Mi4zNDggMCAyNDUuMzczIDBINjRDMjguNjU0IDAgMCAyOC42NTIgMCA2NEwwLjAyIDQ0OEMwLjAyIDQ4My4zNDQgMjguNjc0IDUxMiA2NC4wMiA1MTJIMzIwQzM1NS4xOTkgNTEyIDM4NCA0ODMuMTk5IDM4NCA0NDhWMTM4LjY0MUMzODQgMTIxLjY2NCAzNzcuMjU4IDEwNS4zODMgMzY1LjI1NiA5My4zODNaTTMzNi4wMDIgNDQ4QzMzNi4wMDIgNDU2LjgzNiAzMjguODM4IDQ2NCAzMjAuMDAyIDQ2NEg2NC4wMThDNTUuMTggNDY0IDQ4LjAxOCA0NTYuODM2IDQ4LjAxOCA0NDhMNDggNjQuMTI1QzQ4IDU1LjI4OSA1NS4xNjQgNDguMTI1IDY0IDQ4LjEyNUgyMjQuMDA4VjEyOEMyMjQuMDA4IDE0NS42NzIgMjM4LjMzNCAxNjAgMjU2LjAwOCAxNjBIMzM2LjAwMlY0NDhaTTIyMS44NTkgMjU3Ljg0NEMyMTQuMDQ3IDI2NS42NTYgMjE0LjA0NyAyNzguMzQ0IDIyMS44NTkgMjg2LjE1NkwyNTUuNzE5IDMyMEwyMjEuODU5IDM1My44NDRDMjE0LjA0NyAzNjEuNjU2IDIxNC4wNDcgMzc0LjM0NCAyMjEuODU5IDM4Mi4xNTZDMjI1Ljc2NiAzODYuMDYyIDIzMC44NzUgMzg4IDIzNiAzODhTMjQ2LjIzNCAzODYuMDYyIDI1MC4xNDEgMzgyLjE1NkwyOTguMTQxIDMzNC4xNTZDMzA1Ljk1MyAzMjYuMzQ0IDMwNS45NTMgMzEzLjY1NiAyOTguMTQxIDMwNS44NDRMMjUwLjE0MSAyNTcuODQ0QzI0Mi4zMjggMjUwLjAzMSAyMjkuNjcyIDI1MC4wMzEgMjIxLjg1OSAyNTcuODQ0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FileCode(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M162.141 257.844C154.328 250.031 141.672 250.031 133.859 257.844L85.859 305.844C78.047 313.656 78.047 326.344 85.859 334.156L133.859 382.156C137.766 386.062 142.875 388 148 388S158.234 386.062 162.141 382.156C169.953 374.344 169.953 361.656 162.141 353.844L128.281 320L162.141 286.156C169.953 278.344 169.953 265.656 162.141 257.844ZM365.256 93.383L290.627 18.746C278.625 6.742 262.348 0 245.373 0H64C28.654 0 0 28.652 0 64L0.02 448C0.02 483.344 28.674 512 64.02 512H320C355.199 512 384 483.199 384 448V138.641C384 121.664 377.258 105.383 365.256 93.383ZM336.002 448C336.002 456.836 328.838 464 320.002 464H64.018C55.18 464 48.018 456.836 48.018 448L48 64.125C48 55.289 55.164 48.125 64 48.125H224.008V128C224.008 145.672 238.334 160 256.008 160H336.002V448ZM221.859 257.844C214.047 265.656 214.047 278.344 221.859 286.156L255.719 320L221.859 353.844C214.047 361.656 214.047 374.344 221.859 382.156C225.766 386.062 230.875 388 236 388S246.234 386.062 250.141 382.156L298.141 334.156C305.953 326.344 305.953 313.656 298.141 305.844L250.141 257.844C242.328 250.031 229.672 250.031 221.859 257.844Z" />
        </Icon>
    </>
}
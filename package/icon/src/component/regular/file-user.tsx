
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-user` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-user?s=regular file-user}
 * @preview ![file-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjUuMjU2IDkzLjM4M0wyOTAuNjI3IDE4Ljc0NkMyNzguNjI1IDYuNzQyIDI2Mi4zNDggMCAyNDUuMzczIDBINjRDMjguNjU0IDAgMCAyOC42NTIgMCA2NEwwLjAyIDQ0OEMwLjAyIDQ4My4zNDQgMjguNjc0IDUxMiA2NC4wMiA1MTJIMzIwQzM1NS4xOTkgNTEyIDM4NCA0ODMuMTk5IDM4NCA0NDhWMTM4LjY0MUMzODQgMTIxLjY2NCAzNzcuMjU4IDEwNS4zODMgMzY1LjI1NiA5My4zODNaTTMzNi4wMDIgNDQ4QzMzNi4wMDIgNDU2LjgzNiAzMjguODM4IDQ2NCAzMjAuMDAyIDQ2NEgzMTguMzg3QzMxMC43MzQgNDE4LjYzNyAyNzEuNTM5IDM4NCAyMjQgMzg0SDE2MEMxMTIuNDYxIDM4NCA3My4yNjYgNDE4LjYzNyA2NS42MTMgNDY0SDY0LjAxOEM1NS4xOCA0NjQgNDguMDE4IDQ1Ni44MzYgNDguMDE4IDQ0OEw0OCA2NC4xMjVDNDggNTUuMjg5IDU1LjE2NCA0OC4xMjUgNjQgNDguMTI1SDIyNC4wMDhWMTI4QzIyNC4wMDggMTQ1LjY3MiAyMzguMzM0IDE2MCAyNTYuMDA4IDE2MEgzMzYuMDAyVjQ0OFpNMTkyIDIyNEMxNTYuNjU0IDIyNCAxMjggMjUyLjY1MiAxMjggMjg4QzEyOCAzMjMuMzQ0IDE1Ni42NTQgMzUyIDE5MiAzNTJTMjU2IDMyMy4zNDQgMjU2IDI4OEMyNTYgMjUyLjY1MiAyMjcuMzQ2IDIyNCAxOTIgMjI0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FileUser(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M365.256 93.383L290.627 18.746C278.625 6.742 262.348 0 245.373 0H64C28.654 0 0 28.652 0 64L0.02 448C0.02 483.344 28.674 512 64.02 512H320C355.199 512 384 483.199 384 448V138.641C384 121.664 377.258 105.383 365.256 93.383ZM336.002 448C336.002 456.836 328.838 464 320.002 464H318.387C310.734 418.637 271.539 384 224 384H160C112.461 384 73.266 418.637 65.613 464H64.018C55.18 464 48.018 456.836 48.018 448L48 64.125C48 55.289 55.164 48.125 64 48.125H224.008V128C224.008 145.672 238.334 160 256.008 160H336.002V448ZM192 224C156.654 224 128 252.652 128 288C128 323.344 156.654 352 192 352S256 323.344 256 288C256 252.652 227.346 224 192 224Z" />
        </Icon>
    </>
}
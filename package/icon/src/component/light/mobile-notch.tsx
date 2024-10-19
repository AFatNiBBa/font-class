
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-notch` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-notch?s=light mobile-notch}
 * @preview ![mobile-notch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggMEg5NkM2MC42NTQgMCAzMiAyOC42NTQgMzIgNjRWNDQ4QzMyIDQ4My4zNDYgNjAuNjU0IDUxMiA5NiA1MTJIMjg4QzMyMy4zNDYgNTEyIDM1MiA0ODMuMzQ2IDM1MiA0NDhWNjRDMzUyIDI4LjY1NCAzMjMuMzQ2IDAgMjg4IDBaTTE2MCAzMkgyMjRWNDhIMTYwVjMyWk0zMjAgNDQ4QzMyMCA0NjUuNjQ1IDMwNS42NDUgNDgwIDI4OCA0ODBIOTZDNzguMzU1IDQ4MCA2NCA0NjUuNjQ1IDY0IDQ0OFY2NEM2NCA0Ni4zNTUgNzguMzU1IDMyIDk2IDMySDEyOFY0OEMxMjggNjUuNjQxIDE0Mi4zNTkgODAgMTYwIDgwSDIyNEMyNDEuNjQxIDgwIDI1NiA2NS42NDEgMjU2IDQ4VjMySDI4OEMzMDUuNjQ1IDMyIDMyMCA0Ni4zNTUgMzIwIDY0VjQ0OFpNMjI0IDQwMEgxNjBDMTUxLjE2NCA0MDAgMTQ0IDQwNy4xNjIgMTQ0IDQxNkMxNDQgNDI0LjgzNiAxNTEuMTY0IDQzMiAxNjAgNDMySDIyNEMyMzIuODM2IDQzMiAyNDAgNDI0LjgzNiAyNDAgNDE2QzI0MCA0MDcuMTYyIDIzMi44MzYgNDAwIDIyNCA0MDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function MobileNotch(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M288 0H96C60.654 0 32 28.654 32 64V448C32 483.346 60.654 512 96 512H288C323.346 512 352 483.346 352 448V64C352 28.654 323.346 0 288 0ZM160 32H224V48H160V32ZM320 448C320 465.645 305.645 480 288 480H96C78.355 480 64 465.645 64 448V64C64 46.355 78.355 32 96 32H128V48C128 65.641 142.359 80 160 80H224C241.641 80 256 65.641 256 48V32H288C305.645 32 320 46.355 320 64V448ZM224 400H160C151.164 400 144 407.162 144 416C144 424.836 151.164 432 160 432H224C232.836 432 240 424.836 240 416C240 407.162 232.836 400 224 400Z" />
        </Icon>
    </>
}
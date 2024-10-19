
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `id-card-clip` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/id-card-clip?s=regular id-card-clip}
 * @preview ![id-card-clip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTI4SDMyMEMzMzcuNjc0IDEyOCAzNTIgMTEzLjY3MiAzNTIgOTZWMzJDMzUyIDE0LjMyNiAzMzcuNjc0IDAgMzIwIDBIMjU2QzIzOC4zMjYgMCAyMjQgMTQuMzI2IDIyNCAzMlY5NkMyMjQgMTEzLjY3MiAyMzguMzI2IDEyOCAyNTYgMTI4Wk0yODggMzA0QzMyMy4zNDYgMzA0IDM1MiAyNzUuMzQ2IDM1MiAyNDBDMzUyIDIwNC42NTIgMzIzLjM0NiAxNzYgMjg4IDE3NlMyMjQgMjA0LjY1MiAyMjQgMjQwQzIyNCAyNzUuMzQ2IDI1Mi42NTQgMzA0IDI4OCAzMDRaTTUxMiA2NEgzODRWMTEySDUxMkM1MjAuODIyIDExMiA1MjggMTE5LjE3OCA1MjggMTI4VjQ0OEM1MjggNDU2LjgyMiA1MjAuODIyIDQ2NCA1MTIgNDY0SDY0QzU1LjE3OCA0NjQgNDggNDU2LjgyMiA0OCA0NDhWMTI4QzQ4IDExOS4xNzggNTUuMTc4IDExMiA2NCAxMTJIMTkyVjY0SDY0QzI4LjY1NCA2NCAwIDkyLjY1NCAwIDEyOFY0NDhDMCA0ODMuMzQ2IDI4LjY1NCA1MTIgNjQgNTEySDUxMkM1NDcuMzQ2IDUxMiA1NzYgNDgzLjM0NiA1NzYgNDQ4VjEyOEM1NzYgOTIuNjU0IDU0Ny4zNDYgNjQgNTEyIDY0Wk0xOTIgNDMySDM4NEMzOTIuODM2IDQzMiA0MDAgNDI0LjgzNiA0MDAgNDE2QzQwMCAzNzEuODE2IDM2NC4xODQgMzM2IDMyMCAzMzZIMjU2QzIxMS44MTYgMzM2IDE3NiAzNzEuODE2IDE3NiA0MTZDMTc2IDQyNC44MzYgMTgzLjE2NCA0MzIgMTkyIDQzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function IdCardClip(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M256 128H320C337.674 128 352 113.672 352 96V32C352 14.326 337.674 0 320 0H256C238.326 0 224 14.326 224 32V96C224 113.672 238.326 128 256 128ZM288 304C323.346 304 352 275.346 352 240C352 204.652 323.346 176 288 176S224 204.652 224 240C224 275.346 252.654 304 288 304ZM512 64H384V112H512C520.822 112 528 119.178 528 128V448C528 456.822 520.822 464 512 464H64C55.178 464 48 456.822 48 448V128C48 119.178 55.178 112 64 112H192V64H64C28.654 64 0 92.654 0 128V448C0 483.346 28.654 512 64 512H512C547.346 512 576 483.346 576 448V128C576 92.654 547.346 64 512 64ZM192 432H384C392.836 432 400 424.836 400 416C400 371.816 364.184 336 320 336H256C211.816 336 176 371.816 176 416C176 424.836 183.164 432 192 432Z" />
        </Icon>
    </>
}

import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `lock-open` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lock-open?s=duotone lock-open}
 * @preview ![lock-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU3NiAxNTAuNDA2VjIwOEM1NzYgMjE2LjgzNiA1NjguODM2IDIyNCA1NjAgMjI0SDUyOEM1MTkuMTY0IDIyNCA1MTIgMjE2LjgzNiA1MTIgMjA4VjE0OC43MTlDNTEyIDEwNi44ODMgNDgxLjk4OCA2OC42OCA0NDAuMzcxIDY0LjQzQzM5Mi41MjMgNTkuNTM5IDM1MiA5Ny4xMTMgMzUyIDE0NFYyMjRIMjg4VjE0NEMyODggNTkuODUyIDM2MC41NDEgLTcuNjY0IDQ0Ni4zNzcgMC43MDNDNTIxLjE4OCA3Ljk5MiA1NzYgNzUuMjQyIDU3NiAxNTAuNDA2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zODQgMjI0QzQxOS4zNDYgMjI0IDQ0OCAyNTIuNjUyIDQ0OCAyODhWNDQ4QzQ0OCA0ODMuMzQ0IDQxOS4zNDYgNTEyIDM4NCA1MTJINjRDMjguNjU0IDUxMiAwIDQ4My4zNDQgMCA0NDhWMjg4QzAgMjUyLjY1MiAyOC42NTQgMjI0IDY0IDIyNEgzODRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function LockOpen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M576 150.406V208C576 216.836 568.836 224 560 224H528C519.164 224 512 216.836 512 208V148.719C512 106.883 481.988 68.68 440.371 64.43C392.523 59.539 352 97.113 352 144V224H288V144C288 59.852 360.541 -7.664 446.377 0.703C521.188 7.992 576 75.242 576 150.406Z" />
            <path d="M384 224C419.346 224 448 252.652 448 288V448C448 483.344 419.346 512 384 512H64C28.654 512 0 483.344 0 448V288C0 252.652 28.654 224 64 224H384Z" />
        </Icon>
    </>
}
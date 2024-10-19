
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `send-back` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/send-back?s=regular send-back}
 * @preview ![send-back](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMjA4VjQ4QzI1NiAyMS42IDIzNC40IDAgMjA4IDBINDhDMjEuNiAwIDAgMjEuNiAwIDQ4VjIwOEMwIDIzNC40IDIxLjYgMjU2IDQ4IDI1NkgyMDhDMjM0LjQgMjU2IDI1NiAyMzQuNCAyNTYgMjA4Wk00OCA0OEgyMDhWMjA4SDQ4VjQ4Wk01OTIgMjU2SDQzMkM0MDUuNiAyNTYgMzg0IDI3Ny42IDM4NCAzMDRWNDY0QzM4NCA0OTAuNCA0MDUuNiA1MTIgNDMyIDUxMkg1OTJDNjE4LjQgNTEyIDY0MCA0OTAuNCA2NDAgNDY0VjMwNEM2NDAgMjc3LjYgNjE4LjQgMjU2IDU5MiAyNTZaTTU5MiA0NjRINDMyVjMwNEg1OTJWNDY0Wk00ODAgMjI0VjE2MEM0ODAgMTI0LjY1MiA0NTEuMzQ2IDk2IDQxNiA5NkgyODhWMjI0QzI4OCAyNTkuMzQ2IDI1OS4zNDYgMjg4IDIyNCAyODhIMTYwVjM1MkMxNjAgMzg3LjM0NiAxODguNjU0IDQxNiAyMjQgNDE2SDM1MlYyODhDMzUyIDI1Mi42NTIgMzgwLjY1NCAyMjQgNDE2IDIyNEg0ODBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SendBack(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M256 208V48C256 21.6 234.4 0 208 0H48C21.6 0 0 21.6 0 48V208C0 234.4 21.6 256 48 256H208C234.4 256 256 234.4 256 208ZM48 48H208V208H48V48ZM592 256H432C405.6 256 384 277.6 384 304V464C384 490.4 405.6 512 432 512H592C618.4 512 640 490.4 640 464V304C640 277.6 618.4 256 592 256ZM592 464H432V304H592V464ZM480 224V160C480 124.652 451.346 96 416 96H288V224C288 259.346 259.346 288 224 288H160V352C160 387.346 188.654 416 224 416H352V288C352 252.652 380.654 224 416 224H480Z" />
        </Icon>
    </>
}
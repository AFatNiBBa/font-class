
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-xmark` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-xmark?s=duotone square-xmark}
 * @preview ![square-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTYgMCA5NlY0MTZDMCA0NTEuMzQ0IDI4LjY1NCA0ODAgNjQgNDgwSDM4NEM0MTkuMzQ2IDQ4MCA0NDggNDUxLjM0NCA0NDggNDE2Vjk2QzQ0OCA2MC42NTYgNDE5LjM0NiAzMiAzODQgMzJaTTMwNC45NjkgMzAzLjAyOUMzMTQuMzQ0IDMxMi40MDQgMzE0LjM0NCAzMjcuNTkyIDMwNC45NjkgMzM2Ljk2N0MyOTUuNTg4IDM0Ni4zNDggMjgwLjQwNCAzNDYuMzQgMjcxLjAzMSAzMzYuOTY3TDIyNCAyODkuOTM2TDE3Ni45NjkgMzM2Ljk2N0MxNjcuNTg4IDM0Ni4zNDggMTUyLjQwNCAzNDYuMzQgMTQzLjAzMSAzMzYuOTY3QzEzMy42NTYgMzI3LjU5MiAxMzMuNjU2IDMxMi40MDQgMTQzLjAzMSAzMDMuMDI5TDE5MC4wNjIgMjU1Ljk5OEwxNDMuMDMxIDIwOC45NjlDMTMzLjY1NiAxOTkuNTk0IDEzMy42NTYgMTg0LjQwNiAxNDMuMDMxIDE3NS4wMzFTMTY3LjU5NCAxNjUuNjU2IDE3Ni45NjkgMTc1LjAzMUwyMjQgMjIyLjA2MkwyNzEuMDMxIDE3NS4wMzFDMjgwLjQwNiAxNjUuNjU2IDI5NS41OTQgMTY1LjY1NiAzMDQuOTY5IDE3NS4wMzFTMzE0LjM0NCAxOTkuNTk0IDMwNC45NjkgMjA4Ljk2OUwyNTcuOTM4IDI1NS45OThMMzA0Ljk2OSAzMDMuMDI5WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yNTcuOTM4IDI1NS45OTlMMzA0Ljk2OSAyMDguOTY4QzMxNC4zNDQgMTk5LjU5MyAzMTQuMzQ0IDE4NC40MDYgMzA0Ljk2OSAxNzUuMDMxUzI4MC40MDYgMTY1LjY1NiAyNzEuMDMxIDE3NS4wMzFMMjI0IDIyMi4wNjJMMTc2Ljk2OSAxNzUuMDMxQzE2Ny41OTQgMTY1LjY1NiAxNTIuNDA2IDE2NS42NTYgMTQzLjAzMSAxNzUuMDMxUzEzMy42NTYgMTk5LjU5MyAxNDMuMDMxIDIwOC45NjhMMTkwLjA2MiAyNTUuOTk5TDE0My4wMzEgMzAzLjAzQzEzMy42NTYgMzEyLjQwNSAxMzMuNjU2IDMyNy41OTIgMTQzLjAzMSAzMzYuOTY3QzE1Mi40MDQgMzQ2LjM0IDE2Ny41ODggMzQ2LjM0OCAxNzYuOTY5IDMzNi45NjdMMjI0IDI4OS45MzZMMjcxLjAzMSAzMzYuOTY3QzI4MC40MDQgMzQ2LjM0IDI5NS41ODggMzQ2LjM0OCAzMDQuOTY5IDMzNi45NjdDMzE0LjM0NCAzMjcuNTkyIDMxNC4zNDQgMzEyLjQwNSAzMDQuOTY5IDMwMy4wM0wyNTcuOTM4IDI1NS45OTlaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareXmark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.656 419.346 32 384 32ZM304.969 303.029C314.344 312.404 314.344 327.592 304.969 336.967C295.588 346.348 280.404 346.34 271.031 336.967L224 289.936L176.969 336.967C167.588 346.348 152.404 346.34 143.031 336.967C133.656 327.592 133.656 312.404 143.031 303.029L190.062 255.998L143.031 208.969C133.656 199.594 133.656 184.406 143.031 175.031S167.594 165.656 176.969 175.031L224 222.062L271.031 175.031C280.406 165.656 295.594 165.656 304.969 175.031S314.344 199.594 304.969 208.969L257.938 255.998L304.969 303.029Z" />
            <path d="M257.938 255.999L304.969 208.968C314.344 199.593 314.344 184.406 304.969 175.031S280.406 165.656 271.031 175.031L224 222.062L176.969 175.031C167.594 165.656 152.406 165.656 143.031 175.031S133.656 199.593 143.031 208.968L190.062 255.999L143.031 303.03C133.656 312.405 133.656 327.592 143.031 336.967C152.404 346.34 167.588 346.348 176.969 336.967L224 289.936L271.031 336.967C280.404 346.34 295.588 346.348 304.969 336.967C314.344 327.592 314.344 312.405 304.969 303.03L257.938 255.999Z" />
        </Icon>
    </>
}
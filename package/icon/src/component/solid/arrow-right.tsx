
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-right` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right?s=solid arrow-right}
 * @preview ![arrow-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzcgMjgzLjU2MkwyODUgNDQzLjU2MkMyNzcuMTQxIDQ1MS44MTIgMjY2LjU3OCA0NTYgMjU2IDQ1NkMyNDYuMDk0IDQ1NiAyMzYuMTg4IDQ1Mi4zNDQgMjI4LjQ1MyA0NDVDMjEyLjQzOCA0MjkuNzgxIDIxMS43ODEgNDA0LjQ2OSAyMjcgMzg4LjQzOEwzMTQuODI0IDI5Nkg0MEMxNy45MDYgMjk2IDAgMjc4LjA5NCAwIDI1NlMxNy45MDYgMjE2IDQwIDIxNkgzMTQuODI0TDIyNyAxMjMuNTYyQzIxMS43ODEgMTA3LjUzMSAyMTIuNDM4IDgyLjIxOSAyMjguNDUzIDY3QzI0NC40NTMgNTEuODEyIDI2OS43ODEgNTIuNDY5IDI4NSA2OC40MzhMNDM3IDIyOC40MzhDNDUxLjY3MiAyNDMuODc1IDQ1MS42NzIgMjY4LjEyNSA0MzcgMjgzLjU2MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M437 283.562L285 443.562C277.141 451.812 266.578 456 256 456C246.094 456 236.188 452.344 228.453 445C212.438 429.781 211.781 404.469 227 388.438L314.824 296H40C17.906 296 0 278.094 0 256S17.906 216 40 216H314.824L227 123.562C211.781 107.531 212.438 82.219 228.453 67C244.453 51.812 269.781 52.469 285 68.438L437 228.438C451.672 243.875 451.672 268.125 437 283.562Z" />
        </Icon>
    </>
}

import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-dot` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-dot?s=solid circle-dot}
 * @preview ![circle-dot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQxOSAxNiAxNiAxMjMuNDE5IDE2IDI1NlMxMjMuNDE5IDQ5NiAyNTYgNDk2UzQ5NiAzODguNTgxIDQ5NiAyNTZTMzg4LjU4MSAxNiAyNTYgMTZaTTM1MiAyNTZDMzUyIDMwOC45NSAzMDguOTUgMzUyIDI1NiAzNTJTMTYwIDMwOC45NSAxNjAgMjU2UzIwMy4wNSAxNjAgMjU2IDE2MFMzNTIgMjAzLjA1IDM1MiAyNTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleDot(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.419 16 16 123.419 16 256S123.419 496 256 496S496 388.581 496 256S388.581 16 256 16ZM352 256C352 308.95 308.95 352 256 352S160 308.95 160 256S203.05 160 256 160S352 203.05 352 256Z" />
        </Icon>
    </>
}
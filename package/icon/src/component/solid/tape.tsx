
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `tape` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tape?s=solid tape}
 * @preview ![tape](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTkyQzIyMC42NTQgMTkyIDE5MiAyMjAuNjUyIDE5MiAyNTZDMTkyIDI5MS4zNDYgMjIwLjY1NCAzMjAgMjU2IDMyMFMzMjAgMjkxLjM0NiAzMjAgMjU2QzMyMCAyMjAuNjUyIDI5MS4zNDYgMTkyIDI1NiAxOTJaTTYwOCA0MzJINDE4Ljc3OUM0NjYuMTU4IDM4OC4xNTggNDk2IDMyNS42NDEgNDk2IDI1NkM0OTYgMTIzLjQ1MSAzODguNTQ5IDE2IDI1NiAxNlMxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2SDYwOEM2MTYuODM2IDQ5NiA2MjQgNDg4LjgzNiA2MjQgNDgwVjQ0OEM2MjQgNDM5LjE2MiA2MTYuODM2IDQzMiA2MDggNDMyWk0yNTYgMzUyQzIwMi45OCAzNTIgMTYwIDMwOS4wMiAxNjAgMjU2UzIwMi45OCAxNjAgMjU2IDE2MFMzNTIgMjAyLjk4IDM1MiAyNTZTMzA5LjAyIDM1MiAyNTYgMzUyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Tape(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M256 192C220.654 192 192 220.652 192 256C192 291.346 220.654 320 256 320S320 291.346 320 256C320 220.652 291.346 192 256 192ZM608 432H418.779C466.158 388.158 496 325.641 496 256C496 123.451 388.549 16 256 16S16 123.451 16 256S123.451 496 256 496H608C616.836 496 624 488.836 624 480V448C624 439.162 616.836 432 608 432ZM256 352C202.98 352 160 309.02 160 256S202.98 160 256 160S352 202.98 352 256S309.02 352 256 352Z" />
        </Icon>
    </>
}
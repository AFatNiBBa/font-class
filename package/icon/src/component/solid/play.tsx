
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `play` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/play?s=solid play}
 * @preview ![play](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNzYgNDgwQzE0OC42MTUgNDgwIDEyOCA0NTcuNjA4IDEyOCA0MzJWODBDMTI4IDU0LjYyIDE0OC4zOTYgMzIuMDE3IDE3Ni4wMTIgMzIuMDE3QzE4NC42OTggMzIuMDE3IDE5My4zNjYgMzQuMzY4IDIwMS4wMzEgMzkuMDQ3TDQ4OS4wMzEgMjE1LjA0N0M1MDMuMjk3IDIyMy43NjYgNTEyIDIzOS4yODEgNTEyIDI1NlM1MDMuMjk3IDI4OC4yMzQgNDg5LjAzMSAyOTYuOTUzTDIwMS4wMzEgNDcyLjk1M0MxOTMuMzU5IDQ3Ny42NDEgMTg0LjY4OCA0ODAgMTc2IDQ4MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Play(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M176 480C148.615 480 128 457.608 128 432V80C128 54.62 148.396 32.017 176.012 32.017C184.698 32.017 193.366 34.368 201.031 39.047L489.031 215.047C503.297 223.766 512 239.281 512 256S503.297 288.234 489.031 296.953L201.031 472.953C193.359 477.641 184.688 480 176 480Z" />
        </Icon>
    </>
}
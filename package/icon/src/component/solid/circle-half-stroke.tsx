
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-half-stroke` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-half-stroke?s=solid circle-half-stroke}
 * @preview ![circle-half-stroke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MyAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUzIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0NyAxNiAyNTYgMTZaTTI1NiA0MzJWODBDMzUzLjA0NyA4MCA0MzIgMTU4Ljk1MyA0MzIgMjU2UzM1My4wNDcgNDMyIDI1NiA0MzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleHalfStroke(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.453 16 16 123.451 16 256S123.453 496 256 496S496 388.549 496 256S388.547 16 256 16ZM256 432V80C353.047 80 432 158.953 432 256S353.047 432 256 432Z" />
        </Icon>
    </>
}
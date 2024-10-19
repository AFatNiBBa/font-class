
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-half-stroke` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-half-stroke?s=thin circle-half-stroke}
 * @preview ![circle-half-stroke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjY1NiAxNiAxNiAxMjMuNjU2IDE2IDI1NlMxMjMuNjU2IDQ5NiAyNTYgNDk2UzQ5NiAzODguMzQ0IDQ5NiAyNTZTMzg4LjM0NCAxNiAyNTYgMTZaTTMyIDI1NkMzMiAxMzUuMTg2IDEyOC4yMDcgMzYuNjY0IDI0OCAzMi40MDRWNDc5LjU5NkMxMjguMjA3IDQ3NS4zMzYgMzIgMzc2LjgxNCAzMiAyNTZaTTI2NCA0NzkuNTk2VjMyLjQwNEMzODMuNzkzIDM2LjY2NCA0ODAgMTM1LjE4NiA0ODAgMjU2UzM4My43OTMgNDc1LjMzNiAyNjQgNDc5LjU5NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleHalfStroke(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.656 16 16 123.656 16 256S123.656 496 256 496S496 388.344 496 256S388.344 16 256 16ZM32 256C32 135.186 128.207 36.664 248 32.404V479.596C128.207 475.336 32 376.814 32 256ZM264 479.596V32.404C383.793 36.664 480 135.186 480 256S383.793 475.336 264 479.596Z" />
        </Icon>
    </>
}
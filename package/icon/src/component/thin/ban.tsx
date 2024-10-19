
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `ban` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ban?s=thin ban}
 * @preview ![ban](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MyAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUzIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0NyAxNiAyNTYgMTZaTTMyIDI1NkMzMiAxOTcuMTE3IDU1LjAxNiAxNDMuNjMxIDkyLjI5NyAxMDMuNjA3TDQwOC4zOTEgNDE5LjcwNUMzNjguMzY3IDQ1Ni45ODggMzE0Ljg4MyA0ODAgMjU2IDQ4MEMxMzIuNDg0IDQ4MCAzMiAzNzkuNTE0IDMyIDI1NlpNNDE5LjcwMyA0MDguMzkzTDEwMy42MDkgOTIuMjk1QzE0My42MzMgNTUuMDEyIDE5Ny4xMTcgMzIgMjU2IDMyQzM3OS41MTYgMzIgNDgwIDEzMi40ODYgNDgwIDI1NkM0ODAgMzE0Ljg4MyA0NTYuOTg0IDM2OC4zNjkgNDE5LjcwMyA0MDguMzkzWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Ban(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.453 16 16 123.451 16 256S123.453 496 256 496S496 388.549 496 256S388.547 16 256 16ZM32 256C32 197.117 55.016 143.631 92.297 103.607L408.391 419.705C368.367 456.988 314.883 480 256 480C132.484 480 32 379.514 32 256ZM419.703 408.393L103.609 92.295C143.633 55.012 197.117 32 256 32C379.516 32 480 132.486 480 256C480 314.883 456.984 368.369 419.703 408.393Z" />
        </Icon>
    </>
}
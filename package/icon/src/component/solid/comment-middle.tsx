
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `comment-middle` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment-middle?s=solid comment-middle}
 * @preview ![comment-middle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjMuMTYyIDQwOC41MjVMMjc0LjI3NSA1MDEuOTE2QzI2Ny4yMzggNTE1LjM2MSAyNDQuNzYyIDUxNS4zNjEgMjM3LjcyNSA1MDEuOTE2TDE4OC44MzggNDA4LjUyNUM4MC4wNzYgMzg0LjUzMyAwIDMwMy45ODggMCAyMDhDMCA5My4wOTQgMTE0LjU5NCAwIDI1NiAwUzUxMiA5My4wOTQgNTEyIDIwOEM1MTIgMzAzLjk4OCA0MzEuOTI0IDM4NC41MzMgMzIzLjE2MiA0MDguNTI1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CommentMiddle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M323.162 408.525L274.275 501.916C267.238 515.361 244.762 515.361 237.725 501.916L188.838 408.525C80.076 384.533 0 303.988 0 208C0 93.094 114.594 0 256 0S512 93.094 512 208C512 303.988 431.924 384.533 323.162 408.525Z" />
        </Icon>
    </>
}

import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `comment-middle` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment-middle?s=duotone comment-middle}
 * @preview ![comment-middle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyMy4xNjIgNDA4LjUyNUwyNzQuMjc1IDUwMS45MTZDMjY3LjIzOCA1MTUuMzYxIDI0NC43NjIgNTE1LjM2MSAyMzcuNzI1IDUwMS45MTZMMTg4LjgzOCA0MDguNTI1QzgwLjA3NiAzODQuNTMzIDAgMzAzLjk4OCAwIDIwOEMwIDkzLjA5NCAxMTQuNTk0IDAgMjU2IDBTNTEyIDkzLjA5NCA1MTIgMjA4QzUxMiAzMDMuOTg4IDQzMS45MjQgMzg0LjUzMyAzMjMuMTYyIDQwOC41MjVaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function CommentMiddle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M323.162 408.525L274.275 501.916C267.238 515.361 244.762 515.361 237.725 501.916L188.838 408.525C80.076 384.533 0 303.988 0 208C0 93.094 114.594 0 256 0S512 93.094 512 208C512 303.988 431.924 384.533 323.162 408.525Z" />
        </Icon>
    </>
}
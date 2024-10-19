
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `check` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/check?s=duotone check}
 * @preview ![check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ2NC41NjMgMTQ0LjU2M0wyMDguNTYzIDQwMC41NjNDMjAwLjc1IDQwOC4zNzUgMTkwLjUxNiA0MTIuMjgxIDE4MC4yODEgNDEyLjI4MVMxNTkuODEzIDQwOC4zNzUgMTUyIDQwMC41NjNMMjQgMjcyLjU2M0M4LjM3NSAyNTYuOTM4IDguMzc1IDIzMS42MjUgMjQgMjE2UzY0LjkzOCAyMDAuMzc1IDgwLjU2MiAyMTZMMTgwLjI4MSAzMTUuNzE5TDQwOCA4OEM0MjMuNjI1IDcyLjM3NSA0NDguOTM4IDcyLjM3NSA0NjQuNTYyIDg4UzQ4MC4xODggMTI4LjkzOCA0NjQuNTYzIDE0NC41NjNaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Check(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M464.563 144.563L208.563 400.563C200.75 408.375 190.516 412.281 180.281 412.281S159.813 408.375 152 400.563L24 272.563C8.375 256.938 8.375 231.625 24 216S64.938 200.375 80.562 216L180.281 315.719L408 88C423.625 72.375 448.938 72.375 464.562 88S480.188 128.938 464.563 144.563Z" />
        </Icon>
    </>
}
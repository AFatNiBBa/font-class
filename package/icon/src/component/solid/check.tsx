
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `check` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/check?s=solid check}
 * @preview ![check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQuNTYzIDE0NC41NjNMMjA4LjU2MyA0MDAuNTYzQzIwMC43NSA0MDguMzc1IDE5MC41MTYgNDEyLjI4MSAxODAuMjgxIDQxMi4yODFTMTU5LjgxMyA0MDguMzc1IDE1MiA0MDAuNTYzTDI0IDI3Mi41NjNDOC4zNzUgMjU2LjkzOCA4LjM3NSAyMzEuNjI1IDI0IDIxNlM2NC45MzggMjAwLjM3NSA4MC41NjIgMjE2TDE4MC4yODEgMzE1LjcxOUw0MDggODhDNDIzLjYyNSA3Mi4zNzUgNDQ4LjkzOCA3Mi4zNzUgNDY0LjU2MiA4OFM0ODAuMTg4IDEyOC45MzggNDY0LjU2MyAxNDQuNTYzWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Check(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M464.563 144.563L208.563 400.563C200.75 408.375 190.516 412.281 180.281 412.281S159.813 408.375 152 400.563L24 272.563C8.375 256.938 8.375 231.625 24 216S64.938 200.375 80.562 216L180.281 315.719L408 88C423.625 72.375 448.938 72.375 464.562 88S480.188 128.938 464.563 144.563Z" />
        </Icon>
    </>
}
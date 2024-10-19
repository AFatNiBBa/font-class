
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `shield` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shield?s=solid shield}
 * @preview ![shield](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjYuNSA4My42OEwyNzQuNSAzLjY3MkMyNjkuNjI1IDEuNjQxIDI2MS4zNDQgMCAyNTYuMDYyIDBDMjUwLjc1IDAgMjQyLjUgMS42NDEgMjM3LjU5NCAzLjY3Mkw0NS41OTQgODMuNjhDMjcuNjg4IDkxLjA3IDE2IDEwOC41NzQgMTYgMTI3Ljk4QzE2IDM4NS4xNTggMjA1LjE2MyA1MTIgMjU1Ljk1MyA1MTJDMzA3Ljk1MiA1MTIgNDk2IDM4My44MTQgNDk2IDEyNy45OEM0OTYgMTA4LjU3NCA0ODQuMzEyIDkxLjA3IDQ2Ni41IDgzLjY4Wk0yNTYgNDQ2LjQ5NlY2NS41MDhDMjU2LjAwNiA2NS40ODQgMjU2LjA0NyA2NS4zMTYgMjU2LjA0NyA2NS4zMTZMNDMxLjg4MSAxMzguNTg2QzQyNy43NzcgMzE5LjcwMyAzMTkuMDIzIDQxNy4wNyAyNTYgNDQ2LjQ5NlogIj48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
export default function Shield(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M466.5 83.68L274.5 3.672C269.625 1.641 261.344 0 256.062 0C250.75 0 242.5 1.641 237.594 3.672L45.594 83.68C27.688 91.07 16 108.574 16 127.98C16 385.158 205.163 512 255.953 512C307.952 512 496 383.814 496 127.98C496 108.574 484.312 91.07 466.5 83.68ZM256 446.496V65.508C256.006 65.484 256.047 65.316 256.047 65.316L431.881 138.586C427.777 319.703 319.023 417.07 256 446.496Z " />
        </Icon>
    </>
}
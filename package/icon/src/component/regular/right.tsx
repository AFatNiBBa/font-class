
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `right` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/right?s=regular right}
 * @preview ![right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjcuNzUgNjYuNDM4QzIxNS43OTcgNzEuMzkxIDIwOCA4My4wNjIgMjA4IDk2VjE3Nkg0OEMyMS40OTIgMTc2IDAgMTk3LjQ5IDAgMjI0VjI4OEMwIDMxNC41MSAyMS40OTIgMzM2IDQ4IDMzNkgyMDhWNDE2QzIwOCA0MjguOTM4IDIxNS43OTcgNDQwLjYwOSAyMjcuNzUgNDQ1LjU2MkMyMzkuNzE5IDQ1MC41MTYgMjUzLjQ2OSA0NDcuNzgxIDI2Mi42MjUgNDM4LjYyNUw0MzguNjI1IDI3OC42MjVDNDQ0Ljg3NSAyNzIuMzc1IDQ0OCAyNjQuMTg4IDQ0OCAyNTZTNDQ0Ljg3NSAyMzkuNjI1IDQzOC42MjUgMjMzLjM3NUwyNjIuNjI1IDczLjM3NUMyNTMuNDY5IDY0LjIxOSAyMzkuNzE5IDYxLjQ4NCAyMjcuNzUgNjYuNDM4Wk0zOTMuMzY3IDI1NkwyNTYgMzc3LjM2N1YyODhINDhWMjI0SDI1NlYxMzQuNjMzTDM5My4zNjcgMjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Right(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M227.75 66.438C215.797 71.391 208 83.062 208 96V176H48C21.492 176 0 197.49 0 224V288C0 314.51 21.492 336 48 336H208V416C208 428.938 215.797 440.609 227.75 445.562C239.719 450.516 253.469 447.781 262.625 438.625L438.625 278.625C444.875 272.375 448 264.188 448 256S444.875 239.625 438.625 233.375L262.625 73.375C253.469 64.219 239.719 61.484 227.75 66.438ZM393.367 256L256 377.367V288H48V224H256V134.633L393.367 256Z" />
        </Icon>
    </>
}
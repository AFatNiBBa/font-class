
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `martini-glass-empty` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/martini-glass-empty?s=light martini-glass-empty}
 * @preview ![martini-glass-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDIuMDM3IDU3LjYyNUM1MjMuMjkgMzYuMzc1IDUwOC4yODkgMCA0NzguMjgzIDBIMzMuNzE2QzMuNzEyIDAgLTExLjI5IDM2LjM3NSA5Ljk2MiA1Ny42MjVMMjM5Ljk5OCAyODcuNjI1VjQ4MEgxNDMuOTk5QzEzNS4xNjQgNDgwIDEyNy45OTkgNDg3LjE2NCAxMjcuOTk5IDQ5NlMxMzUuMTY0IDUxMiAxNDMuOTk5IDUxMkgzNjcuOTk5QzM3Ni44MzcgNTEyIDM4My45OTkgNTA0LjgzNiAzODMuOTk5IDQ5NlMzNzYuODM3IDQ4MCAzNjcuOTk5IDQ4MEgyNzIuMDAxVjI4Ny42MjVMNTAyLjAzNyA1Ny42MjVaTTI1NS45OTkgMjU4LjM3NUwzMS45OTkgMzJINDc5Ljk5OUwyNTUuOTk5IDI1OC4zNzVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function MartiniGlassEmpty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M502.037 57.625C523.29 36.375 508.289 0 478.283 0H33.716C3.712 0 -11.29 36.375 9.962 57.625L239.998 287.625V480H143.999C135.164 480 127.999 487.164 127.999 496S135.164 512 143.999 512H367.999C376.837 512 383.999 504.836 383.999 496S376.837 480 367.999 480H272.001V287.625L502.037 57.625ZM255.999 258.375L31.999 32H479.999L255.999 258.375Z" />
        </Icon>
    </>
}
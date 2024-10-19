
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `eye-dropper-half` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/eye-dropper-half?s=solid eye-dropper-half}
 * @preview ![eye-dropper-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDAuODA1IDMyMEgxNDMuMTk1TDIxNi45NzEgMjQ2LjIyNUwxNzcuMzczIDIwNi42MjdMNTAuNzUgMzMzLjI1QzM4Ljc1IDM0NS4yNSAzMiAzNjEuNTMxIDMyIDM3OC41VjQyNEwwIDQ4MEwzMiA1MTJMODggNDgwSDEzMy41QzE1MC40NjkgNDgwIDE2Ni43NSA0NzMuMjUgMTc4Ljc1IDQ2MS4yNUwzMDUuMzczIDMzNC42MjdMMjY1Ljc3NSAyOTUuMDI5TDI0MC44MDUgMzIwWk00ODMuODc1IDI4LjEyNUM0NDYuNDA2IC05LjM3NSAzODUuNTk0IC05LjM3NSAzNDguMTI1IDI4LjEyNUwyNzEuMDMxIDEwNS4yMTlMMjU3LjkzOCA5Mi4xMjVDMjQ4LjUgODIuNjU2IDIzMy4yODEgODIuODEyIDIyNCA5Mi4xMjVMMTgzLjAzMSAxMzMuMDk0QzE3My42NTYgMTQyLjQzOCAxNzMuNjU2IDE1Ny42NTYgMTgzLjAzMSAxNjcuMDMxTDM0NC45NjkgMzI4Ljk2OUMzNTQuNDA2IDMzOC40MDYgMzY5LjYyNSAzMzguMjgxIDM3OC45MDYgMzI4Ljk2OUw0MTkuODc1IDI4OEM0MjkuMjUgMjc4LjYyNSA0MjkuMjUgMjYzLjQzOCA0MTkuODc1IDI1NC4wNjJMNDA2Ljc4MSAyNDAuOTY5TDQ4My44NzUgMTYzLjg3NUM1MjEuMzc1IDEyNi4zNzUgNTIxLjM3NSA2NS42MjUgNDgzLjg3NSAyOC4xMjVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function EyeDropperHalf(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M240.805 320H143.195L216.971 246.225L177.373 206.627L50.75 333.25C38.75 345.25 32 361.531 32 378.5V424L0 480L32 512L88 480H133.5C150.469 480 166.75 473.25 178.75 461.25L305.373 334.627L265.775 295.029L240.805 320ZM483.875 28.125C446.406 -9.375 385.594 -9.375 348.125 28.125L271.031 105.219L257.938 92.125C248.5 82.656 233.281 82.812 224 92.125L183.031 133.094C173.656 142.438 173.656 157.656 183.031 167.031L344.969 328.969C354.406 338.406 369.625 338.281 378.906 328.969L419.875 288C429.25 278.625 429.25 263.438 419.875 254.062L406.781 240.969L483.875 163.875C521.375 126.375 521.375 65.625 483.875 28.125Z" />
        </Icon>
    </>
}
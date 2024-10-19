
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `stopwatch` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/stopwatch?s=regular stopwatch}
 * @preview ![stopwatch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MjQuOTY5IDE1Mi45NjlDNDM0LjM0NCAxNDMuNTk0IDQzNC4zNDQgMTI4LjQwNiA0MjQuOTY5IDExOS4wMzFTNDAwLjQwNiAxMDkuNjU2IDM5MS4wMzEgMTE5LjAzMUwzNjEuNjgyIDE0OC4zODNDMzMwLjYyNyAxMjAuODgzIDI5MS40IDEwMi40ODQgMjQ4IDk3LjQ5MlY0OEgyODBDMjkzLjI1IDQ4IDMwNCAzNy4yNSAzMDQgMjRTMjkzLjI1IDAgMjgwIDBIMTY4QzE1NC43NSAwIDE0NCAxMC43NSAxNDQgMjRTMTU0Ljc1IDQ4IDE2OCA0OEgyMDBWOTcuNDkyQzk2LjQ0OSAxMDkuNDA2IDE2IDE5Ny4yNTQgMTYgMzA0QzE2IDQxOC44NzUgMTA5LjEyNSA1MTIgMjI0IDUxMlM0MzIgNDE4Ljg3NSA0MzIgMzA0QzQzMiAyNTkuMzIgNDE3Ljc3OSAyMTguMDMxIDM5My44MDUgMTg0LjEzM0w0MjQuOTY5IDE1Mi45NjlaTTIyNCA0NjRDMTM1Ljc3NSA0NjQgNjQgMzkyLjIyMyA2NCAzMDRTMTM1Ljc3NSAxNDQgMjI0IDE0NFMzODQgMjE1Ljc3NyAzODQgMzA0UzMxMi4yMjUgNDY0IDIyNCA0NjRaTTIyNCAxOTJDMjEwLjc1IDE5MiAyMDAgMjAyLjc1IDIwMCAyMTZWMzI4QzIwMCAzNDEuMjUgMjEwLjc1IDM1MiAyMjQgMzUyUzI0OCAzNDEuMjUgMjQ4IDMyOFYyMTZDMjQ4IDIwMi43NSAyMzcuMjUgMTkyIDIyNCAxOTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Stopwatch(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M424.969 152.969C434.344 143.594 434.344 128.406 424.969 119.031S400.406 109.656 391.031 119.031L361.682 148.383C330.627 120.883 291.4 102.484 248 97.492V48H280C293.25 48 304 37.25 304 24S293.25 0 280 0H168C154.75 0 144 10.75 144 24S154.75 48 168 48H200V97.492C96.449 109.406 16 197.254 16 304C16 418.875 109.125 512 224 512S432 418.875 432 304C432 259.32 417.779 218.031 393.805 184.133L424.969 152.969ZM224 464C135.775 464 64 392.223 64 304S135.775 144 224 144S384 215.777 384 304S312.225 464 224 464ZM224 192C210.75 192 200 202.75 200 216V328C200 341.25 210.75 352 224 352S248 341.25 248 328V216C248 202.75 237.25 192 224 192Z" />
        </Icon>
    </>
}
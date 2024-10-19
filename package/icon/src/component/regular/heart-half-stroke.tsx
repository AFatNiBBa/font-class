
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `heart-half-stroke` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/heart-half-stroke?s=regular heart-half-stroke}
 * @preview ![heart-half-stroke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjIuOTY5IDYyLjg1OUM0MzguNzc3IDQxLjkyIDQwOC44NzEgMzEuOTk4IDM3OC43MjQgMzJDMzQxLjIzNiAzMiAzMDMuMzc5IDQ3LjM0NCAyNzUuNjkzIDc1LjkyNEwyNTYuMDA4IDk2LjI0OEwyMzYuMzIgNzUuOTI0QzIwOC42MzMgNDcuMzQgMTcwLjc4MyAzMiAxMzMuMjkxIDMyQzEwMy4xNDggMzIgNzMuMjMgNDEuOTI2IDQ5LjA0MSA2Mi44NjFDLTEzLjEwNCAxMTYuNjUyIC0xNi4xOTcgMjEyLjUxNiAzOS44MjQgMjcwLjQ4NEwyMzIuOTc0IDQ3MC4xOTVDMjM5LjI5NSA0NzYuNzMyIDI0Ny42MjcgNDgwIDI1NS45NjEgNDgwQzI2NC4yOTMgNDgwIDI3Mi42MjUgNDc2LjczMiAyNzguOTQ3IDQ3MC4xOTVMNDcyLjA5NiAyNzAuNDg0QzUyOC4yMTEgMjEyLjUxNiA1MjUuMTE3IDExNi42NDggNDYyLjk2OSA2Mi44NTlaTTQzNy41OTQgMjM3LjExNUwyNTYgNDI0Ljg3N1YxNjUuMjNDMjU2LjAwNCAxNjUuMjM0IDI1Ni4wMDQgMTY1LjIzNCAyNTYuMDA4IDE2NS4yMzhDMjkzLjc2NyAxMjYuMjU2IDI4Mi45OTYgMTM3LjM3NSAzMTAuMTcyIDEwOS4zMkMzMzYuNTkgODIuMDQ3IDM5MS40MzMgNjQuNDI4IDQzMS41NTcgOTkuMTUyQzQ3Ny4xMjMgMTM4LjU5IDQ3MC41MTcgMjAzLjEwMiA0MzcuNTk0IDIzNy4xMTVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function HeartHalfStroke(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M462.969 62.859C438.777 41.92 408.871 31.998 378.724 32C341.236 32 303.379 47.344 275.693 75.924L256.008 96.248L236.32 75.924C208.633 47.34 170.783 32 133.291 32C103.148 32 73.23 41.926 49.041 62.861C-13.104 116.652 -16.197 212.516 39.824 270.484L232.974 470.195C239.295 476.732 247.627 480 255.961 480C264.293 480 272.625 476.732 278.947 470.195L472.096 270.484C528.211 212.516 525.117 116.648 462.969 62.859ZM437.594 237.115L256 424.877V165.23C256.004 165.234 256.004 165.234 256.008 165.238C293.767 126.256 282.996 137.375 310.172 109.32C336.59 82.047 391.433 64.428 431.557 99.152C477.123 138.59 470.517 203.102 437.594 237.115Z" />
        </Icon>
    </>
}

import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `octagon-xmark` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-xmark?s=regular octagon-xmark}
 * @preview ![octagon-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODIuNzU4IDE1Ny4wOTRMMzU0Ljc4OSAyOS4yNDJDMzQ2LjM1MiAyMC44MDUgMzM0Ljk4NCAxNiAzMjMuMDMxIDE2SDE4OC44NTJDMTc3LjAxNiAxNiAxNjUuNTMxIDIwLjgwNSAxNTcuMDk0IDI5LjI0MkwyOS4yNDIgMTU3LjIxMUMyMC44MDUgMTY1LjY0OCAxNiAxNzcuMDE2IDE2IDE4OC45NjlWMzIzLjE0OEMxNiAzMzQuOTg0IDIwLjgwNSAzNDYuNDY5IDI5LjI0MiAzNTQuOTA2TDE1Ny4yMTEgNDgyLjc1OEMxNjUuNjQ4IDQ5MS4xOTUgMTc3LjAxNiA0OTYgMTg4Ljk2OSA0OTZIMzIzLjE0OEMzMzQuOTg0IDQ5NiAzNDYuNDY5IDQ5MS4xOTUgMzU0LjkwNiA0ODIuNzU4TDQ4Mi43NTggMzU0Ljc4OUM0OTEuMTk1IDM0Ni4zNTIgNDk2IDMzNC45ODQgNDk2IDMyMy4wMzFWMTg4Ljg1MkM0OTYgMTc3LjAxNiA0OTEuMTk1IDE2NS41MzEgNDgyLjc1OCAxNTcuMDk0Wk00NDggMzIxLjY2NkwzMjEuNzgxIDQ0OEgxOTAuMzM0TDY0IDMyMS43ODFWMTkwLjMzNEwxOTAuMjE5IDY0SDMyMS42NjZMNDQ4IDE5MC4yMTlWMzIxLjY2NlpNMzAzLjAzMSAxNzUuMDMxTDI1NiAyMjIuMDYyTDIwOC45NjkgMTc1LjAzMUMxOTkuNTk0IDE2NS42NTYgMTg0LjQwNiAxNjUuNjU2IDE3NS4wMzEgMTc1LjAzMVMxNjUuNjU2IDE5OS41OTQgMTc1LjAzMSAyMDguOTY5TDIyMi4wNjIgMjU1Ljk5OEwxNzUuMDMxIDMwMy4wMjlDMTY1LjY1NiAzMTIuNDA0IDE2NS42NTYgMzI3LjU5MiAxNzUuMDMxIDMzNi45NjdDMTg0LjQwNCAzNDYuMzQgMTk5LjU4OCAzNDYuMzQ4IDIwOC45NjkgMzM2Ljk2N0wyNTYgMjg5LjkzNkwzMDMuMDMxIDMzNi45NjdDMzEyLjQwNCAzNDYuMzQgMzI3LjU4OCAzNDYuMzQ4IDMzNi45NjkgMzM2Ljk2N0MzNDYuMzQ0IDMyNy41OTIgMzQ2LjM0NCAzMTIuNDA0IDMzNi45NjkgMzAzLjAyOUwyODkuOTM4IDI1NS45OThMMzM2Ljk2OSAyMDguOTY5QzM0Ni4zNDQgMTk5LjU5NCAzNDYuMzQ0IDE4NC40MDYgMzM2Ljk2OSAxNzUuMDMxUzMxMi40MDYgMTY1LjY1NiAzMDMuMDMxIDE3NS4wMzFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function OctagonXmark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M482.758 157.094L354.789 29.242C346.352 20.805 334.984 16 323.031 16H188.852C177.016 16 165.531 20.805 157.094 29.242L29.242 157.211C20.805 165.648 16 177.016 16 188.969V323.148C16 334.984 20.805 346.469 29.242 354.906L157.211 482.758C165.648 491.195 177.016 496 188.969 496H323.148C334.984 496 346.469 491.195 354.906 482.758L482.758 354.789C491.195 346.352 496 334.984 496 323.031V188.852C496 177.016 491.195 165.531 482.758 157.094ZM448 321.666L321.781 448H190.334L64 321.781V190.334L190.219 64H321.666L448 190.219V321.666ZM303.031 175.031L256 222.062L208.969 175.031C199.594 165.656 184.406 165.656 175.031 175.031S165.656 199.594 175.031 208.969L222.062 255.998L175.031 303.029C165.656 312.404 165.656 327.592 175.031 336.967C184.404 346.34 199.588 346.348 208.969 336.967L256 289.936L303.031 336.967C312.404 346.34 327.588 346.348 336.969 336.967C346.344 327.592 346.344 312.404 336.969 303.029L289.938 255.998L336.969 208.969C346.344 199.594 346.344 184.406 336.969 175.031S312.406 165.656 303.031 175.031Z" />
        </Icon>
    </>
}
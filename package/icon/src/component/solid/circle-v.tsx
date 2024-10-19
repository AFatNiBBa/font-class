
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-v` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-v?s=solid circle-v}
 * @preview ![circle-v](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTM4MS40NjkgMTc4LjczNEwyNzcuNDY5IDM4Ni43MzRDMjczLjQwNiAzOTQuODU5IDI2NS4wOTQgNDAwIDI1NiA0MDBTMjM4LjU5NCAzOTQuODU5IDIzNC41MzEgMzg2LjczNEwxMzAuNTMxIDE3OC43MzRDMTI0LjYwOSAxNjYuODc1IDEyOS40MDYgMTUyLjQ2OSAxNDEuMjY2IDE0Ni41MzFDMTUzLjE4OCAxNDAuNjQxIDE2Ny41NDcgMTQ1LjQwNiAxNzMuNDY5IDE1Ny4yNjZMMjU2IDMyMi4zMjhMMzM4LjUzMSAxNTcuMjY2QzM0NC40NjkgMTQ1LjQwNiAzNTguODc1IDE0MC42NDEgMzcwLjczNCAxNDYuNTMxQzM4Mi41OTQgMTUyLjQ2OSAzODcuMzkxIDE2Ni44NzUgMzgxLjQ2OSAxNzguNzM0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleV(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM381.469 178.734L277.469 386.734C273.406 394.859 265.094 400 256 400S238.594 394.859 234.531 386.734L130.531 178.734C124.609 166.875 129.406 152.469 141.266 146.531C153.188 140.641 167.547 145.406 173.469 157.266L256 322.328L338.531 157.266C344.469 145.406 358.875 140.641 370.734 146.531C382.594 152.469 387.391 166.875 381.469 178.734Z" />
        </Icon>
    </>
}
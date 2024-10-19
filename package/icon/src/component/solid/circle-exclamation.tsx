
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-exclamation` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-exclamation?s=solid circle-exclamation}
 * @preview ![circle-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTIzMiAxNTJDMjMyIDEzOC43NSAyNDIuNzUgMTI4IDI1NiAxMjhTMjgwIDEzOC43NSAyODAgMTUyVjI4MEMyODAgMjkzLjI1IDI2OS4yNSAzMDQgMjU2IDMwNFMyMzIgMjkzLjI1IDIzMiAyODBWMTUyWk0yNTYgNDAwQzIzOC42MzcgNDAwIDIyNC41NjIgMzg1LjkyNCAyMjQuNTYyIDM2OC41NjFDMjI0LjU2MiAzNTEuMTk5IDIzOC42MzcgMzM3LjEyMyAyNTYgMzM3LjEyM1MyODcuNDM4IDM1MS4xOTkgMjg3LjQzOCAzNjguNTYxQzI4Ny40MzggMzg1LjkyNCAyNzMuMzYzIDQwMCAyNTYgNDAwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleExclamation(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM232 152C232 138.75 242.75 128 256 128S280 138.75 280 152V280C280 293.25 269.25 304 256 304S232 293.25 232 280V152ZM256 400C238.637 400 224.562 385.924 224.562 368.561C224.562 351.199 238.637 337.123 256 337.123S287.438 351.199 287.438 368.561C287.438 385.924 273.363 400 256 400Z" />
        </Icon>
    </>
}
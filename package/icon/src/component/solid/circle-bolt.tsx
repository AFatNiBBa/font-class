
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-bolt` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-bolt?s=solid circle-bolt}
 * @preview ![circle-bolt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUzIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ3IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTM2Mi4yNTQgMjY4LjI3NUwyMDguNjU0IDM5Ni4yODFDMjA1LjY4NiAzOTguNzUgMjAyLjA2MSA0MDAgMTk4LjQwNCA0MDBDMTk0Ljk5OCA0MDAgMTkxLjU5MiAzOTguOTA2IDE4OC43MTcgMzk2Ljc1QzE4Mi43NzkgMzkyLjI1IDE4MC43NDggMzg0LjIxNyAxODMuODExIDM3Ny40MzZMMjMxLjI1IDI3MS45OTRIMTU5Ljk5OEMxNTMuMjQ2IDI3MS45OTQgMTQ3LjI0NiAyNjcuNzc1IDE0NC45NjUgMjYxLjQzMkMxNDIuNjUyIDI1NS4xMTkgMTQ0LjU5IDI0OC4wMjUgMTQ5Ljc0NiAyNDMuNzEzTDMwMy4zNDYgMTE1LjcwN0MzMDkuMDY0IDExMC45MjYgMzE3LjMxNCAxMTAuNzcgMzIzLjI4MyAxMTUuMjM4QzMyOS4yMjEgMTE5LjczOCAzMzEuMjUyIDEyNy43NyAzMjguMTg5IDEzNC41NTFMMjgwLjc1IDIzOS45OTJIMzUyLjAwMkMzNTguNzU0IDIzOS45OTIgMzY0Ljc1NCAyNDQuMjEzIDM2Ny4wMzUgMjUwLjU1N0MzNjkuMzQ4IDI1Ni44NjkgMzY3LjQxIDI2My45NjMgMzYyLjI1NCAyNjguMjc1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleBolt(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM362.254 268.275L208.654 396.281C205.686 398.75 202.061 400 198.404 400C194.998 400 191.592 398.906 188.717 396.75C182.779 392.25 180.748 384.217 183.811 377.436L231.25 271.994H159.998C153.246 271.994 147.246 267.775 144.965 261.432C142.652 255.119 144.59 248.025 149.746 243.713L303.346 115.707C309.064 110.926 317.314 110.77 323.283 115.238C329.221 119.738 331.252 127.77 328.189 134.551L280.75 239.992H352.002C358.754 239.992 364.754 244.213 367.035 250.557C369.348 256.869 367.41 263.963 362.254 268.275Z" />
        </Icon>
    </>
}

import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `clock-rotate-left` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/clock-rotate-left?s=solid clock-rotate-left}
 * @preview ![clock-rotate-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTEuMzAxIDIwNy41ODZDNDg0LjI3IDE3MS40MjYgNDMxLjU2NiAxNS45MDIgMjU2IDE2QzE4MS41NDUgMTUuOTYxIDEyNS4zMzQgNDcuMTUyIDg2LjM0OCA4Ni4zMkw1NC4zOTUgNTQuMzQ0QzQwLjIzMSA0MC4xNjkgMTYgNTAuMjAxIDE2IDcwLjIzOVYxOTEuODJDMTYgMjAwLjY1MyAyMy4xNiAyMDcuODEyIDMxLjk5MiAyMDcuODEySDE1My40NDRDMTczLjQ5NSAyMDcuODEyIDE4My41NCAxODMuNTc0IDE2OS4zNjcgMTY5LjM5MUwxMzEuNjMzIDEzMS42MjlDMTg0LjA4MiA3OC44MiAyNDMuNTQxIDc5LjkzOCAyNTYgNzkuOTQ1QzM0OS45OTYgNzkuOTE0IDQxMy4xNiAxNDcuODE2IDQyNy45MzggMjE3LjUzMUM0NTIuMDQ3IDMzMS4yODEgMzY1LjU1MSA0MzEuOTU3IDI1NiA0MzEuOTU3QzIyNy4zOTkgNDMxLjk1NyAyMDAuMzk2IDQyNS4wNjEgMTc2LjUwOCA0MTIuODgxQzE2My45NSA0MDYuNDc5IDE0OC44MTEgNDA4LjM3NyAxMzguODQ5IDQxOC4zNDhMMTM4Ljg0OSA0MTguMzQ4QzEyMy43MDUgNDMzLjUwNiAxMjcuMjE3IDQ1OS4zNjQgMTQ2LjIzNiA0NjkuMjMyQzE3OS4xMTYgNDg2LjI5MiAyMTYuMzk0IDQ5NiAyNTYgNDk2QzQwNC4zMTQgNDk2IDUyMS4yMDcgMzYxLjM3NSA0OTEuMzAxIDIwNy41ODZaTTI1Ni4wMTQgMTI4QzI0Mi43NjQgMTI4IDIzMi4wMTQgMTM4Ljc1IDIzMi4wMTQgMTUyVjI3MkMyMzIuMDE0IDI3OS41NjIgMjM1LjU3NiAyODYuNjU2IDI0MS42MDcgMjkxLjE4OEwzMDUuNjA3IDMzOS4xODhDMzA5LjkzNiAzNDIuNDM4IDMxNC45ODIgMzQ0IDMxOS45OTggMzQ0QzMyNy4yOTUgMzQ0IDMzNC40OTggMzQwLjY4OCAzMzkuMjE3IDMzNC40MDZDMzQ3LjE3IDMyMy43ODEgMzQ1LjAxNCAzMDguNzUgMzM0LjQyIDMwMC44MTJMMjgwLjAxNCAyNjBWMTUyQzI4MC4wMTQgMTM4Ljc1IDI2OS4yNjQgMTI4IDI1Ni4wMTQgMTI4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ClockRotateLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M491.301 207.586C484.27 171.426 431.566 15.902 256 16C181.545 15.961 125.334 47.152 86.348 86.32L54.395 54.344C40.231 40.169 16 50.201 16 70.239V191.82C16 200.653 23.16 207.812 31.992 207.812H153.444C173.495 207.812 183.54 183.574 169.367 169.391L131.633 131.629C184.082 78.82 243.541 79.938 256 79.945C349.996 79.914 413.16 147.816 427.938 217.531C452.047 331.281 365.551 431.957 256 431.957C227.399 431.957 200.396 425.061 176.508 412.881C163.95 406.479 148.811 408.377 138.849 418.348L138.849 418.348C123.705 433.506 127.217 459.364 146.236 469.232C179.116 486.292 216.394 496 256 496C404.314 496 521.207 361.375 491.301 207.586ZM256.014 128C242.764 128 232.014 138.75 232.014 152V272C232.014 279.562 235.576 286.656 241.607 291.188L305.607 339.188C309.936 342.438 314.982 344 319.998 344C327.295 344 334.498 340.688 339.217 334.406C347.17 323.781 345.014 308.75 334.42 300.812L280.014 260V152C280.014 138.75 269.264 128 256.014 128Z" />
        </Icon>
    </>
}
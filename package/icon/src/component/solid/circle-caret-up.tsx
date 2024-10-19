
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-caret-up` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-up?s=solid circle-caret-up}
 * @preview ![circle-caret-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUzIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ3IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTM4MiAyODkuNTk0QzM3OC4xODggMjk4LjM0NCAzNjkuNTQ3IDMwNCAzNjAgMzA0SDE1MkMxNDIuNDUzIDMwNCAxMzMuODEyIDI5OC4zNDQgMTMwIDI4OS41OTRDMTI2LjE4OCAyODAuODQ0IDEyNy45MjIgMjcwLjY1NiAxMzQuNDA2IDI2My42NTZMMjM4LjQwNiAxNTEuNjU2QzI0Ny41IDE0MS45MDYgMjY0LjUgMTQxLjkwNiAyNzMuNTk0IDE1MS42NTZMMzc3LjU5NCAyNjMuNjU2QzM4NC4wNzggMjcwLjY1NiAzODUuODEyIDI4MC44NDQgMzgyIDI4OS41OTRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleCaretUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM382 289.594C378.188 298.344 369.547 304 360 304H152C142.453 304 133.812 298.344 130 289.594C126.188 280.844 127.922 270.656 134.406 263.656L238.406 151.656C247.5 141.906 264.5 141.906 273.594 151.656L377.594 263.656C384.078 270.656 385.812 280.844 382 289.594Z" />
        </Icon>
    </>
}
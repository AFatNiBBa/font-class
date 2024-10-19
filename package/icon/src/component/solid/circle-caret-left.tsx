
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-caret-left` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-left?s=solid circle-caret-left}
 * @preview ![circle-caret-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUzIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ3IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTMwNCAzNjBDMzA0IDM2OS41MzEgMjk4LjM0NCAzNzguMTg4IDI4OS41OTQgMzgyQzI4Ni41IDM4My4zNDQgMjgzLjI1IDM4NCAyODAgMzg0QzI3NC4wNjIgMzg0IDI2OC4yMDMgMzgxLjc4MSAyNjMuNjcyIDM3Ny41OTRMMTUxLjY3MiAyNzMuNTk0QzE0Ni43ODEgMjY5LjAzMSAxNDQgMjYyLjY4OCAxNDQgMjU2UzE0Ni43ODEgMjQyLjk2OSAxNTEuNjcyIDIzOC40MDZMMjYzLjY3MiAxMzQuNDA2QzI3MC43MDMgMTI3LjkzOCAyODAuODkxIDEyNi4yNSAyODkuNTk0IDEzMEMyOTguMzQ0IDEzMy44MTIgMzA0IDE0Mi40NjkgMzA0IDE1MlYzNjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleCaretLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM304 360C304 369.531 298.344 378.188 289.594 382C286.5 383.344 283.25 384 280 384C274.062 384 268.203 381.781 263.672 377.594L151.672 273.594C146.781 269.031 144 262.688 144 256S146.781 242.969 151.672 238.406L263.672 134.406C270.703 127.938 280.891 126.25 289.594 130C298.344 133.812 304 142.469 304 152V360Z" />
        </Icon>
    </>
}
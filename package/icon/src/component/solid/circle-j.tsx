
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-j` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-j?s=solid circle-j}
 * @preview ![circle-j](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTMzNiAyOTAuNjcyQzMzNiAzNDIuMTQxIDI5Mi45MzggMzg0IDI0MCAzODRTMTQ0IDM0Mi4xNDEgMTQ0IDI5MC42NzJWMjgwQzE0NCAyNjYuNzUgMTU0Ljc1IDI1NiAxNjggMjU2UzE5MiAyNjYuNzUgMTkyIDI4MFYyOTAuNjcyQzE5MiAzMTUuNjcyIDIxMy41MzEgMzM2IDI0MCAzMzZTMjg4IDMxNS42NzIgMjg4IDI5MC42NzJWMTUyQzI4OCAxMzguNzUgMjk4Ljc1IDEyOCAzMTIgMTI4UzMzNiAxMzguNzUgMzM2IDE1MlYyOTAuNjcyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleJ(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM336 290.672C336 342.141 292.938 384 240 384S144 342.141 144 290.672V280C144 266.75 154.75 256 168 256S192 266.75 192 280V290.672C192 315.672 213.531 336 240 336S288 315.672 288 290.672V152C288 138.75 298.75 128 312 128S336 138.75 336 152V290.672Z" />
        </Icon>
    </>
}
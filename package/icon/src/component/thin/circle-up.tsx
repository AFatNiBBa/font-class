
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-up` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up?s=thin circle-up}
 * @preview ![circle-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzIuOTcxIDEyMi4zNDZDMjY4LjI4MyAxMTcuNjYgMjYyLjE0MyAxMTUuMzE2IDI1NiAxMTUuMzE2UzI0My43MTcgMTE3LjY2IDIzOS4wMjkgMTIyLjM0NkwxNDYuMzQ2IDIxNS4wMjlDMTMxLjIyNyAyMzAuMTQ4IDE0MS45MzQgMjU2IDE2My4zMTYgMjU2SDIwOFYzNjBDMjA4IDM3My4yNTYgMjE4Ljc0NiAzODQgMjMyIDM4NEgyODBDMjkzLjI1NCAzODQgMzA0IDM3My4yNTYgMzA0IDM2MFYyNTZIMzQ4LjY4NEMzNzAuMDY2IDI1NiAzODAuNzczIDIzMC4xNDggMzY1LjY1NCAyMTUuMDI5TDI3Mi45NzEgMTIyLjM0NlpNMzU2LjA3NiAyMzUuMDYyQzM1NS40NjEgMjM2LjU0NyAzNTMuNTA4IDI0MCAzNDguNjg0IDI0MEgyODhWMzYwQzI4OCAzNjQuNDEyIDI4NC40MTIgMzY4IDI4MCAzNjhIMjMyQzIyNy41ODggMzY4IDIyNCAzNjQuNDEyIDIyNCAzNjBWMjQwSDE2My4zMTZDMTU4LjQ5MiAyNDAgMTU2LjUzOSAyMzYuNTQ3IDE1NS45MjQgMjM1LjA2MkMxNTUuMzExIDIzMy41NzYgMTU0LjI0OCAyMjkuNzU2IDE1Ny42NiAyMjYuMzQ0TDI1MC4zNDQgMTMzLjY2QzI1Mi4zODMgMTMxLjYyMSAyNTQuNzYyIDEzMS4zMTYgMjU2IDEzMS4zMTZTMjU5LjYxNyAxMzEuNjIxIDI2MS42NTYgMTMzLjY2TDM1NC4zNCAyMjYuMzQ0QzM1Ny43NTIgMjI5Ljc1NiAzNTYuNjg5IDIzMy41NzYgMzU2LjA3NiAyMzUuMDYyWk0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0ODBDMTMyLjQ4NiA0ODAgMzIgMzc5LjUxNCAzMiAyNTZTMTMyLjQ4NiAzMiAyNTYgMzJTNDgwIDEzMi40ODYgNDgwIDI1NlMzNzkuNTE0IDQ4MCAyNTYgNDgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M272.971 122.346C268.283 117.66 262.143 115.316 256 115.316S243.717 117.66 239.029 122.346L146.346 215.029C131.227 230.148 141.934 256 163.316 256H208V360C208 373.256 218.746 384 232 384H280C293.254 384 304 373.256 304 360V256H348.684C370.066 256 380.773 230.148 365.654 215.029L272.971 122.346ZM356.076 235.062C355.461 236.547 353.508 240 348.684 240H288V360C288 364.412 284.412 368 280 368H232C227.588 368 224 364.412 224 360V240H163.316C158.492 240 156.539 236.547 155.924 235.062C155.311 233.576 154.248 229.756 157.66 226.344L250.344 133.66C252.383 131.621 254.762 131.316 256 131.316S259.617 131.621 261.656 133.66L354.34 226.344C357.752 229.756 356.689 233.576 356.076 235.062ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480Z" />
        </Icon>
    </>
}
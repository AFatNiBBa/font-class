
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-chevron-up` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-up?s=thin circle-chevron-up}
 * @preview ![circle-chevron-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MyAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUzIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0NyAxNiAyNTYgMTZaTTI1NiA0ODBDMTMyLjQ4NiA0ODAgMzIgMzc5LjUxNCAzMiAyNTZTMTMyLjQ4NiAzMiAyNTYgMzJTNDgwIDEzMi40ODYgNDgwIDI1NlMzNzkuNTE0IDQ4MCAyNTYgNDgwWk0yNjEuODU3IDE3MC41NDdDMjU4Ljg1NyAxNjcuMjk3IDI1My4xNyAxNjcuMjk3IDI1MC4xNyAxNzAuNTQ3TDEzOC4xNyAyOTAuNTQ3QzEzNS4xMzkgMjkzLjc2NiAxMzUuMzI2IDI5OC44MjggMTM4LjU0NSAzMDEuODQ0QzE0MS43OTUgMzA0Ljg0NCAxNDYuODI2IDMwNC43MDMgMTQ5Ljg1NyAzMDEuNDUzTDI1Ni4wMTQgMTg3LjcxOUwzNjIuMTcgMzAxLjQ1M0MzNjMuNzMyIDMwMy4xNDEgMzY1Ljg4OSAzMDQgMzY4LjAxNCAzMDRDMzY5Ljk4MiAzMDQgMzcxLjkyIDMwMy4yODEgMzczLjQ4MiAzMDEuODQ0QzM3Ni43MDEgMjk4LjgyOCAzNzYuODg5IDI5My43NjYgMzczLjg1NyAyOTAuNTQ3TDI2MS44NTcgMTcwLjU0N1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleChevronUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.453 16 16 123.451 16 256S123.453 496 256 496S496 388.549 496 256S388.547 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480ZM261.857 170.547C258.857 167.297 253.17 167.297 250.17 170.547L138.17 290.547C135.139 293.766 135.326 298.828 138.545 301.844C141.795 304.844 146.826 304.703 149.857 301.453L256.014 187.719L362.17 301.453C363.732 303.141 365.889 304 368.014 304C369.982 304 371.92 303.281 373.482 301.844C376.701 298.828 376.889 293.766 373.857 290.547L261.857 170.547Z" />
        </Icon>
    </>
}
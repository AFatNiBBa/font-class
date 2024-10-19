
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-play` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-play?s=solid circle-play}
 * @preview ![circle-play](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTM3Mi41MTYgMjc2LjQ4TDIyOC41MTYgMzY0LjQ4QzIyNC42OCAzNjYuODI0IDIyMC4zNDQgMzY4LjAwNCAyMTYgMzY4LjAwNEMyMDIuMzA3IDM2OC4wMDQgMTkyIDM1Ni44MDcgMTkyIDM0NC4wMDRWMTY4LjAwNEMxOTIgMTU1LjMxNCAyMDIuMTk3IDE0NC4wMTIgMjE2LjAwNiAxNDQuMDEyQzIyMC4zNSAxNDQuMDEyIDIyNC42ODQgMTQ1LjE4OCAyMjguNTE2IDE0Ny41MjdMMzcyLjUxNiAyMzUuNTI3QzM3OS42NDggMjM5Ljg4NyAzODQgMjQ3LjY0NSAzODQgMjU2LjAwNFMzNzkuNjQ4IDI3Mi4xMjEgMzcyLjUxNiAyNzYuNDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CirclePlay(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM372.516 276.48L228.516 364.48C224.68 366.824 220.344 368.004 216 368.004C202.307 368.004 192 356.807 192 344.004V168.004C192 155.314 202.197 144.012 216.006 144.012C220.35 144.012 224.684 145.188 228.516 147.527L372.516 235.527C379.648 239.887 384 247.645 384 256.004S379.648 272.121 372.516 276.48Z" />
        </Icon>
    </>
}
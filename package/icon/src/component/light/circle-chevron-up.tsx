
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-chevron-up` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-up?s=light circle-chevron-up}
 * @preview ![circle-chevron-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNjcuMzEyIDE2NC42ODhDMjY0LjE4OCAxNjEuNTYyIDI2MC4wOTQgMTYwIDI1NiAxNjBTMjQ3LjgxMiAxNjEuNTYyIDI0NC42ODggMTY0LjY4OEwxMzIuNjg4IDI3Ni42ODhDMTI2LjQzOCAyODIuOTM4IDEyNi40MzggMjkzLjA2MyAxMzIuNjg4IDI5OS4zMTJTMTQ5LjA2MyAzMDUuNTYyIDE1NS4zMTIgMjk5LjMxMkwyNTYgMTk4LjYyNUwzNTYuNjg4IDI5OS4zMTJDMzYyLjkzOCAzMDUuNTYyIDM3My4wNjMgMzA1LjU2MiAzNzkuMzEyIDI5OS4zMTJTMzg1LjU2MiAyODIuOTM3IDM3OS4zMTIgMjc2LjY4OEwyNjcuMzEyIDE2NC42ODhaTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTEgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDkgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMjU2IDQ2NEMxNDEuMzA5IDQ2NCA0OCAzNzAuNjkxIDQ4IDI1NlMxNDEuMzA5IDQ4IDI1NiA0OFM0NjQgMTQxLjMwOSA0NjQgMjU2UzM3MC42OTEgNDY0IDI1NiA0NjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleChevronUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M267.312 164.688C264.188 161.562 260.094 160 256 160S247.812 161.562 244.688 164.688L132.688 276.688C126.438 282.938 126.438 293.063 132.688 299.312S149.063 305.562 155.312 299.312L256 198.625L356.688 299.312C362.938 305.562 373.063 305.562 379.312 299.312S385.562 282.937 379.312 276.688L267.312 164.688ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464Z" />
        </Icon>
    </>
}
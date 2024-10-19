
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-chevron-right` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-right?s=light circle-chevron-right}
 * @preview ![circle-chevron-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMzUuMzEyIDEzMi42ODhDMjI5LjA2MiAxMjYuNDM4IDIxOC45MzcgMTI2LjQzOCAyMTIuNjg4IDEzMi42ODhTMjA2LjQzOCAxNDkuMDYzIDIxMi42ODggMTU1LjMxMkwzMTMuMzc1IDI1NkwyMTIuNjg4IDM1Ni42ODhDMjA2LjQzOCAzNjIuOTM4IDIwNi40MzggMzczLjA2MyAyMTIuNjg4IDM3OS4zMTJTMjI5LjA2MyAzODUuNTYyIDIzNS4zMTIgMzc5LjMxMkwzNDcuMzEyIDI2Ny4zMTJDMzUwLjQzOCAyNjQuMTg4IDM1MiAyNjAuMDk0IDM1MiAyNTZTMzUwLjQzOCAyNDcuODEyIDM0Ny4zMTIgMjQ0LjY4OEwyMzUuMzEyIDEzMi42ODhaTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTEgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDkgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMjU2IDQ2NEMxNDEuMzA5IDQ2NCA0OCAzNzAuNjkxIDQ4IDI1NlMxNDEuMzA5IDQ4IDI1NiA0OFM0NjQgMTQxLjMwOSA0NjQgMjU2UzM3MC42OTEgNDY0IDI1NiA0NjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleChevronRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M235.312 132.688C229.062 126.438 218.937 126.438 212.688 132.688S206.438 149.063 212.688 155.312L313.375 256L212.688 356.688C206.438 362.938 206.438 373.063 212.688 379.312S229.063 385.562 235.312 379.312L347.312 267.312C350.438 264.188 352 260.094 352 256S350.438 247.812 347.312 244.688L235.312 132.688ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464Z" />
        </Icon>
    </>
}
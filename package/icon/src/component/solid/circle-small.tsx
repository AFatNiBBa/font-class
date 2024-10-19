
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-small` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-small?s=solid circle-small}
 * @preview ![circle-small](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMjU2QzMyMCAzNDQuMzY2IDI0OC4zNjYgNDE2IDE2MCA0MTZTMCAzNDQuMzY2IDAgMjU2UzcxLjYzNCA5NiAxNjAgOTZTMzIwIDE2Ny42MzQgMzIwIDI1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleSmall(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M320 256C320 344.366 248.366 416 160 416S0 344.366 0 256S71.634 96 160 96S320 167.634 320 256Z" />
        </Icon>
    </>
}
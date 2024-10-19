
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-right` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-right?s=solid circle-chevron-right}
 * @preview ![circle-chevron-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQyIDE2IDE2IDEyMy40MTggMTYgMjU2QzE2IDM4OC41NzggMTIzLjQyIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTc4IDQ5NiAyNTZDNDk2IDEyMy40MTggMzg4LjU4IDE2IDI1NiAxNlpNMzU4LjYyNSAyNzguNjI1TDI0Ni42MjUgMzkwLjYyNUMyMzQuMTI1IDQwMy4xMjUgMjEzLjg3NSA0MDMuMTI1IDIwMS4zNzUgMzkwLjYyNVMxODguODc1IDM1Ny44NzUgMjAxLjM3NSAzNDUuMzc1TDI5MC43NSAyNTZMMjAxLjM3NSAxNjYuNjI1QzE4OC44NzUgMTU0LjEyNSAxODguODc1IDEzMy44NzUgMjAxLjM3NSAxMjEuMzc1UzIzNC4xMjUgMTA4Ljg3NSAyNDYuNjI1IDEyMS4zNzVMMzU4LjYyNSAyMzMuMzc1QzM2NC44NzUgMjM5LjYyNSAzNjggMjQ3LjgxMiAzNjggMjU2UzM2NC44NzUgMjcyLjM3NSAzNTguNjI1IDI3OC42MjVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleChevronRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.42 16 16 123.418 16 256C16 388.578 123.42 496 256 496S496 388.578 496 256C496 123.418 388.58 16 256 16ZM358.625 278.625L246.625 390.625C234.125 403.125 213.875 403.125 201.375 390.625S188.875 357.875 201.375 345.375L290.75 256L201.375 166.625C188.875 154.125 188.875 133.875 201.375 121.375S234.125 108.875 246.625 121.375L358.625 233.375C364.875 239.625 368 247.812 368 256S364.875 272.375 358.625 278.625Z" />
        </Icon>
    </>
}
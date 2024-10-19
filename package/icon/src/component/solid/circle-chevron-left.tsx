
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-chevron-left` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-left?s=solid circle-chevron-left}
 * @preview ![circle-chevron-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQyIDE2IDE2IDEyMy40MTggMTYgMjU2QzE2IDM4OC41NzggMTIzLjQyIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTc4IDQ5NiAyNTZDNDk2IDEyMy40MTggMzg4LjU4IDE2IDI1NiAxNlpNMzEwLjYyNSAzNDUuMzc1QzMyMy4xMjUgMzU3Ljg3NSAzMjMuMTI1IDM3OC4xMjUgMzEwLjYyNSAzOTAuNjI1UzI3Ny44NzUgNDAzLjEyNSAyNjUuMzc1IDM5MC42MjVMMTUzLjM3NSAyNzguNjI1QzE0Ny4xMjUgMjcyLjM3NSAxNDQgMjY0LjE4OCAxNDQgMjU2UzE0Ny4xMjUgMjM5LjYyNSAxNTMuMzc1IDIzMy4zNzVMMjY1LjM3NSAxMjEuMzc1QzI3Ny44NzUgMTA4Ljg3NSAyOTguMTI1IDEwOC44NzUgMzEwLjYyNSAxMjEuMzc1UzMyMy4xMjUgMTU0LjEyNSAzMTAuNjI1IDE2Ni42MjVMMjIxLjI1IDI1NkwzMTAuNjI1IDM0NS4zNzVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleChevronLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.42 16 16 123.418 16 256C16 388.578 123.42 496 256 496S496 388.578 496 256C496 123.418 388.58 16 256 16ZM310.625 345.375C323.125 357.875 323.125 378.125 310.625 390.625S277.875 403.125 265.375 390.625L153.375 278.625C147.125 272.375 144 264.188 144 256S147.125 239.625 153.375 233.375L265.375 121.375C277.875 108.875 298.125 108.875 310.625 121.375S323.125 154.125 310.625 166.625L221.25 256L310.625 345.375Z" />
        </Icon>
    </>
}
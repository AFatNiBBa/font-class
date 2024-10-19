
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-chevron-up` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-up?s=solid circle-chevron-up}
 * @preview ![circle-chevron-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQyIDE2IDE2IDEyMy40MTggMTYgMjU2QzE2IDM4OC41NzggMTIzLjQyIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTc4IDQ5NiAyNTZDNDk2IDEyMy40MTggMzg4LjU4IDE2IDI1NiAxNlpNMzkwLjYyNSAzMTAuNjI1QzM3OC4xMjUgMzIzLjEyNSAzNTcuODc1IDMyMy4xMjUgMzQ1LjM3NSAzMTAuNjI1TDI1NiAyMjEuMjVMMTY2LjYyNSAzMTAuNjI1QzE1NC4xMjUgMzIzLjEyNSAxMzMuODc1IDMyMy4xMjUgMTIxLjM3NSAzMTAuNjI1UzEwOC44NzUgMjc3Ljg3NSAxMjEuMzc1IDI2NS4zNzVMMjMzLjM3NSAxNTMuMzc1QzIzOS42MjUgMTQ3LjEyNSAyNDcuODEyIDE0NCAyNTYgMTQ0UzI3Mi4zNzUgMTQ3LjEyNSAyNzguNjI1IDE1My4zNzVMMzkwLjYyNSAyNjUuMzc1QzQwMy4xMjUgMjc3Ljg3NSA0MDMuMTI1IDI5OC4xMjUgMzkwLjYyNSAzMTAuNjI1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleChevronUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.42 16 16 123.418 16 256C16 388.578 123.42 496 256 496S496 388.578 496 256C496 123.418 388.58 16 256 16ZM390.625 310.625C378.125 323.125 357.875 323.125 345.375 310.625L256 221.25L166.625 310.625C154.125 323.125 133.875 323.125 121.375 310.625S108.875 277.875 121.375 265.375L233.375 153.375C239.625 147.125 247.812 144 256 144S272.375 147.125 278.625 153.375L390.625 265.375C403.125 277.875 403.125 298.125 390.625 310.625Z" />
        </Icon>
    </>
}
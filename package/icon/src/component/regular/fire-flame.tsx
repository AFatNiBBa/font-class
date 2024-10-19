
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `fire-flame` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/fire-flame?s=regular fire-flame}
 * @preview ![fire-flame](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMEM3OS43NSAxMDEuMzc1IDAgMjIwLjg3NSAwIDMwMC41QzAgNDI1IDc5IDUxMiAxOTIgNTEyUzM4NCA0MjUgMzg0IDMwMC41QzM4NCAyMjAuNjI1IDMwMy43NSAxMDAuODc1IDE5MiAwWk0xOTIgNDY0QzEwNS44NzUgNDY0IDQ4IDM5OC4yNSA0OCAzMDAuNUM0OCAyNTQuMjUgOTMuMjUgMTYzLjg3NSAxOTIgNjYuMTI1QzI3OC4yNSAxNTIgMzM2IDI0NC44NzUgMzM2IDMwMC41QzMzNiAzOTguMjUgMjc4LjEyNSA0NjQgMTkyIDQ2NFpNMjM3LjEyNSAyMzkuNjI1QzIxNy4xMjUgMjIyLjYyNSAxOTguMzc1IDIwNi42MjUgMTk4LjM3NSAxODEuNUMxOTguMzc1IDE3OC4wMDEgMTk1LjYyNSAxNzYuNzUgMTk0LjM3NSAxNzYuMzc1QzE5MiAxNzUuNjI1IDE4OC42MjUgMTc1Ljc1IDE4Ni4zNzUgMTc4Ljc1QzEzMS41IDI1My4zNzUgMjE2IDI0OCAyMTYgMzAyLjAwMUMyMTYgMzI1LjI1IDE5Ny4yNSAzNDQgMTc0IDM0NEMxNTAuNzUgMzQ0IDEzMiAzMjUuMjUgMTMyIDMwMi4wMDFWMjcyQzEzMiAyNjkuNjI1IDEzMC41IDI2Ny4zNzUgMTI4LjI1IDI2Ni41QzEyNiAyNjUuNSAxMjMuNSAyNjYuMDAxIDEyMS43NSAyNjcuNzVDMTE1LjM3NSAyNzQuMDAxIDk2IDI5NC41IDk2IDMyNy42MjVDOTYgMzc2LjM3NSAxMzkgNDE2IDE5MiA0MTZTMjg4IDM3Ni4zNzUgMjg4IDMyNy42MjVDMjg4IDI4My4yNSAyNjIuMTI1IDI2MS4xMjUgMjM3LjEyNSAyMzkuNjI1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FireFlame(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 0C79.75 101.375 0 220.875 0 300.5C0 425 79 512 192 512S384 425 384 300.5C384 220.625 303.75 100.875 192 0ZM192 464C105.875 464 48 398.25 48 300.5C48 254.25 93.25 163.875 192 66.125C278.25 152 336 244.875 336 300.5C336 398.25 278.125 464 192 464ZM237.125 239.625C217.125 222.625 198.375 206.625 198.375 181.5C198.375 178.001 195.625 176.75 194.375 176.375C192 175.625 188.625 175.75 186.375 178.75C131.5 253.375 216 248 216 302.001C216 325.25 197.25 344 174 344C150.75 344 132 325.25 132 302.001V272C132 269.625 130.5 267.375 128.25 266.5C126 265.5 123.5 266.001 121.75 267.75C115.375 274.001 96 294.5 96 327.625C96 376.375 139 416 192 416S288 376.375 288 327.625C288 283.25 262.125 261.125 237.125 239.625Z" />
        </Icon>
    </>
}
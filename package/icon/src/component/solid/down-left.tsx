
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `down-left` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/down-left?s=solid down-left}
 * @preview ![down-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTMuMzc0IDg5LjM3M0wzNTguNjI4IDEzNC42MjlDMzcxLjEyNCAxNDcuMTI1IDM3MS4xMjQgMTY3LjM4NSAzNTguNjI4IDE3OS44ODNMMjI5LjAxNiAzMDkuNDkyTDI5Ni44OTggMzc3LjM3NUMzMDYuMDQ3IDM4Ni41MjMgMzA4Ljc4NSA0MDAuMjkxIDMwMy44MzYgNDEyLjI0NEMyOTguODc5IDQyNC4yMTEgMjg3LjIyMyA0MzIgMjc0LjI3IDQzMkg0Ny45OTZDMzkuMTYgNDMyIDMxLjE2IDQyOC40MiAyNS4zNzEgNDIyLjYzMUMxOS41ODIgNDE2Ljg0IDE2IDQwOC44NDIgMTYgNDAwLjAwMlYxNzMuNzI5QzE2IDE2MC43NzkgMjMuNzg5IDE0OS4xMjMgMzUuNzU0IDE0NC4xNjJDNDcuNzA3IDEzOS4yMTMgNjEuNDc3IDE0MS45NTMgNzAuNjI1IDE1MS4xMDJMMTM4LjUwNCAyMTguOTg0TDI2OC4xMTYgODkuMzczQzI4MC42MTYgNzYuODc1IDMwMC44NzQgNzYuODc3IDMxMy4zNzQgODkuMzczWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function DownLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M313.374 89.373L358.628 134.629C371.124 147.125 371.124 167.385 358.628 179.883L229.016 309.492L296.898 377.375C306.047 386.523 308.785 400.291 303.836 412.244C298.879 424.211 287.223 432 274.27 432H47.996C39.16 432 31.16 428.42 25.371 422.631C19.582 416.84 16 408.842 16 400.002V173.729C16 160.779 23.789 149.123 35.754 144.162C47.707 139.213 61.477 141.953 70.625 151.102L138.504 218.984L268.116 89.373C280.616 76.875 300.874 76.877 313.374 89.373Z" />
        </Icon>
    </>
}
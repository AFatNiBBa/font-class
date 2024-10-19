
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `spa` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/spa?s=regular spa}
 * @preview ![spa](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjguMjUgMTkyQzU0Ni44NzUgMTkyLjEyNSA0ODMuNzUgMTk1LjYyNSA0MjAuNSAyMjhDMzkzLjg3NSAxNDkuNzUgMzUxLjI1IDgxLjUgMjk4Ljc1IDM1Ljc1QzI5NS44NzUgMzMuMjUgMjkxLjg3NSAzMiAyODggMzJTMjgwLjI1IDMzLjI1IDI3Ny4yNSAzNS43NUMyMjQuNzUgODEuNSAxODIuMTI1IDE0OS43NSAxNTUuNSAyMjhDOTIuMjUgMTk1LjYyNSAyOS4xMjUgMTkyLjEyNSA3Ljc1IDE5MkMzLjM3NSAxOTIgMCAxOTUuMzc1IDAgMTk5Ljg3NUMwLjI1IDIyNy43NSA3LjEyNSAzMjYgODguNzUgMzk5LjEyNUMxNzEgNDc5LjEyNSAyNTIuMzc1IDQ4MCAyODUuODc1IDQ4MEgyOTAuMzc1QzMyMy44NzUgNDgwIDQwNS4xMjUgNDc5IDQ4Ny4yNSAzOTkuMTI1QzU2OC44NzUgMzI2IDU3NS43NSAyMjcuNzUgNTc2IDE5OS44NzVDNTc2IDE5NS4zNzUgNTcyLjYyNSAxOTIgNTY4LjI1IDE5MlpNMTIyLjI1IDM2NC43NUwxMjEuNSAzNjRMMTIwLjc1IDM2My4zNzVDNzguMzc1IDMyNS4zNzUgNjAuNjI1IDI3OSA1My4xMjUgMjQ0LjEyNUM5MiAyNTAuNzUgMTQ1LjEyNSAyNjcuNSAxODguMTI1IDMwOS4zNzVMMTg4Ljg3NSAzMTAuMTI1TDE4OS42MjUgMzEwLjc1QzIxMy4xMjUgMzMxLjg3NSAyMzAuNzUgMzU3LjEyNSAyNDMuNjI1IDM4OC4yNUwyNjEuMzc1IDQzMS4yNUMyMjcuNjI1IDQyOC42MjUgMTc1Ljc1IDQxNi44NzUgMTIyLjI1IDM2NC43NVpNMjg4IDM2OS44NzVDMjc1IDMzOC4yNSAyNTQuNzUgMzA0LjYyNSAyMjEuNjI1IDI3NUMyMTMuNjI1IDI2Ny4yNSAyMDUuMzc1IDI2MC43NSAxOTcgMjU0LjM3NUMyMTcgMTkwLjUgMjQ4Ljc1IDEzMy42MjUgMjg4IDkyQzMyNy4yNSAxMzMuNjI1IDM1OSAxOTAuNSAzNzkgMjU0LjM3NUMzNzAuNjI1IDI2MC43NSAzNjIuMzc1IDI2Ny4yNSAzNTQuMzc1IDI3NUMzMjEuMjUgMzA0LjYyNSAzMDEgMzM4LjI1IDI4OCAzNjkuODc1Wk00NTUuMjUgMzYzLjM3NUw0NTQuNSAzNjRMNDUzLjc1IDM2NC43NUM0MDAuMTI1IDQxNyAzNDguMjUgNDI4LjYyNSAzMTQuNSA0MzEuMjVMMzMyLjM3NSAzODguMjVDMzQ1LjI1IDM1Ny4xMjUgMzYyLjg3NSAzMzEuODc1IDM4Ni4zNzUgMzEwLjc1TDM4Ny4xMjUgMzEwLjEyNUwzODcuODc1IDMwOS4zNzVDNDMwLjg3NSAyNjcuNSA0ODQuMTI1IDI1MC43NSA1MjIuODc1IDI0NC4xMjVDNTE1LjM3NSAyNzkgNDk3LjYyNSAzMjUuMzc1IDQ1NS4yNSAzNjMuMzc1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Spa(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M568.25 192C546.875 192.125 483.75 195.625 420.5 228C393.875 149.75 351.25 81.5 298.75 35.75C295.875 33.25 291.875 32 288 32S280.25 33.25 277.25 35.75C224.75 81.5 182.125 149.75 155.5 228C92.25 195.625 29.125 192.125 7.75 192C3.375 192 0 195.375 0 199.875C0.25 227.75 7.125 326 88.75 399.125C171 479.125 252.375 480 285.875 480H290.375C323.875 480 405.125 479 487.25 399.125C568.875 326 575.75 227.75 576 199.875C576 195.375 572.625 192 568.25 192ZM122.25 364.75L121.5 364L120.75 363.375C78.375 325.375 60.625 279 53.125 244.125C92 250.75 145.125 267.5 188.125 309.375L188.875 310.125L189.625 310.75C213.125 331.875 230.75 357.125 243.625 388.25L261.375 431.25C227.625 428.625 175.75 416.875 122.25 364.75ZM288 369.875C275 338.25 254.75 304.625 221.625 275C213.625 267.25 205.375 260.75 197 254.375C217 190.5 248.75 133.625 288 92C327.25 133.625 359 190.5 379 254.375C370.625 260.75 362.375 267.25 354.375 275C321.25 304.625 301 338.25 288 369.875ZM455.25 363.375L454.5 364L453.75 364.75C400.125 417 348.25 428.625 314.5 431.25L332.375 388.25C345.25 357.125 362.875 331.875 386.375 310.75L387.125 310.125L387.875 309.375C430.875 267.5 484.125 250.75 522.875 244.125C515.375 279 497.625 325.375 455.25 363.375Z" />
        </Icon>
    </>
}
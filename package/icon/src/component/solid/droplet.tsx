
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `droplet` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/droplet?s=solid droplet}
 * @preview ![droplet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjEuMjUgMjIuMTI3QzIxMy4yNSAtNi43NDcgMTcxLjc1IC03Ljk5NyAxNjIuNzUgMjIuMTI3QzExNiAxNzkuODc3IDE2IDIyMi43NTEgMTYgMzMzLjg3NkMxNiA0MzIuMzc1IDk0Ljc1IDUxMiAxOTIgNTEyUzM2OCA0MzIuMzc1IDM2OCAzMzMuODc2QzM2OCAyMjIuMTI2IDI2OC4yNSAxODAuNjI3IDIyMS4yNSAyMi4xMjdaTTE5MiA0NDhDMTMwLjI1IDQ0OCA4MCAzOTcuNzUxIDgwIDMzNi4wMDFDODAgMzI3LjEyNiA4Ny4xMjUgMzIwLjAwMSA5NiAzMjAuMDAxUzExMiAzMjcuMTI2IDExMiAzMzYuMDAxQzExMiAzODAuMTI2IDE0Ny44NzUgNDE2IDE5MiA0MTZDMjAwLjg3NSA0MTYgMjA4IDQyMy4xMjUgMjA4IDQzMkMyMDggNDQwLjg3NSAyMDAuODc1IDQ0OCAxOTIgNDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Droplet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M221.25 22.127C213.25 -6.747 171.75 -7.997 162.75 22.127C116 179.877 16 222.751 16 333.876C16 432.375 94.75 512 192 512S368 432.375 368 333.876C368 222.126 268.25 180.627 221.25 22.127ZM192 448C130.25 448 80 397.751 80 336.001C80 327.126 87.125 320.001 96 320.001S112 327.126 112 336.001C112 380.126 147.875 416 192 416C200.875 416 208 423.125 208 432C208 440.875 200.875 448 192 448Z" />
        </Icon>
    </>
}
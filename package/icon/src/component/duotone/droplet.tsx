
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `droplet` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/droplet?s=duotone droplet}
 * @preview ![droplet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIyMS4yNSAyMi4xMjhDMjEzLjI1IC02Ljc0NyAxNzEuNzUgLTcuOTk3IDE2Mi43NSAyMi4xMjhDMTE2IDE3OS44NzcgMTYgMjIyLjc1MiAxNiAzMzMuODc2QzE2IDQzMi4zNzYgOTQuNzUgNTEyLjAwMSAxOTIgNTEyLjAwMVMzNjggNDMyLjM3NiAzNjggMzMzLjg3NkMzNjggMjIyLjEyNyAyNjguMjUgMTgwLjYyNyAyMjEuMjUgMjIuMTI4Wk0xOTIgNDQ4LjAwMUMxMzAuMjUgNDQ4LjAwMSA4MCAzOTcuNzUxIDgwIDMzNi4wMDFDODAgMzI3LjEyNiA4Ny4xMjUgMzIwLjAwMiA5NiAzMjAuMDAyUzExMiAzMjcuMTI2IDExMiAzMzYuMDAxQzExMiAzODAuMTI2IDE0Ny44NzUgNDE2LjAwMSAxOTIgNDE2LjAwMUMyMDAuODc1IDQxNi4wMDEgMjA4IDQyMy4xMjYgMjA4IDQzMi4wMDFDMjA4IDQ0MC44NzYgMjAwLjg3NSA0NDguMDAxIDE5MiA0NDguMDAxWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0xOTIgNDQ4LjAwMUMxMzAuMjUgNDQ4LjAwMSA4MCAzOTcuNzUxIDgwIDMzNi4wMDFDODAgMzI3LjEyNiA4Ny4xMjUgMzIwLjAwMiA5NiAzMjAuMDAyUzExMiAzMjcuMTI2IDExMiAzMzYuMDAxQzExMiAzODAuMTI2IDE0Ny44NzUgNDE2LjAwMSAxOTIgNDE2LjAwMUMyMDAuODc1IDQxNi4wMDEgMjA4IDQyMy4xMjYgMjA4IDQzMi4wMDFDMjA4IDQ0MC44NzYgMjAwLjg3NSA0NDguMDAxIDE5MiA0NDguMDAxWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Droplet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M221.25 22.128C213.25 -6.747 171.75 -7.997 162.75 22.128C116 179.877 16 222.752 16 333.876C16 432.376 94.75 512.001 192 512.001S368 432.376 368 333.876C368 222.127 268.25 180.627 221.25 22.128ZM192 448.001C130.25 448.001 80 397.751 80 336.001C80 327.126 87.125 320.002 96 320.002S112 327.126 112 336.001C112 380.126 147.875 416.001 192 416.001C200.875 416.001 208 423.126 208 432.001C208 440.876 200.875 448.001 192 448.001Z" />
            <path d="M192 448.001C130.25 448.001 80 397.751 80 336.001C80 327.126 87.125 320.002 96 320.002S112 327.126 112 336.001C112 380.126 147.875 416.001 192 416.001C200.875 416.001 208 423.126 208 432.001C208 440.876 200.875 448.001 192 448.001Z" />
        </Icon>
    </>
}
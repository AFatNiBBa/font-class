
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `up-right` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/up-right?s=duotone up-right}
 * @preview ![up-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTcwLjYyNiA0MjIuNjI3TDI1LjM3MiAzNzcuMzcxQzEyLjg3NiAzNjQuODc1IDEyLjg3NiAzNDQuNjE1IDI1LjM3MiAzMzIuMTE3TDE1NC45ODQgMjAyLjUwOEwyNDUuNDk2IDI5My4wMTZMMTE1Ljg4NCA0MjIuNjI3QzEwMy4zODQgNDM1LjEyNSA4My4xMjYgNDM1LjEyMyA3MC42MjYgNDIyLjYyN1oiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNODcuMzcyIDEzNC42MjVDNzguMjIzIDEyNS40NzcgNzUuNDg1IDExMS43MDkgODAuNDM0IDk5Ljc1NkM4NS4zOTEgODcuNzg5IDk3LjA0NyA4MCAxMTAuMDAxIDgwSDMzNi4yNzRDMzQ1LjExIDgwIDM1My4xMSA4My41OCAzNTguODk5IDg5LjM2OUMzNjQuNjg4IDk1LjE2IDM2OC4yNyAxMDMuMTU4IDM2OC4yNyAxMTEuOTk4VjMzOC4yNzFDMzY4LjI3IDM1MS4yMjEgMzYwLjQ4MSAzNjIuODc3IDM0OC41MTYgMzY3LjgzOEMzMzYuNTYzIDM3Mi43ODcgMzIyLjc5NCAzNzAuMDQ3IDMxMy42NDUgMzYwLjg5OEw4Ny4zNzIgMTM0LjYyNVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function UpRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path opacity={.4} d="M70.626 422.627L25.372 377.371C12.876 364.875 12.876 344.615 25.372 332.117L154.984 202.508L245.496 293.016L115.884 422.627C103.384 435.125 83.126 435.123 70.626 422.627Z" />
            <path d="M87.372 134.625C78.223 125.477 75.485 111.709 80.434 99.756C85.391 87.789 97.047 80 110.001 80H336.274C345.11 80 353.11 83.58 358.899 89.369C364.688 95.16 368.27 103.158 368.27 111.998V338.271C368.27 351.221 360.481 362.877 348.516 367.838C336.563 372.787 322.794 370.047 313.645 360.898L87.372 134.625Z" />
        </Icon>
    </>
}
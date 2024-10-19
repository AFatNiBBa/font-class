
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `computer-mouse` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/computer-mouse?s=light computer-mouse}
 * @preview ![computer-mouse](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMEgxNjBDNzEuNjI1IDAgMCA3MS42MjUgMCAxNjBWMzUyQzAgNDQwLjM3NSA3MS42MjUgNTEyIDE2MCA1MTJIMjI0QzMxMi4zNzUgNTEyIDM4NCA0NDAuMzc1IDM4NCAzNTJWMTYwQzM4NCA3MS42MjUgMzEyLjM3NSAwIDIyNCAwWk0zMiAxNjBDMzIuMTI1IDg5LjM3NSA4OS4zNzUgMzIuMTI1IDE2MCAzMkgxNzZWMTkySDMyVjE2MFpNMzUyIDM1MkMzNTEuODc1IDQyMi42MjUgMjk0LjYyNSA0NzkuODc1IDIyNCA0ODBIMTYwQzg5LjM3NSA0NzkuODc1IDMyLjEyNSA0MjIuNjI1IDMyIDM1MlYyMjRIMzUyVjM1MlpNMzUyIDE5MkgyMDhWMzJIMjI0QzI5NC42MjUgMzIuMTI1IDM1MS44NzUgODkuMzc1IDM1MiAxNjBWMTkyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ComputerMouse(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M224 0H160C71.625 0 0 71.625 0 160V352C0 440.375 71.625 512 160 512H224C312.375 512 384 440.375 384 352V160C384 71.625 312.375 0 224 0ZM32 160C32.125 89.375 89.375 32.125 160 32H176V192H32V160ZM352 352C351.875 422.625 294.625 479.875 224 480H160C89.375 479.875 32.125 422.625 32 352V224H352V352ZM352 192H208V32H224C294.625 32.125 351.875 89.375 352 160V192Z" />
        </Icon>
    </>
}

import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `computer-mouse-scrollwheel` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/computer-mouse-scrollwheel?s=solid computer-mouse-scrollwheel}
 * @preview ![computer-mouse-scrollwheel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMEgxNjBDNzEuNjI1IDAgMCA3MS42MjUgMCAxNjBWMzUyQzAgNDQwLjM3NSA3MS42MjUgNTEyIDE2MCA1MTJIMjI0QzMxMi4zNzUgNTEyIDM4NCA0NDAuMzc1IDM4NCAzNTJWMTYwQzM4NCA3MS42MjUgMzEyLjM3NSAwIDIyNCAwWk0yMjQgMTYwQzIyNCAxNzcuNjI1IDIwOS42MjUgMTkyIDE5MiAxOTJDMTc0LjM3NSAxOTIgMTYwIDE3Ny42MjUgMTYwIDE2MFYxMjhDMTYwIDExMC4zNzUgMTc0LjM3NSA5NiAxOTIgOTZDMjA5LjYyNSA5NiAyMjQgMTEwLjM3NSAyMjQgMTI4VjE2MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ComputerMouseScrollwheel(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M224 0H160C71.625 0 0 71.625 0 160V352C0 440.375 71.625 512 160 512H224C312.375 512 384 440.375 384 352V160C384 71.625 312.375 0 224 0ZM224 160C224 177.625 209.625 192 192 192C174.375 192 160 177.625 160 160V128C160 110.375 174.375 96 192 96C209.625 96 224 110.375 224 128V160Z" />
        </Icon>
    </>
}
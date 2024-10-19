
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `martini-glass-empty` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/martini-glass-empty?s=solid martini-glass-empty}
 * @preview ![martini-glass-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDIuMDM3IDU3LjYyNUM1MjMuMjkxIDM2LjM3NSA1MDguMjg3IDAgNDc4LjI4NCAwSDMzLjcxN0MzLjcxMyAwIC0xMS4yOTEgMzYuMzc1IDkuOTYzIDU3LjYyNUwyMjMuOTk2IDI3MS42MjVWNDQ4SDE3NkMxNDkuNDkxIDQ0OCAxMjggNDY5LjQ5MiAxMjggNDk2QzEyOCA1MDQuODM2IDEzNS4xNjQgNTEyIDE0NCA1MTJIMzY4QzM3Ni44MzYgNTEyIDM4NCA1MDQuODM2IDM4NCA0OTZDMzg0IDQ2OS40OTIgMzYyLjUxIDQ0OCAzMzYgNDQ4SDI4OC4wMDRWMjcxLjYyNUw1MDIuMDM3IDU3LjYyNVpNMjU2IDIxMy4xMjFMMTA2Ljg1NiA2NEg0MDUuMTQ1TDI1NiAyMTMuMTIxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MartiniGlassEmpty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M502.037 57.625C523.291 36.375 508.287 0 478.284 0H33.717C3.713 0 -11.291 36.375 9.963 57.625L223.996 271.625V448H176C149.491 448 128 469.492 128 496C128 504.836 135.164 512 144 512H368C376.836 512 384 504.836 384 496C384 469.492 362.51 448 336 448H288.004V271.625L502.037 57.625ZM256 213.121L106.856 64H405.145L256 213.121Z" />
        </Icon>
    </>
}
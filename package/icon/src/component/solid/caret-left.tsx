
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `caret-left` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/caret-left?s=solid caret-left}
 * @preview ![caret-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMzcuMzc1IDQwNi42MjVMOS4zNzUgMjc4LjYyNUMzLjEyNSAyNzIuMzc1IDAgMjY0LjE4NyAwIDI1NkMwIDI0Ny44MTIgMy4xMjUgMjM5LjYyNSA5LjM3NSAyMzMuMzc1TDEzNy4zNzUgMTA1LjM3NUMxNDYuNTMxIDk2LjIxOSAxNjAuMjgxIDkzLjQ4NCAxNzIuMjUgOTguNDM3UzE5MiAxMTUuMDYyIDE5MiAxMjhWMzg0QzE5MiAzOTYuOTM3IDE4NC4yMTkgNDA4LjYwOSAxNzIuMjUgNDEzLjU2MlMxNDYuNTMxIDQxNS43ODEgMTM3LjM3NSA0MDYuNjI1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CaretLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path d="M137.375 406.625L9.375 278.625C3.125 272.375 0 264.187 0 256C0 247.812 3.125 239.625 9.375 233.375L137.375 105.375C146.531 96.219 160.281 93.484 172.25 98.437S192 115.062 192 128V384C192 396.937 184.219 408.609 172.25 413.562S146.531 415.781 137.375 406.625Z" />
        </Icon>
    </>
}
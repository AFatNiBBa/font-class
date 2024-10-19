
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `overline` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/overline?s=solid overline}
 * @preview ![overline](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMzIuMjUgMTI4SDIxNS43NUMxMjMuMTI1IDEyOCA0OCAyMDMuMTI1IDQ4IDI5NS43NVYzNDQuMjVDNDggNDM2Ljg3NSAxMjMuMTI1IDUxMiAyMTUuNzUgNTEySDIzMi4yNUMzMjQuODc1IDUxMiA0MDAgNDM2Ljg3NSA0MDAgMzQ0LjI1VjI5NS43NUM0MDAgMjAzLjEyNSAzMjQuODc1IDEyOCAyMzIuMjUgMTI4Wk0zMjAgMzQ0LjI1QzMyMCAzOTIuNjI1IDI4MC42MjUgNDMyIDIzMi4yNSA0MzJIMjE1Ljc1QzE2Ny4zNzUgNDMyIDEyOCAzOTIuNjI1IDEyOCAzNDQuMjVWMjk1Ljc1QzEyOCAyNDcuMzc1IDE2Ny4zNzUgMjA4IDIxNS43NSAyMDhIMjMyLjI1QzI4MC42MjUgMjA4IDMyMCAyNDcuMzc1IDMyMCAyOTUuNzVWMzQ0LjI1Wk00MTYgMEgzMkMxNC4zMTIgMCAwIDE0LjMxMiAwIDMyUzE0LjMxMiA2NCAzMiA2NEg0MTZDNDMzLjY4OCA2NCA0NDggNDkuNjg4IDQ0OCAzMlM0MzMuNjg4IDAgNDE2IDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Overline(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M232.25 128H215.75C123.125 128 48 203.125 48 295.75V344.25C48 436.875 123.125 512 215.75 512H232.25C324.875 512 400 436.875 400 344.25V295.75C400 203.125 324.875 128 232.25 128ZM320 344.25C320 392.625 280.625 432 232.25 432H215.75C167.375 432 128 392.625 128 344.25V295.75C128 247.375 167.375 208 215.75 208H232.25C280.625 208 320 247.375 320 295.75V344.25ZM416 0H32C14.312 0 0 14.312 0 32S14.312 64 32 64H416C433.688 64 448 49.688 448 32S433.688 0 416 0Z" />
        </Icon>
    </>
}
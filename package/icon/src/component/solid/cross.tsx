
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `cross` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cross?s=solid cross}
 * @preview ![cross](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMTYwVjIyNEMzODQgMjQxLjYyNSAzNjkuNjI1IDI1NiAzNTIgMjU2SDI1NlY0ODBDMjU2IDQ5Ny42MjUgMjQxLjYyNSA1MTIgMjI0IDUxMkgxNjBDMTQyLjM3NSA1MTIgMTI4IDQ5Ny42MjUgMTI4IDQ4MFYyNTZIMzJDMTQuMzc1IDI1NiAwIDI0MS42MjUgMCAyMjRWMTYwQzAgMTQyLjM3NSAxNC4zNzUgMTI4IDMyIDEyOEgxMjhWMzJDMTI4IDE0LjM3NSAxNDIuMzc1IDAgMTYwIDBIMjI0QzI0MS42MjUgMCAyNTYgMTQuMzc1IDI1NiAzMlYxMjhIMzUyQzM2OS42MjUgMTI4IDM4NCAxNDIuMzc1IDM4NCAxNjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Cross(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M384 160V224C384 241.625 369.625 256 352 256H256V480C256 497.625 241.625 512 224 512H160C142.375 512 128 497.625 128 480V256H32C14.375 256 0 241.625 0 224V160C0 142.375 14.375 128 32 128H128V32C128 14.375 142.375 0 160 0H224C241.625 0 256 14.375 256 32V128H352C369.625 128 384 142.375 384 160Z" />
        </Icon>
    </>
}
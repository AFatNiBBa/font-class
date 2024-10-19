
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-up-to-line` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-line?s=solid arrow-up-to-line}
 * @preview ![arrow-up-to-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04Ni42MjUgMzQyLjYyNUwxNjAgMjY5LjI1VjQ0OEMxNjAgNDY1LjY4OCAxNzQuMzEyIDQ4MCAxOTIgNDgwUzIyNCA0NjUuNjg4IDIyNCA0NDhWMjY5LjI1TDI5Ny4zNzUgMzQyLjYyNUMzMDMuNjI1IDM0OC44NzUgMzExLjgxMiAzNTIgMzIwIDM1MlMzMzYuMzc1IDM0OC44NzUgMzQyLjYyNSAzNDIuNjI1QzM1NS4xMjUgMzMwLjEyNSAzNTUuMTI1IDMwOS44NzUgMzQyLjYyNSAyOTcuMzc1TDIxNC42MjUgMTY5LjM3NUMyMDIuMTI1IDE1Ni44NzUgMTgxLjg3NSAxNTYuODc1IDE2OS4zNzUgMTY5LjM3NUw0MS4zNzUgMjk3LjM3NUMyOC44NzUgMzA5Ljg3NSAyOC44NzUgMzMwLjEyNSA0MS4zNzUgMzQyLjYyNVM3NC4xMjUgMzU1LjEyNSA4Ni42MjUgMzQyLjYyNVpNMzIgOTZIMzUyQzM2OS42ODggOTYgMzg0IDgxLjY4OCAzODQgNjRTMzY5LjY4OCAzMiAzNTIgMzJIMzJDMTQuMzEyIDMyIDAgNDYuMzEyIDAgNjRTMTQuMzEyIDk2IDMyIDk2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowUpToLine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M86.625 342.625L160 269.25V448C160 465.688 174.312 480 192 480S224 465.688 224 448V269.25L297.375 342.625C303.625 348.875 311.812 352 320 352S336.375 348.875 342.625 342.625C355.125 330.125 355.125 309.875 342.625 297.375L214.625 169.375C202.125 156.875 181.875 156.875 169.375 169.375L41.375 297.375C28.875 309.875 28.875 330.125 41.375 342.625S74.125 355.125 86.625 342.625ZM32 96H352C369.688 96 384 81.688 384 64S369.688 32 352 32H32C14.312 32 0 46.312 0 64S14.312 96 32 96Z" />
        </Icon>
    </>
}

import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-down-long` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-long?s=solid arrow-down-long}
 * @preview ![arrow-down-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05LjM3NSAzMjkuMzc1QzIxLjg4MiAzMTYuODY4IDQyLjEzMiAzMTYuODgyIDU0LjYyNSAzMjkuMzc1TDEyOCA0MDIuNzVWMzJDMTI4IDE0LjMxMiAxNDIuMzEyIDAgMTYwIDBTMTkyIDE0LjMxMiAxOTIgMzJWNDAyLjc1TDI2NS4zNzUgMzI5LjM3NUMyNzcuODc1IDMxNi44NzUgMjk4LjEyNSAzMTYuODc1IDMxMC42MjUgMzI5LjM3NVMzMjMuMTI1IDM2Mi4xMjUgMzEwLjYyNSAzNzQuNjI1TDE4Mi42MjUgNTAyLjYyNUMxNzAuMTI1IDUxNS4xMjUgMTQ5Ljg3NSA1MTUuMTI1IDEzNy4zNzUgNTAyLjYyNUw5LjM3NSAzNzQuNjI1Qy0zLjEyNSAzNjIuMTI1IC0zLjEyNSAzNDEuODc1IDkuMzc1IDMyOS4zNzVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowDownLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M9.375 329.375C21.882 316.868 42.132 316.882 54.625 329.375L128 402.75V32C128 14.312 142.312 0 160 0S192 14.312 192 32V402.75L265.375 329.375C277.875 316.875 298.125 316.875 310.625 329.375S323.125 362.125 310.625 374.625L182.625 502.625C170.125 515.125 149.875 515.125 137.375 502.625L9.375 374.625C-3.125 362.125 -3.125 341.875 9.375 329.375Z" />
        </Icon>
    </>
}
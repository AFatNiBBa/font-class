
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-long` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-long?s=regular arrow-right-long}
 * @preview ![arrow-right-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzUuMDMxIDQwOC4xODdDMzMwLjM0NCA0MDMuNSAzMjggMzk3LjM3NSAzMjggMzkxLjIxOVMzMzAuMzQ0IDM3OC45MzcgMzM1LjAzMSAzNzQuMjVMNDMwLjA2MiAyNzkuMjE5SDI0QzEwLjc1IDI3OS4yMTkgMCAyNjguNDY5IDAgMjU1LjIxOVMxMC43NSAyMzEuMjE5IDI0IDIzMS4yMTlINDMwLjA2MkwzMzUuMDMxIDEzNi4xODdDMzI1LjY1NiAxMjYuODEyIDMyNS42NTYgMTExLjYyNSAzMzUuMDMxIDEwMi4yNVMzNTkuNTk0IDkyLjg3NSAzNjguOTY5IDEwMi4yNUw1MDQuOTY5IDIzOC4yNUM1MTQuMzQ0IDI0Ny42MjUgNTE0LjM0NCAyNjIuODEyIDUwNC45NjkgMjcyLjE4N0wzNjguOTY5IDQwOC4xODdDMzU5LjU5NCA0MTcuNTYyIDM0NC40MDYgNDE3LjU2MiAzMzUuMDMxIDQwOC4xODdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowRightLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M335.031 408.187C330.344 403.5 328 397.375 328 391.219S330.344 378.937 335.031 374.25L430.062 279.219H24C10.75 279.219 0 268.469 0 255.219S10.75 231.219 24 231.219H430.062L335.031 136.187C325.656 126.812 325.656 111.625 335.031 102.25S359.594 92.875 368.969 102.25L504.969 238.25C514.344 247.625 514.344 262.812 504.969 272.187L368.969 408.187C359.594 417.562 344.406 417.562 335.031 408.187Z" />
        </Icon>
    </>
}
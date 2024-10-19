
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pen-fancy` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pen-fancy?s=solid pen-fancy}
 * @preview ![pen-fancy](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NCAyODhMMCA0OTZMOTcuNjI1IDM5MS43NUM5Ni44NzUgMzg5LjI1IDk2IDM4Ni43NSA5NiAzODRDOTYgMzY2LjM3NSAxMTAuMzc1IDM1MiAxMjggMzUyUzE2MCAzNjYuMzc1IDE2MCAzODRTMTQ1LjYyNSA0MTYgMTI4IDQxNkMxMjUuMjUgNDE2IDEyMi43NSA0MTUuMTI1IDEyMC4yNSA0MTQuMzc1TDE2IDUxMkwyMjQgNDQ4TDI2Mi4xMjUgMzQ4Ljc1TDE2My4yNSAyNDkuODc1TDY0IDI4OFpNMzY5LjI1IDI4LjM3NUwxODYuMTI1IDIyNy43NUwyODQgMzI1LjYyNUw0ODMuNSAxNDIuNUM1NjguMzc1IDY3LjUgNDQzLjc1IC01NiAzNjkuMjUgMjguMzc1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PenFancy(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M64 288L0 496L97.625 391.75C96.875 389.25 96 386.75 96 384C96 366.375 110.375 352 128 352S160 366.375 160 384S145.625 416 128 416C125.25 416 122.75 415.125 120.25 414.375L16 512L224 448L262.125 348.75L163.25 249.875L64 288ZM369.25 28.375L186.125 227.75L284 325.625L483.5 142.5C568.375 67.5 443.75 -56 369.25 28.375Z" />
        </Icon>
    </>
}
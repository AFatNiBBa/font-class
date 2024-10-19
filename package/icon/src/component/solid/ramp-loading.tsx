
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ramp-loading` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ramp-loading?s=solid ramp-loading}
 * @preview ![ramp-loading](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggMzIwSDk2TDExLjU3MiA0ODguODU3QzYuMjU2IDQ5OS40OSAxMy45ODggNTEyIDI1Ljg3NSA1MTJIMzU4LjEyNUMzNzAuMDE0IDUxMiAzNzcuNzQ2IDQ5OS40OSAzNzIuNDMgNDg4Ljg1N0wyODggMzIwWk0zNTIgMEgzMkMxNC4yNSAwIDAgMTQuMjUgMCAzMlYzNTJDMCAzNjguNSAxMi42MjUgMzgxLjUgMjguNjI1IDM4My4yNUw2MyAzMTQuNUM2My4yNSAzMTMuODc1IDYzLjc1IDMxMy41IDY0IDMxM1Y2NEgzMjBWMzEzQzMyMC4yNSAzMTMuNSAzMjAuNzUgMzE0IDMyMSAzMTQuNUwzNTUuMzc1IDM4My4yNUMzNzEuMzc1IDM4MS41IDM4NCAzNjguMzc1IDM4NCAzNTJWMzJDMzg0IDE0LjI1IDM2OS43NSAwIDM1MiAwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function RampLoading(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M288 320H96L11.572 488.857C6.256 499.49 13.988 512 25.875 512H358.125C370.014 512 377.746 499.49 372.43 488.857L288 320ZM352 0H32C14.25 0 0 14.25 0 32V352C0 368.5 12.625 381.5 28.625 383.25L63 314.5C63.25 313.875 63.75 313.5 64 313V64H320V313C320.25 313.5 320.75 314 321 314.5L355.375 383.25C371.375 381.5 384 368.375 384 352V32C384 14.25 369.75 0 352 0Z" />
        </Icon>
    </>
}
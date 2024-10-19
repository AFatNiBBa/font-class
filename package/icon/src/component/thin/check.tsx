
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `check` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/check?s=thin check}
 * @preview ![check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMzkyQzE4OS45NTMgMzkyIDE4Ny45MDYgMzkxLjIxOSAxODYuMzQ0IDM4OS42NTZMMzQuMzQ0IDIzNy42NTZDMzEuMjE5IDIzNC41MzEgMzEuMjE5IDIyOS40NjkgMzQuMzQ0IDIyNi4zNDRTNDIuNTMxIDIyMy4yMTkgNDUuNjU2IDIyNi4zNDRMMTkyIDM3Mi42ODhMNDY2LjM0NCA5OC4zNDRDNDY5LjQ2OSA5NS4yMTkgNDc0LjUzMSA5NS4yMTkgNDc3LjY1NiA5OC4zNDRTNDgwLjc4MSAxMDYuNTMxIDQ3Ny42NTYgMTA5LjY1NkwxOTcuNjU2IDM4OS42NTZDMTk2LjA5NCAzOTEuMjE5IDE5NC4wNDcgMzkyIDE5MiAzOTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Check(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M192 392C189.953 392 187.906 391.219 186.344 389.656L34.344 237.656C31.219 234.531 31.219 229.469 34.344 226.344S42.531 223.219 45.656 226.344L192 372.688L466.344 98.344C469.469 95.219 474.531 95.219 477.656 98.344S480.781 106.531 477.656 109.656L197.656 389.656C196.094 391.219 194.047 392 192 392Z" />
        </Icon>
    </>
}
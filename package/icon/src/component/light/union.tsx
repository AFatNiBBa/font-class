
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `union` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/union?s=light union}
 * @preview ![union](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDI4OFY0OEMwIDM5LjE1NiA3LjE1NiAzMiAxNiAzMlMzMiAzOS4xNTYgMzIgNDhWMjg4QzMyIDM3Ni4yMTkgMTAzLjc4MSA0NDggMTkyIDQ0OFMzNTIgMzc2LjIxOSAzNTIgMjg4VjQ4QzM1MiAzOS4xNTYgMzU5LjE1NiAzMiAzNjggMzJTMzg0IDM5LjE1NiAzODQgNDhWMjg4QzM4NCAzOTMuODc1IDI5Ny44NzUgNDgwIDE5MiA0ODBTMCAzOTMuODc1IDAgMjg4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Union(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M0 288V48C0 39.156 7.156 32 16 32S32 39.156 32 48V288C32 376.219 103.781 448 192 448S352 376.219 352 288V48C352 39.156 359.156 32 368 32S384 39.156 384 48V288C384 393.875 297.875 480 192 480S0 393.875 0 288Z" />
        </Icon>
    </>
}
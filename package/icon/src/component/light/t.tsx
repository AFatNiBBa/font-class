
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `t` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/t?s=light t}
 * @preview ![t](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgNDhDMzg0IDU2Ljg0NCAzNzYuODQ0IDY0IDM2OCA2NEgyMDhWNDY0QzIwOCA0NzIuODQ0IDIwMC44NDQgNDgwIDE5MiA0ODBTMTc2IDQ3Mi44NDQgMTc2IDQ2NFY2NEgxNkM3LjE1NiA2NCAwIDU2Ljg0NCAwIDQ4UzcuMTU2IDMyIDE2IDMySDM2OEMzNzYuODQ0IDMyIDM4NCAzOS4xNTYgMzg0IDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function T(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M384 48C384 56.844 376.844 64 368 64H208V464C208 472.844 200.844 480 192 480S176 472.844 176 464V64H16C7.156 64 0 56.844 0 48S7.156 32 16 32H368C376.844 32 384 39.156 384 48Z" />
        </Icon>
    </>
}

import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `diamond` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/diamond?s=solid diamond}
 * @preview ![diamond](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTcuOTcgMjIyLjEzTDI4OS44NzEgMTQuMDNDMjcxLjE2NCAtNC42NzcgMjQwLjgzNSAtNC42NzcgMjIyLjEyOCAxNC4wM0wxNC4wMjkgMjIyLjEzQy00LjY3NiAyNDAuODM1IC00LjY3NiAyNzEuMTY1IDE0LjAyOSAyODkuODcyTDIyMi4xMjggNDk3Ljk3QzI0MC44MzUgNTE2LjY3NyAyNzEuMTY0IDUxNi42NzcgMjg5Ljg3MSA0OTcuOTdMNDk3Ljk3IDI4OS44NzJDNTE2LjY3NSAyNzEuMTY1IDUxNi42NzUgMjQwLjgzNSA0OTcuOTcgMjIyLjEzWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Diamond(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M497.97 222.13L289.871 14.03C271.164 -4.677 240.835 -4.677 222.128 14.03L14.029 222.13C-4.676 240.835 -4.676 271.165 14.029 289.872L222.128 497.97C240.835 516.677 271.164 516.677 289.871 497.97L497.97 289.872C516.675 271.165 516.675 240.835 497.97 222.13Z" />
        </Icon>
    </>
}
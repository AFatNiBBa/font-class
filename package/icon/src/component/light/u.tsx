
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `u` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/u?s=light u}
 * @preview ![u](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgNDgwQzg2LjEyNSA0ODAgMCAzOTMuODc1IDAgMjg4VjQ4QzAgMzkuMTU2IDcuMTU2IDMyIDE2IDMyUzMyIDM5LjE1NiAzMiA0OFYyODhDMzIgMzc2LjIxOSAxMDMuNzgxIDQ0OCAxOTIgNDQ4UzM1MiAzNzYuMjE5IDM1MiAyODhWNDhDMzUyIDM5LjE1NiAzNTkuMTU2IDMyIDM2OCAzMlMzODQgMzkuMTU2IDM4NCA0OFYyODhDMzg0IDM5My44NzUgMjk3Ljg3NSA0ODAgMTkyIDQ4MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function U(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 480C86.125 480 0 393.875 0 288V48C0 39.156 7.156 32 16 32S32 39.156 32 48V288C32 376.219 103.781 448 192 448S352 376.219 352 288V48C352 39.156 359.156 32 368 32S384 39.156 384 48V288C384 393.875 297.875 480 192 480Z" />
        </Icon>
    </>
}
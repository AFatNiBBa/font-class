
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `y` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/y?s=thin y}
 * @preview ![y](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODIuNDMyIDQ0Ljc2NUwyMDAgMjkwLjY2OVY0NzJDMjAwIDQ3Ni40MDYgMTk2LjQwNiA0ODAgMTkyIDQ4MFMxODQgNDc2LjQwNiAxODQgNDcyVjI5MC42NjlMMS41NjggNDQuNzY1Qy0xLjA1NyA0MS4yMDIgLTAuMzA3IDM2LjIwMiAzLjIyNCAzMy41NDZDNi43ODcgMzAuOTUyIDExLjc4NiAzMS43MDIgMTQuNDQzIDM1LjIwMkwxOTIgMjc0LjU1NUwzNjkuNTU3IDM1LjIwMkMzNzIuMjQ1IDMxLjcwMiAzNzcuMjEzIDMwLjk1MiAzODAuNzc2IDMzLjU0NkMzODQuMzA3IDM2LjIwMiAzODUuMDU3IDQxLjIwMiAzODIuNDMyIDQ0Ljc2NVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Y(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M382.432 44.765L200 290.669V472C200 476.406 196.406 480 192 480S184 476.406 184 472V290.669L1.568 44.765C-1.057 41.202 -0.307 36.202 3.224 33.546C6.787 30.952 11.786 31.702 14.443 35.202L192 274.555L369.557 35.202C372.245 31.702 377.213 30.952 380.776 33.546C384.307 36.202 385.057 41.202 382.432 44.765Z" />
        </Icon>
    </>
}
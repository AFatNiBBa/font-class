
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `reply` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/reply?s=light reply}
 * @preview ![reply](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgNDAwLjAwMVY0MzJDNTEyIDQ0MC44NDQgNTA0Ljg0NCA0NDggNDk2IDQ0OFM0ODAgNDQwLjg0NCA0ODAgNDMyVjQwMC4wMDFDNDgwIDMyMC41OTUgNDE1LjQwNiAyNTYuMDAyIDMzNiAyNTYuMDAySDYwLjE5OUwyMTguMjUgMzg3LjcyQzIyNS4wMzEgMzkzLjM3NiAyMjUuOTM4IDQwMy40NjkgMjIwLjI4MSA0MTAuMjVDMjE3LjEyNSA0MTQuMDMyIDIxMi41NjIgNDE2IDIwOCA0MTZDMjA0LjM3NSA0MTYgMjAwLjc1IDQxNC43ODIgMTk3Ljc1IDQxMi4yODJMNS43NSAyNTIuMjg0QzIuMDk0IDI0OS4yNTIgMCAyNDQuNzUzIDAgMjQwLjAwM1MyLjA5NCAyMzAuNzUzIDUuNzUgMjI3LjcyMUwxOTcuNzUgNjcuNzIzQzIwNC41IDYyLjA2NyAyMTQuNTk0IDYyLjk0MiAyMjAuMjgxIDY5Ljc1NUMyMjUuOTM4IDc2LjUzNiAyMjUuMDMxIDg2LjYzIDIxOC4yNSA5Mi4yODZMNjAuMTk5IDIyNC4wMDNIMzM2QzQzMy4wMzEgMjI0LjAwMyA1MTIgMzAyLjk3MSA1MTIgNDAwLjAwMVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Reply(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M512 400.001V432C512 440.844 504.844 448 496 448S480 440.844 480 432V400.001C480 320.595 415.406 256.002 336 256.002H60.199L218.25 387.72C225.031 393.376 225.938 403.469 220.281 410.25C217.125 414.032 212.562 416 208 416C204.375 416 200.75 414.782 197.75 412.282L5.75 252.284C2.094 249.252 0 244.753 0 240.003S2.094 230.753 5.75 227.721L197.75 67.723C204.5 62.067 214.594 62.942 220.281 69.755C225.938 76.536 225.031 86.63 218.25 92.286L60.199 224.003H336C433.031 224.003 512 302.971 512 400.001Z" />
        </Icon>
    </>
}
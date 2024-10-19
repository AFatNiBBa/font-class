
import { Icon } from "../../index";

/**
 * A component that renders the `circle-k` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-k?s=sharp-thin circle-k}
 * @preview ![circle-k](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDE2YTI0MCAyNDAgMCAxIDEgMCA0ODAgMjQwIDI0MCAwIDEgMSAwLTQ4MHptMCA0OTZBMjU2IDI1NiAwIDEgMCAyNTYgMGEyNTYgMjU2IDAgMSAwIDAgNTEyek0xNjAgMTI4bDAgOCAwIDE2Mi41IDAgNzcuNSAwIDggMTYgMCAwLTggMC03NC4xIDU4LjQtNTZMMzMzLjUgMzg0bDE5LjcgMEwyNDYuNSAyMzUuM2wtLjQtLjZMMzU3LjUgMTI4bC0yMy4xIDBMMTc2IDI3OS44IDE3NiAxMzZsMC04LTE2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleK: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 128l0 8 0 162.5 0 77.5 0 8 16 0 0-8 0-74.1 58.4-56L333.5 384l19.7 0L246.5 235.3l-.4-.6L357.5 128l-23.1 0L176 279.8 176 136l0-8-16 0z" />
    </Icon>
);

export default CircleK;
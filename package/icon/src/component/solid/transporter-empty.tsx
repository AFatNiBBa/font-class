
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `transporter-empty` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/transporter-empty?s=solid transporter-empty}
 * @preview ![transporter-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggNDQ4SDMyQzE0LjM3NSA0NDggMCA0NjIuMzc1IDAgNDgwVjUxMkgzMjBWNDgwQzMyMCA0NjIuMzc1IDMwNS42MjUgNDQ4IDI4OCA0NDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TransporterEmpty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M288 448H32C14.375 448 0 462.375 0 480V512H320V480C320 462.375 305.625 448 288 448Z" />
        </Icon>
    </>
}
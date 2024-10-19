
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `grip-lines` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/grip-lines?s=solid grip-lines}
 * @preview ![grip-lines](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYgMjg4SDMyQzE0LjQgMjg4IDAgMzAyLjQgMCAzMjBWMzIwQzAgMzM3LjYgMTQuNCAzNTIgMzIgMzUySDQxNkM0MzMuNiAzNTIgNDQ4IDMzNy42IDQ0OCAzMjBWMzIwQzQ0OCAzMDIuNCA0MzMuNiAyODggNDE2IDI4OFpNNDE2IDE2MEgzMkMxNC40IDE2MCAwIDE3NC40IDAgMTkyVjE5MkMwIDIwOS42IDE0LjQgMjI0IDMyIDIyNEg0MTZDNDMzLjYgMjI0IDQ0OCAyMDkuNiA0NDggMTkyVjE5MkM0NDggMTc0LjQgNDMzLjYgMTYwIDQxNiAxNjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function GripLines(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M416 288H32C14.4 288 0 302.4 0 320V320C0 337.6 14.4 352 32 352H416C433.6 352 448 337.6 448 320V320C448 302.4 433.6 288 416 288ZM416 160H32C14.4 160 0 174.4 0 192V192C0 209.6 14.4 224 32 224H416C433.6 224 448 209.6 448 192V192C448 174.4 433.6 160 416 160Z" />
        </Icon>
    </>
}
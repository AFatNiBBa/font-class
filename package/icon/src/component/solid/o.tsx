
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `o` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/o?s=solid o}
 * @preview ![o](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgNDgwQzEwMC41IDQ4MCAwIDM3OS41IDAgMjU2UzEwMC41IDMyIDIyNCAzMlM0NDggMTMyLjUgNDQ4IDI1NlMzNDcuNSA0ODAgMjI0IDQ4MFpNMjI0IDEyOEMxNTMuNDA2IDEyOCA5NiAxODUuNDA2IDk2IDI1NlMxNTMuNDA2IDM4NCAyMjQgMzg0UzM1MiAzMjYuNTk0IDM1MiAyNTZTMjk0LjU5NCAxMjggMjI0IDEyOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function O(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 480C100.5 480 0 379.5 0 256S100.5 32 224 32S448 132.5 448 256S347.5 480 224 480ZM224 128C153.406 128 96 185.406 96 256S153.406 384 224 384S352 326.594 352 256S294.594 128 224 128Z" />
        </Icon>
    </>
}
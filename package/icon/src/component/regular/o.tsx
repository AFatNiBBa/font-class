
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `o` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/o?s=regular o}
 * @preview ![o](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgNDgwQzEwMC41IDQ4MCAwIDM3OS41IDAgMjU2UzEwMC41IDMyIDIyNCAzMlM0NDggMTMyLjUgNDQ4IDI1NlMzNDcuNSA0ODAgMjI0IDQ4MFpNMjI0IDk2QzEzNS43ODEgOTYgNjQgMTY3Ljc4MSA2NCAyNTZTMTM1Ljc4MSA0MTYgMjI0IDQxNlMzODQgMzQ0LjIxOSAzODQgMjU2UzMxMi4yMTkgOTYgMjI0IDk2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function O(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 480C100.5 480 0 379.5 0 256S100.5 32 224 32S448 132.5 448 256S347.5 480 224 480ZM224 96C135.781 96 64 167.781 64 256S135.781 416 224 416S384 344.219 384 256S312.219 96 224 96Z" />
        </Icon>
    </>
}

import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `o` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/o?s=thin o}
 * @preview ![o](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgNDgwQzEwMC41IDQ4MCAwIDM3OS41IDAgMjU2UzEwMC41IDMyIDIyNCAzMlM0NDggMTMyLjUgNDQ4IDI1NlMzNDcuNSA0ODAgMjI0IDQ4MFpNMjI0IDQ4QzEwOS4zMTIgNDggMTYgMTQxLjMxMiAxNiAyNTZTMTA5LjMxMiA0NjQgMjI0IDQ2NFM0MzIgMzcwLjY4OCA0MzIgMjU2UzMzOC42ODggNDggMjI0IDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function O(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 480C100.5 480 0 379.5 0 256S100.5 32 224 32S448 132.5 448 256S347.5 480 224 480ZM224 48C109.312 48 16 141.312 16 256S109.312 464 224 464S432 370.688 432 256S338.688 48 224 48Z" />
        </Icon>
    </>
}
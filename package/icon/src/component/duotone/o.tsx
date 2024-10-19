
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `o` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/o?s=duotone o}
 * @preview ![o](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIyNCA0ODBDMTAwLjUgNDgwIDAgMzc5LjUgMCAyNTZTMTAwLjUgMzIgMjI0IDMyUzQ0OCAxMzIuNSA0NDggMjU2UzM0Ny41IDQ4MCAyMjQgNDgwWk0yMjQgMTI4QzE1My40MDYgMTI4IDk2IDE4NS40MDYgOTYgMjU2UzE1My40MDYgMzg0IDIyNCAzODRTMzUyIDMyNi41OTQgMzUyIDI1NlMyOTQuNTk0IDEyOCAyMjQgMTI4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function O(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M224 480C100.5 480 0 379.5 0 256S100.5 32 224 32S448 132.5 448 256S347.5 480 224 480ZM224 128C153.406 128 96 185.406 96 256S153.406 384 224 384S352 326.594 352 256S294.594 128 224 128Z" />
        </Icon>
    </>
}
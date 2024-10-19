
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `italic` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/italic?s=duotone italic}
 * @preview ![italic](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCA3MkMzODQgOTQuMDk0IDM2Ni4wOTQgMTEyIDM0NCAxMTJIMjk0LjIyM0wxNzYuMTk5IDQwMEgyMTZDMjM4LjA5NCA0MDAgMjU2IDQxNy45MDYgMjU2IDQ0MFMyMzguMDk0IDQ4MCAyMTYgNDgwSDQwQzE3LjkwNiA0ODAgMCA0NjIuMDk0IDAgNDQwUzE3LjkwNiA0MDAgNDAgNDAwSDg5Ljc3N0wyMDcuODAxIDExMkgxNjhDMTQ1LjkwNiAxMTIgMTI4IDk0LjA5NCAxMjggNzJTMTQ1LjkwNiAzMiAxNjggMzJIMzQ0QzM2Ni4wOTQgMzIgMzg0IDQ5LjkwNiAzODQgNzJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Italic(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M384 72C384 94.094 366.094 112 344 112H294.223L176.199 400H216C238.094 400 256 417.906 256 440S238.094 480 216 480H40C17.906 480 0 462.094 0 440S17.906 400 40 400H89.777L207.801 112H168C145.906 112 128 94.094 128 72S145.906 32 168 32H344C366.094 32 384 49.906 384 72Z" />
        </Icon>
    </>
}

import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square?s=duotone square}
 * @preview ![square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0OCA5NlY0MTZDNDQ4IDQ1MS4zNDYgNDE5LjM0NiA0ODAgMzg0IDQ4MEg2NEMyOC42NTQgNDgwIDAgNDUxLjM0NiAwIDQxNlY5NkMwIDYwLjY1NCAyOC42NTQgMzIgNjQgMzJIMzg0QzQxOS4zNDYgMzIgNDQ4IDYwLjY1NCA0NDggOTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Square(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M448 96V416C448 451.346 419.346 480 384 480H64C28.654 480 0 451.346 0 416V96C0 60.654 28.654 32 64 32H384C419.346 32 448 60.654 448 96Z" />
        </Icon>
    </>
}
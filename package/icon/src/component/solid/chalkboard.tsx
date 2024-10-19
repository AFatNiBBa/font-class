
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chalkboard` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chalkboard?s=solid chalkboard}
 * @preview ![chalkboard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05NiA5Nkg0ODBWMzg0SDU0NFY3MkM1NDQgNTAgNTI1Ljk5OSAzMiA1MDQgMzJINzJDNDkuOTk5IDMyIDMyIDUwIDMyIDcyVjM4NEg5NlY5NlpNNTYwIDQxNkg0MTZWMzY4QzQxNiAzNTkuMTYyIDQwOC44MzYgMzUyIDQwMCAzNTJIMjQwQzIzMS4xNjQgMzUyIDIyNCAzNTkuMTYyIDIyNCAzNjhWNDE2SDE2QzcuMTY0IDQxNiAwIDQyMy4xNjIgMCA0MzJWNDY0QzAgNDcyLjgzNiA3LjE2NCA0ODAgMTYgNDgwSDU2MEM1NjguODM2IDQ4MCA1NzYgNDcyLjgzNiA1NzYgNDY0VjQzMkM1NzYgNDIzLjE2MiA1NjguODM2IDQxNiA1NjAgNDE2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Chalkboard(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M96 96H480V384H544V72C544 50 525.999 32 504 32H72C49.999 32 32 50 32 72V384H96V96ZM560 416H416V368C416 359.162 408.836 352 400 352H240C231.164 352 224 359.162 224 368V416H16C7.164 416 0 423.162 0 432V464C0 472.836 7.164 480 16 480H560C568.836 480 576 472.836 576 464V432C576 423.162 568.836 416 560 416Z" />
        </Icon>
    </>
}
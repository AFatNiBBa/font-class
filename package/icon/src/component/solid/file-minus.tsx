
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `file-minus` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-minus?s=solid file-minus}
 * @preview ![file-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMFYxMjhIMzg0TDI1NiAwWk0yMjQgMTI4VjBINDhDMjEuNDkyIDAgMCAyMS40OTIgMCA0OFY0NjRDMCA0OTAuNTA4IDIxLjQ5MiA1MTIgNDggNTEySDMzNkMzNjIuNTA4IDUxMiAzODQgNDkwLjUwOCAzODQgNDY0VjE2MEgyNTZDMjM4LjMyOCAxNjAgMjI0IDE0NS42NzIgMjI0IDEyOFpNMjk2IDMzNkMyOTYgMzQ5LjI1OCAyODUuMjYyIDM1OS45OTggMjcyIDM1OS45OThIMTEyQzk4LjczIDM1OS45OTggODggMzQ5LjI1NiA4OCAzMzZDODggMzIyLjc0MiA5OC43MzggMzEyLjAwMiAxMTIgMzEyLjAwMkgyNzJDMjg1LjI2MiAzMTIuMDAyIDI5NiAzMjIuNzQyIDI5NiAzMzZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FileMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M256 0V128H384L256 0ZM224 128V0H48C21.492 0 0 21.492 0 48V464C0 490.508 21.492 512 48 512H336C362.508 512 384 490.508 384 464V160H256C238.328 160 224 145.672 224 128ZM296 336C296 349.258 285.262 359.998 272 359.998H112C98.73 359.998 88 349.256 88 336C88 322.742 98.738 312.002 112 312.002H272C285.262 312.002 296 322.742 296 336Z" />
        </Icon>
    </>
}
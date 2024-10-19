
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `u` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/u?s=solid u}
 * @preview ![u](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgNDgwQzg2LjEyNSA0ODAgMCAzOTMuODc1IDAgMjg4VjgwQzAgNTMuNSAyMS40ODQgMzIgNDggMzJTOTYgNTMuNSA5NiA4MFYyODhDOTYgMzQwLjkzNyAxMzkuMDYyIDM4NCAxOTIgMzg0UzI4OCAzNDAuOTM3IDI4OCAyODhWODBDMjg4IDUzLjUgMzA5LjQ4NCAzMiAzMzYgMzJTMzg0IDUzLjUgMzg0IDgwVjI4OEMzODQgMzkzLjg3NSAyOTcuODc1IDQ4MCAxOTIgNDgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function U(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 480C86.125 480 0 393.875 0 288V80C0 53.5 21.484 32 48 32S96 53.5 96 80V288C96 340.937 139.062 384 192 384S288 340.937 288 288V80C288 53.5 309.484 32 336 32S384 53.5 384 80V288C384 393.875 297.875 480 192 480Z" />
        </Icon>
    </>
}

import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square?s=solid square}
 * @preview ![square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggOTZWNDE2QzQ0OCA0NTEuMzQ2IDQxOS4zNDYgNDgwIDM4NCA0ODBINjRDMjguNjU0IDQ4MCAwIDQ1MS4zNDYgMCA0MTZWOTZDMCA2MC42NTQgMjguNjU0IDMyIDY0IDMySDM4NEM0MTkuMzQ2IDMyIDQ0OCA2MC42NTQgNDQ4IDk2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Square(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448 96V416C448 451.346 419.346 480 384 480H64C28.654 480 0 451.346 0 416V96C0 60.654 28.654 32 64 32H384C419.346 32 448 60.654 448 96Z" />
        </Icon>
    </>
}
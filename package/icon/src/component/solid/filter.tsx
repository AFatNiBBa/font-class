
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `filter` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/filter?s=solid filter}
 * @preview ![filter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDQuNjI1IDg0LjE4NkwzMjAgMzA2LjgyMlY0NTUuOTg0QzMyMCA0NzUuNSAyOTguMDMxIDQ4Ni42ODggMjgyLjI1IDQ3NS42NDFMMjAyLjI1IDQxOS42NTZDMTk1LjgxMyA0MTUuMTcyIDE5MiA0MDcuODI4IDE5MiA0MDBWMzA2LjgyMkw3LjM3NSA4NC4xODZDLTkuOTY1IDYzLjI3NSA1LjIxMyAzMiAzMi43MDEgMzJINDc5LjI5OUM1MDYuNzg3IDMyIDUyMS45NjUgNjMuMjc1IDUwNC42MjUgODQuMTg2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Filter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M504.625 84.186L320 306.822V455.984C320 475.5 298.031 486.688 282.25 475.641L202.25 419.656C195.813 415.172 192 407.828 192 400V306.822L7.375 84.186C-9.965 63.275 5.213 32 32.701 32H479.299C506.787 32 521.965 63.275 504.625 84.186Z" />
        </Icon>
    </>
}
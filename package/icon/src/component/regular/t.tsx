
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `t` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/t?s=regular t}
 * @preview ![t](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgNjRDMzg0IDgxLjY4OCAzNjkuNjcyIDk2IDM1MiA5NkgyMjRWNDQ4QzIyNCA0NjUuNjg4IDIwOS42NzIgNDgwIDE5MiA0ODBTMTYwIDQ2NS42ODggMTYwIDQ0OFY5NkgzMkMxNC4zMjggOTYgMCA4MS42ODggMCA2NFMxNC4zMjggMzIgMzIgMzJIMzUyQzM2OS42NzIgMzIgMzg0IDQ2LjMxMiAzODQgNjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function T(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M384 64C384 81.688 369.672 96 352 96H224V448C224 465.688 209.672 480 192 480S160 465.688 160 448V96H32C14.328 96 0 81.688 0 64S14.328 32 32 32H352C369.672 32 384 46.312 384 64Z" />
        </Icon>
    </>
}
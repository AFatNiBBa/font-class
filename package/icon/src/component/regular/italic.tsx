
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `italic` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/italic?s=regular italic}
 * @preview ![italic](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgNTZDMzg0IDY5LjI1IDM3My4yNSA4MCAzNjAgODBIMjkyLjAxNkwxNDUuMDc4IDQzMkgyMzJDMjQ1LjI1IDQzMiAyNTYgNDQyLjc1IDI1NiA0NTZTMjQ1LjI1IDQ4MCAyMzIgNDgwSDI0QzEwLjc1IDQ4MCAwIDQ2OS4yNSAwIDQ1NlMxMC43NSA0MzIgMjQgNDMySDk0LjU5NkwyNDEuNTM1IDgwSDE1MkMxMzguNzUgODAgMTI4IDY5LjI1IDEyOCA1NlMxMzguNzUgMzIgMTUyIDMySDM2MEMzNzMuMjUgMzIgMzg0IDQyLjc1IDM4NCA1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Italic(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M384 56C384 69.25 373.25 80 360 80H292.016L145.078 432H232C245.25 432 256 442.75 256 456S245.25 480 232 480H24C10.75 480 0 469.25 0 456S10.75 432 24 432H94.596L241.535 80H152C138.75 80 128 69.25 128 56S138.75 32 152 32H360C373.25 32 384 42.75 384 56Z" />
        </Icon>
    </>
}
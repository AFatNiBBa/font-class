
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bookmark` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark?s=solid bookmark}
 * @preview ![bookmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgNDhWNTEyTDE5MiA0MDBMMCA1MTJWNDhDMCAyMS41IDIxLjUgMCA0OCAwSDMzNkMzNjIuNSAwIDM4NCAyMS41IDM4NCA0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Bookmark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M384 48V512L192 400L0 512V48C0 21.5 21.5 0 48 0H336C362.5 0 384 21.5 384 48Z" />
        </Icon>
    </>
}

import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `minus` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/minus?s=solid minus}
 * @preview ![minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzIgMjU2QzQzMiAyNzguMDk0IDQxNC4wOTQgMjk2IDM5MiAyOTZINTZDMzMuOTA2IDI5NiAxNiAyNzguMDk0IDE2IDI1NlMzMy45MDYgMjE2IDU2IDIxNkgzOTJDNDE0LjA5NCAyMTYgNDMyIDIzMy45MDYgNDMyIDI1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Minus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M432 256C432 278.094 414.094 296 392 296H56C33.906 296 16 278.094 16 256S33.906 216 56 216H392C414.094 216 432 233.906 432 256Z" />
        </Icon>
    </>
}
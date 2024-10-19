
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `text` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/text?s=solid text}
 * @preview ![text](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzIgNzJWMTIwQzQzMiAxNDIuMDk0IDQxNC4wOTQgMTYwIDM5MiAxNjBTMzUyIDE0Mi4wOTQgMzUyIDEyMFYxMTJIMjYzLjM1N0MyNjMuNDQ5IDExMy4xMDcgMjY0IDExNC4wNTcgMjY0IDExNS4xODhWNDE2SDMwNEMzMjEuNjg4IDQxNiAzMzYgNDMwLjMxMiAzMzYgNDQ4UzMyMS42ODggNDgwIDMwNCA0ODBIMTQ0QzEyNi4zMTIgNDgwIDExMiA0NjUuNjg4IDExMiA0NDhTMTI2LjMxMiA0MTYgMTQ0IDQxNkgxODRWMTE1LjE4OEMxODQgMTE0LjA1NyAxODQuNTUxIDExMy4xMDcgMTg0LjY0MyAxMTJIOTZWMTIwQzk2IDE0Mi4wOTQgNzguMDk0IDE2MCA1NiAxNjBTMTYgMTQyLjA5NCAxNiAxMjBWNzJDMTYgNDkuOTA2IDMzLjkwNiAzMiA1NiAzMkgzOTJDNDE0LjA5NCAzMiA0MzIgNDkuOTA2IDQzMiA3MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Text(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M432 72V120C432 142.094 414.094 160 392 160S352 142.094 352 120V112H263.357C263.449 113.107 264 114.057 264 115.188V416H304C321.688 416 336 430.312 336 448S321.688 480 304 480H144C126.312 480 112 465.688 112 448S126.312 416 144 416H184V115.188C184 114.057 184.551 113.107 184.643 112H96V120C96 142.094 78.094 160 56 160S16 142.094 16 120V72C16 49.906 33.906 32 56 32H392C414.094 32 432 49.906 432 72Z" />
        </Icon>
    </>
}
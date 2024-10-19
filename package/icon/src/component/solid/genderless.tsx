
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `genderless` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/genderless?s=solid genderless}
 * @preview ![genderless](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgODBDOTQuODMzIDgwIDE2IDE1OC44MyAxNiAyNTZDMTYgMzUzLjE2NSA5NC44MzMgNDMyIDE5MiA0MzJTMzY4IDM1My4xNjUgMzY4IDI1NkMzNjggMTU4LjgzIDI4OS4xNjcgODAgMTkyIDgwWk0xOTIgMzUyQzEzOS4wNDkgMzUyIDk2IDMwOC45NDUgOTYgMjU2Qzk2IDIwMy4wNDkgMTM5LjA0OSAxNjAgMTkyIDE2MFMyODggMjAzLjA0OSAyODggMjU2QzI4OCAzMDguOTQ1IDI0NC45NTEgMzUyIDE5MiAzNTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Genderless(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 80C94.833 80 16 158.83 16 256C16 353.165 94.833 432 192 432S368 353.165 368 256C368 158.83 289.167 80 192 80ZM192 352C139.049 352 96 308.945 96 256C96 203.049 139.049 160 192 160S288 203.049 288 256C288 308.945 244.951 352 192 352Z" />
        </Icon>
    </>
}
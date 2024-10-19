
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `equals` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/equals?s=duotone equals}
 * @preview ![equals](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM5MiAyMDBINTZDMzMuOTA2IDIwMCAxNiAxODIuMDk0IDE2IDE2MFMzMy45MDYgMTIwIDU2IDEyMEgzOTJDNDE0LjA5NCAxMjAgNDMyIDEzNy45MDYgNDMyIDE2MFM0MTQuMDk0IDIwMCAzOTIgMjAwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zOTIgMzkySDU2QzMzLjkwNiAzOTIgMTYgMzc0LjA5NCAxNiAzNTJTMzMuOTA2IDMxMiA1NiAzMTJIMzkyQzQxNC4wOTQgMzEyIDQzMiAzMjkuOTA2IDQzMiAzNTJTNDE0LjA5NCAzOTIgMzkyIDM5MloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Equals(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M392 200H56C33.906 200 16 182.094 16 160S33.906 120 56 120H392C414.094 120 432 137.906 432 160S414.094 200 392 200Z" />
            <path d="M392 392H56C33.906 392 16 374.094 16 352S33.906 312 56 312H392C414.094 312 432 329.906 432 352S414.094 392 392 392Z" />
        </Icon>
    </>
}
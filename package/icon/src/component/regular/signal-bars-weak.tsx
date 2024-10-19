
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `signal-bars-weak` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars-weak?s=regular signal-bars-weak}
 * @preview ![signal-bars-weak](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05NiAzODRIMzJDMTQuMzI4IDM4NCAwIDM5OC4zMjggMCA0MTZWNDgwQzAgNDk3LjY3MiAxNC4zMjggNTEyIDMyIDUxMkg5NkMxMTMuNjc0IDUxMiAxMjggNDk3LjY3MiAxMjggNDgwVjQxNkMxMjggMzk4LjMyOCAxMTMuNjc0IDM4NCA5NiAzODRaTTgwIDQ2NEg0OFY0MzJIODBWNDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SignalBarsWeak(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M96 384H32C14.328 384 0 398.328 0 416V480C0 497.672 14.328 512 32 512H96C113.674 512 128 497.672 128 480V416C128 398.328 113.674 384 96 384ZM80 464H48V432H80V464Z" />
        </Icon>
    </>
}
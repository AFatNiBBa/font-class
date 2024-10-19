
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `u` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/u?s=duotone u}
 * @preview ![u](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE5MiA0ODBDODYuMTI1IDQ4MCAwIDM5My44NzUgMCAyODhWODBDMCA1My41IDIxLjQ4NCAzMiA0OCAzMlM5NiA1My41IDk2IDgwVjI4OEM5NiAzNDAuOTM3IDEzOS4wNjIgMzg0IDE5MiAzODRTMjg4IDM0MC45MzcgMjg4IDI4OFY4MEMyODggNTMuNSAzMDkuNDg0IDMyIDMzNiAzMlMzODQgNTMuNSAzODQgODBWMjg4QzM4NCAzOTMuODc1IDI5Ny44NzUgNDgwIDE5MiA0ODBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function U(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M192 480C86.125 480 0 393.875 0 288V80C0 53.5 21.484 32 48 32S96 53.5 96 80V288C96 340.937 139.062 384 192 384S288 340.937 288 288V80C288 53.5 309.484 32 336 32S384 53.5 384 80V288C384 393.875 297.875 480 192 480Z" />
        </Icon>
    </>
}
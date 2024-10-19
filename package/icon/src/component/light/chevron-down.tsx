
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chevron-down` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-down?s=light chevron-down}
 * @preview ![chevron-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00LjI0OSAxODEuMTQxQzcuMzkgMTc3LjcwMyAxMS42ODYgMTc1Ljk4NCAxNS45OTkgMTc1Ljk4NEMxOS44OSAxNzUuOTg0IDIzLjc4IDE3Ny4zOTEgMjYuODU4IDE4MC4yMzRMMjIzLjk5OSAzNjIuMjAzTDQyMS4xNCAxODAuMjM0QzQyNy42NCAxNzQuMjM0IDQzNy43OCAxNzQuNjA5IDQ0My43NDkgMTgxLjE0MUM0NDkuNzQ5IDE4Ny42NDEgNDQ5LjM0MyAxOTcuNzM0IDQ0Mi44NTggMjAzLjczNEwyMzQuODU4IDM5NS43MzRDMjI4LjcwMiA0MDEuNDIyIDIxOS4yOTYgNDAxLjQyMiAyMTMuMTQgMzk1LjczNEw1LjE0IDIwMy43MzRDLTEuMzQ1IDE5Ny43MzQgLTEuNzUxIDE4Ny42NDEgNC4yNDkgMTgxLjE0MVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ChevronDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M4.249 181.141C7.39 177.703 11.686 175.984 15.999 175.984C19.89 175.984 23.78 177.391 26.858 180.234L223.999 362.203L421.14 180.234C427.64 174.234 437.78 174.609 443.749 181.141C449.749 187.641 449.343 197.734 442.858 203.734L234.858 395.734C228.702 401.422 219.296 401.422 213.14 395.734L5.14 203.734C-1.345 197.734 -1.751 187.641 4.249 181.141Z" />
        </Icon>
    </>
}
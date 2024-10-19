
import { Icon, generic } from "../../index";

/**
 * A component that renders the `marker` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/marker?s=sharp-duotone-solid marker}
 * @preview ![marker](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDUxMmwxNjAtMzJMMzA0IDMzNmMtNDIuNy00Mi43LTg1LjMtODUuMy0xMjgtMTI4TDMyIDM1MiAwIDUxMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMxOC4yIDY1LjhsMzkuMy0zOS4zYzE3LTE3IDQwLTI2LjUgNjQtMjYuNWM1MCAwIDkwLjUgNDAuNSA5MC41IDkwLjVjMCAyNC05LjUgNDctMjYuNSA2NEwzMDQgMzM2IDE3NiAyMDggMjg0LjMgOTkuNyAyNTMgNjkgMTQ1IDE3N2wtMTcgMTdMOTQuMSAxNjBsMTctMTdMMjM1LjggMTguMiAyNTIuNiAxLjRsMTcgMTYuNyA0OC42IDQ3Ljd6Ii8+PC9zdmc+|width=32|height=32)
 */
const Marker: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 512l160-32L304 336c-42.7-42.7-85.3-85.3-128-128L32 352 0 512z" />
            <path d="M318.2 65.8l39.3-39.3c17-17 40-26.5 64-26.5c50 0 90.5 40.5 90.5 90.5c0 24-9.5 47-26.5 64L304 336 176 208 284.3 99.7 253 69 145 177l-17 17L94.1 160l17-17L235.8 18.2 252.6 1.4l17 16.7 48.6 47.7z" />
    </Icon>
);

export default Marker;
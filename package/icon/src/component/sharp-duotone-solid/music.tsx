
import { Icon, generic } from "../../index";

/**
 * A component that renders the `music` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music?s=sharp-duotone-solid music}
 * @preview ![music](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMTIwLjJsMCAyMy44IDAgNzIgMCAxNDAuNmMzNy4zIDExIDY0IDQwLjYgNjQgNzUuNGwwLTE5Mi4yTDQ0OCAxNjNsMCAxMjkuNWMzNy4zIDExIDY0IDQwLjYgNjQgNzUuNGwwLTI0OCAwLTcyIDAtNDNMNDcwLjggMTcuNGwtMzIwIDk2TDEyOCAxMjAuMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQxNiA0NDhjNTMgMCA5Ni0zNS44IDk2LTgwcy00My04MC05Ni04MHMtOTYgMzUuOC05NiA4MHM0MyA4MCA5NiA4MHpNOTYgNTEyYzUzIDAgOTYtMzUuOCA5Ni04MHMtNDMtODAtOTYtODBzLTk2IDM1LjgtOTYgODBzNDMgODAgOTYgODB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Music: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 120.2l0 23.8 0 72 0 140.6c37.3 11 64 40.6 64 75.4l0-192.2L448 163l0 129.5c37.3 11 64 40.6 64 75.4l0-248 0-72 0-43L470.8 17.4l-320 96L128 120.2z" />
            <path d="M416 448c53 0 96-35.8 96-80s-43-80-96-80s-96 35.8-96 80s43 80 96 80zM96 512c53 0 96-35.8 96-80s-43-80-96-80s-96 35.8-96 80s43 80 96 80z" />
    </Icon>
);

export default Music;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-tired` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-tired?s=sharp-duotone-solid face-tired}
 * @preview ![face-tired](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTExMiAxNDRsMTE4LjkgNjRMMTEyIDI3Mmw0NS43LTY0TDExMiAxNDR6bTE2IDI3MmMwLTcwLjcgNTcuMy0xMjggMTI4LTEyOHMxMjggNTcuMyAxMjggMTI4YzAgNC4yLS4yIDguMy0uNiAxMi4zQzM0OS41IDQwMC44IDMwNC45IDM4NCAyNTYgMzg0cy05My41IDE2LjgtMTI3LjQgNDQuM2MtLjQtNC4xLS42LTguMi0uNi0xMi4zek0yODEuMSAyMDhMNDAwIDE0NGwtNDUuNyA2NEw0MDAgMjcyIDI4MS4xIDIwOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIzMC45IDIwOEwxMTIgMTQ0bDQ1LjcgNjRMMTEyIDI3MmwxMTguOS02NHptNTAuMyAwTDQwMCAyNzJsLTQ1LjctNjRMNDAwIDE0NCAyODEuMSAyMDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const FaceTired: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM112 144l118.9 64L112 272l45.7-64L112 144zm16 272c0-70.7 57.3-128 128-128s128 57.3 128 128c0 4.2-.2 8.3-.6 12.3C349.5 400.8 304.9 384 256 384s-93.5 16.8-127.4 44.3c-.4-4.1-.6-8.2-.6-12.3zM281.1 208L400 144l-45.7 64L400 272 281.1 208z" />
            <path d="M230.9 208L112 144l45.7 64L112 272l118.9-64zm50.3 0L400 272l-45.7-64L400 144 281.1 208z" />
    </Icon>
);

export default FaceTired;
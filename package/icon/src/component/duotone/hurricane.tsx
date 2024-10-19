
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hurricane` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hurricane?s=duotone hurricane}
 * @preview ![hurricane](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIwOEMwIDMxMi40IDc3IDM5OC45IDE3Ny4zIDQxMy43YzguMyAxLjIgMTQuNyA4LjEgMTQuNyAxNi41bDAgNjMuM2MwIDkuMyA4IDE2LjcgMTcuMSAxNS4yQzMwOC4zIDQ5Mi45IDM4NCA0MDcgMzg0IDMwMy40QzM4NCAxOTkgMzA3IDExMi41IDIwNi43IDk3LjZjLTguMy0xLjItMTQuNy04LjEtMTQuNy0xNi41bDAtNjMuM2MwLTkuMy04LTE2LjctMTcuMS0xNS4yQzc1LjcgMTguNSAwIDEwNC40IDAgMjA4em0yODggNDhBOTYgOTYgMCAxIDEgOTYgMjU2YTk2IDk2IDAgMSAxIDE5MiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTkyIDM1MmE5NiA5NiAwIDEgMCAwLTE5MiA5NiA5NiAwIDEgMCAwIDE5MnptMC0xMjhhMzIgMzIgMCAxIDEgMCA2NCAzMiAzMiAwIDEgMSAwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Hurricane: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 208C0 312.4 77 398.9 177.3 413.7c8.3 1.2 14.7 8.1 14.7 16.5l0 63.3c0 9.3 8 16.7 17.1 15.2C308.3 492.9 384 407 384 303.4C384 199 307 112.5 206.7 97.6c-8.3-1.2-14.7-8.1-14.7-16.5l0-63.3c0-9.3-8-16.7-17.1-15.2C75.7 18.5 0 104.4 0 208zm288 48A96 96 0 1 1 96 256a96 96 0 1 1 192 0z" />
            <path d="M192 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm0-128a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Hurricane;
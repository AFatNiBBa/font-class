
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-arrow-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-arrow-up?s=duotone cloud-arrow-up}
 * @preview ![cloud-arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMzNmMwIDc5LjUgNjQuNSAxNDQgMTQ0IDE0NGwzNjggMGM3MC43IDAgMTI4LTU3LjMgMTI4LTEyOGMwLTYxLjktNDQtMTEzLjYtMTAyLjQtMTI1LjRjNC4xLTEwLjcgNi40LTIyLjQgNi40LTM0LjZjMC01My00My05Ni05Ni05NmMtMTkuNyAwLTM4LjEgNi01My4zIDE2LjJDMzY3IDY0LjIgMzE1LjMgMzIgMjU2IDMyQzE2Ny42IDMyIDk2IDEwMy42IDk2IDE5MmMwIDIuNyAuMSA1LjQgLjIgOC4xQzQwLjIgMjE5LjggMCAyNzMuMiAwIDMzNnptMjE2LTU2YzAtNi4xIDIuMy0xMi4zIDctMTdsODAtODBjNC43LTQuNyAxMC44LTcgMTctN3MxMi4zIDIuMyAxNyA3bDgwIDgwYzQuNyA0LjcgNyAxMC44IDcgMTdzLTIuMyAxMi4zLTcgMTdjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC0zOS0zOUwzNDQgMzkyYzAgMTMuMy0xMC43IDI0LTI0IDI0cy0yNC0xMC43LTI0LTI0bDAtMTM0LjEtMzkgMzljLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwYy00LjctNC43LTctMTAuOC03LTE3eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjIzIDI5N2MtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlsODAtODBjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsODAgODBjOS40IDkuNCA5LjQgMjQuNiAwIDMzLjlzLTI0LjYgOS40LTMzLjkgMGwtMzktMzlMMzQ0IDM5MmMwIDEzLjMtMTAuNyAyNC0yNCAyNHMtMjQtMTAuNy0yNC0yNGwwLTEzNC4xLTM5IDM5Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CloudArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336zm216-56c0-6.1 2.3-12.3 7-17l80-80c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7l80 80c4.7 4.7 7 10.8 7 17s-2.3 12.3-7 17c-9.4 9.4-24.6 9.4-33.9 0l-39-39L344 392c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-134.1-39 39c-9.4 9.4-24.6 9.4-33.9 0c-4.7-4.7-7-10.8-7-17z" />
            <path d="M223 297c-9.4-9.4-9.4-24.6 0-33.9l80-80c9.4-9.4 24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-39-39L344 392c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-134.1-39 39c-9.4 9.4-24.6 9.4-33.9 0z" />
    </Icon>
);

export default CloudArrowUp;
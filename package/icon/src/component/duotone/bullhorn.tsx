
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bullhorn` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bullhorn?s=duotone bullhorn}
 * @preview ![bullhorn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTIgMTI4bDAgMzIgMCAzMiAwIDk2IDAgMzIgMCAzMiA4LjcgMGM2Ny45IDAgMTMzIDI3IDE4MSA3NWw0My42IDQzLjZjOS4yIDkuMiAyMi45IDExLjkgMzQuOSA2LjlzMTkuOC0xNi42IDE5LjgtMjkuNmwwLTE0Ny42IDAtMTIwLjdMNDgwIDMyYzAtMTIuOS03LjgtMjQuNi0xOS44LTI5LjZDNDU2LjMgLjggNDUyLjEgMCA0NDggMGMtOC4zIDAtMTYuNSAzLjMtMjIuNiA5LjRMMzgxLjcgNTNjLTQ4IDQ4LTExMy4xIDc1LTE4MSA3NWMtMi45IDAtNS44IDAtOC43IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDE5MmMwLTM1LjMgMjguNy02NCA2NC02NGwxMjggMCAwIDE5MiAwIDMyIDAgMTI4YzAgMTcuNy0xNC4zIDMyLTMyIDMybC02NCAwYy0xNy43IDAtMzItMTQuMy0zMi0zMmwwLTEyOGMtMzUuMyAwLTY0LTI4LjctNjQtNjRsMC05NnptNTEyIDQ4YzAgMjcuOS0xMy40IDUxLjYtMzIgNjAuNGwwLTEyMC43YzE4LjYgOC44IDMyIDMyLjUgMzIgNjAuNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Bullhorn: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 128l0 32 0 32 0 96 0 32 0 32 8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-147.6 0-120.7L480 32c0-12.9-7.8-24.6-19.8-29.6C456.3 .8 452.1 0 448 0c-8.3 0-16.5 3.3-22.6 9.4L381.7 53c-48 48-113.1 75-181 75c-2.9 0-5.8 0-8.7 0z" />
            <path d="M0 192c0-35.3 28.7-64 64-64l128 0 0 192 0 32 0 128c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-128c-35.3 0-64-28.7-64-64l0-96zm512 48c0 27.9-13.4 51.6-32 60.4l0-120.7c18.6 8.8 32 32.5 32 60.4z" />
    </Icon>
);

export default Bullhorn;
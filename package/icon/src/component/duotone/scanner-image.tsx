
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scanner-image` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-image?s=duotone scanner-image}
 * @preview ![scanner-image](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM1MmwwIDY0YzAgMzUuMyAyOC43IDY0IDY0IDY0bDQ0OCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtNjRjMC0zNS4zLTI4LjctNjQtNjQtNjRjLTMyIDAtNjQgMC05NiAwTDY0IDI4OGMtMzUuMyAwLTY0IDI4LjctNjQgNjR6bTEyOCAzMmEzMiAzMiAwIDEgMSAtNjQgMCAzMiAzMiAwIDEgMSA2NCAwem05NiAwYTMyIDMyIDAgMSAxIC02NCAwIDMyIDMyIDAgMSAxIDY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zNS44IDQ4LjljOC4zLTE1LjYgMjcuNy0yMS41IDQzLjMtMTMuMkw1MjUuMiAyNzMuN2MyMC45IDExLjIgMzYuNiAyOS40IDQ0LjcgNTAuOUM1NTkuNiAzMDMgNTM3LjUgMjg4IDUxMiAyODhsLTk2IDBMNDguOSA5Mi4yQzMzLjMgODMuOSAyNy40IDY0LjUgMzUuOCA0OC45ek05NiAzNTJhMzIgMzIgMCAxIDEgMCA2NCAzMiAzMiAwIDEgMSAwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ScannerImage: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 352l0 64c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64c-32 0-64 0-96 0L64 288c-35.3 0-64 28.7-64 64zm128 32a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm96 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M35.8 48.9c8.3-15.6 27.7-21.5 43.3-13.2L525.2 273.7c20.9 11.2 36.6 29.4 44.7 50.9C559.6 303 537.5 288 512 288l-96 0L48.9 92.2C33.3 83.9 27.4 64.5 35.8 48.9zM96 352a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default ScannerImage;
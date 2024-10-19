
import { Icon, generic } from "../../index";

/**
 * A component that renders the `snooze` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/snooze?s=duotone snooze}
 * @preview ![snooze](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMzJjMC0xNy43IDE0LjMtMzIgMzItMzJsOTYgMGMxMi4xIDAgMjMuMiA2LjggMjguNiAxNy43czQuMyAyMy44LTMgMzMuNUwyNTYgMTI4bDMyIDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJsLTk2IDBjLTEyLjEgMC0yMy4yLTYuOC0yOC42LTE3LjdzLTQuMy0yMy44IDMtMzMuNUwyMjQgNjRsLTMyIDBjLTE3LjcgMC0zMi0xNC4zLTMyLTMyek0yODggMjU2YzAtMTcuNyAxNC4zLTMyIDMyLTMybDk2IDBjMTIuMSAwIDIzLjIgNi44IDI4LjYgMTcuN2MyLjMgNC41IDMuNCA5LjQgMy40IDE0LjNjMCA2LjgtMi4yIDEzLjYtNi40IDE5LjJMMzg0IDM1MmwzMiAwYzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMybC05NiAwYy0xMi4xIDAtMjMuMi02LjgtMjguNi0xNy43cy00LjMtMjMuOCAzLTMzLjVMMzUyIDI4OGwtMzIgMGMtMTcuNyAwLTMyLTE0LjMtMzItMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDI4OGMwLTE3LjcgMTQuMy0zMiAzMi0zMmwxNjAgMGMxMi40IDAgMjMuNyA3LjIgMjkgMTguNHMzLjYgMjQuNS00LjQgMzQuMUwxMDAuMyA0NDhsOTEuNyAwYzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMyTDMyIDUxMmMtMTIuNCAwLTIzLjctNy4yLTI5LTE4LjRzLTMuNi0yNC41IDQuNC0zNC4xTDEyMy43IDMyMCAzMiAzMjBjLTE3LjcgMC0zMi0xNC4zLTMyLTMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Snooze: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M160 32c0-17.7 14.3-32 32-32l96 0c12.1 0 23.2 6.8 28.6 17.7s4.3 23.8-3 33.5L256 128l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-12.1 0-23.2-6.8-28.6-17.7s-4.3-23.8 3-33.5L224 64l-32 0c-17.7 0-32-14.3-32-32zM288 256c0-17.7 14.3-32 32-32l96 0c12.1 0 23.2 6.8 28.6 17.7c2.3 4.5 3.4 9.4 3.4 14.3c0 6.8-2.2 13.6-6.4 19.2L384 352l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-12.1 0-23.2-6.8-28.6-17.7s-4.3-23.8 3-33.5L352 288l-32 0c-17.7 0-32-14.3-32-32z" />
            <path d="M0 288c0-17.7 14.3-32 32-32l160 0c12.4 0 23.7 7.2 29 18.4s3.6 24.5-4.4 34.1L100.3 448l91.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-12.4 0-23.7-7.2-29-18.4s-3.6-24.5 4.4-34.1L123.7 320 32 320c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default Snooze;
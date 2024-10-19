
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-open-full` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/box-open-full?s=duotone box-open-full}
 * @preview ![box-open-full](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUzLjI2IDE2OS4wMTRMMS43NjIgMjcxLjgzMkMtMi44NjMgMjgxLjA4OCAyLjAxMiAyOTIuMDk2IDExLjc2MiAyOTQuODQ4TDIwOS43NTQgMzUxLjM4NUMyMTYuNzU0IDM1My4zODUgMjI0LjM3OSAzNTAuMzgzIDIyOC4yNTQgMzQ0LjEyOUwzMjAgMTkyLjAyOUw2OS43NiAxNjAuMTMzQzYyLjg4NSAxNTkuMjU4IDU2LjI2IDE2Mi43NiA1My4yNiAxNjkuMDE0Wk02MzguMjkzIDI3MS43NThMNTg2Ljc4NiAxNjkuMDA4QzU4My43ODYgMTYyLjc1OCA1NzcuMDM2IDE1OS4yNTggNTcwLjE1OSAxNjAuMTMzTDMyMCAxOTIuMDA4TDQxMS43NjIgMzQ0LjEzNUM0MTUuNTE0IDM1MC4zODUgNDIzLjEzOSAzNTMuMzg1IDQzMC4yNjYgMzUxLjM4NUw2MjguMTY2IDI5NC44ODVDNjM4LjA0MyAyOTIuMDEgNjQyLjc5MyAyODEuMDEgNjM4LjI5MyAyNzEuNzU4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0xMjguNzYyIDEzNS4zNzVDMTI4LjYzNyAxMzIuODc1IDEyOC4wMTIgMTMwLjUgMTI4LjAxMiAxMjhDMTI4LjAxMiA1Ny4yNSAxODUuMjYyIDAgMjU2LjAxMiAwQzMyNS43NjIgMCAzODIuMDEyIDU1Ljc1IDM4My43NjIgMTI1TDQyNS4zODcgMTAuNjI1QzQyOC4zODcgMi4yNSA0MzcuNjM3IC0yIDQ0NS44ODcgMUw1MDEuMzg3IDIxLjI1QzUwOS43NjIgMjQuMjUgNTE0LjAxMiAzMy4zNzUgNTExLjAxMiA0MS43NUw0NzUuMjYyIDE0MEwzMjAuMDEyIDE1OS43NUwzMTEuNzYyIDE1OC43NUMzMTYuODg3IDE0OS41IDMyMC4wMTIgMTM5LjI1IDMyMC4wMTIgMTI4QzMyMC4wMTIgOTIuNzUgMjkxLjI2MiA2NCAyNTYuMDEyIDY0UzE5Mi4wMTIgOTIuNzUgMTkyLjAxMiAxMjhDMTkyLjAxMiAxMzMuMzc1IDE5Mi44ODcgMTM4LjYyNSAxOTQuMjYyIDE0My43NUwxMjguNzYyIDEzNS4zNzVaTTQzMC4yNjYgMzUxLjM4NUM0MjMuMTM5IDM1My4zODUgNDE1LjUxNCAzNTAuMzg1IDQxMS43NjIgMzQ0LjEzNUwzMjAuMDE0IDE5Mi4wMzFMMzIwIDE5Mi4wMjlMMjI4LjI1NCAzNDQuMTI5QzIyNC4zNzkgMzUwLjM4MyAyMTYuNzU0IDM1My4zODUgMjA5Ljc1NCAzNTEuMzg1TDY0IDMwOS43NjRWNDI1LjQ5QzY0IDQ0MC4xNTggNzQgNDUyLjgzNiA4OC4yNSA0NTYuMzE2TDMwNC4zNzUgNTEwLjEzNUMzMTQuNjI1IDUxMi42MjEgMzI1LjI1IDUxMi42MjEgMzM1LjM3NSA1MTAuMTM1TDU1MS43NSA0NTYuMzE2QzU2NiA0NTIuNzExIDU3NiA0NDAuMDMzIDU3NiA0MjUuNDlWMzA5Ljc3N0w0MzAuMjY2IDM1MS4zODVaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const BoxOpenFull: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M53.26 169.014L1.762 271.832C-2.863 281.088 2.012 292.096 11.762 294.848L209.754 351.385C216.754 353.385 224.379 350.383 228.254 344.129L320 192.029L69.76 160.133C62.885 159.258 56.26 162.76 53.26 169.014ZM638.293 271.758L586.786 169.008C583.786 162.758 577.036 159.258 570.159 160.133L320 192.008L411.762 344.135C415.514 350.385 423.139 353.385 430.266 351.385L628.166 294.885C638.043 292.01 642.793 281.01 638.293 271.758Z" />
            <path d="M128.762 135.375C128.637 132.875 128.012 130.5 128.012 128C128.012 57.25 185.262 0 256.012 0C325.762 0 382.012 55.75 383.762 125L425.387 10.625C428.387 2.25 437.637 -2 445.887 1L501.387 21.25C509.762 24.25 514.012 33.375 511.012 41.75L475.262 140L320.012 159.75L311.762 158.75C316.887 149.5 320.012 139.25 320.012 128C320.012 92.75 291.262 64 256.012 64S192.012 92.75 192.012 128C192.012 133.375 192.887 138.625 194.262 143.75L128.762 135.375ZM430.266 351.385C423.139 353.385 415.514 350.385 411.762 344.135L320.014 192.031L320 192.029L228.254 344.129C224.379 350.383 216.754 353.385 209.754 351.385L64 309.764V425.49C64 440.158 74 452.836 88.25 456.316L304.375 510.135C314.625 512.621 325.25 512.621 335.375 510.135L551.75 456.316C566 452.711 576 440.033 576 425.49V309.777L430.266 351.385Z" />
    </Icon>
);

export default BoxOpenFull;
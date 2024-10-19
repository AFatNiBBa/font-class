
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `function` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/function?s=solid function}
 * @preview ![function](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNTIgODBIMTg0QzIwNi4wOTQgODAgMjI0IDYyLjA5NCAyMjQgNDBTMjA2LjA5NCAwIDE4NCAwSDE1MkM5OS4wNjIgMCA1NiA0My4wNjIgNTYgOTZWMTY4SDQwQzE3LjkwNiAxNjggMCAxODUuOTA2IDAgMjA4UzE3LjkwNiAyNDggNDAgMjQ4SDU2VjM4NEM1NiAzOTIuODEyIDQ4LjgyOCA0MDAgNDAgNDAwQzE3LjkwNiA0MDAgMCA0MTcuOTA2IDAgNDQwUzE3LjkwNiA0ODAgNDAgNDgwQzkyLjkzOCA0ODAgMTM2IDQzNi45MzggMTM2IDM4NFYyNDhIMTUyQzE3NC4wOTQgMjQ4IDE5MiAyMzAuMDk0IDE5MiAyMDhTMTc0LjA5NCAxNjggMTUyIDE2OEgxMzZWOTZDMTM2IDg3LjE4OCAxNDMuMTcyIDgwIDE1MiA4MFpNNTEwLjYyNSAyNDEuMzc1QzQ5OC4xMjUgMjI4Ljg3NSA0NzcuODc1IDIyOC44NzUgNDY1LjM3NSAyNDEuMzc1TDQzMiAyNzQuNzVMMzk4LjYyNSAyNDEuMzc1QzM4Ni4xMjUgMjI4Ljg3NSAzNjUuODc1IDIyOC44NzUgMzUzLjM3NSAyNDEuMzc1UzM0MC44NzUgMjc0LjEyNSAzNTMuMzc1IDI4Ni42MjVMMzg2Ljc1IDMyMEwzNTMuMzc1IDM1My4zNzVDMzQwLjg3NSAzNjUuODc1IDM0MC44NzUgMzg2LjEyNSAzNTMuMzc1IDM5OC42MjVDMzU5LjYyNSA0MDQuODc1IDM2Ny44MTIgNDA4IDM3NiA0MDhTMzkyLjM3NSA0MDQuODc1IDM5OC42MjUgMzk4LjYyNUw0MzIgMzY1LjI1TDQ2NS4zNzUgMzk4LjYyNUM0NzEuNjI1IDQwNC44NzUgNDc5LjgxMiA0MDggNDg4IDQwOFM1MDQuMzc1IDQwNC44NzUgNTEwLjYyNSAzOTguNjI1QzUyMy4xMjUgMzg2LjEyNSA1MjMuMTI1IDM2NS44NzUgNTEwLjYyNSAzNTMuMzc1TDQ3Ny4yNSAzMjBMNTEwLjYyNSAyODYuNjI1QzUyMy4xMjUgMjc0LjEyNSA1MjMuMTI1IDI1My44NzUgNTEwLjYyNSAyNDEuMzc1Wk0zMTcuODc1IDE0Mi43NUMzMDMuOTY5IDEzMS44NzUgMjgzLjg0NCAxMzQuNDA2IDI3Mi45NjkgMTQ4LjM0NEMyNDEuODQ0IDE4OC4zMTIgMjI0IDI1MC44NzUgMjI0IDMyMFMyNDEuODQ0IDQ1MS42ODggMjcyLjk2OSA0OTEuNjU2QzI3OS4yODEgNDk5Ljc1IDI4OC43MDMgNTA0IDI5OC4yMzQgNTA0QzMwNS4xMDkgNTA0IDMxMi4wMzEgNTAxLjgxMiAzMTcuODc1IDQ5Ny4yNUMzMzEuODI4IDQ4Ni4zNzUgMzM0LjMyOCA0NjYuMjgxIDMyMy40NjkgNDUyLjM0NEMzMDEuNTk0IDQyNC4yNSAyODggMzczLjUzMSAyODggMzIwUzMwMS41OTQgMjE1Ljc1IDMyMy40NjkgMTg3LjY1NkMzMzQuMzI4IDE3My43MTkgMzMxLjgyOCAxNTMuNjI1IDMxNy44NzUgMTQyLjc1Wk01OTEuMDMxIDE0OC4zNDRDNTgwLjE0MSAxMzQuMzc1IDU2MC4wNDcgMTMxLjg0NCA1NDYuMTI1IDE0Mi43NUM1MzIuMTcyIDE1My42MjUgNTI5LjY3MiAxNzMuNzE5IDU0MC41MzEgMTg3LjY1NkM1NjIuNDA2IDIxNS43NSA1NzYgMjY2LjQ2OSA1NzYgMzIwUzU2Mi40MDYgNDI0LjI1IDU0MC41MzEgNDUyLjM0NEM1MjkuNjcyIDQ2Ni4yODEgNTMyLjE3MiA0ODYuMzc1IDU0Ni4xMjUgNDk3LjI1QzU1MS45NjkgNTAxLjgxMiA1NTguODkxIDUwNCA1NjUuNzY2IDUwNEM1NzUuMjgxIDUwNCA1ODQuNzE5IDQ5OS43NSA1OTEuMDMxIDQ5MS42NTZDNjIyLjE1NiA0NTEuNjg4IDY0MCAzODkuMTI1IDY0MCAzMjBTNjIyLjE1NiAxODguMzEyIDU5MS4wMzEgMTQ4LjM0NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Function(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M152 80H184C206.094 80 224 62.094 224 40S206.094 0 184 0H152C99.062 0 56 43.062 56 96V168H40C17.906 168 0 185.906 0 208S17.906 248 40 248H56V384C56 392.812 48.828 400 40 400C17.906 400 0 417.906 0 440S17.906 480 40 480C92.938 480 136 436.938 136 384V248H152C174.094 248 192 230.094 192 208S174.094 168 152 168H136V96C136 87.188 143.172 80 152 80ZM510.625 241.375C498.125 228.875 477.875 228.875 465.375 241.375L432 274.75L398.625 241.375C386.125 228.875 365.875 228.875 353.375 241.375S340.875 274.125 353.375 286.625L386.75 320L353.375 353.375C340.875 365.875 340.875 386.125 353.375 398.625C359.625 404.875 367.812 408 376 408S392.375 404.875 398.625 398.625L432 365.25L465.375 398.625C471.625 404.875 479.812 408 488 408S504.375 404.875 510.625 398.625C523.125 386.125 523.125 365.875 510.625 353.375L477.25 320L510.625 286.625C523.125 274.125 523.125 253.875 510.625 241.375ZM317.875 142.75C303.969 131.875 283.844 134.406 272.969 148.344C241.844 188.312 224 250.875 224 320S241.844 451.688 272.969 491.656C279.281 499.75 288.703 504 298.234 504C305.109 504 312.031 501.812 317.875 497.25C331.828 486.375 334.328 466.281 323.469 452.344C301.594 424.25 288 373.531 288 320S301.594 215.75 323.469 187.656C334.328 173.719 331.828 153.625 317.875 142.75ZM591.031 148.344C580.141 134.375 560.047 131.844 546.125 142.75C532.172 153.625 529.672 173.719 540.531 187.656C562.406 215.75 576 266.469 576 320S562.406 424.25 540.531 452.344C529.672 466.281 532.172 486.375 546.125 497.25C551.969 501.812 558.891 504 565.766 504C575.281 504 584.719 499.75 591.031 491.656C622.156 451.688 640 389.125 640 320S622.156 188.312 591.031 148.344Z" />
        </Icon>
    </>
}

import { Icon, generic } from "../../index";

/**
 * A component that renders the `bitcoin-sign` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bitcoin-sign?s=duotone bitcoin-sign}
 * @preview ![bitcoin-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTgwIDBDNjIuMzEyIDAgNDggMTQuMzEyIDQ4IDMyVjY0SDExMlYzMkMxMTIgMTQuMzEyIDk3LjY4OCAwIDgwIDBaTTQ4IDQ4MEM0OCA0OTcuNjg4IDYyLjMxMiA1MTIgODAgNTEyUzExMiA0OTcuNjg4IDExMiA0ODBWNDQ4SDQ4VjQ4MFpNMTc2IDBDMTU4LjMxMiAwIDE0NCAxNC4zMTIgMTQ0IDMyVjY0SDE3MkMxODQuNjQ1IDY0IDE5Ni41OTggNjYuNTM5IDIwOCA3MC4yOTVWMzJDMjA4IDE0LjMxMiAxOTMuNjg4IDAgMTc2IDBaTTE0NCA0NDhWNDgwQzE0NCA0OTcuNjg4IDE1OC4zMTIgNTEyIDE3NiA1MTJTMjA4IDQ5Ny42ODggMjA4IDQ4MFY0NDcuNTk2QzIwNi42NDEgNDQ3LjY0MyAyMDUuMzY5IDQ0OCAyMDQgNDQ4SDE0NFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjcxLjczNCAyMzguMjQ2QzI4MS44MTIgMjIxLjA2MSAyODggMjAxLjMyMiAyODggMTgwQzI4OCAxMTYuMDMxIDIzNS45NjkgNjQgMTcyIDY0SDQwQzE3LjkwNiA2NCAwIDgxLjkwNiAwIDEwNFY0MDhDMCA0MzAuMDk0IDE3LjkwNiA0NDggNDAgNDQ4SDIwNEMyNjcuOTY5IDQ0OCAzMjAgMzk1Ljk2OSAzMjAgMzMyQzMyMCAyOTMuMzc5IDMwMC44NDQgMjU5LjM0MiAyNzEuNzM0IDIzOC4yNDZaTTgwIDE0NEgxNzJDMTkxLjg0NCAxNDQgMjA4IDE2MC4xNTYgMjA4IDE4MFMxOTEuODQ0IDIxNiAxNzIgMjE2SDgwVjE0NFpNMjA0IDM2OEg4MFYyOTZIMjA0QzIyMy44NDQgMjk2IDI0MCAzMTIuMTU2IDI0MCAzMzJTMjIzLjg0NCAzNjggMjA0IDM2OFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const BitcoinSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M80 0C62.312 0 48 14.312 48 32V64H112V32C112 14.312 97.688 0 80 0ZM48 480C48 497.688 62.312 512 80 512S112 497.688 112 480V448H48V480ZM176 0C158.312 0 144 14.312 144 32V64H172C184.645 64 196.598 66.539 208 70.295V32C208 14.312 193.688 0 176 0ZM144 448V480C144 497.688 158.312 512 176 512S208 497.688 208 480V447.596C206.641 447.643 205.369 448 204 448H144Z" />
            <path d="M271.734 238.246C281.812 221.061 288 201.322 288 180C288 116.031 235.969 64 172 64H40C17.906 64 0 81.906 0 104V408C0 430.094 17.906 448 40 448H204C267.969 448 320 395.969 320 332C320 293.379 300.844 259.342 271.734 238.246ZM80 144H172C191.844 144 208 160.156 208 180S191.844 216 172 216H80V144ZM204 368H80V296H204C223.844 296 240 312.156 240 332S223.844 368 204 368Z" />
    </Icon>
);

export default BitcoinSign;
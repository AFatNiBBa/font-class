
import { Icon } from "../../index";

/**
 * A component that renders the `chess-pawn` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn?s=sharp-regular chess-pawn}
 * @preview ![chess-pawn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjMyIDE1MkE3MiA3MiAwIDEgMCA4OCAxNTJhNzIgNzIgMCAxIDAgMTQ0IDB6bTI0IDEyMGwtMTIuNiAwIDEwLjcgODAtNDguNCAwTDE5NSAyNzJsLTM1IDAtMzUgMC0xMC43IDgwLTQ4LjQgMCAxMC43LTgwTDY0IDI3MmwtMjQgMCAwLTQ4IDI0IDBjLTE1LjEtMjAuMS0yNC00NS0yNC03MkM0MCA4NS43IDkzLjcgMzIgMTYwIDMyczEyMCA1My43IDEyMCAxMjBjMCAyNy04LjkgNTEuOS0yNCA3MmwyNCAwIDAgNDgtMjQgMHpNNjkuMiA0MzJMNTIuNyA0NjRsMjE0LjcgMC0xNi42LTMyTDY5LjIgNDMyek0zMjAgNDY0bDAgNDgtNDggMEw0OCA1MTIgMCA1MTJsMC00OCAwLTIuN0w0MCAzODRsMjQwIDAgNDAgNzcuMyAwIDIuN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const ChessPawn: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M232 152A72 72 0 1 0 88 152a72 72 0 1 0 144 0zm24 120l-12.6 0 10.7 80-48.4 0L195 272l-35 0-35 0-10.7 80-48.4 0 10.7-80L64 272l-24 0 0-48 24 0c-15.1-20.1-24-45-24-72C40 85.7 93.7 32 160 32s120 53.7 120 120c0 27-8.9 51.9-24 72l24 0 0 48-24 0zM69.2 432L52.7 464l214.7 0-16.6-32L69.2 432zM320 464l0 48-48 0L48 512 0 512l0-48 0-2.7L40 384l240 0 40 77.3 0 2.7z" />
    </Icon>
);

export default ChessPawn;
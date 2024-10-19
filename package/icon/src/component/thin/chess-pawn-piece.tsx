
import { Icon } from "../../index";

/**
 * A component that renders the `chess-pawn-piece` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn-piece?s=thin chess-pawn-piece}
 * @preview ![chess-pawn-piece](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDIuNjQxIDQ1Mi40MzhMMjI0IDQ0My4wNjJWNDMyQzIyNCA0MTguNzY2IDIxMy4yMzQgNDA4IDIwMCA0MDhINTZDNDIuNzY2IDQwOCAzMiA0MTguNzY2IDMyIDQzMlY0NDMuMDYyTDEzLjQyMiA0NTIuNDA2QzUuMjY2IDQ1Ni4yOTcgMCA0NjQuNzE5IDAgNDczLjg3NVY0ODhDMCA1MDEuMjM0IDEwLjc2NiA1MTIgMjQgNTEySDIzMkMyNDUuMjM0IDUxMiAyNTYgNTAxLjIzNCAyNTYgNDg4VjQ3My44NzVDMjU2IDQ2NC43NSAyNTAuNzY2IDQ1Ni4zNDQgMjQyLjY0MSA0NTIuNDM4Wk0yNDAgNDg4QzI0MCA0OTIuNDg0IDIzNi40ODQgNDk2IDIzMiA0OTZIMjRDMTkuNTE2IDQ5NiAxNiA0OTIuNDg0IDE2IDQ4OFY0NzMuODc1QzE2IDQ3MC44NTkgMTcuNzAzIDQ2OC4wOTQgMjAuNDY5IDQ2Ni43NjZMNDggNDUyLjkzOFY0MzJDNDggNDI3LjUxNiA1MS41MTYgNDI0IDU2IDQyNEgyMDBDMjA0LjQ4NCA0MjQgMjA4IDQyNy41MTYgMjA4IDQzMlY0NTIuOTM4TDIzNS42NzIgNDY2Ljg0NEMyMzguMjk3IDQ2OC4wOTQgMjQwIDQ3MC44NTkgMjQwIDQ3My44NzVWNDg4Wk04MC40MzggMjQwSDY0QzU5LjU3OCAyNDAgNTYgMjQzLjU3OCA1NiAyNDhTNTkuNTc4IDI1NiA2NCAyNTZINzguOTM4TDY0LjA2MiAzNzVDNjMuNTE2IDM3OS4zOTEgNjYuNjI1IDM4My4zOTEgNzEgMzgzLjkzOEM3MS4zNDQgMzgzLjk4NCA3MS42NzIgMzg0IDcyLjAxNiAzODRDNzUuOTg0IDM4NCA3OS40MzggMzgxLjA0NyA3OS45MzggMzc3TDk1LjA2MiAyNTZIMTYwLjkzOEwxNzYuMDYyIDM3N0MxNzYuNTYyIDM4MS4wNDcgMTgwLjAxNiAzODQgMTgzLjk4NCAzODRDMTg0LjMyOCAzODQgMTg0LjY1NiAzODMuOTg0IDE4NSAzODMuOTM4QzE4OS4zNzUgMzgzLjM5MSAxOTIuNDg0IDM3OS4zOTEgMTkxLjkzOCAzNzVMMTc3LjA2MiAyNTZIMTkyQzE5Ni40MjIgMjU2IDIwMCAyNTIuNDIyIDIwMCAyNDhTMTk2LjQyMiAyNDAgMTkyIDI0MEgxNzUuNTYyQzE5NS4xNDYgMjI1LjQxNiAyMDggMjAyLjI5MSAyMDggMTc2QzIwOCAxMzEuODE2IDE3Mi4xODQgOTYgMTI4IDk2QzgzLjgxOCA5NiA0OCAxMzEuODE2IDQ4IDE3NkM0OCAyMDIuMjkxIDYwLjg1NCAyMjUuNDE2IDgwLjQzOCAyNDBaTTEyOCAxMTJDMTYzLjI5MSAxMTIgMTkyIDE0MC43MDkgMTkyIDE3NkMxOTIgMjExLjI4OSAxNjMuMjkxIDI0MCAxMjggMjQwQzkyLjcxMSAyNDAgNjQgMjExLjI4OSA2NCAxNzZDNjQgMTQwLjcwOSA5Mi43MTEgMTEyIDEyOCAxMTJaIi8+PC9zdmc+|width=32|height=32)
 */
const ChessPawnPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M242.641 452.438L224 443.062V432C224 418.766 213.234 408 200 408H56C42.766 408 32 418.766 32 432V443.062L13.422 452.406C5.266 456.297 0 464.719 0 473.875V488C0 501.234 10.766 512 24 512H232C245.234 512 256 501.234 256 488V473.875C256 464.75 250.766 456.344 242.641 452.438ZM240 488C240 492.484 236.484 496 232 496H24C19.516 496 16 492.484 16 488V473.875C16 470.859 17.703 468.094 20.469 466.766L48 452.938V432C48 427.516 51.516 424 56 424H200C204.484 424 208 427.516 208 432V452.938L235.672 466.844C238.297 468.094 240 470.859 240 473.875V488ZM80.438 240H64C59.578 240 56 243.578 56 248S59.578 256 64 256H78.938L64.062 375C63.516 379.391 66.625 383.391 71 383.938C71.344 383.984 71.672 384 72.016 384C75.984 384 79.438 381.047 79.938 377L95.062 256H160.938L176.062 377C176.562 381.047 180.016 384 183.984 384C184.328 384 184.656 383.984 185 383.938C189.375 383.391 192.484 379.391 191.938 375L177.062 256H192C196.422 256 200 252.422 200 248S196.422 240 192 240H175.562C195.146 225.416 208 202.291 208 176C208 131.816 172.184 96 128 96C83.818 96 48 131.816 48 176C48 202.291 60.854 225.416 80.438 240ZM128 112C163.291 112 192 140.709 192 176C192 211.289 163.291 240 128 240C92.711 240 64 211.289 64 176C64 140.709 92.711 112 128 112Z" />
    </Icon>
);

export default ChessPawnPiece;
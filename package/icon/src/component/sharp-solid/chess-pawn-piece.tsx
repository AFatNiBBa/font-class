
import { Icon } from "../../index";

/**
 * A component that renders the `chess-pawn-piece` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-pawn-piece?s=sharp-solid chess-pawn-piece}
 * @preview ![chess-pawn-piece](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTc2IDI0MGMxOS40LTE0LjYgMzItMzcuOCAzMi02NGMwLTQ0LjItMzUuOC04MC04MC04MHMtODAgMzUuOC04MCA4MGMwIDI2LjIgMTIuNiA0OS40IDMyIDY0bC04IDAtMjQgMCAwIDQ4IDI0IDAgNS43IDBMNjQgMzg0bDEyOCAwLTEzLjctOTYgNS43IDAgMjQgMCAwLTQ4LTI0IDAtOCAwek0wIDUxMmwyNTYgMCAwLTMyLTQ4LTY0TDQ4IDQxNiAwIDQ4MGwwIDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChessPawnPiece: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M176 240c19.4-14.6 32-37.8 32-64c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 26.2 12.6 49.4 32 64l-8 0-24 0 0 48 24 0 5.7 0L64 384l128 0-13.7-96 5.7 0 24 0 0-48-24 0-8 0zM0 512l256 0 0-32-48-64L48 416 0 480l0 32z" />
    </Icon>
);

export default ChessPawnPiece;
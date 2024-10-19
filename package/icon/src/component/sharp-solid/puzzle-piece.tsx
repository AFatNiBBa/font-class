
import { Icon } from "../../index";

/**
 * A component that renders the `puzzle-piece` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/puzzle-piece?s=sharp-solid puzzle-piece}
 * @preview ![puzzle-piece](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkyIDg5LjZjLTE5LjEtOC4zLTMyLTIzLjgtMzItNDEuNmMwLTI2LjUgMjguNy00OCA2NC00OHM2NCAyMS41IDY0IDQ4YzAgMTcuOC0xMi45IDMzLjMtMzIgNDEuNmwwIDM4LjQgMTI4IDAgMCAxMjggMzguNCAwYzguMy0xOS4xIDIzLjgtMzIgNDEuNi0zMmMyNi41IDAgNDggMjguNyA0OCA2NHMtMjEuNSA2NC00OCA2NGMtMTcuOCAwLTMzLjMtMTIuOS00MS42LTMyTDM4NCAzMjBsMCAxOTItMTI4IDAgMC0zOC40YzE5LjEtOC4zIDMyLTIzLjggMzItNDEuNmMwLTI2LjUtMjguNy00OC02NC00OHMtNjQgMjEuNS02NCA0OGMwIDE3LjggMTIuOSAzMy4zIDMyIDQxLjZsMCAzOC40TDAgNTEyIDAgMzIwbDM4LjQgMGM4LjMgMTkuMSAyMy44IDMyIDQxLjYgMzJjMjYuNSAwIDQ4LTI4LjcgNDgtNjRzLTIxLjUtNjQtNDgtNjRjLTE3LjggMC0zMy4zIDEyLjktNDEuNiAzMkwwIDI1NiAwIDEyOGwxOTIgMCAwLTM4LjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const PuzzlePiece: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 89.6c-19.1-8.3-32-23.8-32-41.6c0-26.5 28.7-48 64-48s64 21.5 64 48c0 17.8-12.9 33.3-32 41.6l0 38.4 128 0 0 128 38.4 0c8.3-19.1 23.8-32 41.6-32c26.5 0 48 28.7 48 64s-21.5 64-48 64c-17.8 0-33.3-12.9-41.6-32L384 320l0 192-128 0 0-38.4c19.1-8.3 32-23.8 32-41.6c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 17.8 12.9 33.3 32 41.6l0 38.4L0 512 0 320l38.4 0c8.3 19.1 23.8 32 41.6 32c26.5 0 48-28.7 48-64s-21.5-64-48-64c-17.8 0-33.3 12.9-41.6 32L0 256 0 128l192 0 0-38.4z" />
    </Icon>
);

export default PuzzlePiece;
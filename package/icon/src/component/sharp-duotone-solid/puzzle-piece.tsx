
import { Icon, generic } from "../../index";

/**
 * A component that renders the `puzzle-piece` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/puzzle-piece?s=sharp-duotone-solid puzzle-piece}
 * @preview ![puzzle-piece](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTIgODkuNmMtMTkuMS04LjMtMzItMjMuOC0zMi00MS42YzAtMjYuNSAyOC43LTQ4IDY0LTQ4czY0IDIxLjUgNjQgNDhjMCAxNy44LTEyLjkgMzMuMy0zMiA0MS42bDAgMzguNCAxMjggMCAwIDEyOCAzOC40IDBjOC4zLTE5LjEgMjMuOC0zMiA0MS42LTMyYzI2LjUgMCA0OCAyOC43IDQ4IDY0cy0yMS41IDY0LTQ4IDY0Yy0xNy44IDAtMzMuMy0xMi45LTQxLjYtMzJMMzg0IDMyMGwwIDE5Mi0xMjggMCAwLTM4LjRjMTkuMS04LjMgMzItMjMuOCAzMi00MS42YzAtMjYuNS0yOC43LTQ4LTY0LTQ4cy02NCAyMS41LTY0IDQ4YzAgMTcuOCAxMi45IDMzLjMgMzIgNDEuNmwwIDM4LjRMMCA1MTIgMCAzMjBsMzguNCAwYzguMyAxOS4xIDIzLjggMzIgNDEuNiAzMmMyNi41IDAgNDgtMjguNyA0OC02NHMtMjEuNS02NC00OC02NGMtMTcuOCAwLTMzLjMgMTIuOS00MS42IDMyTDAgMjU2IDAgMTI4bDE5MiAwIDAtMzguNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const PuzzlePiece: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 89.6c-19.1-8.3-32-23.8-32-41.6c0-26.5 28.7-48 64-48s64 21.5 64 48c0 17.8-12.9 33.3-32 41.6l0 38.4 128 0 0 128 38.4 0c8.3-19.1 23.8-32 41.6-32c26.5 0 48 28.7 48 64s-21.5 64-48 64c-17.8 0-33.3-12.9-41.6-32L384 320l0 192-128 0 0-38.4c19.1-8.3 32-23.8 32-41.6c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 17.8 12.9 33.3 32 41.6l0 38.4L0 512 0 320l38.4 0c8.3 19.1 23.8 32 41.6 32c26.5 0 48-28.7 48-64s-21.5-64-48-64c-17.8 0-33.3 12.9-41.6 32L0 256 0 128l192 0 0-38.4z" />
    </Icon>
);

export default PuzzlePiece;
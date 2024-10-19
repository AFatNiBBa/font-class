
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-undo` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-undo?s=sharp-duotone-solid trash-undo}
 * @preview ![trash-undo](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA5NmwzODQgMEwzOTIgNTEyIDU2IDUxMiAzMiA5NnpNOTQuMSAyNTZsMTcgMTcgNjQgNjQgMTcgMTdMMjI1LjkgMzIwbC0xNy0xNy0yMy0yMyA1NC4xIDBjMjIuMSAwIDQwIDE3LjkgNDAgNDBsMCA0MCAwIDI0IDQ4IDAgMC0yNCAwLTQwYzAtNDguNi0zOS40LTg4LTg4LTg4bC01NC4xIDAgMjMtMjMgMTctMTdMMTkyIDE1OC4xbC0xNyAxNy02NCA2NC0xNyAxN3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE0NCAwTDEyOCAzMiAwIDMyIDAgOTZsNDQ4IDAgMC02NEwzMjAgMzIgMzA0IDAgMTQ0IDB6bTY1IDIwOWwxNy0xN0wxOTIgMTU4LjFsLTE3IDE3LTY0IDY0LTE3IDE3IDE3IDE3IDY0IDY0IDE3IDE3TDIyNS45IDMyMGwtMTctMTctMjMtMjMgNTQuMSAwYzIyLjEgMCA0MCAxNy45IDQwIDQwbDAgNDAgMCAyNCA0OCAwIDAtMjQgMC00MGMwLTQ4LjYtMzkuNC04OC04OC04OGwtNTQuMSAwIDIzLTIzeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const TrashUndo: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 96l384 0L392 512 56 512 32 96zM94.1 256l17 17 64 64 17 17L225.9 320l-17-17-23-23 54.1 0c22.1 0 40 17.9 40 40l0 40 0 24 48 0 0-24 0-40c0-48.6-39.4-88-88-88l-54.1 0 23-23 17-17L192 158.1l-17 17-64 64-17 17z" />
            <path d="M144 0L128 32 0 32 0 96l448 0 0-64L320 32 304 0 144 0zm65 209l17-17L192 158.1l-17 17-64 64-17 17 17 17 64 64 17 17L225.9 320l-17-17-23-23 54.1 0c22.1 0 40 17.9 40 40l0 40 0 24 48 0 0-24 0-40c0-48.6-39.4-88-88-88l-54.1 0 23-23z" />
    </Icon>
);

export default TrashUndo;
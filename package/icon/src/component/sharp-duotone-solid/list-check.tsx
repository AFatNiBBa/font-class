
import { Icon, generic } from "../../index";

/**
 * A component that renders the `list-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-check?s=sharp-duotone-solid list-check}
 * @preview ![list-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMzg0bDAgNjQgMzIgMCAyODggMCAzMiAwIDAtNjQtMzIgMC0yODggMC0zMiAwek0yMjQgNjRsMCA2NCAzMiAwIDIyNCAwIDMyIDAgMC02NC0zMiAwTDI1NiA2NGwtMzIgMHptMCAxNjBsMCA2NCAzMiAwIDIyNCAwIDMyIDAgMC02NC0zMiAwLTIyNCAwLTMyIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNTMuOCA3Mi4xbDE2LjEtMTcuOEwxMzQuMiAyMi4xIDExOC4yIDM5LjkgNjMuMSAxMDEuMSA0MSA3OWwtMTctMTdMLTkuOSA5NiA3IDExM2w0MCA0MCAxNy45IDE3LjkgMTYuOS0xOC44IDcyLTgwem0wIDE2MGwxNi4xLTE3LjgtMzUuNy0zMi4xLTE2LjEgMTcuOEw2My4xIDI2MS4xIDQxIDIzOWwtMTctMTdMLTkuOSAyNTYgNyAyNzNsNDAgNDAgMTcuOSAxNy45IDE2LjktMTguOCA3Mi04MHpNNDggNDY0YTQ4IDQ4IDAgMSAwIDAtOTYgNDggNDggMCAxIDAgMCA5NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const ListCheck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 384l0 64 32 0 288 0 32 0 0-64-32 0-288 0-32 0zM224 64l0 64 32 0 224 0 32 0 0-64-32 0L256 64l-32 0zm0 160l0 64 32 0 224 0 32 0 0-64-32 0-224 0-32 0z" />
            <path d="M153.8 72.1l16.1-17.8L134.2 22.1 118.2 39.9 63.1 101.1 41 79l-17-17L-9.9 96 7 113l40 40 17.9 17.9 16.9-18.8 72-80zm0 160l16.1-17.8-35.7-32.1-16.1 17.8L63.1 261.1 41 239l-17-17L-9.9 256 7 273l40 40 17.9 17.9 16.9-18.8 72-80zM48 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default ListCheck;
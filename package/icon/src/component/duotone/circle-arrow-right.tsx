
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-arrow-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-right?s=duotone circle-arrow-right}
 * @preview ![circle-arrow-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik01MTIgMjU2QTI1NiAyNTYgMCAxIDEgMCAyNTZhMjU2IDI1NiAwIDEgMSA1MTIgMHptLTQwMCAwYzAgMTMuMyAxMC43IDI0IDI0IDI0bDE4Mi4xIDAtNzEgNzFjLTkuNCA5LjQtOS40IDI0LjYgMCAzMy45YzQuNyA0LjcgMTAuOCA3IDE3IDdzMTIuMy0yLjMgMTctN0wzOTMgMjczYzQuNy00LjcgNy0xMC44IDctMTdzLTIuMy0xMi4zLTctMTdMMjgxIDEyN2MtNC43LTQuNy0xMC44LTctMTctN3MtMTIuMyAyLjMtMTcgN2MtOS40IDkuNC05LjQgMjQuNiAwIDMzLjlsNzEgNzFMMTM2IDIzMmMtMTMuMyAwLTI0IDEwLjctMjQgMjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zOTMgMjM5YzkuNCA5LjQgOS40IDI0LjYgMCAzMy45TDI4MSAzODVjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwcy05LjQtMjQuNiAwLTMzLjlsNzEtNzFMMTM2IDI4MGMtMTMuMyAwLTI0LTEwLjctMjQtMjRzMTAuNy0yNCAyNC0yNGwxODIuMSAwLTcxLTcxYy05LjQtOS40LTkuNC0yNC42IDAtMzMuOXMyNC42LTkuNCAzMy45IDBMMzkzIDIzOXoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleArrowRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zm-400 0c0 13.3 10.7 24 24 24l182.1 0-71 71c-9.4 9.4-9.4 24.6 0 33.9c4.7 4.7 10.8 7 17 7s12.3-2.3 17-7L393 273c4.7-4.7 7-10.8 7-17s-2.3-12.3-7-17L281 127c-4.7-4.7-10.8-7-17-7s-12.3 2.3-17 7c-9.4 9.4-9.4 24.6 0 33.9l71 71L136 232c-13.3 0-24 10.7-24 24z" />
            <path d="M393 239c9.4 9.4 9.4 24.6 0 33.9L281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239z" />
    </Icon>
);

export default CircleArrowRight;
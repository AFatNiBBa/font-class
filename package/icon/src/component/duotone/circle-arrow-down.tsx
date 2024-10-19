
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-arrow-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-down?s=duotone circle-arrow-down}
 * @preview ![circle-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEyMCA4YzAtNi4xIDIuMy0xMi4zIDctMTdjOS40LTkuNCAyNC42LTkuNCAzMy45IDBsNzEgNzFMMjMyIDEzNmMwLTEzLjMgMTAuNy0yNCAyNC0yNHMyNCAxMC43IDI0IDI0bDAgMTgyLjEgNzEtNzFjOS40LTkuNCAyNC42LTkuNCAzMy45IDBjNC43IDQuNyA3IDEwLjggNyAxN3MtMi4zIDEyLjMtNyAxN0wyNzMgMzkzYy00LjcgNC43LTEwLjggNy0xNyA3cy0xMi4zLTIuMy0xNy03TDEyNyAyODFjLTQuNy00LjctNy0xMC44LTctMTd6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMzkgMzkzYzkuNCA5LjQgMjQuNiA5LjQgMzMuOSAwTDM4NSAyODFjOS40LTkuNCA5LjQtMjQuNiAwLTMzLjlzLTI0LjYtOS40LTMzLjkgMGwtNzEgNzFMMjgwIDEzNmMwLTEzLjMtMTAuNy0yNC0yNC0yNHMtMjQgMTAuNy0yNCAyNGwwIDE4Mi4xLTcxLTcxYy05LjQtOS40LTI0LjYtOS40LTMzLjkgMHMtOS40IDI0LjYgMCAzMy45TDIzOSAzOTN6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleArrowDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm120 8c0-6.1 2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l71 71L232 136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 182.1 71-71c9.4-9.4 24.6-9.4 33.9 0c4.7 4.7 7 10.8 7 17s-2.3 12.3-7 17L273 393c-4.7 4.7-10.8 7-17 7s-12.3-2.3-17-7L127 281c-4.7-4.7-7-10.8-7-17z" />
            <path d="M239 393c9.4 9.4 24.6 9.4 33.9 0L385 281c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-71 71L280 136c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 182.1-71-71c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 393z" />
    </Icon>
);

export default CircleArrowDown;
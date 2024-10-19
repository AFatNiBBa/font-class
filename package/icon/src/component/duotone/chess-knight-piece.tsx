
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-knight-piece` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-knight-piece?s=duotone chess-knight-piece}
 * @preview ![chess-knight-piece](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4OGMwIDEzLjMgMTAuNyAyNCAyNCAyNGwyNzIgMGMxMy4zIDAgMjQtMTAuNyAyNC0yNGMwLTUuMi0xLjctMTAuMi00LjgtMTQuNEwyNzIgNDE2IDQ4IDQxNiA0LjggNDczLjZDMS43IDQ3Ny44IDAgNDgyLjggMCA0ODh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik01MC43IDEwOS4zbDYuOS02LjlMNDAuNyA5NEMzNS40IDkxLjMgMzIgODUuOCAzMiA3OS44QzMyIDcxLjEgMzkuMSA2NCA0Ny44IDY0bDgxLjUgMEMyMjUuOCA2NCAzMDQgMTQyLjIgMzA0IDIzOC43YzAgMTEuNS0xLjEgMjMtMy40IDM0LjNMMjcyIDQxNiA0OCA0MTZsMC0yNi4zYzAtMjkuOCAxMy44LTU3LjkgMzcuNS03Ni4xbDcxLjItNTQuN2M4LjEtNi4yIDgtMTguNS0uMi0yNC43Yy01LjUtNC4xLTEzLjEtNC4xLTE4LjYgMEw5OS4xIDI2My4zYy0yIDEuNS00LjIgMi45LTYuNSA0Yy0xMy43IDYuOS0zMCA1LjgtNDIuOC0yLjdsLTMuNS0yLjRDMzcuMyAyNTYuNCAzMiAyNDYuNCAzMiAyMzUuN2wwLTgxLjJjMC0xNyA2LjctMzMuMyAxOC43LTQ1LjN6bTQyLjEgNjMuNWExNiAxNiAwIDEgMCAwLTMyIDE2IDE2IDAgMSAwIDAgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const ChessKnightPiece: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 488c0 13.3 10.7 24 24 24l272 0c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L272 416 48 416 4.8 473.6C1.7 477.8 0 482.8 0 488z" />
            <path d="M50.7 109.3l6.9-6.9L40.7 94C35.4 91.3 32 85.8 32 79.8C32 71.1 39.1 64 47.8 64l81.5 0C225.8 64 304 142.2 304 238.7c0 11.5-1.1 23-3.4 34.3L272 416 48 416l0-26.3c0-29.8 13.8-57.9 37.5-76.1l71.2-54.7c8.1-6.2 8-18.5-.2-24.7c-5.5-4.1-13.1-4.1-18.6 0L99.1 263.3c-2 1.5-4.2 2.9-6.5 4c-13.7 6.9-30 5.8-42.8-2.7l-3.5-2.4C37.3 256.4 32 246.4 32 235.7l0-81.2c0-17 6.7-33.3 18.7-45.3zm42.1 63.5a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default ChessKnightPiece;
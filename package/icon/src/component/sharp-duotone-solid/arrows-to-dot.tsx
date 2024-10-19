
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-to-dot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-to-dot?s=sharp-duotone-solid arrows-to-dot}
 * @preview ![arrows-to-dot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgMjU2YTMyIDMyIDAgMSAwIDY0IDAgMzIgMzIgMCAxIDAgLTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODggMzJsMC0zMkwyMjQgMGwwIDMyIDAgNTAuNy05LjQtOS40TDE5MiA1MC43IDE0Ni43IDk2bDIyLjYgMjIuNiA2NCA2NEwyNTYgMjA1LjNsMjIuNi0yMi42IDY0LTY0TDM2NS4zIDk2IDMyMCA1MC43IDI5Ny40IDczLjQgMjg4IDgyLjcgMjg4IDMyek0zOTMuNCAzNDIuNkw0MTYgMzY1LjMgNDYxLjMgMzIwbC0yMi42LTIyLjYtOS40LTkuNCA1MC43IDAgMzIgMCAwLTY0LTMyIDAtNTAuNyAwIDkuNC05LjRMNDYxLjMgMTkyIDQxNiAxNDYuN2wtMjIuNiAyMi42LTY0IDY0TDMwNi43IDI1NmwyMi42IDIyLjYgNjQgNjR6TTExOC42IDE2OS40TDk2IDE0Ni43IDUwLjcgMTkybDIyLjYgMjIuNiA5LjQgOS40TDMyIDIyNCAwIDIyNGwwIDY0IDMyIDAgNTAuNyAwLTkuNCA5LjRMNTAuNyAzMjAgOTYgMzY1LjNsMjIuNi0yMi42IDY0LTY0TDIwNS4zIDI1NmwtMjIuNi0yMi42LTY0LTY0ek0xNDYuNyA0MTZMMTkyIDQ2MS4zbDIyLjYtMjIuNiA5LjQtOS40IDAgNTAuNyAwIDMyIDY0IDAgMC0zMiAwLTUwLjcgOS40IDkuNEwzMjAgNDYxLjMgMzY1LjMgNDE2bC0yMi42LTIyLjYtNjQtNjRMMjU2IDMwNi43bC0yMi42IDIyLjYtNjQgNjRMMTQ2LjcgNDE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ArrowsToDot: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 256a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
            <path d="M288 32l0-32L224 0l0 32 0 50.7-9.4-9.4L192 50.7 146.7 96l22.6 22.6 64 64L256 205.3l22.6-22.6 64-64L365.3 96 320 50.7 297.4 73.4 288 82.7 288 32zM393.4 342.6L416 365.3 461.3 320l-22.6-22.6-9.4-9.4 50.7 0 32 0 0-64-32 0-50.7 0 9.4-9.4L461.3 192 416 146.7l-22.6 22.6-64 64L306.7 256l22.6 22.6 64 64zM118.6 169.4L96 146.7 50.7 192l22.6 22.6 9.4 9.4L32 224 0 224l0 64 32 0 50.7 0-9.4 9.4L50.7 320 96 365.3l22.6-22.6 64-64L205.3 256l-22.6-22.6-64-64zM146.7 416L192 461.3l22.6-22.6 9.4-9.4 0 50.7 0 32 64 0 0-32 0-50.7 9.4 9.4L320 461.3 365.3 416l-22.6-22.6-64-64L256 306.7l-22.6 22.6-64 64L146.7 416z" />
    </Icon>
);

export default ArrowsToDot;
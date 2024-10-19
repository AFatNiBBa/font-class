
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-dots` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-dots?s=sharp-duotone-solid comment-dots}
 * @preview ![comment-dots](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI0MGMwIDQ5LjYgMjEuMyA5NS4xIDU2LjkgMTMwLjhMMTYgNDgwbDE1MC40LTQ1LjFjMjcuOSA4LjUgNTguMSAxMy4xIDg5LjYgMTMuMWMxNDEuNCAwIDI1Ni05My4xIDI1Ni0yMDhTMzk3LjQgMzIgMjU2IDMyUzAgMTI1LjEgMCAyNDB6bTE2MCAwYTMyIDMyIDAgMSAxIC02NCAwIDMyIDMyIDAgMSAxIDY0IDB6bTEyOCAwYTMyIDMyIDAgMSAxIC02NCAwIDMyIDMyIDAgMSAxIDY0IDB6bTEyOCAwYTMyIDMyIDAgMSAxIC02NCAwIDMyIDMyIDAgMSAxIDY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05NiAyNDBhMzIgMzIgMCAxIDEgNjQgMCAzMiAzMiAwIDEgMSAtNjQgMHptMTI4IDBhMzIgMzIgMCAxIDEgNjQgMCAzMiAzMiAwIDEgMSAtNjQgMHptMTYwLTMyYTMyIDMyIDAgMSAxIDAgNjQgMzIgMzIgMCAxIDEgMC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CommentDots: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 49.6 21.3 95.1 56.9 130.8L16 480l150.4-45.1c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm160 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm128 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm128 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M96 240a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm160-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default CommentDots;
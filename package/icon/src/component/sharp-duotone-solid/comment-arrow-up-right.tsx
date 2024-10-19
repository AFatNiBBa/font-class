
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-arrow-up-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-arrow-up-right?s=sharp-duotone-solid comment-arrow-up-right}
 * @preview ![comment-arrow-up-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI0MGMwIDQ5LjYgMjEuMyA5NS4xIDU2LjkgMTMwLjhMMTYgNDgwbDE1MC40LTQ1LjFjMjcuOSA4LjUgNTguMSAxMy4xIDg5LjYgMTMuMWMxNDEuNCAwIDI1Ni05My4xIDI1Ni0yMDhTMzk3LjQgMzIgMjU2IDMyUzAgMTI1LjEgMCAyNDB6bTE1MC4xIDcyYzUuNy01LjcgMTEuMy0xMS4zIDE3LTE3YzI5LTI5IDU4LTU4IDg3LTg3TDIwMCAyMDhsLTI0IDBjMC0xNiAwLTMyIDAtNDhsMjQgMCAxMTIgMCAyNCAwIDAgMjQgMCAxMTIgMCAyNC00OCAwYzAtOCAwLTE2IDAtMjRjMC0xOCAwLTM2IDAtNTQuMWMtMjkgMjktNTggNTgtODcgODdjLTUuNyA1LjctMTEuMyAxMS4zLTE3IDE3TDE1MC4xIDMxMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE3NiAxNjBsMjQgMCAxMTIgMCAyNCAwIDAgMjQgMCAxMTIgMCAyNC00OCAwIDAtMjQgMC01NC4xLTg3IDg3LTE3IDE3TDE1MC4xIDMxMmwxNy0xNyA4Ny04N0wyMDAgMjA4bC0yNCAwIDAtNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const CommentArrowUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 49.6 21.3 95.1 56.9 130.8L16 480l150.4-45.1c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm150.1 72c5.7-5.7 11.3-11.3 17-17c29-29 58-58 87-87L200 208l-24 0c0-16 0-32 0-48l24 0 112 0 24 0 0 24 0 112 0 24-48 0c0-8 0-16 0-24c0-18 0-36 0-54.1c-29 29-58 58-87 87c-5.7 5.7-11.3 11.3-17 17L150.1 312z" />
            <path d="M176 160l24 0 112 0 24 0 0 24 0 112 0 24-48 0 0-24 0-54.1-87 87-17 17L150.1 312l17-17 87-87L200 208l-24 0 0-48z" />
    </Icon>
);

export default CommentArrowUpRight;
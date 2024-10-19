
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-pen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-pen?s=sharp-duotone-solid comment-pen}
 * @preview ![comment-pen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI0MGMwIDQ5LjYgMjEuMyA5NS4xIDU2LjkgMTMwLjhMMTYgNDgwbDE1MC40LTQ1LjFjMjcuOSA4LjUgNTguMSAxMy4xIDg5LjYgMTMuMWMxNDEuNCAwIDI1Ni05My4xIDI1Ni0yMDhTMzk3LjQgMzIgMjU2IDMyUzAgMTI1LjEgMCAyNDB6bTE2MCA5Ni4xbDcuOS01NS4zIDg1LjItODUuMkwzMDAuNCAyNDNsLTg1LjIgODUuMkwxNjAgMzM2LjF6TTI3NS43IDE3My4xTDMwNC44IDE0NGw0Ny4zIDQ3LjNMMzIzIDIyMC40bC00Ny4zLTQ3LjN6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zNTIuMSAxOTEuNEwzMDQuOCAxNDRsLTI5LjEgMjkuMUwzMjMgMjIwLjRsMjkuMS0yOS4xek0zMDAuNCAyNDNsLTQ3LjMtNDcuMy04NS4yIDg1LjJMMTYwIDMzNi4xbDU1LjMtNy45TDMwMC40IDI0M3oiLz48L3N2Zz4=|width=32|height=32)
 */
const CommentPen: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 49.6 21.3 95.1 56.9 130.8L16 480l150.4-45.1c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm160 96.1l7.9-55.3 85.2-85.2L300.4 243l-85.2 85.2L160 336.1zM275.7 173.1L304.8 144l47.3 47.3L323 220.4l-47.3-47.3z" />
            <path d="M352.1 191.4L304.8 144l-29.1 29.1L323 220.4l29.1-29.1zM300.4 243l-47.3-47.3-85.2 85.2L160 336.1l55.3-7.9L300.4 243z" />
    </Icon>
);

export default CommentPen;
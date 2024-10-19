
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-arrow-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-arrow-down?s=sharp-duotone-solid comment-arrow-down}
 * @preview ![comment-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI0MGMwIDQ5LjYgMjEuMyA5NS4xIDU2LjkgMTMwLjhMMTYgNDgwbDE1MC40LTQ1LjFjMjcuOSA4LjUgNTguMSAxMy4xIDg5LjYgMTMuMWMxNDEuNCAwIDI1Ni05My4xIDI1Ni0yMDhTMzk3LjQgMzIgMjU2IDMyUzAgMTI1LjEgMCAyNDB6bTE1MC4xIDE2TDE4NCAyMjIuMWwxNyAxNyAzMSAzMUwyMzIgMTUybDAtMjQgNDggMCAwIDI0IDAgMTE4LjEgMzEtMzEgMTctMTdMMzYxLjkgMjU2bC0xNyAxNy03MiA3Mi0xNyAxNy0xNy0xNy03Mi03Mi0xNy0xN3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4MCAxMjhsMCAyNCAwIDExOC4xIDMxLTMxIDE3LTE3TDM2MS45IDI1NmwtMTcgMTctNzIgNzItMTcgMTctMTctMTctNzItNzItMTctMTdMMTg0IDIyMi4xbDE3IDE3IDMxIDMxTDIzMiAxNTJsMC0yNCA0OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CommentArrowDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 49.6 21.3 95.1 56.9 130.8L16 480l150.4-45.1c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm150.1 16L184 222.1l17 17 31 31L232 152l0-24 48 0 0 24 0 118.1 31-31 17-17L361.9 256l-17 17-72 72-17 17-17-17-72-72-17-17z" />
            <path d="M280 128l0 24 0 118.1 31-31 17-17L361.9 256l-17 17-72 72-17 17-17-17-72-72-17-17L184 222.1l17 17 31 31L232 152l0-24 48 0z" />
    </Icon>
);

export default CommentArrowDown;
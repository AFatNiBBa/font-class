
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-arrow-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-arrow-up?s=sharp-duotone-solid comment-arrow-up}
 * @preview ![comment-arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI0MGMwIDQ5LjYgMjEuMyA5NS4xIDU2LjkgMTMwLjhMMTYgNDgwbDE1MC40LTQ1LjFjMjcuOSA4LjUgNTguMSAxMy4xIDg5LjYgMTMuMWMxNDEuNCAwIDI1Ni05My4xIDI1Ni0yMDhTMzk3LjQgMzIgMjU2IDMyUzAgMTI1LjEgMCAyNDB6bTE1MC4xLTE2bDE3LTE3IDcyLTcyIDE3LTE3IDE3IDE3IDcyIDcyIDE3IDE3TDMyOCAyNTcuOWwtMTctMTctMzEtMzFMMjgwIDMyOGwwIDI0LTQ4IDAgMC0yNCAwLTExOC4xLTMxIDMxLTE3IDE3TDE1MC4xIDIyNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4MCAzNTJsMC0yNCAwLTExOC4xIDMxIDMxIDE3IDE3TDM2MS45IDIyNGwtMTctMTctNzItNzItMTctMTctMTcgMTctNzIgNzItMTcgMTdMMTg0IDI1Ny45bDE3LTE3IDMxLTMxTDIzMiAzMjhsMCAyNCA0OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CommentArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 49.6 21.3 95.1 56.9 130.8L16 480l150.4-45.1c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm150.1-16l17-17 72-72 17-17 17 17 72 72 17 17L328 257.9l-17-17-31-31L280 328l0 24-48 0 0-24 0-118.1-31 31-17 17L150.1 224z" />
            <path d="M280 352l0-24 0-118.1 31 31 17 17L361.9 224l-17-17-72-72-17-17-17 17-72 72-17 17L184 257.9l17-17 31-31L232 328l0 24 48 0z" />
    </Icon>
);

export default CommentArrowUp;
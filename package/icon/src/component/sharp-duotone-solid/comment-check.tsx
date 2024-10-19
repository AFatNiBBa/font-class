
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-check?s=sharp-duotone-solid comment-check}
 * @preview ![comment-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI0MGMwIDQ5LjYgMjEuMyA5NS4xIDU2LjkgMTMwLjhMMTYgNDgwbDE1MC40LTQ1LjFjMjcuOSA4LjUgNTguMSAxMy4xIDg5LjYgMTMuMWMxNDEuNCAwIDI1Ni05My4xIDI1Ni0yMDhTMzk3LjQgMzIgMjU2IDMyUzAgMTI1LjEgMCAyNDB6bTEyNi4xIDBMMTYwIDIwNi4xbDEgMSAxNiAxNmMxNS43IDE1LjcgMzEuNCAzMS40IDQ3IDQ3YzM3LTM3IDc0LTc0IDExMS0xMTFjNS4zLTUuMyAxMC43LTEwLjcgMTYtMTZjLjMtLjMgLjYtLjYgMS0xTDM4NS45IDE3NmMtLjMgLjMtLjYgLjYtMSAxYy01LjMgNS4zLTEwLjcgMTAuNy0xNiAxNmMtNDIuNyA0Mi43LTg1LjMgODUuMy0xMjggMTI4bC0xNyAxNy0xNy0xNy02NC02NGMtNS4zLTUuMy0xMC43LTEwLjctMTYtMTZsLTEtMXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NSAxNzdMMjQxIDMyMWwtMTcgMTctMTctMTctODAtODBMMTYxIDIwN2w2MyA2M0wzNTEgMTQzIDM4NSAxNzd6Ii8+PC9zdmc+|width=32|height=32)
 */
const CommentCheck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 49.6 21.3 95.1 56.9 130.8L16 480l150.4-45.1c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm126.1 0L160 206.1l1 1 16 16c15.7 15.7 31.4 31.4 47 47c37-37 74-74 111-111c5.3-5.3 10.7-10.7 16-16c.3-.3 .6-.6 1-1L385.9 176c-.3 .3-.6 .6-1 1c-5.3 5.3-10.7 10.7-16 16c-42.7 42.7-85.3 85.3-128 128l-17 17-17-17-64-64c-5.3-5.3-10.7-10.7-16-16l-1-1z" />
            <path d="M385 177L241 321l-17 17-17-17-80-80L161 207l63 63L351 143 385 177z" />
    </Icon>
);

export default CommentCheck;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `comment-text` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comment-text?s=sharp-duotone-solid comment-text}
 * @preview ![comment-text](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI0MGMwIDQ5LjYgMjEuMyA5NS4xIDU2LjkgMTMwLjhMMTYgNDgwbDE1MC40LTQ1LjFjMjcuOSA4LjUgNTguMSAxMy4xIDg5LjYgMTMuMWMxNDEuNCAwIDI1Ni05My4xIDI1Ni0yMDhTMzk3LjQgMzIgMjU2IDMyUzAgMTI1LjEgMCAyNDB6bTE2MC04MGwyNCAwIDcyIDAgNzIgMCAyNCAwIDAgNDgtMjQgMC00OCAwIDAgMTA0IDAgMjQtNDggMCAwLTI0IDAtMTA0LTQ4IDAtMjQgMCAwLTQ4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTYwIDE2MGwyNCAwIDcyIDAgNzIgMCAyNCAwIDAgNDgtMjQgMC00OCAwIDAgMTA0IDAgMjQtNDggMCAwLTI0IDAtMTA0LTQ4IDAtMjQgMCAwLTQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CommentText: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 240c0 49.6 21.3 95.1 56.9 130.8L16 480l150.4-45.1c27.9 8.5 58.1 13.1 89.6 13.1c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240zm160-80l24 0 72 0 72 0 24 0 0 48-24 0-48 0 0 104 0 24-48 0 0-24 0-104-48 0-24 0 0-48z" />
            <path d="M160 160l24 0 72 0 72 0 24 0 0 48-24 0-48 0 0 104 0 24-48 0 0-24 0-104-48 0-24 0 0-48z" />
    </Icon>
);

export default CommentText;
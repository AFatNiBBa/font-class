
import { Icon, generic } from "../../index";

/**
 * A component that renders the `code-commit` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-commit?s=sharp-duotone-solid code-commit}
 * @preview ![code-commit](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNGwwIDY0IDMyIDAgMTQ0IDAgMC02NEwzMiAyMjQgMCAyMjR6bTQ2NCAwbDAgNjQgMTQ0IDAgMzIgMCAwLTY0LTMyIDAtMTQ0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zODQgMTkybDAgMTI4LTEyOCAwIDAtMTI4IDEyOCAwek0yNTYgMTEybC04MCAwIDAgODAgMCAxMjggMCA4MCA4MCAwIDEyOCAwIDgwIDAgMC04MCAwLTEyOCAwLTgwLTgwIDAtMTI4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const CodeCommit: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 224l0 64 32 0 144 0 0-64L32 224 0 224zm464 0l0 64 144 0 32 0 0-64-32 0-144 0z" />
            <path d="M384 192l0 128-128 0 0-128 128 0zM256 112l-80 0 0 80 0 128 0 80 80 0 128 0 80 0 0-80 0-128 0-80-80 0-128 0z" />
    </Icon>
);

export default CodeCommit;
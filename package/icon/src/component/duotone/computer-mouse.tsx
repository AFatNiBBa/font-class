
import { Icon, generic } from "../../index";

/**
 * A component that renders the `computer-mouse` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer-mouse?s=duotone computer-mouse}
 * @preview ![computer-mouse](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MEMwIDcxLjYgNzEuNiAwIDE2MCAwbDE2IDAgMCAxOTJMMCAxOTJsMC0zMnptMCA2NGwxOTIgMCAxOTIgMCAwIDEyOGMwIDg4LjQtNzEuNiAxNjAtMTYwIDE2MGwtNjQgMEM3MS42IDUxMiAwIDQ0MC40IDAgMzUyTDAgMjI0ek0yMDggMGwxNiAwYzg4LjQgMCAxNjAgNzEuNiAxNjAgMTYwbDAgMzItMTc2IDBMMjA4IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNzYgMTkyTDAgMTkybDAgMzIgMTkyIDAgMTkyIDAgMC0zMi0xNzYgMEwyMDggMCAxNzYgMGwwIDE5MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const ComputerMouse: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 160C0 71.6 71.6 0 160 0l16 0 0 192L0 192l0-32zm0 64l192 0 192 0 0 128c0 88.4-71.6 160-160 160l-64 0C71.6 512 0 440.4 0 352L0 224zM208 0l16 0c88.4 0 160 71.6 160 160l0 32-176 0L208 0z" />
            <path d="M176 192L0 192l0 32 192 0 192 0 0-32-176 0L208 0 176 0l0 192z" />
    </Icon>
);

export default ComputerMouse;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `toothbrush` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toothbrush?s=sharp-duotone-solid toothbrush}
 * @preview ![toothbrush](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAyNTZsMCAyNCAwIDEzNiA0OCAwIDAtMTM2IDAtMjQtNDggMHptODAgMGwwIDI0IDAgMTM2IDQ4IDAgMC0xMzYgMC0yNC00OCAwem04MCAwbDAgMjQgMCAxMzYgNDggMCAwLTEzNiAwLTI0LTQ4IDB6bTgwIDBsMCAyNCAwIDEzNiA0OCAwIDAtMTM2IDAtMjQtNDggMHptODAgMGwwIDI0IDAgMTM2IDQ4IDAgMC0xMzYgMC0yNC00OCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAxNjBjMC0zNS4zIDI4LjctNjQgNjQtNjRsMjI0IDBjMzcuNyAwIDQwLTMzLjIgNDAtNjRjNTcuNCAwIDEyMCAzMS42IDEyMCA5NmMwIDUzLTQzIDk2LTk2IDk2TDAgMjI0bDAtNjR6TTMyIDQxNmw1MTIgMCAzMiAwIDAgNjQtMzIgMEwzMiA0ODAgMCA0ODBsMC02NCAzMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Toothbrush: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 256l0 24 0 136 48 0 0-136 0-24-48 0zm80 0l0 24 0 136 48 0 0-136 0-24-48 0zm80 0l0 24 0 136 48 0 0-136 0-24-48 0zm80 0l0 24 0 136 48 0 0-136 0-24-48 0zm80 0l0 24 0 136 48 0 0-136 0-24-48 0z" />
            <path d="M0 160c0-35.3 28.7-64 64-64l224 0c37.7 0 40-33.2 40-64c57.4 0 120 31.6 120 96c0 53-43 96-96 96L0 224l0-64zM32 416l512 0 32 0 0 64-32 0L32 480 0 480l0-64 32 0z" />
    </Icon>
);

export default Toothbrush;
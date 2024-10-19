
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bookmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark?s=sharp-duotone-solid bookmark}
 * @preview ![bookmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAwbDAgMzUyIDk2LTY0IDk2IDY0TDI4OCAwIDk2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zODQgMGwwIDUxMkwxOTIgNDAwIDAgNTEyIDAgMCA5NiAwbDAgMzUyIDk2LTY0IDk2IDY0TDI4OCAwbDk2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Bookmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M96 0l0 352 96-64 96 64L288 0 96 0z" />
            <path d="M384 0l0 512L192 400 0 512 0 0 96 0l0 352 96-64 96 64L288 0l96 0z" />
    </Icon>
);

export default Bookmark;
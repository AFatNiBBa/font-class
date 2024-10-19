
import { Icon, generic } from "../../index";

/**
 * A component that renders the `blog` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blog?s=sharp-duotone-solid blog}
 * @preview ![blog](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTIgMGwwIDY0YzE0MS40IDAgMjU2IDExNC42IDI1NiAyNTZsNjQgMEM1MTIgMTQzLjMgMzY4LjcgMCAxOTIgMHptMCA5NmwwIDY0Yzg4LjQgMCAxNjAgNzEuNiAxNjAgMTYwbDY0IDBDNDE2IDE5Ni4zIDMxNS43IDk2IDE5MiA5NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk2IDk2bDAgNDggMCAyMjRjMCAyNi41IDIxLjUgNDggNDggNDhzNDgtMjEuNSA0OC00OHMtMjEuNS00OC00OC00OGwtMTYgMCAwLTk2IDE2IDBjNzkuNSAwIDE0NCA2NC41IDE0NCAxNDRzLTY0LjUgMTQ0LTE0NCAxNDRTMCA0NDcuNSAwIDM2OEwwIDE0NCAwIDk2bDk2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Blog: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 0l0 64c141.4 0 256 114.6 256 256l64 0C512 143.3 368.7 0 192 0zm0 96l0 64c88.4 0 160 71.6 160 160l64 0C416 196.3 315.7 96 192 96z" />
            <path d="M96 96l0 48 0 224c0 26.5 21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48l-16 0 0-96 16 0c79.5 0 144 64.5 144 144s-64.5 144-144 144S0 447.5 0 368L0 144 0 96l96 0z" />
    </Icon>
);

export default Blog;
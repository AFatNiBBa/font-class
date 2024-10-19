
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-bookmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-bookmark?s=sharp-duotone-solid folder-bookmark}
 * @preview ![folder-bookmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDUxMiAwIDAtMzg0LTY0IDAgMCAyNTYtODAtNTYtODAgNTYgMC0yNTYtMTYgMEwyMjQgMzIgMCAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4OCAzNTJWOTZINDQ4VjM1MmwtODAtNTYtODAgNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const FolderBookmark: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 480l512 0 0-384-64 0 0 256-80-56-80 56 0-256-16 0L224 32 0 32z" />
            <path d="M288 352V96H448V352l-80-56-80 56z" />
    </Icon>
);

export default FolderBookmark;
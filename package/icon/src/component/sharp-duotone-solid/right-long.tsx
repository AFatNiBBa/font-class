
import { Icon, generic } from "../../index";

/**
 * A component that renders the `right-long` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-long?s=sharp-duotone-solid right-long}
 * @preview ![right-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MmM2NCAwIDEyOCAwIDE5MiAwYzQyLjcgMCA4NS4zIDAgMTI4IDBsMCAxMjhMMCAzMjAgMCAxOTJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zNTIgNDE2TDUxMiAyNTYgMzUyIDk2bC0zMiAwczAgMCAwIDBsMCA5NiAwIDEyOCAwIDk2IDMyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const RightLong: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192c64 0 128 0 192 0c42.7 0 85.3 0 128 0l0 128L0 320 0 192z" />
            <path d="M352 416L512 256 352 96l-32 0s0 0 0 0l0 96 0 128 0 96 32 0z" />
    </Icon>
);

export default RightLong;
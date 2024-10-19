
import { Icon } from "../../index";

/**
 * A component that renders the `notes` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notes?s=sharp-thin notes}
 * @preview ![notes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTEyIDQxNmwtMTYgMCAwLTE2TDk2IDQ4bDAtMTYgMTYgMCAzNTIgMCAxNiAwIDAgMTYgMCAyNTZMMzY4IDQxNmwtMjU2IDB6bTI1Ni0yMi42TDQ1Ny40IDMwNCAzNjggMzA0bDAgODkuNHpNMzUyIDQwMGwwLTEwNCAwLTggOCAwIDEwNCAwIDAtMjQwTDExMiA0OGwwIDM1MiAyNDAgMHpNNjQgMTI4bDAgMTYtNDggMCAwIDM1MiAzNTIgMCAwLTQ4IDE2IDAgMCA0OCAwIDE2LTE2IDBMMTYgNTEyIDAgNTEybDAtMTZMMCAxNDRsMC0xNiAxNiAwIDQ4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Notes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 416l-16 0 0-16L96 48l0-16 16 0 352 0 16 0 0 16 0 256L368 416l-256 0zm256-22.6L457.4 304 368 304l0 89.4zM352 400l0-104 0-8 8 0 104 0 0-240L112 48l0 352 240 0zM64 128l0 16-48 0 0 352 352 0 0-48 16 0 0 48 0 16-16 0L16 512 0 512l0-16L0 144l0-16 16 0 48 0z" />
    </Icon>
);

export default Notes;
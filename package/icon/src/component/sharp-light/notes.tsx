
import { Icon } from "../../index";

/**
 * A component that renders the `notes` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notes?s=sharp-light notes}
 * @preview ![notes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTI4IDQxNmwtMzIgMCAwLTMyTDk2IDY0bDAtMzIgMzIgMCAzMjAgMCAzMiAwIDAgMzIgMCAyNDBMMzY4IDQxNmwtMjQwIDB6bTIyNi43LTMyTDQ0OCAyOTAuN2wwLTIuNy05NiAwIDAgOTYgMi43IDB6TTMyMCAzODRsMC0xMTIgMC0xNiAxNiAwIDExMiAwIDAtMTkyTDEyOCA2NGwwIDMyMCAxOTIgMHptMCA5NmwwIDMyLTE2IDBMMTYgNTEyIDAgNTEybDAtMTZMMCAxNDRsMC0xNiAzMiAwIDAgMTYgMCAzMzYgMjcyIDAgMTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Notes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 416l-32 0 0-32L96 64l0-32 32 0 320 0 32 0 0 32 0 240L368 416l-240 0zm226.7-32L448 290.7l0-2.7-96 0 0 96 2.7 0zM320 384l0-112 0-16 16 0 112 0 0-192L128 64l0 320 192 0zm0 96l0 32-16 0L16 512 0 512l0-16L0 144l0-16 32 0 0 16 0 336 272 0 16 0z" />
    </Icon>
);

export default Notes;

import { Icon } from "../../index";

/**
 * A component that renders the `folder-minus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-minus?s=sharp-solid folder-minus}
 * @preview ![folder-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTEyIDQ4MEwwIDQ4MCAwIDMybDIyNCAwIDQ4IDY0IDI0MCAwIDAgMzg0ek0xODQgMjcybC0yNCAwIDAgNDggMjQgMCAxNDQgMCAyNCAwIDAtNDgtMjQgMC0xNDQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const FolderMinus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 480L0 480 0 32l224 0 48 64 240 0 0 384zM184 272l-24 0 0 48 24 0 144 0 24 0 0-48-24 0-144 0z" />
    </Icon>
);

export default FolderMinus;
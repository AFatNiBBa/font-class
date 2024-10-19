
import { Icon } from "../../index";

/**
 * A component that renders the `trash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash?s=sharp-solid trash}
 * @preview ![trash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTQ0IDBMMTI4IDMyIDAgMzIgMCA5Nmw0NDggMCAwLTY0TDMyMCAzMiAzMDQgMCAxNDQgMHpNNDE2IDEyOEwzMiAxMjggNTYgNTEybDMzNiAwIDI0LTM4NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Trash: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 0L128 32 0 32 0 96l448 0 0-64L320 32 304 0 144 0zM416 128L32 128 56 512l336 0 24-384z" />
    </Icon>
);

export default Trash;
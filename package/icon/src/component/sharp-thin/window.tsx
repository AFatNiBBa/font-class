
import { Icon } from "../../index";

/**
 * A component that renders the `window` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window?s=sharp-thin window}
 * @preview ![window](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgNDhsMCA0MTYgNDgwIDAgMC00MTZMMTYgNDh6TTAgMzJsMTYgMCA0ODAgMCAxNiAwIDAgMTYgMCA0MTYgMCAxNi0xNiAwTDE2IDQ4MCAwIDQ4MGwwLTE2TDAgNDggMCAzMnptMTEyIDgwbDAgMzItMzIgMCAwLTMyIDMyIDB6bTY0IDBsMzIgMCAwIDMyLTMyIDAgMC0zMnptMTI4IDBsMCAzMi0zMiAwIDAtMzIgMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Window: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 48l0 416 480 0 0-416L16 48zM0 32l16 0 480 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zm112 80l0 32-32 0 0-32 32 0zm64 0l32 0 0 32-32 0 0-32zm128 0l0 32-32 0 0-32 32 0z" />
    </Icon>
);

export default Window;

import { Icon } from "../../index";

/**
 * A component that renders the `window` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window?s=sharp-light window}
 * @preview ![window](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgNjRsMCAzODQgNDQ4IDAgMC0zODRMMzIgNjR6TTAgMzJsMzIgMCA0NDggMCAzMiAwIDAgMzIgMCAzODQgMCAzMi0zMiAwTDMyIDQ4MCAwIDQ4MGwwLTMyTDAgNjQgMCAzMnptMTIwIDcybDAgNDgtNDggMCAwLTQ4IDQ4IDB6bTQ4IDBsNDggMCAwIDQ4LTQ4IDAgMC00OHptMTQ0IDBsMCA0OC00OCAwIDAtNDggNDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Window: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 64l0 384 448 0 0-384L32 64zM0 32l32 0 448 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zm120 72l0 48-48 0 0-48 48 0zm48 0l48 0 0 48-48 0 0-48zm144 0l0 48-48 0 0-48 48 0z" />
    </Icon>
);

export default Window;
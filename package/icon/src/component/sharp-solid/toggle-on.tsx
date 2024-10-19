
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-on` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-on?s=sharp-solid toggle-on}
 * @preview ![toggle-on](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTc2IDY0TDAgNjQgMCA0NDhsNTc2IDAgMC0zODR6bS05NiA5NmwwIDE5Mi0xOTIgMCAwLTE5MiAxOTIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ToggleOn: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 64L0 64 0 448l576 0 0-384zm-96 96l0 192-192 0 0-192 192 0z" />
    </Icon>
);

export default ToggleOn;
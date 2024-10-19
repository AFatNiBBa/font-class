
import { Icon } from "../../index";

/**
 * A component that renders the `toggle-on` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-on?s=sharp-regular toggle-on}
 * @preview ![toggle-on](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggMTEybDAgMjg4IDQ4MCAwIDAtMjg4TDQ4IDExMnpNMCA2NGw0OCAwIDQ4MCAwIDQ4IDAgMCA0OCAwIDI4OCAwIDQ4LTQ4IDBMNDggNDQ4IDAgNDQ4bDAtNDhMMCAxMTIgMCA2NHptNDgwIDk2bDAgMTkyLTE5MiAwIDAtMTkyIDE5MiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ToggleOn: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 112l0 288 480 0 0-288L48 112zM0 64l48 0 480 0 48 0 0 48 0 288 0 48-48 0L48 448 0 448l0-48L0 112 0 64zm480 96l0 192-192 0 0-192 192 0z" />
    </Icon>
);

export default ToggleOn;
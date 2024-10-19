
import { Icon } from "../../index";

/**
 * A component that renders the `battery-empty` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-empty?s=sharp-regular battery-empty}
 * @preview ![battery-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggMTQ0bDAgMjI0IDQ0OCAwIDAtMjI0TDQ4IDE0NHpNMCA5Nmw0OCAwIDQ0OCAwIDQ4IDAgMCA0OCAwIDQ4IDMyIDAgMCAxMjgtMzIgMCAwIDQ4IDAgNDgtNDggMEw0OCA0MTYgMCA0MTZsMC00OEwwIDE0NCAwIDk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BatteryEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 144l0 224 448 0 0-224L48 144zM0 96l48 0 448 0 48 0 0 48 0 48 32 0 0 128-32 0 0 48 0 48-48 0L48 416 0 416l0-48L0 144 0 96z" />
    </Icon>
);

export default BatteryEmpty;
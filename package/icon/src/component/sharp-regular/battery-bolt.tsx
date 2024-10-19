
import { Icon } from "../../index";

/**
 * A component that renders the `battery-bolt` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-bolt?s=sharp-regular battery-bolt}
 * @preview ![battery-bolt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggMzY4bDEzNi41IDAtMTUgNDhMNDggNDE2IDAgNDE2bDAtNDhMMCAxNDQgMCA5Nmw0OCAwIDI1OS41IDAtNjMuMiA0OEw0OCAxNDRsMCAyMjR6bTE4OC41IDQ4bDYzLjItNDhMNDk2IDM2OGwwLTIyNC0xMzYuNSAwIDE1LTQ4TDQ5NiA5Nmw0OCAwIDAgNDggMCA0OCAzMiAwIDAgMTI4LTMyIDAgMCA0OCAwIDQ4LTQ4IDAtMjU5LjUgMHpNMjA4IDQwMGw0MC0xMjgtODggMCAwLTI0TDMzNiAxMTIgMjk2IDI0MGw4OCAwIDAgMjRMMjA4IDQwMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BatteryBolt: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 368l136.5 0-15 48L48 416 0 416l0-48L0 144 0 96l48 0 259.5 0-63.2 48L48 144l0 224zm188.5 48l63.2-48L496 368l0-224-136.5 0 15-48L496 96l48 0 0 48 0 48 32 0 0 128-32 0 0 48 0 48-48 0-259.5 0zM208 400l40-128-88 0 0-24L336 112 296 240l88 0 0 24L208 400z" />
    </Icon>
);

export default BatteryBolt;
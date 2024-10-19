
import { Icon } from "../../index";

/**
 * A component that renders the `battery-empty` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-empty?s=sharp-light battery-empty}
 * @preview ![battery-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMTI4bDAgMjU2IDQ0OCAwIDAtMjU2TDMyIDEyOHpNMCA5NmwzMiAwIDQ0OCAwIDMyIDAgMCAzMiAwIDI1NiAwIDMyLTMyIDBMMzIgNDE2IDAgNDE2bDAtMzJMMCAxMjggMCA5NnptNTQ0IDk2bDMyIDAgMCAzMiAwIDY0IDAgMzItMzIgMCAwLTMyIDAtNjQgMC0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const BatteryEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 128l0 256 448 0 0-256L32 128zM0 96l32 0 448 0 32 0 0 32 0 256 0 32-32 0L32 416 0 416l0-32L0 128 0 96zm544 96l32 0 0 32 0 64 0 32-32 0 0-32 0-64 0-32z" />
    </Icon>
);

export default BatteryEmpty;
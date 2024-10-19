
import { Icon } from "../../index";

/**
 * A component that renders the `battery-bolt` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-bolt?s=sharp-solid battery-bolt}
 * @preview ![battery-bolt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgMzUybDEyNS41IDAtMjAgNjRMNjQgNDE2IDAgNDE2bDAtNjRMMCAxNjAgMCA5Nmw2NCAwIDI0My41IDAtODQuMyA2NEw2NCAxNjBsMCAxOTJ6bTE3Mi41IDY0bDg0LjMtNjRMNDgwIDM1MmwwLTE5Mi0xMjUuNSAwIDIwLTY0TDQ4MCA5Nmw2NCAwIDAgNjQgMCAzMiAzMiAwIDAgMTI4LTMyIDAgMCAzMiAwIDY0LTY0IDAtMjQzLjUgMHpNMjA4IDQwMGw0MC0xMjgtODggMCAwLTI0TDMzNiAxMTIgMjk2IDI0MGw4OCAwIDAgMjRMMjA4IDQwMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BatteryBolt: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 352l125.5 0-20 64L64 416 0 416l0-64L0 160 0 96l64 0 243.5 0-84.3 64L64 160l0 192zm172.5 64l84.3-64L480 352l0-192-125.5 0 20-64L480 96l64 0 0 64 0 32 32 0 0 128-32 0 0 32 0 64-64 0-243.5 0zM208 400l40-128-88 0 0-24L336 112 296 240l88 0 0 24L208 400z" />
    </Icon>
);

export default BatteryBolt;
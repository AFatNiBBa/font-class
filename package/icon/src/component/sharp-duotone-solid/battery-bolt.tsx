
import { Icon, generic } from "../../index";

/**
 * A component that renders the `battery-bolt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-bolt?s=sharp-duotone-solid battery-bolt}
 * @preview ![battery-bolt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2bDAgNjRMMCAzNTJsMCA2NCA2NCAwIDEwNS41IDAgMjAtNjRMNjQgMzUybDAtMTkyIDE1OS4yIDAgODQuMy02NEw2NCA5NiAwIDk2ek0yMzYuNSA0MTZMNDgwIDQxNmw2NCAwIDAtNjQgMC0zMiAzMiAwIDAtMTI4LTMyIDAgMC0zMiAwLTY0LTY0IDBMMzc0LjUgOTZsLTIwIDY0TDQ4MCAxNjBsMCAxOTItMTU5LjIgMC04NC4zIDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzg0IDI2NEwyMDggNDAwbDQwLTEyOEgxNjBWMjQ4TDMzNiAxMTIgMjk2IDI0MGg4OHYyNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BatteryBolt: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96l0 64L0 352l0 64 64 0 105.5 0 20-64L64 352l0-192 159.2 0 84.3-64L64 96 0 96zM236.5 416L480 416l64 0 0-64 0-32 32 0 0-128-32 0 0-32 0-64-64 0L374.5 96l-20 64L480 160l0 192-159.2 0-84.3 64z" />
            <path d="M384 264L208 400l40-128H160V248L336 112 296 240h88v24z" />
    </Icon>
);

export default BatteryBolt;
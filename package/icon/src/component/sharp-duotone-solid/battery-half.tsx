
import { Icon, generic } from "../../index";

/**
 * A component that renders the `battery-half` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-half?s=sharp-duotone-solid battery-half}
 * @preview ![battery-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2bDY0IDAgNDE2IDAgNjQgMCAwIDY0IDAgMzIgMzIgMCAwIDEyOC0zMiAwIDAgMzIgMCA2NC02NCAwTDY0IDQxNiAwIDQxNmwwLTY0TDAgMTYwIDAgOTZ6bTY0IDY0bDAgMTkyIDQxNiAwIDAtMTkyTDY0IDE2MHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk2IDE5MmgxOTJ2MTI4SDk2VjE5MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const BatteryHalf: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96l64 0 416 0 64 0 0 64 0 32 32 0 0 128-32 0 0 32 0 64-64 0L64 416 0 416l0-64L0 160 0 96zm64 64l0 192 416 0 0-192L64 160z" />
            <path d="M96 192h192v128H96V192z" />
    </Icon>
);

export default BatteryHalf;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `columns-3` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/columns-3?s=sharp-duotone-solid columns-3}
 * @preview ![columns-3](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTIgOTZsNjQgMCAwIDMyMC02NCAwIDAtMzIwem0xOTIgMGw2NCAwIDAgMzIwLTY0IDAgMC0zMjB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik02NDAgMzJMMCAzMiAwIDQ4MGw2NDAgMCAwLTQ0OHpNNTc2IDk2bDAgMzIwTDY0IDQxNiA2NCA5Nmw1MTIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Columns_3: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M192 96l64 0 0 320-64 0 0-320zm192 0l64 0 0 320-64 0 0-320z" />
            <path d="M640 32L0 32 0 480l640 0 0-448zM576 96l0 320L64 416 64 96l512 0z" />
    </Icon>
);

export default Columns_3;
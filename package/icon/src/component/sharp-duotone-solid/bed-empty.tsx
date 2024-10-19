
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bed-empty` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-empty?s=sharp-duotone-solid bed-empty}
 * @preview ![bed-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAyMjRsMzIgMCA1MTIgMCAzMiAwIDAgMzIgMCA2NC0zMiAwTDY0IDMyMGwwLTY0IDAtMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik02NCAzMmwwIDMyIDAgMjU2IDU0NCAwIDMyIDAgMCAzMiAwIDk2IDAgMzItNjQgMCAwLTMyIDAtMzJMNjQgNDE2bDAgMzIgMCAzMkwwIDQ4MGwwLTMyIDAtNjQgMC02NEwwIDY0IDAgMzJsNjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BedEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 224l32 0 512 0 32 0 0 32 0 64-32 0L64 320l0-64 0-32z" />
            <path d="M64 32l0 32 0 256 544 0 32 0 0 32 0 96 0 32-64 0 0-32 0-32L64 416l0 32 0 32L0 480l0-32 0-64 0-64L0 64 0 32l64 0z" />
    </Icon>
);

export default BedEmpty;
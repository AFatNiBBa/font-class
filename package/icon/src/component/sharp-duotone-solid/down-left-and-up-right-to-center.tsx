
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-left-and-up-right-to-center` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-left-and-up-right-to-center?s=sharp-duotone-solid down-left-and-up-right-to-center}
 * @preview ![down-left-and-up-right-to-center](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ1Nmw1NiA1NkwxNTYgNDEybDUyIDUyIDMyLTMyIDAtMTYwTDgwIDI3MiA0OCAzMDRsNTIgNTJMMCA0NTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMDQgNDhMMjcyIDgwbDAgMTYwIDE2MCAwIDMyLTMyLTUyLTUyTDUxMiA1NiA0NTYgMCAzNTYgMTAwIDMwNCA0OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const DownLeftAndUpRightToCenter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 456l56 56L156 412l52 52 32-32 0-160L80 272 48 304l52 52L0 456z" />
            <path d="M304 48L272 80l0 160 160 0 32-32-52-52L512 56 456 0 356 100 304 48z" />
    </Icon>
);

export default DownLeftAndUpRightToCenter;
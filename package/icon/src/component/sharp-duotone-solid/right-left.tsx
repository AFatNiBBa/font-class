
import { Icon, generic } from "../../index";

/**
 * A component that renders the `right-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-left?s=sharp-duotone-solid right-left}
 * @preview ![right-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM4NEwxMjggMjU2bDMyIDAgMCA5NiAzMjAgMCAzMiAwIDAgNjQtMzIgMC0zMjAgMCAwIDk2LTMyIDBMMCAzODR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik01MTIgMTI4TDM4NCAwIDM1MiAwbDAgOTZMMzIgOTYgMCA5NmwwIDY0IDMyIDAgMzIwIDAgMCA5NiAzMiAwTDUxMiAxMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const RightLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 384L128 256l32 0 0 96 320 0 32 0 0 64-32 0-320 0 0 96-32 0L0 384z" />
            <path d="M512 128L384 0 352 0l0 96L32 96 0 96l0 64 32 0 320 0 0 96 32 0L512 128z" />
    </Icon>
);

export default RightLeft;
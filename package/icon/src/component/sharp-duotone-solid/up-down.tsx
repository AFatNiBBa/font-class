
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-down?s=sharp-duotone-solid up-down}
 * @preview ![up-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM1MmwwIDMyTDEyOCA1MTIgMjU2IDM4NGwwLTMyLTgwIDAgMC05Ni05NiAwIDAgOTZMMCAzNTJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMjggMEwwIDEyOGwwIDMyIDgwIDAgMCA5NiA5NiAwIDAtOTYgODAgMCAwLTMyTDEyOCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UpDown: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M0 352l0 32L128 512 256 384l0-32-80 0 0-96-96 0 0 96L0 352z" />
            <path d="M128 0L0 128l0 32 80 0 0 96 96 0 0-96 80 0 0-32L128 0z" />
    </Icon>
);

export default UpDown;
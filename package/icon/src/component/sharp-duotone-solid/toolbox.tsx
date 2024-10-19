
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toolbox` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toolbox?s=sharp-duotone-solid toolbox}
 * @preview ![toolbox](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMGwxMjggMCAwIDMyIDAgMzIgNjQgMCAwLTMyIDAtMzIgMTI4IDAgMCAzMiAwIDMyIDY0IDAgMC0zMiAwLTMyIDEyOCAwIDAgMTYwTDAgNDgwIDAgMzIwek0xMjggMzJsMjQgMCAyMDggMCAyNCAwIDAgMjQgMCA3Mi00OCAwIDAtNDhMMTc2IDgwbDAgNDgtNDggMCAwLTcyIDAtMjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDMyMEwwIDIwOGw4MC04MCAzNTIgMCA4MCA4MCAwIDExMi0xMjggMCAwLTMyIDAtMzItNjQgMCAwIDMyIDAgMzItMTI4IDAgMC0zMiAwLTMyLTY0IDAgMCAzMiAwIDMyTDAgMzIweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Toolbox: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 320l128 0 0 32 0 32 64 0 0-32 0-32 128 0 0 32 0 32 64 0 0-32 0-32 128 0 0 160L0 480 0 320zM128 32l24 0 208 0 24 0 0 24 0 72-48 0 0-48L176 80l0 48-48 0 0-72 0-24z" />
            <path d="M0 320L0 208l80-80 352 0 80 80 0 112-128 0 0-32 0-32-64 0 0 32 0 32-128 0 0-32 0-32-64 0 0 32 0 32L0 320z" />
    </Icon>
);

export default Toolbox;
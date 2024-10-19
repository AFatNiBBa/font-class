
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turn-down-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down-left?s=sharp-duotone-solid turn-down-left}
 * @preview ![turn-down-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTIgMjQwbDAgOTYgMjcyIDAgNDggMCAwLTQ4IDAtMjA4IDAtNDgtOTYgMCAwIDQ4IDAgMTYwLTIyNCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTYwIDQ0OEwwIDI4OCAxNjAgMTI4bDMyIDAgMCAzMjAtMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const TurnDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 240l0 96 272 0 48 0 0-48 0-208 0-48-96 0 0 48 0 160-224 0z" />
            <path d="M160 448L0 288 160 128l32 0 0 320-32 0z" />
    </Icon>
);

export default TurnDownLeft;
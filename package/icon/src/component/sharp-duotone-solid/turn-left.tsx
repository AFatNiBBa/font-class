
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turn-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-left?s=sharp-duotone-solid turn-left}
 * @preview ![turn-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTIgMTc2bDAgOTYgMjI0IDAgMCAyMDggOTYgMCAwLTMwNC0zMjAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE2MCA2NEwwIDIyNCAxNjAgMzg0bDMyIDAgMC0zMjAtMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const TurnLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 176l0 96 224 0 0 208 96 0 0-304-320 0z" />
            <path d="M160 64L0 224 160 384l32 0 0-320-32 0z" />
    </Icon>
);

export default TurnLeft;
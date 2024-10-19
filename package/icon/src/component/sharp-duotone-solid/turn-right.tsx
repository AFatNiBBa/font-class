
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turn-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-right?s=sharp-duotone-solid turn-right}
 * @preview ![turn-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE3NmwzMjAgMCAwIDk2TDk2IDI3MmwwIDIwOEwwIDQ4MCAwIDE3NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM1MiA2NEw1MTIgMjI0IDM1MiAzODRsLTMyIDAgMC0zMjAgMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const TurnRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 176l320 0 0 96L96 272l0 208L0 480 0 176z" />
            <path d="M352 64L512 224 352 384l-32 0 0-320 32 0z" />
    </Icon>
);

export default TurnRight;
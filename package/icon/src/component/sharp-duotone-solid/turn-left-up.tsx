
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turn-left-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-left-up?s=sharp-duotone-solid turn-left-up}
 * @preview ![turn-left-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNDQgMTkybDAgMzIwIDI0MCAwIDAtOTYtMTQ0IDAgMC0yMjQtOTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyIDE2MEwxOTIgMCAzNTIgMTYwbDAgMzJMMzIgMTkybDAtMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const TurnLeftUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M144 192l0 320 240 0 0-96-144 0 0-224-96 0z" />
            <path d="M32 160L192 0 352 160l0 32L32 192l0-32z" />
    </Icon>
);

export default TurnLeftUp;
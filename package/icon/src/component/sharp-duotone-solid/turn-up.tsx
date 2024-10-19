
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turn-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-up?s=sharp-duotone-solid turn-up}
 * @preview ![turn-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQxNmwwIDk2IDQ4IDAgMTQ0IDAgNDggMCAwLTQ4IDAtMjcyLTk2IDAgMCAyMjQtOTYgMEwwIDQxNnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM1MiAxNjBMMTkyIDAgMzIgMTYwbDAgMzIgMzIwIDAgMC0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const TurnUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 416l0 96 48 0 144 0 48 0 0-48 0-272-96 0 0 224-96 0L0 416z" />
            <path d="M352 160L192 0 32 160l0 32 320 0 0-32z" />
    </Icon>
);

export default TurnUp;
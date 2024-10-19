
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vent-damper` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vent-damper?s=sharp-duotone-solid vent-damper}
 * @preview ![vent-damper](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MGw2NCAwIDAgMTkyTDAgMzUyIDAgMTYwem01NzYgMGw2NCAwIDAgMTkyLTY0IDAgMC0xOTJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik01NzYgNjRMNjQgNjRsMCAzODQgNTEyIDAgMC0zODR6TTE4NCAxNDRsMjcyIDAgMjQgMCAwIDQ4LTI0IDAtMjcyIDAtMjQgMCAwLTQ4IDI0IDB6bTAgODhsMjcyIDAgMjQgMCAwIDQ4LTI0IDAtMjcyIDAtMjQgMCAwLTQ4IDI0IDB6bTAgODhsMjcyIDAgMjQgMCAwIDQ4LTI0IDAtMjcyIDAtMjQgMCAwLTQ4IDI0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const VentDamper: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 160l64 0 0 192L0 352 0 160zm576 0l64 0 0 192-64 0 0-192z" />
            <path d="M576 64L64 64l0 384 512 0 0-384zM184 144l272 0 24 0 0 48-24 0-272 0-24 0 0-48 24 0zm0 88l272 0 24 0 0 48-24 0-272 0-24 0 0-48 24 0zm0 88l272 0 24 0 0 48-24 0-272 0-24 0 0-48 24 0z" />
    </Icon>
);

export default VentDamper;
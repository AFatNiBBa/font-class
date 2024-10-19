
import { Icon, generic } from "../../index";

/**
 * A component that renders the `light-switch-off` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch-off?s=duotone light-switch-off}
 * @preview ![light-switch-off](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAyNTZsMCA5NmMwIDM1LjMgMjguNyA2NCA2NCA2NGw2NCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtOTZMOTYgMjU2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCA0NDhjMCAzNS4zIDI4LjcgNjQgNjQgNjRsMjU2IDBjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC0zODRjMC0zNS4zLTI4LjctNjQtNjQtNjRMNjQgMEMyOC43IDAgMCAyOC43IDAgNjRMMCA0NDh6bTk2LTk2bDAtMTkyYzAtMzUuMyAyOC43LTY0IDY0LTY0bDY0IDBjMzUuMyAwIDY0IDI4LjcgNjQgNjRsMCAxOTJjMCAzNS4zLTI4LjcgNjQtNjQgNjRsLTY0IDBjLTM1LjMgMC02NC0yOC43LTY0LTY0em04MCAxMTJhMTYgMTYgMCAxIDEgMzIgMCAxNiAxNiAwIDEgMSAtMzIgMHptMC00MTZhMTYgMTYgMCAxIDEgMzIgMCAxNiAxNiAwIDEgMSAtMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const LightSwitchOff: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M96 256l0 96c0 35.3 28.7 64 64 64l64 0c35.3 0 64-28.7 64-64l0-96L96 256z" />
            <path d="M0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 448zm96-96l0-192c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64zm80 112a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm0-416a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default LightSwitchOff;
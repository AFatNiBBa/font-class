
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-exclamation?s=sharp-duotone-solid location-exclamation}
 * @preview ![location-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MkMwIDMwNCAxOTIgNTEyIDE5MiA1MTJzMTkyLTIwOCAxOTItMzIwQzM4NCA4NiAyOTggMCAxOTIgMFMwIDg2IDAgMTkyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjE2IDEyMGwwLTI0LTQ4IDAgMCAyNCAwIDExMiAwIDI0IDQ4IDAgMC0yNCAwLTExMnptMCAxNjhsLTQ4IDAgMCA0OCA0OCAwIDAtNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const LocationExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 192C0 304 192 512 192 512s192-208 192-320C384 86 298 0 192 0S0 86 0 192z" />
            <path d="M216 120l0-24-48 0 0 24 0 112 0 24 48 0 0-24 0-112zm0 168l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default LocationExclamation;
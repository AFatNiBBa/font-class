
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lamp-floor` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lamp-floor?s=sharp-duotone-solid lamp-floor}
 * @preview ![lamp-floor](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMjI0bDAgMjI0IDMyIDAgMzIgMCAwLTIyNC02NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAyMjRMNjQgMCAzMjAgMGw2NCAyMjRMMCAyMjR6TTk2IDQ0OGw5NiAwIDk2IDAgMzIgMCAwIDY0LTMyIDAtOTYgMC05NiAwLTMyIDAgMC02NCAzMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const LampFloor: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M160 224l0 224 32 0 32 0 0-224-64 0z" />
            <path d="M0 224L64 0 320 0l64 224L0 224zM96 448l96 0 96 0 32 0 0 64-32 0-96 0-96 0-32 0 0-64 32 0z" />
    </Icon>
);

export default LampFloor;
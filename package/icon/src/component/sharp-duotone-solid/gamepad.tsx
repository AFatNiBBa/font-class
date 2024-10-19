
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gamepad` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gamepad?s=sharp-duotone-solid gamepad}
 * @preview ![gamepad](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDAgNDQ4bDY0MCAwIDAtMzg0TDAgNjR6TTExMiAyMzJsNTYgMCAwLTU2IDQ4IDAgMCA1NiA1NiAwIDAgNDgtNTYgMCAwIDU2LTQ4IDAgMC01Ni01NiAwIDAtNDh6bTM2MCA3MmE0MCA0MCAwIDEgMSAtODAgMCA0MCA0MCAwIDEgMSA4MCAwem02NC05NmE0MCA0MCAwIDEgMSAtODAgMCA0MCA0MCAwIDEgMSA4MCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjE2IDE3NmwtNDggMCAwIDU2LTU2IDAgMCA0OCA1NiAwIDAgNTYgNDggMCAwLTU2IDU2IDAgMC00OC01NiAwIDAtNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Gamepad: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448l640 0 0-384L0 64zM112 232l56 0 0-56 48 0 0 56 56 0 0 48-56 0 0 56-48 0 0-56-56 0 0-48zm360 72a40 40 0 1 1 -80 0 40 40 0 1 1 80 0zm64-96a40 40 0 1 1 -80 0 40 40 0 1 1 80 0z" />
            <path d="M216 176l-48 0 0 56-56 0 0 48 56 0 0 56 48 0 0-56 56 0 0-48-56 0 0-56z" />
    </Icon>
);

export default Gamepad;
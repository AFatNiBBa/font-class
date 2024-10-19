
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sidebar` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sidebar?s=sharp-duotone-solid sidebar}
 * @preview ![sidebar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgMzJsMCA0NDggMjg4IDAgMC00NDhMMjI0IDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjI0IDMyTDAgMzIgMCA0ODBsMjI0IDAgMC00NDh6TTE2MCA5NmwwIDQ4LTk2IDAgMC00OCA5NiAwek02NCAxOTJsOTYgMCAwIDQ4LTk2IDAgMC00OHptOTYgOTZsMCA0OC05NiAwIDAtNDggOTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Sidebar: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 32l0 448 288 0 0-448L224 32z" />
            <path d="M224 32L0 32 0 480l224 0 0-448zM160 96l0 48-96 0 0-48 96 0zM64 192l96 0 0 48-96 0 0-48zm96 96l0 48-96 0 0-48 96 0z" />
    </Icon>
);

export default Sidebar;
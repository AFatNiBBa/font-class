
import { Icon, generic } from "../../index";

/**
 * A component that renders the `font` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/font?s=sharp-duotone-solid font}
 * @preview ![font](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTQgNTIuOEwyMDEuOCAzMmw0NC40IDBMMjU0IDUyLjggMzkwLjIgNDE2bDI1LjggMCAzMiAwIDAgNjQtMzIgMC05NiAwLTMyIDAgMC02NCAzMiAwIDEuOCAwLTE4LTQ4LTE1OS42IDAtMTggNDggMS44IDAgMzIgMCAwIDY0LTMyIDAtOTYgMEwwIDQ4MGwwLTY0IDMyIDAgMjUuOCAwTDE5NCA1Mi44ek0xNjguMiAzMDRsMTExLjYgMEwyMjQgMTU1LjEgMTY4LjIgMzA0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const Font: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M194 52.8L201.8 32l44.4 0L254 52.8 390.2 416l25.8 0 32 0 0 64-32 0-96 0-32 0 0-64 32 0 1.8 0-18-48-159.6 0-18 48 1.8 0 32 0 0 64-32 0-96 0L0 480l0-64 32 0 25.8 0L194 52.8zM168.2 304l111.6 0L224 155.1 168.2 304z" />
    </Icon>
);

export default Font;
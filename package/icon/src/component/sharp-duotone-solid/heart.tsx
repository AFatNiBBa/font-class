
import { Icon, generic } from "../../index";

/**
 * A component that renders the `heart` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart?s=sharp-duotone-solid heart}
 * @preview ![heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAyODhMMzkuOCAyNjMuOEMxNC4zIDIzOC4zIDAgMjAzLjggMCAxNjcuOEMwIDkyLjggNjAuOCAzMiAxMzUuOCAzMmMzNiAwIDcwLjUgMTQuMyA5NiAzOS44TDI1NiA5NmwyNC4yLTI0LjJjMjUuNS0yNS41IDYwLTM5LjggOTYtMzkuOEM0NTEuMiAzMiA1MTIgOTIuOCA1MTIgMTY3LjhjMCAzNi0xNC4zIDcwLjUtMzkuOCA5Nkw0NDggMjg4IDI1NiA0ODAgNjQgMjg4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const Heart: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 288L39.8 263.8C14.3 238.3 0 203.8 0 167.8C0 92.8 60.8 32 135.8 32c36 0 70.5 14.3 96 39.8L256 96l24.2-24.2c25.5-25.5 60-39.8 96-39.8C451.2 32 512 92.8 512 167.8c0 36-14.3 70.5-39.8 96L448 288 256 480 64 288z" />
    </Icon>
);

export default Heart;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `unlock-keyhole` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/unlock-keyhole?s=sharp-duotone-solid unlock-keyhole}
 * @preview ![unlock-keyhole](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik04MCAxNDRsMCA0OCA2NCAwIDAtNDhjMC00NC4yIDM1LjgtODAgODAtODBjMzEuOSAwIDU5LjQgMTguNiA3Mi4zIDQ1LjdsNTcuOC0yNy41QzMzMSAzMy43IDI4MS41IDAgMjI0IDBDMTQ0LjUgMCA4MCA2NC41IDgwIDE0NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ0OCAxOTJMMCAxOTIgMCA1MTJsNDQ4IDAgMC0zMjB6TTI1NiAzODRsLTY0IDAtMzIgMCAwLTY0IDMyIDAgNjQgMCAzMiAwIDAgNjQtMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const UnlockKeyhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M80 144l0 48 64 0 0-48c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7l57.8-27.5C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144z" />
            <path d="M448 192L0 192 0 512l448 0 0-320zM256 384l-64 0-32 0 0-64 32 0 64 0 32 0 0 64-32 0z" />
    </Icon>
);

export default UnlockKeyhole;
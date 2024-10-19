
import { Icon, generic } from "../../index";

/**
 * A component that renders the `unlock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/unlock?s=sharp-duotone-solid unlock}
 * @preview ![unlock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik04MCAxNDRsMCA0OCA2NCAwIDAtNDhjMC00NC4yIDM1LjgtODAgODAtODBjMzEuOSAwIDU5LjQgMTguNiA3Mi4zIDQ1LjdsNTcuOC0yNy41QzMzMSAzMy43IDI4MS41IDAgMjI0IDBDMTQ0LjUgMCA4MCA2NC41IDgwIDE0NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMTkySDQ0OFY1MTJIMFYxOTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Unlock: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M80 144l0 48 64 0 0-48c0-44.2 35.8-80 80-80c31.9 0 59.4 18.6 72.3 45.7l57.8-27.5C331 33.7 281.5 0 224 0C144.5 0 80 64.5 80 144z" />
            <path d="M0 192H448V512H0V192z" />
    </Icon>
);

export default Unlock;
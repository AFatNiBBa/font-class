
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-biking` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-biking?s=sharp-duotone-solid person-biking}
 * @preview ![person-biking](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM4NGExMjggMTI4IDAgMSAwIDI1NiAwQTEyOCAxMjggMCAxIDAgMCAzODR6bTIwMCAwQTcyIDcyIDAgMSAxIDU2IDM4NGE3MiA3MiAwIDEgMSAxNDQgMHptMTg0IDBhMTI4IDEyOCAwIDEgMCAyNTYgMCAxMjggMTI4IDAgMSAwIC0yNTYgMHptMjAwIDBhNzIgNzIgMCAxIDEgLTE0NCAwIDcyIDcyIDAgMSAxIDE0NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDAwIDBhNDggNDggMCAxIDEgMCA5NiA0OCA0OCAwIDEgMSAwLTk2ek0zMzYgODhsOTEuMiA3MiA4NC44IDAgMCA2NC0xMDcuMiAwLTQ5LjUtMzkuNkwyOTUgMjMyLjlsNTcgMzhMMzUyIDQ0OGwtNjQgMCAwLTE0Mi45LTYwLjUtMzguNGMtMzIuOC0yMC44LTM1LTY3LjktNC4zLTkxLjZMMzM2IDg4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PersonBiking: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 384a128 128 0 1 0 256 0A128 128 0 1 0 0 384zm200 0A72 72 0 1 1 56 384a72 72 0 1 1 144 0zm184 0a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm200 0a72 72 0 1 1 -144 0 72 72 0 1 1 144 0z" />
            <path d="M400 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM336 88l91.2 72 84.8 0 0 64-107.2 0-49.5-39.6L295 232.9l57 38L352 448l-64 0 0-142.9-60.5-38.4c-32.8-20.8-35-67.9-4.3-91.6L336 88z" />
    </Icon>
);

export default PersonBiking;
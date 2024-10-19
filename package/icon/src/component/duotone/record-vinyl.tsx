
import { Icon, generic } from "../../index";

/**
 * A component that renders the `record-vinyl` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/record-vinyl?s=duotone record-vinyl}
 * @preview ![record-vinyl](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMjU2YTEyOCAxMjggMCAxIDAgMjU2IDAgMTI4IDEyOCAwIDEgMCAtMjU2IDB6bTE2MCAwYTMyIDMyIDAgMSAxIC02NCAwIDMyIDMyIDAgMSAxIDY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTYgNTEyQTI1NiAyNTYgMCAxIDAgMjU2IDBhMjU2IDI1NiAwIDEgMCAwIDUxMnptMC0zODRhMTI4IDEyOCAwIDEgMSAwIDI1NiAxMjggMTI4IDAgMSAxIDAtMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const RecordVinyl: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm160 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
    </Icon>
);

export default RecordVinyl;
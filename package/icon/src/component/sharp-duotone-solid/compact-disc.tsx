
import { Icon, generic } from "../../index";

/**
 * A component that renders the `compact-disc` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compact-disc?s=sharp-duotone-solid compact-disc}
 * @preview ![compact-disc](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTY0IDBDNjQgMTUwIDE1MCA2NCAyNTYgNjRsMCAzMkMxNjcuNiA5NiA5NiAxNjcuNiA5NiAyNTZsLTMyIDB6bTI4OCAwYTk2IDk2IDAgMSAxIC0xOTIgMCA5NiA5NiAwIDEgMSAxOTIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiAyMjRhMzIgMzIgMCAxIDAgMCA2NCAzMiAzMiAwIDEgMCAwLTY0em05NiAzMmE5NiA5NiAwIDEgMSAtMTkyIDAgOTYgOTYgMCAxIDEgMTkyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const CompactDisc: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm64 0C64 150 150 64 256 64l0 32C167.6 96 96 167.6 96 256l-32 0zm288 0a96 96 0 1 1 -192 0 96 96 0 1 1 192 0z" />
            <path d="M256 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm96 32a96 96 0 1 1 -192 0 96 96 0 1 1 192 0z" />
    </Icon>
);

export default CompactDisc;
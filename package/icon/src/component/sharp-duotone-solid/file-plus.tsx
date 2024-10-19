
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-plus?s=sharp-duotone-solid file-plus}
 * @preview ![file-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMjI0IDBsMCAxNjAgMTYwIDAgMCAzNTJMMCA1MTIgMCAwek05NiAzMTJsMCA0OCAyNCAwIDQ4IDAgMCA0OCAwIDI0IDQ4IDAgMC0yNCAwLTQ4IDQ4IDAgMjQgMCAwLTQ4LTI0IDAtNDggMCAwLTQ4IDAtMjQtNDggMCAwIDI0IDAgNDgtNDggMC0yNCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzg0IDE2MGwtMTYwIDBMMjI0IDAgMzg0IDE2MHpNMjE2IDI0MGwwIDI0IDAgNDggNDggMCAyNCAwIDAgNDgtMjQgMC00OCAwIDAgNDggMCAyNC00OCAwIDAtMjQgMC00OC00OCAwLTI0IDAgMC00OCAyNCAwIDQ4IDAgMC00OCAwLTI0IDQ4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const FilePlus: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM96 312l0 48 24 0 48 0 0 48 0 24 48 0 0-24 0-48 48 0 24 0 0-48-24 0-48 0 0-48 0-24-48 0 0 24 0 48-48 0-24 0z" />
            <path d="M384 160l-160 0L224 0 384 160zM216 240l0 24 0 48 48 0 24 0 0 48-24 0-48 0 0 48 0 24-48 0 0-24 0-48-48 0-24 0 0-48 24 0 48 0 0-48 0-24 48 0z" />
    </Icon>
);

export default FilePlus;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-user` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-user?s=sharp-duotone-solid file-user}
 * @preview ![file-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMjI0IDBsMCAxNjAgMTYwIDAgMCAzNTJMMCA1MTIgMCAwek04MCA0NDhsMjI0IDAtMzItOTYtMTYwIDBMODAgNDQ4em00OC0xOTJhNjQgNjQgMCAxIDAgMTI4IDAgNjQgNjQgMCAxIDAgLTEyOCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzg0IDE2MEwyMjQgMGwwIDE2MCAxNjAgMHpNMjU2IDI1NmE2NCA2NCAwIDEgMCAtMTI4IDAgNjQgNjQgMCAxIDAgMTI4IDB6bTE2IDk2bC0xNjAgMEw4MCA0NDhsMjI0IDAtMzItOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const FileUser: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM80 448l224 0-32-96-160 0L80 448zm48-192a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
            <path d="M384 160L224 0l0 160 160 0zM256 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm16 96l-160 0L80 448l224 0-32-96z" />
    </Icon>
);

export default FileUser;
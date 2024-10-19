
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-vector` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-vector?s=sharp-duotone-solid file-vector}
 * @preview ![file-vector](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMjI0IDBsMCAxNjAgMTYwIDAgMCAzNTJMMCA1MTIgMCAwek02NCAxOTJsMCA2NCAzMiAwIDAgMTI4LTMyIDAgMCA2NCA2NCAwIDAtMzIgMTI4IDAgMCAzMiA2NCAwIDAtNjQtMzIgMCAwLTEyOCAzMiAwIDAtNjQtNjQgMCAwIDMyLTEyOCAwIDAtMzItNjQgMHptNjQgNjRsMTI4IDAgMCAxMjgtMTI4IDAgMC0xMjh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zODQgMTYwbC0xNjAgMEwyMjQgMCAzODQgMTYwek0xMjggMTkybDAgMzIgMTI4IDAgMC0zMiA2NCAwIDAgNjQtMzIgMCAwIDEyOCAzMiAwIDAgNjQtNjQgMCAwLTMyLTEyOCAwIDAgMzItNjQgMCAwLTY0IDMyIDAgMC0xMjgtMzIgMCAwLTY0IDY0IDB6TTI1NiAzODRsMC0xMjgtMTI4IDAgMCAxMjggMTI4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const FileVector: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM64 192l0 64 32 0 0 128-32 0 0 64 64 0 0-32 128 0 0 32 64 0 0-64-32 0 0-128 32 0 0-64-64 0 0 32-128 0 0-32-64 0zm64 64l128 0 0 128-128 0 0-128z" />
            <path d="M384 160l-160 0L224 0 384 160zM128 192l0 32 128 0 0-32 64 0 0 64-32 0 0 128 32 0 0 64-64 0 0-32-128 0 0 32-64 0 0-64 32 0 0-128-32 0 0-64 64 0zM256 384l0-128-128 0 0 128 128 0z" />
    </Icon>
);

export default FileVector;
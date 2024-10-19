
import { Icon, generic } from "../../index";

/**
 * A component that renders the `barcode` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/barcode?s=sharp-duotone-solid barcode}
 * @preview ![barcode](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDY0IDBMNjQgMzIgMCAzMnptMTYwIDBsMCA0NDggNjQgMCAwLTQ0OC02NCAwem0yODggMGwwIDQ0OCA2NCAwIDAtNDQ4LTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05NiAzMmwzMiAwIDAgNDQ4LTMyIDBMOTYgMzJ6bTE2MCAwbDY0IDAgMCA0NDgtNjQgMCAwLTQ0OHptMTYwIDBsMCA0NDgtMzIgMCAwLTQ0OCAzMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Barcode: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 480l64 0L64 32 0 32zm160 0l0 448 64 0 0-448-64 0zm288 0l0 448 64 0 0-448-64 0z" />
            <path d="M96 32l32 0 0 448-32 0L96 32zm160 0l64 0 0 448-64 0 0-448zm160 0l0 448-32 0 0-448 32 0z" />
    </Icon>
);

export default Barcode;
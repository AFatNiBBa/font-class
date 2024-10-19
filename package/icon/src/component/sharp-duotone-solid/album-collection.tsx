
import { Icon, generic } from "../../index";

/**
 * A component that renders the `album-collection` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/album-collection?s=sharp-duotone-solid album-collection}
 * @preview ![album-collection](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MEw0MCA1MTJsNDMyIDAgNDAtMzUyTDAgMTYwek03MiAzNDRjMC03NS4xIDgyLjQtMTM2IDE4NC0xMzZzMTg0IDYwLjkgMTg0IDEzNnMtODIuNCAxMzYtMTg0IDEzNlM3MiA0MTkuMSA3MiAzNDR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMiAwTDU2IDAgNDU2IDBsMjQgMCAwIDQ4LTI0IDBMNTYgNDggMzIgNDggMzIgMHpNMTYgODBsMjQgMCA0MzIgMCAyNCAwIDAgNDgtMjQgMEw0MCAxMjhsLTI0IDAgMC00OHpNNDQwIDM0NGMwIDc1LjEtODIuNCAxMzYtMTg0IDEzNlM3MiA0MTkuMSA3MiAzNDRzODIuNC0xMzYgMTg0LTEzNnMxODQgNjAuOSAxODQgMTM2em0tMTUyIDhjMC0xMy4zLTE0LjMtMjQtMzItMjRzLTMyIDEwLjctMzIgMjRzMTQuMyAyNCAzMiAyNHMzMi0xMC43IDMyLTI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const AlbumCollection: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160L40 512l432 0 40-352L0 160zM72 344c0-75.1 82.4-136 184-136s184 60.9 184 136s-82.4 136-184 136S72 419.1 72 344z" />
            <path d="M32 0L56 0 456 0l24 0 0 48-24 0L56 48 32 48 32 0zM16 80l24 0 432 0 24 0 0 48-24 0L40 128l-24 0 0-48zM440 344c0 75.1-82.4 136-184 136S72 419.1 72 344s82.4-136 184-136s184 60.9 184 136zm-152 8c0-13.3-14.3-24-32-24s-32 10.7-32 24s14.3 24 32 24s32-10.7 32-24z" />
    </Icon>
);

export default AlbumCollection;
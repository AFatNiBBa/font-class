
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chevrons-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-right?s=duotone chevrons-right}
 * @preview ![chevrons-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA0NDhjMCA4LjIgMy4xIDE2LjQgOS40IDIyLjZjMTIuNSAxMi41IDMyLjggMTIuNSA0NS4zIDBsMTkyLTE5MmMxMi41LTEyLjUgMTIuNS0zMi44IDAtNDUuM2wtMTkyLTE5MkM4MC40IDM1LjEgNzIuMiAzMiA2NCAzMnMtMTYuNCAzLjEtMjIuNiA5LjRjLTEyLjUgMTIuNS0xMi41IDMyLjggMCA0NS4zTDIxMC43IDI1NiA0MS40IDQyNS40QzM1LjEgNDMxLjYgMzIgNDM5LjggMzIgNDQ4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDcwLjYgMjMzLjRjMTIuNSAxMi41IDEyLjUgMzIuOCAwIDQ1LjNsLTE5MiAxOTJjLTEyLjUgMTIuNS0zMi44IDEyLjUtNDUuMyAwcy0xMi41LTMyLjggMC00NS4zTDQwMi43IDI1NiAyMzMuNCA4Ni42Yy0xMi41LTEyLjUtMTIuNS0zMi44IDAtNDUuM3MzMi44LTEyLjUgNDUuMyAwbDE5MiAxOTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const ChevronsRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 448c0 8.2 3.1 16.4 9.4 22.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3l-192-192C80.4 35.1 72.2 32 64 32s-16.4 3.1-22.6 9.4c-12.5 12.5-12.5 32.8 0 45.3L210.7 256 41.4 425.4C35.1 431.6 32 439.8 32 448z" />
            <path d="M470.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L402.7 256 233.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
    </Icon>
);

export default ChevronsRight;
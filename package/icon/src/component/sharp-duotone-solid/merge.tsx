
import { Icon, generic } from "../../index";

/**
 * A component that renders the `merge` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/merge?s=sharp-duotone-solid merge}
 * @preview ![merge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM4NGwwIDY0IDMyIDAgMTI4IDAgMTUuNCAwIDkuNi0xMkwzMDMuNCAyODggMjg4IDI4OGwtMTUuNCAwTDI2MyAyNzZjLTUuMy02LjctMTAuNy0xMy4zLTE2LTIwTDE0NC42IDM4NCAzMiAzODQgMCAzODR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNjAgNjRsMTUuNCAwTDE4NSA3NiAzMDMuNCAyMjRsODAuNiAwIDAtNjQgMzIgMCA5NiA5Ni05NiA5Ni0zMiAwIDAtNjQtOTYgMC0xNS40IDBMMjYzIDI3NiAxNDQuNiAxMjggMzIgMTI4IDAgMTI4IDAgNjRsMzIgMCAxMjggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Merge: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 384l0 64 32 0 128 0 15.4 0 9.6-12L303.4 288 288 288l-15.4 0L263 276c-5.3-6.7-10.7-13.3-16-20L144.6 384 32 384 0 384z" />
            <path d="M160 64l15.4 0L185 76 303.4 224l80.6 0 0-64 32 0 96 96-96 96-32 0 0-64-96 0-15.4 0L263 276 144.6 128 32 128 0 128 0 64l32 0 128 0z" />
    </Icon>
);

export default Merge;
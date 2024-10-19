
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-to-arc` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-arc?s=duotone arrow-down-to-arc}
 * @preview ![arrow-down-to-arc](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkMwIDM5Ny40IDExNC42IDUxMiAyNTYgNTEyczI1Ni0xMTQuNiAyNTYtMjU2YzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMyYzAgMTA2LTg2IDE5Mi0xOTIgMTkyUzY0IDM2MiA2NCAyNTZjMC0xNy43LTE0LjMtMzItMzItMzJzLTMyIDE0LjMtMzIgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zOTAuNiAxODUuNGMxMi41IDEyLjUgMTIuNSAzMi44IDAgNDUuM2wtMTEyIDExMmMtMTIuNSAxMi41LTMyLjggMTIuNS00NS4zIDBsLTExMi0xMTJjLTEyLjUtMTIuNS0xMi41LTMyLjggMC00NS4zczMyLjgtMTIuNSA0NS4zIDBMMjI0IDI0Mi43IDIyNCAzMmMwLTE3LjcgMTQuMy0zMiAzMi0zMnMzMiAxNC4zIDMyIDMybDAgMjEwLjcgNTcuNC01Ny40YzEyLjUtMTIuNSAzMi44LTEyLjUgNDUuMyAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ArrowDownToArc: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 106-86 192-192 192S64 362 64 256c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
            <path d="M390.6 185.4c12.5 12.5 12.5 32.8 0 45.3l-112 112c-12.5 12.5-32.8 12.5-45.3 0l-112-112c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 242.7 224 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 210.7 57.4-57.4c12.5-12.5 32.8-12.5 45.3 0z" />
    </Icon>
);

export default ArrowDownToArc;
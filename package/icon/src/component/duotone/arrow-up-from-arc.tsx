
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-from-arc` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-from-arc?s=duotone arrow-up-from-arc}
 * @preview ![arrow-up-from-arc](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkMwIDM5Ny40IDExNC42IDUxMiAyNTYgNTEyczI1Ni0xMTQuNiAyNTYtMjU2YzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMyYzAgMTA2LTg2IDE5Mi0xOTIgMTkyUzY0IDM2MiA2NCAyNTZjMC0xNy43LTE0LjMtMzItMzItMzJzLTMyIDE0LjMtMzIgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMjEuNCAxNjYuNmMtMTIuNS0xMi41LTEyLjUtMzIuOCAwLTQ1LjNsMTEyLTExMmMxMi41LTEyLjUgMzIuOC0xMi41IDQ1LjMgMGwxMTIgMTEyYzEyLjUgMTIuNSAxMi41IDMyLjggMCA0NS4zcy0zMi44IDEyLjUtNDUuMyAwTDI4OCAxMDkuMyAyODggMzIwYzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMybDAtMjEwLjctNTcuNCA1Ny40Yy0xMi41IDEyLjUtMzIuOCAxMi41LTQ1LjMgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ArrowUpFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 106-86 192-192 192S64 362 64 256c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
            <path d="M121.4 166.6c-12.5-12.5-12.5-32.8 0-45.3l112-112c12.5-12.5 32.8-12.5 45.3 0l112 112c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3 288 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-210.7-57.4 57.4c-12.5 12.5-32.8 12.5-45.3 0z" />
    </Icon>
);

export default ArrowUpFromArc;
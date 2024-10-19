
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scythe` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scythe?s=sharp-duotone-solid scythe}
 * @preview ![scythe](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5Mmw1MzIuMyAwTDU3My40IDAgMzUyIDBDODAgMCAwIDE5MiAwIDE5MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTYzNy40IDBsLTY0IDBMNTExLjcgMjg4IDQxNiAyODhsLTMyIDAgMCA2NCAzMiAwIDgyIDBMNDYzLjcgNTEybDY0IDBMNjM3LjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Scythe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 192l532.3 0L573.4 0 352 0C80 0 0 192 0 192z" />
            <path d="M637.4 0l-64 0L511.7 288 416 288l-32 0 0 64 32 0 82 0L463.7 512l64 0L637.4 0z" />
    </Icon>
);

export default Scythe;
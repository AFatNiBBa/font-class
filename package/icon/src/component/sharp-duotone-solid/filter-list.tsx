
import { Icon, generic } from "../../index";

/**
 * A component that renders the `filter-list` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/filter-list?s=sharp-duotone-solid filter-list}
 * @preview ![filter-list](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0bDAgNjRMMTEyIDI1NmwwIDEyOCAxMjggOTYgMC0yMjRMMzUyIDEyOGwwLTY0TDAgNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00MTYgNjRsNjQgMCAzMiAwIDAgNjQtMzIgMC02NCAwLTMyIDAgMC02NCAzMiAwek0zMjAgMjI0bDMyIDAgMTI4IDAgMzIgMCAwIDY0LTMyIDAtMTI4IDAtMzIgMCAwLTY0em0wIDE2MGwzMiAwIDEyOCAwIDMyIDAgMCA2NC0zMiAwLTEyOCAwLTMyIDAgMC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const FilterList: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64l0 64L112 256l0 128 128 96 0-224L352 128l0-64L0 64z" />
            <path d="M416 64l64 0 32 0 0 64-32 0-64 0-32 0 0-64 32 0zM320 224l32 0 128 0 32 0 0 64-32 0-128 0-32 0 0-64zm0 160l32 0 128 0 32 0 0 64-32 0-128 0-32 0 0-64z" />
    </Icon>
);

export default FilterList;
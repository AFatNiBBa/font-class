
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sort-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sort-up?s=sharp-duotone-solid sort-up}
 * @preview ![sort-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OGwwIDQ4IDE3LjggMTZMMTYwIDQ4MCAzMDIuMiAzNTIgMzIwIDMzNmwwLTQ4LTY0IDBMNjQgMjg4IDAgMjg4em0xMTMuNCA2NGw5My4xIDBMMTYwIDM5My45IDExMy40IDM1MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMTc2TDE2MCAzMiAzMjAgMTc2djQ4SDBWMTc2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SortUp: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 288l0 48 17.8 16L160 480 302.2 352 320 336l0-48-64 0L64 288 0 288zm113.4 64l93.1 0L160 393.9 113.4 352z" />
            <path d="M0 176L160 32 320 176v48H0V176z" />
    </Icon>
);

export default SortUp;
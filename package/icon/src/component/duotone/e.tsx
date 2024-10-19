
import { Icon, generic } from "../../index";

/**
 * A component that renders the `e` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/e?s=duotone e}
 * @preview ![e](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAzMkMyOC43IDMyIDAgNjAuNyAwIDk2TDAgMjU2IDAgNDE2YzAgMzUuMyAyOC43IDY0IDY0IDY0bDIyNCAwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMyTDY0IDQxNmwwLTEyOCAxNjAgMGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMkw2NCAyMjQgNjQgOTZsMjI0IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJMNjQgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const E: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M64 32C28.7 32 0 60.7 0 96L0 256 0 416c0 35.3 28.7 64 64 64l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 416l0-128 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 224 64 96l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32z" />
    </Icon>
);

export default E;
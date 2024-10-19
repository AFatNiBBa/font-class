
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shelves-empty` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shelves-empty?s=duotone shelves-empty}
 * @preview ![shelves-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAzMkM2NCAxNC4zIDQ5LjcgMCAzMiAwUzAgMTQuMyAwIDMyTDAgMTkyIDAgNDQ4bDAgMzJjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMmw1MTIgMGMwIDE3LjcgMTQuMyAzMiAzMiAzMnMzMi0xNC4zIDMyLTMybDAtMzIgMC0yNTYgMC0xNjBjMC0xNy43LTE0LjMtMzItMzItMzJzLTMyIDE0LjMtMzIgMzJsMCAxMjhMNjQgMTYwIDY0IDMyem0wIDE5Mmw1MTIgMCAwIDE5Mkw2NCA0MTZsMC0xOTJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ShelvesEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 192 0 448l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l512 0c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 0-256 0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128L64 160 64 32zm0 192l512 0 0 192L64 416l0-192z" />
    </Icon>
);

export default ShelvesEmpty;
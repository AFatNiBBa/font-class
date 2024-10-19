
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-plus?s=sharp-duotone-solid folder-plus}
 * @preview ![folder-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDUxMiAwIDAtMzg0TDI3MiA5NiAyMjQgMzIgMCAzMnpNMTQ0IDI2NGwyNCAwIDY0IDAgMC02NCAwLTI0IDQ4IDAgMCAyNCAwIDY0IDY0IDAgMjQgMCAwIDQ4LTI0IDAtNjQgMCAwIDY0IDAgMjQtNDggMCAwLTI0IDAtNjQtNjQgMC0yNCAwIDAtNDh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMzIgMzc2bDAgMjQgNDggMCAwLTI0IDAtNjQgNjQgMCAyNCAwIDAtNDgtMjQgMC02NCAwIDAtNjQgMC0yNC00OCAwIDAgMjQgMCA2NC02NCAwLTI0IDAgMCA0OCAyNCAwIDY0IDAgMCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const FolderPlus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 480l512 0 0-384L272 96 224 32 0 32zM144 264l24 0 64 0 0-64 0-24 48 0 0 24 0 64 64 0 24 0 0 48-24 0-64 0 0 64 0 24-48 0 0-24 0-64-64 0-24 0 0-48z" />
            <path d="M232 376l0 24 48 0 0-24 0-64 64 0 24 0 0-48-24 0-64 0 0-64 0-24-48 0 0 24 0 64-64 0-24 0 0 48 24 0 64 0 0 64z" />
    </Icon>
);

export default FolderPlus;
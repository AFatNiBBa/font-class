
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-user` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-user?s=sharp-duotone-solid folder-user}
 * @preview ![folder-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDUxMiAwIDAtMzg0TDI3MiA5NiAyMjQgMzIgMCAzMnpNMTUyIDQxNmwyNC02NCAxNjAgMCAyNCA2NC0yMDggMHpNMzIwIDI1NmE2NCA2NCAwIDEgMSAtMTI4IDAgNjQgNjQgMCAxIDEgMTI4IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTYgMzIwYTY0IDY0IDAgMSAwIDAtMTI4IDY0IDY0IDAgMSAwIDAgMTI4em0xMDQgOTZsLTI0LTY0LTE2MCAwLTI0IDY0IDIwOCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FolderUser: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 480l512 0 0-384L272 96 224 32 0 32zM152 416l24-64 160 0 24 64-208 0zM320 256a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
            <path d="M256 320a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm104 96l-24-64-160 0-24 64 208 0z" />
    </Icon>
);

export default FolderUser;
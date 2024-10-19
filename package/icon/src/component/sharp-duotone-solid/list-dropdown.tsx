
import { Icon, generic } from "../../index";

/**
 * A component that renders the `list-dropdown` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-dropdown?s=sharp-duotone-solid list-dropdown}
 * @preview ![list-dropdown](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMDQgMjMybDAgNDggMjQgMCAyNTYgMCAyNCAwIDAtNDgtMjQgMC0yNTYgMC0yNCAwem0wIDg4bDAgNDggMjQgMCAyNTYgMCAyNCAwIDAtNDgtMjQgMC0yNTYgMC0yNCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAzMmw1MTIgMCAwIDQ0OEwwIDQ4MCAwIDMyek02NCAxOTJsMCAyMjQgMzg0IDAgMC0yMjRMNjQgMTkyem0zMzYtNDhsNDgtNDgtOTYgMCA0OCA0OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ListDropdown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M104 232l0 48 24 0 256 0 24 0 0-48-24 0-256 0-24 0zm0 88l0 48 24 0 256 0 24 0 0-48-24 0-256 0-24 0z" />
            <path d="M0 32l512 0 0 448L0 480 0 32zM64 192l0 224 384 0 0-224L64 192zm336-48l48-48-96 0 48 48z" />
    </Icon>
);

export default ListDropdown;
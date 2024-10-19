
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sickle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sickle?s=sharp-duotone-solid sickle}
 * @preview ![sickle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMTgxYzAgMzggMTEuOSA3NC43IDMzLjcgMTA1LjJMMTM2IDMxMmw2NCA2NCAyNC0yNCAzMi0zMi01LjQtMTMuNmMtNy0xNy40LTEwLjYtMzYtMTAuNi01NC44bDAtOS44QzI0MCAxNjUuNyAzMDEuNyAxMDQgMzc3LjggMTA0YzQ0LjEgMCA4NS41IDIxLjEgMTExLjUgNTYuOEw1MTIgMTkyQzUxMiA4NiA0MjYgMCAzMjAgMEwzMDkgMEMyMDkgMCAxMjggODEgMTI4IDE4MXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDUxMkwwIDQ0OGw4OC04OEw2NCAzMzZsNDgtNDhMMjI0IDQwMGwtNDggNDgtMjQtMjRMNjQgNTEyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Sickle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 181c0 38 11.9 74.7 33.7 105.2L136 312l64 64 24-24 32-32-5.4-13.6c-7-17.4-10.6-36-10.6-54.8l0-9.8C240 165.7 301.7 104 377.8 104c44.1 0 85.5 21.1 111.5 56.8L512 192C512 86 426 0 320 0L309 0C209 0 128 81 128 181z" />
            <path d="M64 512L0 448l88-88L64 336l48-48L224 400l-48 48-24-24L64 512z" />
    </Icon>
);

export default Sickle;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `caret-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-right?s=duotone caret-right}
 * @preview ![caret-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNDYuNiAyNzguNmMxMi41LTEyLjUgMTIuNS0zMi44IDAtNDUuM2wtMTI4LTEyOGMtOS4yLTkuMi0yMi45LTExLjktMzQuOS02LjlzLTE5LjggMTYuNi0xOS44IDI5LjZsMCAyNTZjMCAxMi45IDcuOCAyNC42IDE5LjggMjkuNnMyNS43IDIuMiAzNC45LTYuOWwxMjgtMTI4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const CaretRight: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
    </Icon>
);

export default CaretRight;
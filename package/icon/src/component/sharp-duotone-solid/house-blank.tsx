
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-blank` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-blank?s=sharp-duotone-solid house-blank}
 * @preview ![house-blank](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAyNzJsLjEgMjQwIDQ0OC41IDAtLjUtMjI0Yy0uMS01LjMtLjEtMTAuNy0uMS0xNkM0MzcuMyAyMTAuNyAzNjIuNyAxNDkuMyAyODggODhDMjEzLjMgMTQ5LjMgMTM4LjcgMjEwLjcgNjQgMjcyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAyNDBMMjg4IDAgNTc2IDI0MHYzMkg1MTJMMjg4IDg4IDY0IDI3MkgwVjI0MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const HouseBlank: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 272l.1 240 448.5 0-.5-224c-.1-5.3-.1-10.7-.1-16C437.3 210.7 362.7 149.3 288 88C213.3 149.3 138.7 210.7 64 272z" />
            <path d="M0 240L288 0 576 240v32H512L288 88 64 272H0V240z" />
    </Icon>
);

export default HouseBlank;
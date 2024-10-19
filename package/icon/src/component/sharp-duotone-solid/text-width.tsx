
import { Icon, generic } from "../../index";

/**
 * A component that renders the `text-width` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-width?s=sharp-duotone-solid text-width}
 * @preview ![text-width](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDMyIDAgMTkyIDAgMTkyIDAgMzIgMCAwIDMyIDAgNjQgMCAzMi02NCAwIDAtMzIgMC0zMkwyNTYgOTZsMCAxMjggMzIgMCAwIDY0LTMyIDAtNjQgMC0zMiAwIDAtNjQgMzIgMCAwLTEyOEw2NCA5NmwwIDMyIDAgMzJMMCAxNjBsMC0zMkwwIDY0IDAgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05NiA0ODBMMCAzODRsOTYtOTYgMzIgMCAwIDY0IDE5MiAwIDAtNjQgMzIgMCA5NiA5Ni05NiA5Ni0zMiAwIDAtNjQtMTkyIDAgMCA2NC0zMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const TextWidth: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l32 0 192 0 192 0 32 0 0 32 0 64 0 32-64 0 0-32 0-32L256 96l0 128 32 0 0 64-32 0-64 0-32 0 0-64 32 0 0-128L64 96l0 32 0 32L0 160l0-32L0 64 0 32z" />
            <path d="M96 480L0 384l96-96 32 0 0 64 192 0 0-64 32 0 96 96-96 96-32 0 0-64-192 0 0 64-32 0z" />
    </Icon>
);

export default TextWidth;
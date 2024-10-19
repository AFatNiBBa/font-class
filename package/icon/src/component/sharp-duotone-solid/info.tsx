
import { Icon, generic } from "../../index";

/**
 * A component that renders the `info` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/info?s=sharp-duotone-solid info}
 * @preview ![info](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00OCAzMmw4MCAwIDAgODAtODAgMCAwLTgweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIgMTkyTDAgMTkybDAgNjQgMzIgMCAzMiAwIDAgMTkyLTMyIDBMMCA0NDhsMCA2NCAzMiAwIDMyIDAgNjQgMCAzMiAwIDMyIDAgMC02NC0zMiAwLTMyIDAgMC0yMjQgMC0zMi0zMiAwLTY0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Info: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M48 32l80 0 0 80-80 0 0-80z" />
            <path d="M32 192L0 192l0 64 32 0 32 0 0 192-32 0L0 448l0 64 32 0 32 0 64 0 32 0 32 0 0-64-32 0-32 0 0-224 0-32-32 0-64 0z" />
    </Icon>
);

export default Info;
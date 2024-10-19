
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-divide` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-divide?s=sharp-duotone-solid square-divide}
 * @preview ![square-divide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6TTExMiAyMzJsMjQgMCAxNzYgMCAyNCAwIDAgNDgtMjQgMC0xNzYgMC0yNCAwIDAtNDh6bTgwLTEwNGw2NCAwIDAgNjQtNjQgMCAwLTY0em0wIDE5Mmw2NCAwIDAgNjQtNjQgMCAwLTY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTkyIDEyOGw2NCAwIDAgNjQtNjQgMCAwLTY0ek0xMTIgMjMybDI0IDAgMTc2IDAgMjQgMCAwIDQ4LTI0IDAtMTc2IDAtMjQgMCAwLTQ4em0xNDQgODhsMCA2NC02NCAwIDAtNjQgNjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SquareDivide: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM112 232l24 0 176 0 24 0 0 48-24 0-176 0-24 0 0-48zm80-104l64 0 0 64-64 0 0-64zm0 192l64 0 0 64-64 0 0-64z" />
            <path d="M192 128l64 0 0 64-64 0 0-64zM112 232l24 0 176 0 24 0 0 48-24 0-176 0-24 0 0-48zm144 88l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default SquareDivide;
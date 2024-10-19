
import { Icon, generic } from "../../index";

/**
 * A component that renders the `heading` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heading?s=sharp-duotone-solid heading}
 * @preview ![heading](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDMyIDAgMTYgMCA2NCAwIDE2IDAgMzIgMCAwIDY0LTMyIDAtMTYgMCAwIDExMiAyMjQgMCAwLTExMi0xNiAwLTMyIDAgMC02NCAzMiAwIDE2IDAgNjQgMCAxNiAwIDMyIDAgMCA2NC0zMiAwLTE2IDAgMCAxNDQgMCAxNzYgMTYgMCAzMiAwIDAgNjQtMzIgMC0xNiAwLTY0IDAtMTYgMC0zMiAwIDAtNjQgMzIgMCAxNiAwIDAtMTQ0LTIyNCAwIDAgMTQ0IDE2IDAgMzIgMCAwIDY0LTMyIDAtMTYgMC02NCAwLTE2IDBMMCA0ODBsMC02NCAzMiAwIDE2IDAgMC0xNzZMNDggOTYgMzIgOTYgMCA5NiAwIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const Heading: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l32 0 16 0 64 0 16 0 32 0 0 64-32 0-16 0 0 112 224 0 0-112-16 0-32 0 0-64 32 0 16 0 64 0 16 0 32 0 0 64-32 0-16 0 0 144 0 176 16 0 32 0 0 64-32 0-16 0-64 0-16 0-32 0 0-64 32 0 16 0 0-144-224 0 0 144 16 0 32 0 0 64-32 0-16 0-64 0-16 0L0 480l0-64 32 0 16 0 0-176L48 96 32 96 0 96 0 32z" />
    </Icon>
);

export default Heading;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `text` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text?s=sharp-duotone-solid text}
 * @preview ![text](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDMyIDAgMTYwIDAgNjQgMCAxNjAgMCAzMiAwIDAgMzIgMCA2NCAwIDMyLTY0IDAgMC0zMiAwLTMyTDI1NiA5NmwwIDMyMCA0OCAwIDMyIDAgMCA2NC0zMiAwLTE2MCAwLTMyIDAgMC02NCAzMiAwIDQ4IDAgMC0zMjBMNjQgOTZsMCAzMiAwIDMyTDAgMTYwbDAtMzJMMCA2NCAwIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const Text: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l32 0 160 0 64 0 160 0 32 0 0 32 0 64 0 32-64 0 0-32 0-32L256 96l0 320 48 0 32 0 0 64-32 0-160 0-32 0 0-64 32 0 48 0 0-320L64 96l0 32 0 32L0 160l0-32L0 64 0 32z" />
    </Icon>
);

export default Text;
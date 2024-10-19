
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mobile` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile?s=sharp-duotone-solid mobile}
 * @preview ![mobile](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiAzODRsMCAxMjggMzUyIDAgMC0xMjhMMTYgMzg0em0xMjggNDhsMTYgMCA2NCAwIDE2IDAgMCAzMi0xNiAwLTY0IDAtMTYgMCAwLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTYgMEgzNjhWMzg0SDE2VjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Mobile: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M16 384l0 128 352 0 0-128L16 384zm128 48l16 0 64 0 16 0 0 32-16 0-64 0-16 0 0-32z" />
            <path d="M16 0H368V384H16V0z" />
    </Icon>
);

export default Mobile;
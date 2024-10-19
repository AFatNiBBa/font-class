
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turn-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down?s=sharp-duotone-solid turn-down}
 * @preview ![turn-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMCA5Nmw0OCAwIDk2IDAgMCAyMjQgOTYgMCAwLTI3MiAwLTQ4TDE5MiAwIDQ4IDAgMCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzUyIDM1MkwxOTIgNTEyIDMyIDM1MmwwLTMyIDMyMCAwIDAgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const TurnDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 96l48 0 96 0 0 224 96 0 0-272 0-48L192 0 48 0 0 0z" />
            <path d="M352 352L192 512 32 352l0-32 320 0 0 32z" />
    </Icon>
);

export default TurnDown;
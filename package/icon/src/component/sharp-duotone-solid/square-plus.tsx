
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-plus?s=sharp-duotone-solid square-plus}
 * @preview ![square-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6TTExMiAyMzJsMjQgMCA2NCAwIDAtNjQgMC0yNCA0OCAwIDAgMjQgMCA2NCA2NCAwIDI0IDAgMCA0OC0yNCAwLTY0IDAgMCA2NCAwIDI0LTQ4IDAgMC0yNCAwLTY0LTY0IDAtMjQgMCAwLTQ4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjAwIDM0NGwwIDI0IDQ4IDAgMC0yNCAwLTY0IDY0IDAgMjQgMCAwLTQ4LTI0IDAtNjQgMCAwLTY0IDAtMjQtNDggMCAwIDI0IDAgNjQtNjQgMC0yNCAwIDAgNDggMjQgMCA2NCAwIDAgNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const SquarePlus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM112 232l24 0 64 0 0-64 0-24 48 0 0 24 0 64 64 0 24 0 0 48-24 0-64 0 0 64 0 24-48 0 0-24 0-64-64 0-24 0 0-48z" />
            <path d="M200 344l0 24 48 0 0-24 0-64 64 0 24 0 0-48-24 0-64 0 0-64 0-24-48 0 0 24 0 64-64 0-24 0 0 48 24 0 64 0 0 64z" />
    </Icon>
);

export default SquarePlus;
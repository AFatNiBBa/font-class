
import { Icon, generic } from "../../index";

/**
 * A component that renders the `octagon-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-plus?s=sharp-duotone-solid octagon-plus}
 * @preview ![octagon-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MEwxNjAgMCAzNTIgMCA1MTIgMTYwbDAgMTkyTDM1MiA1MTJsLTE5MiAwTDAgMzUyIDAgMTYwem0xNDQgNzJsMCA0OCAyNCAwIDY0IDAgMCA2NCAwIDI0IDQ4IDAgMC0yNCAwLTY0IDY0IDAgMjQgMCAwLTQ4LTI0IDAtNjQgMCAwLTY0IDAtMjQtNDggMCAwIDI0IDAgNjQtNjQgMC0yNCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjMyIDM0NGwwIDI0IDQ4IDAgMC0yNCAwLTY0IDY0IDAgMjQgMCAwLTQ4LTI0IDAtNjQgMCAwLTY0IDAtMjQtNDggMCAwIDI0IDAgNjQtNjQgMC0yNCAwIDAgNDggMjQgMCA2NCAwIDAgNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const OctagonPlus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160L160 0 352 0 512 160l0 192L352 512l-192 0L0 352 0 160zm144 72l0 48 24 0 64 0 0 64 0 24 48 0 0-24 0-64 64 0 24 0 0-48-24 0-64 0 0-64 0-24-48 0 0 24 0 64-64 0-24 0z" />
            <path d="M232 344l0 24 48 0 0-24 0-64 64 0 24 0 0-48-24 0-64 0 0-64 0-24-48 0 0 24 0 64-64 0-24 0 0 48 24 0 64 0 0 64z" />
    </Icon>
);

export default OctagonPlus;
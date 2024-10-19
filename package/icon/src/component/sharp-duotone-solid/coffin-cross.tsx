
import { Icon, generic } from "../../index";

/**
 * A component that renders the `coffin-cross` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffin-cross?s=sharp-duotone-solid coffin-cross}
 * @preview ![coffin-cross](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE0NEwxMDQgNTEybDE3NiAwTDM4NCAxNDQgMjcyIDAgMTEyIDAgMCAxNDR6bTk2IDE2bDI0IDAgNDggMCAwLTQwIDAtMjQgNDggMCAwIDI0IDAgNDAgNDggMCAyNCAwIDAgNDgtMjQgMC00OCAwIDAgMTIwIDAgMjQtNDggMCAwLTI0IDAtMTIwLTQ4IDAtMjQgMCAwLTQ4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjE2IDEyMGwwLTI0LTQ4IDAgMCAyNCAwIDQwLTQ4IDAtMjQgMCAwIDQ4IDI0IDAgNDggMCAwIDEyMCAwIDI0IDQ4IDAgMC0yNCAwLTEyMCA0OCAwIDI0IDAgMC00OC0yNCAwLTQ4IDAgMC00MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CoffinCross: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 144L104 512l176 0L384 144 272 0 112 0 0 144zm96 16l24 0 48 0 0-40 0-24 48 0 0 24 0 40 48 0 24 0 0 48-24 0-48 0 0 120 0 24-48 0 0-24 0-120-48 0-24 0 0-48z" />
            <path d="M216 120l0-24-48 0 0 24 0 40-48 0-24 0 0 48 24 0 48 0 0 120 0 24 48 0 0-24 0-120 48 0 24 0 0-48-24 0-48 0 0-40z" />
    </Icon>
);

export default CoffinCross;
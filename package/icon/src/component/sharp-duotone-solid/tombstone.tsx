
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tombstone` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone?s=sharp-duotone-solid tombstone}
 * @preview ![tombstone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAxOTJsMCAyNTYgMzg0IDAgMC0yNTZDNDE2IDg2IDMzMCAwIDIyNCAwUzMyIDg2IDMyIDE5MnptOTYgMGwyNCAwIDQ4IDAgMC00MCAwLTI0IDQ4IDAgMCAyNCAwIDQwIDQ4IDAgMjQgMCAwIDQ4LTI0IDAtNDggMCAwIDEyMCAwIDI0LTQ4IDAgMC0yNCAwLTEyMC00OCAwLTI0IDAgMC00OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI0OCAxNTJsMC0yNC00OCAwIDAgMjQgMCA0MC00OCAwLTI0IDAgMCA0OCAyNCAwIDQ4IDAgMCAxMjAgMCAyNCA0OCAwIDAtMjQgMC0xMjAgNDggMCAyNCAwIDAtNDgtMjQgMC00OCAwIDAtNDB6TTMyIDQ0OEwwIDQ0OGwwIDY0IDMyIDAgMzg0IDAgMzIgMCAwLTY0LTMyIDBMMzIgNDQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Tombstone: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 192l0 256 384 0 0-256C416 86 330 0 224 0S32 86 32 192zm96 0l24 0 48 0 0-40 0-24 48 0 0 24 0 40 48 0 24 0 0 48-24 0-48 0 0 120 0 24-48 0 0-24 0-120-48 0-24 0 0-48z" />
            <path d="M248 152l0-24-48 0 0 24 0 40-48 0-24 0 0 48 24 0 48 0 0 120 0 24 48 0 0-24 0-120 48 0 24 0 0-48-24 0-48 0 0-40zM32 448L0 448l0 64 32 0 384 0 32 0 0-64-32 0L32 448z" />
    </Icon>
);

export default Tombstone;
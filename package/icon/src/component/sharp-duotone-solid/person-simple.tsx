
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-simple?s=sharp-duotone-solid person-simple}
 * @preview ![person-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA2NGE2NCA2NCAwIDEgMCAxMjggMEE2NCA2NCAwIDEgMCA2NCA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIyNCAxNjBMMzIgMTYwIDI0IDM1Mmw0MCAwIDAgMTYwIDEyOCAwIDAtMTYwIDQwIDAtOC0xOTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const PersonSimple: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M64 64a64 64 0 1 0 128 0A64 64 0 1 0 64 64z" />
            <path d="M224 160L32 160 24 352l40 0 0 160 128 0 0-160 40 0-8-192z" />
    </Icon>
);

export default PersonSimple;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `boot-heeled` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boot-heeled?s=sharp-duotone-solid boot-heeled}
 * @preview ![boot-heeled](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA0MTZsMTI4IDAgMTYwIDQ4IDE2MCAwIDggMCAyNCAwIDAgNDgtMjQgMC04IDAtMTM2IDAtMjQgMC0xNiAwTDE2MCA0NjRsMCA0OEwzMiA1MTJsMC05NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyIDBsOTYgMCAwIDI0MCAwIDE2IDMyIDAgMC0xNkwxNjAgMCAyODggMGwwIDI4OCAxOTIgOTYgMCA4MC0xNjAgMEwxNjAgNDE2IDMyIDQxNmwwLTMyTDY0IDI1NiAzMiA2NCAzMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BootHeeled: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 416l128 0 160 48 160 0 8 0 24 0 0 48-24 0-8 0-136 0-24 0-16 0L160 464l0 48L32 512l0-96z" />
            <path d="M32 0l96 0 0 240 0 16 32 0 0-16L160 0 288 0l0 288 192 96 0 80-160 0L160 416 32 416l0-32L64 256 32 64 32 0z" />
    </Icon>
);

export default BootHeeled;
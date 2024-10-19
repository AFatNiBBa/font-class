
import { Icon, generic } from "../../index";

/**
 * A component that renders the `objects-align-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-left?s=sharp-duotone-solid objects-align-left}
 * @preview ![objects-align-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggNjRsMCAxNjAgMzg0IDAgMC0xNjBMMTI4IDY0em0wIDIyNGwwIDE2MCAyNTYgMCAwLTE2MC0yNTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMEwwIDUxMmw0OCAwTDQ4IDAgMCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ObjectsAlignLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 64l0 160 384 0 0-160L128 64zm0 224l0 160 256 0 0-160-256 0z" />
            <path d="M0 0L0 512l48 0L48 0 0 0z" />
    </Icon>
);

export default ObjectsAlignLeft;
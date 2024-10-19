
import { Icon, generic } from "../../index";

/**
 * A component that renders the `explosion` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/explosion?s=sharp-duotone-solid explosion}
 * @preview ![explosion](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMGwxNDQgNDhMOTYgMTkyIDI0MCAzMDRsMjQtMTc2IDQ4IDAgMjQgMTY4TDU0NCAwIDQzMiAzNjhsMTQ0LTQ4TDQ2Ni4zIDQ0OCAzODQgNDQ4YzAtNTMtNDMtOTYtOTYtOTZzLTk2IDQzLTk2IDk2bC04Mi4zIDBMMCAzMjB6TTI2NCAwbDQ4IDAgMCAyNCAwIDQ4IDAgMjQtNDggMCAwLTI0IDAtNDggMC0yNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgNDQ4bDMyIDAgNTEyIDAgMzIgMCAwIDY0LTMyIDBMMzIgNTEyIDAgNTEybDAtNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Explosion: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 320l144 48L96 192 240 304l24-176 48 0 24 168L544 0 432 368l144-48L466.3 448 384 448c0-53-43-96-96-96s-96 43-96 96l-82.3 0L0 320zM264 0l48 0 0 24 0 48 0 24-48 0 0-24 0-48 0-24z" />
            <path d="M0 448l32 0 512 0 32 0 0 64-32 0L32 512 0 512l0-64z" />
    </Icon>
);

export default Explosion;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `reply-all` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reply-all?s=sharp-duotone-solid reply-all}
 * @preview ![reply-all](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIwOEwxOTIgMzJsMzIgMCAwIDg4LTk2IDg4IDk2IDg4IDAgODgtMzIgMEwwIDIwOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEyOCAyMDhMMzIwIDM4NGwzMiAwIDAtOTYgMTYgMGM2MS45IDAgMTEyIDUwLjEgMTEyIDExMmMwIDQ4LTMyIDgwLTMyIDgwczEyOC00OCAxMjgtMTc2YzAtOTcuMi03OC44LTE3Ni0xNzYtMTc2bC00OCAwIDAtOTYtMzIgMEwxMjggMjA4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ReplyAll: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 208L192 32l32 0 0 88-96 88 96 88 0 88-32 0L0 208z" />
            <path d="M128 208L320 384l32 0 0-96 16 0c61.9 0 112 50.1 112 112c0 48-32 80-32 80s128-48 128-176c0-97.2-78.8-176-176-176l-48 0 0-96-32 0L128 208z" />
    </Icon>
);

export default ReplyAll;
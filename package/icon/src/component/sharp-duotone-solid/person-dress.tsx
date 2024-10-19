
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-dress` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-dress?s=sharp-duotone-solid person-dress}
 * @preview ![person-dress](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMTIgNDhhNDggNDggMCAxIDAgOTYgMCA0OCA0OCAwIDEgMCAtOTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEwOC45IDEyOGwtMTcuNSAwTDgyIDE0Mi44IC4yIDI3MC44bDUzLjkgMzQuNCA0Mi02NS44TDQ4IDM4NGw0MCAwIDAgOTYgMCAzMiA2NCAwIDAtMzIgMC05NiAxNiAwIDAgOTYgMCAzMiA2NCAwIDAtMzIgMC05NiA0MCAwTDIyMy44IDIzOS40bDQyIDY1LjggNTMuOS0zNC40TDIzOCAxNDIuOCAyMjguNiAxMjhsLTE3LjUgMC0xMDIuMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PersonDress: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M112 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
            <path d="M108.9 128l-17.5 0L82 142.8 .2 270.8l53.9 34.4 42-65.8L48 384l40 0 0 96 0 32 64 0 0-32 0-96 16 0 0 96 0 32 64 0 0-32 0-96 40 0L223.8 239.4l42 65.8 53.9-34.4L238 142.8 228.6 128l-17.5 0-102.2 0z" />
    </Icon>
);

export default PersonDress;
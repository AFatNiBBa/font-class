
import { Icon, generic } from "../../index";

/**
 * A component that renders the `video-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/video-plus?s=sharp-duotone-solid video-plus}
 * @preview ![video-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDAgNDQ4bDM4NCAwIDAtMTMzTDM4NCAxOTdsMC0xMzNMMCA2NHpNOTYgMjMybDI0IDAgNDggMCAwLTQ4IDAtMjQgNDggMCAwIDI0IDAgNDggNDggMCAyNCAwIDAgNDgtMjQgMC00OCAwIDAgNDggMCAyNC00OCAwIDAtMjQgMC00OC00OCAwLTI0IDAgMC00OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTU3NiA0NDhsMC0zODRMMzg0IDE5NyAzODQgMzE1IDU3NiA0NDh6TTIxNiAxODRsMC0yNC00OCAwIDAgMjQgMCA0OC00OCAwLTI0IDAgMCA0OCAyNCAwIDQ4IDAgMCA0OCAwIDI0IDQ4IDAgMC0yNCAwLTQ4IDQ4IDAgMjQgMCAwLTQ4LTI0IDAtNDggMCAwLTQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const VideoPlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448l384 0 0-133L384 197l0-133L0 64zM96 232l24 0 48 0 0-48 0-24 48 0 0 24 0 48 48 0 24 0 0 48-24 0-48 0 0 48 0 24-48 0 0-24 0-48-48 0-24 0 0-48z" />
            <path d="M576 448l0-384L384 197 384 315 576 448zM216 184l0-24-48 0 0 24 0 48-48 0-24 0 0 48 24 0 48 0 0 48 0 24 48 0 0-24 0-48 48 0 24 0 0-48-24 0-48 0 0-48z" />
    </Icon>
);

export default VideoPlus;
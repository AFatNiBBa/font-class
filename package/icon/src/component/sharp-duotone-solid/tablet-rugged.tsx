
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tablet-rugged` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-rugged?s=sharp-duotone-solid tablet-rugged}
 * @preview ![tablet-rugged](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0bDAgOTYgMzIgMTYgMCAxNkwwIDIwOGwwIDk2IDMyIDE2IDAgMTZMMCAzNTJsMCA5NiAzMiAxNiAwIDQ4IDY0IDAgMjU2IDAgNjQgMCAwLTQ4IDMyLTE2IDAtOTYtMzItMTYgMC0xNiAzMi0xNiAwLTk2LTMyLTE2IDAtMTYgMzItMTYgMC05Nkw0MTYgNDhsMC00OEwzNTIgMCA5NiAwIDMyIDBsMCA0OEwwIDY0em05NiAwbDI1NiAwIDAgMzg0TDk2IDQ0OCA5NiA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk2IDY0SDM1MlY0NDhIOTZWNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const TabletRugged: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 64l0 96 32 16 0 16L0 208l0 96 32 16 0 16L0 352l0 96 32 16 0 48 64 0 256 0 64 0 0-48 32-16 0-96-32-16 0-16 32-16 0-96-32-16 0-16 32-16 0-96L416 48l0-48L352 0 96 0 32 0l0 48L0 64zm96 0l256 0 0 384L96 448 96 64z" />
            <path d="M96 64H352V448H96V64z" />
    </Icon>
);

export default TabletRugged;
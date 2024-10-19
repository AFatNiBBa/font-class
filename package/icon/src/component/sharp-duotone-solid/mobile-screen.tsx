
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mobile-screen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-screen?s=sharp-duotone-solid mobile-screen}
 * @preview ![mobile-screen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiAwTDM2OCAwbDAgNTEyTDE2IDUxMiAxNiAwek04MCA2NGwwIDMyMCAyMjQgMCAwLTMyMEw4MCA2NHptNjQgMzY4bDAgMzIgMTYgMCA2NCAwIDE2IDAgMC0zMi0xNiAwLTY0IDAtMTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTgwIDY0SDMwNFYzODRIODBWNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const MobileScreen: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M16 0L368 0l0 512L16 512 16 0zM80 64l0 320 224 0 0-320L80 64zm64 368l0 32 16 0 64 0 16 0 0-32-16 0-64 0-16 0z" />
            <path d="M80 64H304V384H80V64z" />
    </Icon>
);

export default MobileScreen;
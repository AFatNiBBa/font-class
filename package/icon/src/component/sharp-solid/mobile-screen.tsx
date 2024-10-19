
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-screen` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-screen?s=sharp-solid mobile-screen}
 * @preview ![mobile-screen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgMEwzNjggMGwwIDUxMkwxNiA1MTIgMTYgMHpNMTQ0IDQzMmwwIDMyIDE2IDAgNjQgMCAxNiAwIDAtMzItMTYgMC02NCAwLTE2IDB6TTMwNCA2NEw4MCA2NGwwIDMyMCAyMjQgMCAwLTMyMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const MobileScreen: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 0L368 0l0 512L16 512 16 0zM144 432l0 32 16 0 64 0 16 0 0-32-16 0-64 0-16 0zM304 64L80 64l0 320 224 0 0-320z" />
    </Icon>
);

export default MobileScreen;
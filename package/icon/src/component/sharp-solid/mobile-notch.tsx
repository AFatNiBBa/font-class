
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-notch` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-notch?s=sharp-solid mobile-notch}
 * @preview ![mobile-notch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTI4IDY0bDAgMzIgMTI4IDAgMC0zMiA0OCAwIDAgMzg0TDgwIDQ0OCA4MCA2NGw0OCAwek04MCAwTDE2IDBsMCA2NCAwIDM4NCAwIDY0IDY0IDAgMjI0IDAgNjQgMCAwLTY0IDAtMzg0IDAtNjRMMzA0IDAgODAgMHptNDggMzg0bDAgMzIgMTYgMCA5NiAwIDE2IDAgMC0zMi0xNiAwLTk2IDAtMTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const MobileNotch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128 64l0 32 128 0 0-32 48 0 0 384L80 448 80 64l48 0zM80 0L16 0l0 64 0 384 0 64 64 0 224 0 64 0 0-64 0-384 0-64L304 0 80 0zm48 384l0 32 16 0 96 0 16 0 0-32-16 0-96 0-16 0z" />
    </Icon>
);

export default MobileNotch;

import { Icon } from "../../index";

/**
 * A component that renders the `mobile-notch` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-notch?s=sharp-regular mobile-notch}
 * @preview ![mobile-notch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDQ4bDAgMzJMMTI4IDgwbDAtMzJMNjQgNDhsMCA0MTYgMjU2IDAgMC00MTYtNjQgMHpNMTYgMEw2NCAwIDMyMCAwbDQ4IDAgMCA0OCAwIDQxNiAwIDQ4LTQ4IDBMNjQgNTEybC00OCAwIDAtNDhMMTYgNDggMTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const MobileNotch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M256 48l0 32L128 80l0-32L64 48l0 416 256 0 0-416-64 0zM16 0L64 0 320 0l48 0 0 48 0 416 0 48-48 0L64 512l-48 0 0-48L16 48 16 0z" />
    </Icon>
);

export default MobileNotch;
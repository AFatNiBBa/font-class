
import { Icon } from "../../index";

/**
 * A component that renders the `wallet` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wallet?s=sharp-light wallet}
 * @preview ![wallet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgMzJMMCAzMiAwIDQ4IDAgNDY0bDAgMTYgMTYgMCA0ODAgMCAxNiAwIDAtMTYgMC0zNTIgMC0xNi0xNiAwTDExMiA5NiA5NiA5NmwwIDMyIDE2IDAgMzY4IDAgMCAzMjBMMzIgNDQ4IDMyIDY0bDQzMiAwIDE2IDAgMC0zMi0xNiAwTDE2IDMyek0zODQgMzEyYTI0IDI0IDAgMSAwIDAtNDggMjQgMjQgMCAxIDAgMCA0OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Wallet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 32L0 32 0 48 0 464l0 16 16 0 480 0 16 0 0-16 0-352 0-16-16 0L112 96 96 96l0 32 16 0 368 0 0 320L32 448 32 64l432 0 16 0 0-32-16 0L16 32zM384 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Wallet;

import { Icon } from "../../index";

/**
 * A component that renders the `mobile-button` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-button?s=solid mobile-button}
 * @preview ![mobile-button](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNODAgMEM0NC43IDAgMTYgMjguNyAxNiA2NGwwIDM4NGMwIDM1LjMgMjguNyA2NCA2NCA2NGwyMjQgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTM4NGMwLTM1LjMtMjguNy02NC02NC02NEw4MCAwek0xOTIgNDAwYTMyIDMyIDAgMSAxIDAgNjQgMzIgMzIgMCAxIDEgMC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const MobileButton: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M80 0C44.7 0 16 28.7 16 64l0 384c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L80 0zM192 400a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default MobileButton;

import { Icon } from "../../index";

/**
 * A component that renders the `box-ballot` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-ballot?s=solid box-ballot}
 * @preview ![box-ballot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTI4IDMyYzAtMTcuNyAxNC4zLTMyIDMyLTMyTDQxNiAwYzE3LjcgMCAzMiAxNC4zIDMyIDMybDAgMTkyLTMyMCAwIDAtMTkyek0wIDM1Mmw1NzYgMCAwIDExMmMwIDI2LjUtMjEuNSA0OC00OCA0OEw0OCA1MTJjLTI2LjUgMC00OC0yMS41LTQ4LTQ4TDAgMzUyek00OCAxNjBsNDggMCAwIDk2IDM4NCAwIDAtOTYgNDggMGMyNi41IDAgNDggMjEuNSA0OCA0OGwwIDExMkwwIDMyMCAwIDIwOGMwLTI2LjUgMjEuNS00OCA0OC00OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BoxBallot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M128 32c0-17.7 14.3-32 32-32L416 0c17.7 0 32 14.3 32 32l0 192-320 0 0-192zM0 352l576 0 0 112c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 352zM48 160l48 0 0 96 384 0 0-96 48 0c26.5 0 48 21.5 48 48l0 112L0 320 0 208c0-26.5 21.5-48 48-48z" />
    </Icon>
);

export default BoxBallot;
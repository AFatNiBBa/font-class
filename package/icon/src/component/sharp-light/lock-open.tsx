
import { Icon } from "../../index";

/**
 * A component that renders the `lock-open` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-open?s=sharp-light lock-open}
 * @preview ![lock-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzUyIDEyOGMwLTUzIDQzLTk2IDk2LTk2czk2IDQzIDk2IDk2bDAgODAgMCAxNiAzMiAwIDAtMTYgMC04MEM1NzYgNTcuMyA1MTguNyAwIDQ0OCAwUzMyMCA1Ny4zIDMyMCAxMjhsMCA2NEwzMiAxOTIgMCAxOTJsMCAzMkwwIDQ4MGwwIDMyIDMyIDAgMzg0IDAgMzIgMCAwLTMyIDAtMjU2IDAtMzItMzIgMC02NCAwIDAtNjR6bS0xNiA5Nmw4MCAwIDAgMjU2TDMyIDQ4MGwwLTI1NiAzMDQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const LockOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M352 128c0-53 43-96 96-96s96 43 96 96l0 80 0 16 32 0 0-16 0-80C576 57.3 518.7 0 448 0S320 57.3 320 128l0 64L32 192 0 192l0 32L0 480l0 32 32 0 384 0 32 0 0-32 0-256 0-32-32 0-64 0 0-64zm-16 96l80 0 0 256L32 480l0-256 304 0z" />
    </Icon>
);

export default LockOpen;
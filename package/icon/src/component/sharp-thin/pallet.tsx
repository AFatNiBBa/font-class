
import { Icon } from "../../index";

/**
 * A component that renders the `pallet` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet?s=sharp-thin pallet}
 * @preview ![pallet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOCAzNTJsLTggMCAwIDE2IDggMCA3MiAwIDAgMTI4TDggNDk2bC04IDAgMCAxNiA4IDAgNzIgMCA4IDAgOCAwIDIxNiAwIDggMCA4IDAgMjE2IDAgOCAwIDggMCA3MiAwIDggMCAwLTE2LTggMC03MiAwIDAtMTI4IDcyIDAgOCAwIDAtMTYtOCAwLTcyIDAtOCAwLTggMC0yMTYgMC04IDAtOCAwTDk2IDM1MmwtOCAwLTggMEw4IDM1MnptODggMTZsMjE2IDAgMCAxMjhMOTYgNDk2bDAtMTI4em0yMzIgMGwyMTYgMCAwIDEyOC0yMTYgMCAwLTEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Pallet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M8 352l-8 0 0 16 8 0 72 0 0 128L8 496l-8 0 0 16 8 0 72 0 8 0 8 0 216 0 8 0 8 0 216 0 8 0 8 0 72 0 8 0 0-16-8 0-72 0 0-128 72 0 8 0 0-16-8 0-72 0-8 0-8 0-216 0-8 0-8 0L96 352l-8 0-8 0L8 352zm88 16l216 0 0 128L96 496l0-128zm232 0l216 0 0 128-216 0 0-128z" />
    </Icon>
);

export default Pallet;
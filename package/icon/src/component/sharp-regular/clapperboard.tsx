
import { Icon } from "../../index";

/**
 * A component that renders the `clapperboard` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clapperboard?s=sharp-regular clapperboard}
 * @preview ![clapperboard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggMjA4bDAgMjI0IDQxNiAwIDAtMjI0TDQ4IDIwOHptMzUyLTQ4bDY0LTY0IDAtMTYtNDggMC04MCA4MCA2NCAwek0zMjAgODBsLTY0IDAtODAgODAgNjQgMCA4MC04MHpNMTYwIDgwTDk2IDgwIDQ4IDEyOGwwIDMyIDMyIDAgODAtODB6bTM1MiA4MGwwIDI0IDAgMjQgMCAyMjQgMCA0OC00OCAwTDQ4IDQ4MCAwIDQ4MGwwLTQ4TDAgMjA4bDAtMjQgMC0yNEwwIDgwIDAgMzJsNDggMCA0MTYgMCA0OCAwIDAgNDggMCA4MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Clapperboard: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 208l0 224 416 0 0-224L48 208zm352-48l64-64 0-16-48 0-80 80 64 0zM320 80l-64 0-80 80 64 0 80-80zM160 80L96 80 48 128l0 32 32 0 80-80zm352 80l0 24 0 24 0 224 0 48-48 0L48 480 0 480l0-48L0 208l0-24 0-24L0 80 0 32l48 0 416 0 48 0 0 48 0 80z" />
    </Icon>
);

export default Clapperboard;
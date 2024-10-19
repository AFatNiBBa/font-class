
import { Icon } from "../../index";

/**
 * A component that renders the `credit-card` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/credit-card?s=sharp-solid credit-card}
 * @preview ![credit-card](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTc2IDMyTDAgMzJsMCA5NiA1NzYgMCAwLTk2em0wIDE5MkwwIDIyNCAwIDQ4MGw1NzYgMCAwLTI1NnpNMTkyIDM1MmwwIDMyLTk2IDAgMC0zMiA5NiAwem0zMiAwbDE2MCAwIDAgMzItMTYwIDAgMC0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const CreditCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 32L0 32l0 96 576 0 0-96zm0 192L0 224 0 480l576 0 0-256zM192 352l0 32-96 0 0-32 96 0zm32 0l160 0 0 32-160 0 0-32z" />
    </Icon>
);

export default CreditCard;
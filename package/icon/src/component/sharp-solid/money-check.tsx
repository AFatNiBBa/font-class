
import { Icon } from "../../index";

/**
 * A component that renders the `money-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-check?s=sharp-solid money-check}
 * @preview ![money-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTc2IDY0TDAgNjQgMCA0NDhsNTc2IDAgMC0zODR6TTI4OCAyMjRsMCAzMkw5NiAyNTZsMC0zMiAxOTIgMHptMTkyIDk2bDAgMzJMOTYgMzUybDAtMzIgMzg0IDB6bTAtMTYwbDAgOTYtMTI4IDAgMC05NiAxMjggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const MoneyCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 64L0 64 0 448l576 0 0-384zM288 224l0 32L96 256l0-32 192 0zm192 96l0 32L96 352l0-32 384 0zm0-160l0 96-128 0 0-96 128 0z" />
    </Icon>
);

export default MoneyCheck;

import { Icon } from "../../index";

/**
 * A component that renders the `money-bill` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bill?s=sharp-regular money-bill}
 * @preview ![money-bill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTEyIDExMmMwIDM1LjMtMjguNyA2NC02NCA2NGwwIDE2MGMzNS4zIDAgNjQgMjguNyA2NCA2NGwzNTIgMGMwLTM1LjMgMjguNy02NCA2NC02NGwwLTE2MGMtMzUuMyAwLTY0LTI4LjctNjQtNjRsLTM1MiAwek0wIDY0bDQ4IDAgNDgwIDAgNDggMCAwIDQ4IDAgMjg4IDAgNDgtNDggMEw0OCA0NDggMCA0NDhsMC00OEwwIDExMiAwIDY0em0yODggOTZhOTYgOTYgMCAxIDEgMCAxOTIgOTYgOTYgMCAxIDEgMC0xOTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const MoneyBill: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M112 112c0 35.3-28.7 64-64 64l0 160c35.3 0 64 28.7 64 64l352 0c0-35.3 28.7-64 64-64l0-160c-35.3 0-64-28.7-64-64l-352 0zM0 64l48 0 480 0 48 0 0 48 0 288 0 48-48 0L48 448 0 448l0-48L0 112 0 64zm288 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default MoneyBill;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-bill` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bill?s=duotone money-bill}
 * @preview ![money-bill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAxOTJsMCAxMjhjMzUuMyAwIDY0IDI4LjcgNjQgNjRsMzIwIDBjMC0zNS4zIDI4LjctNjQgNjQtNjRsMC0xMjhjLTM1LjMgMC02NC0yOC43LTY0LTY0bC0zMjAgMGMwIDM1LjMtMjguNyA2NC02NCA2NHptMzIwIDY0YTk2IDk2IDAgMSAxIC0xOTIgMCA5NiA5NiAwIDEgMSAxOTIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDY0QzI4LjcgNjQgMCA5Mi43IDAgMTI4TDAgMzg0YzAgMzUuMyAyOC43IDY0IDY0IDY0bDQ0OCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMjU2YzAtMzUuMy0yOC43LTY0LTY0LTY0TDY0IDY0em0zODQgNjRjMCAzNS4zIDI4LjcgNjQgNjQgNjRsMCAxMjhjLTM1LjMgMC02NCAyOC43LTY0IDY0bC0zMjAgMGMwLTM1LjMtMjguNy02NC02NC02NGwwLTEyOGMzNS4zIDAgNjQtMjguNyA2NC02NGwzMjAgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const MoneyBill: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 192l0 128c35.3 0 64 28.7 64 64l320 0c0-35.3 28.7-64 64-64l0-128c-35.3 0-64-28.7-64-64l-320 0c0 35.3-28.7 64-64 64zm320 64a96 96 0 1 1 -192 0 96 96 0 1 1 192 0z" />
            <path d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm384 64c0 35.3 28.7 64 64 64l0 128c-35.3 0-64 28.7-64 64l-320 0c0-35.3-28.7-64-64-64l0-128c35.3 0 64-28.7 64-64l320 0z" />
    </Icon>
);

export default MoneyBill;
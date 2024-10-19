
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-bill-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bill-simple?s=duotone money-bill-simple}
 * @preview ![money-bill-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTIgMjU2YTk2IDk2IDAgMSAwIDE5MiAwIDk2IDk2IDAgMSAwIC0xOTIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDY0QzI4LjcgNjQgMCA5Mi43IDAgMTI4TDAgMzg0YzAgMzUuMyAyOC43IDY0IDY0IDY0bDQ0OCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMjU2YzAtMzUuMy0yOC43LTY0LTY0LTY0TDY0IDY0em0yMjQgOTZhOTYgOTYgMCAxIDEgMCAxOTIgOTYgOTYgMCAxIDEgMC0xOTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const MoneyBillSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M192 256a96 96 0 1 0 192 0 96 96 0 1 0 -192 0z" />
            <path d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm224 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default MoneyBillSimple;
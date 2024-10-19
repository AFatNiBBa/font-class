
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-bill-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bill-simple?s=sharp-duotone-solid money-bill-simple}
 * @preview ![money-bill-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTIgMjU2YTk2IDk2IDAgMSAwIDE5MiAwIDk2IDk2IDAgMSAwIC0xOTIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTU3NiA2NEwwIDY0IDAgNDQ4bDU3NiAwIDAtMzg0ek0yODggMTYwYTk2IDk2IDAgMSAxIDAgMTkyIDk2IDk2IDAgMSAxIDAtMTkyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MoneyBillSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M192 256a96 96 0 1 0 192 0 96 96 0 1 0 -192 0z" />
            <path d="M576 64L0 64 0 448l576 0 0-384zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default MoneyBillSimple;
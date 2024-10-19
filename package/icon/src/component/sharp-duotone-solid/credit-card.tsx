
import { Icon, generic } from "../../index";

/**
 * A component that renders the `credit-card` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/credit-card?s=sharp-duotone-solid credit-card}
 * @preview ![credit-card](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDAgOTYgNTc2IDAgMC05NkwwIDMyek0wIDIyNEwwIDQ4MGw1NzYgMCAwLTI1NkwwIDIyNHpNOTYgMzUybDk2IDAgMCAzMi05NiAwIDAtMzJ6bTEyOCAwbDE2MCAwIDAgMzItMTYwIDAgMC0zMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTU3NiAyMjRIMFYxMjhINTc2djk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CreditCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32l0 96 576 0 0-96L0 32zM0 224L0 480l576 0 0-256L0 224zM96 352l96 0 0 32-96 0 0-32zm128 0l160 0 0 32-160 0 0-32z" />
            <path d="M576 224H0V128H576v96z" />
    </Icon>
);

export default CreditCard;
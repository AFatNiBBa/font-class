
import { Icon, generic } from "../../index";

/**
 * A component that renders the `credit-card` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/credit-card?s=duotone credit-card}
 * @preview ![credit-card](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2bDAgMzIgNTc2IDAgMC0zMmMwLTM1LjMtMjguNy02NC02NC02NEw2NCAzMkMyOC43IDMyIDAgNjAuNyAwIDk2ek0wIDIyNEwwIDQxNmMwIDM1LjMgMjguNyA2NCA2NCA2NGw0NDggMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTE5MkwwIDIyNHpNOTYgMzY4YzAtOC44IDcuMi0xNiAxNi0xNmw2NCAwYzguOCAwIDE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2bC02NCAwYy04LjggMC0xNi03LjItMTYtMTZ6bTEyOCAwYzAtOC44IDcuMi0xNiAxNi0xNmwxMjggMGM4LjggMCAxNiA3LjIgMTYgMTZzLTcuMiAxNi0xNiAxNmwtMTI4IDBjLTguOCAwLTE2LTcuMi0xNi0xNnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTU3NiAyMjRIMFYxMjhINTc2djk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CreditCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96l0 32 576 0 0-32c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM0 224L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192L0 224zM96 368c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16zm128 0c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z" />
            <path d="M576 224H0V128H576v96z" />
    </Icon>
);

export default CreditCard;
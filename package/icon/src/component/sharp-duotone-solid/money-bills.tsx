
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-bills` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bills?s=sharp-duotone-solid money-bills}
 * @preview ![money-bills](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2bDAgMjRMMCA0NTZsMCAyNCAyNCAwIDQ5NiAwIDI0IDAgMC00OC0yNCAwTDQ4IDQzMmwwLTMxMiAwLTI0TDAgOTZ6bTE2MCA2NGwwIDk2YzM1LjMgMCA2NCAyOC43IDY0IDY0bDI4OCAwYzAtMzUuMyAyOC43LTY0IDY0LTY0bDAtOTZjLTM1LjMgMC02NC0yOC43LTY0LTY0TDIyNCA5NmMwIDM1LjMtMjguNyA2NC02NCA2NHptMjg4IDQ4YTgwIDgwIDAgMSAxIC0xNjAgMCA4MCA4MCAwIDEgMSAxNjAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0MCAzMkw5NiAzMmwwIDM1MiA1NDQgMCAwLTM1MnpNNTEyIDk2YzAgMzUuMyAyOC43IDY0IDY0IDY0bDAgOTZjLTM1LjMgMC02NCAyOC43LTY0IDY0bC0yODggMGMwLTM1LjMtMjguNy02NC02NC02NGwwLTk2YzM1LjMgMCA2NC0yOC43IDY0LTY0bDI4OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MoneyBills: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96l0 24L0 456l0 24 24 0 496 0 24 0 0-48-24 0L48 432l0-312 0-24L0 96zm160 64l0 96c35.3 0 64 28.7 64 64l288 0c0-35.3 28.7-64 64-64l0-96c-35.3 0-64-28.7-64-64L224 96c0 35.3-28.7 64-64 64zm288 48a80 80 0 1 1 -160 0 80 80 0 1 1 160 0z" />
            <path d="M640 32L96 32l0 352 544 0 0-352zM512 96c0 35.3 28.7 64 64 64l0 96c-35.3 0-64 28.7-64 64l-288 0c0-35.3-28.7-64-64-64l0-96c35.3 0 64-28.7 64-64l288 0z" />
    </Icon>
);

export default MoneyBills;
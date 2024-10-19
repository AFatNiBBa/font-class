
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mandolin` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mandolin?s=sharp-duotone-solid mandolin}
 * @preview ![mandolin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMzNmMwIDk3LjIgNzguOCAxNzYgMTc2IDE3NmMxMzUuNSAwIDE0Ny43LTE4OS42IDE0Ni4yLTI3Ni45bC02Ni4yIDY2LjJjMCAuOSAuMSAxLjggLjEgMi43YzAgMjYuNS0yMS41IDQ4LTQ4IDQ4cy00OC0yMS41LTQ4LTQ4czIxLjUtNDggNDgtNDhjLjkgMCAxLjggMCAyLjcgLjFjMjIuMS0yMi4xIDQ0LjItNDQuMiA2Ni4yLTY2LjJDMTg5LjYgMTg4LjMgMCAyMDAuNSAwIDMzNnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ0OCAwTDM2OCA0OGwtMjUuNCA3Ni4xLTEzMiAxMzJjMjQuNCAxLjMgNDMuOSAyMC45IDQ1LjMgNDUuM2wxMzItMTMyTDQ2NCAxNDRsNDgtODBMNDQ4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Mandolin: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 336c0 97.2 78.8 176 176 176c135.5 0 147.7-189.6 146.2-276.9l-66.2 66.2c0 .9 .1 1.8 .1 2.7c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48c.9 0 1.8 0 2.7 .1c22.1-22.1 44.2-44.2 66.2-66.2C189.6 188.3 0 200.5 0 336z" />
            <path d="M448 0L368 48l-25.4 76.1-132 132c24.4 1.3 43.9 20.9 45.3 45.3l132-132L464 144l48-80L448 0z" />
    </Icon>
);

export default Mandolin;
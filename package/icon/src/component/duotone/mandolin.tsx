
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mandolin` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mandolin?s=duotone mandolin}
 * @preview ![mandolin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMzNmMwIDk3LjIgNzguOCAxNzYgMTc2IDE3NmMxMzUuNSAwIDE0Ny43LTE4OS42IDE0Ni4yLTI3Ni45bC02Ni4yIDY2LjJjMCAuOSAuMSAxLjggLjEgMi43YzAgMjYuNS0yMS41IDQ4LTQ4IDQ4cy00OC0yMS41LTQ4LTQ4czIxLjUtNDggNDgtNDhjLjkgMCAxLjggMCAyLjcgLjFjMjIuMS0yMi4xIDQ0LjItNDQuMiA2Ni4yLTY2LjJDMTg5LjYgMTg4LjMgMCAyMDAuNSAwIDMzNnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ2NSA3Yy03LjktNy45LTIwLjItOS4zLTI5LjctMy40bC02NCA0MGMtNS4xIDMuMi04LjggOC4yLTEwLjQgMTRMMzQyLjggMTI0IDIxMC43IDI1Ni4xYzI0LjQgMS4zIDQzLjkgMjAuOSA0NS4zIDQ1LjNMMzg4IDE2OS4ybDY2LjMtMTguMWM1LjgtMS42IDEwLjgtNS4zIDE0LTEwLjRsNDAtNjRjNS45LTkuNSA0LjUtMjEuOC0zLjQtMjkuN0w0NjUgN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const Mandolin: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 336c0 97.2 78.8 176 176 176c135.5 0 147.7-189.6 146.2-276.9l-66.2 66.2c0 .9 .1 1.8 .1 2.7c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48c.9 0 1.8 0 2.7 .1c22.1-22.1 44.2-44.2 66.2-66.2C189.6 188.3 0 200.5 0 336z" />
            <path d="M465 7c-7.9-7.9-20.2-9.3-29.7-3.4l-64 40c-5.1 3.2-8.8 8.2-10.4 14L342.8 124 210.7 256.1c24.4 1.3 43.9 20.9 45.3 45.3L388 169.2l66.3-18.1c5.8-1.6 10.8-5.3 14-10.4l40-64c5.9-9.5 4.5-21.8-3.4-29.7L465 7z" />
    </Icon>
);

export default Mandolin;
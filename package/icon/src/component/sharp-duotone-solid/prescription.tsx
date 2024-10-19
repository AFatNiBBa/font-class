
import { Icon, generic } from "../../index";

/**
 * A component that renders the `prescription` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/prescription?s=sharp-duotone-solid prescription}
 * @preview ![prescription](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMzAuNyA0NjRMMTc2IDUwOS4zbDIyLjYtMjIuNmMyOS44LTI5LjggNTkuNi01OS42IDg5LjQtODkuNGMxNS4xLTE1LjEgMzAuMi0zMC4yIDQ1LjMtNDUuM2MyOS44LTI5LjggNTkuNi01OS42IDg5LjQtODkuNEw0NDUuMyAyNDAgNDAwIDE5NC43bC0yMi42IDIyLjZjLTI5LjggMjkuOC01OS42IDU5LjYtODkuNCA4OS40Yy0xNS4xIDE1LjEtMzAuMiAzMC4yLTQ1LjMgNDUuM2wtODkuNCA4OS40TDEzMC43IDQ2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMEwzMiAwIDE3NiAwYzYxLjkgMCAxMTIgNTAuMSAxMTIgMTEyYzAgNTIuOC0zNi42IDk3LjEtODUuOCAxMDguOUwyODggMzA2LjcgMjQyLjcgMzUybC0xMjgtMTI4TDY0IDIyNGwwIDY0IDAgMzJMMCAzMjBsMC0zMiAwLTk2TDAgMzIgMCAwek0yODggMzk3LjNMMzMzLjMgMzUybDg5LjQgODkuNEw0NDUuMyA0NjQgNDAwIDUwOS4zbC0yMi42LTIyLjZMMjg4IDM5Ny4zek02NCAxNjBsMTEyIDBjMjYuNSAwIDQ4LTIxLjUgNDgtNDhzLTIxLjUtNDgtNDgtNDhMNjQgNjRsMCA5NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Prescription: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M130.7 464L176 509.3l22.6-22.6c29.8-29.8 59.6-59.6 89.4-89.4c15.1-15.1 30.2-30.2 45.3-45.3c29.8-29.8 59.6-59.6 89.4-89.4L445.3 240 400 194.7l-22.6 22.6c-29.8 29.8-59.6 59.6-89.4 89.4c-15.1 15.1-30.2 30.2-45.3 45.3l-89.4 89.4L130.7 464z" />
            <path d="M0 0L32 0 176 0c61.9 0 112 50.1 112 112c0 52.8-36.6 97.1-85.8 108.9L288 306.7 242.7 352l-128-128L64 224l0 64 0 32L0 320l0-32 0-96L0 32 0 0zM288 397.3L333.3 352l89.4 89.4L445.3 464 400 509.3l-22.6-22.6L288 397.3zM64 160l112 0c26.5 0 48-21.5 48-48s-21.5-48-48-48L64 64l0 96z" />
    </Icon>
);

export default Prescription;

import { Icon } from "../../index";

/**
 * A component that renders the `window-minimize` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-minimize?s=regular window-minimize}
 * @preview ![window-minimize](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjQgNDMyYy0xMy4zIDAtMjQgMTAuNy0yNCAyNHMxMC43IDI0IDI0IDI0bDQ2NCAwYzEzLjMgMCAyNC0xMC43IDI0LTI0cy0xMC43LTI0LTI0LTI0TDI0IDQzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const WindowMinimize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M24 432c-13.3 0-24 10.7-24 24s10.7 24 24 24l464 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 432z" />
    </Icon>
);

export default WindowMinimize;
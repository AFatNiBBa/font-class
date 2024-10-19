
import { Icon } from "../../index";

/**
 * A component that renders the `browser` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/browser?s=solid browser}
 * @preview ![browser](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA5NkMwIDYwLjcgMjguNyAzMiA2NCAzMmwzODQgMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDMyMGMwIDM1LjMtMjguNyA2NC02NCA2NEw2NCA0ODBjLTM1LjMgMC02NC0yOC43LTY0LTY0TDAgOTZ6bTY0IDMyYTMyIDMyIDAgMSAwIDY0IDAgMzIgMzIgMCAxIDAgLTY0IDB6bTM4NCAwYzAtMTMuMy0xMC43LTI0LTI0LTI0bC0yNDAgMGMtMTMuMyAwLTI0IDEwLjctMjQgMjRzMTAuNyAyNCAyNCAyNGwyNDAgMGMxMy4zIDAgMjQtMTAuNyAyNC0yNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Browser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 32a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm384 0c0-13.3-10.7-24-24-24l-240 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l240 0c13.3 0 24-10.7 24-24z" />
    </Icon>
);

export default Browser;
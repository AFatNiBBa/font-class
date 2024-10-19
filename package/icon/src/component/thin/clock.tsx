
import { Icon } from "../../index";

/**
 * A component that renders the `clock` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock?s=thin clock}
 * @preview ![clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDk2IDI1NkEyNDAgMjQwIDAgMSAxIDE2IDI1NmEyNDAgMjQwIDAgMSAxIDQ4MCAwek0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTI0OCAxMDRsMCAxNTJjMCAyLjcgMS4zIDUuMiAzLjYgNi43bDk2IDY0YzMuNyAyLjUgOC42IDEuNSAxMS4xLTIuMnMxLjUtOC42LTIuMi0xMS4xTDI2NCAyNTEuNyAyNjQgMTA0YzAtNC40LTMuNi04LTgtOHMtOCAzLjYtOCA4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Clock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 1 16 256a240 240 0 1 1 480 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM248 104l0 152c0 2.7 1.3 5.2 3.6 6.7l96 64c3.7 2.5 8.6 1.5 11.1-2.2s1.5-8.6-2.2-11.1L264 251.7 264 104c0-4.4-3.6-8-8-8s-8 3.6-8 8z" />
    </Icon>
);

export default Clock;
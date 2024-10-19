
import { Icon } from "../../index";

/**
 * A component that renders the `clock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock?s=sharp-thin clock}
 * @preview ![clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDk2IDI1NkEyNDAgMjQwIDAgMSAxIDE2IDI1NmEyNDAgMjQwIDAgMSAxIDQ4MCAwek0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTI0OCAxMDRsMCAxNTIgMCA0LjMgMy42IDIuNCA5NiA2NCA2LjcgNC40IDguOS0xMy4zLTYuNy00LjRMMjY0IDI1MS43IDI2NCAxMDRsMC04LTE2IDAgMCA4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Clock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 1 16 256a240 240 0 1 1 480 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM248 104l0 152 0 4.3 3.6 2.4 96 64 6.7 4.4 8.9-13.3-6.7-4.4L264 251.7 264 104l0-8-16 0 0 8z" />
    </Icon>
);

export default Clock;

import { Icon } from "../../index";

/**
 * A component that renders the `clock` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock?s=light clock}
 * @preview ![clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDgwIDI1NkEyMjQgMjI0IDAgMSAxIDMyIDI1NmEyMjQgMjI0IDAgMSAxIDQ0OCAwek0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6TTI0MCAxMTJsMCAxNDRjMCA1LjMgMi43IDEwLjMgNy4xIDEzLjNsOTYgNjRjNy40IDQuOSAxNy4zIDIuOSAyMi4yLTQuNHMyLjktMTcuMy00LjQtMjIuMkwyNzIgMjQ3LjQgMjcyIDExMmMwLTguOC03LjItMTYtMTYtMTZzLTE2IDcuMi0xNiAxNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Clock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 1 32 256a224 224 0 1 1 448 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM240 112l0 144c0 5.3 2.7 10.3 7.1 13.3l96 64c7.4 4.9 17.3 2.9 22.2-4.4s2.9-17.3-4.4-22.2L272 247.4 272 112c0-8.8-7.2-16-16-16s-16 7.2-16 16z" />
    </Icon>
);

export default Clock;
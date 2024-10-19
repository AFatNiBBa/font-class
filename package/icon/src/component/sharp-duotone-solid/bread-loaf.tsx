
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bread-loaf` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bread-loaf?s=sharp-duotone-solid bread-loaf}
 * @preview ![bread-loaf](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MmMwIDM1LjMgMjguNyA2NCA2NCA2NGwwIDIyNGMxMTcuNCAwIDIzNC43IDAgMzUyIDBsMC0yMjRjMzUuMyAwIDY0LTI4LjcgNjQtNjRDNDgwIDY0IDMwNCAzMiAyNDAgMzJTMCA2NCAwIDE5MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0MCAxOTJDNjQwIDY0IDQ2NCAzMiA0MDAgMzJMMjQwIDMyYzY0IDAgMjQwIDMyIDI0MCAxNjBjMCAzNS4zLTI4LjcgNjQtNjQgNjRsMCAyMjQgMTYwIDAgMC0yMjRjMzUuMyAwIDY0LTI4LjcgNjQtNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const BreadLoaf: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 192c0 35.3 28.7 64 64 64l0 224c117.4 0 234.7 0 352 0l0-224c35.3 0 64-28.7 64-64C480 64 304 32 240 32S0 64 0 192z" />
            <path d="M640 192C640 64 464 32 400 32L240 32c64 0 240 32 240 160c0 35.3-28.7 64-64 64l0 224 160 0 0-224c35.3 0 64-28.7 64-64z" />
    </Icon>
);

export default BreadLoaf;
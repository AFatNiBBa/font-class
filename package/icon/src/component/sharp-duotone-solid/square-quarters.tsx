
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-quarters` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-quarters?s=sharp-duotone-solid square-quarters}
 * @preview ![square-quarters](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA5NmwwIDMyMEwyMjQgMjU2IDY0IDk2ek0yMjQgMjU2TDM4NCA0MTZsMC0zMjBMMjI0IDI1NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCA5NmwwIDMyMEw2NCA0MTYgNjQgOTZsMzIwIDB6TTY0IDMyTDAgMzIgMCA5NiAwIDQxNmwwIDY0IDY0IDAgMzIwIDAgNjQgMCAwLTY0IDAtMzIwIDAtNjQtNjQgMEw2NCAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const SquareQuarters: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 96l0 320L224 256 64 96zM224 256L384 416l0-320L224 256z" />
            <path d="M384 96l0 320L64 416 64 96l320 0zM64 32L0 32 0 96 0 416l0 64 64 0 320 0 64 0 0-64 0-320 0-64-64 0L64 32z" />
    </Icon>
);

export default SquareQuarters;
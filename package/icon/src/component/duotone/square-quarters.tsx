
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-quarters` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-quarters?s=duotone square-quarters}
 * @preview ![square-quarters](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA5NmwwIDMyMEwyMjQgMjU2IDY0IDk2ek0yMjQgMjU2TDM4NCA0MTZsMC0zMjBMMjI0IDI1NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCA5NmwwIDMyMEw2NCA0MTYgNjQgOTZsMzIwIDB6TTY0IDMyQzI4LjcgMzIgMCA2MC43IDAgOTZMMCA0MTZjMCAzNS4zIDI4LjcgNjQgNjQgNjRsMzIwIDBjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC0zMjBjMC0zNS4zLTI4LjctNjQtNjQtNjRMNjQgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const SquareQuarters: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 96l0 320L224 256 64 96zM224 256L384 416l0-320L224 256z" />
            <path d="M384 96l0 320L64 416 64 96l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" />
    </Icon>
);

export default SquareQuarters;

import { Icon } from "../../index";

/**
 * A component that renders the `circle-envelope` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-envelope?s=sharp-solid circle-envelope}
 * @preview ![circle-envelope](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDUxMkEyNTYgMjU2IDAgMSAwIDI1NiAwYTI1NiAyNTYgMCAxIDAgMCA1MTJ6TTEyOCAyMDQuMWwwLTQ0LjEgMjU2IDAgMCA0NC4xTDI1NiAyNTQuOCAxMjggMjA0LjF6bTEzMy45IDgyLjhMMzg0IDIzOC41IDM4NCAzNTJsLTI1NiAwIDAtMTEzLjUgMTIyLjEgNDguNCA1LjkgMi4zIDUuOS0yLjN6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleEnvelope: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM128 204.1l0-44.1 256 0 0 44.1L256 254.8 128 204.1zm133.9 82.8L384 238.5 384 352l-256 0 0-113.5 122.1 48.4 5.9 2.3 5.9-2.3z" />
    </Icon>
);

export default CircleEnvelope;
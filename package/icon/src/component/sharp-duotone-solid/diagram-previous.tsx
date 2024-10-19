
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-previous` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-previous?s=sharp-duotone-solid diagram-previous}
 * @preview ![diagram-previous](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgMjI0bDEyOCAwIDAtMzIgMC0xMy4zIDkuNC05LjQgOTYtOTZMMjU2IDUwLjdsMjIuNiAyMi42IDk2IDk2IDkuNCA5LjQgMCAxMy4zIDAgMzIgMTI4IDAgMC0xOTJMMCAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTUxMiAyODhsMCAxOTJMMCA0ODAgMCAyODhsMjMyIDAgMC02NC03MiAwIDAtMzIgOTYtOTYgOTYgOTYgMCAzMi03MiAwIDAgNjQgMjMyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const DiagramPrevious: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 224l128 0 0-32 0-13.3 9.4-9.4 96-96L256 50.7l22.6 22.6 96 96 9.4 9.4 0 13.3 0 32 128 0 0-192L0 32z" />
            <path d="M512 288l0 192L0 480 0 288l232 0 0-64-72 0 0-32 96-96 96 96 0 32-72 0 0 64 232 0z" />
    </Icon>
);

export default DiagramPrevious;
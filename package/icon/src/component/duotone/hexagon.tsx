
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hexagon` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon?s=duotone hexagon}
 * @preview ![hexagon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNy4xIDIyMGMtMTIuOSAyMi4zLTEyLjkgNDkuNyAwIDcybDg4LjMgMTUyLjljMTIuOSAyMi4zIDM2LjYgMzYgNjIuNCAzNmwxNzYuNiAwYzI1LjcgMCA0OS41LTEzLjcgNjIuNC0zNkw0OTQuOSAyOTJjMTIuOS0yMi4zIDEyLjktNDkuNyAwLTcyTDQwNi42IDY3LjFjLTEyLjktMjIuMy0zNi42LTM2LTYyLjQtMzZsLTE3Ni42IDBjLTI1LjcgMC00OS41IDEzLjctNjIuNCAzNkwxNy4xIDIyMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const Hexagon: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M17.1 220c-12.9 22.3-12.9 49.7 0 72l88.3 152.9c12.9 22.3 36.6 36 62.4 36l176.6 0c25.7 0 49.5-13.7 62.4-36L494.9 292c12.9-22.3 12.9-49.7 0-72L406.6 67.1c-12.9-22.3-36.6-36-62.4-36l-176.6 0c-25.7 0-49.5 13.7-62.4 36L17.1 220z" />
    </Icon>
);

export default Hexagon;
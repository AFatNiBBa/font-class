
import { Icon, generic } from "../../index";

/**
 * A component that renders the `podium-star` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/podium-star?s=sharp-duotone-solid podium-star}
 * @preview ![podium-star](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00NC40IDE5MmwzNTkuMSAwTDM2OCA1MTIgODAgNTEyIDQ0LjQgMTkyem04MC42IDEzNS45bDUxLjQgNDcuNi0xMy43IDY4LjdMMjI0IDQwOS45bDYxLjEgMzQuMi0xMy43LTY4LjcgNTEuNC00Ny42LTY5LjYtOC4yTDIyNCAyNTZsLTI5LjMgNjMuNi02OS42IDguMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4OCAwTDE3NiAwbDAgMjQtOCAwYy00OC42IDAtODggMzkuNC04OCA4OGwwIDMyLTU2IDBMMCAxNDRsMCA0OCAyNCAwIDQwMCAwIDI0IDAgMC00OC0yNCAwLTI5NiAwIDAtMzJjMC0yMi4xIDE3LjktNDAgNDAtNDBsOCAwIDAgMjQgMTEyIDBjMjYuNSAwIDQ4LTIxLjUgNDgtNDhzLTIxLjUtNDgtNDgtNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const PodiumStar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M44.4 192l359.1 0L368 512 80 512 44.4 192zm80.6 135.9l51.4 47.6-13.7 68.7L224 409.9l61.1 34.2-13.7-68.7 51.4-47.6-69.6-8.2L224 256l-29.3 63.6-69.6 8.2z" />
            <path d="M288 0L176 0l0 24-8 0c-48.6 0-88 39.4-88 88l0 32-56 0L0 144l0 48 24 0 400 0 24 0 0-48-24 0-296 0 0-32c0-22.1 17.9-40 40-40l8 0 0 24 112 0c26.5 0 48-21.5 48-48s-21.5-48-48-48z" />
    </Icon>
);

export default PodiumStar;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `files` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/files?s=duotone files}
 * @preview ![files](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiA2NGwwIDI4OGMwIDM1LjMgMjguNyA2NCA2NCA2NGwyMjQgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTI1Ni02NCAwYy0xNy43IDAtMzItMTQuMy0zMi0zMmwwLTY0TDE2MCAwQzEyNC43IDAgOTYgMjguNyA5NiA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM1MiAwbDAgNjRjMCAxNy43IDE0LjMgMzIgMzIgMzJsNjQgMEwzNTIgMHpNNDggMTIwYzAtMTMuMy0xMC43LTI0LTI0LTI0UzAgMTA2LjcgMCAxMjBMMCAzNzZjMCA3NS4xIDYwLjkgMTM2IDEzNiAxMzZsMTkyIDBjMTMuMyAwIDI0LTEwLjcgMjQtMjRzLTEwLjctMjQtMjQtMjRsLTE5MiAwYy00OC42IDAtODgtMzkuNC04OC04OGwwLTI1NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Files: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 64l0 288c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-256-64 0c-17.7 0-32-14.3-32-32l0-64L160 0C124.7 0 96 28.7 96 64z" />
            <path d="M352 0l0 64c0 17.7 14.3 32 32 32l64 0L352 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 376c0 75.1 60.9 136 136 136l192 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-192 0c-48.6 0-88-39.4-88-88l0-256z" />
    </Icon>
);

export default Files;
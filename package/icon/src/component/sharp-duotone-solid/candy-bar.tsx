
import { Icon, generic } from "../../index";

/**
 * A component that renders the `candy-bar` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candy-bar?s=sharp-duotone-solid candy-bar}
 * @preview ![candy-bar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yODggNjRsMzUyIDAgMCAzODQtMzUyIDAgMC05NiAwLTMyIDAtOTYgMC0zMiAwLTEyOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMjI0bDAgOTYgMTI4IDAgMC05NkwwIDIyNHpNMCAzNTJsMCA5NiAxMjggMCAwLTk2TDAgMzUyem0xNjAgOTZsMTI4IDAgMC05Ni0xMjggMCAwIDk2ek0yODggMzIwbDAtOTYtMTI4IDAgMCA5NiAxMjggMHptMC0xMjhsMC0xMjhMMTYwIDY0bDAgMTI4IDEyOCAwek0zMy4xIDE5Mmw5NC45IDBzMCAwIDAgMGwwLTMyczAgMCAwIDBsMC02Mi45QzExMy42IDExMS4zIDkzLjggMTIwIDcyIDEyMGMtNi4yIDAtMTIuMi0uNy0xOC0yYzEuMyA1LjggMiAxMS44IDIgMThjMCAyMS44LTguNyA0MS42LTIyLjkgNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CandyBar: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M288 64l352 0 0 384-352 0 0-96 0-32 0-96 0-32 0-128z" />
            <path d="M0 224l0 96 128 0 0-96L0 224zM0 352l0 96 128 0 0-96L0 352zm160 96l128 0 0-96-128 0 0 96zM288 320l0-96-128 0 0 96 128 0zm0-128l0-128L160 64l0 128 128 0zM33.1 192l94.9 0s0 0 0 0l0-32s0 0 0 0l0-62.9C113.6 111.3 93.8 120 72 120c-6.2 0-12.2-.7-18-2c1.3 5.8 2 11.8 2 18c0 21.8-8.7 41.6-22.9 56z" />
    </Icon>
);

export default CandyBar;
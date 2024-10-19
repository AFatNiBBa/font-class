
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-square-triangle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-square-triangle?s=sharp-duotone-solid arrow-down-square-triangle}
 * @preview ![arrow-down-square-triangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMDQgNDgwTDQxNiAyODggNTI4IDQ4MGwtMjI0IDB6TTMyMCAzMmwxOTIgMCAwIDE5Mi0xOTIgMCAwLTE5MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE2MCA0ODBsMjMuNy0yNiA4MC04OCAyMS41LTIzLjctNDcuNC00My4xLTIxLjUgMjMuN0wxOTIgMzQ5LjdsMC0yODUuMiAwLTMyLTY0IDAgMCAzMiAwIDI4NS4yLTI0LjMtMjYuOEw4Mi4yIDI5OS4yIDM0LjggMzQyLjMgNTYuMyAzNjZsODAgODhMMTYwIDQ4MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ArrowDownSquareTriangle: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M304 480L416 288 528 480l-224 0zM320 32l192 0 0 192-192 0 0-192z" />
            <path d="M160 480l23.7-26 80-88 21.5-23.7-47.4-43.1-21.5 23.7L192 349.7l0-285.2 0-32-64 0 0 32 0 285.2-24.3-26.8L82.2 299.2 34.8 342.3 56.3 366l80 88L160 480z" />
    </Icon>
);

export default ArrowDownSquareTriangle;
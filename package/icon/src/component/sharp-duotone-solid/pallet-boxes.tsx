
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pallet-boxes` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pallet-boxes?s=sharp-duotone-solid pallet-boxes}
 * @preview ![pallet-boxes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMGwwIDY0IDMyIDAgMzIgMCAwIDY0LTMyIDBMMCA0NDhsMCA2NCAzMiAwIDMyIDAgMzIgMCAzMiAwIDE2MCAwIDMyIDAgMzIgMCAxNjAgMCAzMiAwIDMyIDAgMzIgMCAzMiAwIDAtNjQtMzIgMC0zMiAwIDAtNjQgMzIgMCAzMiAwIDAtNjQtMzIgMC0zMiAwLTMyIDAtMzIgMC0xNjAgMC0zMiAwLTMyIDAtMTYwIDAtMzIgMC0zMiAwLTMyIDBMMCAzMjB6bTEyOCA2NGwxNjAgMCAwIDY0LTE2MCAwIDAtNjR6bTIyNCAwbDE2MCAwIDAgNjQtMTYwIDAgMC02NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyMCAwTDY0IDBsMCAyNTYgMjU2IDBMMzIwIDB6TTU3NiA2NEwzODQgNjRsMCAxOTIgMTkyIDAgMC0xOTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const PalletBoxes: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 320l0 64 32 0 32 0 0 64-32 0L0 448l0 64 32 0 32 0 32 0 32 0 160 0 32 0 32 0 160 0 32 0 32 0 32 0 32 0 0-64-32 0-32 0 0-64 32 0 32 0 0-64-32 0-32 0-32 0-32 0-160 0-32 0-32 0-160 0-32 0-32 0-32 0L0 320zm128 64l160 0 0 64-160 0 0-64zm224 0l160 0 0 64-160 0 0-64z" />
            <path d="M320 0L64 0l0 256 256 0L320 0zM576 64L384 64l0 192 192 0 0-192z" />
    </Icon>
);

export default PalletBoxes;
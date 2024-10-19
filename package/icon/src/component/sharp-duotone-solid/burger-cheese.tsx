
import { Icon, generic } from "../../index";

/**
 * A component that renders the `burger-cheese` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burger-cheese?s=sharp-duotone-solid burger-cheese}
 * @preview ![burger-cheese](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAxOTJzMC0xNjAgMjI0LTE2MHMyMjQgMTYwIDIyNCAxNjBsMCAzMkwzMiAyMjRsMC0zMnptMCAxOTJsNDQ4IDAgMCA5NkwzMiA0ODBsMC05NnptODAtMjU2YTE2IDE2IDAgMSAwIDMyIDAgMTYgMTYgMCAxIDAgLTMyIDB6TTIyNCAyNTZjNjQgMCAxMjggMCAxOTIgMGMtMzIgMjEuMy02NCA0Mi43LTk2IDY0Yy0zMi0yMS4zLTY0LTQyLjctOTYtNjR6TTI0MCA5NmExNiAxNiAwIDEgMCAzMiAwIDE2IDE2IDAgMSAwIC0zMiAwem0xMjggMzJhMTYgMTYgMCAxIDAgMzIgMCAxNiAxNiAwIDEgMCAtMzIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyMCAzMjBsLTk2LTY0LTMyIDBzMCAwIDAgMEwxNiAyNTZsMCA5NiA0ODAgMCAwLTk2LTQ4IDBzMCAwIDAgMGwtMzIgMC05NiA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BurgerCheese: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 192s0-160 224-160s224 160 224 160l0 32L32 224l0-32zm0 192l448 0 0 96L32 480l0-96zm80-256a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zM224 256c64 0 128 0 192 0c-32 21.3-64 42.7-96 64c-32-21.3-64-42.7-96-64zM240 96a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm128 32a16 16 0 1 0 32 0 16 16 0 1 0 -32 0z" />
            <path d="M320 320l-96-64-32 0s0 0 0 0L16 256l0 96 480 0 0-96-48 0s0 0 0 0l-32 0-96 64z" />
    </Icon>
);

export default BurgerCheese;
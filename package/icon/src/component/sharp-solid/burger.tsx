
import { Icon } from "../../index";

/**
 * A component that renders the `burger` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burger?s=sharp-solid burger}
 * @preview ![burger](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMjI0bDAtMzJzMC0xNjAgMjI0LTE2MHMyMjQgMTYwIDIyNCAxNjBsMCAzMkwzMiAyMjR6bTExMi05NmExNiAxNiAwIDEgMCAtMzIgMCAxNiAxNiAwIDEgMCAzMiAwem0yNDAgMTZhMTYgMTYgMCAxIDAgMC0zMiAxNiAxNiAwIDEgMCAwIDMyek0yNzIgOTZhMTYgMTYgMCAxIDAgLTMyIDAgMTYgMTYgMCAxIDAgMzIgMHpNMTYgMzUybDAtOTYgNDgwIDAgMCA5NkwxNiAzNTJ6TTMyIDQ4MGwwLTk2IDQ0OCAwIDAgOTZMMzIgNDgweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Burger: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 224l0-32s0-160 224-160s224 160 224 160l0 32L32 224zm112-96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM16 352l0-96 480 0 0 96L16 352zM32 480l0-96 448 0 0 96L32 480z" />
    </Icon>
);

export default Burger;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `fire-extinguisher` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fire-extinguisher?s=sharp-duotone-solid fire-extinguisher}
 * @preview ![fire-extinguisher](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yLjUgMTU5LjVDMjYuNyAxMDkuOCA3Mi43IDcyLjYgMTI4IDYwLjRjMCAxNi41IDAgMzMuMSAwIDQ5LjZjLTM2LjIgMTEuMS02NiAzNi45LTgyLjMgNzAuNWwtNDMuMS0yMXpNNjQgNDE2bDIyNCAwIDAgOTZMNjQgNTEyYzAtMzIgMC02NCAwLTk2ek0yMjQgNTZsNjQgMCAwIDQ4LTY0IDAgMC00OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTUxMiAxNjBMNTEyIDAgMjg4IDMybDAgOTYgMjI0IDMyek0yMjQgMEwxMjggMGwwIDEzOC44Yy0zNy44IDE4LTY0IDU2LjUtNjQgMTAxLjJsMCAxNzYgMjI0IDAgMC0xNzZjMC00NC43LTI2LjItODMuMi02NC0xMDEuMkwyMjQgMHpNMTc2IDY0YTE2IDE2IDAgMSAxIDAgMzIgMTYgMTYgMCAxIDEgMC0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const FireExtinguisher: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M2.5 159.5C26.7 109.8 72.7 72.6 128 60.4c0 16.5 0 33.1 0 49.6c-36.2 11.1-66 36.9-82.3 70.5l-43.1-21zM64 416l224 0 0 96L64 512c0-32 0-64 0-96zM224 56l64 0 0 48-64 0 0-48z" />
            <path d="M512 160L512 0 288 32l0 96 224 32zM224 0L128 0l0 138.8c-37.8 18-64 56.5-64 101.2l0 176 224 0 0-176c0-44.7-26.2-83.2-64-101.2L224 0zM176 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default FireExtinguisher;
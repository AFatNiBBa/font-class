
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paragraph-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paragraph-left?s=sharp-duotone-solid paragraph-left}
 * @preview ![paragraph-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAxMTJjMCA2MS45IDUwLjEgMTEyIDExMiAxMTJsMTYgMCAwIDY0IDAgMzIgNjQgMCAwLTMyIDAtMjI0IDMyIDAgMCAyMjQgMCAzMiA2NCAwIDAtMzIgMC0yMjQgMzIgMCAwLTY0TDMyMCAwIDE2MCAwIDE0NCAwQzgyLjEgMCAzMiA1MC4xIDMyIDExMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEyOCAzODRsMC02NC0zMiAwTDAgNDE2bDk2IDk2IDMyIDAgMC02NCAyMjQgMCAzMiAwIDAtNjQtMzIgMC0yMjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ParagraphLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 112c0 61.9 50.1 112 112 112l16 0 0 64 0 32 64 0 0-32 0-224 32 0 0 224 0 32 64 0 0-32 0-224 32 0 0-64L320 0 160 0 144 0C82.1 0 32 50.1 32 112z" />
            <path d="M128 384l0-64-32 0L0 416l96 96 32 0 0-64 224 0 32 0 0-64-32 0-224 0z" />
    </Icon>
);

export default ParagraphLeft;
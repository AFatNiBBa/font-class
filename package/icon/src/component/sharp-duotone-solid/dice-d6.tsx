
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dice-d6` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d6?s=sharp-duotone-solid dice-d6}
 * @preview ![dice-d6](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiAxMTJMMjI0IDI0MCA0MzIgMTEyIDIyNCAwIDE2IDExMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMTQ0TDIwOCAyNzJsMCAyNDBMMCAzODQgMCAxNDR6bTQ0OCAwbDAgMjQwTDI0MCA1MTJsMC0yNDBMNDQ4IDE0NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const DiceD6: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 112L224 240 432 112 224 0 16 112z" />
            <path d="M0 144L208 272l0 240L0 384 0 144zm448 0l0 240L240 512l0-240L448 144z" />
    </Icon>
);

export default DiceD6;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `candle-holder` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candle-holder?s=sharp-duotone-solid candle-holder}
 * @preview ![candle-holder](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ2NGwwIDQ4IDI0IDAgMzUyIDBjMzkuOCAwIDcyLTMyLjIgNzItNzJzLTMyLjItNzItNzItNzJzLTcyIDMyLjItNzIgNzJjMCA4LjQgMS40IDE2LjUgNC4xIDI0TDI1NiA0NjQgNjQgNDY0bC00MCAwTDAgNDY0ek04MCAxMTJjMCA0NC4yIDM1LjggODAgODAgODBzODAtMzUuOCA4MC04MEMyNDAgNjQgMTYwIDAgMTYwIDBzLTgwIDY0LTgwIDExMnpNNDAwIDQ0MGEyNCAyNCAwIDEgMSAtNDggMCAyNCAyNCAwIDEgMSA0OCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTI4IDIyNGwtNjQgMCAwIDI0MCAxOTIgMCAwLTI0MC05NiAwIDAgNDggMCAxNi0zMiAwIDAtMTYgMC00OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CandleHolder: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 464l0 48 24 0 352 0c39.8 0 72-32.2 72-72s-32.2-72-72-72s-72 32.2-72 72c0 8.4 1.4 16.5 4.1 24L256 464 64 464l-40 0L0 464zM80 112c0 44.2 35.8 80 80 80s80-35.8 80-80C240 64 160 0 160 0s-80 64-80 112zM400 440a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
            <path d="M128 224l-64 0 0 240 192 0 0-240-96 0 0 48 0 16-32 0 0-16 0-48z" />
    </Icon>
);

export default CandleHolder;
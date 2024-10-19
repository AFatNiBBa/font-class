
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bus-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bus-simple?s=sharp-duotone-solid bus-simple}
 * @preview ![bus-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA0NDhsOTYgMCAwIDY0LTk2IDAgMC02NHpNNjQgOTZsMzIwIDAgMCAxOTJMNjQgMjg4IDY0IDk2ek0zMjAgNDQ4bDk2IDAgMCA2NC05NiAwIDAtNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMjQgMEMzNDguOCAwIDQ0OCA0OCA0NDggNDhsMCA0OCAwIDM1MkwwIDQ0OCAwIDk2IDAgNDhTOTkuMiAwIDIyNCAwek02NCAyODhsMzIwIDAgMC0xOTJMNjQgOTZsMCAxOTJ6TTgwIDQwMGEzMiAzMiAwIDEgMCAwLTY0IDMyIDMyIDAgMSAwIDAgNjR6bTI4OCAwYTMyIDMyIDAgMSAwIDAtNjQgMzIgMzIgMCAxIDAgMCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BusSimple: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 448l96 0 0 64-96 0 0-64zM64 96l320 0 0 192L64 288 64 96zM320 448l96 0 0 64-96 0 0-64z" />
            <path d="M224 0C348.8 0 448 48 448 48l0 48 0 352L0 448 0 96 0 48S99.2 0 224 0zM64 288l320 0 0-192L64 96l0 192zM80 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default BusSimple;
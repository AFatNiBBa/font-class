
import { Icon, generic } from "../../index";

/**
 * A component that renders the `objects-column` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-column?s=sharp-duotone-solid objects-column}
 * @preview ![objects-column](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgMzJsMCAxMjggMTkyIDAgMC0xMjhMMjU2IDMyem0wIDE5MmwwIDI1NiAxOTIgMCAwLTI1Ni0xOTIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiAzMkwwIDMyIDAgMjg4bDE5MiAwIDAtMjU2em0wIDMyMEwwIDM1MiAwIDQ4MGwxOTIgMCAwLTEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ObjectsColumn: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M256 32l0 128 192 0 0-128L256 32zm0 192l0 256 192 0 0-256-192 0z" />
            <path d="M192 32L0 32 0 288l192 0 0-256zm0 320L0 352 0 480l192 0 0-128z" />
    </Icon>
);

export default ObjectsColumn;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `gem` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gem?s=sharp-duotone-solid gem}
 * @preview ![gem](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIwOEwxMTIgMzJsMjg4IDBMNTEyIDIwOCAyNTYgNDgwIDAgMjA4em00OCAwbDIwOCAyNCAyMDgtMjRMMjk5LjYgMTg5IDM3NiA2NCAyNTYgMTc3LjcgMTM2IDY0bDc2LjQgMTI1TDQ4IDIwOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiAxNzcuN0wzNzYgNjQgMjk5LjYgMTg5IDQ2NCAyMDggMjU2IDIzMiA0OCAyMDhsMTY0LjQtMTlMMTM2IDY0IDI1NiAxNzcuN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const Gem: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 208L112 32l288 0L512 208 256 480 0 208zm48 0l208 24 208-24L299.6 189 376 64 256 177.7 136 64l76.4 125L48 208z" />
            <path d="M256 177.7L376 64 299.6 189 464 208 256 232 48 208l164.4-19L136 64 256 177.7z" />
    </Icon>
);

export default Gem;
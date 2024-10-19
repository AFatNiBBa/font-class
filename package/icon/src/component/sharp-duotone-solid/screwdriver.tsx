
import { Icon, generic } from "../../index";

/**
 * A component that renders the `screwdriver` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screwdriver?s=sharp-duotone-solid screwdriver}
 * @preview ![screwdriver](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMTUgMjYzTDI0OSAyOTdsMTA1LTEwNSA2Mi4xIDBMNTEyIDY0IDQ0OCAwIDMyMCA5NmwwIDYyLjFMMjE1IDI2M3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgNDE2bDk2IDk2TDI4MCAzMjhsLTk2LTk2TDAgNDE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Screwdriver: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M215 263L249 297l105-105 62.1 0L512 64 448 0 320 96l0 62.1L215 263z" />
            <path d="M0 416l96 96L280 328l-96-96L0 416z" />
    </Icon>
);

export default Screwdriver;
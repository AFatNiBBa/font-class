
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-ring` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-ring?s=duotone square-ring}
 * @preview ![square-ring](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2TDAgNDE2YzAgMzUuMyAyOC43IDY0IDY0IDY0bDMyMCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMzIwYzAtMzUuMy0yOC43LTY0LTY0LTY0TDY0IDMyQzI4LjcgMzIgMCA2MC43IDAgOTZ6TTM4NCAyNTZBMTYwIDE2MCAwIDEgMSA2NCAyNTZhMTYwIDE2MCAwIDEgMSAzMjAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIyNCAxNjBhOTYgOTYgMCAxIDAgMCAxOTIgOTYgOTYgMCAxIDAgMC0xOTJ6bTE2MCA5NkExNjAgMTYwIDAgMSAxIDY0IDI1NmExNjAgMTYwIDAgMSAxIDMyMCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SquareRing: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM384 256A160 160 0 1 1 64 256a160 160 0 1 1 320 0z" />
            <path d="M224 160a96 96 0 1 0 0 192 96 96 0 1 0 0-192zm160 96A160 160 0 1 1 64 256a160 160 0 1 1 320 0z" />
    </Icon>
);

export default SquareRing;
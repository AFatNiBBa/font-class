
import { Icon, generic } from "../../index";

/**
 * A component that renders the `g` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/g?s=sharp-duotone-solid g}
 * @preview ![g](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgOTZDMTM1LjYgOTYgNjQgMTY3LjYgNjQgMjU2czcxLjYgMTYwIDE2MCAxNjBjNzcuNCAwIDE0Mi01NSAxNTYuOC0xMjhMMjI0IDI4OGwwLTY0IDE5MiAwIDMyIDAgMCAzMmMwIDEyMy43LTEwMC4zIDIyNC0yMjQgMjI0UzAgMzc5LjcgMCAyNTZTMTAwLjMgMzIgMjI0IDMyYzcwLjggMCAxMzQgMzIuOSAxNzUgODQuMWwtNTAgNDBDMzE5LjYgMTE5LjQgMjc0LjYgOTYgMjI0IDk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const G: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M224 96C135.6 96 64 167.6 64 256s71.6 160 160 160c77.4 0 142-55 156.8-128L224 288l0-64 192 0 32 0 0 32c0 123.7-100.3 224-224 224S0 379.7 0 256S100.3 32 224 32c70.8 0 134 32.9 175 84.1l-50 40C319.6 119.4 274.6 96 224 96z" />
    </Icon>
);

export default G;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `paintbrush` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paintbrush?s=sharp-duotone-solid paintbrush}
 * @preview ![paintbrush](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ0OGwwIDY0IDMyIDAgMTQ0IDBjMi43LS4xIDUuMyAwIDggMGM2Ni4zIDAgMTIwLTUzLjcgMTIwLTEyMGMwLTIuOC0uMS01LjUtLjItOC4zQzI3MS44IDM0Ni41IDIzOS45IDMwOS4yIDIwOCAyNzJsLTI0IDBjLTY2LjMgMC0xMjAgNTMuNy0xMjAgMTIwbDAgNTYtMzIgMEwwIDQ0OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI0MCAxOTJMNTEyIDBsNjQgNjRMMzg0IDM1MmwtODAgMzJMMjA4IDI3MmwzMi04MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Paintbrush: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 448l0 64 32 0 144 0c2.7-.1 5.3 0 8 0c66.3 0 120-53.7 120-120c0-2.8-.1-5.5-.2-8.3C271.8 346.5 239.9 309.2 208 272l-24 0c-66.3 0-120 53.7-120 120l0 56-32 0L0 448z" />
            <path d="M240 192L512 0l64 64L384 352l-80 32L208 272l32-80z" />
    </Icon>
);

export default Paintbrush;
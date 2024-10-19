
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-right?s=duotone arrow-up-right}
 * @preview ![arrow-up-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAzODRjMCA4LjIgMy4xIDE2LjQgOS40IDIyLjZjMTIuNSAxMi41IDMyLjggMTIuNSA0NS4zIDBMMjg4IDIwNS4zbDAtNDUuMy00NS4zIDBMNDEuNCAzNjEuNEMzNS4xIDM2Ny42IDMyIDM3NS44IDMyIDM4NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM1MiAxMjhjMC0xNy43LTE0LjMtMzItMzItMzJMOTYgOTZjLTE3LjcgMC0zMiAxNC4zLTMyIDMyczE0LjMgMzIgMzIgMzJsMTkyIDAgMCAxOTJjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMmwwLTIyNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ArrowUpRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 384c0 8.2 3.1 16.4 9.4 22.6c12.5 12.5 32.8 12.5 45.3 0L288 205.3l0-45.3-45.3 0L41.4 361.4C35.1 367.6 32 375.8 32 384z" />
            <path d="M352 128c0-17.7-14.3-32-32-32L96 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0 0 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224z" />
    </Icon>
);

export default ArrowUpRight;
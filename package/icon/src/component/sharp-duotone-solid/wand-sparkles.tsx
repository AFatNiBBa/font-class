
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wand-sparkles` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wand-sparkles?s=sharp-duotone-solid wand-sparkles}
 * @preview ![wand-sparkles](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE0NGw1NiAyNCAyNCA1NiAyNC01NiA1Ni0yNC01Ni0yNEw4MCA2NCA1NiAxMjAgMCAxNDR6TTE2MCA0OGwzMiAxNiAxNiAzMiAxNi0zMiAzMi0xNkwyMjQgMzIgMjA4IDAgMTkyIDMyIDE2MCA0OHpNMzUyIDM2OGw1NiAyNCAyNCA1NiAyNC01NiA1Ni0yNC01Ni0yNC0yNC01Ni0yNCA1Ni01NiAyNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTgwIDUxMkwwIDQzMiAxMjggMzE2LjhsMC02MC44IDY3LjYgMEw0ODAgMGwzMiAzMkw0MTYgMTM4LjdsMCA1My4zLTQ4IDBMODAgNTEyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const WandSparkles: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 144l56 24 24 56 24-56 56-24-56-24L80 64 56 120 0 144zM160 48l32 16 16 32 16-32 32-16L224 32 208 0 192 32 160 48zM352 368l56 24 24 56 24-56 56-24-56-24-24-56-24 56-56 24z" />
            <path d="M80 512L0 432 128 316.8l0-60.8 67.6 0L480 0l32 32L416 138.7l0 53.3-48 0L80 512z" />
    </Icon>
);

export default WandSparkles;
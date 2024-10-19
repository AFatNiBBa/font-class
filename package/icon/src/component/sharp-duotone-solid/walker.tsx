
import { Icon, generic } from "../../index";

/**
 * A component that renders the `walker` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/walker?s=sharp-duotone-solid walker}
 * @preview ![walker](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00NDggNDQ4LjFBNjQgNjQgMCAxIDEgMzIwIDQ0OGE2NCA2NCAwIDEgMSAxMjggLjF6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMTguNyAwTDE0NCAwIDM4NCAwbDMyIDAgMCAzMiAwIDM2MC42Yy05LjQtNS40LTIwLjMtOC42LTMyLTguNnMtMjIuNiAzLjEtMzIgOC42TDM1MiAyMjRsLTIyMC41IDBMNzEuMSA0NzkuNGwtNy40IDMxLjFMMS41IDQ5NS44bDcuNC0zMS4xIDEwNC00NDBMMTE4LjcgMHpNMzUyIDY0TDE2OS4zIDY0bC0yMi43IDk2TDM1MiAxNjBsMC05NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Walker: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M448 448.1A64 64 0 1 1 320 448a64 64 0 1 1 128 .1z" />
            <path d="M118.7 0L144 0 384 0l32 0 0 32 0 360.6c-9.4-5.4-20.3-8.6-32-8.6s-22.6 3.1-32 8.6L352 224l-220.5 0L71.1 479.4l-7.4 31.1L1.5 495.8l7.4-31.1 104-440L118.7 0zM352 64L169.3 64l-22.7 96L352 160l0-96z" />
    </Icon>
);

export default Walker;
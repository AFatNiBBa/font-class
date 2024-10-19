
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bell` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell?s=duotone bell}
 * @preview ![bell](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM4NGMwIDQuNCAuOSA4LjkgMi44IDEzLjFDOCA0MDguNiAxOS40IDQxNiAzMiA0MTZsMzg0IDBjMTIuNiAwIDI0LTcuNCAyOS4yLTE4LjljMS45LTQuMiAyLjgtOC43IDIuOC0xMy4xYzAtNy43LTIuOC0xNS4zLTguMS0yMS4zbC03LjQtOC4zQzQwMS4zIDMxOS4yIDM4NCAyNzMuOSAzODQgMjI2LjhsMC0xOC44YzAtNzcuNC01NS0xNDItMTI4LTE1Ni44TDI1NiAzMmMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMmwwIDE5LjJDMTE5IDY2IDY0IDEzMC42IDY0IDIwOGwwIDE4LjhjMCA0Ny0xNy4zIDkyLjQtNDguNSAxMjcuNmwtNy40IDguM0MyLjggMzY4LjcgMCAzNzYuMyAwIDM4NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4OCA0NDhjMCAxNy02LjcgMzMuMy0xOC43IDQ1LjNzLTI4LjMgMTguNy00NS4zIDE4LjdzLTMzLjMtNi43LTQ1LjMtMTguN3MtMTguNy0yOC4zLTE4LjctNDUuM2w2NCAwaDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Bell: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 384c0 4.4 .9 8.9 2.8 13.1C8 408.6 19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9c1.9-4.2 2.8-8.7 2.8-13.1c0-7.7-2.8-15.3-8.1-21.3l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3C2.8 368.7 0 376.3 0 384z" />
            <path d="M288 448c0 17-6.7 33.3-18.7 45.3s-28.3 18.7-45.3 18.7s-33.3-6.7-45.3-18.7s-18.7-28.3-18.7-45.3l64 0h64z" />
    </Icon>
);

export default Bell;
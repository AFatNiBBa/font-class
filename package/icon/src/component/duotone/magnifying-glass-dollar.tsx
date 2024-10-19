
import { Icon, generic } from "../../index";

/**
 * A component that renders the `magnifying-glass-dollar` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass-dollar?s=duotone magnifying-glass-dollar}
 * @preview ![magnifying-glass-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIwOGEyMDggMjA4IDAgMSAwIDQxNiAwQTIwOCAyMDggMCAxIDAgMCAyMDh6TTIyOCAzMTJjMCAuMyAwIC43IDAgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIyOCAxMDRjMC0xMS05LTIwLTIwLTIwcy0yMCA5LTIwIDIwbDAgMTRjLTcuNiAxLjctMTUuMiA0LjQtMjIuMiA4LjVjLTEzLjkgOC4zLTI1LjkgMjIuOC0yNS44IDQzLjljLjEgMjAuMyAxMiAzMy4xIDI0LjcgNDAuN2MxMSA2LjYgMjQuNyAxMC44IDM1LjYgMTRsMS43IC41YzEyLjYgMy44IDIxLjggNi44IDI4IDEwLjdjNS4xIDMuMiA1LjggNS40IDUuOSA4LjJjLjEgNS0xLjggOC01LjkgMTAuNWMtNSAzLjEtMTIuOSA1LTIxLjQgNC43Yy0xMS4xLS40LTIxLjUtMy45LTM1LjEtOC41Yy0yLjMtLjgtNC43LTEuNi03LjItMi40Yy0xMC41LTMuNS0yMS44IDIuMi0yNS4zIDEyLjZzMi4yIDIxLjggMTIuNiAyNS4zYzEuOSAuNiA0IDEuMyA2LjEgMi4xYzAgMCAwIDAgMCAwczAgMCAwIDBjOC4zIDIuOSAxNy45IDYuMiAyOC4yIDguNGwwIDE0LjZjMCAxMSA5IDIwIDIwIDIwczIwLTkgMjAtMjBsMC0xMy44YzgtMS43IDE2LTQuNSAyMy4yLTljMTQuMy04LjkgMjUuMS0yNC4xIDI0LjgtNDVjLS4zLTIwLjMtMTEuNy0zMy40LTI0LjYtNDEuNmMtMTEuNS03LjItMjUuOS0xMS42LTM3LjEtMTVsLS43LS4yYy0xMi44LTMuOS0yMS45LTYuNy0yOC4zLTEwLjVjLTUuMi0zLjEtNS4zLTQuOS01LjMtNi43YzAtMy43IDEuNC02LjUgNi4yLTkuM2M1LjQtMy4yIDEzLjYtNS4xIDIxLjUtNWM5LjYgLjEgMjAuMiAyLjIgMzEuMiA1LjJjMTAuNyAyLjggMjEuNi0zLjUgMjQuNS0xNC4ycy0zLjUtMjEuNi0xNC4yLTI0LjVjLTYuNS0xLjctMTMuNy0zLjQtMjEuMS00LjdsMC0xMy45ek0zMzAuNyAzNzZMNDU3LjQgNTAyLjZjMTIuNSAxMi41IDMyLjggMTIuNSA0NS4zIDBzMTIuNS0zMi44IDAtNDUuM0wzNzYgMzMwLjdDMzYzLjMgMzQ4IDM0OCAzNjMuMyAzMzAuNyAzNzZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const MagnifyingGlassDollar: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 208a208 208 0 1 0 416 0A208 208 0 1 0 0 208zM228 312c0 .3 0 .7 0 0z" />
            <path d="M228 104c0-11-9-20-20-20s-20 9-20 20l0 14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1c0 0 0 0 0 0s0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4l0 14.6c0 11 9 20 20 20s20-9 20-20l0-13.8c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7l0-13.9zM330.7 376L457.4 502.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L376 330.7C363.3 348 348 363.3 330.7 376z" />
    </Icon>
);

export default MagnifyingGlassDollar;
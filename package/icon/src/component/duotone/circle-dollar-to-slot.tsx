
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-dollar-to-slot` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-dollar-to-slot?s=duotone circle-dollar-to-slot}
 * @preview ![circle-dollar-to-slot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00OCAyMDhhMjA4IDIwOCAwIDEgMCA0MTYgMEEyMDggMjA4IDAgMSAwIDQ4IDIwOHptMTQwLjItNDEuNGMuMS0xLjMgLjItMi41IC40LTMuN2MuMy0yLjQgLjktNC44IDEuNS03YzEuMy00LjUgMy4yLTguNSA1LjYtMTIuMmM0LjctNy4zIDExLjItMTMgMTguMi0xNy4xYzYuOS00LjEgMTQuNS02LjggMjIuMi04LjVsMC0xNGMwLTExIDktMjAgMjAtMjBzMjAgOSAyMCAyMGwwIDEzLjljNy41IDEuMiAxNC42IDIuOSAyMS4xIDQuN2MxMC43IDIuOCAxNyAxMy44IDE0LjIgMjQuNXMtMTMuOCAxNy0yNC41IDE0LjJjLTExLTIuOS0yMS42LTUtMzEuMi01LjJjLTcuOS0uMS0xNiAxLjgtMjEuNSA1Yy00LjggMi44LTYuMiA1LjYtNi4yIDkuM2MwIDEuOCAuMSAzLjUgNS4zIDYuN2M2LjMgMy44IDE1LjUgNi43IDI4LjMgMTAuNWwuNyAuMmMxMS4yIDMuNCAyNS42IDcuNyAzNy4xIDE1YzEyLjkgOC4xIDI0LjMgMjEuMyAyNC42IDQxLjZjMCAuNyAwIDEuMyAwIDEuOXMwIDEuMy0uMSAxLjljLS4xIDEuMy0uMiAyLjUtLjMgMy43Yy0uMyAyLjQtLjcgNC44LTEuMyA3Yy0xLjIgNC41LTMgOC42LTUuMiAxMi40Yy00LjQgNy41LTEwLjcgMTMuNS0xNy45IDE4Yy03LjIgNC41LTE1LjIgNy4zLTIzLjIgOWwwIDEzLjhjMCAxMS05IDIwLTIwIDIwcy0yMC05LTIwLTIwbDAtMTQuNmMtMTAuMy0yLjItMjAtNS41LTI4LjMtOC40Yy0yLjEtLjctNC4xLTEuNC02LjEtMi4xYy0xMC41LTMuNS0xNi4xLTE0LjgtMTIuNi0yNS4zczE0LjgtMTYuMSAyNS4zLTEyLjZjMi41IC44IDQuOSAxLjcgNy4yIDIuNGMxMy42IDQuNiAyNCA4LjEgMzUuMSA4LjVjOC42IC4zIDE2LjUtMS42IDIxLjQtNC43YzQuMS0yLjUgNi01LjUgNS45LTEwLjVjMC0yLjktLjgtNS01LjktOC4yYy02LjMtNC0xNS40LTYuOS0yOC0xMC43bC0xLjctLjVjLTEwLjktMy4zLTI0LjYtNy40LTM1LjYtMTRjLTEyLjctNy43LTI0LjYtMjAuNS0yNC43LTQwLjdjMC0uNyAwLTEuMyAwLTJzLjEtMS4zIC4xLTEuOXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI3NiAxMDRjMC0xMS05LTIwLTIwLTIwcy0yMCA5LTIwIDIwbDAgMTRjLTcuNiAxLjctMTUuMiA0LjQtMjIuMiA4LjVjLTEzLjkgOC4zLTI1LjkgMjIuOC0yNS44IDQzLjljLjEgMjAuMyAxMiAzMy4xIDI0LjcgNDAuN2MxMSA2LjYgMjQuNyAxMC44IDM1LjYgMTRsMS43IC41YzEyLjYgMy44IDIxLjggNi44IDI4IDEwLjdjNS4xIDMuMiA1LjggNS40IDUuOSA4LjJjLjEgNS0xLjggOC01LjkgMTAuNWMtNSAzLjEtMTIuOSA1LTIxLjQgNC43Yy0xMS4xLS40LTIxLjUtMy45LTM1LjEtOC41Yy0yLjMtLjgtNC43LTEuNi03LjItMi40Yy0xMC41LTMuNS0yMS44IDIuMi0yNS4zIDEyLjZzMi4yIDIxLjggMTIuNiAyNS4zYzEuOSAuNiA0IDEuMyA2LjEgMi4xYzAgMCAwIDAgMCAwczAgMCAwIDBjOC4zIDIuOSAxNy45IDYuMiAyOC4yIDguNGwwIDE0LjZjMCAxMSA5IDIwIDIwIDIwczIwLTkgMjAtMjBsMC0xMy44YzgtMS43IDE2LTQuNSAyMy4yLTljMTQuMy04LjkgMjUuMS0yNC4xIDI0LjgtNDVjLS4zLTIwLjMtMTEuNy0zMy40LTI0LjYtNDEuNmMtMTEuNS03LjItMjUuOS0xMS42LTM3LjEtMTVsLS43LS4yYy0xMi44LTMuOS0yMS45LTYuNy0yOC4zLTEwLjVjLTUuMi0zLjEtNS4zLTQuOS01LjMtNi43YzAtMy43IDEuNC02LjUgNi4yLTkuM2M1LjQtMy4yIDEzLjYtNS4xIDIxLjUtNWM5LjYgLjEgMjAuMiAyLjIgMzEuMiA1LjJjMTAuNyAyLjggMjEuNi0zLjUgMjQuNS0xNC4ycy0zLjUtMjEuNi0xNC4yLTI0LjVjLTYuNS0xLjctMTMuNy0zLjQtMjEuMS00LjdsMC0xMy45ek02NCAzNTJsLTE2IDBjLTI2LjUgMC00OCAyMS41LTQ4IDQ4bDAgNjRjMCAyNi41IDIxLjUgNDggNDggNDhsNDE2IDBjMjYuNSAwIDQ4LTIxLjUgNDgtNDhsMC02NGMwLTI2LjUtMjEuNS00OC00OC00OGwtMTYgMGMtMTkuNCAyNS45LTQ0IDQ3LjctNzIuMiA2NGw3Mi4yIDAgMCAzMi0xOTIgMEw2NCA0NDhsMC0zMiA3Mi4yIDBDMTA4IDM5OS43IDgzLjQgMzc3LjkgNjQgMzUyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleDollarToSlot: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M48 208a208 208 0 1 0 416 0A208 208 0 1 0 48 208zm140.2-41.4c.1-1.3 .2-2.5 .4-3.7c.3-2.4 .9-4.8 1.5-7c1.3-4.5 3.2-8.5 5.6-12.2c4.7-7.3 11.2-13 18.2-17.1c6.9-4.1 14.5-6.8 22.2-8.5l0-14c0-11 9-20 20-20s20 9 20 20l0 13.9c7.5 1.2 14.6 2.9 21.1 4.7c10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-11-2.9-21.6-5-31.2-5.2c-7.9-.1-16 1.8-21.5 5c-4.8 2.8-6.2 5.6-6.2 9.3c0 1.8 .1 3.5 5.3 6.7c6.3 3.8 15.5 6.7 28.3 10.5l.7 .2c11.2 3.4 25.6 7.7 37.1 15c12.9 8.1 24.3 21.3 24.6 41.6c0 .7 0 1.3 0 1.9s0 1.3-.1 1.9c-.1 1.3-.2 2.5-.3 3.7c-.3 2.4-.7 4.8-1.3 7c-1.2 4.5-3 8.6-5.2 12.4c-4.4 7.5-10.7 13.5-17.9 18c-7.2 4.5-15.2 7.3-23.2 9l0 13.8c0 11-9 20-20 20s-20-9-20-20l0-14.6c-10.3-2.2-20-5.5-28.3-8.4c-2.1-.7-4.1-1.4-6.1-2.1c-10.5-3.5-16.1-14.8-12.6-25.3s14.8-16.1 25.3-12.6c2.5 .8 4.9 1.7 7.2 2.4c13.6 4.6 24 8.1 35.1 8.5c8.6 .3 16.5-1.6 21.4-4.7c4.1-2.5 6-5.5 5.9-10.5c0-2.9-.8-5-5.9-8.2c-6.3-4-15.4-6.9-28-10.7l-1.7-.5c-10.9-3.3-24.6-7.4-35.6-14c-12.7-7.7-24.6-20.5-24.7-40.7c0-.7 0-1.3 0-2s.1-1.3 .1-1.9z" />
            <path d="M276 104c0-11-9-20-20-20s-20 9-20 20l0 14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1c0 0 0 0 0 0s0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4l0 14.6c0 11 9 20 20 20s20-9 20-20l0-13.8c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7l0-13.9zM64 352l-16 0c-26.5 0-48 21.5-48 48l0 64c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-16 0c-19.4 25.9-44 47.7-72.2 64l72.2 0 0 32-192 0L64 448l0-32 72.2 0C108 399.7 83.4 377.9 64 352z" />
    </Icon>
);

export default CircleDollarToSlot;
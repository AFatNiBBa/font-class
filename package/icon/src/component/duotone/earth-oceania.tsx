
import { Icon, generic } from "../../index";

/**
 * A component that renders the `earth-oceania` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/earth-oceania?s=duotone earth-oceania}
 * @preview ![earth-oceania](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTgzLjQgNjYuN2MtMTAuNi0yMC4xLTIuMy00NSAxOC4yLTU0LjdsMzUuMy0xNi44YzIuMy0xLjEgNC40LTIuOCA1LjktNC44bDUuMy03YzcuMi05LjYgMTguNi0xNS4zIDMwLjYtMTUuM3MyMy40IDUuNyAzMC42IDE1LjNsNC42IDYuMWMyIDIuNiA0LjkgNC41IDguMSA1LjFjNy44IDEuNiAxNS43LTEuNSAyMC40LTcuOWMzLjUtNC43IDYuOS05LjUgMTAuNC0xNC4yYzItMi44IDUuMi00LjQgOC43LTQuNGM0LjQgMCA4LjQgMi43IDEwIDYuOGMzLjQgOC42IDYuNyAxNy4zIDEwLjEgMjUuOWMyLjggNy4yIDYuNyAxNCAxMS41IDIwLjJsMTggMjIuOWMyLjkgMy43IDUuMSA3LjkgNi43IDEyLjJjLjggMi4yIDEuMyA0LjUgMS43IDYuOGMuMiAxLjIgLjMgMi40IC40IDMuNmMwIC42IC4xIDEuMSAuMSAxLjZjMCAuNSAwIDEgMCAxLjJsMCAuNSAwIC41YzAgLjMgMCAuOCAwIDEuNWMwIC41LS4xIDEtLjEgMS41Yy0uMSAxLjEtLjIgMi4zLS40IDMuNWMtLjQgMi4zLTEgNC41LTEuNyA2LjdjLTEuNSA0LjQtMy44IDguNS02LjcgMTIuM2MtNCA1LjEtOCAxMC4zLTEyLjEgMTUuNGMtOC4zIDEwLjYtMjEgMTYuOC0zNC40IDE2LjhjLTguNCAwLTE2LjYtMi40LTIzLjctN2MtOC41LTUuNS0xNi45LTEwLjktMjUuNC0xNi40Yy0yLjItMS40LTQuNS0yLjUtNi45LTMuNGMtMTMtNC41LTI2LTktMzktMTMuNWMtNi41LTIuMi0xMy42LTIuMy0yMC4xLS4zYy01LjEgMS42LTEwLjIgMy4yLTE1LjMgNC45Yy0xOC41IDUuOS0zOC41LTIuNC00Ny41LTE5LjVjLTEuMS0yLjEtMi4yLTQuMi0zLjMtNi4yek0xOTUuNyAxNjkuNWMtMTQuMy02LjMtMTEuOS0yNy4yIDMuNC0zMC4zbDM4LjUtNy43YzEzLjEtMi42IDI2LjcgMS41IDM2LjEgMTAuOUwyOTYgMTY0LjdjMTAuMSAxMC4xIDIuOSAyNy4zLTExLjMgMjcuM2MtMTAgMC0xOS45IDAtMjkuOSAwYy01LjYgMC0xMS4xLTEuMi0xNi4yLTMuNGMtMTQuMy02LjMtMjguNS0xMi43LTQyLjgtMTl6TTI0OCA0MzJjMC04LjggNy4yLTE2IDE2LTE2bDE2IDBjNC40IDAgOC40IDEuOCAxMS4zIDQuN2MxLjQgMS40IDIuNiAzLjIgMy40IDUuMWMuNCAxIC43IDIgLjkgM2MuMSAuNSAuMiAxLjEgLjIgMS42cy4xIDEgLjEgMS44YzAgLjUgMCAxLS4xIDEuNWMtLjEgLjUtLjEgMS0uMiAxLjZjLS4yIDEtLjUgMi0uOSAzYy0uOCAxLjktMiAzLjYtMy40IDUuMWMtMi45IDIuOS02LjkgNC43LTExLjMgNC43bC0xNiAwYy04LjggMC0xNi03LjItMTYtMTZ6bTEwOC43LTQzLjNsMzItMzJjNi4yLTYuMiAxNi40LTYuMiAyMi42IDBjNi4yIDYuMyA2LjIgMTYuNCAwIDIyLjZjLTEwLjcgMTAuNy0yMS4zIDIxLjMtMzIgMzJjLTYuMiA2LjItMTYuNCA2LjItMjIuNiAwYy02LjItNi40LTYuMi0xNi40IDAtMjIuNnptNDQuMS03OS42Yy0yLjgtOC40IDEuNy0xNy40IDEwLjEtMjAuMnMxNy40IDEuNyAyMC4yIDEwLjFjMi43IDggNS4zIDE2IDggMjRjLjMgLjggLjUgMS43IC42IDIuNWMuMSAuNiAuMiAxLjIgLjEgMS4ybC4xIDEuM2MwIC44IDAgMS0uMSAxLjNjMCAuNC0uMSAuOC0uMSAxLjJjLS4xIC44LS4zIDEuNi0uNiAyLjRjLS41IDEuNi0xLjIgMy0yLjIgNC40Yy0xLjkgMi43LTQuNiA0LjgtOCA1LjljLTguNCAyLjgtMTcuNC0xLjctMjAuMi0xMC4xYy0yLjctOC01LjMtMTYtOC0yNHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI3My44IDE0Mi41Yy05LjUtOS41LTIzLTEzLjYtMzYuMS0xMC45bC0zOC41IDcuN2MtMTUuMyAzLjEtMTcuNiAyNC0zLjQgMzAuM2w0Mi44IDE5YzUuMSAyLjMgMTAuNiAzLjQgMTYuMiAzLjRsMjkuOSAwYzE0LjMgMCAyMS40LTE3LjIgMTEuMy0yNy4zbC0yMi4yLTIyLjJ6TTE2OS42IDM0My44bDM5IDEzLjVjMi40IC44IDQuNyAyIDYuOSAzLjRMMjQwLjkgMzc3YzcuMSA0LjYgMTUuMyA3IDIzLjcgN2MxMy40IDAgMjYuMS02LjIgMzQuNC0xNi44TDMxMSAzNTEuOGM1LjgtNy40IDktMTYuNiA5LTI2cy0zLjItMTguNi05LTI2bC0xNy45LTIyLjljLTQuOC02LjEtOC43LTEyLjktMTEuNS0yMC4ybC0xMC4xLTI1LjljLTEuNi00LjEtNS42LTYuOC0xMC02LjhjLTMuNCAwLTYuNyAxLjYtOC43IDQuNGwtMTAuNCAxNC4yYy00LjcgNi40LTEyLjcgOS41LTIwLjQgNy45Yy0zLjItLjctNi4xLTIuNS04LjEtNS4xbC00LjYtNi4xYy03LjItOS42LTE4LjYtMTUuMy0zMC42LTE1LjNzLTIzLjQgNS43LTMwLjYgMTUuM2wtNS4zIDdjLTEuNiAyLjEtMy42IDMuNy01LjkgNC44bC0zNS4zIDE2LjhjLTIwLjUgOS44LTI4LjggMzQuNi0xOC4yIDU0LjdsMy4zIDYuMmM5IDE3LjEgMjkgMjUuNCA0Ny41IDE5LjVsMTUuMy00LjljNi42LTIuMSAxMy42LTIgMjAuMSAuM3pNMjQ4IDQzMmMwIDguOCA3LjIgMTYgMTYgMTZsMTYgMGM4LjggMCAxNi03LjIgMTYtMTZzLTcuMi0xNi0xNi0xNmwtMTYgMGMtOC44IDAtMTYgNy4yLTE2IDE2ek00MzEuMiAyOTguOWMtMi44LTguNC0xMS45LTEyLjktMjAuMi0xMC4xcy0xMi45IDExLjktMTAuMSAyMC4ybDggMjRjMi44IDguNCAxMS45IDEyLjkgMjAuMiAxMC4xczEyLjktMTEuOSAxMC4xLTIwLjJsLTgtMjR6bS0xOS45IDgwLjRjNi4yLTYuMiA2LjItMTYuNCAwLTIyLjZzLTE2LjQtNi4yLTIyLjYgMGwtMzIgMzJjLTYuMiA2LjItNi4yIDE2LjQgMCAyMi42czE2LjQgNi4yIDIyLjYgMGwzMi0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const EarthOceania: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm83.4 66.7c-10.6-20.1-2.3-45 18.2-54.7l35.3-16.8c2.3-1.1 4.4-2.8 5.9-4.8l5.3-7c7.2-9.6 18.6-15.3 30.6-15.3s23.4 5.7 30.6 15.3l4.6 6.1c2 2.6 4.9 4.5 8.1 5.1c7.8 1.6 15.7-1.5 20.4-7.9c3.5-4.7 6.9-9.5 10.4-14.2c2-2.8 5.2-4.4 8.7-4.4c4.4 0 8.4 2.7 10 6.8c3.4 8.6 6.7 17.3 10.1 25.9c2.8 7.2 6.7 14 11.5 20.2l18 22.9c2.9 3.7 5.1 7.9 6.7 12.2c.8 2.2 1.3 4.5 1.7 6.8c.2 1.2 .3 2.4 .4 3.6c0 .6 .1 1.1 .1 1.6c0 .5 0 1 0 1.2l0 .5 0 .5c0 .3 0 .8 0 1.5c0 .5-.1 1-.1 1.5c-.1 1.1-.2 2.3-.4 3.5c-.4 2.3-1 4.5-1.7 6.7c-1.5 4.4-3.8 8.5-6.7 12.3c-4 5.1-8 10.3-12.1 15.4c-8.3 10.6-21 16.8-34.4 16.8c-8.4 0-16.6-2.4-23.7-7c-8.5-5.5-16.9-10.9-25.4-16.4c-2.2-1.4-4.5-2.5-6.9-3.4c-13-4.5-26-9-39-13.5c-6.5-2.2-13.6-2.3-20.1-.3c-5.1 1.6-10.2 3.2-15.3 4.9c-18.5 5.9-38.5-2.4-47.5-19.5c-1.1-2.1-2.2-4.2-3.3-6.2zM195.7 169.5c-14.3-6.3-11.9-27.2 3.4-30.3l38.5-7.7c13.1-2.6 26.7 1.5 36.1 10.9L296 164.7c10.1 10.1 2.9 27.3-11.3 27.3c-10 0-19.9 0-29.9 0c-5.6 0-11.1-1.2-16.2-3.4c-14.3-6.3-28.5-12.7-42.8-19zM248 432c0-8.8 7.2-16 16-16l16 0c4.4 0 8.4 1.8 11.3 4.7c1.4 1.4 2.6 3.2 3.4 5.1c.4 1 .7 2 .9 3c.1 .5 .2 1.1 .2 1.6s.1 1 .1 1.8c0 .5 0 1-.1 1.5c-.1 .5-.1 1-.2 1.6c-.2 1-.5 2-.9 3c-.8 1.9-2 3.6-3.4 5.1c-2.9 2.9-6.9 4.7-11.3 4.7l-16 0c-8.8 0-16-7.2-16-16zm108.7-43.3l32-32c6.2-6.2 16.4-6.2 22.6 0c6.2 6.3 6.2 16.4 0 22.6c-10.7 10.7-21.3 21.3-32 32c-6.2 6.2-16.4 6.2-22.6 0c-6.2-6.4-6.2-16.4 0-22.6zm44.1-79.6c-2.8-8.4 1.7-17.4 10.1-20.2s17.4 1.7 20.2 10.1c2.7 8 5.3 16 8 24c.3 .8 .5 1.7 .6 2.5c.1 .6 .2 1.2 .1 1.2l.1 1.3c0 .8 0 1-.1 1.3c0 .4-.1 .8-.1 1.2c-.1 .8-.3 1.6-.6 2.4c-.5 1.6-1.2 3-2.2 4.4c-1.9 2.7-4.6 4.8-8 5.9c-8.4 2.8-17.4-1.7-20.2-10.1c-2.7-8-5.3-16-8-24z" />
            <path d="M273.8 142.5c-9.5-9.5-23-13.6-36.1-10.9l-38.5 7.7c-15.3 3.1-17.6 24-3.4 30.3l42.8 19c5.1 2.3 10.6 3.4 16.2 3.4l29.9 0c14.3 0 21.4-17.2 11.3-27.3l-22.2-22.2zM169.6 343.8l39 13.5c2.4 .8 4.7 2 6.9 3.4L240.9 377c7.1 4.6 15.3 7 23.7 7c13.4 0 26.1-6.2 34.4-16.8L311 351.8c5.8-7.4 9-16.6 9-26s-3.2-18.6-9-26l-17.9-22.9c-4.8-6.1-8.7-12.9-11.5-20.2l-10.1-25.9c-1.6-4.1-5.6-6.8-10-6.8c-3.4 0-6.7 1.6-8.7 4.4l-10.4 14.2c-4.7 6.4-12.7 9.5-20.4 7.9c-3.2-.7-6.1-2.5-8.1-5.1l-4.6-6.1c-7.2-9.6-18.6-15.3-30.6-15.3s-23.4 5.7-30.6 15.3l-5.3 7c-1.6 2.1-3.6 3.7-5.9 4.8l-35.3 16.8c-20.5 9.8-28.8 34.6-18.2 54.7l3.3 6.2c9 17.1 29 25.4 47.5 19.5l15.3-4.9c6.6-2.1 13.6-2 20.1 .3zM248 432c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16zM431.2 298.9c-2.8-8.4-11.9-12.9-20.2-10.1s-12.9 11.9-10.1 20.2l8 24c2.8 8.4 11.9 12.9 20.2 10.1s12.9-11.9 10.1-20.2l-8-24zm-19.9 80.4c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-32 32c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l32-32z" />
    </Icon>
);

export default EarthOceania;
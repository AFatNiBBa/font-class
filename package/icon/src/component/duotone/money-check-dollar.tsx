
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-check-dollar` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-check-dollar?s=duotone money-check-dollar}
 * @preview ![money-check-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyOEwwIDM4NGMwIDM1LjMgMjguNyA2NCA2NCA2NGw0NDggMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTI1NmMwLTM1LjMtMjguNy02NC02NC02NEw2NCA2NEMyOC43IDY0IDAgOTIuNyAwIDEyOHptNzYuMiA4Ni42Yy4xLTEuMyAuMi0yLjUgLjQtMy43Yy4zLTIuNCAuOS00LjggMS41LTdjMS4zLTQuNSAzLjItOC41IDUuNi0xMi4yYzQuNy03LjMgMTEuMi0xMyAxOC4yLTE3LjFjNi45LTQuMSAxNC41LTYuOCAyMi4yLTguNWMwLTQuNyAwLTkuNCAwLTE0LjJjMC0uNSAwLTEuMiAuMS0xLjlzLjItMS4zIC4zLTJjLjMtMS4zIC43LTIuNiAxLjItMy44YzEtMi40IDIuNS00LjUgNC4zLTYuNGMzLjYtMy42IDguNi01LjkgMTQuMS01LjljMTEgMCAyMCA5IDIwIDIwYzAgNC42IDAgOS4yIDAgMTMuOWM3LjUgMS4yIDE0LjYgMi45IDIxLjEgNC43YzEwLjcgMi44IDE3IDEzLjggMTQuMiAyNC41cy0xMy44IDE3LTI0LjUgMTQuMmMtMTEtMi45LTIxLjYtNS0zMS4yLTUuMmMtNy45LS4xLTE2IDEuOC0yMS41IDVjLTIuNCAxLjQtMy45IDIuOC00LjkgNC4zYy0uNSAuOC0uOCAxLjUtMSAyLjRjLS4xIC40LS4yIC44LS4yIDEuM3MtLjEgLjktLjEgMS40YzAgLjIgMCAuNCAwIC42YzAgLjIgMCAuNSAuMSAuN2MuMSAuNSAuMyAuOSAuNiAxLjVjLjcgMSAyIDIuMyA0LjYgMy44YzYuMyAzLjggMTUuNSA2LjcgMjguMyAxMC41bC43IC4yYzExLjIgMy40IDI1LjYgNy43IDM3LjEgMTVjMTIuOSA4LjEgMjQuMyAyMS4zIDI0LjYgNDEuNmMwIDEuMyAwIDIuNi0uMSAzLjhjLS4xIDEuMy0uMiAyLjUtLjMgMy43Yy0uMyAyLjQtLjcgNC44LTEuMyA3Yy0xLjIgNC41LTMgOC42LTUuMiAxMi40Yy00LjQgNy41LTEwLjcgMTMuNS0xNy45IDE4Yy03LjIgNC41LTE1LjIgNy4zLTIzLjIgOWMwIDQuNiAwIDkuMiAwIDEzLjhjMCAxMS05IDIwLTIwIDIwYy01LjUgMC0xMC41LTIuMi0xNC4xLTUuOWMtMS44LTEuOC0zLjMtNC00LjMtNi40Yy0uNS0xLjItLjktMi40LTEuMi0zLjdjLS4xLS43LS4yLTEuMy0uMy0ycy0uMS0xLjMtLjEtMmMwLTQuOSAwLTkuNyAwLTE0LjZjLTEwLjMtMi4yLTIwLTUuNS0yOC4zLTguNGMtMi4xLS43LTQuMS0xLjQtNi4xLTIuMWMtMTAuNS0zLjUtMTYuMS0xNC44LTEyLjYtMjUuM3MxNC44LTE2LjEgMjUuMy0xMi42YzIuNSAuOCA0LjkgMS43IDcuMiAyLjRjMTMuNiA0LjYgMjQgOC4xIDM1LjEgOC41YzguNiAuMyAxNi41LTEuNiAyMS40LTQuN2MyLTEuMyAzLjUtMi42IDQuNS00LjNjLjUtLjggLjgtMS44IDEuMS0yLjhjLjEtLjUgLjItMS4xIC4zLTEuNmMuMS0uNiAuMS0xLjEgLjEtMS44YzAtMi45LS44LTUtNS45LTguMmMtNi4zLTQtMTUuNC02LjktMjgtMTAuN2wtMS43LS41Yy0xMC45LTMuMy0yNC42LTcuNC0zNS42LTE0Yy02LjQtMy44LTEyLjUtOC45LTE3LjEtMTUuNmMtMi4zLTMuMy00LjItNy4xLTUuNS0xMS4yYy0uNy0yLjEtMS4yLTQuMy0xLjUtNi42Yy0uMi0xLjItLjMtMi4zLS40LTMuNWMwLS42LS4xLTEuMi0uMS0xLjhjMC0uNiAwLTEuMSAwLTEuOWMwLS43IDAtMS4zIDAtMS45cy4xLTEuMyAuMS0xLjl6bTE4MC4xLTkuOGMuMi0xIC41LTIgLjktM2MuOC0xLjkgMi0zLjYgMy40LTUuMWMyLjktMi45IDYuOS00LjcgMTEuMy00LjdsMjI0IDBjOC44IDAgMTYgNy4yIDE2IDE2cy03LjIgMTYtMTYgMTZsLTIyNCAwYy00LjQgMC04LjQtMS44LTExLjMtNC43Yy0xLjQtMS40LTIuNi0zLjItMy40LTUuMWMtLjQtMS0uNy0yLS45LTNjLS4xLS41LS4yLTEuMS0uMi0xLjZzLS4xLTEuMS0uMS0xLjhjMC0uNSAwLTEgLjEtMS41cy4xLTEuMSAuMi0xLjZ6TTI1NiAzMDRjMC04LjggNy4yLTE2IDE2LTE2bDIyNCAwYzguOCAwIDE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2bC0yMjQgMGMtOC44IDAtMTYtNy4yLTE2LTE2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTY0IDE1MmMwLTExLTktMjAtMjAtMjBzLTIwIDktMjAgMjBsMCAxNGMtNy42IDEuNy0xNS4yIDQuNC0yMi4yIDguNWMtMTMuOSA4LjMtMjUuOSAyMi44LTI1LjggNDMuOWMuMSAyMC4zIDEyIDMzLjEgMjQuNyA0MC43YzExIDYuNiAyNC43IDEwLjggMzUuNiAxNGwxLjcgLjVjMTIuNiAzLjggMjEuOCA2LjggMjggMTAuN2M1LjEgMy4yIDUuOCA1LjQgNS45IDguMmMuMSA1LTEuOCA4LTUuOSAxMC41Yy01IDMuMS0xMi45IDUtMjEuNCA0LjdjLTExLjEtLjQtMjEuNS0zLjktMzUuMS04LjVjLTIuMy0uOC00LjctMS42LTcuMi0yLjRjLTEwLjUtMy41LTIxLjggMi4yLTI1LjMgMTIuNnMyLjIgMjEuOCAxMi42IDI1LjNjMS45IC42IDQgMS4zIDYuMSAyLjFjMCAwIDAgMCAwIDBzMCAwIDAgMGM4LjMgMi45IDE3LjkgNi4yIDI4LjIgOC40bDAgMTQuNmMwIDExIDkgMjAgMjAgMjBzMjAtOSAyMC0yMGwwLTEzLjhjOC0xLjcgMTYtNC41IDIzLjItOWMxNC4zLTguOSAyNS4xLTI0LjEgMjQuOC00NWMtLjMtMjAuMy0xMS43LTMzLjQtMjQuNi00MS42Yy0xMS41LTcuMi0yNS45LTExLjYtMzcuMS0xNWwtLjctLjJjLTEyLjgtMy45LTIxLjktNi43LTI4LjMtMTAuNWMtNS4yLTMuMS01LjMtNC45LTUuMy02LjdjMC0zLjcgMS40LTYuNSA2LjItOS4zYzUuNC0zLjIgMTMuNi01LjEgMjEuNS01YzkuNiAuMSAyMC4yIDIuMiAzMS4yIDUuMmMxMC43IDIuOCAyMS42LTMuNSAyNC41LTE0LjJzLTMuNS0yMS42LTE0LjItMjQuNWMtNi41LTEuNy0xMy43LTMuNC0yMS4xLTQuN2wwLTEzLjl6bTEwOCA0MGMtOC44IDAtMTYgNy4yLTE2IDE2czcuMiAxNiAxNiAxNmwyMjQgMGM4LjggMCAxNi03LjIgMTYtMTZzLTcuMi0xNi0xNi0xNmwtMjI0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const MoneyCheckDollar: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128zm76.2 86.6c.1-1.3 .2-2.5 .4-3.7c.3-2.4 .9-4.8 1.5-7c1.3-4.5 3.2-8.5 5.6-12.2c4.7-7.3 11.2-13 18.2-17.1c6.9-4.1 14.5-6.8 22.2-8.5c0-4.7 0-9.4 0-14.2c0-.5 0-1.2 .1-1.9s.2-1.3 .3-2c.3-1.3 .7-2.6 1.2-3.8c1-2.4 2.5-4.5 4.3-6.4c3.6-3.6 8.6-5.9 14.1-5.9c11 0 20 9 20 20c0 4.6 0 9.2 0 13.9c7.5 1.2 14.6 2.9 21.1 4.7c10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-11-2.9-21.6-5-31.2-5.2c-7.9-.1-16 1.8-21.5 5c-2.4 1.4-3.9 2.8-4.9 4.3c-.5 .8-.8 1.5-1 2.4c-.1 .4-.2 .8-.2 1.3s-.1 .9-.1 1.4c0 .2 0 .4 0 .6c0 .2 0 .5 .1 .7c.1 .5 .3 .9 .6 1.5c.7 1 2 2.3 4.6 3.8c6.3 3.8 15.5 6.7 28.3 10.5l.7 .2c11.2 3.4 25.6 7.7 37.1 15c12.9 8.1 24.3 21.3 24.6 41.6c0 1.3 0 2.6-.1 3.8c-.1 1.3-.2 2.5-.3 3.7c-.3 2.4-.7 4.8-1.3 7c-1.2 4.5-3 8.6-5.2 12.4c-4.4 7.5-10.7 13.5-17.9 18c-7.2 4.5-15.2 7.3-23.2 9c0 4.6 0 9.2 0 13.8c0 11-9 20-20 20c-5.5 0-10.5-2.2-14.1-5.9c-1.8-1.8-3.3-4-4.3-6.4c-.5-1.2-.9-2.4-1.2-3.7c-.1-.7-.2-1.3-.3-2s-.1-1.3-.1-2c0-4.9 0-9.7 0-14.6c-10.3-2.2-20-5.5-28.3-8.4c-2.1-.7-4.1-1.4-6.1-2.1c-10.5-3.5-16.1-14.8-12.6-25.3s14.8-16.1 25.3-12.6c2.5 .8 4.9 1.7 7.2 2.4c13.6 4.6 24 8.1 35.1 8.5c8.6 .3 16.5-1.6 21.4-4.7c2-1.3 3.5-2.6 4.5-4.3c.5-.8 .8-1.8 1.1-2.8c.1-.5 .2-1.1 .3-1.6c.1-.6 .1-1.1 .1-1.8c0-2.9-.8-5-5.9-8.2c-6.3-4-15.4-6.9-28-10.7l-1.7-.5c-10.9-3.3-24.6-7.4-35.6-14c-6.4-3.8-12.5-8.9-17.1-15.6c-2.3-3.3-4.2-7.1-5.5-11.2c-.7-2.1-1.2-4.3-1.5-6.6c-.2-1.2-.3-2.3-.4-3.5c0-.6-.1-1.2-.1-1.8c0-.6 0-1.1 0-1.9c0-.7 0-1.3 0-1.9s.1-1.3 .1-1.9zm180.1-9.8c.2-1 .5-2 .9-3c.8-1.9 2-3.6 3.4-5.1c2.9-2.9 6.9-4.7 11.3-4.7l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-4.4 0-8.4-1.8-11.3-4.7c-1.4-1.4-2.6-3.2-3.4-5.1c-.4-1-.7-2-.9-3c-.1-.5-.2-1.1-.2-1.6s-.1-1.1-.1-1.8c0-.5 0-1 .1-1.5s.1-1.1 .2-1.6zM256 304c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16z" />
            <path d="M164 152c0-11-9-20-20-20s-20 9-20 20l0 14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1c0 0 0 0 0 0s0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4l0 14.6c0 11 9 20 20 20s20-9 20-20l0-13.8c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7l0-13.9zm108 40c-8.8 0-16 7.2-16 16s7.2 16 16 16l224 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-224 0z" />
    </Icon>
);

export default MoneyCheckDollar;
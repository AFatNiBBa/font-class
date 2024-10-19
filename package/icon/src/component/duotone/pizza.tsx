
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pizza` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pizza?s=duotone pizza}
 * @preview ![pizza](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00OC4xIDI1MS4yYzAtMS44IC4xLTMuNiAuMi01LjRjLjEtMS4xIC4xLTIuMiAuMi0zLjNjMC0uOCAuMS0xLjYgLjItMi4zYy4xLS44IC4xLTEuNiAuMi0yLjRjMS41LTE3LjYgNS4zLTM0LjkgMTEuMy01MS43Yy4zLS45IC42LTEuOCAxLTIuN2MuMS0uMyAuMi0uNyAuNC0xYy42LTEuNSAxLjEtMyAxLjgtNC42YzEuMy0zLjEgMi42LTYuMiA0LjEtOS41Yy42LTEuNCAxLjMtMi44IDItNC4yYy43LTEuNCAxLjQtMi44IDIuMS00LjFjMy4zLTYuMyA2LjktMTIuNCAxMC43LTE4LjNjLjItLjIgLjMtLjUgLjUtLjdjMS44LTIuNyAzLjctNS40IDUuNy04LjFjMi0yLjcgNC01LjQgNi4zLTguMWMyLjItMi43IDQuNS01LjQgNi45LThjMS4yLTEuMyAyLjQtMi42IDMuNi0zLjlzMi41LTIuNiAzLjgtMy44YzIuNS0yLjUgNS4xLTUgNy44LTcuNHM1LjMtNC43IDguMi03YzIuNi0yLjEgNS4zLTQuMiA4LTYuMmM4LjUtNi4zIDE3LjUtMTEuOCAyNi43LTE2LjdjMy0xLjYgNi0zIDktNC41czYuMS0yLjcgOS40LTQuMWMxLjItLjUgMi40LS45IDMuNS0xLjRjLjMtLjEgLjUtLjIgLjgtLjNjMS40LS41IDIuOC0xIDQuMi0xLjVjLjItLjEgLjQtLjIgLjYtLjJjMy4xLTEuMSA2LjItMi4xIDkuMy0zbC42LS4yYzMtLjkgNi4xLTEuNyA5LjItMi41czYuMS0xLjQgOS4yLTJjMy42LS43IDcuMy0xLjMgMTAuOS0xLjljMy4yLS41IDYuNC0uOCA5LjUtMS4xbC40IDBjMy4zLS4zIDYuNy0uNSAxMC0uN2MxLjYtLjEgMy4yLS4xIDQuOC0uMnMzLjItLjEgNC44LS4xYzMuNiAwIDcuMSAuMSAxMC42IC4zYzMuNSAuMiA2LjkgLjQgMTAuMyAuOGMzLjYgLjMgNy4xIC44IDEwLjYgMS4zYzMuMyAuNSA2LjYgMS4xIDkuOCAxLjdjMy42IC43IDcuMSAxLjUgMTAuNiAyLjRjMy4yIC44IDYuNCAxLjcgOS42IDIuN2MxLjggLjUgMy41IDEuMSA1LjMgMS43YzEuNSAuNSAyLjkgMSA0LjQgMS41YzMuMyAxLjIgNi41IDIuNCA5LjYgMy44YzMuMSAxLjMgNi4yIDIuNyA5LjMgNC4yYzMgMS40IDYgMyA4LjkgNC42YzIuOSAxLjYgNS43IDMuMiA4LjUgNC45YzMuMSAxLjkgNi4xIDMuOCA5LjEgNS45YzIuNyAxLjggNS4zIDMuNyA3LjkgNS42YzIuNiAyIDUuMSA0IDcuNiA2YzIuNiAyLjEgNS4xIDQuMyA3LjUgNi41czQuOSA0LjUgNy4yIDYuOUwyNzguNiAyMzMuNGMtMTIuNSAxMi41LTEyLjUgMzIuOCAwIDQ1LjNMNDAzLjEgNDAzLjFjLTIuNCAyLjQtNC44IDQuNi03LjIgNi45cy01IDQuNC03LjUgNi41Yy0yLjUgMi4xLTUuMSA0LjEtNy42IDZjLTIuNiAxLjktNS4yIDMuOC03LjkgNS43Yy0uMyAuMi0uNiAuNC0uOCAuNmMtMi43IDEuOC01LjUgMy42LTguMyA1LjNjLTIuOCAxLjctNS42IDMuMy04LjUgNC45Yy0yLjkgMS42LTUuOSAzLjEtOSA0LjZjLTMgMS40LTYuMSAyLjgtOS4yIDQuMmMtMy4xIDEuMy02LjMgMi42LTkuNCAzLjdjLTMuMSAxLjEtNi4yIDIuMi05LjMgMy4yYy0zLjQgMS4xLTYuNyAyLTEwLjIgMi45Yy0zLjIgLjgtNi40IDEuNi05LjYgMi4yYy0zLjYgLjgtNy4yIDEuNC0xMC44IDEuOWMtMy40IC41LTYuOCAuOS0xMC4xIDEuM2MtLjUgLjEtMSAuMS0xLjUgLjFjLTEgLjEtMS45IC4yLTIuOSAuM2MtLjQgMC0uOCAuMS0xLjIgLjFjLTEuNyAuMS0zLjQgLjItNSAuM2MtMy42IC4yLTcuMiAuMy0xMC44IC4zYy0zLjMgMC02LjYtLjEtOS45LS4yYy0zLjMtLjItNi42LS40LTkuOC0uN2MtMy4zLS4zLTYuNi0uNy0xMC0xLjJjLTMuMS0uNC02LjItLjktOS4yLTEuNWMtLjYtLjEtMS4xLS4yLTEuNy0uM2MtMy4xLS42LTYuMi0xLjMtOS4yLTJzLTYuMS0xLjYtOS4yLTIuNWMtMy4zLTEtNi42LTItOS45LTMuMmMtMy4xLTEuMS02LjItMi4zLTkuNC0zLjZjLTMuMS0xLjMtNi4yLTIuNi05LjQtNC4xYy0xLjQtLjctMi44LTEuMy00LjItMmMtLjQtLjItLjgtLjQtMS4yLS42Yy0uNS0uMy0xLS41LTEuNS0uOGMtLjctLjQtMS41LS44LTIuMi0xLjJjLTIuOS0xLjYtNS44LTMuMi04LjYtNC44Yy0zLjItMS45LTYuNC0zLjktOS41LTUuOWMtMi44LTEuOS01LjUtMy44LTguMi01LjdjLTIuNy0yLTUuNS00LjEtOC4xLTYuM2MtMi43LTIuMi01LjQtNC41LTgtNi45Yy0xLjMtMS4yLTIuNi0yLjQtMy45LTMuNnMtMi42LTIuNS0zLjktMy44Yy0yLjUtMi41LTUtNS4xLTcuNS03LjhjLTEuMS0xLjItMi4yLTIuNS0zLjMtMy43bC0uNC0uNGMtLjgtLjktMS41LTEuOC0yLjItMi43Yy0uNC0uNC0uNy0uOC0xLTEuM2MtMi4xLTIuNi00LjItNS4zLTYuMi04Yy0yLjItMy00LjMtNi4xLTYuNC05LjJjLTEuOC0yLjgtMy42LTUuNi01LjMtOC41Yy0xLjctMy0zLjQtNi01LTljLTEuNi0zLTMtNi00LjUtOXMtMi43LTYuMS00LjEtOS40Yy0uNS0xLjItLjktMi4zLTEuNC0zLjVjLS4xLS4zLS4yLS42LS4zLS45Yy0uNS0xLjQtMS0yLjgtMS41LTQuMmMtNS45LTE2LjYtOS42LTMzLjgtMTEuMS01MS4yYy0uMS0uOC0uMS0xLjYtLjItMi40Yy0uMS0uNy0uMS0xLjQtLjItMi4zYy0uMS0xLjEtLjEtMi4yLS4yLTMuM2MtLjItMy40LS4zLTYuOS0uMy0xMC4zYzAtMS42IDAtMy4zIC4xLTQuOHpNMTI4IDI1NmEzMiAzMiAwIDEgMCA2NCAwIDMyIDMyIDAgMSAwIC02NCAwem02NC0xMjhhMzIgMzIgMCAxIDAgNjQgMCAzMiAzMiAwIDEgMCAtNjQgMHptMzIgMjU2YTMyIDMyIDAgMSAwIDY0IDAgMzIgMzIgMCAxIDAgLTY0IDB6TTM2Ni42IDIzMy40YzM3LjMtMzcuMyA3NC42LTc0LjYgMTEyLTExMkM1MDkuNCAxNTcuNyA1MjggMjA0LjcgNTI4IDI1NnMtMTguNiA5OC4zLTQ5LjQgMTM0LjZjLTM3LjMtMzcuMy03NC42LTc0LjYtMTEyLTExMmMtMTIuNS0xMi41LTEyLjUtMzIuOCAwLTQ1LjN6TTQxNiAyNTZhMzIgMzIgMCAxIDAgNjQgMCAzMiAzMiAwIDEgMCAtNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQwMy4xIDQwMy4xQzM2NS40IDQ0MC43IDMxMy40IDQ2NCAyNTYgNDY0QzE0MS4xIDQ2NCA0OCAzNzAuOSA0OCAyNTZTMTQxLjEgNDggMjU2IDQ4YzU3LjQgMCAxMDkuNCAyMy4zIDE0Ny4xIDYwLjlsMTEuMy0xMS4zQzQyNi45IDg1LjEgNDI3IDY0LjcgNDEzIDUzLjhDMzY5LjcgMjAuMSAzMTUuMiAwIDI1NiAwQzExNC42IDAgMCAxMTQuNiAwIDI1NlMxMTQuNiA1MTIgMjU2IDUxMmM1OS4yIDAgMTEzLjctMjAuMSAxNTctNTMuOGMxMy45LTEwLjkgMTMuOC0zMS4zIDEuMy00My44bC0xMS4zLTExLjN6bTc1LjUtMTIuNWw5LjkgOS45YzEzLjEgMTMuMSAzNC43IDEyLjUgNDQuOS0zQzU2MC4zIDM1NyA1NzYgMzA4LjMgNTc2IDI1NnMtMTUuNy0xMDEtNDIuNi0xNDEuNWMtMTAuMi0xNS40LTMxLjgtMTYtNDQuOS0zbC05LjkgOS45QzUwOS40IDE1Ny43IDUyOCAyMDQuNyA1MjggMjU2cy0xOC42IDk4LjMtNDkuNCAxMzQuNnpNMTkyIDEyOGEzMiAzMiAwIDEgMSA2NCAwIDMyIDMyIDAgMSAxIC02NCAwek0xMjggMjU2YTMyIDMyIDAgMSAxIDY0IDAgMzIgMzIgMCAxIDEgLTY0IDB6TTI1NiA0MTZhMzIgMzIgMCAxIDAgMC02NCAzMiAzMiAwIDEgMCAwIDY0ek00MTYgMjU2YTMyIDMyIDAgMSAxIDY0IDAgMzIgMzIgMCAxIDEgLTY0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Pizza: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M48.1 251.2c0-1.8 .1-3.6 .2-5.4c.1-1.1 .1-2.2 .2-3.3c0-.8 .1-1.6 .2-2.3c.1-.8 .1-1.6 .2-2.4c1.5-17.6 5.3-34.9 11.3-51.7c.3-.9 .6-1.8 1-2.7c.1-.3 .2-.7 .4-1c.6-1.5 1.1-3 1.8-4.6c1.3-3.1 2.6-6.2 4.1-9.5c.6-1.4 1.3-2.8 2-4.2c.7-1.4 1.4-2.8 2.1-4.1c3.3-6.3 6.9-12.4 10.7-18.3c.2-.2 .3-.5 .5-.7c1.8-2.7 3.7-5.4 5.7-8.1c2-2.7 4-5.4 6.3-8.1c2.2-2.7 4.5-5.4 6.9-8c1.2-1.3 2.4-2.6 3.6-3.9s2.5-2.6 3.8-3.8c2.5-2.5 5.1-5 7.8-7.4s5.3-4.7 8.2-7c2.6-2.1 5.3-4.2 8-6.2c8.5-6.3 17.5-11.8 26.7-16.7c3-1.6 6-3 9-4.5s6.1-2.7 9.4-4.1c1.2-.5 2.4-.9 3.5-1.4c.3-.1 .5-.2 .8-.3c1.4-.5 2.8-1 4.2-1.5c.2-.1 .4-.2 .6-.2c3.1-1.1 6.2-2.1 9.3-3l.6-.2c3-.9 6.1-1.7 9.2-2.5s6.1-1.4 9.2-2c3.6-.7 7.3-1.3 10.9-1.9c3.2-.5 6.4-.8 9.5-1.1l.4 0c3.3-.3 6.7-.5 10-.7c1.6-.1 3.2-.1 4.8-.2s3.2-.1 4.8-.1c3.6 0 7.1 .1 10.6 .3c3.5 .2 6.9 .4 10.3 .8c3.6 .3 7.1 .8 10.6 1.3c3.3 .5 6.6 1.1 9.8 1.7c3.6 .7 7.1 1.5 10.6 2.4c3.2 .8 6.4 1.7 9.6 2.7c1.8 .5 3.5 1.1 5.3 1.7c1.5 .5 2.9 1 4.4 1.5c3.3 1.2 6.5 2.4 9.6 3.8c3.1 1.3 6.2 2.7 9.3 4.2c3 1.4 6 3 8.9 4.6c2.9 1.6 5.7 3.2 8.5 4.9c3.1 1.9 6.1 3.8 9.1 5.9c2.7 1.8 5.3 3.7 7.9 5.6c2.6 2 5.1 4 7.6 6c2.6 2.1 5.1 4.3 7.5 6.5s4.9 4.5 7.2 6.9L278.6 233.4c-12.5 12.5-12.5 32.8 0 45.3L403.1 403.1c-2.4 2.4-4.8 4.6-7.2 6.9s-5 4.4-7.5 6.5c-2.5 2.1-5.1 4.1-7.6 6c-2.6 1.9-5.2 3.8-7.9 5.7c-.3 .2-.6 .4-.8 .6c-2.7 1.8-5.5 3.6-8.3 5.3c-2.8 1.7-5.6 3.3-8.5 4.9c-2.9 1.6-5.9 3.1-9 4.6c-3 1.4-6.1 2.8-9.2 4.2c-3.1 1.3-6.3 2.6-9.4 3.7c-3.1 1.1-6.2 2.2-9.3 3.2c-3.4 1.1-6.7 2-10.2 2.9c-3.2 .8-6.4 1.6-9.6 2.2c-3.6 .8-7.2 1.4-10.8 1.9c-3.4 .5-6.8 .9-10.1 1.3c-.5 .1-1 .1-1.5 .1c-1 .1-1.9 .2-2.9 .3c-.4 0-.8 .1-1.2 .1c-1.7 .1-3.4 .2-5 .3c-3.6 .2-7.2 .3-10.8 .3c-3.3 0-6.6-.1-9.9-.2c-3.3-.2-6.6-.4-9.8-.7c-3.3-.3-6.6-.7-10-1.2c-3.1-.4-6.2-.9-9.2-1.5c-.6-.1-1.1-.2-1.7-.3c-3.1-.6-6.2-1.3-9.2-2s-6.1-1.6-9.2-2.5c-3.3-1-6.6-2-9.9-3.2c-3.1-1.1-6.2-2.3-9.4-3.6c-3.1-1.3-6.2-2.6-9.4-4.1c-1.4-.7-2.8-1.3-4.2-2c-.4-.2-.8-.4-1.2-.6c-.5-.3-1-.5-1.5-.8c-.7-.4-1.5-.8-2.2-1.2c-2.9-1.6-5.8-3.2-8.6-4.8c-3.2-1.9-6.4-3.9-9.5-5.9c-2.8-1.9-5.5-3.8-8.2-5.7c-2.7-2-5.5-4.1-8.1-6.3c-2.7-2.2-5.4-4.5-8-6.9c-1.3-1.2-2.6-2.4-3.9-3.6s-2.6-2.5-3.9-3.8c-2.5-2.5-5-5.1-7.5-7.8c-1.1-1.2-2.2-2.5-3.3-3.7l-.4-.4c-.8-.9-1.5-1.8-2.2-2.7c-.4-.4-.7-.8-1-1.3c-2.1-2.6-4.2-5.3-6.2-8c-2.2-3-4.3-6.1-6.4-9.2c-1.8-2.8-3.6-5.6-5.3-8.5c-1.7-3-3.4-6-5-9c-1.6-3-3-6-4.5-9s-2.7-6.1-4.1-9.4c-.5-1.2-.9-2.3-1.4-3.5c-.1-.3-.2-.6-.3-.9c-.5-1.4-1-2.8-1.5-4.2c-5.9-16.6-9.6-33.8-11.1-51.2c-.1-.8-.1-1.6-.2-2.4c-.1-.7-.1-1.4-.2-2.3c-.1-1.1-.1-2.2-.2-3.3c-.2-3.4-.3-6.9-.3-10.3c0-1.6 0-3.3 .1-4.8zM128 256a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm64-128a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32 256a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM366.6 233.4c37.3-37.3 74.6-74.6 112-112C509.4 157.7 528 204.7 528 256s-18.6 98.3-49.4 134.6c-37.3-37.3-74.6-74.6-112-112c-12.5-12.5-12.5-32.8 0-45.3zM416 256a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
            <path d="M403.1 403.1C365.4 440.7 313.4 464 256 464C141.1 464 48 370.9 48 256S141.1 48 256 48c57.4 0 109.4 23.3 147.1 60.9l11.3-11.3C426.9 85.1 427 64.7 413 53.8C369.7 20.1 315.2 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c59.2 0 113.7-20.1 157-53.8c13.9-10.9 13.8-31.3 1.3-43.8l-11.3-11.3zm75.5-12.5l9.9 9.9c13.1 13.1 34.7 12.5 44.9-3C560.3 357 576 308.3 576 256s-15.7-101-42.6-141.5c-10.2-15.4-31.8-16-44.9-3l-9.9 9.9C509.4 157.7 528 204.7 528 256s-18.6 98.3-49.4 134.6zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM128 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM256 416a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM416 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default Pizza;
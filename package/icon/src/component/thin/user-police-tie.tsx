
import { Icon } from "../../index";

/**
 * A component that renders the `user-police-tie` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-police-tie?s=thin user-police-tie}
 * @preview ![user-police-tie](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjIyLjEgMTYuMkw2Mi4yIDUyLjFjLTIuOCAuNi01LjEgMi44LTUuOSA1LjZzLS4xIDUuOCAyIDcuOUw4Ny41IDk1LjFjMS41IDEuNSAyLjMgMy41IDIuMyA1LjZsMCAyNi45YzE1LjcgMTAuMiA0Ni40IDI3IDEwNS41IDMxLjNDMTczLjkgMTM4LjUgMTY4IDExMC4xIDE2OCA5MS4yYzAtMy4zIDItNi4yIDUtNy40bDQ4LTE5LjJjMS45LS44IDQtLjggNS45IDBsNDggMTkuMmMzIDEuMiA1IDQuMiA1IDcuNGMwIDE4LjktNS45IDQ3LjMtMjcuMiA2Ny42YzU5LTQuMyA4OS42LTIxLjEgMTA1LjItMzEuMmwwLTI2LjljMC0yLjEgLjgtNC4xIDIuMy01LjZsMjkuMS0yOS41YzItMi4xIDIuOC01LjEgMi03LjlzLTMuMS00LjktNS45LTUuNmwtMTU5LjktMzZjLTEuMi0uMy0yLjQtLjMtMy41IDB6bS4yIDE1OS42Yy04MC42LS4zLTEyMS0yMS43LTE0MS4zLTM0LjljLTQuNi0zLTcuMi04LTcuMi0xMy4zbDAtMjMuNkw0Ni45IDc2LjhjLTYuMS02LjItOC40LTE1LjItNi0yMy42czkuMy0xNC44IDE3LjgtMTYuN0wyMTguNiAuNmMzLjUtLjggNy4xLS44IDEwLjUgMEwzODkgMzYuNWM4LjUgMS45IDE1LjMgOC4zIDE3LjggMTYuN3MuMiAxNy40LTYgMjMuNkwzNzQgMTA0bDAgMjMuNmMwIDUuMy0yLjYgMTAuMy03LjIgMTMuM2MtMjAuMyAxMy4yLTYwLjcgMzQuNi0xNDEuMSAzNC45Yy0xLjEgLjItMi4zIC4yLTMuNCAwek0xMjguMSAzNTIuMWw2OS40IDkyLjUgMTctMjguMy0zNy01MS43Yy0xLjctMi40LTItNS42LS42LTguM3M0LjEtNC4zIDcuMS00LjNsODAgMGMzIDAgNS43IDEuNyA3LjEgNC4zczEuMSA1LjktLjYgOC4zbC0zNyA1MS43IDE3IDI4LjMgNjkuNC05Mi41QzM5MS4yIDM1NS40IDQ0OCA0MTQuMyA0NDggNDg2LjRjMCAxNC4xLTExLjUgMjUuNi0yNS42IDI1LjZMMjUuNiA1MTJDMTEuNSA1MTIgMCA1MDAuNSAwIDQ4Ni40YzAtNzIuMSA1Ni44LTEzMSAxMjguMS0xMzQuM3pNMjE0IDQ2Ni43TDIyNCA0ODBsMTAtMTMuMyA2LjItOC4yTDIyNCA0MzEuNmwtMTYuMiAyNi45IDYuMiA4LjJ6bTIyLjggMjIuOUwyMzIgNDk2bDE5MC40IDBjNS4zIDAgOS42LTQuMyA5LjYtOS42YzAtNjAuNy00NS43LTExMC44LTEwNC42LTExNy42TDIzNi44IDQ4OS42em0tMjUuNiAwTDEyMC42IDM2OC44QzYxLjcgMzc1LjYgMTYgNDI1LjcgMTYgNDg2LjRjMCA1LjMgNC4zIDkuNiA5LjYgOS42TDIxNiA0OTZsLTQuOC02LjR6TTk2IDE5MmMwLTIuOSAuMS01LjggLjMtOC43YzQuOCAyLjMgMTAuMSA0LjUgMTUuNyA2LjdjMCAuNyAwIDEuMyAwIDJjMCA2MS45IDUwLjEgMTEyIDExMiAxMTJzMTEyLTUwLjEgMTEyLTExMmMwLS43IDAtMS4zIDAtMmM1LjctMi4yIDEwLjktNC40IDE1LjctNi43Yy4yIDIuOSAuMyA1LjggLjMgOC43YzAgNzAuNy01Ny4zIDEyOC0xMjggMTI4cy0xMjgtNTcuMy0xMjgtMTI4em0xMjgtMzIuN2MyOS0xMy43IDM4LjUtNDEuOCAzOS44LTYyLjdMMjI0IDgwLjYgMTg0LjIgOTYuNWMxLjMgMjAuOSAxMC44IDQ5IDM5LjggNjIuN3ptMCAyNDNMMjQ4LjUgMzY4bC00OC45IDBMMjI0IDQwMi4yeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UserPoliceTie: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M222.1 16.2L62.2 52.1c-2.8 .6-5.1 2.8-5.9 5.6s-.1 5.8 2 7.9L87.5 95.1c1.5 1.5 2.3 3.5 2.3 5.6l0 26.9c15.7 10.2 46.4 27 105.5 31.3C173.9 138.5 168 110.1 168 91.2c0-3.3 2-6.2 5-7.4l48-19.2c1.9-.8 4-.8 5.9 0l48 19.2c3 1.2 5 4.2 5 7.4c0 18.9-5.9 47.3-27.2 67.6c59-4.3 89.6-21.1 105.2-31.2l0-26.9c0-2.1 .8-4.1 2.3-5.6l29.1-29.5c2-2.1 2.8-5.1 2-7.9s-3.1-4.9-5.9-5.6l-159.9-36c-1.2-.3-2.4-.3-3.5 0zm.2 159.6c-80.6-.3-121-21.7-141.3-34.9c-4.6-3-7.2-8-7.2-13.3l0-23.6L46.9 76.8c-6.1-6.2-8.4-15.2-6-23.6s9.3-14.8 17.8-16.7L218.6 .6c3.5-.8 7.1-.8 10.5 0L389 36.5c8.5 1.9 15.3 8.3 17.8 16.7s.2 17.4-6 23.6L374 104l0 23.6c0 5.3-2.6 10.3-7.2 13.3c-20.3 13.2-60.7 34.6-141.1 34.9c-1.1 .2-2.3 .2-3.4 0zM128.1 352.1l69.4 92.5 17-28.3-37-51.7c-1.7-2.4-2-5.6-.6-8.3s4.1-4.3 7.1-4.3l80 0c3 0 5.7 1.7 7.1 4.3s1.1 5.9-.6 8.3l-37 51.7 17 28.3 69.4-92.5C391.2 355.4 448 414.3 448 486.4c0 14.1-11.5 25.6-25.6 25.6L25.6 512C11.5 512 0 500.5 0 486.4c0-72.1 56.8-131 128.1-134.3zM214 466.7L224 480l10-13.3 6.2-8.2L224 431.6l-16.2 26.9 6.2 8.2zm22.8 22.9L232 496l190.4 0c5.3 0 9.6-4.3 9.6-9.6c0-60.7-45.7-110.8-104.6-117.6L236.8 489.6zm-25.6 0L120.6 368.8C61.7 375.6 16 425.7 16 486.4c0 5.3 4.3 9.6 9.6 9.6L216 496l-4.8-6.4zM96 192c0-2.9 .1-5.8 .3-8.7c4.8 2.3 10.1 4.5 15.7 6.7c0 .7 0 1.3 0 2c0 61.9 50.1 112 112 112s112-50.1 112-112c0-.7 0-1.3 0-2c5.7-2.2 10.9-4.4 15.7-6.7c.2 2.9 .3 5.8 .3 8.7c0 70.7-57.3 128-128 128s-128-57.3-128-128zm128-32.7c29-13.7 38.5-41.8 39.8-62.7L224 80.6 184.2 96.5c1.3 20.9 10.8 49 39.8 62.7zm0 243L248.5 368l-48.9 0L224 402.2z" />
    </Icon>
);

export default UserPoliceTie;
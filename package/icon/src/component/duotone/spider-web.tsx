
import { Icon, generic } from "../../index";

/**
 * A component that renders the `spider-web` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spider-web?s=duotone spider-web}
 * @preview ![spider-web](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02OC40IDI1NmwyMy4zIDI4IDQ0LjYgMGMyMS45IDI2LjYgMzguOSA1Ni45IDUwLjQgODkuNGwuNyAyLTIyLjIgMzguOWM0LjIgMTEuMyA4LjUgMjIuNSAxMi43IDMzLjhjMTIuMS0yLjMgMjQuMy00LjUgMzYuNC02LjhMMjM1LjEgNDA1bC44LS4yYzM0LjQtNi4xIDY5LjctNi4xIDEwNC4xIDBsLjggLjIgMjAuOCAzNi40IDM2LjQgNi44IDEyLjctMzMuOC0yMi4yLTM4LjkgLjctMmMxMS41LTMyLjUgMjguNS02Mi44IDUwLjQtODkuNGw0NC42IDBjNy44LTkuMyAxNS42LTE4LjcgMjMuMy0yOGMtNy44LTkuMy0xNS42LTE4LjctMjMuMy0yOGwtNDQuNiAwYy0yMS45LTI2LjYtMzguOS01Ni45LTUwLjQtODkuNGwtLjctMiAyMi4yLTM4LjljLTQuMi0xMS4zLTguNS0yMi41LTEyLjctMzMuOGMtMTIuMSAyLjMtMjQuMyA0LjUtMzYuNCA2LjhMMzQwLjkgMTA3bC0uOCAuMWMtMzQuNCA2LjEtNjkuNyA2LjEtMTA0LjEgMGwtLjgtLjFMMjE0LjQgNzAuN2MtMTIuMS0yLjMtMjQuMy00LjUtMzYuNC02LjhjLTQuMiAxMS4zLTguNSAyMi41LTEyLjcgMzMuOGwyMi4yIDM4LjktLjcgMmMtMTEuNSAzMi41LTI4LjUgNjIuOC01MC40IDg5LjRsLTQ0LjYgMEw2OC40IDI1NnptMTI3LjQtMjhjOC4xLTEyLjQgMTUuNC0yNS4zIDIxLjgtMzguN0wyMzkuOCAyMjhsLTQzLjkgMHptMCA1Nmw0My45IDAtMjIuMSAzOC43Yy02LjQtMTMuNC0xMy43LTI2LjMtMjEuOC0zOC43em02OS0xMjVjMTUuNCAxIDMwLjkgMSA0Ni4zIDBMMjg4IDE5OS42IDI2NC44IDE1OXptMCAxOTRMMjg4IDMxMi40IDMxMS4yIDM1M2MtMTUuNC0xLTMwLjktMS00Ni4zIDB6bTcxLjQtMTI1bDIyLjEtMzguN2M2LjQgMTMuNCAxMy43IDI2LjMgMjEuOCAzOC43bC00My45IDB6bTAgNTZsNDMuOSAwYy04LjEgMTIuNC0xNS40IDI1LjMtMjEuOCAzOC43TDMzNi4yIDI4NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEzMy44IDIyLjJjNC44LTEyLjcgMTgtMjAuMiAzMS40LTE3LjdsNjkgMTIuOWMzNS42IDYuNyA3Mi4xIDYuNyAxMDcuNiAwbDY5LTEyLjljMTMuNC0yLjUgMjYuNiA1IDMxLjQgMTcuN2wyOC45IDc3LjJjMTEuNSAzMC43IDI4LjEgNTkuMiA0OS4xIDg0LjRsNDUuMyA1NC4zYzguNyAxMC40IDguNyAyNS41IDAgMzUuOWwtNDUuMyA1NC4zYy0yMSAyNS4yLTM3LjYgNTMuNy00OS4xIDg0LjRsLTI4LjkgNzcuMmMtNC44IDEyLjctMTggMjAuMi0zMS40IDE3LjdsLTY5LTEyLjljLTM1LjYtNi43LTcyLjEtNi43LTEwNy42IDBsLTY5IDEyLjljLTEzLjQgMi41LTI2LjYtNS0zMS40LTE3LjdsLTI4LjktNzcuMkM5My4zIDM4MiA3Ni43IDM1My40IDU1LjcgMzI4LjJMMTAuNSAyNzMuOWMtOC43LTEwLjQtOC43LTI1LjUgMC0zNS45bDQ1LjMtNTQuM2MyMS0yNS4yIDM3LjYtNTMuNyA0OS4xLTg0LjRsMjguOS03Ny4yek0xNzggNjMuOUwxNTcuMyAxMTljLTEzLjcgMzYuNi0zMy41IDcwLjYtNTguNSAxMDAuNkw2OC40IDI1NmwzMC4zIDM2LjRjMjUgMzAgNDQuOCA2NCA1OC41IDEwMC42TDE3OCA0NDguMWw0NS45LTguNmM0Mi40LTcuOSA4NS45LTcuOSAxMjguMyAwbDQ1LjkgOC42TDQxOC43IDM5M2MxMy43LTM2LjYgMzMuNS03MC42IDU4LjUtMTAwLjZMNTA3LjYgMjU2bC0zMC4zLTM2LjRjLTI1LTMwLTQ0LjgtNjQtNTguNS0xMDAuNkwzOTggNjMuOWwtNDUuOSA4LjZjLTQyLjQgNy45LTg1LjkgNy45LTEyOC4zIDBMMTc4IDYzLjl6Ii8+PC9zdmc+|width=32|height=32)
 */
const SpiderWeb: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M68.4 256l23.3 28 44.6 0c21.9 26.6 38.9 56.9 50.4 89.4l.7 2-22.2 38.9c4.2 11.3 8.5 22.5 12.7 33.8c12.1-2.3 24.3-4.5 36.4-6.8L235.1 405l.8-.2c34.4-6.1 69.7-6.1 104.1 0l.8 .2 20.8 36.4 36.4 6.8 12.7-33.8-22.2-38.9 .7-2c11.5-32.5 28.5-62.8 50.4-89.4l44.6 0c7.8-9.3 15.6-18.7 23.3-28c-7.8-9.3-15.6-18.7-23.3-28l-44.6 0c-21.9-26.6-38.9-56.9-50.4-89.4l-.7-2 22.2-38.9c-4.2-11.3-8.5-22.5-12.7-33.8c-12.1 2.3-24.3 4.5-36.4 6.8L340.9 107l-.8 .1c-34.4 6.1-69.7 6.1-104.1 0l-.8-.1L214.4 70.7c-12.1-2.3-24.3-4.5-36.4-6.8c-4.2 11.3-8.5 22.5-12.7 33.8l22.2 38.9-.7 2c-11.5 32.5-28.5 62.8-50.4 89.4l-44.6 0L68.4 256zm127.4-28c8.1-12.4 15.4-25.3 21.8-38.7L239.8 228l-43.9 0zm0 56l43.9 0-22.1 38.7c-6.4-13.4-13.7-26.3-21.8-38.7zm69-125c15.4 1 30.9 1 46.3 0L288 199.6 264.8 159zm0 194L288 312.4 311.2 353c-15.4-1-30.9-1-46.3 0zm71.4-125l22.1-38.7c6.4 13.4 13.7 26.3 21.8 38.7l-43.9 0zm0 56l43.9 0c-8.1 12.4-15.4 25.3-21.8 38.7L336.2 284z" />
            <path d="M133.8 22.2c4.8-12.7 18-20.2 31.4-17.7l69 12.9c35.6 6.7 72.1 6.7 107.6 0l69-12.9c13.4-2.5 26.6 5 31.4 17.7l28.9 77.2c11.5 30.7 28.1 59.2 49.1 84.4l45.3 54.3c8.7 10.4 8.7 25.5 0 35.9l-45.3 54.3c-21 25.2-37.6 53.7-49.1 84.4l-28.9 77.2c-4.8 12.7-18 20.2-31.4 17.7l-69-12.9c-35.6-6.7-72.1-6.7-107.6 0l-69 12.9c-13.4 2.5-26.6-5-31.4-17.7l-28.9-77.2C93.3 382 76.7 353.4 55.7 328.2L10.5 273.9c-8.7-10.4-8.7-25.5 0-35.9l45.3-54.3c21-25.2 37.6-53.7 49.1-84.4l28.9-77.2zM178 63.9L157.3 119c-13.7 36.6-33.5 70.6-58.5 100.6L68.4 256l30.3 36.4c25 30 44.8 64 58.5 100.6L178 448.1l45.9-8.6c42.4-7.9 85.9-7.9 128.3 0l45.9 8.6L418.7 393c13.7-36.6 33.5-70.6 58.5-100.6L507.6 256l-30.3-36.4c-25-30-44.8-64-58.5-100.6L398 63.9l-45.9 8.6c-42.4 7.9-85.9 7.9-128.3 0L178 63.9z" />
    </Icon>
);

export default SpiderWeb;
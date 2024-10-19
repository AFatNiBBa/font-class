
import { Icon } from "../../index";

/**
 * A component that renders the `child-combatant` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/child-combatant?s=thin child-combatant}
 * @preview ![child-combatant](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjI0IDY0YTQ4IDQ4IDAgMSAwIC05NiAwIDQ4IDQ4IDAgMSAwIDk2IDB6TTExMiA2NGE2NCA2NCAwIDEgMSAxMjggMEE2NCA2NCAwIDEgMSAxMTIgNjR6TTk2LjkgMjIyLjVMNDcuMSAzMTUuOGMtMi4xIDMuOS02LjkgNS40LTEwLjggMy4zcy01LjQtNi45LTMuMy0xMC44TDgyLjcgMjE1YzE4LjEtMzMuOSA1My4zLTU1IDkxLjctNTVsMyAwYzM4LjQgMCA3My42IDIxLjEgOTEuNyA1NWw0OS44IDkzLjJjMi4xIDMuOSAuNiA4LjctMy4zIDEwLjhzLTguNyAuNi0xMC44LTMuM2wtNDkuOC05My4yQzIzOS44IDE5My45IDIxMCAxNzYgMTc3LjUgMTc2bC0zIDBjLTMyLjUgMC02Mi4zIDE3LjktNzcuNiA0Ni41ek0xMDQgMjgwYzQuNCAwIDggMy42IDggOGwwIDE4OGMwIDExIDkgMjAgMjAgMjBzMjAtOSAyMC0yMGwwLTg0YzAtMTMuMyAxMC43LTI0IDI0LTI0czI0IDEwLjcgMjQgMjRsMCA4NGMwIDExIDkgMjAgMjAgMjBzMjAtOSAyMC0yMGwwLTE4OGMwLTQuNCAzLjYtOCA4LThzOCAzLjYgOCA4bDAgMTg4YzAgMTkuOS0xNi4xIDM2LTM2IDM2cy0zNi0xNi4xLTM2LTM2bDAtODRjMC00LjQtMy42LTgtOC04cy04IDMuNi04IDhsMCA4NGMwIDE5LjktMTYuMSAzNi0zNiAzNnMtMzYtMTYuMS0zNi0zNmwwLTE4OGMwLTQuNCAzLjYtOCA4LTh6TTQ1NiAxNDYuMWMtNC45LTIuOS04LTguMS04LTEzLjhMNDQ4IDE2bC04IDAtOCAwIDAgMTE2LjNjMCA1LjctMyAxMS04IDEzLjhjLTQuOCAyLjgtOCA4LTggMTMuOWwwIDMyIDAgMTkyIDU0IDAgMiAwIDU2IDAgMC0xNi00OCAwYy04LjggMC0xNi03LjItMTYtMTZsMC0yNi43IDAtNTYgMC0xMy4zIDAtOTZjMC01LjktMy4yLTExLjEtOC0xMy45ek00MTYgNDk2bDcyLjkgMEw0NTUgNDA1LjZjLS43LTEuOC0xLTMuNy0xLTUuNmwtMzggMCAwIDk2em01Ni05NmwtMiAwIDYgMTYgMjcuOSA3NC40YzMuOSAxMC41LTMuOCAyMS42LTE1IDIxLjZMNDE2IDUxMmMtOC44IDAtMTYtNy4yLTE2LTE2bDAtODAgMC0xNi0xNiAwYy0xNy43IDAtMzItMTQuMy0zMi0zMmwwLTE0NGMwLTE3LjcgMTQuMy0zMiAzMi0zMmwxNiAwIDAtMTYgMC0xNmMwLTExLjggNi40LTIyLjIgMTYtMjcuN0w0MTYgMzJsMC0xNi04IDBjLTQuNCAwLTgtMy42LTgtOHMzLjYtOCA4LThsOCAwIDI0IDAgOCAwYzguOCAwIDE2IDcuMiAxNiAxNmwwIDExNi4zYzkuNiA1LjUgMTYgMTUuOSAxNiAyNy43bDAgNDggMCA0NC41IDAgMy41IDAgOCAwIDUuMyAxNi01LjMgMC01NmMwLTguOCA3LjItMTYgMTYtMTZsMTYgMGM4LjggMCAxNiA3LjIgMTYgMTZsMCA4NC41YzAgNi45LTQuNCAxMy0xMC45IDE1LjJMNDgwIDMyNS4zbDAgMTAuNyAwIDE2IDE2IDAgMzIgMGM4LjggMCAxNiA3LjIgMTYgMTZsMCAxNmMwIDguOC03LjIgMTYtMTYgMTZsLTQwLjkgMEw0NzIgNDAwem04LTkxLjVsNDgtMTYgMC04NC41LTE2IDAgMCA1NmMwIDYuOS00LjQgMTMtMTAuOSAxNS4ybC0xNiA1LjNjLTEuNyAuNi0zLjQgLjgtNS4xIC44bDAgMjMuMXpNMzg0IDIwOGMtOC44IDAtMTYgNy4yLTE2IDE2bDAgMTQ0YzAgOC44IDcuMiAxNiAxNiAxNmwxNiAwIDAtMTc2LTE2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const ChildCombatant: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M224 64a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM112 64a64 64 0 1 1 128 0A64 64 0 1 1 112 64zM96.9 222.5L47.1 315.8c-2.1 3.9-6.9 5.4-10.8 3.3s-5.4-6.9-3.3-10.8L82.7 215c18.1-33.9 53.3-55 91.7-55l3 0c38.4 0 73.6 21.1 91.7 55l49.8 93.2c2.1 3.9 .6 8.7-3.3 10.8s-8.7 .6-10.8-3.3l-49.8-93.2C239.8 193.9 210 176 177.5 176l-3 0c-32.5 0-62.3 17.9-77.6 46.5zM104 280c4.4 0 8 3.6 8 8l0 188c0 11 9 20 20 20s20-9 20-20l0-84c0-13.3 10.7-24 24-24s24 10.7 24 24l0 84c0 11 9 20 20 20s20-9 20-20l0-188c0-4.4 3.6-8 8-8s8 3.6 8 8l0 188c0 19.9-16.1 36-36 36s-36-16.1-36-36l0-84c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 84c0 19.9-16.1 36-36 36s-36-16.1-36-36l0-188c0-4.4 3.6-8 8-8zM456 146.1c-4.9-2.9-8-8.1-8-13.8L448 16l-8 0-8 0 0 116.3c0 5.7-3 11-8 13.8c-4.8 2.8-8 8-8 13.9l0 32 0 192 54 0 2 0 56 0 0-16-48 0c-8.8 0-16-7.2-16-16l0-26.7 0-56 0-13.3 0-96c0-5.9-3.2-11.1-8-13.9zM416 496l72.9 0L455 405.6c-.7-1.8-1-3.7-1-5.6l-38 0 0 96zm56-96l-2 0 6 16 27.9 74.4c3.9 10.5-3.8 21.6-15 21.6L416 512c-8.8 0-16-7.2-16-16l0-80 0-16-16 0c-17.7 0-32-14.3-32-32l0-144c0-17.7 14.3-32 32-32l16 0 0-16 0-16c0-11.8 6.4-22.2 16-27.7L416 32l0-16-8 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l8 0 24 0 8 0c8.8 0 16 7.2 16 16l0 116.3c9.6 5.5 16 15.9 16 27.7l0 48 0 44.5 0 3.5 0 8 0 5.3 16-5.3 0-56c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 84.5c0 6.9-4.4 13-10.9 15.2L480 325.3l0 10.7 0 16 16 0 32 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-40.9 0L472 400zm8-91.5l48-16 0-84.5-16 0 0 56c0 6.9-4.4 13-10.9 15.2l-16 5.3c-1.7 .6-3.4 .8-5.1 .8l0 23.1zM384 208c-8.8 0-16 7.2-16 16l0 144c0 8.8 7.2 16 16 16l16 0 0-176-16 0z" />
    </Icon>
);

export default ChildCombatant;
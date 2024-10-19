
import { Icon } from "../../index";

/**
 * A component that renders the `bin-bottles-recycle` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bin-bottles-recycle?s=thin bin-bottles-recycle}
 * @preview ![bin-bottles-recycle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzg0IDI0bDAgOCAxNiAwIDAtOGMwLTQuNCAzLjYtOCA4LThsODAgMGM0LjQgMCA4IDMuNiA4IDhsMCA4IDE2IDAgMC04YzAtMTMuMy0xMC43LTI0LTI0LTI0TDQwOCAwYy0xMy4zIDAtMjQgMTAuNy0yNCAyNHpNMzUyIDE5MmMwLTUzLTQzLTk2LTk2LTk2TDEyOCA5NmMtNTMgMC05NiA0My05NiA5NmwxNiAwYzAtNDQuMiAzNS44LTgwIDgwLTgwbDEyOCAwYzQ0LjIgMCA4MCAzNS44IDgwIDgwbDE2IDB6bTIyMy4xIDBjLTEuMi05LjctNC42LTE4LjctOS42LTI2LjVjNi40LTkuNSAxMC4xLTIxIDEwLjEtMzMuM2MwLTIzLjItMTMuNC00NC4zLTM0LjUtNTQuMkw1MjggNzEuOGMtMTEtNS4xLTIzLTcuOC0zNS4xLTcuOGwtOTAuNiAwYy0xMi4xIDAtMjQuMSAyLjctMzUuMSA3LjhMMzU0LjEgNzhjLTcuMiAzLjQtMTMuNSA4LTE4LjYgMTMuNmM0LjIgMy4zIDguMiA2LjkgMTEuOSAxMC43YzMuOC00LjEgOC4zLTcuNCAxMy41LTkuOUwzNzQgODYuM2M4LjktNC4xIDE4LjUtNi4zIDI4LjMtNi4zbDkwLjYgMGM5LjggMCAxOS40IDIuMiAyOC4zIDYuM2wxMy4yIDYuMmMxNS40IDcuMiAyNS4yIDIyLjcgMjUuMiAzOS43YzAgOS4xLTIuNyAxNy40LTcuNCAyNC40Yy0zLjYgNS4zLTMuNiAxMi4yLS4yIDE3LjZjMy40IDUuMyA1LjggMTEuNCA2LjkgMTcuOWwxNi4yIDB6TTQ3LjIgMjI0TDMyIDIyNCA4IDIyNGMtNC40IDAtOCAzLjYtOCA4czMuNiA4IDggOGwyNS44IDBMNTYuMSA0NDAuOGM0LjUgNDAuNSAzOC43IDcxLjIgNzkuNSA3MS4ybDM2OC44IDBjNDAuOCAwIDc1LTMwLjYgNzkuNS03MS4yTDYwNi4yIDI0MGwyNS44IDBjNC40IDAgOC0zLjYgOC04cy0zLjYtOC04LThsLTI0IDAtMTUuMiAwLS45IDBMNDguMSAyMjRsLS45IDB6bTIuNyAxNmw1NDAuMiAwTDU2OCA0MzkuMWMtMy42IDMyLjQtMzEgNTYuOS02My42IDU2LjlsLTM2OC44IDBjLTMyLjYgMC02MC0yNC41LTYzLjYtNTYuOUw0OS45IDI0MHpNMzIwIDMwNGM3LjMgMCAxNCAzLjcgMTcuOSA5LjhsMTYuMiAyNS41YzIuNCAzLjcgNy4zIDQuOCAxMSAyLjVjMy44LTIuNCA0LjktNy4zIDIuNS0xMS4xbC0xNi4yLTI1LjVDMzQ0LjUgMjk0LjUgMzMyLjcgMjg4IDMyMCAyODhjLTEyLjcgMC0yNC41IDYuNC0zMS4zIDE3LjFsLTE1LjQgMjRjLTIuNCAzLjgtMS4zIDguNyAyLjUgMTEuMWMzLjcgMi4zIDguNiAxLjIgMTEtMi41bDE1LjQtMjRjMy45LTYuMSAxMC42LTkuNyAxNy45LTkuN3ptLTYxLjcgNjNjLTMuNy0yLjMtOC42LTEuMi0xMSAyLjVsLTE4LjEgMjguMWMtMy40IDUuMy01LjIgMTEuNC01LjIgMTcuN2MwIDE4LjEgMTQuNyAzMi43IDMyLjcgMzIuN2w0MSAwYzQuNCAwIDgtMy42IDgtOHMtMy42LTgtOC04bC00MSAwYy05LjIgMC0xNi43LTcuNS0xNi43LTE2LjdjMC0zLjIgLjktNi4zIDIuNy05bDE4LjEtMjguMWMyLjQtMy44IDEuMy04LjctMi41LTExLjF6bTc5LjUgNzNjMCA0LjQgMy42IDggOCA4bDM2LjggMGMxOC4xIDAgMzIuOC0xNC43IDMyLjgtMzIuOGMwLTYuMi0xLjgtMTIuMy01LjEtMTcuNmwtMTYuOC0yNi40Yy0yLjQtMy43LTcuMy00LjgtMTEtMi41Yy0zLjggMi40LTQuOSA3LjMtMi41IDExLjFsMTYuOCAyNi40YzEuNyAyLjcgMi42IDUuOCAyLjYgOWMwIDkuMy03LjUgMTYuOC0xNi44IDE2LjhsLTM2LjggMGMtNC40IDAtOCAzLjYtOCA4ek0xNDQgMzJjMC04LjggNy4yLTE2IDE2LTE2bDY0IDBjOC44IDAgMTYgNy4yIDE2IDE2bDAgMjRjMCA0LjQgMy42IDggOCA4bDE2IDBjNC40IDAgOC0zLjYgOC04cy0zLjYtOC04LThsLTggMCAwLTE2YzAtMTcuNy0xNC4zLTMyLTMyLTMyTDE2MCAwYy0xNy43IDAtMzIgMTQuMy0zMiAzMmwwIDE2LTggMGMtNC40IDAtOCAzLjYtOCA4czMuNiA4IDggOGwxNiAwYzQuNCAwIDgtMy42IDgtOGwwLTI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BinBottlesRecycle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M384 24l0 8 16 0 0-8c0-4.4 3.6-8 8-8l80 0c4.4 0 8 3.6 8 8l0 8 16 0 0-8c0-13.3-10.7-24-24-24L408 0c-13.3 0-24 10.7-24 24zM352 192c0-53-43-96-96-96L128 96c-53 0-96 43-96 96l16 0c0-44.2 35.8-80 80-80l128 0c44.2 0 80 35.8 80 80l16 0zm223.1 0c-1.2-9.7-4.6-18.7-9.6-26.5c6.4-9.5 10.1-21 10.1-33.3c0-23.2-13.4-44.3-34.5-54.2L528 71.8c-11-5.1-23-7.8-35.1-7.8l-90.6 0c-12.1 0-24.1 2.7-35.1 7.8L354.1 78c-7.2 3.4-13.5 8-18.6 13.6c4.2 3.3 8.2 6.9 11.9 10.7c3.8-4.1 8.3-7.4 13.5-9.9L374 86.3c8.9-4.1 18.5-6.3 28.3-6.3l90.6 0c9.8 0 19.4 2.2 28.3 6.3l13.2 6.2c15.4 7.2 25.2 22.7 25.2 39.7c0 9.1-2.7 17.4-7.4 24.4c-3.6 5.3-3.6 12.2-.2 17.6c3.4 5.3 5.8 11.4 6.9 17.9l16.2 0zM47.2 224L32 224 8 224c-4.4 0-8 3.6-8 8s3.6 8 8 8l25.8 0L56.1 440.8c4.5 40.5 38.7 71.2 79.5 71.2l368.8 0c40.8 0 75-30.6 79.5-71.2L606.2 240l25.8 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-24 0-15.2 0-.9 0L48.1 224l-.9 0zm2.7 16l540.2 0L568 439.1c-3.6 32.4-31 56.9-63.6 56.9l-368.8 0c-32.6 0-60-24.5-63.6-56.9L49.9 240zM320 304c7.3 0 14 3.7 17.9 9.8l16.2 25.5c2.4 3.7 7.3 4.8 11 2.5c3.8-2.4 4.9-7.3 2.5-11.1l-16.2-25.5C344.5 294.5 332.7 288 320 288c-12.7 0-24.5 6.4-31.3 17.1l-15.4 24c-2.4 3.8-1.3 8.7 2.5 11.1c3.7 2.3 8.6 1.2 11-2.5l15.4-24c3.9-6.1 10.6-9.7 17.9-9.7zm-61.7 63c-3.7-2.3-8.6-1.2-11 2.5l-18.1 28.1c-3.4 5.3-5.2 11.4-5.2 17.7c0 18.1 14.7 32.7 32.7 32.7l41 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-41 0c-9.2 0-16.7-7.5-16.7-16.7c0-3.2 .9-6.3 2.7-9l18.1-28.1c2.4-3.8 1.3-8.7-2.5-11.1zm79.5 73c0 4.4 3.6 8 8 8l36.8 0c18.1 0 32.8-14.7 32.8-32.8c0-6.2-1.8-12.3-5.1-17.6l-16.8-26.4c-2.4-3.7-7.3-4.8-11-2.5c-3.8 2.4-4.9 7.3-2.5 11.1l16.8 26.4c1.7 2.7 2.6 5.8 2.6 9c0 9.3-7.5 16.8-16.8 16.8l-36.8 0c-4.4 0-8 3.6-8 8zM144 32c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 24c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-8 0 0-16c0-17.7-14.3-32-32-32L160 0c-17.7 0-32 14.3-32 32l0 16-8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-24z" />
    </Icon>
);

export default BinBottlesRecycle;
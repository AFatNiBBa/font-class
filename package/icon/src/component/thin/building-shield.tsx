
import { Icon } from "../../index";

/**
 * A component that renders the `building-shield` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-shield?s=thin building-shield}
 * @preview ![building-shield](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggMTZsMjg4IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJsMCAxNjUuNCAxNi02LjQgMC0xNTljMC0yNi41LTIxLjUtNDgtNDgtNDhMNDggMEMyMS41IDAgMCAyMS41IDAgNDhMMCA0NjRjMCAyNi41IDIxLjUgNDggNDggNDhsOTYgMCAxNiAwIDY0IDAgMTYgMCA5NiAwYzYuNyAwIDEzLjEtMS40IDE4LjktMy45Yy01LjItNC0xMC4yLTguMS0xNS0xMi40Yy0xLjMgLjItMi42IC4yLTQgLjJsLTk2IDAgMC04MGMwLTI2LjUtMjEuNS00OC00OC00OHMtNDggMjEuNS00OCA0OGwwIDgwLTk2IDBjLTE3LjcgMC0zMi0xNC4zLTMyLTMyTDE2IDQ4YzAtMTcuNyAxNC4zLTMyIDMyLTMyek0yODAgMjMybC0zMiAwYy0xMy4zIDAtMjQgMTAuNy0yNCAyNGwwIDMyYzAgMTMuMyAxMC43IDI0IDI0IDI0bDguNSAwYy0uMy01LjUtLjUtMTAuOC0uNS0xNS44bDAtLjItOCAwYy00LjQgMC04LTMuNi04LThsMC0zMmMwLTQuNCAzLjYtOCA4LThsMzIgMGMuOSAwIDEuOCAuMiAyLjcgLjVjMi43LTEuNyA1LjUtMy4xIDguNS00LjNsNy42LTNjLTQuNC01LjUtMTEuMi05LjEtMTguOC05LjF6TTIyNCA0OTZsLTY0IDAgMC04MGMwLTE3LjcgMTQuMy0zMiAzMi0zMnMzMiAxNC4zIDMyIDMybDAgODB6TTEwNCAyMzJjLTEzLjMgMC0yNCAxMC43LTI0IDI0bDAgMzJjMCAxMy4zIDEwLjcgMjQgMjQgMjRsMzIgMGMxMy4zIDAgMjQtMTAuNyAyNC0yNGwwLTMyYzAtMTMuMy0xMC43LTI0LTI0LTI0bC0zMiAwem0tOCAyNGMwLTQuNCAzLjYtOCA4LThsMzIgMGM0LjQgMCA4IDMuNiA4IDhsMCAzMmMwIDQuNC0zLjYgOC04IDhsLTMyIDBjLTQuNCAwLTgtMy42LTgtOGwwLTMyem04LTE1MmMtMTMuMyAwLTI0IDEwLjctMjQgMjRsMCAzMmMwIDEzLjMgMTAuNyAyNCAyNCAyNGwzMiAwYzEzLjMgMCAyNC0xMC43IDI0LTI0bDAtMzJjMC0xMy4zLTEwLjctMjQtMjQtMjRsLTMyIDB6bS04IDI0YzAtNC40IDMuNi04IDgtOGwzMiAwYzQuNCAwIDggMy42IDggOGwwIDMyYzAgNC40LTMuNiA4LTggOGwtMzIgMGMtNC40IDAtOC0zLjYtOC04bDAtMzJ6bTEyOCAwbDAgMzJjMCAxMy4zIDEwLjcgMjQgMjQgMjRsMzIgMGMxMy4zIDAgMjQtMTAuNyAyNC0yNGwwLTMyYzAtMTMuMy0xMC43LTI0LTI0LTI0bC0zMiAwYy0xMy4zIDAtMjQgMTAuNy0yNCAyNHptMjQtOGwzMiAwYzQuNCAwIDggMy42IDggOGwwIDMyYzAgNC40LTMuNiA4LTggOGwtMzIgMGMtNC40IDAtOC0zLjYtOC04bDAtMzJjMC00LjQgMy42LTggOC04em02MSAxNjguNmwxMTUtNDYgMCAyNTAuN2MtOTYuMS00Mi45LTEyMC0xMzgtMTIwLTE5Ny4zYzAtMy4zIDItNi4yIDUtNy40ek01NjAgMjk2YzAgNTkuMy0yMy45IDE1NC40LTEyMCAxOTcuM2wwLTI1MC43IDExNSA0NmMzIDEuMiA1IDQuMiA1IDcuNHpNNDQwLjkgMjI1LjdjLTUuNy0yLjMtMTIuMS0yLjMtMTcuOCAwbC0xMjAgNDhDMjk0IDI3Ny40IDI4OCAyODYuMiAyODggMjk2YzAgNjMuMyAyNS45IDE2OC44IDEzNC44IDIxNC4yYzUuOSAyLjUgMTIuNiAyLjUgMTguNSAwQzU1MC4xIDQ2NC44IDU3NiAzNTkuMyA1NzYgMjk2YzAtOS44LTYtMTguNi0xNS4xLTIyLjNsLTEyMC00OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BuildingShield: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 16l288 0c17.7 0 32 14.3 32 32l0 165.4 16-6.4 0-159c0-26.5-21.5-48-48-48L48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 16 0 64 0 16 0 96 0c6.7 0 13.1-1.4 18.9-3.9c-5.2-4-10.2-8.1-15-12.4c-1.3 .2-2.6 .2-4 .2l-96 0 0-80c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 80-96 0c-17.7 0-32-14.3-32-32L16 48c0-17.7 14.3-32 32-32zM280 232l-32 0c-13.3 0-24 10.7-24 24l0 32c0 13.3 10.7 24 24 24l8.5 0c-.3-5.5-.5-10.8-.5-15.8l0-.2-8 0c-4.4 0-8-3.6-8-8l0-32c0-4.4 3.6-8 8-8l32 0c.9 0 1.8 .2 2.7 .5c2.7-1.7 5.5-3.1 8.5-4.3l7.6-3c-4.4-5.5-11.2-9.1-18.8-9.1zM224 496l-64 0 0-80c0-17.7 14.3-32 32-32s32 14.3 32 32l0 80zM104 232c-13.3 0-24 10.7-24 24l0 32c0 13.3 10.7 24 24 24l32 0c13.3 0 24-10.7 24-24l0-32c0-13.3-10.7-24-24-24l-32 0zm-8 24c0-4.4 3.6-8 8-8l32 0c4.4 0 8 3.6 8 8l0 32c0 4.4-3.6 8-8 8l-32 0c-4.4 0-8-3.6-8-8l0-32zm8-152c-13.3 0-24 10.7-24 24l0 32c0 13.3 10.7 24 24 24l32 0c13.3 0 24-10.7 24-24l0-32c0-13.3-10.7-24-24-24l-32 0zm-8 24c0-4.4 3.6-8 8-8l32 0c4.4 0 8 3.6 8 8l0 32c0 4.4-3.6 8-8 8l-32 0c-4.4 0-8-3.6-8-8l0-32zm128 0l0 32c0 13.3 10.7 24 24 24l32 0c13.3 0 24-10.7 24-24l0-32c0-13.3-10.7-24-24-24l-32 0c-13.3 0-24 10.7-24 24zm24-8l32 0c4.4 0 8 3.6 8 8l0 32c0 4.4-3.6 8-8 8l-32 0c-4.4 0-8-3.6-8-8l0-32c0-4.4 3.6-8 8-8zm61 168.6l115-46 0 250.7c-96.1-42.9-120-138-120-197.3c0-3.3 2-6.2 5-7.4zM560 296c0 59.3-23.9 154.4-120 197.3l0-250.7 115 46c3 1.2 5 4.2 5 7.4zM440.9 225.7c-5.7-2.3-12.1-2.3-17.8 0l-120 48C294 277.4 288 286.2 288 296c0 63.3 25.9 168.8 134.8 214.2c5.9 2.5 12.6 2.5 18.5 0C550.1 464.8 576 359.3 576 296c0-9.8-6-18.6-15.1-22.3l-120-48z" />
    </Icon>
);

export default BuildingShield;
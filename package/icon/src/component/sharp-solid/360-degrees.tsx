
import { Icon } from "../../index";

/**
 * A component that renders the `360-degrees` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/360-degrees?s=sharp-solid 360-degrees}
 * @preview ![360-degrees](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQwIDMyYTMyIDMyIDAgMSAwIC02NCAwIDMyIDMyIDAgMSAwIDY0IDB6TTMwNS43IDY3LjRMMzIwIDk2Yy0xNC4zLTI4LjYtMTQuMy0yOC42LTE0LjMtMjguNnMwIDAgMCAwYzAgMCAwIDAtLjEgMGwtLjEgLjEtLjMgLjItLjkgLjVjLS43IC40LTEuNyAuOS0yLjggMS42Yy0yLjMgMS4zLTUuNCAzLjItOS4xIDUuN2MtNy4zIDQuOS0xNyAxMi4yLTI2LjkgMjJDMjQ1LjkgMTE2LjkgMjI0IDE0OC41IDIyNCAxOTJsMCA5NiAwIDMyczAgMCAwIDBsMCA0OGMwIDQ0LjIgMzUuOCA4MCA4MCA4MHM4MC0zNS44IDgwLTgwbDAtOTZjMC00NC4yLTM1LjgtODAtODAtODBjLTUuNSAwLTEwLjggLjYtMTYgMS42bDAtMS42YzAtMjAuNSAxMC4xLTM2LjkgMjIuNi00OS40YzYuMi02LjIgMTIuNC0xMC45IDE3LjEtMTRjMi4zLTEuNSA0LjItMi43IDUuNC0zLjNjLjYtLjMgMS0uNiAxLjItLjdsLjEtLjEgMjguNS0xNC4yTDMzNC4zIDUzLjEgMzA1LjcgNjcuNHpNMzIgNjRMMCA2NGwwIDY0IDMyIDAgNjUuMyAwTDM5LjcgMTk1LjJsLTcuNyA5TDMyIDIxNmwwIDggMCAzMiAzMiAwIDE2IDBjMjYuNSAwIDQ4IDIxLjUgNDggNDhsMCA0OGMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMkwwIDM1MmMwIDUzIDQzIDk2IDk2IDk2czk2LTQzIDk2LTk2bDAtNDhjMC00Ny42LTI5LjgtODguMy03MS43LTEwNC41bDY0LTc0LjYgNy43LTkgMC0xMS44IDAtOCAwLTMyLTMyIDBMMzIgNjR6bTQ0OCA4MGMwLTguOCA3LjItMTYgMTYtMTZzMTYgNy4yIDE2IDE2bDAgMjI0YzAgOC44LTcuMiAxNi0xNiAxNnMtMTYtNy4yLTE2LTE2bDAtMjI0em0xNi04MGMtNDQuMiAwLTgwIDM1LjgtODAgODBsMCAyMjRjMCA0NC4yIDM1LjggODAgODAgODBzODAtMzUuOCA4MC04MGwwLTIyNGMwLTQ0LjItMzUuOC04MC04MC04MHpNMjg4IDI3MmMwLTguOCA3LjItMTYgMTYtMTZzMTYgNy4yIDE2IDE2bDAgOTZjMCA4LjgtNy4yIDE2LTE2IDE2cy0xNi03LjItMTYtMTZsMC05NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const $360Degrees: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM305.7 67.4L320 96c-14.3-28.6-14.3-28.6-14.3-28.6s0 0 0 0c0 0 0 0-.1 0l-.1 .1-.3 .2-.9 .5c-.7 .4-1.7 .9-2.8 1.6c-2.3 1.3-5.4 3.2-9.1 5.7c-7.3 4.9-17 12.2-26.9 22C245.9 116.9 224 148.5 224 192l0 96 0 32s0 0 0 0l0 48c0 44.2 35.8 80 80 80s80-35.8 80-80l0-96c0-44.2-35.8-80-80-80c-5.5 0-10.8 .6-16 1.6l0-1.6c0-20.5 10.1-36.9 22.6-49.4c6.2-6.2 12.4-10.9 17.1-14c2.3-1.5 4.2-2.7 5.4-3.3c.6-.3 1-.6 1.2-.7l.1-.1 28.5-14.2L334.3 53.1 305.7 67.4zM32 64L0 64l0 64 32 0 65.3 0L39.7 195.2l-7.7 9L32 216l0 8 0 32 32 0 16 0c26.5 0 48 21.5 48 48l0 48c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 352c0 53 43 96 96 96s96-43 96-96l0-48c0-47.6-29.8-88.3-71.7-104.5l64-74.6 7.7-9 0-11.8 0-8 0-32-32 0L32 64zm448 80c0-8.8 7.2-16 16-16s16 7.2 16 16l0 224c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-224zm16-80c-44.2 0-80 35.8-80 80l0 224c0 44.2 35.8 80 80 80s80-35.8 80-80l0-224c0-44.2-35.8-80-80-80zM288 272c0-8.8 7.2-16 16-16s16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96z" />
    </Icon>
);

export default $360Degrees;
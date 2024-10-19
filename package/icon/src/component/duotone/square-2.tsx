
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-2` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-2?s=duotone square-2}
 * @preview ![square-2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2TDAgNDE2YzAgMzUuMyAyOC43IDY0IDY0IDY0bDMyMCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMzIwYzAtMzUuMy0yOC43LTY0LTY0LTY0TDY0IDMyQzI4LjcgMzIgMCA2MC43IDAgOTZ6bTEyOC4yIDg1LjNjLjEtLjkgLjMtMS44IC41LTIuN2MuNC0xLjggMS0zLjUgMS44LTUuMWMxLjYtMy4zIDQtNi4zIDcuMS04LjZjOC4xLTYuMSAxNi4xLTEyLjMgMjQuMi0xOC40YzE1LjgtMTIgMzUuMi0xOC40IDU1LjEtMTguMWMxLjEgMCAyLjMgMCAzLjQgLjFjNDYuNSAuNyA4My44IDM4LjYgODMuOCA4NS4xYzAgMjMuNS05LjcgNDYtMjYuOSA2Mi4xYy0yMS41IDIwLjEtNDIuOSA0MC4zLTY0LjQgNjAuNGMyNy44IDAgNTUuNSAwIDgzLjMgMGMxMy4zIDAgMjQgMTAuNyAyNCAyNHMtMTAuNyAyNC0yNCAyNGMtNDggMC05NiAwLTE0NCAwYy05LjggMC0xOC43LTYtMjIuMy0xNS4ycy0xLjMtMTkuNiA1LjktMjYuM2MzNi4yLTM0IDcyLjUtNjcuOSAxMDguNy0xMDEuOWM3LjUtNyAxMS43LTE2LjggMTEuNy0yNy4xYzAtMjAuMy0xNi4zLTM2LjgtMzYuNi0zNy4xbC0zLjQtLjFjLTkuMS0uMS0xOCAyLjgtMjUuMyA4LjNjLTguMSA2LjEtMTYuMSAxMi4zLTI0LjIgMTguNGMtMTAuNSA4LTI1LjYgNi0zMy42LTQuNmMtMS43LTIuMi0yLjktNC41LTMuNy03Yy0uNC0xLjItLjctMi41LS45LTMuN2MtLjEtLjktLjItMS45LS4yLTEuOGMtLjEtMS0uMS0xLS4xLTJjMC0uOSAwLTEuMSAwLTEuNGMwLS40IC4xLS45IC4xLTEuM3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIxNiAxNzYuM2MtOS4xLS4xLTE4IDIuOC0yNS4zIDguM2wtMjQuMiAxOC40Yy0xMC41IDgtMjUuNiA2LTMzLjYtNC41cy02LTI1LjYgNC41LTMzLjZsMjQuMi0xOC40YzE1LjgtMTIgMzUuMi0xOC40IDU1LjEtMTguMWwzLjQgLjFjNDYuNSAuNyA4My44IDM4LjYgODMuOCA4NS4xYzAgMjMuNS05LjcgNDYtMjYuOSA2Mi4xTDIxMi43IDMzNmw4My4zIDBjMTMuMyAwIDI0IDEwLjcgMjQgMjRzLTEwLjcgMjQtMjQgMjRsLTE0NCAwYy05LjggMC0xOC43LTYtMjIuMy0xNS4ycy0xLjMtMTkuNiA1LjktMjYuM0wyNDQuMyAyNDAuNmM3LjUtNyAxMS43LTE2LjggMTEuNy0yNy4xYzAtMjAuMy0xNi4zLTM2LjgtMzYuNi0zNy4xbC0zLjQtLjF6Ii8+PC9zdmc+|width=32|height=32)
 */
const Square_2: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm128.2 85.3c.1-.9 .3-1.8 .5-2.7c.4-1.8 1-3.5 1.8-5.1c1.6-3.3 4-6.3 7.1-8.6c8.1-6.1 16.1-12.3 24.2-18.4c15.8-12 35.2-18.4 55.1-18.1c1.1 0 2.3 0 3.4 .1c46.5 .7 83.8 38.6 83.8 85.1c0 23.5-9.7 46-26.9 62.1c-21.5 20.1-42.9 40.3-64.4 60.4c27.8 0 55.5 0 83.3 0c13.3 0 24 10.7 24 24s-10.7 24-24 24c-48 0-96 0-144 0c-9.8 0-18.7-6-22.3-15.2s-1.3-19.6 5.9-26.3c36.2-34 72.5-67.9 108.7-101.9c7.5-7 11.7-16.8 11.7-27.1c0-20.3-16.3-36.8-36.6-37.1l-3.4-.1c-9.1-.1-18 2.8-25.3 8.3c-8.1 6.1-16.1 12.3-24.2 18.4c-10.5 8-25.6 6-33.6-4.6c-1.7-2.2-2.9-4.5-3.7-7c-.4-1.2-.7-2.5-.9-3.7c-.1-.9-.2-1.9-.2-1.8c-.1-1-.1-1-.1-2c0-.9 0-1.1 0-1.4c0-.4 .1-.9 .1-1.3z" />
            <path d="M216 176.3c-9.1-.1-18 2.8-25.3 8.3l-24.2 18.4c-10.5 8-25.6 6-33.6-4.5s-6-25.6 4.5-33.6l24.2-18.4c15.8-12 35.2-18.4 55.1-18.1l3.4 .1c46.5 .7 83.8 38.6 83.8 85.1c0 23.5-9.7 46-26.9 62.1L212.7 336l83.3 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-9.8 0-18.7-6-22.3-15.2s-1.3-19.6 5.9-26.3L244.3 240.6c7.5-7 11.7-16.8 11.7-27.1c0-20.3-16.3-36.8-36.6-37.1l-3.4-.1z" />
    </Icon>
);

export default Square_2;
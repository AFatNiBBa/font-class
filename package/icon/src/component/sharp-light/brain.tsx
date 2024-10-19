
import { Icon } from "../../index";

/**
 * A component that renders the `brain` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brain?s=sharp-light brain}
 * @preview ![brain](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTQ0LjIgNzUuNGwtMS4xIDExLjMtMTEgMi44QzExMS40IDk0LjcgOTYgMTEzLjYgOTYgMTM2YzAgMy4xIC4zIDYuMiAuOSA5LjJsMi41IDEzLjItMTIuNSA0LjhDNjguOCAxNzAgNTYgMTg3LjYgNTYgMjA4YzAgNS4yIC44IDEwLjMgMi40IDE1bDMuMyAxMC03LjkgN0M0MC40IDI1MS43IDMyIDI2OC45IDMyIDI4OGMwIDIyLjkgMTIgNDMgMzAuMiA1NC4zbDExLjYgNy4yLTUuMyAxMi42QzY1LjYgMzY4LjggNjQgMzc2LjIgNjQgMzg0YzAgMzAuOSAyNS4xIDU2IDU2IDU2YzMuMyAwIDYuNS0uMyA5LjUtLjhsMTIuOS0yLjIgNC43IDEyLjJjNi45IDE4IDI0LjQgMzAuOCA0NC44IDMwLjhsNDggMCAwLTQ4IDAtMzUyIDAtNDgtNDggMGMtMjUgMC00NS41IDE5LjEtNDcuOCA0My40ek0yNDAgNTEybC00OCAwYy0yOS42IDAtNTUuNS0xNi4xLTY5LjMtNDBjLS45IDAtMS44IDAtMi43IDBjLTQ4LjYgMC04OC0zOS40LTg4LTg4YzAtNy42IDEtMTUgMi44LTIyQzEzLjYgMzQ0LjQgMCAzMTcuOCAwIDI4OGMwLTI1LjEgOS42LTQ4IDI1LjQtNjVjLS45LTQuOS0xLjQtOS45LTEuNC0xNWMwLTI5LjYgMTYuMS01NS41IDQwLTY5LjNjMC0uOSAwLTEuOCAwLTIuN2MwLTMzLjYgMjAuNy02Mi40IDUwLjEtNzQuMkMxMjIuMyAyNi40IDE1NC4xIDAgMTkyIDBsNDggMCAxNiAwIDE2IDAgNDggMGMzNy45IDAgNjkuNyAyNi40IDc3LjkgNjEuOEM0MjcuMyA3My42IDQ0OCAxMDIuNCA0NDggMTM2YzAgLjkgMCAxLjggMCAyLjdjMjMuOSAxMy44IDQwIDM5LjcgNDAgNjkuM2MwIDUuMS0uNSAxMC4xLTEuNCAxNWMxNS44IDE3LjEgMjUuNCA0MCAyNS40IDY1YzAgMjkuOC0xMy42IDU2LjQtMzQuOCA3NGMxLjggNy4xIDIuOCAxNC40IDIuOCAyMmMwIDQ4LjYtMzkuNCA4OC04OCA4OGMtLjkgMC0xLjggMC0yLjcgMGMtMTMuOCAyMy45LTM5LjcgNDAtNjkuMyA0MGwtNDggMC0xNiAwLTE2IDB6bTMyLTMybDQ4IDBjMjAuNCAwIDM3LjktMTIuOCA0NC44LTMwLjhsNC43LTEyLjIgMTIuOSAyLjJjMy4xIC41IDYuMyAuOCA5LjUgLjhjMzAuOSAwIDU2LTI1LjEgNTYtNTZjMC03LjgtMS42LTE1LjItNC40LTIxLjhsLTUuMy0xMi42IDExLjYtNy4yQzQ2OCAzMzEgNDgwIDMxMC45IDQ4MCAyODhjMC0xOS4xLTguNC0zNi4zLTIxLjctNDguMWwtNy45LTcgMy4zLTEwYzEuNS00LjcgMi40LTkuNyAyLjQtMTVjMC0yMC40LTEyLjgtMzgtMzAuOS00NC45bC0xMi41LTQuOCAyLjUtMTMuMmMuNi0zIC45LTYgLjktOS4yYzAtMjIuNC0xNS40LTQxLjMtMzYuMi00Ni41bC0xMS0yLjgtMS4xLTExLjNDMzY1LjUgNTEuMSAzNDUgMzIgMzIwIDMybC00OCAwIDAgNDggMCAzNTIgMCA0OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Brain: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144.2 75.4l-1.1 11.3-11 2.8C111.4 94.7 96 113.6 96 136c0 3.1 .3 6.2 .9 9.2l2.5 13.2-12.5 4.8C68.8 170 56 187.6 56 208c0 5.2 .8 10.3 2.4 15l3.3 10-7.9 7C40.4 251.7 32 268.9 32 288c0 22.9 12 43 30.2 54.3l11.6 7.2-5.3 12.6C65.6 368.8 64 376.2 64 384c0 30.9 25.1 56 56 56c3.3 0 6.5-.3 9.5-.8l12.9-2.2 4.7 12.2c6.9 18 24.4 30.8 44.8 30.8l48 0 0-48 0-352 0-48-48 0c-25 0-45.5 19.1-47.8 43.4zM240 512l-48 0c-29.6 0-55.5-16.1-69.3-40c-.9 0-1.8 0-2.7 0c-48.6 0-88-39.4-88-88c0-7.6 1-15 2.8-22C13.6 344.4 0 317.8 0 288c0-25.1 9.6-48 25.4-65c-.9-4.9-1.4-9.9-1.4-15c0-29.6 16.1-55.5 40-69.3c0-.9 0-1.8 0-2.7c0-33.6 20.7-62.4 50.1-74.2C122.3 26.4 154.1 0 192 0l48 0 16 0 16 0 48 0c37.9 0 69.7 26.4 77.9 61.8C427.3 73.6 448 102.4 448 136c0 .9 0 1.8 0 2.7c23.9 13.8 40 39.7 40 69.3c0 5.1-.5 10.1-1.4 15c15.8 17.1 25.4 40 25.4 65c0 29.8-13.6 56.4-34.8 74c1.8 7.1 2.8 14.4 2.8 22c0 48.6-39.4 88-88 88c-.9 0-1.8 0-2.7 0c-13.8 23.9-39.7 40-69.3 40l-48 0-16 0-16 0zm32-32l48 0c20.4 0 37.9-12.8 44.8-30.8l4.7-12.2 12.9 2.2c3.1 .5 6.3 .8 9.5 .8c30.9 0 56-25.1 56-56c0-7.8-1.6-15.2-4.4-21.8l-5.3-12.6 11.6-7.2C468 331 480 310.9 480 288c0-19.1-8.4-36.3-21.7-48.1l-7.9-7 3.3-10c1.5-4.7 2.4-9.7 2.4-15c0-20.4-12.8-38-30.9-44.9l-12.5-4.8 2.5-13.2c.6-3 .9-6 .9-9.2c0-22.4-15.4-41.3-36.2-46.5l-11-2.8-1.1-11.3C365.5 51.1 345 32 320 32l-48 0 0 48 0 352 0 48z" />
    </Icon>
);

export default Brain;
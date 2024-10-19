
import { Icon } from "../../index";

/**
 * A component that renders the `alarm-plus` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alarm-plus?s=thin alarm-plus}
 * @preview ![alarm-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOTMuNyAwQzQyIDAgMCA0MiAwIDkzLjdjMCAxOC41IDUuNCAzNS44IDE0LjYgNTAuM2MyLjQgMy43IDcuMyA0LjggMTEgMi40czQuOC03LjMgMi40LTExQzIwLjQgMTIzLjQgMTYgMTA5LjEgMTYgOTMuN0MxNiA1MC44IDUwLjggMTYgOTMuNyAxNmMyMC40IDAgMzkgNy45IDUyLjggMjAuN2MzLjIgMyA4LjMgMi44IDExLjMtLjRzMi44LTguMy0uNC0xMS4zQzE0MC43IDkuNSAxMTguMyAwIDkzLjcgMHpNNDUuNyA1MDkuN2w1Ny43LTU3LjdDMTQzLjQgNDg5LjIgMTk3IDUxMiAyNTYgNTEyczExMi42LTIyLjggMTUyLjYtNjAuMWw1Ny43IDU3LjdjMy4xIDMuMSA4LjIgMy4xIDExLjMgMHMzLjEtOC4yIDAtMTEuM2wtNTcuNy01Ny43QzQ1Ny4yIDQwMC42IDQ4MCAzNDcgNDgwIDI4OEM0ODAgMTY0LjMgMzc5LjcgNjQgMjU2IDY0UzMyIDE2NC4zIDMyIDI4OGMwIDU5IDIyLjggMTEyLjYgNjAuMSAxNTIuNkwzNC4zIDQ5OC4zYy0zLjEgMy4xLTMuMSA4LjIgMCAxMS4zczguMiAzLjEgMTEuMyAwek0yNTYgODBhMjA4IDIwOCAwIDEgMSAwIDQxNiAyMDggMjA4IDAgMSAxIDAtNDE2ek00MTguMyAwYy0yNC42IDAtNDcgOS41LTYzLjcgMjVjLTMuMiAzLTMuNCA4LjEtLjQgMTEuM3M4LjEgMy40IDExLjMgLjRDMzc5LjMgMjMuOSAzOTcuOSAxNiA0MTguMyAxNkM0NjEuMiAxNiA0OTYgNTAuOCA0OTYgOTMuN2MwIDE1LjQtNC40IDI5LjctMTIuMSA0MS43Yy0yLjQgMy43LTEuMyA4LjcgMi40IDExczguNyAxLjMgMTEtMi40YzkuMy0xNC41IDE0LjYtMzEuOCAxNC42LTUwLjNDNTEyIDQyIDQ3MCAwIDQxOC4zIDB6TTI1NiAxODRjLTQuNCAwLTggMy42LTggOGwwIDg4LTg4IDBjLTQuNCAwLTggMy42LTggOHMzLjYgOCA4IDhsODggMCAwIDg4YzAgNC40IDMuNiA4IDggOHM4LTMuNiA4LThsMC04OCA4OCAwYzQuNCAwIDgtMy42IDgtOHMtMy42LTgtOC04bC04OCAwIDAtODhjMC00LjQtMy42LTgtOC04eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const AlarmPlus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M93.7 0C42 0 0 42 0 93.7c0 18.5 5.4 35.8 14.6 50.3c2.4 3.7 7.3 4.8 11 2.4s4.8-7.3 2.4-11C20.4 123.4 16 109.1 16 93.7C16 50.8 50.8 16 93.7 16c20.4 0 39 7.9 52.8 20.7c3.2 3 8.3 2.8 11.3-.4s2.8-8.3-.4-11.3C140.7 9.5 118.3 0 93.7 0zM45.7 509.7l57.7-57.7C143.4 489.2 197 512 256 512s112.6-22.8 152.6-60.1l57.7 57.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-57.7-57.7C457.2 400.6 480 347 480 288C480 164.3 379.7 64 256 64S32 164.3 32 288c0 59 22.8 112.6 60.1 152.6L34.3 498.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0zM256 80a208 208 0 1 1 0 416 208 208 0 1 1 0-416zM418.3 0c-24.6 0-47 9.5-63.7 25c-3.2 3-3.4 8.1-.4 11.3s8.1 3.4 11.3 .4C379.3 23.9 397.9 16 418.3 16C461.2 16 496 50.8 496 93.7c0 15.4-4.4 29.7-12.1 41.7c-2.4 3.7-1.3 8.7 2.4 11s8.7 1.3 11-2.4c9.3-14.5 14.6-31.8 14.6-50.3C512 42 470 0 418.3 0zM256 184c-4.4 0-8 3.6-8 8l0 88-88 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l88 0 0 88c0 4.4 3.6 8 8 8s8-3.6 8-8l0-88 88 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-88 0 0-88c0-4.4-3.6-8-8-8z" />
    </Icon>
);

export default AlarmPlus;
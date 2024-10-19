
import { Icon } from "../../index";

/**
 * A component that renders the `children` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/children?s=thin children}
 * @preview ![children](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTEyIDY0YTQ4IDQ4IDAgMSAxIDk2IDAgNDggNDggMCAxIDEgLTk2IDB6bTExMiAwQTY0IDY0IDAgMSAwIDk2IDY0YTY0IDY0IDAgMSAwIDEyOCAwek0xMTEuMiAyNTkuNGMxLjktNCAuMi04LjgtMy44LTEwLjZzLTguOC0uMi0xMC42IDMuOGwtNjQgMTM2Yy0xLjIgMi41LTEgNS40IC41IDcuN3M0IDMuNyA2LjggMy43bDQwIDAgMCA4MGMwIDE3LjcgMTQuMyAzMiAzMiAzMnMzMi0xNC4zIDMyLTMybDAtODAgMzIgMCAwIDgwYzAgMTcuNyAxNC4zIDMyIDMyIDMyczMyLTE0LjMgMzItMzJsMC04MCA0MCAwYzIuNyAwIDUuMy0xLjQgNi44LTMuN3MxLjctNS4yIC41LTcuN2wtNjQtMTM2Yy0xLjktNC02LjYtNS43LTEwLjYtMy44cy01LjcgNi42LTMuOCAxMC42TDI2Ny40IDM4NCAyMzIgMzg0bC00OCAwLTQ4IDAtNDggMC0zNS40IDAgNTguNi0xMjQuNnpNOTYgNDgwbDAtODAgMzIgMCAwIDgwYzAgOC44LTcuMiAxNi0xNiAxNnMtMTYtNy4yLTE2LTE2em05Ni04MGwzMiAwIDAgODBjMCA4LjgtNy4yIDE2LTE2IDE2cy0xNi03LjItMTYtMTZsMC04MHpNMTU5LjIgMTc2bDEuNiAwYzI4LjMgMCA1NC41IDE1IDY4LjkgMzkuNGw1OS40IDEwMC43YzIuMiAzLjggNy4xIDUuMSAxMSAyLjhzNS4xLTcuMSAyLjgtMTFMMjQzLjUgMjA3LjJDMjI2LjIgMTc4IDE5NC44IDE2MCAxNjAuOCAxNjBsLTEuNiAwYy0zNCAwLTY1LjQgMTgtODIuNyA0Ny4yTDE3LjEgMzA3LjljLTIuMiAzLjgtMSA4LjcgMi44IDExczguNyAxIDExLTIuOEw5MC4zIDIxNS40QzEwNC43IDE5MSAxMzAuOSAxNzYgMTU5LjIgMTc2ek00MzIgNjRhNDggNDggMCAxIDEgOTYgMCA0OCA0OCAwIDEgMSAtOTYgMHptMTEyIDBBNjQgNjQgMCAxIDAgNDE2IDY0YTY0IDY0IDAgMSAwIDEyOCAwek00MDAuOSAyMjIuNUM0MTYuMiAxOTMuOSA0NDYgMTc2IDQ3OC41IDE3NmwzIDBjMzIuNSAwIDYyLjMgMTcuOSA3Ny42IDQ2LjVsNDkuOCA5My4yYzIuMSAzLjkgNi45IDUuNCAxMC44IDMuM3M1LjQtNi45IDMuMy0xMC44TDU3My4zIDIxNWMtMTguMS0zMy45LTUzLjQtNTUtOTEuNy01NWwtMyAwYy0zOC40IDAtNzMuNiAyMS4xLTkxLjcgNTVsLTQ5LjggOTMuMmMtMi4xIDMuOS0uNiA4LjcgMy4zIDEwLjhzOC43IC42IDEwLjgtMy4zbDQ5LjgtOTMuMnpNNDA4IDI4MGMtNC40IDAtOCAzLjYtOCA4bDAgMTkyYzAgMTcuNyAxNC4zIDMyIDMyIDMyczMyLTE0LjMgMzItMzJsMC04MGMwLTguOCA3LjItMTYgMTYtMTZzMTYgNy4yIDE2IDE2bDAgODBjMCAxNy43IDE0LjMgMzIgMzIgMzJzMzItMTQuMyAzMi0zMmwwLTE5MmMwLTQuNC0zLjYtOC04LThzLTggMy42LTggOGwwIDE5MmMwIDguOC03LjIgMTYtMTYgMTZzLTE2LTcuMi0xNi0xNmwwLTgwYzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMybDAgODBjMCA4LjgtNy4yIDE2LTE2IDE2cy0xNi03LjItMTYtMTZsMC0xOTJjMC00LjQtMy42LTgtOC04eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Children: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M112 64a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm112 0A64 64 0 1 0 96 64a64 64 0 1 0 128 0zM111.2 259.4c1.9-4 .2-8.8-3.8-10.6s-8.8-.2-10.6 3.8l-64 136c-1.2 2.5-1 5.4 .5 7.7s4 3.7 6.8 3.7l40 0 0 80c0 17.7 14.3 32 32 32s32-14.3 32-32l0-80 32 0 0 80c0 17.7 14.3 32 32 32s32-14.3 32-32l0-80 40 0c2.7 0 5.3-1.4 6.8-3.7s1.7-5.2 .5-7.7l-64-136c-1.9-4-6.6-5.7-10.6-3.8s-5.7 6.6-3.8 10.6L267.4 384 232 384l-48 0-48 0-48 0-35.4 0 58.6-124.6zM96 480l0-80 32 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16zm96-80l32 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80zM159.2 176l1.6 0c28.3 0 54.5 15 68.9 39.4l59.4 100.7c2.2 3.8 7.1 5.1 11 2.8s5.1-7.1 2.8-11L243.5 207.2C226.2 178 194.8 160 160.8 160l-1.6 0c-34 0-65.4 18-82.7 47.2L17.1 307.9c-2.2 3.8-1 8.7 2.8 11s8.7 1 11-2.8L90.3 215.4C104.7 191 130.9 176 159.2 176zM432 64a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm112 0A64 64 0 1 0 416 64a64 64 0 1 0 128 0zM400.9 222.5C416.2 193.9 446 176 478.5 176l3 0c32.5 0 62.3 17.9 77.6 46.5l49.8 93.2c2.1 3.9 6.9 5.4 10.8 3.3s5.4-6.9 3.3-10.8L573.3 215c-18.1-33.9-53.4-55-91.7-55l-3 0c-38.4 0-73.6 21.1-91.7 55l-49.8 93.2c-2.1 3.9-.6 8.7 3.3 10.8s8.7 .6 10.8-3.3l49.8-93.2zM408 280c-4.4 0-8 3.6-8 8l0 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-80c0-8.8 7.2-16 16-16s16 7.2 16 16l0 80c0 17.7 14.3 32 32 32s32-14.3 32-32l0-192c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 192c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-192c0-4.4-3.6-8-8-8z" />
    </Icon>
);

export default Children;
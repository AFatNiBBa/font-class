
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-heart` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-heart?s=sharp-duotone-solid file-heart}
 * @preview ![file-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMjI0IDBsMCAxNjAgMTYwIDAgMCAzNTJMMCA1MTIgMCAwek04MCAyOTkuMmMwIDE2LjEgNi42IDMxLjUgMTguMiA0Mi43bDgyLjggNzkuNkwxOTIgNDMyLjFsMTEuMS0xMC43IDgyLjgtNzkuNmMxMS42LTExLjIgMTguMi0yNi42IDE4LjItNDIuN2MwLTMyLjctMjYuNS01OS4yLTU5LjItNTkuMmwtMi40IDBjLTE1LjkgMC0zMS4yIDYuMi00Mi43IDE3LjJsLTcuNyA3LjQtNy43LTcuNGMtMTEuNS0xMS0yNi44LTE3LjItNDIuNy0xNy4ybC0yLjQgMEMxMDYuNSAyNDAgODAgMjY2LjUgODAgMjk5LjJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zODQgMTYwbC0xNjAgMEwyMjQgMCAzODQgMTYwek04MCAyOTkuMmMwLTMyLjcgMjYuNS01OS4yIDU5LjItNTkuMmwyLjQgMGMxNS45IDAgMzEuMiA2LjIgNDIuNyAxNy4ybDcuNyA3LjQgNy43LTcuNGMxMS41LTExIDI2LjgtMTcuMiA0Mi43LTE3LjJsMi40IDBjMzIuNyAwIDU5LjIgMjYuNSA1OS4yIDU5LjJjMCAxNi4xLTYuNiAzMS41LTE4LjIgNDIuN2wtODIuOCA3OS42TDE5MiA0MzIuMWwtMTEuMS0xMC43TDk4LjIgMzQxLjhDODYuNiAzMzAuNyA4MCAzMTUuMyA4MCAyOTkuMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const FileHeart: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM80 299.2c0 16.1 6.6 31.5 18.2 42.7l82.8 79.6L192 432.1l11.1-10.7 82.8-79.6c11.6-11.2 18.2-26.6 18.2-42.7c0-32.7-26.5-59.2-59.2-59.2l-2.4 0c-15.9 0-31.2 6.2-42.7 17.2l-7.7 7.4-7.7-7.4c-11.5-11-26.8-17.2-42.7-17.2l-2.4 0C106.5 240 80 266.5 80 299.2z" />
            <path d="M384 160l-160 0L224 0 384 160zM80 299.2c0-32.7 26.5-59.2 59.2-59.2l2.4 0c15.9 0 31.2 6.2 42.7 17.2l7.7 7.4 7.7-7.4c11.5-11 26.8-17.2 42.7-17.2l2.4 0c32.7 0 59.2 26.5 59.2 59.2c0 16.1-6.6 31.5-18.2 42.7l-82.8 79.6L192 432.1l-11.1-10.7L98.2 341.8C86.6 330.7 80 315.3 80 299.2z" />
    </Icon>
);

export default FileHeart;
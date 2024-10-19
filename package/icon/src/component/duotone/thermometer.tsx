
import { Icon, generic } from "../../index";

/**
 * A component that renders the `thermometer` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thermometer?s=duotone thermometer}
 * @preview ![thermometer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4OGMwIDYuMSAyLjMgMTIuMyA3IDE3YzkuNCA5LjQgMjQuNiA5LjQgMzMuOSAwbDg5LTg5IDg4LjggMGMxNC45IDAgMjkuMS01LjkgMzkuNi0xNi40TDQ4MS44IDE3Ni4yYzE5LjQtMTkuNCAzMC4yLTQ1LjYgMzAuMi03M0M1MTIgNDYuMiA0NjUuOCAwIDQwOC44IDBjLTI3LjQgMC01My42IDEwLjktNzMgMzAuMmMtMTUuMiAxNS4yLTMwLjMgMzAuMy00NS41IDQ1LjVjMTkgMTkgMzggMzggNTcgNTdjMS42IDEuNiAyLjcgMy40IDMuNSA1LjNjLjQgMSAuNyAyIC45IDNjLjEgLjUgLjIgMSAuMiAxLjVjMCAuMyAwIC41IC4xIDEuNWMwIDEtLjEgMS4zLS4xIDEuNmMwIC41LS4xIDEtLjIgMS41Yy0uMiAxLS41IDItLjkgM2MtLjggMS45LTEuOSAzLjctMy41IDUuM2MtNi4zIDYuMi0xNi40IDYuMi0yMi42IDBjLTE5LTE5LTM4LTM4LTU3LTU3Yy0xMy44IDEzLjgtMjcuNiAyNy42LTQxLjQgNDEuNGMxOSAxOSAzOCAzOCA1NyA1N2M2LjIgNi4yIDYuMiAxNi40IDAgMjIuNnMtMTYuNCA2LjItMjIuNiAwYy0xOS0xOS0zOC0zOC01Ny01N2MtMTMuOCAxMy44LTI3LjYgMjcuNi00MS40IDQxLjRjMTkgMTkgMzggMzggNTcgNTdjNi4yIDYuMiA2LjIgMTYuNCAwIDIyLjZjLTMuMSAzLjEtNy4yIDQuNy0xMS4zIDQuN3MtOC4yLTEuNi0xMS4zLTQuN2MtMTktMTktMzgtMzgtNTctNTdsLTI3LjMgMjcuM0MxMDEuOSAyNjQuMiA5NiAyNzguNCA5NiAyOTMuM2wwIDg4LjhMNyA0NzFjLTQuNyA0LjctNyAxMC44LTcgMTd6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMzkuNyAyMjYuM2w1NyA1N2M2LjIgNi4yIDE2LjQgNi4yIDIyLjYgMHM2LjItMTYuNCAwLTIyLjZsLTU3LTU3LTIyLjYgMjIuNnptNjQtNjRsNTcgNTdjNi4yIDYuMiAxNi40IDYuMiAyMi42IDBzNi4yLTE2LjQgMC0yMi42bC01Ny01Ny0yMi42IDIyLjZ6bTY0LTY0bDU3IDU3YzYuMiA2LjIgMTYuNCA2LjIgMjIuNiAwczYuMi0xNi40IDAtMjIuNmwtNTctNTdMMjY3LjcgOTguM3oiLz48L3N2Zz4=|width=32|height=32)
 */
const Thermometer: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 488c0 6.1 2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l89-89 88.8 0c14.9 0 29.1-5.9 39.6-16.4L481.8 176.2c19.4-19.4 30.2-45.6 30.2-73C512 46.2 465.8 0 408.8 0c-27.4 0-53.6 10.9-73 30.2c-15.2 15.2-30.3 30.3-45.5 45.5c19 19 38 38 57 57c1.6 1.6 2.7 3.4 3.5 5.3c.4 1 .7 2 .9 3c.1 .5 .2 1 .2 1.5c0 .3 0 .5 .1 1.5c0 1-.1 1.3-.1 1.6c0 .5-.1 1-.2 1.5c-.2 1-.5 2-.9 3c-.8 1.9-1.9 3.7-3.5 5.3c-6.3 6.2-16.4 6.2-22.6 0c-19-19-38-38-57-57c-13.8 13.8-27.6 27.6-41.4 41.4c19 19 38 38 57 57c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0c-19-19-38-38-57-57c-13.8 13.8-27.6 27.6-41.4 41.4c19 19 38 38 57 57c6.2 6.2 6.2 16.4 0 22.6c-3.1 3.1-7.2 4.7-11.3 4.7s-8.2-1.6-11.3-4.7c-19-19-38-38-57-57l-27.3 27.3C101.9 264.2 96 278.4 96 293.3l0 88.8L7 471c-4.7 4.7-7 10.8-7 17z" />
            <path d="M139.7 226.3l57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57-22.6 22.6zm64-64l57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57-22.6 22.6zm64-64l57 57c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-57-57L267.7 98.3z" />
    </Icon>
);

export default Thermometer;
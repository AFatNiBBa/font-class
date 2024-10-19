
import { Icon, generic } from "../../index";

/**
 * A component that renders the `passport` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/passport?s=sharp-duotone-solid passport}
 * @preview ![passport](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAxOTJhMTI4IDEyOCAwIDEgMCAyNTYgMEExMjggMTI4IDAgMSAwIDk2IDE5MnptMzMuMy0xNmM1LjMtMzEuNCAyNS44LTU3LjYgNTMuNy03MC44Yy02LjggMTcuMS0xMi45IDQwLjQtMTQuNiA3MC44bC0zOS4xIDB6bTAgMzJsMzkuMSAwYzEuNiAzMC40IDcuNyA1My44IDE0LjYgNzAuOGMtMjcuOS0xMy4yLTQ4LjQtMzkuNC01My43LTcwLjh6bTcxLjEtMzJjMS44LTI5LjIgOC4xLTQ5LjkgMTQuMi02My41YzMuNC03LjYgNi43LTEzIDkuMS0xNi41bC42IDBjMi40IDMuNSA1LjcgOC45IDkuMSAxNi41YzYgMTMuNiAxMi40IDM0LjMgMTQuMiA2My41bC00Ny4xIDB6bTAgMzJsNDcuMSAwYy0xLjggMjkuMi04LjEgNDkuOS0xNC4yIDYzLjVjLTMuNCA3LjYtNi43IDEzLTkuMSAxNi41bC0uNiAwYy0yLjQtMy41LTUuNy04LjktOS4xLTE2LjVjLTYtMTMuNi0xMi40LTM0LjMtMTQuMi02My41ek0yNjUgMTA1LjJjMjcuOSAxMy4yIDQ4LjQgMzkuNCA1My43IDcwLjhsLTM5LjEgMGMtMS42LTMwLjQtNy43LTUzLjgtMTQuNi03MC44em0wIDE3My42YzYuOC0xNy4xIDEyLjktNDAuNCAxNC42LTcwLjhsMzkuMSAwYy01LjMgMzEuNC0yNS44IDU3LjYtNTMuNyA3MC44eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAwTDQ0OCAwbDAgNTEyTDAgNTEyIDAgMHpNMTgzIDI3OC44Yy0yNy45LTEzLjItNDguNC0zOS40LTUzLjctNzAuOGwzOS4xIDBjMS42IDMwLjQgNy43IDUzLjggMTQuNiA3MC44em00MS4zIDkuMmwtLjMgMC0uMyAwYy0yLjQtMy41LTUuNy04LjktOS4xLTE2LjVjLTYtMTMuNi0xMi40LTM0LjMtMTQuMi02My41bDQ3LjEgMGMtMS44IDI5LjItOC4xIDQ5LjktMTQuMiA2My41Yy0zLjQgNy42LTYuNyAxMy05LjEgMTYuNXptNDAuNy05LjJjNi44LTE3LjEgMTIuOS00MC40IDE0LjYtNzAuOGwzOS4xIDBjLTUuMyAzMS40LTI1LjggNTcuNi01My43IDcwLjh6TTI3OS42IDE3NmMtMS42LTMwLjQtNy43LTUzLjgtMTQuNi03MC44YzI3LjkgMTMuMiA0OC40IDM5LjQgNTMuNyA3MC44bC0zOS4xIDB6TTIyMy43IDk2bC4zIDAgLjMgMGMyLjQgMy41IDUuNyA4LjkgOS4xIDE2LjVjNiAxMy42IDEyLjQgMzQuMyAxNC4yIDYzLjVsLTQ3LjEgMGMxLjgtMjkuMiA4LjEtNDkuOSAxNC4yLTYzLjVjMy40LTcuNiA2LjctMTMgOS4xLTE2LjV6TTE4MyAxMDUuMmMtNi44IDE3LjEtMTIuOSA0MC40LTE0LjYgNzAuOGwtMzkuMSAwYzUuMy0zMS40IDI1LjgtNTcuNiA1My43LTcwLjh6TTM1MiAxOTJBMTI4IDEyOCAwIDEgMCA5NiAxOTJhMTI4IDEyOCAwIDEgMCAyNTYgMHpNMTEyIDM4NGwtMTYgMCAwIDMyIDE2IDAgMjI0IDAgMTYgMCAwLTMyLTE2IDAtMjI0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Passport: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 192a128 128 0 1 0 256 0A128 128 0 1 0 96 192zm33.3-16c5.3-31.4 25.8-57.6 53.7-70.8c-6.8 17.1-12.9 40.4-14.6 70.8l-39.1 0zm0 32l39.1 0c1.6 30.4 7.7 53.8 14.6 70.8c-27.9-13.2-48.4-39.4-53.7-70.8zm71.1-32c1.8-29.2 8.1-49.9 14.2-63.5c3.4-7.6 6.7-13 9.1-16.5l.6 0c2.4 3.5 5.7 8.9 9.1 16.5c6 13.6 12.4 34.3 14.2 63.5l-47.1 0zm0 32l47.1 0c-1.8 29.2-8.1 49.9-14.2 63.5c-3.4 7.6-6.7 13-9.1 16.5l-.6 0c-2.4-3.5-5.7-8.9-9.1-16.5c-6-13.6-12.4-34.3-14.2-63.5zM265 105.2c27.9 13.2 48.4 39.4 53.7 70.8l-39.1 0c-1.6-30.4-7.7-53.8-14.6-70.8zm0 173.6c6.8-17.1 12.9-40.4 14.6-70.8l39.1 0c-5.3 31.4-25.8 57.6-53.7 70.8z" />
            <path d="M0 0L448 0l0 512L0 512 0 0zM183 278.8c-27.9-13.2-48.4-39.4-53.7-70.8l39.1 0c1.6 30.4 7.7 53.8 14.6 70.8zm41.3 9.2l-.3 0-.3 0c-2.4-3.5-5.7-8.9-9.1-16.5c-6-13.6-12.4-34.3-14.2-63.5l47.1 0c-1.8 29.2-8.1 49.9-14.2 63.5c-3.4 7.6-6.7 13-9.1 16.5zm40.7-9.2c6.8-17.1 12.9-40.4 14.6-70.8l39.1 0c-5.3 31.4-25.8 57.6-53.7 70.8zM279.6 176c-1.6-30.4-7.7-53.8-14.6-70.8c27.9 13.2 48.4 39.4 53.7 70.8l-39.1 0zM223.7 96l.3 0 .3 0c2.4 3.5 5.7 8.9 9.1 16.5c6 13.6 12.4 34.3 14.2 63.5l-47.1 0c1.8-29.2 8.1-49.9 14.2-63.5c3.4-7.6 6.7-13 9.1-16.5zM183 105.2c-6.8 17.1-12.9 40.4-14.6 70.8l-39.1 0c5.3-31.4 25.8-57.6 53.7-70.8zM352 192A128 128 0 1 0 96 192a128 128 0 1 0 256 0zM112 384l-16 0 0 32 16 0 224 0 16 0 0-32-16 0-224 0z" />
    </Icon>
);

export default Passport;
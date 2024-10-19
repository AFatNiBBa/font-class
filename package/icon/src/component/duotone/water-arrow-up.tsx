
import { Icon, generic } from "../../index";

/**
 * A component that renders the `water-arrow-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/water-arrow-up?s=duotone water-arrow-up}
 * @preview ![water-arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0uOCAzNTkuM2M0IDE3LjIgMjEuMiAyNy45IDM4LjQgMjMuOWMyNC41LTUuNyA0NC45LTE2LjUgNTguMi0yNUMxMjYuNSAzNzMuNyAxNTkgMzg0IDE5MiAzODRjMzEuOSAwIDYwLjYtOS45IDgwLjQtMTguOWM1LjgtMi43IDExLjEtNS4zIDE1LjYtNy43YzQuNSAyLjQgOS43IDUuMSAxNS42IDcuN2MxOS44IDkgNDguNSAxOC45IDgwLjQgMTguOWMzMyAwIDY1LjUtMTAuMyA5NC41LTI1LjhjMTMuNCA4LjQgMzMuNyAxOS4zIDU4LjIgMjVjMTcuMiA0IDM0LjQtNi43IDM4LjQtMjMuOWMuNi0yLjQgLjgtNC45IC44LTcuM2MwLTE0LjUtMTAtMjcuNy0yNC43LTMxLjFjLTE4LjEtNC4yLTM2LjItMTMuMy01MC42LTI1LjJjLTUuOS01LTEzLjMtNy42LTIwLjctNy42Yy02LjUgMC0xMi45IDItMTguNSA1LjlDNDM5LjQgMzA5LjIgNDEwLjkgMzIwIDM4NCAzMjBjLTI3LjUgMC01NS0xMC42LTc3LjUtMjYuMWMtMTEuMS03LjktMjUuOS03LjktMzcgMEMyNDcgMzA5LjQgMjE5LjUgMzIwIDE5MiAzMjBjLTI2LjkgMC01NS4zLTEwLjgtNzcuNC0yNi4xYy0xMi04LjUtMjguMS03LjgtMzkuMiAxLjdjLTE0LjQgMTEuOS0zMi41IDIxLTUwLjYgMjUuMmMtMTcuMiA0LTI3LjkgMjEuMi0yMy45IDM4LjR6bTAgMTI4YzQgMTcuMiAyMS4yIDI3LjkgMzguNCAyMy45YzI0LjUtNS43IDQ0LjktMTYuNSA1OC4yLTI1QzEyNi41IDUwMS43IDE1OSA1MTIgMTkyIDUxMmMzMS45IDAgNjAuNi05LjkgODAuNC0xOC45YzUuOC0yLjcgMTEuMS01LjMgMTUuNi03LjdjNC41IDIuNCA5LjcgNS4xIDE1LjYgNy43YzE5LjggOSA0OC41IDE4LjkgODAuNCAxOC45YzMzIDAgNjUuNS0xMC4zIDk0LjUtMjUuOGMxMy40IDguNCAzMy43IDE5LjMgNTguMiAyNWMxNy4yIDQgMzQuNC02LjcgMzguNC0yMy45Yy42LTIuNCAuOC00LjkgLjgtNy4zYzAtMTQuNS0xMC0yNy43LTI0LjctMzEuMWMtMTguMS00LjItMzYuMi0xMy4zLTUwLjYtMjUuMmMtMTEuMS05LjQtMjcuMy0xMC4xLTM5LjItMS43QzQzOS40IDQzNy4yIDQxMC45IDQ0OCAzODQgNDQ4Yy0yNy41IDAtNTUtMTAuNi03Ny41LTI2LjFjLTExLjEtNy45LTI1LjktNy45LTM3IDBDMjQ3IDQzNy40IDIxOS41IDQ0OCAxOTIgNDQ4Yy0yNi45IDAtNTUuMy0xMC44LTc3LjQtMjYuMWMtMTItOC41LTI4LjEtNy44LTM5LjIgMS43Yy0xNC40IDExLjktMzIuNSAyMS01MC42IDI1LjJjLTE3LjIgNC0yNy45IDIxLjItMjMuOSAzOC40eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzIwIDEwNC4zbDM0LjUgMzEuM2MxMy4xIDExLjkgMzMuMyAxMC45IDQ1LjItMi4yczEwLjktMzMuMy0yLjItNDUuMmwtODgtODBjLTEyLjItMTEuMS0zMC44LTExLjEtNDMuMSAwbC04OCA4MGMtMTMuMSAxMS45LTE0IDMyLjEtMi4yIDQ1LjJzMzIuMSAxNCA0NS4yIDIuMkwyNTYgMTA0LjMgMjU2IDIwOGMwIDE3LjcgMTQuMyAzMiAzMiAzMnMzMi0xNC4zIDMyLTMybDAtMTAzLjd6Ii8+PC9zdmc+|width=32|height=32)
 */
const WaterArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M.8 359.3c4 17.2 21.2 27.9 38.4 23.9c24.5-5.7 44.9-16.5 58.2-25C126.5 373.7 159 384 192 384c31.9 0 60.6-9.9 80.4-18.9c5.8-2.7 11.1-5.3 15.6-7.7c4.5 2.4 9.7 5.1 15.6 7.7c19.8 9 48.5 18.9 80.4 18.9c33 0 65.5-10.3 94.5-25.8c13.4 8.4 33.7 19.3 58.2 25c17.2 4 34.4-6.7 38.4-23.9c.6-2.4 .8-4.9 .8-7.3c0-14.5-10-27.7-24.7-31.1c-18.1-4.2-36.2-13.3-50.6-25.2c-5.9-5-13.3-7.6-20.7-7.6c-6.5 0-12.9 2-18.5 5.9C439.4 309.2 410.9 320 384 320c-27.5 0-55-10.6-77.5-26.1c-11.1-7.9-25.9-7.9-37 0C247 309.4 219.5 320 192 320c-26.9 0-55.3-10.8-77.4-26.1c-12-8.5-28.1-7.8-39.2 1.7c-14.4 11.9-32.5 21-50.6 25.2c-17.2 4-27.9 21.2-23.9 38.4zm0 128c4 17.2 21.2 27.9 38.4 23.9c24.5-5.7 44.9-16.5 58.2-25C126.5 501.7 159 512 192 512c31.9 0 60.6-9.9 80.4-18.9c5.8-2.7 11.1-5.3 15.6-7.7c4.5 2.4 9.7 5.1 15.6 7.7c19.8 9 48.5 18.9 80.4 18.9c33 0 65.5-10.3 94.5-25.8c13.4 8.4 33.7 19.3 58.2 25c17.2 4 34.4-6.7 38.4-23.9c.6-2.4 .8-4.9 .8-7.3c0-14.5-10-27.7-24.7-31.1c-18.1-4.2-36.2-13.3-50.6-25.2c-11.1-9.4-27.3-10.1-39.2-1.7C439.4 437.2 410.9 448 384 448c-27.5 0-55-10.6-77.5-26.1c-11.1-7.9-25.9-7.9-37 0C247 437.4 219.5 448 192 448c-26.9 0-55.3-10.8-77.4-26.1c-12-8.5-28.1-7.8-39.2 1.7c-14.4 11.9-32.5 21-50.6 25.2c-17.2 4-27.9 21.2-23.9 38.4z" />
            <path d="M320 104.3l34.5 31.3c13.1 11.9 33.3 10.9 45.2-2.2s10.9-33.3-2.2-45.2l-88-80c-12.2-11.1-30.8-11.1-43.1 0l-88 80c-13.1 11.9-14 32.1-2.2 45.2s32.1 14 45.2 2.2L256 104.3 256 208c0 17.7 14.3 32 32 32s32-14.3 32-32l0-103.7z" />
    </Icon>
);

export default WaterArrowUp;
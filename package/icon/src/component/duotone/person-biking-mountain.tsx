
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-biking-mountain` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-biking-mountain?s=duotone person-biking-mountain}
 * @preview ![person-biking-mountain](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM3NmwwIDE2YzAgMTIuMSA4LjkgMjIuMSAyMC42IDIzLjhjMi4yIDcuNiA1LjMgMTQuOSA5IDIxLjhjLTcgOS40LTYuMyAyMi44IDIuMyAzMS4zbDExLjMgMTEuM2M4LjYgOC42IDIxLjkgOS4zIDMxLjMgMi4yYzYuOCAzLjcgMTQuMSA2LjggMjEuNyA5Qzk3LjkgNTAzLjEgMTA3LjkgNTEyIDEyMCA1MTJsMTYgMGMxMi4xIDAgMjIuMS04LjkgMjMuOC0yMC42YzcuNi0yLjIgMTQuOS01LjMgMjEuNy05YzkuNCA3IDIyLjggNi4zIDMxLjMtMi4ybDExLjMtMTEuM2M4LjYtOC42IDkuMy0yMS45IDIuMy0zMS4zYzMuNy02LjggNi44LTE0LjEgOS0yMS43YzExLjYtMS43IDIwLjYtMTEuNyAyMC42LTIzLjhsMC0xNmMwLTEyLjEtOC45LTIyLjEtMjAuNi0yMy44Yy0yLjItNy42LTUuMy0xNC45LTktMjEuN2M3LTkuNCA2LjMtMjIuOC0yLjMtMzEuM2wtMTEuMy0xMS4zYy04LjYtOC42LTIxLjktOS4zLTMxLjMtMi4zYy02LjgtMy43LTE0LjEtNi44LTIxLjctOUMxNTguMSAyNjQuOSAxNDguMSAyNTYgMTM2IDI1NmwtMTYgMGMtMTIuMSAwLTIyLjEgOC45LTIzLjggMjAuNmMtNy42IDIuMi0xNC45IDUuMy0yMS43IDljLTkuNC03LjEtMjIuOC02LjMtMzEuMyAyLjNMMzEuOCAyOTkuMWMtOC42IDguNi05LjMgMjEuOS0yLjMgMzEuM2MtMy43IDYuOS02LjggMTQuMS05IDIxLjhDOC45IDM1My45IDAgMzYzLjkgMCAzNzZ6bTE5MiA4QTY0IDY0IDAgMSAxIDY0IDM4NGE2NCA2NCAwIDEgMSAxMjggMHptMTkyLThsMCAxNmMwIDEyLjEgOC45IDIyLjEgMjAuNiAyMy44YzIuMiA3LjYgNS4zIDE0LjkgOSAyMS44Yy03IDkuNC02LjMgMjIuOCAyLjIgMzEuM2wxMS4zIDExLjNjOC41IDguNiAyMS45IDkuMyAzMS4zIDIuMmM2LjggMy43IDE0LjEgNi44IDIxLjcgOWMxLjcgMTEuNiAxMS43IDIwLjYgMjMuOCAyMC42bDE2IDBjMTIuMSAwIDIyLjEtOC45IDIzLjgtMjAuNmM3LjYtMi4yIDE0LjktNS4zIDIxLjgtOWM5LjQgNyAyMi44IDYuMyAzMS4zLTIuMmwxMS4zLTExLjNjOC42LTguNiA5LjMtMjEuOSAyLjItMzEuM2MzLjctNi44IDYuOC0xNC4xIDktMjEuN2MxMS42LTEuNyAyMC42LTExLjcgMjAuNi0yMy44bDAtMTZjMC0xMi4xLTguOS0yMi4xLTIwLjYtMjMuOGMtMi4yLTcuNi01LjMtMTQuOS05LTIxLjdjNy05LjQgNi4zLTIyLjgtMi4yLTMxLjNsLTExLjMtMTEuM2MtOC42LTguNi0yMS45LTkuMy0zMS4zLTIuM2MtNi45LTMuNy0xNC4xLTYuOC0yMS44LTlDNTQyLjEgMjY0LjkgNTMyLjEgMjU2IDUyMCAyNTZsLTE2IDBjLTEyLjEgMC0yMi4xIDguOS0yMy44IDIwLjZjLTcuNiAyLjItMTQuOSA1LjMtMjEuNyA5Yy05LjQtNy4xLTIyLjgtNi4zLTMxLjMgMi4zbC0xMS4zIDExLjNjLTguNiA4LjYtOS4zIDIxLjktMi4yIDMxLjNjLTMuNyA2LjktNi44IDE0LjEtOSAyMS44QzM5Mi45IDM1My45IDM4NCAzNjMuOSAzODQgMzc2em0xOTIgOGE2NCA2NCAwIDEgMSAtMTI4IDAgNjQgNjQgMCAxIDEgMTI4IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00NDggNDhhNDggNDggMCAxIDAgLTk2IDAgNDggNDggMCAxIDAgOTYgMHpNNDI3LjIgMTYwbC02MS44LTQ4LjhjLTE3LjMtMTMuNi00MS43LTEzLjgtNTkuMS0uM2wtODMuMSA2NC4yYy0zMC43IDIzLjgtMjguNSA3MC44IDQuMyA5MS42TDI4OCAzMDUuMSAyODggNDE2YzAgMTcuNyAxNC4zIDMyIDMyIDMyczMyLTE0LjMgMzItMzJsMC0xMjhjMC0xMC43LTUuMy0yMC43LTE0LjItMjYuNkwyOTUgMjMyLjlsNjAuMy00OC41TDM5NiAyMTdjNS43IDQuNSAxMi43IDcgMjAgN2w2NCAwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMybC01Mi44IDB6bS0yMzguOCA2LjdMMjkwLjggODkuOWM3LjItNS40IDguNS0xNS43IDIuOS0yMi44TDI3OC43IDQ4LjRjLTIxLjYtMjctNjAuNy0zMi04OC40LTExLjJMMTI1LjIgODYuMWMtNy4yIDUuNC04LjUgMTUuNy0yLjkgMjIuOGw0NCA1NWM1LjQgNi43IDE1LjIgOCAyMi4xIDIuOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const PersonBikingMountain: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 376l0 16c0 12.1 8.9 22.1 20.6 23.8c2.2 7.6 5.3 14.9 9 21.8c-7 9.4-6.3 22.8 2.3 31.3l11.3 11.3c8.6 8.6 21.9 9.3 31.3 2.2c6.8 3.7 14.1 6.8 21.7 9C97.9 503.1 107.9 512 120 512l16 0c12.1 0 22.1-8.9 23.8-20.6c7.6-2.2 14.9-5.3 21.7-9c9.4 7 22.8 6.3 31.3-2.2l11.3-11.3c8.6-8.6 9.3-21.9 2.3-31.3c3.7-6.8 6.8-14.1 9-21.7c11.6-1.7 20.6-11.7 20.6-23.8l0-16c0-12.1-8.9-22.1-20.6-23.8c-2.2-7.6-5.3-14.9-9-21.7c7-9.4 6.3-22.8-2.3-31.3l-11.3-11.3c-8.6-8.6-21.9-9.3-31.3-2.3c-6.8-3.7-14.1-6.8-21.7-9C158.1 264.9 148.1 256 136 256l-16 0c-12.1 0-22.1 8.9-23.8 20.6c-7.6 2.2-14.9 5.3-21.7 9c-9.4-7.1-22.8-6.3-31.3 2.3L31.8 299.1c-8.6 8.6-9.3 21.9-2.3 31.3c-3.7 6.9-6.8 14.1-9 21.8C8.9 353.9 0 363.9 0 376zm192 8A64 64 0 1 1 64 384a64 64 0 1 1 128 0zm192-8l0 16c0 12.1 8.9 22.1 20.6 23.8c2.2 7.6 5.3 14.9 9 21.8c-7 9.4-6.3 22.8 2.2 31.3l11.3 11.3c8.5 8.6 21.9 9.3 31.3 2.2c6.8 3.7 14.1 6.8 21.7 9c1.7 11.6 11.7 20.6 23.8 20.6l16 0c12.1 0 22.1-8.9 23.8-20.6c7.6-2.2 14.9-5.3 21.8-9c9.4 7 22.8 6.3 31.3-2.2l11.3-11.3c8.6-8.6 9.3-21.9 2.2-31.3c3.7-6.8 6.8-14.1 9-21.7c11.6-1.7 20.6-11.7 20.6-23.8l0-16c0-12.1-8.9-22.1-20.6-23.8c-2.2-7.6-5.3-14.9-9-21.7c7-9.4 6.3-22.8-2.2-31.3l-11.3-11.3c-8.6-8.6-21.9-9.3-31.3-2.3c-6.9-3.7-14.1-6.8-21.8-9C542.1 264.9 532.1 256 520 256l-16 0c-12.1 0-22.1 8.9-23.8 20.6c-7.6 2.2-14.9 5.3-21.7 9c-9.4-7.1-22.8-6.3-31.3 2.3l-11.3 11.3c-8.6 8.6-9.3 21.9-2.2 31.3c-3.7 6.9-6.8 14.1-9 21.8C392.9 353.9 384 363.9 384 376zm192 8a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
            <path d="M448 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM427.2 160l-61.8-48.8c-17.3-13.6-41.7-13.8-59.1-.3l-83.1 64.2c-30.7 23.8-28.5 70.8 4.3 91.6L288 305.1 288 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128c0-10.7-5.3-20.7-14.2-26.6L295 232.9l60.3-48.5L396 217c5.7 4.5 12.7 7 20 7l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-52.8 0zm-238.8 6.7L290.8 89.9c7.2-5.4 8.5-15.7 2.9-22.8L278.7 48.4c-21.6-27-60.7-32-88.4-11.2L125.2 86.1c-7.2 5.4-8.5 15.7-2.9 22.8l44 55c5.4 6.7 15.2 8 22.1 2.8z" />
    </Icon>
);

export default PersonBikingMountain;
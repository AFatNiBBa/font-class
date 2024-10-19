
import { Icon, generic } from "../../index";

/**
 * A component that renders the `card-heart` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-heart?s=duotone card-heart}
 * @preview ![card-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDAgNDQ4YzAgMzUuMyAyOC43IDY0IDY0IDY0bDI1NiAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMzg0YzAtMzUuMy0yOC43LTY0LTY0LTY0TDY0IDBDMjguNyAwIDAgMjguNyAwIDY0ek05Ny40IDI2NC4zQzcyLjkgMjM5IDc0LjIgMTk3IDEwMS43IDE3My40YzIzLjYtMjAuNSA1OS45LTE2LjYgODEuNyA1LjdsOC43IDkuMiA4LjMtOS4yYzIxLjgtMjIuMyA1Ny43LTI2LjIgODIuMi01LjdjMjcuMSAyMy42IDI4LjQgNjUuNiAzLjkgOTAuOWwtODQuMyA4Ny40Yy0yLjggMi44LTYuNiA0LjMtMTAuMiA0LjNzLTcuMy0xLjQtOS45LTQuM0w5Ny40IDI2NC4zeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjg2LjYgMjY0LjNsLTg0LjMgODcuNGMtNS43IDUuNy0xNC45IDUuNy0yMC4xIDBMOTcuNCAyNjQuM0M3Mi45IDIzOSA3NC4yIDE5NyAxMDEuNyAxNzMuNGMyMy42LTIwLjUgNTkuOS0xNi42IDgxLjcgNS43bDguNyA5LjIgOC4zLTkuMmMyMS44LTIyLjMgNTcuNy0yNi4yIDgyLjItNS43YzI3LjEgMjMuNiAyOC40IDY1LjYgMy45IDkwLjl6Ii8+PC9zdmc+|width=32|height=32)
 */
const CardHeart: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64zM97.4 264.3C72.9 239 74.2 197 101.7 173.4c23.6-20.5 59.9-16.6 81.7 5.7l8.7 9.2 8.3-9.2c21.8-22.3 57.7-26.2 82.2-5.7c27.1 23.6 28.4 65.6 3.9 90.9l-84.3 87.4c-2.8 2.8-6.6 4.3-10.2 4.3s-7.3-1.4-9.9-4.3L97.4 264.3z" />
            <path d="M286.6 264.3l-84.3 87.4c-5.7 5.7-14.9 5.7-20.1 0L97.4 264.3C72.9 239 74.2 197 101.7 173.4c23.6-20.5 59.9-16.6 81.7 5.7l8.7 9.2 8.3-9.2c21.8-22.3 57.7-26.2 82.2-5.7c27.1 23.6 28.4 65.6 3.9 90.9z" />
    </Icon>
);

export default CardHeart;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `gear-code` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gear-code?s=sharp-duotone-solid gear-code}
 * @preview ![gear-code](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02LjMgMTc2LjVsNTkuNCA1NC4xQzY0LjYgMjM4LjkgNjQgMjQ3LjQgNjQgMjU2cy42IDE3LjEgMS43IDI1LjRMNi4zIDMzNS41bDU2IDk3IDc2LjUtMjQuNGMxMy40IDEwLjMgMjguMiAxOC45IDQ0IDI1LjRMMjAwIDUxMmwxMTIgMCAxNy4yLTc4LjRjMTUuOC02LjUgMzAuNi0xNS4xIDQ0LTI1LjRsNzYuNSAyNC40IDU2LTk3LTU5LjQtNTQuMWMxLjEtOC4zIDEuNy0xNi44IDEuNy0yNS40cy0uNi0xNy4xLTEuNy0yNS40bDU5LjQtNTQuMS01Ni05Ny03Ni41IDI0LjRDMzU5LjggOTMuNiAzNDUgODUgMzI5LjIgNzguNEwzMTIgMCAyMDAgMCAxODIuOCA3OC40Yy0xNS44IDYuNS0zMC42IDE1LjEtNDQgMjUuNEw2Mi4zIDc5LjVsLTU2IDk3ek0xMTMuNCAyNTZsMTEuMy0xMS4zIDQwLTQwYzMuOC0zLjggNy41LTcuNSAxMS4zLTExLjNjNy41IDcuNSAxNS4xIDE1LjEgMjIuNiAyMi42Yy0zLjggMy44LTcuNSA3LjUtMTEuMyAxMS4zYy05LjYgOS42LTE5LjEgMTkuMS0yOC43IDI4LjdjOS42IDkuNiAxOS4xIDE5LjEgMjguNyAyOC43YzMuOCAzLjggNy41IDcuNSAxMS4zIDExLjNjLTcuNSA3LjUtMTUuMSAxNS4xLTIyLjYgMjIuNmMtMy44LTMuOC03LjUtNy41LTExLjMtMTEuM2MtMTMuMy0xMy4zLTI2LjctMjYuNy00MC00MGMtMy44LTMuOC03LjUtNy41LTExLjMtMTEuM3pNMjIxLjYgMzY1LjJsMi42LTE1LjggMzItMTkyYy45LTUuMyAxLjgtMTAuNSAyLjYtMTUuOGMxMC41IDEuOCAyMSAzLjUgMzEuNiA1LjNjLS45IDUuMy0xLjggMTAuNS0yLjYgMTUuOGMtMTAuNyA2NC0yMS4zIDEyOC0zMiAxOTJjLS45IDUuMy0xLjggMTAuNS0yLjYgMTUuOGMtMTAuNS0xLjgtMjEtMy41LTMxLjYtNS4zek0zMTMuNCAyMTZjNy41LTcuNSAxNS4xLTE1LjEgMjIuNi0yMi42YzMuOCAzLjggNy41IDcuNSAxMS4zIDExLjNjMTMuMyAxMy4zIDI2LjcgMjYuNyA0MCA0MGMzLjggMy44IDcuNSA3LjUgMTEuMyAxMS4zYy0zLjggMy44LTcuNSA3LjUtMTEuMyAxMS4zYy0xMy4zIDEzLjMtMjYuNyAyNi43LTQwIDQwYy0zLjggMy44LTcuNSA3LjUtMTEuMyAxMS4zTDMxMy40IDI5NmMzLjgtMy44IDcuNS03LjUgMTEuMy0xMS4zYzkuNi05LjYgMTkuMS0xOS4xIDI4LjctMjguN2MtOS42LTkuNi0xOS4xLTE5LjEtMjguNy0yOC43Yy0zLjgtMy44LTcuNS03LjUtMTEuMy0xMS4zeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjkwLjQgMTQ2LjhsLTIuNiAxNS44LTMyIDE5Mi0yLjYgMTUuOC0zMS42LTUuMyAyLjYtMTUuOCAzMi0xOTIgMi42LTE1LjggMzEuNiA1LjN6TTE5OC42IDIxNmwtMTEuMyAxMS4zTDE1OC42IDI1NmwyOC43IDI4LjdMMTk4LjYgMjk2IDE3NiAzMTguNmwtMTEuMy0xMS4zLTQwLTQwTDExMy40IDI1NmwxMS4zLTExLjMgNDAtNDBMMTc2IDE5My40IDE5OC42IDIxNnpNMzM2IDE5My40bDExLjMgMTEuMyA0MCA0MEwzOTguNiAyNTZsLTExLjMgMTEuMy00MCA0MEwzMzYgMzE4LjYgMzEzLjQgMjk2bDExLjMtMTEuM0wzNTMuNCAyNTZsLTI4LjctMjguN0wzMTMuNCAyMTYgMzM2IDE5My40eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const GearCode: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M6.3 176.5l59.4 54.1C64.6 238.9 64 247.4 64 256s.6 17.1 1.7 25.4L6.3 335.5l56 97 76.5-24.4c13.4 10.3 28.2 18.9 44 25.4L200 512l112 0 17.2-78.4c15.8-6.5 30.6-15.1 44-25.4l76.5 24.4 56-97-59.4-54.1c1.1-8.3 1.7-16.8 1.7-25.4s-.6-17.1-1.7-25.4l59.4-54.1-56-97-76.5 24.4C359.8 93.6 345 85 329.2 78.4L312 0 200 0 182.8 78.4c-15.8 6.5-30.6 15.1-44 25.4L62.3 79.5l-56 97zM113.4 256l11.3-11.3 40-40c3.8-3.8 7.5-7.5 11.3-11.3c7.5 7.5 15.1 15.1 22.6 22.6c-3.8 3.8-7.5 7.5-11.3 11.3c-9.6 9.6-19.1 19.1-28.7 28.7c9.6 9.6 19.1 19.1 28.7 28.7c3.8 3.8 7.5 7.5 11.3 11.3c-7.5 7.5-15.1 15.1-22.6 22.6c-3.8-3.8-7.5-7.5-11.3-11.3c-13.3-13.3-26.7-26.7-40-40c-3.8-3.8-7.5-7.5-11.3-11.3zM221.6 365.2l2.6-15.8 32-192c.9-5.3 1.8-10.5 2.6-15.8c10.5 1.8 21 3.5 31.6 5.3c-.9 5.3-1.8 10.5-2.6 15.8c-10.7 64-21.3 128-32 192c-.9 5.3-1.8 10.5-2.6 15.8c-10.5-1.8-21-3.5-31.6-5.3zM313.4 216c7.5-7.5 15.1-15.1 22.6-22.6c3.8 3.8 7.5 7.5 11.3 11.3c13.3 13.3 26.7 26.7 40 40c3.8 3.8 7.5 7.5 11.3 11.3c-3.8 3.8-7.5 7.5-11.3 11.3c-13.3 13.3-26.7 26.7-40 40c-3.8 3.8-7.5 7.5-11.3 11.3L313.4 296c3.8-3.8 7.5-7.5 11.3-11.3c9.6-9.6 19.1-19.1 28.7-28.7c-9.6-9.6-19.1-19.1-28.7-28.7c-3.8-3.8-7.5-7.5-11.3-11.3z" />
            <path d="M290.4 146.8l-2.6 15.8-32 192-2.6 15.8-31.6-5.3 2.6-15.8 32-192 2.6-15.8 31.6 5.3zM198.6 216l-11.3 11.3L158.6 256l28.7 28.7L198.6 296 176 318.6l-11.3-11.3-40-40L113.4 256l11.3-11.3 40-40L176 193.4 198.6 216zM336 193.4l11.3 11.3 40 40L398.6 256l-11.3 11.3-40 40L336 318.6 313.4 296l11.3-11.3L353.4 256l-28.7-28.7L313.4 216 336 193.4z" />
    </Icon>
);

export default GearCode;
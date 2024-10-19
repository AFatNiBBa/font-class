
import { Icon } from "../../index";

/**
 * A component that renders the `sack-dollar` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sack-dollar?s=light sack-dollar}
 * @preview ![sack-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjAxLjUgMTQ0bDEwOSAwIDUuMyAzLjRDMzcwLjYgMTgyLjUgNDgwIDI2OC4zIDQ4MCA0MTZjMCAzNS4zLTI4LjcgNjQtNjQgNjRMOTYgNDgwYy0zNS4zIDAtNjQtMjguNy02NC02NGMwLTE0Ny43IDEwOS40LTIzMy41IDE2NC4zLTI2OC42bDUuMy0zLjR6bTk4LjQtMzJsLTg3LjggMC02LjctOS44TDE1Ni45IDMybDE5OC4xIDAtNDguNCA3MC4yLTYuNyA5Ljh6TTE1Mi42IDEzOC41QzkxLjIgMTgzLjcgMCAyNzMuNCAwIDQxNmMwIDUzIDQzIDk2IDk2IDk2bDMyMCAwYzUzIDAgOTYtNDMgOTYtOTZjMC0xNDIuNi05MS4yLTIzMi4zLTE1Mi42LTI3Ny41Yy05LjctNy4xLTE4LjYtMTMuMi0yNi40LTE4LjFMMzUxLjIgOTRsMzguOS01Ni40QzQwMSAyMS43IDM4OS42IDAgMzcwLjMgMEwxNDEuNyAwQzEyMi40IDAgMTExIDIxLjcgMTIxLjkgMzcuNkwxNjAuOCA5NCAxNzkgMTIwLjRjLTcuNyA0LjktMTYuNyAxMS0yNi40IDE4LjF6TTI3MiAyMTZjMC04LjgtNy4yLTE2LTE2LTE2cy0xNiA3LjItMTYgMTZsMCAxNy4zYy04LjMgMS41LTE2LjcgNC4zLTI0LjEgOC43Yy0xMyA3LjctMjMuOSAyMS4xLTIzLjggNDAuNWMuMSAxOC40IDEwLjggMzAuMSAyMi43IDM3LjNjMTAuNSA2LjMgMjMuOCAxMC40IDM0LjggMTMuN2MwIDAgMCAwIDAgMGwxLjYgLjVjMTIuNSAzLjggMjIuMiA2LjkgMjkgMTEuMmM1LjkgMy43IDcuNyA3IDcuNyAxMS42Yy4xIDYuNi0yLjcgMTAuOC03LjggMTRjLTUuOCAzLjYtMTQuNSA1LjYtMjMuNyA1LjNjLTExLjgtLjQtMjIuNy00LjEtMzYuMy04LjdjMCAwIDAgMCAwIDBzMCAwIDAgMHMwIDAgMCAwYy0yLjMtLjgtNC43LTEuNi03LjEtMi40Yy04LjQtMi44LTE3LjQgMS43LTIwLjIgMTAuMXMxLjcgMTcuNCAxMC4xIDIwLjJjMiAuNyA0LjEgMS40IDYuMiAyLjFjMCAwIDAgMCAwIDBjOS4yIDMuMiAxOS43IDYuOCAzMC45IDguOWwwIDE3LjhjMCA4LjggNy4yIDE2IDE2IDE2czE2LTcuMiAxNi0xNmwwLTE3LjFjOC43LTEuNCAxNy40LTQuMyAyNS4xLTkuMWMxMy4zLTguMyAyMy4yLTIyLjIgMjIuOS00MS42Yy0uMi0xOC41LTEwLjYtMzAuNi0yMi43LTM4LjJjLTExLTYuOS0yNS0xMS4yLTM2LjMtMTQuNmMwIDAgMCAwIDAgMHMwIDAgMCAwbC0uNS0uMWMtMTIuNi0zLjgtMjIuMy02LjgtMjkuMi0xMC45Yy02LTMuNi03LjItNi40LTcuMy0xMC4xYzAtNS40IDIuNC05LjQgOC4xLTEyLjhjNi4yLTMuNyAxNS4xLTUuNyAyMy42LTUuNWMxMC4xIC4yIDIxIDIuMyAzMi4xIDUuM2M4LjUgMi4zIDE3LjMtMi44IDE5LjYtMTEuM3MtMi44LTE3LjMtMTEuMy0xOS42Yy03LjUtMi0xNS42LTMuOS0yNC4xLTUuMWwwLTE3LjN6Ii8+PC9zdmc+|width=32|height=32)
 */
const SackDollar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M201.5 144l109 0 5.3 3.4C370.6 182.5 480 268.3 480 416c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64c0-147.7 109.4-233.5 164.3-268.6l5.3-3.4zm98.4-32l-87.8 0-6.7-9.8L156.9 32l198.1 0-48.4 70.2-6.7 9.8zM152.6 138.5C91.2 183.7 0 273.4 0 416c0 53 43 96 96 96l320 0c53 0 96-43 96-96c0-142.6-91.2-232.3-152.6-277.5c-9.7-7.1-18.6-13.2-26.4-18.1L351.2 94l38.9-56.4C401 21.7 389.6 0 370.3 0L141.7 0C122.4 0 111 21.7 121.9 37.6L160.8 94 179 120.4c-7.7 4.9-16.7 11-26.4 18.1zM272 216c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 17.3c-8.3 1.5-16.7 4.3-24.1 8.7c-13 7.7-23.9 21.1-23.8 40.5c.1 18.4 10.8 30.1 22.7 37.3c10.5 6.3 23.8 10.4 34.8 13.7c0 0 0 0 0 0l1.6 .5c12.5 3.8 22.2 6.9 29 11.2c5.9 3.7 7.7 7 7.7 11.6c.1 6.6-2.7 10.8-7.8 14c-5.8 3.6-14.5 5.6-23.7 5.3c-11.8-.4-22.7-4.1-36.3-8.7c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-2.3-.8-4.7-1.6-7.1-2.4c-8.4-2.8-17.4 1.7-20.2 10.1s1.7 17.4 10.1 20.2c2 .7 4.1 1.4 6.2 2.1c0 0 0 0 0 0c9.2 3.2 19.7 6.8 30.9 8.9l0 17.8c0 8.8 7.2 16 16 16s16-7.2 16-16l0-17.1c8.7-1.4 17.4-4.3 25.1-9.1c13.3-8.3 23.2-22.2 22.9-41.6c-.2-18.5-10.6-30.6-22.7-38.2c-11-6.9-25-11.2-36.3-14.6c0 0 0 0 0 0s0 0 0 0l-.5-.1c-12.6-3.8-22.3-6.8-29.2-10.9c-6-3.6-7.2-6.4-7.3-10.1c0-5.4 2.4-9.4 8.1-12.8c6.2-3.7 15.1-5.7 23.6-5.5c10.1 .2 21 2.3 32.1 5.3c8.5 2.3 17.3-2.8 19.6-11.3s-2.8-17.3-11.3-19.6c-7.5-2-15.6-3.9-24.1-5.1l0-17.3z" />
    </Icon>
);

export default SackDollar;
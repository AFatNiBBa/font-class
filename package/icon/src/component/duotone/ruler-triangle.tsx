
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ruler-triangle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-triangle?s=duotone ruler-triangle}
 * @preview ![ruler-triangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDQ4YzAgMzUuMyAyOC43IDY0IDY0IDY0bDQxNiAwYzEyLjkgMCAyNC42LTcuOCAyOS42LTE5LjhzMi4yLTI1LjctNi45LTM0LjljLTE3LjYtMTcuNi0zNS4xLTM1LjEtNTIuNy01Mi43Yy03LjUgNy41LTE1LjEgMTUuMS0yMi42IDIyLjZjLTMuMSAzLjEtNy4yIDQuNy0xMS4zIDQuN2MtNC4xIDAtOC4yLTEuNi0xMS4zLTQuN2MtNi4yLTYuNC02LjItMTYuNCAwLTIyLjZjNy41LTcuNSAxNS4xLTE1LjEgMjIuNi0yMi42Yy0xOS4xLTE5LjEtMzguMy0zOC4yLTU3LjQtNTcuNGMtNy41IDcuNS0xNS4xIDE1LjEtMjIuNiAyMi42Yy02LjIgNi4yLTE2LjQgNi4yLTIyLjYgMGMtNi4yLTYuNC02LjItMTYuNCAwLTIyLjZjNy41LTcuNSAxNS4xLTE1LjEgMjIuNi0yMi42Yy0xOS4xLTE5LjEtMzguMi0zOC4yLTU3LjQtNTcuNGMtNy41IDcuNS0xNS4xIDE1LjEtMjIuNiAyMi42Yy02LjIgNi4yLTE2LjQgNi4yLTIyLjYgMHMtNi4yLTE2LjQgMC0yMi42YzcuNS03LjUgMTUuMS0xNS4xIDIyLjYtMjIuNmwtNTcuNC01Ny40Yy03LjUgNy41LTE1LjEgMTUuMS0yMi42IDIyLjZjLTYuMiA2LjItMTYuNCA2LjItMjIuNiAwcy02LjItMTYuNCAwLTIyLjZjNy41LTcuNSAxNS4xLTE1LjEgMjIuNi0yMi42TDEyOS45IDg0LjdjLTcuNSA3LjUtMTUuMSAxNS4xLTIyLjYgMjIuNmMtNi4yIDYuMi0xNi40IDYuMi0yMi42IDBDODEuNiAxMDQuMiA4MCAxMDAuMSA4MCA5NnMxLjYtOC4yIDQuNy0xMS4zYzcuNS03LjUgMTUuMS0xNS4xIDIyLjYtMjIuNkw1NC42IDkuNEM0NS41IC4yIDMxLjctMi41IDE5LjggMi40UzAgMTkuMSAwIDMyek0xMjggMjU2TDI1NiAzODRsLTEyOCAwIDAtMTI4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTA3LjMgNjIuMUw4NC43IDg0LjdjLTYuMiA2LjItNi4yIDE2LjQgMCAyMi42czE2LjQgNi4yIDIyLjYgMGwyMi42LTIyLjZMMTA3LjMgNjIuMXptODAgODBsLTIyLjYgMjIuNmMtNi4yIDYuMi02LjIgMTYuNCAwIDIyLjZzMTYuNCA2LjIgMjIuNiAwbDIyLjYtMjIuNi0yMi42LTIyLjZ6bTgwIDgwbC0yMi42IDIyLjZjLTYuMiA2LjItNi4yIDE2LjQgMCAyMi42czE2LjQgNi4yIDIyLjYgMGwyMi42LTIyLjYtMjIuNi0yMi42em04MCA4MGwtMjIuNiAyMi42Yy02LjIgNi4yLTYuMiAxNi40IDAgMjIuNnMxNi40IDYuMiAyMi42IDBsMjIuNi0yMi42LTIyLjYtMjIuNnptODAgODBsLTIyLjYgMjIuNmMtNi4yIDYuMi02LjIgMTYuNCAwIDIyLjZzMTYuNCA2LjIgMjIuNiAwbDIyLjYtMjIuNi0yMi42LTIyLjZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const RulerTriangle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 448c0 35.3 28.7 64 64 64l416 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9c-17.6-17.6-35.1-35.1-52.7-52.7c-7.5 7.5-15.1 15.1-22.6 22.6c-3.1 3.1-7.2 4.7-11.3 4.7c-4.1 0-8.2-1.6-11.3-4.7c-6.2-6.4-6.2-16.4 0-22.6c7.5-7.5 15.1-15.1 22.6-22.6c-19.1-19.1-38.3-38.2-57.4-57.4c-7.5 7.5-15.1 15.1-22.6 22.6c-6.2 6.2-16.4 6.2-22.6 0c-6.2-6.4-6.2-16.4 0-22.6c7.5-7.5 15.1-15.1 22.6-22.6c-19.1-19.1-38.2-38.2-57.4-57.4c-7.5 7.5-15.1 15.1-22.6 22.6c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6c7.5-7.5 15.1-15.1 22.6-22.6l-57.4-57.4c-7.5 7.5-15.1 15.1-22.6 22.6c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6c7.5-7.5 15.1-15.1 22.6-22.6L129.9 84.7c-7.5 7.5-15.1 15.1-22.6 22.6c-6.2 6.2-16.4 6.2-22.6 0C81.6 104.2 80 100.1 80 96s1.6-8.2 4.7-11.3c7.5-7.5 15.1-15.1 22.6-22.6L54.6 9.4C45.5 .2 31.7-2.5 19.8 2.4S0 19.1 0 32zM128 256L256 384l-128 0 0-128z" />
            <path d="M107.3 62.1L84.7 84.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l22.6-22.6L107.3 62.1zm80 80l-22.6 22.6c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l22.6-22.6-22.6-22.6zm80 80l-22.6 22.6c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l22.6-22.6-22.6-22.6zm80 80l-22.6 22.6c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l22.6-22.6-22.6-22.6zm80 80l-22.6 22.6c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l22.6-22.6-22.6-22.6z" />
    </Icon>
);

export default RulerTriangle;
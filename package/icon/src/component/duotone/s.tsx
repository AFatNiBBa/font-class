
import { Icon, generic } from "../../index";

/**
 * A component that renders the `s` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/s?s=duotone s}
 * @preview ![s](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05OS4xIDEwNS40Qzc5IDExNCA2OC4yIDEyNy4yIDY1LjIgMTQ0LjhjLTIuNCAxNC4xLS43IDIzLjIgMiAyOS40YzIuOCA2LjMgNy45IDEyLjQgMTYuNyAxOC42YzE5LjIgMTMuNCA0OC4zIDIyLjEgODQuOSAzMi41YzEgLjMgMS45IC42IDIuOSAuOGMzMi43IDkuMyA3MiAyMC42IDEwMC45IDQwLjdjMTUuNyAxMC45IDI5LjkgMjUuNSAzOC42IDQ1LjFjOC44IDE5LjggMTAuOCA0MiA2LjYgNjYuM2MtNy4zIDQyLjUtMzUuMyA3MS43LTcxLjggODcuM2MtMzUuNCAxNS4yLTc5LjEgMTcuOS0xMjMuNyAxMC45bC0uMiAwczAgMCAwIDBjLTI0LTMuOS02Mi43LTE3LjEtODcuNi0yNS42Yy00LjgtMS43LTkuMi0zLjEtMTIuOC00LjNDNS4xIDQ0MC44LTMuOSA0MjIuNyAxLjYgNDA1LjlzMjMuNy0yNS44IDQwLjUtMjAuM2M0LjkgMS42IDEwLjIgMy40IDE1LjkgNS40YzI1LjQgOC42IDU2LjQgMTkuMiA3NC40IDIyLjFjMzYuOCA1LjcgNjcuNSAyLjUgODguNS02LjVjMjAuMS04LjYgMzAuOC0yMS44IDMzLjktMzkuNGMyLjQtMTQuMSAuNy0yMy4yLTItMjkuNGMtMi44LTYuMy03LjktMTIuNC0xNi43LTE4LjZjLTE5LjItMTMuNC00OC4zLTIyLjEtODQuOS0zMi41Yy0xLS4zLTEuOS0uNi0yLjktLjhjLTMyLjctOS4zLTcyLTIwLjYtMTAwLjktNDAuN2MtMTUuNy0xMC45LTI5LjktMjUuNS0zOC42LTQ1LjFjLTguOC0xOS44LTEwLjgtNDItNi42LTY2LjNsMzEuNSA1LjVMMi4xIDEzMy45QzkuNCA5MS40IDM3LjQgNjIuMiA3My45IDQ2LjZjMzUuNC0xNS4yIDc5LjEtMTcuOSAxMjMuNy0xMC45YzEzIDIgNTIuNCA5LjYgNjYuNiAxMy40YzE3LjEgNC41IDI3LjIgMjIuMSAyMi43IDM5LjJzLTIyLjEgMjcuMi0zOS4yIDIyLjdjLTExLjItMy00OC4xLTEwLjItNjAuMS0xMmw0LjktMzEuNS00LjkgMzEuNWMtMzYuOS01LjgtNjcuNS0yLjUtODguNiA2LjV6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const S: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M99.1 105.4C79 114 68.2 127.2 65.2 144.8c-2.4 14.1-.7 23.2 2 29.4c2.8 6.3 7.9 12.4 16.7 18.6c19.2 13.4 48.3 22.1 84.9 32.5c1 .3 1.9 .6 2.9 .8c32.7 9.3 72 20.6 100.9 40.7c15.7 10.9 29.9 25.5 38.6 45.1c8.8 19.8 10.8 42 6.6 66.3c-7.3 42.5-35.3 71.7-71.8 87.3c-35.4 15.2-79.1 17.9-123.7 10.9l-.2 0s0 0 0 0c-24-3.9-62.7-17.1-87.6-25.6c-4.8-1.7-9.2-3.1-12.8-4.3C5.1 440.8-3.9 422.7 1.6 405.9s23.7-25.8 40.5-20.3c4.9 1.6 10.2 3.4 15.9 5.4c25.4 8.6 56.4 19.2 74.4 22.1c36.8 5.7 67.5 2.5 88.5-6.5c20.1-8.6 30.8-21.8 33.9-39.4c2.4-14.1 .7-23.2-2-29.4c-2.8-6.3-7.9-12.4-16.7-18.6c-19.2-13.4-48.3-22.1-84.9-32.5c-1-.3-1.9-.6-2.9-.8c-32.7-9.3-72-20.6-100.9-40.7c-15.7-10.9-29.9-25.5-38.6-45.1c-8.8-19.8-10.8-42-6.6-66.3l31.5 5.5L2.1 133.9C9.4 91.4 37.4 62.2 73.9 46.6c35.4-15.2 79.1-17.9 123.7-10.9c13 2 52.4 9.6 66.6 13.4c17.1 4.5 27.2 22.1 22.7 39.2s-22.1 27.2-39.2 22.7c-11.2-3-48.1-10.2-60.1-12l4.9-31.5-4.9 31.5c-36.9-5.8-67.5-2.5-88.6 6.5z" />
    </Icon>
);

export default S;
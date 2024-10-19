
import { Icon, generic } from "../../index";

/**
 * A component that renders the `duck` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/duck?s=duotone duck}
 * @preview ![duck](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00MDAuMiAyMjAuOGMtLjEgLjYtLjEgMS4xLS4yIDEuNmMwIC41LS4xIDEtLjEgMS41YzcgMCAxMy45IDAgMjAuOSAwYzUwLjMgMCA5MS4xLTQwLjggOTEuMS05MS4xYzAtNi40LTUuMi0xMS40LTExLjQtMTEuNGMtLjUgMC0xIDAtMS40IC4xTDQ2My45IDEyNmMtMTAuNSAxLjMtMjEuMiAxLjMtMzEuOCAwbC0uNi0uMWMuMyAzLjMgLjUgNi43IC41IDEwLjFjMCAyNC42LTguNSA0Ny4yLTIyLjggNjVjLS43IC44LTEuMyAxLjctMS45IDIuNXMtMS4yIDEuOC0xLjcgMi43Yy0xLjEgMS44LTIuMSAzLjctMi45IDUuNnMtMS41IDMuOS0xLjkgNmMtLjEgLjUtLjIgMS0uMyAxLjVzLS4yIDEtLjIgMS41eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDA5LjIgMjAxYy01LjQgNi44LTkuMiAxNS05LjIgMjMuN2wwIDI0YzAgNi42IDIuOCAxMi44IDcuMiAxNy43QzQyNy42IDI4OS4xIDQ0MCAzMTkuMSA0NDAgMzUyYzAgNzAuNy01Ny4zIDEyOC0xMjggMTI4bC0xMTYgMEM4Ny44IDQ4MCAwIDM5Mi4yIDAgMjg0bDAtNS40QzAgMjY2LjEgMTAuMSAyNTYgMjIuNiAyNTZjNiAwIDExLjggMi40IDE2IDYuNkw1NCAyNzhjNi4yIDYuMiAxNS4yIDguNSAyMy42IDYuMWwxNzIuOC00OS40YzEwLjQtMyAxNS43LTE0LjUgNy44LTIxLjdjLTIxLTE5LTM0LjEtNDYuNS0zNC4xLTc3YzAtNTcuNCA0Ni42LTEwNCAxMDQtMTA0czEwNCA0Ni42IDEwNCAxMDRjMCAyNC42LTguNSA0Ny4yLTIyLjggNjV6TTM2OCAxMzZhMjQgMjQgMCAxIDAgLTQ4IDAgMjQgMjQgMCAxIDAgNDggMHpNMzQwLjYgMjk2LjljLjUtOC44LTYuMi0xNi40LTE1LTE2LjlzLTE2LjQgNi4yLTE2LjkgMTVjLTIuNCA0MS4yLTMyLjYgNzktNzcuMyA5MC4xYy00MC4zIDEwLjEtODAuNS00LjYtMTAzLjctMzMuNWMtNS41LTYuOS0xNS42LTgtMjIuNS0yLjVzLTggMTUuNi0yLjUgMjIuNWMzMS4xIDM4LjcgODQgNTcuNiAxMzYuNCA0NC41YzU4LTE0LjUgOTguMy02My44IDEwMS41LTExOS4zeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Duck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M400.2 220.8c-.1 .6-.1 1.1-.2 1.6c0 .5-.1 1-.1 1.5c7 0 13.9 0 20.9 0c50.3 0 91.1-40.8 91.1-91.1c0-6.4-5.2-11.4-11.4-11.4c-.5 0-1 0-1.4 .1L463.9 126c-10.5 1.3-21.2 1.3-31.8 0l-.6-.1c.3 3.3 .5 6.7 .5 10.1c0 24.6-8.5 47.2-22.8 65c-.7 .8-1.3 1.7-1.9 2.5s-1.2 1.8-1.7 2.7c-1.1 1.8-2.1 3.7-2.9 5.6s-1.5 3.9-1.9 6c-.1 .5-.2 1-.3 1.5s-.2 1-.2 1.5z" />
            <path d="M409.2 201c-5.4 6.8-9.2 15-9.2 23.7l0 24c0 6.6 2.8 12.8 7.2 17.7C427.6 289.1 440 319.1 440 352c0 70.7-57.3 128-128 128l-116 0C87.8 480 0 392.2 0 284l0-5.4C0 266.1 10.1 256 22.6 256c6 0 11.8 2.4 16 6.6L54 278c6.2 6.2 15.2 8.5 23.6 6.1l172.8-49.4c10.4-3 15.7-14.5 7.8-21.7c-21-19-34.1-46.5-34.1-77c0-57.4 46.6-104 104-104s104 46.6 104 104c0 24.6-8.5 47.2-22.8 65zM368 136a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM340.6 296.9c.5-8.8-6.2-16.4-15-16.9s-16.4 6.2-16.9 15c-2.4 41.2-32.6 79-77.3 90.1c-40.3 10.1-80.5-4.6-103.7-33.5c-5.5-6.9-15.6-8-22.5-2.5s-8 15.6-2.5 22.5c31.1 38.7 84 57.6 136.4 44.5c58-14.5 98.3-63.8 101.5-119.3z" />
    </Icon>
);

export default Duck;
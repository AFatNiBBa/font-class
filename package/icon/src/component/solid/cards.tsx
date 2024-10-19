
import { Icon } from "../../index";

/**
 * A component that renders the `cards` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cards?s=solid cards}
 * @preview ![cards](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNy41IDE5NC45Yy0xNS40LTI2LjYtNi4zLTYwLjcgMjAuNC03Ni4xTDIyMC43IDcuNWMyNi42LTE1LjQgNjAuNy02LjMgNzYuMSAyMC40bDE2NyAyODkuM2MxNS40IDI2LjYgNi4yIDYwLjctMjAuNCA3Ni4xTDI1MC41IDUwNC41Yy0yNi42IDE1LjQtNjAuNyA2LjItNzYuMS0yMC40TDcuNSAxOTQuOXpNMTk3IDE1OS42Yy0xMS4xLTMtMjIuNiAzLjYtMjUuNiAxNC44bC03LjIgMjYuOS0yMC40IDc2LjFjLTcgMjYgOC41IDUyLjcgMzQuNCA1OS43czUyLjctOC41IDU5LjctMzQuNGwyLjQtOC44Yy4xLS40IC4yLS44IC4zLTEuMWwxNy43IDMwLjctMTIuMSA3Yy02LjcgMy44LTguOSAxMi40LTUuMSAxOXMxMi40IDguOSAxOSA1LjFsNDguMi0yNy44YzYuNy0zLjggOC45LTEyLjQgNS4xLTE5cy0xMi40LTguOS0xOS01LjFsLTEyLjEgNy0xNy43LTMwLjdjLjQgLjEgLjggLjIgMS4xIC4zbDguOCAyLjRjMjYgNyA1Mi43LTguNSA1OS43LTM0LjRzLTguNS01Mi43LTM0LjQtNTkuN2wtNzYuMS0yMC40TDE5NyAxNTkuNnpNNDU5LjQgNDIwLjljNDEuOS0yNC4yIDU2LjMtNzcuOCAzMi4xLTExOS44TDM1NC43IDY0LjJjMS43LS4yIDMuNS0uMiA1LjMtLjJsMjI0IDBjMzAuOSAwIDU2IDI1LjEgNTYgNTZsMCAzMzZjMCAzMC45LTI1LjEgNTYtNTYgNTZsLTIyNCAwYy0xMy43IDAtMjYuMi00LjktMzUuOS0xM2wxMzUuMy03OC4xem03NC41LTE4My4zTDU4MiAxODcuNmMxNC0xNC41IDEzLjItMzguNS0yLjItNTEuOWMtMTQtMTEuNy0zNC41LTkuNS00Ni45IDMuMmwtNC43IDUuMi01LTUuMmMtMTIuNS0xMi43LTMzLjItMTUtNDYuNy0zLjJjLTE1LjcgMTMuNS0xNi41IDM3LjUtMi41IDUxLjlsNDguNCA0OS45YzMgMy4yIDguMiAzLjIgMTEuNSAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Cards: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M7.5 194.9c-15.4-26.6-6.3-60.7 20.4-76.1L220.7 7.5c26.6-15.4 60.7-6.3 76.1 20.4l167 289.3c15.4 26.6 6.2 60.7-20.4 76.1L250.5 504.5c-26.6 15.4-60.7 6.2-76.1-20.4L7.5 194.9zM197 159.6c-11.1-3-22.6 3.6-25.6 14.8l-7.2 26.9-20.4 76.1c-7 26 8.5 52.7 34.4 59.7s52.7-8.5 59.7-34.4l2.4-8.8c.1-.4 .2-.8 .3-1.1l17.7 30.7-12.1 7c-6.7 3.8-8.9 12.4-5.1 19s12.4 8.9 19 5.1l48.2-27.8c6.7-3.8 8.9-12.4 5.1-19s-12.4-8.9-19-5.1l-12.1 7-17.7-30.7c.4 .1 .8 .2 1.1 .3l8.8 2.4c26 7 52.7-8.5 59.7-34.4s-8.5-52.7-34.4-59.7l-76.1-20.4L197 159.6zM459.4 420.9c41.9-24.2 56.3-77.8 32.1-119.8L354.7 64.2c1.7-.2 3.5-.2 5.3-.2l224 0c30.9 0 56 25.1 56 56l0 336c0 30.9-25.1 56-56 56l-224 0c-13.7 0-26.2-4.9-35.9-13l135.3-78.1zm74.5-183.3L582 187.6c14-14.5 13.2-38.5-2.2-51.9c-14-11.7-34.5-9.5-46.9 3.2l-4.7 5.2-5-5.2c-12.5-12.7-33.2-15-46.7-3.2c-15.7 13.5-16.5 37.5-2.5 51.9l48.4 49.9c3 3.2 8.2 3.2 11.5 0z" />
    </Icon>
);

export default Cards;
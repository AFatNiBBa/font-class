
import { Icon } from "../../index";

/**
 * A component that renders the `hands` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hands?s=regular hands}
 * @preview ![hands](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTI4IDE0My44YzAtOC44LTcuMi0xNi0xNi0xNnMtMTYgNy4yLTE2IDE2bDAgMzcuNGMwIDEwLjktNy4zIDIwLjQtMTcuOCAyMy4ycy0yMS42LTEuOC0yNy0xMS4yTDM2OS43IDUyYy0yLjItMy44LTcuMS01LjEtMTAuOS0yLjlzLTUuMSA3LjEtMi45IDEwLjljMCAwIDAgMCAwIC4xbDQ4IDgzLjFjNi4yIDEwLjcgMy4yIDI0LjMtNi43IDMxLjRjLTE1LjEtMTQuMy0zMi4zLTI2LjUtNTEuNS0zNi4xTDMxNC4zIDg0bC04LTEzLjljMCAwIDAgMCAwLS4xbC04LTEzLjhjLTIuMi0zLjgtNy4xLTUuMS0xMC45LTIuOXMtNS4xIDcuMS0yLjkgMTAuOWw4IDEzLjkgOCAxMy45YzAgMCAwIDAgMCAuMWwyMC4yIDM1LTUzLTIzLjVjLTIyLjgtMTAuMS00Ny42LTkuOC02OS0xYzQuMS0xMi42IDEyLjgtMjMuOSAyNS4yLTMxYzMuOC0yLjIgNy43LTMuOSAxMS43LTUuMWMtMi4zLTIxLjQgNy44LTQzLjIgMjcuNy01NC42czQzLjgtOS40IDYxLjEgMy4zYzMuMS0yLjkgNi41LTUuNCAxMC4zLTcuNkMzNjEuNi04IDM5NS44IDEuMiA0MTEuMyAyOGw0Ni45IDgxLjJjMTEuNC0xNy43IDMxLjMtMjkuNCA1My45LTI5LjRjMzUuMyAwIDY0IDI4LjcgNjQgNjRsMCA4NC42YzAgNjkuNC0zNi43IDEzMy42LTk2LjUgMTY4LjhjLTEwLjQgNi4xLTIxIDExLjEtMzEuOSAxNS4xYzgtMTkuMiAxMy4zLTM5LjkgMTUuNC02MS40YzQwLjUtMjcuNCA2NS03My4yIDY1LTEyMi40bDAtODQuNnptLTM1My45IDEzYzE1LjEtMzIgNTMuMi00NS43IDg1LjItMzAuN2w1Ni40IDI2LjVjMzYgMTYuOSA2NS40IDQzLjcgODUuNyA3Ni4xYzE5LjYgMjkuNCAzMC43IDY0LjQgMzAuNyAxMDEuMmMwIDEgMCAyIDAgM2MwIDEgMCAyLjEgMCAzLjFjMCAxLjItLjEgMi4zLS4yIDMuNGMtNSA5Ni4xLTg0LjUgMTcyLjYtMTgxLjggMTcyLjZMMTIwIDUxMmMtMzAuOSAwLTU2LTI1LjEtNTYtNTZjMC00LjQgLjUtOC42IDEuNS0xMi43QzQ1LjggNDM0LjYgMzIgNDE0LjkgMzIgMzkyYzAtNC40IC41LTguNiAxLjUtMTIuN0MxMy44IDM3MC42IDAgMzUwLjkgMCAzMjhzMTMuOC00Mi42IDMzLjUtNTEuM2MtLjktNC4xLTEuNS04LjMtMS41LTEyLjdjMC0zMC45IDI1LjEtNTYgNTYtNTZsODQuNyAwYy02LjQtMTYtNi41LTM0LjUgMS40LTUxLjN6TTcyIDMyMGwtLjIgMEw1NiAzMjBjLTQuNCAwLTggMy42LTggOHMzLjYgOCA4IDhsMzIgMCAuMiAwIDk1LjggMGMxMy4zIDAgMjQgMTAuNyAyNCAyNHMtMTAuNyAyNC0yNCAyNGwtOTYuMSAwYy00LjQgMC03LjkgMy42LTcuOSA4YzAgNC40IDMuNiA4IDggOGwzMS45IDAgLjIgMCA2My45IDBjMTMuMyAwIDI0IDEwLjcgMjQgMjRzLTEwLjcgMjQtMjQgMjRsLTY0LjEgMGMtNC40IC4xLTcuOSAzLjYtNy45IDhjMCA0LjQgMy42IDggOCA4bDEyOS45IDBjNzIuMyAwIDEzMS4zLTU3LjMgMTM0LTEyOC45YzAtLjQgMC0uOSAuMS0xLjNsMC0uNSAwLS42IDAtLjNjMC0uOCAwLTEuNyAwLTIuNWMwLTI3LjItOC4yLTUzLjEtMjIuOC03NC44Yy0uMi0uMi0uMy0uNS0uNS0uN2MtMTUuNS0yNC45LTM4LTQ1LjQtNjUuNS01OC40bC01Ni40LTI2LjVjLTgtMy44LTE3LjUtLjMtMjEuMyA3LjdzLS4zIDE3LjUgNy43IDIxLjNsMjUuMSAxMS44YzEwLjIgNC44IDE1LjcgMTYgMTMuMiAyN3MtMTIuMiAxOC44LTIzLjQgMTguOEw4OCAyNTZjLTQuNCAwLTggMy42LTggOHMzLjYgOCA4IDhsLjIgMCA5NS44IDBjMTMuMyAwIDI0IDEwLjcgMjQgMjRzLTEwLjcgMjQtMjQgMjRMNzIgMzIweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Hands: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M528 143.8c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 37.4c0 10.9-7.3 20.4-17.8 23.2s-21.6-1.8-27-11.2L369.7 52c-2.2-3.8-7.1-5.1-10.9-2.9s-5.1 7.1-2.9 10.9c0 0 0 0 0 .1l48 83.1c6.2 10.7 3.2 24.3-6.7 31.4c-15.1-14.3-32.3-26.5-51.5-36.1L314.3 84l-8-13.9c0 0 0 0 0-.1l-8-13.8c-2.2-3.8-7.1-5.1-10.9-2.9s-5.1 7.1-2.9 10.9l8 13.9 8 13.9c0 0 0 0 0 .1l20.2 35-53-23.5c-22.8-10.1-47.6-9.8-69-1c4.1-12.6 12.8-23.9 25.2-31c3.8-2.2 7.7-3.9 11.7-5.1c-2.3-21.4 7.8-43.2 27.7-54.6s43.8-9.4 61.1 3.3c3.1-2.9 6.5-5.4 10.3-7.6C361.6-8 395.8 1.2 411.3 28l46.9 81.2c11.4-17.7 31.3-29.4 53.9-29.4c35.3 0 64 28.7 64 64l0 84.6c0 69.4-36.7 133.6-96.5 168.8c-10.4 6.1-21 11.1-31.9 15.1c8-19.2 13.3-39.9 15.4-61.4c40.5-27.4 65-73.2 65-122.4l0-84.6zm-353.9 13c15.1-32 53.2-45.7 85.2-30.7l56.4 26.5c36 16.9 65.4 43.7 85.7 76.1c19.6 29.4 30.7 64.4 30.7 101.2c0 1 0 2 0 3c0 1 0 2.1 0 3.1c0 1.2-.1 2.3-.2 3.4c-5 96.1-84.5 172.6-181.8 172.6L120 512c-30.9 0-56-25.1-56-56c0-4.4 .5-8.6 1.5-12.7C45.8 434.6 32 414.9 32 392c0-4.4 .5-8.6 1.5-12.7C13.8 370.6 0 350.9 0 328s13.8-42.6 33.5-51.3c-.9-4.1-1.5-8.3-1.5-12.7c0-30.9 25.1-56 56-56l84.7 0c-6.4-16-6.5-34.5 1.4-51.3zM72 320l-.2 0L56 320c-4.4 0-8 3.6-8 8s3.6 8 8 8l32 0 .2 0 95.8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-96.1 0c-4.4 0-7.9 3.6-7.9 8c0 4.4 3.6 8 8 8l31.9 0 .2 0 63.9 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64.1 0c-4.4 .1-7.9 3.6-7.9 8c0 4.4 3.6 8 8 8l129.9 0c72.3 0 131.3-57.3 134-128.9c0-.4 0-.9 .1-1.3l0-.5 0-.6 0-.3c0-.8 0-1.7 0-2.5c0-27.2-8.2-53.1-22.8-74.8c-.2-.2-.3-.5-.5-.7c-15.5-24.9-38-45.4-65.5-58.4l-56.4-26.5c-8-3.8-17.5-.3-21.3 7.7s-.3 17.5 7.7 21.3l25.1 11.8c10.2 4.8 15.7 16 13.2 27s-12.2 18.8-23.4 18.8L88 256c-4.4 0-8 3.6-8 8s3.6 8 8 8l.2 0 95.8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L72 320z" />
    </Icon>
);

export default Hands;
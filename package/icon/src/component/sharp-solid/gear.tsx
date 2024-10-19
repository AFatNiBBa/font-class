
import { Icon } from "../../index";

/**
 * A component that renders the `gear` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gear?s=sharp-solid gear}
 * @preview ![gear](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjAwIDBMMzEyIDBsMTcuMiA3OC40YzE1LjggNi41IDMwLjYgMTUuMSA0NCAyNS40bDc2LjUtMjQuNCA1NiA5Ny01OS40IDU0LjFjMS4xIDguMyAxLjcgMTYuOCAxLjcgMjUuNHMtLjYgMTcuMS0xLjcgMjUuNGw1OS40IDU0LjEtNTYgOTctNzYuNS0yNC40Yy0xMy40IDEwLjMtMjguMiAxOC45LTQ0IDI1LjRMMzEyIDUxMmwtMTEyIDAtMTcuMi03OC40Yy0xNS44LTYuNS0zMC42LTE1LjEtNDQtMjUuNEw2Mi4zIDQzMi41bC01Ni05NyA1OS40LTU0LjFDNjQuNiAyNzMuMSA2NCAyNjQuNiA2NCAyNTZzLjYtMTcuMSAxLjctMjUuNEw2LjMgMTc2LjVsNTYtOTcgNzYuNSAyNC40YzEzLjQtMTAuMyAyOC4yLTE4LjkgNDQtMjUuNEwyMDAgMHptNTYgMzM2YTgwIDgwIDAgMSAwIDAtMTYwIDgwIDgwIDAgMSAwIDAgMTYweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Gear: typeof Icon = x => (
    <Icon {...x}>
        <path d="M200 0L312 0l17.2 78.4c15.8 6.5 30.6 15.1 44 25.4l76.5-24.4 56 97-59.4 54.1c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l59.4 54.1-56 97-76.5-24.4c-13.4 10.3-28.2 18.9-44 25.4L312 512l-112 0-17.2-78.4c-15.8-6.5-30.6-15.1-44-25.4L62.3 432.5l-56-97 59.4-54.1C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L6.3 176.5l56-97 76.5 24.4c13.4-10.3 28.2-18.9 44-25.4L200 0zm56 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
    </Icon>
);

export default Gear;
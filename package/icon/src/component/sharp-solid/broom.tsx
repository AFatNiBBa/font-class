
import { Icon } from "../../index";

/**
 * A component that renders the `broom` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/broom?s=sharp-solid broom}
 * @preview ![broom](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDE2IDI4OGwtNDAtNDBMNTc2IDQ4IDUyOCAwIDMyOCAyMDBsLTQwLTQwLTMyIDAgMCA1MS43TDM2NC4zIDMyMGw1MS43IDAgMC0zMnptLTc0LjkgNjUuNEwyMjIuNiAyMzQuOWMtNDIuNy0zLjctODUuMiAxMS43LTExNS44IDQyLjNDNzkuNCAzMDQuNiA2NCAzNDEuOCA2NCAzODAuNWwwIDMuNSA5Ni00OEwwIDQ4MGwwIDMyIDE5NS41IDBjMzguOCAwIDc1LjktMTUuNCAxMDMuNC00Mi44YzMwLjYtMzAuNiA0NS45LTczLjEgNDIuMy0xMTUuOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Broom: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M416 288l-40-40L576 48 528 0 328 200l-40-40-32 0 0 51.7L364.3 320l51.7 0 0-32zm-74.9 65.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3C79.4 304.6 64 341.8 64 380.5l0 3.5 96-48L0 480l0 32 195.5 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" />
    </Icon>
);

export default Broom;
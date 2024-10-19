
import { Icon } from "../../index";

/**
 * A component that renders the `folder` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder?s=regular folder}
 * @preview ![folder](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA5NkMwIDYwLjcgMjguNyAzMiA2NCAzMmwxMzIuMSAwYzE5LjEgMCAzNy40IDcuNiA1MC45IDIxLjFMMjg5LjkgOTYgNDQ4IDk2YzM1LjMgMCA2NCAyOC43IDY0IDY0bDAgMjU2YzAgMzUuMy0yOC43IDY0LTY0IDY0TDY0IDQ4MGMtMzUuMyAwLTY0LTI4LjctNjQtNjRMMCA5NnpNNjQgODBjLTguOCAwLTE2IDcuMi0xNiAxNmwwIDMyMGMwIDguOCA3LjIgMTYgMTYgMTZsMzg0IDBjOC44IDAgMTYtNy4yIDE2LTE2bDAtMjU2YzAtOC44LTcuMi0xNi0xNi0xNmwtMTYxLjQgMGMtMTAuNiAwLTIwLjgtNC4yLTI4LjMtMTEuN0wyMTMuMSA4N2MtNC41LTQuNS0xMC42LTctMTctN0w2NCA4MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Folder: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32l132.1 0c19.1 0 37.4 7.6 50.9 21.1L289.9 96 448 96c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16l-161.4 0c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7L64 80z" />
    </Icon>
);

export default Folder;
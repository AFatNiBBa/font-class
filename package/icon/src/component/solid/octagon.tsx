
import { Icon } from "../../index";

/**
 * A component that renders the `octagon` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon?s=solid octagon}
 * @preview ![octagon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkxLjUgLjFjLTE5LjEgMC0zNy40IDcuNi01MC45IDIxLjFMMjEuMiAxNDAuNkM3LjcgMTU0LjEgLjEgMTcyLjQgLjEgMTkxLjVsMCAxMjljMCAxOS4xIDcuNiAzNy40IDIxLjEgNTAuOUwxNDAuNiA0OTAuOGMxMy41IDEzLjUgMzEuOCAyMS4xIDUwLjkgMjEuMWwxMjkgMGMxOS4xIDAgMzcuNC03LjYgNTAuOS0yMS4xTDQ5MC44IDM3MS40YzEzLjUtMTMuNSAyMS4xLTMxLjggMjEuMS01MC45bDAtMTI5YzAtMTkuMS03LjYtMzcuNC0yMS4xLTUwLjlMMzcxLjQgMjEuMkMzNTcuOSA3LjcgMzM5LjYgLjEgMzIwLjUgLjFsLTEyOSAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Octagon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M191.5 .1c-19.1 0-37.4 7.6-50.9 21.1L21.2 140.6C7.7 154.1 .1 172.4 .1 191.5l0 129c0 19.1 7.6 37.4 21.1 50.9L140.6 490.8c13.5 13.5 31.8 21.1 50.9 21.1l129 0c19.1 0 37.4-7.6 50.9-21.1L490.8 371.4c13.5-13.5 21.1-31.8 21.1-50.9l0-129c0-19.1-7.6-37.4-21.1-50.9L371.4 21.2C357.9 7.7 339.6 .1 320.5 .1l-129 0z" />
    </Icon>
);

export default Octagon;
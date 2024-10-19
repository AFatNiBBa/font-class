
import { Icon } from "../../index";

/**
 * A component that renders the `circle-sort` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-sort?s=sharp-solid circle-sort}
 * @preview ![circle-sort](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNTZhMjU2IDI1NiAwIDEgMSA1MTIgMEEyNTYgMjU2IDAgMSAxIDAgMjU2em0xNDQtNjRsMCAzMiAyMjQgMCAwLTMyTDI1NiA5NiAxNDQgMTkyek0yNTYgNDE2bDExMi05NiAwLTMyLTIyNCAwIDAgMzIgMTEyIDk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleSort: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm144-64l0 32 224 0 0-32L256 96 144 192zM256 416l112-96 0-32-224 0 0 32 112 96z" />
    </Icon>
);

export default CircleSort;
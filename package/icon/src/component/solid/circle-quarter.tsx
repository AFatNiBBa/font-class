
import { Icon } from "../../index";

/**
 * A component that renders the `circle-quarter` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarter?s=solid circle-quarter}
 * @preview ![circle-quarter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMjU2QzE0LjMgMjU2LS4yIDI0MS42IDIgMjI0LjFDMTYuNCAxMDguMiAxMDguMiAxNi40IDIyNC4xIDJDMjQxLjYtLjIgMjU2IDE0LjMgMjU2IDMybDAgMTkyYzAgMTcuNy0xNC4zIDMyLTMyIDMyTDMyIDI1NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleQuarter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256C14.3 256-.2 241.6 2 224.1C16.4 108.2 108.2 16.4 224.1 2C241.6-.2 256 14.3 256 32l0 192c0 17.7-14.3 32-32 32L32 256z" />
    </Icon>
);

export default CircleQuarter;

import { Icon } from "../../index";

/**
 * A component that renders the `cheese` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cheese?s=solid cheese}
 * @preview ![cheese](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTEyIDI0MC4ybDAgMTUuOEwwIDI1NmMwLTIwIDEwLTM4LjcgMjYuNi00OS44TDI3NC45IDQwLjdjOC42LTUuNyAxOC42LTguNyAyOC45LTguN0M0MTguOCAzMiA1MTIgMTI1LjIgNTEyIDI0MC4yem0wIDQ3LjhsMCAxMjhjMCAzNS4zLTI4LjcgNjQtNjQgNjRMNjQgNDgwYy0zNS4zIDAtNjQtMjguNy02NC02NEwwIDI4OGw1MTIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Cheese: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 240.2l0 15.8L0 256c0-20 10-38.7 26.6-49.8L274.9 40.7c8.6-5.7 18.6-8.7 28.9-8.7C418.8 32 512 125.2 512 240.2zm0 47.8l0 128c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 288l512 0z" />
    </Icon>
);

export default Cheese;
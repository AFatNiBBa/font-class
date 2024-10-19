
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen?s=duotone pen}
 * @preview ![pen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMDMgNzlDMzQ2LjMgMTIyLjMgMzg5LjcgMTY1LjYgNDMzIDIwOWMxOS45LTE5LjkgMzkuOC0zOS44IDU5LjctNTkuN2MxMi41LTEyLjUgMTguNy0yOC45IDE4LjctNDUuM3MtNi4yLTMyLjgtMTguNy00NS4zTDQ1My4zIDE5LjNDNDQwLjggNi44IDQyNC40IC42IDQwOCAuNnMtMzIuOCA2LjItNDUuMyAxOC43TDMwMyA3OXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQzMyAyMDlMMzAzIDc5IDUyLjggMzI5LjNjLTYuNiA2LjYtMTEuNSAxNC44LTE0LjEgMjMuOEwxIDQ4MS4yQy0xLjUgNDg5LjcgLjggNDk4LjggNyA1MDVzMTUuMyA4LjUgMjMuNyA2LjFsMTI4LjItMzcuN2M5LTIuNiAxNy4yLTcuNSAyMy44LTE0LjFMNDMzIDIwOXoiLz48L3N2Zz4=|width=32|height=32)
 */
const Pen: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M303 79C346.3 122.3 389.7 165.6 433 209c19.9-19.9 39.8-39.8 59.7-59.7c12.5-12.5 18.7-28.9 18.7-45.3s-6.2-32.8-18.7-45.3L453.3 19.3C440.8 6.8 424.4 .6 408 .6s-32.8 6.2-45.3 18.7L303 79z" />
            <path d="M433 209L303 79 52.8 329.3c-6.6 6.6-11.5 14.8-14.1 23.8L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l128.2-37.7c9-2.6 17.2-7.5 23.8-14.1L433 209z" />
    </Icon>
);

export default Pen;
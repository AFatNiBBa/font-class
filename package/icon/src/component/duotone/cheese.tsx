
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cheese` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cheese?s=duotone cheese}
 * @preview ![cheese](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmMwLTIwIDEwLTM4LjcgMjYuNi00OS44TDI3NC45IDQwLjdjOC42LTUuNyAxOC42LTguNyAyOC45LTguN0M0MTguOCAzMiA1MTIgMTI1LjIgNTEyIDI0MC4ybDAgMTUuOEwwIDI1NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMjU2SDUxMlY0MTZjMCAzNS4zLTI4LjcgNjQtNjQgNjRINjRjLTM1LjMgMC02NC0yOC43LTY0LTY0VjI1NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Cheese: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0-20 10-38.7 26.6-49.8L274.9 40.7c8.6-5.7 18.6-8.7 28.9-8.7C418.8 32 512 125.2 512 240.2l0 15.8L0 256z" />
            <path d="M0 256H512V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256z" />
    </Icon>
);

export default Cheese;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `card-diamond` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-diamond?s=duotone card-diamond}
 * @preview ![card-diamond](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0QzAgMjguNyAyOC43IDAgNjQgMEwzMjAgMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDM4NGMwIDM1LjMtMjguNyA2NC02NCA2NEw2NCA1MTJjLTM1LjMgMC02NC0yOC43LTY0LTY0TDAgNjR6TTgwIDI1NmMwIDQuMSAxLjYgOC4yIDQuNyAxMS4zbDk2IDk2YzMuMSAzLjEgNy4yIDQuNyAxMS4zIDQuN3M4LjItMS42IDExLjMtNC43bDk2LTk2YzMuMS0zLjEgNC43LTcuMiA0LjctMTEuM3MtMS42LTguMi00LjctMTEuM2wtOTYtOTZjLTMuMS0zLjEtNy4yLTQuNy0xMS4zLTQuN3MtOC4yIDEuNi0xMS4zIDQuN2wtOTYgOTZjLTMuMSAzLjEtNC43IDcuMi00LjcgMTEuM3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIwMy4zIDE0OC43Yy02LjItNi4yLTE2LjQtNi4yLTIyLjYgMGwtOTYgOTZjLTYuMiA2LjItNi4yIDE2LjQgMCAyMi42bDk2IDk2YzYuMiA2LjIgMTYuNCA2LjIgMjIuNiAwbDk2LTk2YzYuMi02LjIgNi4yLTE2LjQgMC0yMi42bC05Ni05NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const CardDiamond: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM80 256c0 4.1 1.6 8.2 4.7 11.3l96 96c3.1 3.1 7.2 4.7 11.3 4.7s8.2-1.6 11.3-4.7l96-96c3.1-3.1 4.7-7.2 4.7-11.3s-1.6-8.2-4.7-11.3l-96-96c-3.1-3.1-7.2-4.7-11.3-4.7s-8.2 1.6-11.3 4.7l-96 96c-3.1 3.1-4.7 7.2-4.7 11.3z" />
            <path d="M203.3 148.7c-6.2-6.2-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6l96 96c6.2 6.2 16.4 6.2 22.6 0l96-96c6.2-6.2 6.2-16.4 0-22.6l-96-96z" />
    </Icon>
);

export default CardDiamond;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `martini-glass` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/martini-glass?s=duotone martini-glass}
 * @preview ![martini-glass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyYzAgOC4zIDMuMyAxNi41IDkuNCAyMi42TDIyNCAyNjkuMyAyMjQgNDQ4bC02NCAwYy0xNy43IDAtMzIgMTQuMy0zMiAzMnMxNC4zIDMyIDMyIDMybDk2IDAgOTYgMGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMmwtNjQgMCAwLTE3OC43TDUwMi42IDU0LjZjOS4yLTkuMiAxMS45LTIyLjkgNi45LTM0LjlTNDkyLjkgMCA0ODAgMEwzMiAwQzE5LjEgMCA3LjQgNy44IDIuNCAxOS44Qy44IDIzLjcgMCAyNy45IDAgMzJ6TTEwOS4zIDY0bDI5My41IDBjLTIxLjMgMjEuMy00Mi43IDQyLjctNjQgNjRMMjU2IDIxMC43Yy0yNy42LTI3LjYtNTUuMi01NS4yLTgyLjctODIuN2MtMjEuMy0yMS4zLTQyLjctNDIuNy02NC02NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMzOC43IDEyOEwyNTYgMjEwLjcgMTczLjMgMTI4bDE2NS41IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const MartiniGlass: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32c0 8.3 3.3 16.5 9.4 22.6L224 269.3 224 448l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-178.7L502.6 54.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 0 480 0L32 0C19.1 0 7.4 7.8 2.4 19.8C.8 23.7 0 27.9 0 32zM109.3 64l293.5 0c-21.3 21.3-42.7 42.7-64 64L256 210.7c-27.6-27.6-55.2-55.2-82.7-82.7c-21.3-21.3-42.7-42.7-64-64z" />
            <path d="M338.7 128L256 210.7 173.3 128l165.5 0z" />
    </Icon>
);

export default MartiniGlass;
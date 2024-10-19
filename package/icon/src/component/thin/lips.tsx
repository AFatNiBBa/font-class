
import { Icon } from "../../index";

/**
 * A component that renders the `lips` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lips?s=thin lips}
 * @preview ![lips](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjguMDE3IDIwMS42NjRDNTIxLjU1NCAxMjQuNTk4IDQxOS42MjggNjQgMzc1Ljk3NiA2NEMzNzUuOTc2IDY0IDM0Ni42MTUgNjQgMjg4LjAwMSAxMDlDMjI5LjM4OCA2NCAyMDAuMDI1IDY0IDIwMC4wMjUgNjRDMTU2LjM3NCA2NCA1NC40NDcgMTI0LjU5OCA3Ljk4NCAyMDEuNjY0Qy0xLjM1NCAyMTcuMDc0IC0yLjQ3OSAyMzUuODU5IDQuNDk1IDI1Mi4zOThDMjkuNjk3IDMxMi4yNSAxMDUuODYxIDQ0OCAyNTEuMzI1IDQ0OEgzMjQuNjc1QzQ3MC4xNCA0NDggNTQ2LjMwNCAzMTIuMjUgNTcxLjUwNSAyNTIuMzk4QzU3OC40OCAyMzUuODU5IDU3Ny4zNTUgMjE3LjA3NCA1NjguMDE3IDIwMS42NjRaTTU1Ni43NTkgMjQ2LjE4OEM1MzguNDA2IDI4OS43NzcgNDY3LjQyNyA0MzIgMzI0LjY3NSA0MzJIMjUxLjMyNUMxMDguNTc0IDQzMiAzNy41OTUgMjg5Ljc3NyAxOS4yMzggMjQ2LjE4QzE0LjIyMiAyMzQuMjg1IDE1LjEzIDIyMC43NDIgMjEuNjg3IDIwOS45MjZDNjYuOTM5IDEzNC44NjcgMTY1Ljc5IDgwIDE5OS41OTkgNzkuOTkyQzE5OS44NjEgODAuMDA4IDIyNi4zNTUgODEuODQ0IDI3OC4yNTcgMTIxLjY5MUMyODEuMTMgMTIzLjg5OCAyODQuNTY2IDEyNSAyODguMDAxIDEyNVMyOTQuODcyIDEyMy44OTggMjk3Ljc0NSAxMjEuNjkxQzM0Ny44ODYgODMuMTk1IDM3NC4zMTIgODAuMTc2IDM3Ni4yODQgODBDNDEwLjggODAuMzI4IDUwOS4xOTcgMTM1LjA5IDU1NC4zMzMgMjA5Ljk1N0M1NjAuODcgMjIwLjc0MiA1NjEuNzc5IDIzNC4yODUgNTU2Ljc1OSAyNDYuMTg4Wk0zNzIuMDA1IDE4NEMzNzEuMjU1IDE4NCAzNzAuNTA1IDE4NC4wOTQgMzY5Ljc4NiAxODQuMzEyTDMzOC45MTEgMTkzLjE1NkMzMDYuOTc0IDIwMi4wOTQgMjY4Ljk3NCAyMDIuMDYyIDIzNy4xNjEgMTkzLjE4OEwyMDYuMjI0IDE4NC4zMTJDMjA1LjUwNSAxODQuMDk0IDIwNC43NTUgMTg0IDIwNC4wMDUgMTg0QzExOC44NDkgMTg0IDYyLjQxMSAyMTUuNzE5IDYwLjAzNiAyMTcuMDYyQzU4LjAzNiAyMTguMjE5IDU2LjU5OSAyMjAuMTg3IDU2LjE2MSAyMjIuNDM4QzU1LjY5MyAyMjQuNzE5IDU2LjI1NSAyMjcuMDk0IDU3LjY5MyAyMjguOTA2QzYwLjg0OSAyMzIuOTY5IDEzNi41MzYgMzI4IDI4OC4wMDUgMzI4UzUxNS4xNjEgMjMyLjk2OSA1MTguMzE4IDIyOC45MDZDNTE5Ljc1NSAyMjcuMDk0IDUyMC4zMTggMjI0LjcxOSA1MTkuODQ5IDIyMi40MzhDNTE5LjQxMSAyMjAuMTg4IDUxNy45NzQgMjE4LjIxOSA1MTUuOTc0IDIxNy4wNjJDNTEzLjU5OSAyMTUuNzE5IDQ1Ny4xNjEgMTg0IDM3Mi4wMDUgMTg0Wk0yODguMDA1IDMxMkMxNjguOTQzIDMxMiA5Ny45NzQgMjQ4LjUzMSA3Ni45NDMgMjI2LjVDOTUuNDc0IDIxOCAxNDEuNTM2IDIwMC4yMTkgMjAyLjg4IDIwMEwyMzIuNzg2IDIwOC41OTRDMjY3LjQ3NCAyMTguMjgxIDMwOC40NzQgMjE4LjMxMiAzNDMuMjg2IDIwOC41NjJMMzczLjEzIDIwMEM0MzQuMzE4IDIwMC4yMTkgNDgwLjQ0MyAyMTggNDk5LjA2OCAyMjYuNUM0NzguMDA0IDI0OC41NjIgNDA3LjA2OCAzMTIgMjg4LjAwNSAzMTJaIi8+PC9zdmc+|width=32|height=32)
 */
const Lips: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M568.017 201.664C521.554 124.598 419.628 64 375.976 64C375.976 64 346.615 64 288.001 109C229.388 64 200.025 64 200.025 64C156.374 64 54.447 124.598 7.984 201.664C-1.354 217.074 -2.479 235.859 4.495 252.398C29.697 312.25 105.861 448 251.325 448H324.675C470.14 448 546.304 312.25 571.505 252.398C578.48 235.859 577.355 217.074 568.017 201.664ZM556.759 246.188C538.406 289.777 467.427 432 324.675 432H251.325C108.574 432 37.595 289.777 19.238 246.18C14.222 234.285 15.13 220.742 21.687 209.926C66.939 134.867 165.79 80 199.599 79.992C199.861 80.008 226.355 81.844 278.257 121.691C281.13 123.898 284.566 125 288.001 125S294.872 123.898 297.745 121.691C347.886 83.195 374.312 80.176 376.284 80C410.8 80.328 509.197 135.09 554.333 209.957C560.87 220.742 561.779 234.285 556.759 246.188ZM372.005 184C371.255 184 370.505 184.094 369.786 184.312L338.911 193.156C306.974 202.094 268.974 202.062 237.161 193.188L206.224 184.312C205.505 184.094 204.755 184 204.005 184C118.849 184 62.411 215.719 60.036 217.062C58.036 218.219 56.599 220.187 56.161 222.438C55.693 224.719 56.255 227.094 57.693 228.906C60.849 232.969 136.536 328 288.005 328S515.161 232.969 518.318 228.906C519.755 227.094 520.318 224.719 519.849 222.438C519.411 220.188 517.974 218.219 515.974 217.062C513.599 215.719 457.161 184 372.005 184ZM288.005 312C168.943 312 97.974 248.531 76.943 226.5C95.474 218 141.536 200.219 202.88 200L232.786 208.594C267.474 218.281 308.474 218.312 343.286 208.562L373.13 200C434.318 200.219 480.443 218 499.068 226.5C478.004 248.562 407.068 312 288.005 312Z" />
    </Icon>
);

export default Lips;
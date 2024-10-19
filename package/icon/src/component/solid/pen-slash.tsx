
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `pen-slash` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pen-slash?s=solid pen-slash}
 * @preview ![pen-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05NS4wMzYgMzUyLjk1NUM5Mi44MDIgMzU1LjE4OSA5MS4yOCAzNTguMDMzIDkwLjY1OSAzNjEuMTMxTDY0LjMyIDQ5Mi44NTRDNjIuMDc5IDUwNC4wNDkgNzEuOTUgNTEzLjkyIDgzLjE0NiA1MTEuNjhMMjE0Ljg1NyA0ODUuMzM2QzIxNy45NTIgNDg0LjcxNyAyMjAuNzk2IDQ4My4xOTUgMjIzLjAzIDQ4MC45NjNMMzQwLjQ3IDM2My41MjlMMTk2Ljk0OCAyNTEuMDM5TDk1LjAzNiAzNTIuOTU1Wk01NjEuOTM5IDE0Mi4wODRDNTgwLjY4NyAxMjMuMzE2IDU4MC42ODcgOTIuOTEgNTYxLjkzOSA3NC4xNThMNTAxLjg0NyAxNC4wNjJDNDgzLjA5NyAtNC42ODggNDUyLjY2MSAtNC42ODggNDMzLjkxMyAxNC4wNjJMMzc3LjM4NCA3MC42MTFMNTA1LjM3OCAxOTguNjMzTDU2MS45MzkgMTQyLjA4NFpNNjMwLjgxMiA0NjkuMTAyTDQwOC44NjEgMjk1LjE0M0w0ODIuNzQ5IDIyMS4yNThMMzU0Ljc0OSA5My4yMzJMMjY1LjMzNSAxODIuNjVMMzguODE0IDUuMTA5QzM0LjQwNyAxLjY3MiAyOS4xODkgMCAyNC4wMzIgMEMxNi45MDcgMCA5Ljg0NSAzLjE1NiA1LjEyNiA5LjE4OEMtMy4wNjEgMTkuNjI1IC0xLjI0OSAzNC43MTkgOS4xODkgNDIuODkxTDYwMS4xODcgNTA2Ljg4M0M2MTEuNjg3IDUxNS4wODYgNjI2Ljc0OSA1MTMuMjExIDYzNC44NzQgNTAyLjgwNUM2NDMuMDYyIDQ5Mi4zNjcgNjQxLjI0OSA0NzcuMjczIDYzMC44MTIgNDY5LjEwMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PenSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M95.036 352.955C92.802 355.189 91.28 358.033 90.659 361.131L64.32 492.854C62.079 504.049 71.95 513.92 83.146 511.68L214.857 485.336C217.952 484.717 220.796 483.195 223.03 480.963L340.47 363.529L196.948 251.039L95.036 352.955ZM561.939 142.084C580.687 123.316 580.687 92.91 561.939 74.158L501.847 14.062C483.097 -4.688 452.661 -4.688 433.913 14.062L377.384 70.611L505.378 198.633L561.939 142.084ZM630.812 469.102L408.861 295.143L482.749 221.258L354.749 93.232L265.335 182.65L38.814 5.109C34.407 1.672 29.189 0 24.032 0C16.907 0 9.845 3.156 5.126 9.188C-3.061 19.625 -1.249 34.719 9.189 42.891L601.187 506.883C611.687 515.086 626.749 513.211 634.874 502.805C643.062 492.367 641.249 477.273 630.812 469.102Z" />
        </Icon>
    </>
}

import { Icon } from "../../index";

/**
 * A component that renders the `book-quran` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/book-quran?s=thin book-quran}
 * @preview ![book-quran](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODIuMTg4IDI2OS43MDNDMjc1LjU2MiAyNzEuMjUgMjY5LjU5NCAyNzIgMjY0IDI3MkMyMTkuODc1IDI3MiAxODQgMjM2LjEwOSAxODQgMTkyUzIxOS44NzUgMTEyIDI2NCAxMTJDMjY5LjYyNSAxMTIgMjc1LjU5NCAxMTIuNzY2IDI4Mi4wNjIgMTE0LjI2NkMyODkuNjg3IDExNi4zMTIgMjk3LjUzMSAxMTIuMjY2IDMwMC41NjIgMTA1LjE1NkMzMDMuNjg3IDk4LjA2MiAzMDEuMjgxIDg5Ljc4MSAyOTQuODEyIDg1LjQzOEMyNzMuNzE5IDcxLjQwNiAyNDkuMjUgNjQgMjI0IDY0QzE1My40MDYgNjQgOTYgMTIxLjQyMiA5NiAxOTJTMTUzLjQwNiAzMjAgMjI0IDMyMEMyNDkuMjUgMzIwIDI3My43MTkgMzEyLjU5NCAyOTQuODQ0IDI5OC41NDdDMzAxLjI4MSAyOTQuMjE5IDMwMy42ODggMjg1LjkzNyAzMDAuNTk0IDI3OC44OTFDMjk3LjUgMjcxLjczNCAyODkuNTk0IDI2Ny43ODEgMjgyLjE4OCAyNjkuNzAzWk0yMjQgMzA0QzE2Mi4yNSAzMDQgMTEyIDI1My43NSAxMTIgMTkyUzE2Mi4yNSA4MCAyMjQgODBDMjQ2LjA5NCA4MCAyNjcuNSA4Ni40ODQgMjg1LjkwNiA5OC43MzRDMjc4LjAzMSA5Ni44OTEgMjcwLjg3NSA5NiAyNjQgOTZDMjExLjA2MiA5NiAxNjggMTM5LjA2MiAxNjggMTkyUzIxMS4wNjIgMjg4IDI2NCAyODhDMjcwLjg3NSAyODggMjc4LjAzMSAyODcuMTA5IDI4NS45MDYgMjg1LjI2NkgyODUuODQ0TDI4NS45MzggMjg1LjI1QzI2Ny41IDI5Ny41MTYgMjQ2LjA5NCAzMDQgMjI0IDMwNFpNMzMzLjk2OSAxNjIuNDY5TDMwOS40NjkgMTU4LjkzN0wyOTguNzE5IDEzNy4zNzVDMjk1LjM0NCAxMjguNzUgMjgwLjM3NSAxMjkuMzc1IDI3Ny41NjIgMTM2Ljc1TDI2Ni41MzEgMTU4LjkzOEwyNDIuMDMxIDE2Mi40NjlDMjM3LjUzMSAxNjMuMTI1IDIzMy45MDYgMTY2LjIxOSAyMzIuNTMxIDE3MC41NDdDMjMxLjE4NyAxNzQuODQ0IDIzMi4zNzUgMTc5LjQyMiAyMzUuNTYyIDE4Mi40MDZMMjUzLjE4NyAxOTkuNjcyTDI0OS4wNjIgMjIzLjk4NEMyNDguNDM4IDIyNy40MDYgMjQ5LjM3NSAyMzAuODkxIDI1MS42MjUgMjMzLjU2M0MyNTMuODc1IDIzNi4yODEgMjU3LjE4NyAyMzcuODI4IDI2MC42NTYgMjM3LjgyOEwyNjQuMzQ0IDIzNy40MDZMMjg4IDIyNC45NjlMMzEwLjE4OCAyMzYuNjQxTDMxMy41MzEgMjM3LjgyOEgzMTUuMzQ0QzMxOC44MTIgMjM3LjgyOCAzMjIuMTI1IDIzNi4yODEgMzI0LjM3NSAyMzMuNTYyQzMyNi42MjUgMjMwLjg5MSAzMjcuNTYzIDIyNy40MDYgMzI2LjkzOCAyMjQuMDQ3TDMyMi44MTMgMTk5LjY3MkwzNDAuMzEzIDE4Mi41MTZDMzQzLjYyNSAxNzkuNDIyIDM0NC44MTMgMTc0Ljg0NCAzNDMuNDY5IDE3MC41NDdDMzQyLjA5NCAxNjYuMjE5IDMzOC40NjkgMTYzLjEyNSAzMzMuOTY5IDE2Mi40NjlaTTMwNS42MjUgMTk0LjEwOUwzMDkuNzUgMjE4LjMyOEwyODggMjA2LjkwNkwyNjYuMjUgMjE4LjMyOEwyNzAuMzc1IDE5NC4xMDlMMjUyLjk2OSAxNzcuMDYzTDI3Ny4wOTQgMTczLjU2M0wyODggMTUxLjY1NkwyOTguOTA2IDE3My41NjJMMzIzLjAzMSAxNzcuMDYyTDMwNS42MjUgMTk0LjEwOVpNMzg0IDBIMzJDMTQuMzI2IDAgMCAxNC4zMjggMCAzMlYzODRDMCA0MDEuNjcyIDE0LjMyNiA0MTYgMzIgNDE2VjQ5NS45ODRIOC4wMDZDMy41ODQgNDk1Ljk4NCAwIDQ5OS41NyAwIDUwMy45OTJDMCA1MDguNDEgMy41ODQgNTExLjk5NiA4LjAwNiA1MTEuOTkyTDM5Mi4wMDIgNTExLjk4NEM0MjIuOTMgNTExLjk4NCA0NDggNDg2LjkxIDQ0OCA0NTUuOTg0VjY0QzQ0OCAyOC42NTIgNDE5LjM0NiAwIDM4NCAwWk0zOTIgNDk1Ljk4NEg0OFY0MTZMMzkwLjIzIDQxNS45ODRDNDExLjExMSA0MTUuOTg0IDQyOS43ODcgNDMxLjIxOSA0MzEuODA3IDQ1MkM0MzQuMTIzIDQ3NS44NDQgNDE1LjM3NyA0OTUuOTg0IDM5MiA0OTUuOTg0Wk00MzIgNDE2LjkyMkM0MjEuODI0IDQwNi41MDQgNDA3LjY3NiAzOTkuOTg4IDM5MiAzOTkuOTg4TDMyIDQwMEMyMy4xNzggNDAwIDE2IDM5Mi44MjQgMTYgMzg0VjMyQzE2IDIzLjE2NCAyMy4xNjQgMTYgMzIgMTZIMzg0QzQxMC40NjcgMTYgNDMyIDM3LjUzMSA0MzIgNjRWNDE2LjkyMloiLz48L3N2Zz4=|width=32|height=32)
 */
const BookQuran: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M282.188 269.703C275.562 271.25 269.594 272 264 272C219.875 272 184 236.109 184 192S219.875 112 264 112C269.625 112 275.594 112.766 282.062 114.266C289.687 116.312 297.531 112.266 300.562 105.156C303.687 98.062 301.281 89.781 294.812 85.438C273.719 71.406 249.25 64 224 64C153.406 64 96 121.422 96 192S153.406 320 224 320C249.25 320 273.719 312.594 294.844 298.547C301.281 294.219 303.688 285.937 300.594 278.891C297.5 271.734 289.594 267.781 282.188 269.703ZM224 304C162.25 304 112 253.75 112 192S162.25 80 224 80C246.094 80 267.5 86.484 285.906 98.734C278.031 96.891 270.875 96 264 96C211.062 96 168 139.062 168 192S211.062 288 264 288C270.875 288 278.031 287.109 285.906 285.266H285.844L285.938 285.25C267.5 297.516 246.094 304 224 304ZM333.969 162.469L309.469 158.937L298.719 137.375C295.344 128.75 280.375 129.375 277.562 136.75L266.531 158.938L242.031 162.469C237.531 163.125 233.906 166.219 232.531 170.547C231.187 174.844 232.375 179.422 235.562 182.406L253.187 199.672L249.062 223.984C248.438 227.406 249.375 230.891 251.625 233.563C253.875 236.281 257.187 237.828 260.656 237.828L264.344 237.406L288 224.969L310.188 236.641L313.531 237.828H315.344C318.812 237.828 322.125 236.281 324.375 233.562C326.625 230.891 327.563 227.406 326.938 224.047L322.813 199.672L340.313 182.516C343.625 179.422 344.813 174.844 343.469 170.547C342.094 166.219 338.469 163.125 333.969 162.469ZM305.625 194.109L309.75 218.328L288 206.906L266.25 218.328L270.375 194.109L252.969 177.063L277.094 173.563L288 151.656L298.906 173.562L323.031 177.062L305.625 194.109ZM384 0H32C14.326 0 0 14.328 0 32V384C0 401.672 14.326 416 32 416V495.984H8.006C3.584 495.984 0 499.57 0 503.992C0 508.41 3.584 511.996 8.006 511.992L392.002 511.984C422.93 511.984 448 486.91 448 455.984V64C448 28.652 419.346 0 384 0ZM392 495.984H48V416L390.23 415.984C411.111 415.984 429.787 431.219 431.807 452C434.123 475.844 415.377 495.984 392 495.984ZM432 416.922C421.824 406.504 407.676 399.988 392 399.988L32 400C23.178 400 16 392.824 16 384V32C16 23.164 23.164 16 32 16H384C410.467 16 432 37.531 432 64V416.922Z" />
    </Icon>
);

export default BookQuran;
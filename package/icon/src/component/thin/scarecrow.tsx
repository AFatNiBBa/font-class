
import { Icon } from "../../index";

/**
 * A component that renders the `scarecrow` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scarecrow?s=thin scarecrow}
 * @preview ![scarecrow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDUuNzY2IDE4Ni4yNUw0MTkuMjY2IDE2MEw0MzcuNjQxIDE0MS43NUM0NDIuNjQxIDEzNi43NSA0MzkuMTQxIDEyOCA0MzEuODkxIDEyOEgzMTQuMTIxQzMxNy42OTUgMTE3Ljk0NSAzMjAgMTA3LjI4MSAzMjAgOTZDMzIwIDQyLjk4IDI3Ny4wMiAwIDIyNCAwUzEyOCA0Mi45OCAxMjggOTZDMTI4IDEwNy4yODEgMTMwLjMwNSAxMTcuOTQ1IDEzMy44NzkgMTI4SDE2LjAwMkM4Ljg3NSAxMjggNS4yNSAxMzYuNjI1IDEwLjI1IDE0MS43NUwyOC43NTIgMTYwTDIuMjUgMTg2LjI1Qy0wLjc1IDE4OS4zNzUgLTAuNzUgMTk0LjUgMi4yNSAxOTcuNjI1TDI4Ljc1MiAyMjRMMTAuMzc1IDI0Mi4yNUM1LjM3NSAyNDcuMjUgOC44NzUgMjU2IDE2LjEyNyAyNTZIMTIyLjI1NEw5Ni4yNTQgMzk3LjI1Qzk0LjU2MSA0MDcuNjA5IDEwMi42MzMgNDE1Ljk4NiAxMTEuOTI4IDQxNS45ODZDMTE0LjI5NyA0MTUuOTg2IDExNi43NDQgNDE1LjQ0MyAxMTkuMTI5IDQxNC4yNUwxNTEuNzU2IDM5MEMxNTQuNTggMzg3Ljg4MyAxNTcuOTIyIDM4Ni44MDEgMTYxLjI4NSAzODYuODAxQzE2My44NzkgMzg2LjgwMSAxNjYuNDg2IDM4Ny40NDMgMTY4Ljg4MSAzODguNzVMMjE2Ljc1OCA0MTQuMjVDMjE5LjAwOCA0MTUuNDM4IDIyMS40NzcgNDE2LjAzMSAyMjMuOTQ1IDQxNi4wMzFTMjI4Ljg4MyA0MTUuNDM4IDIzMS4xMzMgNDE0LjI1TDI3OS4wMSAzODguNzVDMjgxLjQwNCAzODcuNDQzIDI4NC4wMTIgMzg2LjgwMSAyODYuNjA1IDM4Ni44MDFDMjg5Ljk3MSAzODYuODAxIDI5My4zMTIgMzg3Ljg4MyAyOTYuMTM1IDM5MEwzMjguNzYyIDQxNC4yNUMzMzEuMTQ4IDQxNS40NDEgMzMzLjYwMiA0MTUuOTg2IDMzNS45NzcgNDE1Ljk4NkMzNDUuMzA1IDQxNS45ODYgMzUzLjQ1NSA0MDcuNjExIDM1MS43NjIgMzk3LjI1TDMyNS44ODcgMjU2SDQzMi4wMTZDNDM5LjE0MSAyNTYgNDQyLjc2NiAyNDcuMzc1IDQzNy43NjYgMjQyLjI1TDQxOS4yNjYgMjI0TDQ0NS42NDEgMTk3Ljc1QzQ0OC43NjYgMTk0LjUgNDQ4Ljc2NiAxODkuNSA0NDUuNzY2IDE4Ni4yNVpNMjI0IDE2QzI2OC4xMTMgMTYgMzA0IDUxLjg4NyAzMDQgOTZDMzA0IDE0MC4xMTEgMjY4LjExMyAxNzYgMjI0IDE3NkMxNzkuODg5IDE3NiAxNDQgMTQwLjExMSAxNDQgOTZDMTQ0IDUxLjg4NyAxNzkuODg5IDE2IDIyNCAxNlpNNDA3Ljk4IDIxMi42NThDNDA0Ljk1MyAyMTUuNjcgNDAzLjI1OCAyMTkuNzY2IDQwMy4yNjYgMjI0LjAzNUM0MDMuMjc1IDIyOC4zMDUgNDA0Ljk5IDIzMi4zOTMgNDA4LjAyOSAyMzUuMzkxTDQxMi43MDMgMjQwSDMyNS44ODdDMzIxLjEzOSAyNDAgMzE2LjYzNyAyNDIuMTA5IDMxMy41OTYgMjQ1Ljc1NkMzMTAuNTU3IDI0OS40MDIgMzA5LjI5MyAyNTQuMjEzIDMxMC4xNDggMjU4Ljg4M0wzMzUuODU0IDM5OS41ODRMMzA1LjczNiAzNzcuMjAxQzMwMC4xNTQgMzczLjAxNCAyOTMuNTM5IDM3MC44MDEgMjg2LjYwNSAzNzAuODAxQzI4MS4zMDUgMzcwLjgwMSAyNzYuMDI5IDM3Mi4xNSAyNzEuNDg4IDM3NC42MjdMMjI0LjI3OSA0MDAuMTI3TDE3Ni41NDMgMzc0LjcwM0MxNzEuODYzIDM3Mi4xNSAxNjYuNTg2IDM3MC44MDEgMTYxLjI4NSAzNzAuODAxQzE1NC4zNTQgMzcwLjgwMSAxNDcuNzM4IDM3My4wMTQgMTQyLjIxMyAzNzcuMTU4TDExMi4xMDIgMzk5LjUzN0wxMzcuOTkgMjU4Ljg5NkMxMzguODUgMjU0LjIyNSAxMzcuNTkgMjQ5LjQxMiAxMzQuNTQ5IDI0NS43NjJDMTMxLjUxIDI0Mi4xMTEgMTI3LjAwNCAyNDAgMTIyLjI1NCAyNDBIMzUuMzQ4TDQwLjAyNyAyMzUuMzU0QzQzLjA0OSAyMzIuMzUyIDQ0Ljc1IDIyOC4yNjggNDQuNzUyIDIyNC4wMDhTNDMuMDU5IDIxNS42NjQgNDAuMDM5IDIxMi42NThMMTkuMjI5IDE5MS45NTNMNDAuMDEyIDE3MS4zNjdDNDMuMDQ5IDE2OC4zNTcgNDQuNzU2IDE2NC4yNiA0NC43NTIgMTU5Ljk4MkM0NC43NDggMTU1LjcwNyA0My4wMzMgMTUxLjYxMSAzOS45ODggMTQ4LjYwOUwzNS4zMTQgMTQ0SDE0MS4zMTRMMTQxLjMwOSAxNDMuOTg4QzE1Ny45MzggMTcyLjU2OCAxODguNTUzIDE5MiAyMjQgMTkyUzI5MC4wNjIgMTcyLjU2OCAzMDYuNjkxIDE0My45ODhMMzA2LjY4NiAxNDRINDEyLjY3TDQwNy45OSAxNDguNjQ2QzQwNC45NjUgMTUxLjY1NCA0MDMuMjY0IDE1NS43NDQgNDAzLjI2NiAxNjAuMDFDNDAzLjI3IDE2NC4yNzcgNDA0Ljk3NSAxNjguMzY1IDQwOC4wMDYgMTcxLjM2N0w0MjguNzk1IDE5MS45NDFMNDA3Ljk4IDIxMi42NThaTTE5MiA5NkMyMDAuODM4IDk2IDIwOCA4OC44MzYgMjA4IDgwQzIwOCA3MS4xNjIgMjAwLjgzOCA2NCAxOTIgNjRDMTgzLjE2NCA2NCAxNzYgNzEuMTYyIDE3NiA4MEMxNzYgODguODM2IDE4My4xNjQgOTYgMTkyIDk2Wk0yNTYgMTEyQzI2NC44MzggMTEyIDI3MiAxMDQuODM2IDI3MiA5NkMyNzIgODcuMTYyIDI2NC44MzggODAgMjU2IDgwQzI0Ny4xNjQgODAgMjQwIDg3LjE2MiAyNDAgOTZDMjQwIDEwNC44MzYgMjQ3LjE2NCAxMTIgMjU2IDExMlpNMjI0IDQzMkMyMTkuNTc4IDQzMiAyMTYgNDM1LjU5NCAyMTYgNDQwVjUwNEMyMTYgNTA4LjQwNiAyMTkuNTc4IDUxMiAyMjQgNTEyUzIzMiA1MDguNDA2IDIzMiA1MDRWNDQwQzIzMiA0MzUuNTk0IDIyOC40MjIgNDMyIDIyNCA0MzJaIi8+PC9zdmc+|width=32|height=32)
 */
const Scarecrow: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M445.766 186.25L419.266 160L437.641 141.75C442.641 136.75 439.141 128 431.891 128H314.121C317.695 117.945 320 107.281 320 96C320 42.98 277.02 0 224 0S128 42.98 128 96C128 107.281 130.305 117.945 133.879 128H16.002C8.875 128 5.25 136.625 10.25 141.75L28.752 160L2.25 186.25C-0.75 189.375 -0.75 194.5 2.25 197.625L28.752 224L10.375 242.25C5.375 247.25 8.875 256 16.127 256H122.254L96.254 397.25C94.561 407.609 102.633 415.986 111.928 415.986C114.297 415.986 116.744 415.443 119.129 414.25L151.756 390C154.58 387.883 157.922 386.801 161.285 386.801C163.879 386.801 166.486 387.443 168.881 388.75L216.758 414.25C219.008 415.438 221.477 416.031 223.945 416.031S228.883 415.438 231.133 414.25L279.01 388.75C281.404 387.443 284.012 386.801 286.605 386.801C289.971 386.801 293.312 387.883 296.135 390L328.762 414.25C331.148 415.441 333.602 415.986 335.977 415.986C345.305 415.986 353.455 407.611 351.762 397.25L325.887 256H432.016C439.141 256 442.766 247.375 437.766 242.25L419.266 224L445.641 197.75C448.766 194.5 448.766 189.5 445.766 186.25ZM224 16C268.113 16 304 51.887 304 96C304 140.111 268.113 176 224 176C179.889 176 144 140.111 144 96C144 51.887 179.889 16 224 16ZM407.98 212.658C404.953 215.67 403.258 219.766 403.266 224.035C403.275 228.305 404.99 232.393 408.029 235.391L412.703 240H325.887C321.139 240 316.637 242.109 313.596 245.756C310.557 249.402 309.293 254.213 310.148 258.883L335.854 399.584L305.736 377.201C300.154 373.014 293.539 370.801 286.605 370.801C281.305 370.801 276.029 372.15 271.488 374.627L224.279 400.127L176.543 374.703C171.863 372.15 166.586 370.801 161.285 370.801C154.354 370.801 147.738 373.014 142.213 377.158L112.102 399.537L137.99 258.896C138.85 254.225 137.59 249.412 134.549 245.762C131.51 242.111 127.004 240 122.254 240H35.348L40.027 235.354C43.049 232.352 44.75 228.268 44.752 224.008S43.059 215.664 40.039 212.658L19.229 191.953L40.012 171.367C43.049 168.357 44.756 164.26 44.752 159.982C44.748 155.707 43.033 151.611 39.988 148.609L35.314 144H141.314L141.309 143.988C157.938 172.568 188.553 192 224 192S290.062 172.568 306.691 143.988L306.686 144H412.67L407.99 148.646C404.965 151.654 403.264 155.744 403.266 160.01C403.27 164.277 404.975 168.365 408.006 171.367L428.795 191.941L407.98 212.658ZM192 96C200.838 96 208 88.836 208 80C208 71.162 200.838 64 192 64C183.164 64 176 71.162 176 80C176 88.836 183.164 96 192 96ZM256 112C264.838 112 272 104.836 272 96C272 87.162 264.838 80 256 80C247.164 80 240 87.162 240 96C240 104.836 247.164 112 256 112ZM224 432C219.578 432 216 435.594 216 440V504C216 508.406 219.578 512 224 512S232 508.406 232 504V440C232 435.594 228.422 432 224 432Z" />
    </Icon>
);

export default Scarecrow;
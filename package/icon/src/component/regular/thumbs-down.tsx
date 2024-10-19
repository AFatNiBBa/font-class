
import { Icon } from "../../index";

/**
 * A component that renders the `thumbs-down` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/thumbs-down?s=regular thumbs-down}
 * @preview ![thumbs-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjggMjg4LjA2VjY0LjEzMUMxMjggNDYuNDYyIDExMy42NzQgMzIuMTQxIDk2IDMyLjE0MUgzMkMxNC4zMjYgMzIuMTQxIDAgNDYuNDYyIDAgNjQuMTMxVjI4OC4wNkMwIDMwNS43MjcgMTQuMzI2IDMyMC4wNSAzMiAzMjAuMDVIOTZDMTEzLjY3NCAzMjAuMDUgMTI4IDMwNS43MjcgMTI4IDI4OC4wNlpNNDgxLjQ4NCAyMjkuMDYzQzQ4Mi43MTkgMjIzLjk3MSA0ODMuMzU5IDIxOC43MzggNDgzLjM1OSAyMTMuNDI4QzQ4My4zNTkgMTkwLjczMiA0NzEuOTIyIDE3MC4zIDQ1NC4wNzggMTU4LjE0OEM0NTQuNSAxNTUuMTMzIDQ1NC43MTkgMTUyLjA3MiA0NTQuNzE5IDE0OS4wMjZDNDU0LjcxOSAxMjYuNzA1IDQ0My42NTYgMTA2LjQzIDQyNS44OTEgOTQuMTk5QzQyMy40NTMgNTkuNDkyIDM5NC40MjIgMzIgMzU5LjA5NCAzMkgzMDYuNTYyQzI3MC42MjUgMzIgMjM1LjAxNiA0My44NzEgMjA2LjI2NiA2NS40MTJMMTY5LjU5NCA5Mi45MzRDMTYzLjMwOSA5Ny42NDQgMTU5Ljk5NiAxMDQuODQzIDE1OS45OTYgMTEyLjEzQzE1OS45OTYgMTI0Ljg5MSAxNzAuMjg5IDEzNi4xMDggMTg0LjAyNCAxMzYuMTA4QzE4OS4wMzcgMTM2LjEwOCAxOTQuMDkxIDEzNC41NDIgMTk4LjQwNiAxMzEuMjk3TDIzNS4wNjMgMTAzLjc5QzI1NS41NDcgODguNDUxIDI4MC45MzggNzkuOTg1IDMwNi41NjMgNzkuOTg1SDM1OS4wOTRDMzY5LjU0NyA3OS45ODUgMzc4LjA2MyA4OC40ODIgMzc4LjA2MyA5OC45MzJDMzc4LjA2MyAxMDIuNDMyIDM3Ni45NTMgMTAzLjg3MyAzNzYuOTUzIDEwOC4zODhDMzc2Ljk1MyAxMzUuMzYgNDA2LjcxOSAxMjYuMjk2IDQwNi43MTkgMTQ5LjAyNkM0MDYuNzE5IDE1OC4yOCA0MDAuMzI3IDE1OS45ODUgNDAwLjMyNyAxNzEuMjhDNDAwLjMyNyAxODUuMjUgNDExLjE3MyAxOTMuMjM0IDQxOS45MDYgMTk0Ljg3MUM0MjguODU5IDE5Ni41NDIgNDM1LjM1OSAyMDQuMzUyIDQzNS4zNTkgMjEzLjQyOEM0MzUuMzU5IDIyNi40NjcgNDIzLjk3MSAyMjYuNzk2IDQyMy45NzEgMjQyLjMzNEM0MjMuOTcxIDI1NC44NzIgNDMzLjY3NCAyNjUuNDExIDQ0Ni4zMjggMjY2LjI3QzQ1Ni4yMzQgMjY2Ljk1OCA0NjQgMjc1LjE3NCA0NjQgMjg0Ljk4M0M0NjQgMjk1LjQxNyA0NTUuNDg0IDMwMy45MTUgNDQ1LjAzMSAzMDMuOTE1SDMwNy4zOTFDMjk0Ljk1MSAzMDMuOTE1IDI4My4zODcgMzEzLjkzNCAyODMuMzg3IDMyNy45MTRDMjgzLjM4NyAzMzEuOTUyIDI4NC40MDggMzM1Ljk5MiAyODYuNDUzIDMzOS42MzhDMzA0LjQwNiAzNzEuNjc1IDMxMiA0MDMuODIxIDMxMiA0MTEuMjI1QzMxMiA0MTkuMjY5IDMwNi4wMTYgNDMyLjAxNSAyODkuOTM4IDQzMi4wMTVDMjc3LjQwNiA0MzIuMDE1IDI3NS42NzIgNDMxLjEwOSAyNjUgNDAzLjk0NkMyNDAuMjQ4IDM0MS4wMzggMjAzLjI1OSAzMDQuMDQ0IDE4NC4wMTcgMzA0LjA0NEMxNzAuMjIxIDMwNC4wNDQgMTYwIDMxNS4zMTcgMTYwIDMyOC4wMzFDMTYwIDMzNS4wNzIgMTYzLjA4NCAzNDIuMDUxIDE2OS4wMTYgMzQ2Ljc5MkMyMzguMDkxIDQwMi4wMTUgMjExLjM5MiA0ODAgMjg5LjkzOCA0ODBDMzMzLjc5NyA0ODAgMzYwIDQ0NS4wMjcgMzYwIDQxMS4yMjVDMzYwIDM5OC41MjYgMzU0LjY3MiAzNzYuMDE3IDM0NS4xNzIgMzUxLjlINDQ1LjAzMUM0ODEuOTUzIDM1MS45IDUxMiAzMjEuODc4IDUxMiAyODQuOTgzQzUxMiAyNjEuNzU2IDQ5OS44OTEgMjQxLjA0NCA0ODEuNDg0IDIyOS4wNjNaIi8+PC9zdmc+|width=32|height=32)
 */
const ThumbsDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 288.06V64.131C128 46.462 113.674 32.141 96 32.141H32C14.326 32.141 0 46.462 0 64.131V288.06C0 305.727 14.326 320.05 32 320.05H96C113.674 320.05 128 305.727 128 288.06ZM481.484 229.063C482.719 223.971 483.359 218.738 483.359 213.428C483.359 190.732 471.922 170.3 454.078 158.148C454.5 155.133 454.719 152.072 454.719 149.026C454.719 126.705 443.656 106.43 425.891 94.199C423.453 59.492 394.422 32 359.094 32H306.562C270.625 32 235.016 43.871 206.266 65.412L169.594 92.934C163.309 97.644 159.996 104.843 159.996 112.13C159.996 124.891 170.289 136.108 184.024 136.108C189.037 136.108 194.091 134.542 198.406 131.297L235.063 103.79C255.547 88.451 280.938 79.985 306.563 79.985H359.094C369.547 79.985 378.063 88.482 378.063 98.932C378.063 102.432 376.953 103.873 376.953 108.388C376.953 135.36 406.719 126.296 406.719 149.026C406.719 158.28 400.327 159.985 400.327 171.28C400.327 185.25 411.173 193.234 419.906 194.871C428.859 196.542 435.359 204.352 435.359 213.428C435.359 226.467 423.971 226.796 423.971 242.334C423.971 254.872 433.674 265.411 446.328 266.27C456.234 266.958 464 275.174 464 284.983C464 295.417 455.484 303.915 445.031 303.915H307.391C294.951 303.915 283.387 313.934 283.387 327.914C283.387 331.952 284.408 335.992 286.453 339.638C304.406 371.675 312 403.821 312 411.225C312 419.269 306.016 432.015 289.938 432.015C277.406 432.015 275.672 431.109 265 403.946C240.248 341.038 203.259 304.044 184.017 304.044C170.221 304.044 160 315.317 160 328.031C160 335.072 163.084 342.051 169.016 346.792C238.091 402.015 211.392 480 289.938 480C333.797 480 360 445.027 360 411.225C360 398.526 354.672 376.017 345.172 351.9H445.031C481.953 351.9 512 321.878 512 284.983C512 261.756 499.891 241.044 481.484 229.063Z" />
    </Icon>
);

export default ThumbsDown;
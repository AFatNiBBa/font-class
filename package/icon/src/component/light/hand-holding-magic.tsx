
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hand-holding-magic` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-magic?s=light hand-holding-magic}
 * @preview ![hand-holding-magic](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NTguMjI1IDMzMy42MDdDNTQ4LjcyNSAzMjQuOTg4IDUzNi4yMjUgMzIwLjI0IDUyMy4xMDIgMzIwLjI0QzUxMC42MDIgMzIwLjI0IDQ5OC4yMjcgMzI0LjQ4OCA0ODguNDc5IDMzMi4zNTdMNDI3LjAyNSAzODEuNTY2QzQyNS4wOTggMzgzLjExMSA0MjIuNzAxIDM4My45NTEgNDIwLjIzIDM4My45NTFIMzc4LjYwN0MzODMuMjMyIDM3NC4zMzIgMzg1LjEwNyAzNjMuMjE1IDM4My4zNTcgMzUxLjcyMUMzNzkuMzU3IDMyMy43MzggMzUzLjczNCAzMDQgMzI1LjYwOSAzMDRIMTgxLjI0MkMxNjAuNDkyIDMwNCAxNDAuMjQ0IDMxMC43NDYgMTIzLjc0NCAzMjMuMjM4TDg1LjI0NiAzNTEuOTcxSDE2QzcuMTk5IDM1MS45NzEgMCAzNTkuMTY2IDAgMzY3Ljk2MVM3LjE5OSAzODMuOTUxIDE2IDM4My45NTFIOTUuOTk2TDE0Mi44NjkgMzQ4LjcyM0MxNTMuOTkyIDM0MC40NzkgMTY3LjQ5MiAzMzUuOTggMTgxLjI0MiAzMzUuOThIMzI3Ljk4NEMzNDEuMjM0IDMzNS45OCAzNTEuOTg0IDM0Ni43MjUgMzUxLjk4NCAzNTkuOTY3UzM0MS4yMzQgMzgzLjk1MSAzMjcuOTg0IDM4My45NTFIMjM5Ljk5QzIzMS4yNCAzODMuOTUxIDIyMy45OSAzOTEuMTk3IDIyMy45OSAzOTkuOTQxQzIyMy45OSA0MDguNjg3IDIzMS4yNCA0MTUuOTM0IDIzOS45OSA0MTUuOTM0SDQyMC4yM0M0MjkuODU1IDQxNS45MzQgNDM5LjIzIDQxMi42ODYgNDQ2Ljg1NSA0MDYuNjg4TDUwOC40NzcgMzU3LjQ2OUM1MTIuNzI3IDM1NC4wOTYgNTE3Ljk3NyAzNTIuMjIxIDUyMy4xMDIgMzUyLjIyMUM1MjguMTAyIDM1Mi4yMjEgNTMyLjk3NyAzNTMuOTcxIDUzNi44NSAzNTcuNDY5QzU0Ni45NzUgMzY2LjU4OCA1NDYuMjI1IDM4MS45NTMgNTM1Ljk3NSAzOTAuMDc0TDQzNS4yMyA0NzAuNjVDNDI3LjY0NiA0NzYuNzE1IDQxOC4yMjUgNDgwLjAyIDQwOC41MTIgNDgwLjAySDE2QzcuMTk5IDQ4MC4wMiAwIDQ4Ny4yMTUgMCA0OTYuMDFTNy4xOTkgNTEyIDE2IDUxMkg0MDguNDhDNDI1LjQ4IDUxMiA0NDEuODU1IDUwNi4xMjkgNDU1LjEwNCA0OTUuNjM1TDU1NS45NzUgNDE0LjkzNEM1NjguMjI1IDQwNS4xODkgNTc1LjQ3NSAzOTAuNTcyIDU3NS45NzMgMzc0Ljk1N0M1NzYuNDczIDM1OS4zNDIgNTY5Ljk3MyAzNDQuMjI3IDU1OC4yMjUgMzMzLjYwN1pNMjI0IDE5MkgyNDBDMjkyLjkzOCAxOTIgMzM2IDE0OC45MzggMzM2IDk2QzMzNiA4Ny4xNTYgMzI4Ljg0NCA4MCAzMjAgODBTMzA0IDg3LjE1NiAzMDQgOTZDMzA0IDEzMS4yODEgMjc1LjI4MSAxNjAgMjQwIDE2MEgyMjRDMTg4LjcxOSAxNjAgMTYwIDEzMS4yODEgMTYwIDk2UzE4OC43MTkgMzIgMjI0IDMySDMzMC42NTZDMzc3LjcxOSAzMiA0MTYgNzAuMjgxIDQxNiAxMTcuMzQ0QzQxNiAxNDQuMDMxIDQwMy4yNSAxNjkuNTYyIDM4MS44NzUgMTg1LjU5NEwzMjYuNDA2IDIyNy4xODhDMzE5LjM0NCAyMzIuNSAzMTcuOTA2IDI0Mi41MzEgMzIzLjE4OCAyNDkuNTk0QzMyNi4zNDQgMjUzLjc4MSAzMzEuMTU2IDI1NiAzMzYgMjU2QzMzOS4zNDQgMjU2IDM0Mi43MTkgMjU0Ljk2OSAzNDUuNTk0IDI1Mi44MTJMNDAxLjA5NCAyMTEuMTg4QzQzMC40NjkgMTg5LjEyNSA0NDggMTU0LjAzMSA0NDggMTE3LjM0NEM0NDggNTIuNjI1IDM5NS4zNzUgMCAzMzAuNjU2IDBIMjI0QzE3MS4wNjIgMCAxMjggNDMuMDYyIDEyOCA5NlMxNzEuMDYyIDE5MiAyMjQgMTkyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HandHoldingMagic(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M558.225 333.607C548.725 324.988 536.225 320.24 523.102 320.24C510.602 320.24 498.227 324.488 488.479 332.357L427.025 381.566C425.098 383.111 422.701 383.951 420.23 383.951H378.607C383.232 374.332 385.107 363.215 383.357 351.721C379.357 323.738 353.734 304 325.609 304H181.242C160.492 304 140.244 310.746 123.744 323.238L85.246 351.971H16C7.199 351.971 0 359.166 0 367.961S7.199 383.951 16 383.951H95.996L142.869 348.723C153.992 340.479 167.492 335.98 181.242 335.98H327.984C341.234 335.98 351.984 346.725 351.984 359.967S341.234 383.951 327.984 383.951H239.99C231.24 383.951 223.99 391.197 223.99 399.941C223.99 408.687 231.24 415.934 239.99 415.934H420.23C429.855 415.934 439.23 412.686 446.855 406.688L508.477 357.469C512.727 354.096 517.977 352.221 523.102 352.221C528.102 352.221 532.977 353.971 536.85 357.469C546.975 366.588 546.225 381.953 535.975 390.074L435.23 470.65C427.646 476.715 418.225 480.02 408.512 480.02H16C7.199 480.02 0 487.215 0 496.01S7.199 512 16 512H408.48C425.48 512 441.855 506.129 455.104 495.635L555.975 414.934C568.225 405.189 575.475 390.572 575.973 374.957C576.473 359.342 569.973 344.227 558.225 333.607ZM224 192H240C292.938 192 336 148.938 336 96C336 87.156 328.844 80 320 80S304 87.156 304 96C304 131.281 275.281 160 240 160H224C188.719 160 160 131.281 160 96S188.719 32 224 32H330.656C377.719 32 416 70.281 416 117.344C416 144.031 403.25 169.562 381.875 185.594L326.406 227.188C319.344 232.5 317.906 242.531 323.188 249.594C326.344 253.781 331.156 256 336 256C339.344 256 342.719 254.969 345.594 252.812L401.094 211.188C430.469 189.125 448 154.031 448 117.344C448 52.625 395.375 0 330.656 0H224C171.062 0 128 43.062 128 96S171.062 192 224 192Z" />
        </Icon>
    </>
}

import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hand-holding-medical` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-medical?s=light hand-holding-medical}
 * @preview ![hand-holding-medical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NTguMjI1IDMzMy42MDdDNTQ4LjcyNSAzMjQuOTg4IDUzNi4yMjUgMzIwLjI0IDUyMy4xMDIgMzIwLjI0QzUxMC42MDIgMzIwLjI0IDQ5OC4yMjcgMzI0LjQ4OCA0ODguNDc5IDMzMi4zNTdMNDI3LjAyNSAzODEuNTY2QzQyNS4wOTggMzgzLjExMSA0MjIuNzAxIDM4My45NTEgNDIwLjIzIDM4My45NTFIMzc4LjYwN0MzODMuMjMyIDM3NC4zMzIgMzg1LjEwNyAzNjMuMjE1IDM4My4zNTcgMzUxLjcyMUMzNzkuMzU3IDMyMy43MzggMzUzLjczNCAzMDQgMzI1LjYwOSAzMDRIMTgxLjI0MkMxNjAuNDkyIDMwNCAxNDAuMjQ0IDMxMC43NDYgMTIzLjc0NCAzMjMuMjM4TDg1LjI0NiAzNTEuOTcxSDE2QzcuMTk5IDM1MS45NzEgMCAzNTkuMTY2IDAgMzY3Ljk2MVM3LjE5OSAzODMuOTUxIDE2IDM4My45NTFIOTUuOTk2TDE0Mi44NjkgMzQ4LjcyM0MxNTMuOTkyIDM0MC40NzkgMTY3LjQ5MiAzMzUuOTggMTgxLjI0MiAzMzUuOThIMzI3Ljk4NEMzNDEuMjM0IDMzNS45OCAzNTEuOTg0IDM0Ni43MjUgMzUxLjk4NCAzNTkuOTY3UzM0MS4yMzQgMzgzLjk1MSAzMjcuOTg0IDM4My45NTFIMjM5Ljk5QzIzMS4yNCAzODMuOTUxIDIyMy45OSAzOTEuMTk3IDIyMy45OSAzOTkuOTQxQzIyMy45OSA0MDguNjg3IDIzMS4yNCA0MTUuOTM0IDIzOS45OSA0MTUuOTM0SDQyMC4yM0M0MjkuODU1IDQxNS45MzQgNDM5LjIzIDQxMi42ODYgNDQ2Ljg1NSA0MDYuNjg4TDUwOC40NzcgMzU3LjQ2OUM1MTIuNzI3IDM1NC4wOTYgNTE3Ljk3NyAzNTIuMjIxIDUyMy4xMDIgMzUyLjIyMUM1MjguMTAyIDM1Mi4yMjEgNTMyLjk3NyAzNTMuOTcxIDUzNi44NSAzNTcuNDY5QzU0Ni45NzUgMzY2LjU4OCA1NDYuMjI1IDM4MS45NTMgNTM1Ljk3NSAzOTAuMDc0TDQzNS4yMyA0NzAuNjVDNDI3LjY0NiA0NzYuNzE1IDQxOC4yMjUgNDgwLjAyIDQwOC41MTIgNDgwLjAySDE2QzcuMTk5IDQ4MC4wMiAwIDQ4Ny4yMTUgMCA0OTYuMDFTNy4xOTkgNTEyIDE2IDUxMkg0MDguNDhDNDI1LjQ4IDUxMiA0NDEuODU1IDUwNi4xMjkgNDU1LjEwNCA0OTUuNjM1TDU1NS45NzUgNDE0LjkzNEM1NjguMjI1IDQwNS4xODkgNTc1LjQ3NSAzOTAuNTcyIDU3NS45NzMgMzc0Ljk1N0M1NzYuNDczIDM1OS4zNDIgNTY5Ljk3MyAzNDQuMjI3IDU1OC4yMjUgMzMzLjYwN1pNMTkyIDE5MkgyMjRWMjI0QzIyNCAyNDEuNjc0IDIzOC4zMjggMjU2IDI1NiAyNTZIMzIwQzMzNy42NzQgMjU2IDM1MiAyNDEuNjc0IDM1MiAyMjRWMTkySDM4NEM0MDEuNjc0IDE5MiA0MTYgMTc3LjY3NCA0MTYgMTYwVjk2QzQxNiA3OC4zMjYgNDAxLjY3NCA2NCAzODQgNjRIMzUyVjMyQzM1MiAxNC4zMjYgMzM3LjY3NCAwIDMyMCAwSDI1NkMyMzguMzI4IDAgMjI0IDE0LjMyNiAyMjQgMzJWNjRIMTkyQzE3NC4zMjggNjQgMTYwIDc4LjMyNiAxNjAgOTZWMTYwQzE2MCAxNzcuNjc0IDE3NC4zMjggMTkyIDE5MiAxOTJaTTE5MiA5NkgyNTZWMzJIMzIwVjk2SDM4NFYxNjBIMzIwVjIyNEgyNTZWMTYwSDE5MlY5NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HandHoldingMedical(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M558.225 333.607C548.725 324.988 536.225 320.24 523.102 320.24C510.602 320.24 498.227 324.488 488.479 332.357L427.025 381.566C425.098 383.111 422.701 383.951 420.23 383.951H378.607C383.232 374.332 385.107 363.215 383.357 351.721C379.357 323.738 353.734 304 325.609 304H181.242C160.492 304 140.244 310.746 123.744 323.238L85.246 351.971H16C7.199 351.971 0 359.166 0 367.961S7.199 383.951 16 383.951H95.996L142.869 348.723C153.992 340.479 167.492 335.98 181.242 335.98H327.984C341.234 335.98 351.984 346.725 351.984 359.967S341.234 383.951 327.984 383.951H239.99C231.24 383.951 223.99 391.197 223.99 399.941C223.99 408.687 231.24 415.934 239.99 415.934H420.23C429.855 415.934 439.23 412.686 446.855 406.688L508.477 357.469C512.727 354.096 517.977 352.221 523.102 352.221C528.102 352.221 532.977 353.971 536.85 357.469C546.975 366.588 546.225 381.953 535.975 390.074L435.23 470.65C427.646 476.715 418.225 480.02 408.512 480.02H16C7.199 480.02 0 487.215 0 496.01S7.199 512 16 512H408.48C425.48 512 441.855 506.129 455.104 495.635L555.975 414.934C568.225 405.189 575.475 390.572 575.973 374.957C576.473 359.342 569.973 344.227 558.225 333.607ZM192 192H224V224C224 241.674 238.328 256 256 256H320C337.674 256 352 241.674 352 224V192H384C401.674 192 416 177.674 416 160V96C416 78.326 401.674 64 384 64H352V32C352 14.326 337.674 0 320 0H256C238.328 0 224 14.326 224 32V64H192C174.328 64 160 78.326 160 96V160C160 177.674 174.328 192 192 192ZM192 96H256V32H320V96H384V160H320V224H256V160H192V96Z" />
        </Icon>
    </>
}
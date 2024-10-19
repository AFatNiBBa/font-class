
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hand-holding` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding?s=light hand-holding}
 * @preview ![hand-holding](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzUuOTczIDM3NC45NTdDNTc1LjQ3NSAzOTAuNTcyIDU2OC4yMjUgNDA1LjE4OSA1NTUuOTc1IDQxNC45MzRMNDU1LjEwNCA0OTUuNjM1QzQ0MS44NTUgNTA2LjEyOSA0MjUuNDggNTEyIDQwOC40OCA1MTJIMTZDNy4xOTkgNTEyIDAgNTA0LjgwNSAwIDQ5Ni4wMVM3LjE5OSA0ODAuMDIgMTYgNDgwLjAySDQwOC41MTJDNDE4LjIyNSA0ODAuMDIgNDI3LjY0NiA0NzYuNzE1IDQzNS4yMyA0NzAuNjVMNTM1Ljk3NSAzOTAuMDc0QzU0Ni4yMjUgMzgxLjk1MyA1NDYuOTc1IDM2Ni41ODggNTM2Ljg1IDM1Ny40NjlDNTMyLjk3NyAzNTMuOTcxIDUyOC4xMDIgMzUyLjIyMSA1MjMuMTAyIDM1Mi4yMjFDNTE3Ljk3NyAzNTIuMjIxIDUxMi43MjcgMzU0LjA5NiA1MDguNDc3IDM1Ny40NjlMNDQ2Ljg1NSA0MDYuNjg4QzQzOS4yMyA0MTIuNjg2IDQyOS44NTUgNDE1LjkzNCA0MjAuMjMgNDE1LjkzNEgyMzkuOTlDMjMxLjI0IDQxNS45MzQgMjIzLjk5IDQwOC42ODggMjIzLjk5IDM5OS45NDFDMjIzLjk5IDM5MS4xOTcgMjMxLjI0IDM4My45NTEgMjM5Ljk5IDM4My45NTFIMzI3Ljk4NEMzNDEuMjM0IDM4My45NTEgMzUxLjk4NCAzNzMuMjA5IDM1MS45ODQgMzU5Ljk2N1MzNDEuMjM0IDMzNS45OCAzMjcuOTg0IDMzNS45OEgxODEuMjQyQzE2Ny40OTIgMzM1Ljk4IDE1My45OTIgMzQwLjQ3OSAxNDIuODY5IDM0OC43MjNMOTUuOTk2IDM4My45NTFIMTZDNy4xOTkgMzgzLjk1MSAwIDM3Ni43NTYgMCAzNjcuOTYxUzcuMTk5IDM1MS45NzEgMTYgMzUxLjk3MUg4NS4yNDZMMTIzLjc0NCAzMjMuMjM4QzE0MC4yNDQgMzEwLjc0NiAxNjAuNDkyIDMwNCAxODEuMjQyIDMwNEgzMjUuNjA5QzM1My43MzQgMzA0IDM3OS4zNTcgMzIzLjczOCAzODMuMzU3IDM1MS43MjFDMzg1LjEwNyAzNjMuMjE1IDM4My4yMzIgMzc0LjMzMiAzNzguNjA3IDM4My45NTFINDIwLjIzQzQyMi43MDEgMzgzLjk1MSA0MjUuMDk4IDM4My4xMTEgNDI3LjAyNSAzODEuNTY2TDQ4OC40NzkgMzMyLjM1N0M0OTguMjI3IDMyNC40ODggNTEwLjYwMiAzMjAuMjQgNTIzLjEwMiAzMjAuMjRDNTM2LjIyNSAzMjAuMjQgNTQ4LjcyNSAzMjQuOTg4IDU1OC4yMjUgMzMzLjYwN0M1NjkuOTczIDM0NC4yMjcgNTc2LjQ3MyAzNTkuMzQyIDU3NS45NzMgMzc0Ljk1N1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HandHolding(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M575.973 374.957C575.475 390.572 568.225 405.189 555.975 414.934L455.104 495.635C441.855 506.129 425.48 512 408.48 512H16C7.199 512 0 504.805 0 496.01S7.199 480.02 16 480.02H408.512C418.225 480.02 427.646 476.715 435.23 470.65L535.975 390.074C546.225 381.953 546.975 366.588 536.85 357.469C532.977 353.971 528.102 352.221 523.102 352.221C517.977 352.221 512.727 354.096 508.477 357.469L446.855 406.688C439.23 412.686 429.855 415.934 420.23 415.934H239.99C231.24 415.934 223.99 408.688 223.99 399.941C223.99 391.197 231.24 383.951 239.99 383.951H327.984C341.234 383.951 351.984 373.209 351.984 359.967S341.234 335.98 327.984 335.98H181.242C167.492 335.98 153.992 340.479 142.869 348.723L95.996 383.951H16C7.199 383.951 0 376.756 0 367.961S7.199 351.971 16 351.971H85.246L123.744 323.238C140.244 310.746 160.492 304 181.242 304H325.609C353.734 304 379.357 323.738 383.357 351.721C385.107 363.215 383.232 374.332 378.607 383.951H420.23C422.701 383.951 425.098 383.111 427.025 381.566L488.479 332.357C498.227 324.488 510.602 320.24 523.102 320.24C536.225 320.24 548.725 324.988 558.225 333.607C569.973 344.227 576.473 359.342 575.973 374.957Z" />
        </Icon>
    </>
}
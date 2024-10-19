
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hand-holding-droplet` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-droplet?s=light hand-holding-droplet}
 * @preview ![hand-holding-droplet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggMjU2QzM0MSAyNTYgMzg0IDIxMy44NzUgMzg0IDE2MkMzODQgMTIyIDMyNi44NzUgNDEuMjUgMzAwLjc1IDYuMzc1QzI5Ny42MjUgMi4xMjUgMjkyLjc1IDAgMjg4IDBTMjc4LjM3NSAyLjEyNSAyNzUuMjUgNi4zNzVDMjQ5LjEyNSA0MS4yNSAxOTIgMTIyIDE5MiAxNjJDMTkyIDIxMy44NzUgMjM1IDI1NiAyODggMjU2Wk0yODggNDNDMzMyLjEyNSAxMDQuMzc1IDM1MiAxNDYuNSAzNTIgMTYyQzM1MiAxOTYuMjUgMzIzLjI1IDIyNCAyODggMjI0UzIyNCAxOTYuMjUgMjI0IDE2MkMyMjQgMTQ2LjUgMjQzLjg3NSAxMDQuMzc1IDI4OCA0M1pNNTU4LjIyNSAzMzMuNjA3QzU0OC43MjUgMzI0Ljk4OCA1MzYuMjI1IDMyMC4yNCA1MjMuMTAyIDMyMC4yNEM1MTAuNjAyIDMyMC4yNCA0OTguMjI3IDMyNC40ODggNDg4LjQ3OSAzMzIuMzU3TDQyNy4wMjUgMzgxLjU2NkM0MjUuMDk4IDM4My4xMTEgNDIyLjcwMSAzODMuOTUxIDQyMC4yMyAzODMuOTUxSDM3OC42MDdDMzgzLjIzMiAzNzQuMzMyIDM4NS4xMDcgMzYzLjIxNSAzODMuMzU3IDM1MS43MjFDMzc5LjM1NyAzMjMuNzM4IDM1My43MzQgMzA0IDMyNS42MDkgMzA0SDE4MS4yNDJDMTYwLjQ5MiAzMDQgMTQwLjI0NCAzMTAuNzQ2IDEyMy43NDQgMzIzLjIzOEw4NS4yNDYgMzUxLjk3MUgxNkM3LjE5OSAzNTEuOTcxIDAgMzU5LjE2NiAwIDM2Ny45NjFTNy4xOTkgMzgzLjk1MSAxNiAzODMuOTUxSDk1Ljk5NkwxNDIuODY5IDM0OC43MjNDMTUzLjk5MiAzNDAuNDc5IDE2Ny40OTIgMzM1Ljk4IDE4MS4yNDIgMzM1Ljk4SDMyNy45ODRDMzQxLjIzNCAzMzUuOTggMzUxLjk4NCAzNDYuNzI1IDM1MS45ODQgMzU5Ljk2N1MzNDEuMjM0IDM4My45NTEgMzI3Ljk4NCAzODMuOTUxSDIzOS45OUMyMzEuMjQgMzgzLjk1MSAyMjMuOTkgMzkxLjE5NyAyMjMuOTkgMzk5Ljk0MUMyMjMuOTkgNDA4LjY4NyAyMzEuMjQgNDE1LjkzNCAyMzkuOTkgNDE1LjkzNEg0MjAuMjNDNDI5Ljg1NSA0MTUuOTM0IDQzOS4yMyA0MTIuNjg2IDQ0Ni44NTUgNDA2LjY4OEw1MDguNDc3IDM1Ny40NjlDNTEyLjcyNyAzNTQuMDk2IDUxNy45NzcgMzUyLjIyMSA1MjMuMTAyIDM1Mi4yMjFDNTI4LjEwMiAzNTIuMjIxIDUzMi45NzcgMzUzLjk3MSA1MzYuODUgMzU3LjQ2OUM1NDYuOTc1IDM2Ni41ODggNTQ2LjIyNSAzODEuOTUzIDUzNS45NzUgMzkwLjA3NEw0MzUuMjMgNDcwLjY1QzQyNy42NDYgNDc2LjcxNSA0MTguMjI1IDQ4MC4wMiA0MDguNTEyIDQ4MC4wMkgxNkM3LjE5OSA0ODAuMDIgMCA0ODcuMjE1IDAgNDk2LjAxUzcuMTk5IDUxMiAxNiA1MTJINDA4LjQ4QzQyNS40OCA1MTIgNDQxLjg1NSA1MDYuMTI5IDQ1NS4xMDQgNDk1LjYzNUw1NTUuOTc1IDQxNC45MzRDNTY4LjIyNSA0MDUuMTg5IDU3NS40NzUgMzkwLjU3MiA1NzUuOTczIDM3NC45NTdDNTc2LjQ3MyAzNTkuMzQyIDU2OS45NzMgMzQ0LjIyNyA1NTguMjI1IDMzMy42MDdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function HandHoldingDroplet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M288 256C341 256 384 213.875 384 162C384 122 326.875 41.25 300.75 6.375C297.625 2.125 292.75 0 288 0S278.375 2.125 275.25 6.375C249.125 41.25 192 122 192 162C192 213.875 235 256 288 256ZM288 43C332.125 104.375 352 146.5 352 162C352 196.25 323.25 224 288 224S224 196.25 224 162C224 146.5 243.875 104.375 288 43ZM558.225 333.607C548.725 324.988 536.225 320.24 523.102 320.24C510.602 320.24 498.227 324.488 488.479 332.357L427.025 381.566C425.098 383.111 422.701 383.951 420.23 383.951H378.607C383.232 374.332 385.107 363.215 383.357 351.721C379.357 323.738 353.734 304 325.609 304H181.242C160.492 304 140.244 310.746 123.744 323.238L85.246 351.971H16C7.199 351.971 0 359.166 0 367.961S7.199 383.951 16 383.951H95.996L142.869 348.723C153.992 340.479 167.492 335.98 181.242 335.98H327.984C341.234 335.98 351.984 346.725 351.984 359.967S341.234 383.951 327.984 383.951H239.99C231.24 383.951 223.99 391.197 223.99 399.941C223.99 408.687 231.24 415.934 239.99 415.934H420.23C429.855 415.934 439.23 412.686 446.855 406.688L508.477 357.469C512.727 354.096 517.977 352.221 523.102 352.221C528.102 352.221 532.977 353.971 536.85 357.469C546.975 366.588 546.225 381.953 535.975 390.074L435.23 470.65C427.646 476.715 418.225 480.02 408.512 480.02H16C7.199 480.02 0 487.215 0 496.01S7.199 512 16 512H408.48C425.48 512 441.855 506.129 455.104 495.635L555.975 414.934C568.225 405.189 575.475 390.572 575.973 374.957C576.473 359.342 569.973 344.227 558.225 333.607Z" />
        </Icon>
    </>
}

import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hand-holding-magic` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-magic?s=thin hand-holding-magic}
 * @preview ![hand-holding-magic](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjMuOTkyIDE5MkgyMzkuOTkyQzI4NC4wOTkgMTkyIDMxOS45ODkgMTU2LjEyNSAzMTkuOTg5IDExMkMzMTkuOTg5IDEwNy41OTQgMzE2LjQxMSAxMDQgMzExLjk4OSAxMDRTMzAzLjk4OSAxMDcuNTk0IDMwMy45ODkgMTEyQzMwMy45ODkgMTQ3LjI4MSAyNzUuMjg3IDE3NiAyMzkuOTkyIDE3NkgyMjMuOTkyQzE3OS44ODQgMTc2IDE0My45OTUgMTQwLjEyNSAxNDMuOTk1IDk2UzE3OS44ODQgMTYgMjIzLjk5MiAxNkgzNTEuOTg4QzM5Ni4wOTYgMTYgNDMxLjk4NSA1MS44NzUgNDMxLjk4NSA5NlY5OS44MTJDNDMxLjk4NSAxNjkuMzEyIDM4NS4wOCAyMzAuMzQ0IDMxNy45MjYgMjQ4LjI4MUMzMTMuNjYxIDI0OS40MDYgMzExLjExNCAyNTMuNzgxIDMxMi4yNTUgMjU4LjA2MkMzMTMuMjA4IDI2MS42MjUgMzE2LjQ0MiAyNjQgMzE5Ljk4OSAyNjRDMzIwLjY2MSAyNjQgMzIxLjM2NCAyNjMuOTA2IDMyMi4wNTEgMjYzLjcxOUMzOTYuMjA1IDI0My45MzcgNDQ3Ljk4NCAxNzYuNTMxIDQ0Ny45ODQgOTkuODEyVjk2QzQ0Ny45ODQgNDMuMDYyIDQwNC45MjMgMCAzNTEuOTg4IDBIMjIzLjk5MkMxNzEuMDU3IDAgMTI3Ljk5NiA0My4wNjIgMTI3Ljk5NiA5NlMxNzEuMDU3IDE5MiAyMjMuOTkyIDE5MlpNNTY2LjYyMSAzMjMuNTYyQzU1OC45ODEgMzEzLjE4NyA1NDcuNzc4IDMwNi40MzggNTM1LjA3NSAzMDQuNTMxQzUyMi4zMSAzMDIuNTMxIDUwOS43NjMgMzA1Ljc4MSA0OTkuNDk4IDMxMy40MDZMMzgxLjk1NSA0MDBIMjYzLjk3NUMyNTkuNjMyIDQwMCAyNTUuOTc1IDM5Ni4zNDQgMjU1Ljk3NSAzOTIuMDMxQzI1NS45NzUgMzg3LjY4OCAyNTkuNjMyIDM4NC4wMzEgMjYzLjk3NSAzODQuMDMxSDM0Mi4yMDdDMzYyLjU2NSAzODQuMDMxIDM4MC4yOTkgMzY5LjcxOSAzODMuNDcxIDM1MC42ODhDMzg1LjM3NyAzMzguOTY5IDM4Mi4xMTIgMzI3LjA5NCAzNzQuNDg3IDMxOC4xNTZDMzY2Ljg2MiAzMDkuMTg4IDM1NS43MjIgMzA0LjAzMSAzNDMuOTU3IDMwNC4wMzFIMTgzLjk3OEMxNTUuMjYgMzA0LjAzMSAxMjcuMTUyIDMxNCAxMDQuODI0IDMzMi4wNjNMNjAuNTI5IDM2OC4wMzFIOEMzLjU3OCAzNjguMDMxIDAgMzcxLjYyNSAwIDM3Ni4wMzFTMy41NzggMzg0LjAzMSA4IDM4NC4wMzFINjYuMjE2TDExNC45MDIgMzQ0LjVDMTM0LjM4NiAzMjguNzE5IDE1OC45MTYgMzIwLjAzMSAxODMuOTc4IDMyMC4wMzFIMzQzLjk1N0MzNTEuMDM1IDMyMC4wMzEgMzU3LjcyMiAzMjMuMTI1IDM2Mi4zIDMyOC41QzM2Ni45NCAzMzMuOTY5IDM2OC44NDcgMzQwLjkzOCAzNjcuNjkgMzQ4LjA5NEMzNjUuOCAzNTkuNDY5IDM1NC44NDcgMzY4LjAzMSAzNDIuMjA3IDM2OC4wMzFIMjYzLjk3NUMyNTAuNzQxIDM2OC4wMzEgMjM5Ljk3NiAzNzguODEzIDIzOS45NzYgMzkyLjAzMVMyNTAuNzQxIDQxNiAyNjMuOTc1IDQxNkgzODcuMjA1TDUwOS4wMTMgMzI2LjI4MUM1MTUuODczIDMyMS4xODggNTI0LjMyNiAzMTkuMTg4IDUzMi43IDMyMC4zNDRDNTQxLjE2OSAzMjEuNjI1IDU0OC42MzcgMzI2LjEyNSA1NTMuNzQ2IDMzMy4wNjJDNTU4LjgwOSAzMzkuOTM4IDU2MC45MDIgMzQ4LjM3NSA1NTkuNjIxIDM1Ni44MTJDNTU4LjM0IDM2NS4yODEgNTUzLjg1NiAzNzIuNzE5IDU0Ni45NjUgMzc3Ljc4MUw0MTEuOTA4IDQ3Ny4yODFDMzk1LjUxNyA0ODkuMzQ0IDM3NS4yODQgNDk2IDM1NC45NTYgNDk2SDhDMy41NzggNDk2IDAgNDk5LjU5NCAwIDUwNFMzLjU3OCA1MTIgOCA1MTJIMzU0Ljk1NkMzNzguNjc0IDUxMiA0MDIuMjgzIDUwNC4yNSA0MjEuNDA3IDQ5MC4xNTZMNTU2LjQ2NSAzOTAuNjU2QzU2Ni43NzcgMzgzLjA2MiA1NzMuNTI3IDM3MS45MDYgNTc1LjQ0OSAzNTkuMjE5QzU3Ny4zNyAzNDYuNTYyIDU3NC4yMyAzMzMuODc1IDU2Ni42MjEgMzIzLjU2MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HandHoldingMagic(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M223.992 192H239.992C284.099 192 319.989 156.125 319.989 112C319.989 107.594 316.411 104 311.989 104S303.989 107.594 303.989 112C303.989 147.281 275.287 176 239.992 176H223.992C179.884 176 143.995 140.125 143.995 96S179.884 16 223.992 16H351.988C396.096 16 431.985 51.875 431.985 96V99.812C431.985 169.312 385.08 230.344 317.926 248.281C313.661 249.406 311.114 253.781 312.255 258.062C313.208 261.625 316.442 264 319.989 264C320.661 264 321.364 263.906 322.051 263.719C396.205 243.937 447.984 176.531 447.984 99.812V96C447.984 43.062 404.923 0 351.988 0H223.992C171.057 0 127.996 43.062 127.996 96S171.057 192 223.992 192ZM566.621 323.562C558.981 313.187 547.778 306.438 535.075 304.531C522.31 302.531 509.763 305.781 499.498 313.406L381.955 400H263.975C259.632 400 255.975 396.344 255.975 392.031C255.975 387.688 259.632 384.031 263.975 384.031H342.207C362.565 384.031 380.299 369.719 383.471 350.688C385.377 338.969 382.112 327.094 374.487 318.156C366.862 309.188 355.722 304.031 343.957 304.031H183.978C155.26 304.031 127.152 314 104.824 332.063L60.529 368.031H8C3.578 368.031 0 371.625 0 376.031S3.578 384.031 8 384.031H66.216L114.902 344.5C134.386 328.719 158.916 320.031 183.978 320.031H343.957C351.035 320.031 357.722 323.125 362.3 328.5C366.94 333.969 368.847 340.938 367.69 348.094C365.8 359.469 354.847 368.031 342.207 368.031H263.975C250.741 368.031 239.976 378.813 239.976 392.031S250.741 416 263.975 416H387.205L509.013 326.281C515.873 321.188 524.326 319.188 532.7 320.344C541.169 321.625 548.637 326.125 553.746 333.062C558.809 339.938 560.902 348.375 559.621 356.812C558.34 365.281 553.856 372.719 546.965 377.781L411.908 477.281C395.517 489.344 375.284 496 354.956 496H8C3.578 496 0 499.594 0 504S3.578 512 8 512H354.956C378.674 512 402.283 504.25 421.407 490.156L556.465 390.656C566.777 383.062 573.527 371.906 575.449 359.219C577.37 346.562 574.23 333.875 566.621 323.562Z" />
        </Icon>
    </>
}
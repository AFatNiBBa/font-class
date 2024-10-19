
import { Icon } from "../../index";

/**
 * A component that renders the `hand-sparkles` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-sparkles?s=solid hand-sparkles}
 * @preview ![hand-sparkles](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDguMDE2IDQzMkM0NDguMDE2IDQxNy43NSA0NTYuNTYyIDQwMy44NTkgNDY5LjI5NyAzOTcuNDUzTDUwOC44NTkgMzgwLjg5MUw1MjQuNSAzNDMuMzc1QzUyOC45NjEgMzM0LjMzOCA1MzYuMDIgMzI3Ljk3MSA1NDQgMzI0LjEwOVYxMjhDNTQ0IDExMC4zMjggNTI5LjY3MiA5NiA1MTIgOTZTNDgwIDExMC4zMjggNDgwIDEyOFYyNDBDNDgwIDI0OC44MzYgNDcyLjgzNiAyNTYgNDY0IDI1NlM0NDggMjQ4LjgzNiA0NDggMjQwVjY0QzQ0OCA0Ni4zMjggNDMzLjY3MiAzMiA0MTYgMzJTMzg0IDQ2LjMyOCAzODQgNjRWMjQwQzM4NCAyNDguODM2IDM3Ni44MzYgMjU2IDM2OCAyNTZTMzUyIDI0OC44MzYgMzUyIDI0MFYzMkMzNTIgMTQuMzI4IDMzNy42NzIgMCAzMjAgMFMyODggMTQuMzI4IDI4OCAzMlYyNDBDMjg4IDI0OC44MzYgMjgwLjgzNiAyNTYgMjcyIDI1NlMyNTYgMjQ4LjgzNiAyNTYgMjQwVjY0QzI1NiA0Ni4zMjggMjQxLjY3MiAzMiAyMjQgMzJTMTkyIDQ2LjMyOCAxOTIgNjRWMzQzLjQzOEwxMzIuMjgxIDI4My43MTlDMTI0LjQ2OSAyNzUuOTA2IDExNC4yMzQgMjcyIDEwNCAyNzJDODIuNjg0IDI3MiA2NCAyODkuMTYzIDY0IDMxMkM2NCAzMjIuMjM0IDY3LjkwNiAzMzIuNDY5IDc1LjcxOSAzNDAuMjgxTDE4OC44NTkgNDUzLjQyMkMyMjYuNjI1IDQ5MS4yMDMgMjc2Ljg1OSA1MTIgMzMwLjI4MSA1MTJIMzY4QzQxMC43MTkgNTEyIDQ0OS45MDggNDk2LjY3OCA0ODAuNDI0IDQ3MS4yNzNMNDcxLjM3NSA0NjcuNUM0NTYuNTYyIDQ2MC4xNDEgNDQ4LjAxNiA0NDYuMjUgNDQ4LjAxNiA0MzJaTTM0OS43ODkgMzcxLjU3OEwzMjAgMzgzLjk5OEwzMDcuNTc4IDQxMy43ODFDMzA2Ljk2NyA0MTUuMDA2IDMwNS4zNjcgNDE2IDMwNCA0MTZTMzAxLjAzMSA0MTUuMDA2IDMwMC40MjIgNDEzLjc4MUwyODggMzgzLjk5OEwyNTguMjA5IDM3MS41NzhDMjU2Ljk5MiAzNzAuOTY5IDI1NiAzNjkuMzU3IDI1NiAzNjcuOTk4QzI1NiAzNjYuNjMzIDI1Ni45OTIgMzY1LjAzMSAyNTguMjA5IDM2NC40MjJMMjg4IDM1Mi4wMDJMMzAwLjQyMiAzMjIuMjE3QzMwMS4wMzEgMzIwLjk5IDMwMi42MzMgMzIwIDMwNCAzMjBTMzA2Ljk2NyAzMjAuOTkgMzA3LjU3OCAzMjIuMjE3TDMyMCAzNTIuMDAyTDM0OS43ODkgMzY0LjQyMkMzNTEuMDA4IDM2NS4wMzEgMzUyIDM2Ni42MzMgMzUyIDM2Ny45OThDMzUyIDM2OS4zNTcgMzUxLjAwOCAzNzAuOTY5IDM0OS43ODkgMzcxLjU3OFpNODAgMjI0QzgyLjI3NyAyMjQgODQuOTQzIDIyMi4zNDQgODUuOTU5IDIyMC4zMDFMMTA2LjY1NCAxNzAuNjc0TDEwNi42NTYgMTcwLjY3MkwxMDYuNzU0IDE3MC42MjNMMTU2LjMwMyAxNDkuOTYzQzE1OC4zMyAxNDguOTQ5IDE1OS45NzkgMTQ2LjI3IDE1OS45ODIgMTQ0LjAwOEwxNjAgMTQ0TDE1OS45ODQgMTQzLjk5MkMxNTkuOTggMTQxLjcxNyAxNTguMzMyIDEzOS4wNTMgMTU2LjMwMyAxMzguMDM3TDE0NCAxMzIuOTA2TDEwNi43MyAxMTcuMzY1TDEwNi42NTYgMTE3LjMyOEw4NS45NTkgNjcuNjk1Qzg0Ljk0MyA2NS42NTIgODIuMjc3IDY0IDgwIDY0Qzc3LjcxOSA2NCA3NS4wNTEgNjUuNjUyIDc0LjAzNSA2Ny42OTVMNTMuMzM4IDExNy4zM0w1My4yODkgMTE3LjM1NUwzLjY5NSAxMzguMDM3QzEuNjY4IDEzOS4wNTMgMC4wMiAxNDEuNzE3IDAuMDE2IDE0My45OTJMMCAxNDRMMC4wMTggMTQ0LjAwOEMwLjAyMSAxNDYuMjcgMS42NyAxNDguOTQ5IDMuNjk1IDE0OS45NjNMNTMuMjY2IDE3MC42MzNMNTMuMzQgMTcwLjY3TDc0LjAzNSAyMjAuMzAxQzc1LjA1MSAyMjIuMzQ0IDc3LjcxOSAyMjQgODAgMjI0Wk02MzkuOTg0IDQzMS45OTJDNjM5Ljk4IDQyOS43MTcgNjM4LjMzMiA0MjcuMDUzIDYzNi4zMDMgNDI2LjAzN0w1ODYuNzMgNDA1LjM2NUw1ODYuNjU2IDQwNS4zMjhMNTY1Ljk1OSAzNTUuNjk1QzU2NC45NDMgMzUzLjY1MiA1NjIuMjc3IDM1MiA1NjAgMzUyQzU1Ny43MTkgMzUyIDU1NS4wNTEgMzUzLjY1MiA1NTQuMDM1IDM1NS42OTVMNTMzLjMzOCA0MDUuMzNMNTMzLjI4OSA0MDUuMzU1TDQ4My42OTUgNDI2LjAzN0M0ODEuNjY4IDQyNy4wNTMgNDgwLjAyIDQyOS43MTcgNDgwLjAxNiA0MzEuOTkyTDQ4MCA0MzJMNDgwLjAxOCA0MzIuMDA4QzQ4MC4wMjEgNDM0LjI3IDQ4MS42NyA0MzYuOTQ5IDQ4My42OTUgNDM3Ljk2M0w1MzMuMjY2IDQ1OC42MzNMNTMzLjM0IDQ1OC42N0w1NTQuMDM1IDUwOC4zMDFDNTU1LjA1MSA1MTAuMzQ0IDU1Ny43MTkgNTEyIDU2MCA1MTJDNTYyLjI3NyA1MTIgNTY0Ljk0MyA1MTAuMzQ0IDU2NS45NTkgNTA4LjMwMUw1ODYuNjU0IDQ1OC42NzRMNTg2LjY1NiA0NTguNjcyTDU4Ni43NTQgNDU4LjYyM0w2MzYuMzAzIDQzNy45NjNDNjM4LjMzIDQzNi45NDkgNjM5Ljk3OSA0MzQuMjcgNjM5Ljk4MiA0MzIuMDA4TDY0MCA0MzJMNjM5Ljk4NCA0MzEuOTkyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HandSparkles: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448.016 432C448.016 417.75 456.562 403.859 469.297 397.453L508.859 380.891L524.5 343.375C528.961 334.338 536.02 327.971 544 324.109V128C544 110.328 529.672 96 512 96S480 110.328 480 128V240C480 248.836 472.836 256 464 256S448 248.836 448 240V64C448 46.328 433.672 32 416 32S384 46.328 384 64V240C384 248.836 376.836 256 368 256S352 248.836 352 240V32C352 14.328 337.672 0 320 0S288 14.328 288 32V240C288 248.836 280.836 256 272 256S256 248.836 256 240V64C256 46.328 241.672 32 224 32S192 46.328 192 64V343.438L132.281 283.719C124.469 275.906 114.234 272 104 272C82.684 272 64 289.163 64 312C64 322.234 67.906 332.469 75.719 340.281L188.859 453.422C226.625 491.203 276.859 512 330.281 512H368C410.719 512 449.908 496.678 480.424 471.273L471.375 467.5C456.562 460.141 448.016 446.25 448.016 432ZM349.789 371.578L320 383.998L307.578 413.781C306.967 415.006 305.367 416 304 416S301.031 415.006 300.422 413.781L288 383.998L258.209 371.578C256.992 370.969 256 369.357 256 367.998C256 366.633 256.992 365.031 258.209 364.422L288 352.002L300.422 322.217C301.031 320.99 302.633 320 304 320S306.967 320.99 307.578 322.217L320 352.002L349.789 364.422C351.008 365.031 352 366.633 352 367.998C352 369.357 351.008 370.969 349.789 371.578ZM80 224C82.277 224 84.943 222.344 85.959 220.301L106.654 170.674L106.656 170.672L106.754 170.623L156.303 149.963C158.33 148.949 159.979 146.27 159.982 144.008L160 144L159.984 143.992C159.98 141.717 158.332 139.053 156.303 138.037L144 132.906L106.73 117.365L106.656 117.328L85.959 67.695C84.943 65.652 82.277 64 80 64C77.719 64 75.051 65.652 74.035 67.695L53.338 117.33L53.289 117.355L3.695 138.037C1.668 139.053 0.02 141.717 0.016 143.992L0 144L0.018 144.008C0.021 146.27 1.67 148.949 3.695 149.963L53.266 170.633L53.34 170.67L74.035 220.301C75.051 222.344 77.719 224 80 224ZM639.984 431.992C639.98 429.717 638.332 427.053 636.303 426.037L586.73 405.365L586.656 405.328L565.959 355.695C564.943 353.652 562.277 352 560 352C557.719 352 555.051 353.652 554.035 355.695L533.338 405.33L533.289 405.355L483.695 426.037C481.668 427.053 480.02 429.717 480.016 431.992L480 432L480.018 432.008C480.021 434.27 481.67 436.949 483.695 437.963L533.266 458.633L533.34 458.67L554.035 508.301C555.051 510.344 557.719 512 560 512C562.277 512 564.943 510.344 565.959 508.301L586.654 458.674L586.656 458.672L586.754 458.623L636.303 437.963C638.33 436.949 639.979 434.27 639.982 432.008L640 432L639.984 431.992Z" />
    </Icon>
);

export default HandSparkles;
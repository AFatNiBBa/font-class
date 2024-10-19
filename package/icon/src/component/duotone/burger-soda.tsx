
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `burger-soda` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/burger-soda?s=duotone burger-soda}
 * @preview ![burger-soda](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI5MS4zNzUgMjIzLjk5OEgzOC4yNUw2NCA0ODIuMjQ4QzY1LjI1IDQ5OS4xMjMgNzkuMTI1IDUxMi4xMjMgOTYgNTExLjk5OEgyNTZDMjYwLjc1IDUxMS44NzMgMjY1LjM3NSA1MTAuNzQ4IDI2OS42MjUgNTA4LjYyM0MyNjAuNzUgNDk1LjQ5OCAyNTYgNDc5Ljg3MyAyNTYgNDYzLjk5OEMyNTYgNDQ5Ljg3MyAyNjIuMjUgNDM2LjQ5OCAyNzMgNDI3LjM3M0MyNjEuMzc1IDQxNC43NDggMjU1LjI1IDM5Ny45OTggMjU2LjEyNSAzODAuNzQ4QzI1NyAzNjMuNjIzIDI2NC43NSAzNDcuNDk4IDI3Ny42MjUgMzM2LjEyM0MyNzEuODc1IDMzMC45OTggMjY3LjEyNSAzMjQuOTk4IDI2My41IDMxOC4yNDhDMjUyLjI1IDI5Ni45OTggMjUzLjc1IDI3MS4yNDggMjY3LjI1IDI1MS4zNzNDMjczLjk5OSAyNDEuNDk4IDI4Mi4zNzUgMjMyLjQ5OCAyOTEuMzc1IDIyMy45OThaTTMzNiAxMjcuOTk4SDIwNi43NUwyMjYuNzUgNDcuOTk4SDI3MkMyODAuODc1IDQ3Ljk5OCAyODggNDAuODczIDI4OCAzMS45OThWMTUuOTk4QzI4OCA3LjEyMyAyODAuODc1IC0wLjAwMiAyNzIgLTAuMDAySDIyMC41QzIwMi4xMjUgLTAuMDAyIDE4Ni4xMjUgMTIuNDk4IDE4MS43NSAzMC4yNDhMMTU3LjI1IDEyNy45OThIMTZDNy4xMjUgMTI3Ljk5OCAwIDEzNS4xMjMgMCAxNDMuOTk4VjE3NS45OThDMCAxODQuODczIDcuMTI1IDE5MS45OTggMTYgMTkxLjk5OEgzMzZDMzQ0Ljg3NSAxOTEuOTk4IDM1MiAxODQuODczIDM1MiAxNzUuOTk4VjE0My45OThDMzUyIDEzNS4xMjMgMzQ0Ljg3NSAxMjcuOTk4IDMzNiAxMjcuOTk4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik02MjQgNDQ3Ljk5OEgzMDRDMjk1LjEyNSA0NDcuOTk4IDI4OCA0NTUuMTIzIDI4OCA0NjMuOTk4QzI4OCA0OTAuNDk4IDMwOS41IDUxMS45OTggMzM2IDUxMS45OThINTkyQzYxOC41IDUxMS45OTggNjQwIDQ5MC40OTggNjQwIDQ2My45OThDNjQwIDQ1NS4xMjMgNjMyLjg3NSA0NDcuOTk4IDYyNCA0NDcuOTk4Wk0zMjAgNDE1Ljk5OEg2MDhDNjI1LjYyNSA0MTUuOTk4IDY0MCA0MDEuNjIzIDY0MCAzODMuOTk4UzYyNS42MjUgMzUxLjk5OCA2MDggMzUxLjk5OEgzMjBDMzAyLjM3NSAzNTEuOTk4IDI4OCAzNjYuMzczIDI4OCAzODMuOTk4UzMwMi4zNzUgNDE1Ljk5OCAzMjAgNDE1Ljk5OFpNMzE5LjI1IDMxOS45OThINjA4Ljc1QzYzNC4xMjUgMzE5Ljk5OCA2NDguNzUgMjkwLjc0OCA2MzQuMjUgMjY5LjM3M0M2MDQuNzUgMjI2LjEyMyA1NDAgMTkyLjEyMyA0NjQgMTkxLjk5OFMzMjMuMjUgMjI2LjEyMyAyOTMuNzUgMjY5LjM3M0MyNzkuMjUgMjkwLjc0OCAyOTMuODc1IDMxOS45OTggMzE5LjI1IDMxOS45OThaTTU0NCAyMzkuOTk4QzU1Mi44NzUgMjM5Ljk5OCA1NjAgMjQ3LjEyMyA1NjAgMjU1Ljk5OFM1NTIuODc1IDI3MS45OTggNTQ0IDI3MS45OThTNTI4IDI2NC44NzMgNTI4IDI1NS45OThTNTM1LjEyNSAyMzkuOTk4IDU0NCAyMzkuOTk4Wk00NjQgMjIzLjk5OEM0NzIuODc1IDIyMy45OTggNDgwIDIzMS4xMjMgNDgwIDIzOS45OThTNDcyLjg3NSAyNTUuOTk4IDQ2NCAyNTUuOTk4UzQ0OCAyNDguODczIDQ0OCAyMzkuOTk4UzQ1NS4xMjUgMjIzLjk5OCA0NjQgMjIzLjk5OFpNMzg0IDIzOS45OThDMzkyLjg3NSAyMzkuOTk4IDQwMCAyNDcuMTIzIDQwMCAyNTUuOTk4UzM5Mi44NzUgMjcxLjk5OCAzODQgMjcxLjk5OFMzNjggMjY0Ljg3MyAzNjggMjU1Ljk5OFMzNzUuMTI1IDIzOS45OTggMzg0IDIzOS45OThaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BurgerSoda(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M291.375 223.998H38.25L64 482.248C65.25 499.123 79.125 512.123 96 511.998H256C260.75 511.873 265.375 510.748 269.625 508.623C260.75 495.498 256 479.873 256 463.998C256 449.873 262.25 436.498 273 427.373C261.375 414.748 255.25 397.998 256.125 380.748C257 363.623 264.75 347.498 277.625 336.123C271.875 330.998 267.125 324.998 263.5 318.248C252.25 296.998 253.75 271.248 267.25 251.373C273.999 241.498 282.375 232.498 291.375 223.998ZM336 127.998H206.75L226.75 47.998H272C280.875 47.998 288 40.873 288 31.998V15.998C288 7.123 280.875 -0.002 272 -0.002H220.5C202.125 -0.002 186.125 12.498 181.75 30.248L157.25 127.998H16C7.125 127.998 0 135.123 0 143.998V175.998C0 184.873 7.125 191.998 16 191.998H336C344.875 191.998 352 184.873 352 175.998V143.998C352 135.123 344.875 127.998 336 127.998Z" />
            <path d="M624 447.998H304C295.125 447.998 288 455.123 288 463.998C288 490.498 309.5 511.998 336 511.998H592C618.5 511.998 640 490.498 640 463.998C640 455.123 632.875 447.998 624 447.998ZM320 415.998H608C625.625 415.998 640 401.623 640 383.998S625.625 351.998 608 351.998H320C302.375 351.998 288 366.373 288 383.998S302.375 415.998 320 415.998ZM319.25 319.998H608.75C634.125 319.998 648.75 290.748 634.25 269.373C604.75 226.123 540 192.123 464 191.998S323.25 226.123 293.75 269.373C279.25 290.748 293.875 319.998 319.25 319.998ZM544 239.998C552.875 239.998 560 247.123 560 255.998S552.875 271.998 544 271.998S528 264.873 528 255.998S535.125 239.998 544 239.998ZM464 223.998C472.875 223.998 480 231.123 480 239.998S472.875 255.998 464 255.998S448 248.873 448 239.998S455.125 223.998 464 223.998ZM384 239.998C392.875 239.998 400 247.123 400 255.998S392.875 271.998 384 271.998S368 264.873 368 255.998S375.125 239.998 384 239.998Z" />
        </Icon>
    </>
}
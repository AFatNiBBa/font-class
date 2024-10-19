
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-check-dollar-pen` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/money-check-dollar-pen?s=duotone money-check-dollar-pen}
 * @preview ![money-check-dollar-pen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU4NS41NjggMTM1LjU2Mkw1NzMuMzE0IDE0Ny44MTZMNDQ4LjM5NSAyNzMuODI4QzQzOS40NDUgMjgyLjgzNCA0MjcuMDMzIDI4OCA0MTQuMzQgMjg4SDI4OEMyNzkuMTY0IDI4OCAyNzIgMjgwLjgzNiAyNzIgMjcyQzI3MiAyNjMuMTYyIDI3OS4xNjQgMjU2IDI4OCAyNTZIMzIwVjE5My42NkMzMjAgMTgwLjk3MyAzMjUuMTY0IDE2OC41NjIgMzM0LjE5OSAxNTkuNTc4TDM2Ni4wNTUgMTI4SDgwQzUzLjYgMTI4IDMyIDE0OS42IDMyIDE3NlY0NjRDMzIgNDkwLjQgNTMuNiA1MTIgODAgNTEySDU2MEM1ODYuNCA1MTIgNjA4IDQ5MC40IDYwOCA0NjRWMTc2QzYwOCAxNTkuMDA2IDU5OC45ODYgMTQ0LjA5OCA1ODUuNTY4IDEzNS41NjJaTTIzNy42MjUgMzYyLjEwOUMyMzQuMDIxIDM4Mi45MzQgMjE4LjI4MyAzOTYuNjMzIDE5Ni4wNDcgNDAxLjQzOVY0MTJDMTk2LjA0NyA0MjMuMDQ3IDE4Ny4wOTQgNDMyIDE3Ni4wNDcgNDMyUzE1Ni4wNDcgNDIzLjA0NyAxNTYuMDQ3IDQxMlY0MDAuOTQzQzE0Ny4zNCAzOTkuMDEgMTM4LjY3OCAzOTYuMTkxIDEzMC44OTEgMzkzLjM3NUwxMjYuODU5IDM5MS45MjJDMTE2LjQzOCAzODguMjM0IDExMSAzNzYuNzk3IDExNC43MDMgMzY2LjM5MUMxMTguMzkxIDM1NS45NjkgMTI5LjkwNiAzNTAuNTc4IDE0MC4yMzQgMzU0LjIzNEwxNDQuNDY5IDM1NS43NUMxNTIuMzEzIDM1OC41NzggMTYxLjIwMyAzNjEuNzk3IDE2OC4xNDEgMzYyLjgyOEMxODEuNzUgMzY0Ljk4NCAxOTYuODU5IDM2My4wNDcgMTk4LjIxOSAzNTUuMjgxQzE5OS4wNzggMzUwLjI4MSAxOTkuNTYzIDM0Ny41MzEgMTcwLjQ2OSAzMzkuMjAzTDE2NC43MTkgMzM3LjU0N0MxNDcuNDM4IDMzMi40NjkgMTA2Ljk4NCAzMjAuNTYzIDExNC4zNzUgMjc3Ljg5MUMxMTcuOTg4IDI1Ny4wMTQgMTMzLjcwNyAyNDMuMTIxIDE1Ni4wNDcgMjM4LjM0OFYyMjhDMTU2LjA0NyAyMTYuOTUzIDE2NSAyMDggMTc2LjA0NyAyMDhTMTk2LjA0NyAyMTYuOTUzIDE5Ni4wNDcgMjI4VjIzOC45NDlDMjAxLjQ4OCAyNDAuMTU0IDIwNy4zMiAyNDEuNzI1IDIxNC4zOTEgMjQ0LjE4OEMyMjQuODI4IDI0Ny43OTcgMjMwLjM1OSAyNTkuMTg4IDIyNi43MzQgMjY5LjYyNUMyMjMuMTI1IDI4MC4wNjMgMjExLjc1IDI4NS41OTQgMjAxLjI5NyAyODEuOTY5QzE5NS40NTMgMjc5Ljk1MyAxODkuMzEyIDI3OC4wMzEgMTgzLjczNCAyNzcuMTU2QzE3MC4yMzQgMjc1LjA0NyAxNTUuMTQxIDI3Ni45NjkgMTUzLjc4MSAyODQuNzE5QzE1My4wMzEgMjg5LjA5NCAxNTIuNDg0IDI5Mi4yNSAxNzYgMjk5LjE3MkwxODEuNDY5IDMwMC43NUMyMDMuNzAzIDMwNy4xMDkgMjQ1LjEwOSAzMTguOTM4IDIzNy42MjUgMzYyLjEwOVpNNTI4IDM4NEgyODhDMjc5LjE2NCAzODQgMjcyIDM3Ni44MzYgMjcyIDM2OEMyNzIgMzU5LjE2MiAyNzkuMTY0IDM1MiAyODggMzUySDUyOEM1MzYuODM4IDM1MiA1NDQgMzU5LjE2MiA1NDQgMzY4QzU0NCAzNzYuODM2IDUzNi44MzggMzg0IDUyOCAzODRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTUyOCAzNTJIMjg4QzI3OS4xNjQgMzUyIDI3MiAzNTkuMTYyIDI3MiAzNjhDMjcyIDM3Ni44MzYgMjc5LjE2NCAzODQgMjg4IDM4NEg1MjhDNTM2LjgzOCAzODQgNTQ0IDM3Ni44MzYgNTQ0IDM2OEM1NDQgMzU5LjE2MiA1MzYuODM4IDM1MiA1MjggMzUyWk0yODggMjg4SDMyMFYyNTZIMjg4QzI3OS4xNjQgMjU2IDI3MiAyNjMuMTYyIDI3MiAyNzJDMjcyIDI4MC44MzYgMjc5LjE2NCAyODggMjg4IDI4OFpNNjAwLjUgMzkuMzc1TDU2OC42MjUgNy41QzU1OC43NSAtMi41IDU0Mi42MjUgLTIuNSA1MzIuNjI1IDcuNUw1MDUuMzc1IDM0Ljc1TDU3My4yNSAxMDIuNjI1TDYwMC41IDc1LjM3NUM2MTAuNSA2NS4zNzUgNjEwLjUgNDkuMjUgNjAwLjUgMzkuMzc1Wk0zNTYuNzI3IDE4Mi4zMDVDMzUzLjcwMSAxODUuMzEyIDM1MiAxODkuMzk4IDM1MiAxOTMuNjZWMjU2SDQxNC4zNEM0MTguNjA0IDI1NiA0MjIuNjg5IDI1NC4yOTcgNDI1LjY5MyAyNTEuMjczTDU1MC42MjUgMTI1LjI1TDQ4Mi43NSA1Ny4zNzVMMzU2LjcyNyAxODIuMzA1WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const MoneyCheckDollarPen: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M585.568 135.562L573.314 147.816L448.395 273.828C439.445 282.834 427.033 288 414.34 288H288C279.164 288 272 280.836 272 272C272 263.162 279.164 256 288 256H320V193.66C320 180.973 325.164 168.562 334.199 159.578L366.055 128H80C53.6 128 32 149.6 32 176V464C32 490.4 53.6 512 80 512H560C586.4 512 608 490.4 608 464V176C608 159.006 598.986 144.098 585.568 135.562ZM237.625 362.109C234.021 382.934 218.283 396.633 196.047 401.439V412C196.047 423.047 187.094 432 176.047 432S156.047 423.047 156.047 412V400.943C147.34 399.01 138.678 396.191 130.891 393.375L126.859 391.922C116.438 388.234 111 376.797 114.703 366.391C118.391 355.969 129.906 350.578 140.234 354.234L144.469 355.75C152.313 358.578 161.203 361.797 168.141 362.828C181.75 364.984 196.859 363.047 198.219 355.281C199.078 350.281 199.563 347.531 170.469 339.203L164.719 337.547C147.438 332.469 106.984 320.563 114.375 277.891C117.988 257.014 133.707 243.121 156.047 238.348V228C156.047 216.953 165 208 176.047 208S196.047 216.953 196.047 228V238.949C201.488 240.154 207.32 241.725 214.391 244.188C224.828 247.797 230.359 259.188 226.734 269.625C223.125 280.063 211.75 285.594 201.297 281.969C195.453 279.953 189.312 278.031 183.734 277.156C170.234 275.047 155.141 276.969 153.781 284.719C153.031 289.094 152.484 292.25 176 299.172L181.469 300.75C203.703 307.109 245.109 318.938 237.625 362.109ZM528 384H288C279.164 384 272 376.836 272 368C272 359.162 279.164 352 288 352H528C536.838 352 544 359.162 544 368C544 376.836 536.838 384 528 384Z" />
            <path d="M528 352H288C279.164 352 272 359.162 272 368C272 376.836 279.164 384 288 384H528C536.838 384 544 376.836 544 368C544 359.162 536.838 352 528 352ZM288 288H320V256H288C279.164 256 272 263.162 272 272C272 280.836 279.164 288 288 288ZM600.5 39.375L568.625 7.5C558.75 -2.5 542.625 -2.5 532.625 7.5L505.375 34.75L573.25 102.625L600.5 75.375C610.5 65.375 610.5 49.25 600.5 39.375ZM356.727 182.305C353.701 185.312 352 189.398 352 193.66V256H414.34C418.604 256 422.689 254.297 425.693 251.273L550.625 125.25L482.75 57.375L356.727 182.305Z" />
    </Icon>
);

export default MoneyCheckDollarPen;
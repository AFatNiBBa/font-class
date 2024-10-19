
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-dollar` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-dollar?s=duotone square-dollar}
 * @preview ![square-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTIgMCA5NlY0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwSDM4NEM0MTkuMzQ2IDQ4MCA0NDggNDUxLjM0NiA0NDggNDE2Vjk2QzQ0OCA2MC42NTIgNDE5LjM0NiAzMiAzODQgMzJaTTMxMC43NjQgMzE0LjI4MUMzMDUuNDUxIDM0Mi43MDEgMjgxLjczOCAzNjEuNDIyIDI0OC4wNDUgMzY2LjgxOFYzODRDMjQ4LjA0NSAzOTcuMjUgMjM3LjI5NSA0MDggMjI0LjA0NSA0MDhTMjAwLjA0NSAzOTcuMjUgMjAwLjA0NSAzODRWMzY1LjkzOUMxODUuOTU1IDM2My41MSAxNzEuNTkgMzU5IDE1OC43OTUgMzU0LjczNEwxNTIuNTE0IDM1Mi42NTZDMTM5LjkyIDM0OC41MzEgMTMzLjA0NSAzMzQuOTY5IDEzNy4xNyAzMjIuMzc1UzE1NC45MiAzMDIuOTIyIDE2Ny40NTEgMzA3LjAzMUwxNzMuOTUxIDMwOS4xODdDMTg2LjA3NiAzMTMuMjE5IDE5OS43OTUgMzE3Ljc4MSAyMTAuOTUxIDMxOS4zNDRDMjM4LjgyNiAzMjMuMzU5IDI2MS4zMjYgMzE3LjM1OSAyNjMuNTc2IDMwNS40MzdDMjY1LjM4OSAyOTUuODI4IDI2MS43MzIgMjkwLjc2NiAyMTcuNzk1IDI3OS4xNTZMMjA5LjIwMSAyNzYuODc1QzE4NC40ODIgMjcwLjE1NiAxMjYuNTc2IDI1NC40NjkgMTM3LjIwMSAxOTcuNzE5QzE0Mi41MjMgMTY5LjI4MyAxNjYuMjY2IDE1MC41MjEgMjAwLjA0NSAxNDUuMTU2VjEyOEMyMDAuMDQ1IDExNC43NSAyMTAuNzk1IDEwNCAyMjQuMDQ1IDEwNFMyNDguMDQ1IDExNC43NSAyNDguMDQ1IDEyOFYxNDYuMDAyQzI1Ni45OTggMTQ3LjU2OCAyNjYuODkxIDE0OS45ODQgMjc5LjI2NCAxNTMuOTM3QzI5MS44ODkgMTU3Ljk1MyAyOTguODg5IDE3MS40NjkgMjk0Ljg1NyAxODQuMDk0QzI5MC44NTcgMTk2LjcxOSAyNzcuMzI2IDIwMy43NSAyNjQuNzAxIDE5OS42NTZDMjUzLjEzOSAxOTUuOTY5IDI0NC4wMTQgMTkzLjY3MiAyMzYuODU3IDE5Mi42NDFDMjA5LjI5NSAxODguNzAzIDE4Ni42MDcgMTk0LjYyNSAxODQuMzg5IDIwNi41NjJDMTgzLjA0NSAyMTMuNjI1IDE4MS45MiAyMTkuNzM0IDIyMS43NjQgMjMwLjU0N0wyMzAuMDQ1IDIzMi43NUMyNjQuMjY0IDI0MS43ODEgMzIxLjUxNCAyNTYuOTA2IDMxMC43NjQgMzE0LjI4MVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzEwLjg1IDMxNC4yODFDMzA1LjUzNyAzNDIuNzAxIDI4MS44MjUgMzYxLjQyMiAyNDguMTMxIDM2Ni44MThWMzg0QzI0OC4xMzEgMzk3LjI1IDIzNy4zODEgNDA4IDIyNC4xMzEgNDA4UzIwMC4xMzEgMzk3LjI1IDIwMC4xMzEgMzg0VjM2NS45MzlDMTg2LjA0MSAzNjMuNTEgMTcxLjY3NiAzNTkgMTU4Ljg4MSAzNTQuNzM0TDE1Mi42IDM1Mi42NTZDMTQwLjAwNiAzNDguNTMxIDEzMy4xMzEgMzM0Ljk2OSAxMzcuMjU2IDMyMi4zNzVTMTU1LjAwNiAzMDIuOTIyIDE2Ny41MzcgMzA3LjAzMUwxNzQuMDM3IDMwOS4xODdDMTg2LjE2MiAzMTMuMjE5IDE5OS44ODEgMzE3Ljc4MSAyMTEuMDM3IDMxOS4zNDRDMjM4LjkxMiAzMjMuMzU5IDI2MS40MTIgMzE3LjM1OSAyNjMuNjYyIDMwNS40MzdDMjY1LjQ3NSAyOTUuODI4IDI2MS44MTkgMjkwLjc2NiAyMTcuODgxIDI3OS4xNTZMMjA5LjI4NyAyNzYuODc1QzE4NC41NjkgMjcwLjE1NiAxMjYuNjYyIDI1NC40NjkgMTM3LjI4NyAxOTcuNzE5QzE0Mi42MSAxNjkuMjgzIDE2Ni4zNTIgMTUwLjUyMSAyMDAuMTMxIDE0NS4xNTZWMTI4QzIwMC4xMzEgMTE0Ljc1IDIxMC44ODEgMTA0IDIyNC4xMzEgMTA0UzI0OC4xMzEgMTE0Ljc1IDI0OC4xMzEgMTI4VjE0Ni4wMDJDMjU3LjA4NCAxNDcuNTY4IDI2Ni45NzcgMTQ5Ljk4NCAyNzkuMzUgMTUzLjkzN0MyOTEuOTc1IDE1Ny45NTMgMjk4Ljk3NSAxNzEuNDY5IDI5NC45NDQgMTg0LjA5NEMyOTAuOTQ0IDE5Ni43MTkgMjc3LjQxMiAyMDMuNzUgMjY0Ljc4NyAxOTkuNjU2QzI1My4yMjUgMTk1Ljk2OSAyNDQuMSAxOTMuNjcyIDIzNi45NDQgMTkyLjY0MUMyMDkuMzgxIDE4OC43MDMgMTg2LjY5NCAxOTQuNjI1IDE4NC40NzUgMjA2LjU2MkMxODMuMTMxIDIxMy42MjUgMTgyLjAwNiAyMTkuNzM0IDIyMS44NSAyMzAuNTQ3TDIzMC4xMzEgMjMyLjc1QzI2NC4zNSAyNDEuNzgxIDMyMS42IDI1Ni45MDYgMzEwLjg1IDMxNC4yODFaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const SquareDollar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M384 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.652 419.346 32 384 32ZM310.764 314.281C305.451 342.701 281.738 361.422 248.045 366.818V384C248.045 397.25 237.295 408 224.045 408S200.045 397.25 200.045 384V365.939C185.955 363.51 171.59 359 158.795 354.734L152.514 352.656C139.92 348.531 133.045 334.969 137.17 322.375S154.92 302.922 167.451 307.031L173.951 309.187C186.076 313.219 199.795 317.781 210.951 319.344C238.826 323.359 261.326 317.359 263.576 305.437C265.389 295.828 261.732 290.766 217.795 279.156L209.201 276.875C184.482 270.156 126.576 254.469 137.201 197.719C142.523 169.283 166.266 150.521 200.045 145.156V128C200.045 114.75 210.795 104 224.045 104S248.045 114.75 248.045 128V146.002C256.998 147.568 266.891 149.984 279.264 153.937C291.889 157.953 298.889 171.469 294.857 184.094C290.857 196.719 277.326 203.75 264.701 199.656C253.139 195.969 244.014 193.672 236.857 192.641C209.295 188.703 186.607 194.625 184.389 206.562C183.045 213.625 181.92 219.734 221.764 230.547L230.045 232.75C264.264 241.781 321.514 256.906 310.764 314.281Z" />
            <path d="M310.85 314.281C305.537 342.701 281.825 361.422 248.131 366.818V384C248.131 397.25 237.381 408 224.131 408S200.131 397.25 200.131 384V365.939C186.041 363.51 171.676 359 158.881 354.734L152.6 352.656C140.006 348.531 133.131 334.969 137.256 322.375S155.006 302.922 167.537 307.031L174.037 309.187C186.162 313.219 199.881 317.781 211.037 319.344C238.912 323.359 261.412 317.359 263.662 305.437C265.475 295.828 261.819 290.766 217.881 279.156L209.287 276.875C184.569 270.156 126.662 254.469 137.287 197.719C142.61 169.283 166.352 150.521 200.131 145.156V128C200.131 114.75 210.881 104 224.131 104S248.131 114.75 248.131 128V146.002C257.084 147.568 266.977 149.984 279.35 153.937C291.975 157.953 298.975 171.469 294.944 184.094C290.944 196.719 277.412 203.75 264.787 199.656C253.225 195.969 244.1 193.672 236.944 192.641C209.381 188.703 186.694 194.625 184.475 206.562C183.131 213.625 182.006 219.734 221.85 230.547L230.131 232.75C264.35 241.781 321.6 256.906 310.85 314.281Z" />
    </Icon>
);

export default SquareDollar;
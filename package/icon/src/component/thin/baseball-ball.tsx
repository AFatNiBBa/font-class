
import { Icon } from "../../index";

/**
 * A component that renders the `baseball-ball` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/baseball-ball?s=thin baseball-ball}
 * @preview ![baseball-ball](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzIuODM3IDg2LjI5NUMzMzkuMTExIC03LjQzMiAxODcuMTU0IC03LjQzMiA5My40MjcgODYuMjk1Uy0wLjMgMzMxLjk3OSA5My40MjcgNDI1LjcwNVMzMzkuMTExIDUxOS40MzIgNDMyLjgzNyA0MjUuNzA1UzUyNi41NjQgMTgwLjAyMSA0MzIuODM3IDg2LjI5NVpNNDY0Ljk2MiAyODQuMDE0QzQ3MS43MzkgMjg0LjI0OCA0NzguMjAyIDI4NS40ODYgNDg0LjY4NSAyODYuNjM1QzQ3OC4yNzkgMzMzLjM5MSA0NTcuMzkyIDM3OC41MjMgNDIxLjUyNSA0MTQuMzkzQzM4NS42NTUgNDUwLjI2MiAzNDAuNTE5IDQ3MS4xNDggMjkzLjc2MSA0NzcuNTU1QzI5Mi41ODEgNDcwLjczNiAyOTEuMzM3IDQ2My45MzQgMjkxLjEzNCA0NTYuODAxQzI5MS4wMDEgNDUyLjM1OSAyODcuMzIzIDQ0OC45MjQgMjgyLjkxNSA0NDkuMDIzQzI3OC40OTUgNDQ5LjE1NiAyNzUuMDE1IDQ1Mi44MzYgMjc1LjEzNiA0NTcuMjQ0QzI3NS4zNTEgNDY0Ljc4MSAyNzYuNjQ4IDQ3MS45OCAyNzcuODcgNDc5LjE5M0MyMTUuNjk4IDQ4My4yNiAxNTIuMTU0IDQ2MS44MDUgMTA0LjczOSA0MTQuMzkzQzU3LjM4NCAzNjcuMDM3IDM1LjkzMSAzMDMuNTg4IDM5LjkyOSAyNDEuNDg4QzQ2LjczNyAyNDIuNjgyIDUzLjU4MyAyNDMuNzcxIDYwLjY5NSAyNDQuMDE4QzY1LjExNCAyNDQuMTcyIDY4LjgxNiAyNDAuNzE1IDY4Ljk2IDIzNi4zMDdDNjkuMTI0IDIzMS44OTggNjUuNjU1IDIyOC4xODYgNjEuMjQ3IDIyOC4wNDFDNTQuNDg2IDIyNy44MDcgNDguMDM4IDIyNi41NzQgNDEuNTcgMjI1LjQyOEM0Ny45NjggMTc4LjY0OCA2OC44NTcgMTMzLjQ5IDEwNC43MzkgOTcuNjA3QzE0MC41OTUgNjEuNzU0IDE4NS43MDggNDAuODY5IDIzMi40NDMgMzQuNDUzQzIzMy42MjYgNDEuMjg5IDIzNC44NyA0OC4xMDcgMjM1LjA3MyA1NS4yNTRDMjM1LjIwNiA1OS42OTUgMjM4Ljg4NiA2My4xMzEgMjQzLjI5NCA2My4wMzFDMjQ3LjcxNCA2Mi44OTggMjUxLjE5NSA1OS4yMjEgMjUxLjA3MyA1NC44MTJDMjUwLjg1NyA0Ny4yNTYgMjQ5LjU1NiA0MC4wNDMgMjQ4LjMzMSAzMi44MTFDMzEwLjUyMyAyOC43MjcgMzc0LjA5NSA1MC4xOCA0MjEuNTI1IDk3LjYwN0M0NjguODk2IDE0NC45OCA0OTAuMzQ5IDIwOC40NTUgNDg2LjMzMSAyNzAuNTc2QzQ3OS41MDUgMjY5LjM3OSA0NzIuNjQ0IDI2OC4yODUgNDY1LjUxMyAyNjguMDM3QzQ2MS4wOTUgMjY3Ljg4MyA0NTcuMzk0IDI3MS4zNDIgNDU3LjI0OSAyNzUuNzVDNDU3LjA4MyAyODAuMTU4IDQ2MC41NTQgMjgzLjg2OSA0NjQuOTYyIDI4NC4wMTRaTTI0MS4wMDcgODguNzQyQzIzNi42NzcgODcuODM2IDIzMi40NDUgOTAuNjA5IDIzMS41MjkgOTQuOTNDMjI2Ljk1NCAxMTYuNjcyIDIxOC4yMjYgMTM3LjAwMiAyMDUuNTY0IDE1NS4zNDJDMjAzLjA3NyAxNTguOTc3IDIwMy45NzIgMTYzLjg5NSAyMDcuNjE4IDE2Ni40NzlDMjExLjI2NSAxNjguOTc3IDIxNi4yMzYgMTY4LjA3IDIxOC43NTUgMTY0LjQyNEMyMzIuNTk5IDE0NC4zMjYgMjQyLjE2NyAxMjIuMDUzIDI0Ny4xOTUgOTguMjIxQzI0Ny43NjkgOTUuNDggMjQ2Ljg2MiA5Mi43NjQgMjQ1LjAxOSA5MC45MThDMjQzLjk1OCA4OS44NTcgMjQyLjU4NyA4OS4wODQgMjQxLjAwNyA4OC43NDJaTTE3Mi41NSAxOTkuNDcxQzE2OS44NzYgMTk2Ljc5NyAxNjUuNTg5IDE5Ni4zMzIgMTYyLjM2NCAxOTguNTQzQzE0NC4wMjMgMjExLjIwMyAxMjMuNjk1IDIxOS45MzIgMTAxLjk1IDIyNC41MDZDOTcuNjMgMjI1LjQyNCA5NC44NTcgMjI5LjY1NCA5NS43NjMgMjMzLjk4NkM5Ni42OTEgMjM4LjI3MyAxMDAuOTExIDI0MS4wNTcgMTA1LjI0MyAyNDAuMTc0QzEyOS4wNzUgMjM1LjE0NiAxNTEuMzQ5IDIyNS41NzggMTcxLjQ0NiAyMTEuNzM0QzE3NS4wOTEgMjA5LjIxNSAxNzUuOTk3IDIwNC4yNDIgMTczLjUwMSAyMDAuNTk4QzE3My4yMDIgMjAwLjE4OCAxNzIuODk0IDE5OS44MTIgMTcyLjU1IDE5OS40NzFaTTQyMC45NjYgMjcxLjg4M0MzOTcuMTM0IDI3Ni45MSAzNzQuODYxIDI4Ni40NzcgMzU0Ljc2MyAzMDAuMzJDMzUxLjExNiAzMDIuODQgMzUwLjIxIDMwNy44MTMgMzUyLjcwOCAzMTEuNDU5QzM1My4wMDcgMzExLjg2NyAzNTMuMzE2IDMxMi4yNDIgMzUzLjY1NyAzMTIuNTg2QzM1Ni4zMzEgMzE1LjI2IDM2MC42MTggMzE1LjcyMyAzNjMuODQ1IDMxMy41MTRDMzgyLjE4NSAzMDAuODUyIDQwMi41MTUgMjkyLjEyMyA0MjQuMjU5IDI4Ny41NDlDNDI4LjU3OSAyODYuNjMzIDQzMS4zNTEgMjgyLjQgNDMwLjQ0NiAyNzguMDdDNDI5LjUxNyAyNzMuNzgzIDQyNS4yOTYgMjcwLjk5OCA0MjAuOTY2IDI3MS44ODNaTTMwNy40NTIgMzQ3LjYzMUMyOTMuNjA5IDM2Ny43MjkgMjg0LjA0MiAzOTAuMDAyIDI3OS4wMTUgNDEzLjgzNEMyNzguNDQxIDQxNi41NzQgMjc5LjM0NSA0MTkuMjkxIDI4MS4xOTEgNDIxLjEzN0MyODIuMjUxIDQyMi4xOTcgMjgzLjYyMiA0MjIuOTcxIDI4NS4yMDIgNDIzLjMxNEMyODkuNTMyIDQyNC4yMTkgMjkzLjc2NSA0MjEuNDQ3IDI5NC42ODEgNDE3LjEyN0MyOTkuMjU1IDM5NS4zODMgMzA3Ljk4NCAzNzUuMDUzIDMyMC42NDYgMzU2LjcxM0MzMjMuMTMyIDM1My4wNzggMzIyLjIzNiAzNDguMTYyIDMxOC41OTEgMzQ1LjU3NkMzMTQuOTQ1IDM0My4wNzggMzA5Ljk3MiAzNDMuOTg0IDMwNy40NTIgMzQ3LjYzMVoiLz48L3N2Zz4=|width=32|height=32)
 */
const BaseballBall: typeof Icon = x => (
    <Icon {...x}>
        <path d="M432.837 86.295C339.111 -7.432 187.154 -7.432 93.427 86.295S-0.3 331.979 93.427 425.705S339.111 519.432 432.837 425.705S526.564 180.021 432.837 86.295ZM464.962 284.014C471.739 284.248 478.202 285.486 484.685 286.635C478.279 333.391 457.392 378.523 421.525 414.393C385.655 450.262 340.519 471.148 293.761 477.555C292.581 470.736 291.337 463.934 291.134 456.801C291.001 452.359 287.323 448.924 282.915 449.023C278.495 449.156 275.015 452.836 275.136 457.244C275.351 464.781 276.648 471.98 277.87 479.193C215.698 483.26 152.154 461.805 104.739 414.393C57.384 367.037 35.931 303.588 39.929 241.488C46.737 242.682 53.583 243.771 60.695 244.018C65.114 244.172 68.816 240.715 68.96 236.307C69.124 231.898 65.655 228.186 61.247 228.041C54.486 227.807 48.038 226.574 41.57 225.428C47.968 178.648 68.857 133.49 104.739 97.607C140.595 61.754 185.708 40.869 232.443 34.453C233.626 41.289 234.87 48.107 235.073 55.254C235.206 59.695 238.886 63.131 243.294 63.031C247.714 62.898 251.195 59.221 251.073 54.812C250.857 47.256 249.556 40.043 248.331 32.811C310.523 28.727 374.095 50.18 421.525 97.607C468.896 144.98 490.349 208.455 486.331 270.576C479.505 269.379 472.644 268.285 465.513 268.037C461.095 267.883 457.394 271.342 457.249 275.75C457.083 280.158 460.554 283.869 464.962 284.014ZM241.007 88.742C236.677 87.836 232.445 90.609 231.529 94.93C226.954 116.672 218.226 137.002 205.564 155.342C203.077 158.977 203.972 163.895 207.618 166.479C211.265 168.977 216.236 168.07 218.755 164.424C232.599 144.326 242.167 122.053 247.195 98.221C247.769 95.48 246.862 92.764 245.019 90.918C243.958 89.857 242.587 89.084 241.007 88.742ZM172.55 199.471C169.876 196.797 165.589 196.332 162.364 198.543C144.023 211.203 123.695 219.932 101.95 224.506C97.63 225.424 94.857 229.654 95.763 233.986C96.691 238.273 100.911 241.057 105.243 240.174C129.075 235.146 151.349 225.578 171.446 211.734C175.091 209.215 175.997 204.242 173.501 200.598C173.202 200.188 172.894 199.812 172.55 199.471ZM420.966 271.883C397.134 276.91 374.861 286.477 354.763 300.32C351.116 302.84 350.21 307.813 352.708 311.459C353.007 311.867 353.316 312.242 353.657 312.586C356.331 315.26 360.618 315.723 363.845 313.514C382.185 300.852 402.515 292.123 424.259 287.549C428.579 286.633 431.351 282.4 430.446 278.07C429.517 273.783 425.296 270.998 420.966 271.883ZM307.452 347.631C293.609 367.729 284.042 390.002 279.015 413.834C278.441 416.574 279.345 419.291 281.191 421.137C282.251 422.197 283.622 422.971 285.202 423.314C289.532 424.219 293.765 421.447 294.681 417.127C299.255 395.383 307.984 375.053 320.646 356.713C323.132 353.078 322.236 348.162 318.591 345.576C314.945 343.078 309.972 343.984 307.452 347.631Z" />
    </Icon>
);

export default BaseballBall;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-dollar` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-dollar?s=duotone message-dollar}
 * @preview ![message-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0OCAwSDY0QzI4LjYyNSAwIDAgMjguNjIzIDAgNjMuOTk4VjM1MS45OUMwIDM4Ny4zNjMgMjguNjI1IDQxNS45ODggNjQgNDE1Ljk4OEgxNjBWNDk5Ljk4NkMxNjAgNTA5Ljg1OSAxNzEuMjUgNTE1LjQ4NCAxNzkuMTI1IDUwOS42MDlMMzA0IDQxNS45ODhINDQ4QzQ4My4zNzUgNDE1Ljk4OCA1MTIgMzg3LjM2MyA1MTIgMzUxLjk5VjYzLjk5OEM1MTIgMjguNjIzIDQ4My4zNzUgMCA0NDggMFpNMzI2LjY2MiAyNTYuMzU3QzMyMi41MjEgMjgwLjI1IDMwNC40MTQgMjk1Ljk0NSAyNzguODU5IDMwMS40MjRWMzEzLjE0M0MyNzguODU5IDMyNS43NSAyNjguNjI3IDMzNiAyNTYuMDAyIDMzNlMyMzMuMTQ1IDMyNS43NSAyMzMuMTQ1IDMxMy4xNDNWMzAwLjgzNEMyMjMuMjIzIDI5OC42MzkgMjEzLjM2NyAyOTUuNDM4IDIwNC41MDIgMjkyLjI1TDE5OS42MjcgMjkwLjUzNUMxODcuNzE1IDI4Ni4zMiAxODEuNDgyIDI3My4yNSAxODUuNjggMjYxLjM1N0MxODkuODk1IDI0OS40NjMgMjAyLjk0NyAyNDMuMjg1IDIxNC44NCAyNDcuMzkzTDIxOS45NDcgMjQ5LjI1QzIyOC45MTIgMjUyLjQ2MyAyMzkuMDU1IDI1Ni4xMDcgMjQ2Ljk4NCAyNTcuMjg1QzI2Mi42NjIgMjU5LjcxMyAyODAuMDU1IDI1Ny41IDI4MS42MjcgMjQ4LjU3QzI4Mi42MjcgMjQyLjc1IDI4My4xOCAyMzkuNTM1IDI0OS43MTUgMjI5Ljk2M0wyNDMuMDcyIDIyOC4wMzVDMjIzLjI3IDIyMi4yMTMgMTc2Ljg3NyAyMDguNjA3IDE4NS4zNCAxNTkuNjQzQzE4OS40OTYgMTM1LjcxMyAyMDcuNTIgMTE5LjcyNyAyMzMuMTQ1IDExNC4yNzVWMTAyLjg1N0MyMzMuMTQ1IDkwLjI1IDI0My4zNzcgODAgMjU2LjAwMiA4MFMyNzguODU5IDkwLjI1IDI3OC44NTkgMTAyLjg1N1YxMTUuMDA4QzI4NS4wOSAxMTYuMzc1IDI5MS44MjIgMTE4LjE5NSAzMDAuMDcyIDEyMS4wMzVDMzEyLjAwMiAxMjUuMTc4IDMxOC4zMDUgMTM4LjIxMyAzMTQuMTYyIDE1MC4xNDNDMzEwLjAyIDE2Mi4wMzUgMjk2Ljk0NyAxNjguMzU3IDI4NS4wNzIgMTY0LjI1QzI3OC4zNzcgMTYxLjkyOCAyNzEuMzU5IDE1OS42NzggMjY0Ljk2NSAxNTguNzEzQzI0OS4zNCAxNTYuMzIgMjMxLjk0NyAxNTguNSAyMzAuMzc3IDE2Ny40MjhDMjI5LjUwMiAxNzIuNTM1IDIyOC44NTkgMTc2LjIxMyAyNTUuOTQ3IDE4NC4xNzhMMjYyLjI4NyAxODZDMjg3Ljc3IDE5My4yODUgMzM1LjIxNyAyMDYuODkzIDMyNi42NjIgMjU2LjM1N1oiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzI2LjM0MyAyNTYuMzU3QzMyMi4yMDIgMjgwLjI1IDMwNC4wOTQgMjk1Ljk0NSAyNzguNTQgMzAxLjQyNFYzMTMuMTQzQzI3OC41NCAzMjUuNzUgMjY4LjMwNyAzMzYgMjU1LjY4MiAzMzZTMjMyLjgyNSAzMjUuNzUgMjMyLjgyNSAzMTMuMTQzVjMwMC44MzRDMjIyLjkwMyAyOTguNjM5IDIxMy4wNDggMjk1LjQzOCAyMDQuMTgyIDI5Mi4yNUwxOTkuMzA3IDI5MC41MzVDMTg3LjM5NSAyODYuMzIgMTgxLjE2MyAyNzMuMjUgMTg1LjM2IDI2MS4zNTdDMTg5LjU3NSAyNDkuNDYzIDIwMi42MjggMjQzLjI4NSAyMTQuNTIgMjQ3LjM5M0wyMTkuNjI4IDI0OS4yNUMyMjguNTkzIDI1Mi40NjMgMjM4LjczNSAyNTYuMTA3IDI0Ni42NjUgMjU3LjI4NUMyNjIuMzQzIDI1OS43MTMgMjc5LjczNSAyNTcuNSAyODEuMzA3IDI0OC41N0MyODIuMzA3IDI0Mi43NSAyODIuODYgMjM5LjUzNSAyNDkuMzk1IDIyOS45NjNMMjQyLjc1MyAyMjguMDM1QzIyMi45NSAyMjIuMjEzIDE3Ni41NTcgMjA4LjYwNyAxODUuMDIgMTU5LjY0M0MxODkuMTc2IDEzNS43MTMgMjA3LjIgMTE5LjcyNyAyMzIuODI1IDExNC4yNzVWMTAyLjg1N0MyMzIuODI1IDkwLjI1IDI0My4wNTcgODAgMjU1LjY4MiA4MFMyNzguNTQgOTAuMjUgMjc4LjU0IDEwMi44NTdWMTE1LjAwOEMyODQuNzcgMTE2LjM3NSAyOTEuNTAzIDExOC4xOTUgMjk5Ljc1MyAxMjEuMDM1QzMxMS42ODIgMTI1LjE3OCAzMTcuOTg1IDEzOC4yMTMgMzEzLjg0MiAxNTAuMTQzQzMwOS43IDE2Mi4wMzUgMjk2LjYyOCAxNjguMzU3IDI4NC43NTMgMTY0LjI1QzI3OC4wNTcgMTYxLjkyOCAyNzEuMDQgMTU5LjY3OCAyNjQuNjQ1IDE1OC43MTNDMjQ5LjAyIDE1Ni4zMiAyMzEuNjI4IDE1OC41IDIzMC4wNTcgMTY3LjQyOEMyMjkuMTgyIDE3Mi41MzUgMjI4LjU0IDE3Ni4yMTMgMjU1LjYyOCAxODQuMTc4TDI2MS45NjggMTg2QzI4Ny40NSAxOTMuMjg1IDMzNC44OTcgMjA2Ljg5MyAzMjYuMzQzIDI1Ni4zNTdaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const MessageDollar: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M448 0H64C28.625 0 0 28.623 0 63.998V351.99C0 387.363 28.625 415.988 64 415.988H160V499.986C160 509.859 171.25 515.484 179.125 509.609L304 415.988H448C483.375 415.988 512 387.363 512 351.99V63.998C512 28.623 483.375 0 448 0ZM326.662 256.357C322.521 280.25 304.414 295.945 278.859 301.424V313.143C278.859 325.75 268.627 336 256.002 336S233.145 325.75 233.145 313.143V300.834C223.223 298.639 213.367 295.438 204.502 292.25L199.627 290.535C187.715 286.32 181.482 273.25 185.68 261.357C189.895 249.463 202.947 243.285 214.84 247.393L219.947 249.25C228.912 252.463 239.055 256.107 246.984 257.285C262.662 259.713 280.055 257.5 281.627 248.57C282.627 242.75 283.18 239.535 249.715 229.963L243.072 228.035C223.27 222.213 176.877 208.607 185.34 159.643C189.496 135.713 207.52 119.727 233.145 114.275V102.857C233.145 90.25 243.377 80 256.002 80S278.859 90.25 278.859 102.857V115.008C285.09 116.375 291.822 118.195 300.072 121.035C312.002 125.178 318.305 138.213 314.162 150.143C310.02 162.035 296.947 168.357 285.072 164.25C278.377 161.928 271.359 159.678 264.965 158.713C249.34 156.32 231.947 158.5 230.377 167.428C229.502 172.535 228.859 176.213 255.947 184.178L262.287 186C287.77 193.285 335.217 206.893 326.662 256.357Z" />
            <path d="M326.343 256.357C322.202 280.25 304.094 295.945 278.54 301.424V313.143C278.54 325.75 268.307 336 255.682 336S232.825 325.75 232.825 313.143V300.834C222.903 298.639 213.048 295.438 204.182 292.25L199.307 290.535C187.395 286.32 181.163 273.25 185.36 261.357C189.575 249.463 202.628 243.285 214.52 247.393L219.628 249.25C228.593 252.463 238.735 256.107 246.665 257.285C262.343 259.713 279.735 257.5 281.307 248.57C282.307 242.75 282.86 239.535 249.395 229.963L242.753 228.035C222.95 222.213 176.557 208.607 185.02 159.643C189.176 135.713 207.2 119.727 232.825 114.275V102.857C232.825 90.25 243.057 80 255.682 80S278.54 90.25 278.54 102.857V115.008C284.77 116.375 291.503 118.195 299.753 121.035C311.682 125.178 317.985 138.213 313.842 150.143C309.7 162.035 296.628 168.357 284.753 164.25C278.057 161.928 271.04 159.678 264.645 158.713C249.02 156.32 231.628 158.5 230.057 167.428C229.182 172.535 228.54 176.213 255.628 184.178L261.968 186C287.45 193.285 334.897 206.893 326.343 256.357Z" />
    </Icon>
);

export default MessageDollar;
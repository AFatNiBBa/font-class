
import { Icon } from "../../index";

/**
 * A component that renders the `hands` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hands?s=light hands}
 * @preview ![hands](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgMTI4LjAzNUM0NTIuMzkgMTI4LjAzNSA0NDEuNzMgMTMyLjE3OSA0MzMuNDIgMTM5LjA2M0wzOTcuNTcgNDAuNTc0QzM5MC41MTcgMjEuMTk5IDM3Mi4yMjQgOC4xODEgMzUyLjA0OCA4LjE4MUMzNDkuMTY1IDguMTgxIDM0Ni4yNTEgOC40NDYgMzQzLjMyNyA5LjAwM0MzMzQuNTg5IDEwLjY2MSAzMjYuNjE0IDE0LjY0NyAzMjAuMTYzIDIwLjQxNEMzMTEuMTUxIDcuODQ3IDI5Ni42MyAwLjAwNCAyODAuOTc0IDBIMjgwLjk1OEMyNzguMDc1IDAgMjc1LjE2MSAwLjI2OCAyNzIuMjM1IDAuODI0QzI1OC4zMjEgMy40NjUgMjQ2LjMzNSAxMi4wMTMgMjM5LjM2NCAyNC4yNzFDMjM0LjUyMiAzMi43ODQgMjMyLjQ0OCA0Mi40MzggMjMzLjI0NSA1MS45OEMyMzIuNzUzIDUxLjk2NCAyMzIuMjU4IDUxLjk1NiAyMzEuNzY0IDUxLjk1NkMyMjguODgzIDUxLjk1NiAyMjUuOTczIDUyLjIyIDIyMy4wNTEgNTIuNzc0QzIwOS4xMTggNTUuNDIzIDE5Ny4xMzUgNjMuOTczIDE5MC4xNjUgNzYuMjMxQzE4NS4zMjcgODQuNzQyIDE4My4yNTIgOTQuMzk2IDE4NC4wNDkgMTAzLjkzNEMxODMuNTU3IDEwMy45MTggMTgzLjA2NSAxMDMuOTEgMTgyLjU3MSAxMDMuOTFDMTc5LjY4OCAxMDMuOTEgMTc2Ljc3MiAxMDQuMTc4IDE3My44NDggMTA0LjczM0MxNTUuMzIzIDEwOC4yNDggMTQwLjIyNyAxMjIuMjI1IDEzNS44MTMgMTQxLjQ4N0MxMzMuNjU4IDE1MC44ODcgMTM0LjgzMiAxNjAuNzU5IDEzOC4xMzEgMTY5LjgyMkwxMzkuMTA4IDE3Mi41MDZDMTQyLjcyMSAxODIuNDMxIDE1NC42OTIgMTg2LjMzMyAxNjMuNDYxIDE4MC40MzlDMTcwLjUzIDE3NS42ODkgMTcyLjczNSAxNjYuMjg5IDE2OC41MTYgMTU4Ljg5TDE2Ny42NTkgMTU3LjM4NkMxNjQuMzM0IDE0OC4yNTQgMTY5Ljg0NCAxMzguMDYyIDE3OS44MjMgMTM2LjE2N0MxODAuNzQzIDEzNS45OTEgMTgxLjY2MyAxMzUuOTA3IDE4Mi41NzEgMTM1LjkwN0MxODQuMjA2IDEzNS45MDcgMTg1Ljc0MyAxMzYuMjM4IDE4Ny4xODQgMTM2LjgxNkMxOTUuODQ0IDE0MC4yOTQgMjAyLjUwNiAxMzcuOTUgMjA0LjY3OCAxMzcuMTcxQzIxNi4xNTMgMTMzLjA1NiAyMjIuNDUyIDEyMC44MDcgMjE4LjI4MiAxMDkuMzUzTDIxNi44NTQgMTA1LjQzQzIxMy41MzIgOTYuMyAyMTkuMDQyIDg2LjEwNyAyMjkuMDE4IDg0LjIxMUMyMjkuOTM4IDg0LjAzNSAyMzAuODU2IDgzLjk1MyAyMzEuNzY0IDgzLjk1M0MyMzguNTc3IDgzLjk1MyAyNDQuODEzIDg4LjY4NSAyNDcuMjE4IDk1LjI5MkwyNjAuMjEyIDEzMC45OUMyNjEuODg5IDEzNS41OTcgMjY1LjU4NyAxMzkuMTgzIDI3MC4yNDcgMTQwLjcxNkMyODIuOTM1IDE0NC44ODkgMjk0Ljg1MSAxMzIuNTk3IDI5MC4yODIgMTIwLjA0NkwyNjYuMDUgNTMuNDc2QzI2Mi43MjcgNDQuMzQ2IDI2OC4yMzcgMzQuMTUxIDI3OC4yMTQgMzIuMjU3QzI3OS4xMzYgMzIuMDgxIDI4MC4wNTQgMzEuOTk3IDI4MC45NjQgMzEuOTk3QzI4Ny43NzQgMzEuOTk5IDI5NC4wMDkgMzYuNzMxIDI5Ni40MTUgNDMuMzM4TDMzNi45MDQgMTU0LjU2NEMzMzcuMDQ4IDE1NC45NjIgMzM5Ljc5NiAxNjMuNTk2IDM1MC4yMTggMTY0Ljg4M0MzNjEuOTQzIDE2Ni4zMzIgMzcwLjkxOSAxNTQuNDY4IDM2Ni44OCAxNDMuMzY4TDMzNy4xMzYgNjEuNjU2QzMzMy44MTIgNTIuNTI0IDMzOS4zMjEgNDIuMzMyIDM0OS4zIDQwLjQzOEMzNTAuMjIgNDAuMjYyIDM1MS4xNCA0MC4xNzggMzUyLjA0OCA0MC4xNzhDMzU4Ljg2MSA0MC4xNzggMzY1LjA5NSA0NC45MSAzNjcuNDk5IDUxLjUxOUw0MjEuMjM2IDE5OS4xNDRDNDIyLjI1MiAyMDEuOTMzIDQyNC4xNCAyMDQuMzIxIDQyNi42MjEgMjA1Ljk1MkM0MzUuNzk3IDIxMS45ODQgNDQ4IDIwNS40MDMgNDQ4IDE5NC40MjRWMTc2Ljg4NkM0NDggMTY4LjkxOCA0NTMuNDQ1IDE2MS41MzIgNDYxLjMxIDE2MC4yNTFDNDcxLjMzNiAxNTguNjIgNDgwIDE2Ni4zMTEgNDgwIDE3Ni4wMzFWMzA0LjI4M0M0ODAgMzEyLjk4NyA0ODcuMDY4IDMyMC4wMzcgNDk1Ljc3MSAzMjAuMDE4TDQ5Ni4yNCAzMjAuMDE2QzUwNC45MTYgMzE5Ljk5NiA1MTEuOTM5IDMxMi45NiA1MTEuOTQxIDMwNC4yODdMNTEyIDE3Ni4wNDJDNTExLjk5OCAxNDkuNTY0IDQ5MC40NjUgMTI4LjAzNSA0NjQgMTI4LjAzNVpNMzU5Ljk5NSAyMDMuOTE5TDI0Ny4xODYgMTY2LjgxNUMyNDIuODQxIDE2NS4yMTkgMjM3LjMyMSAxNjQuMjQ1IDIzMS43MTYgMTY0LjI0NUMyMTEuNjE0IDE2NC4yNDUgMTkzLjQ4OSAxNzYuOTM1IDE4Ni42MSAxOTUuODI0QzE4My4xOTIgMjA1LjIxOCAxODIuOTAxIDIxNS4wMDIgMTg1LjIgMjI0LjAyNkg4MC44NTVDNTYuNzAxIDIyNC4wMjYgMzYuNDIyIDI0MC45MTkgMzIuNjMzIDI2NC4xOTVDMzEuMjA1IDI3Mi45NTkgMzIuMjE5IDI4MS44IDM1LjQyMiAyODkuODI1QzE3LjUgMjk0Ljc2NCAzLjY5MSAzMDkuMzk2IDAuNjMyIDMyOC4xODlDLTEuNjQ1IDM0Mi4xNzYgMi4yOTEgMzU2LjM2IDExLjQyNyAzNjcuMTAzQzE3Ljc2NSAzNzQuNTU2IDI2LjEyMSAzNzkuODA1IDM1LjM0OSAzODIuMzJDMzQuMTExIDM4NS40NDcgMzMuMTkxIDM4OC43NDYgMzIuNjMzIDM5Mi4xODNDMzAuMzU1IDQwNi4xNyAzNC4yOTEgNDIwLjM1NCA0My40MjggNDMxLjA5N0M0OS43NjUgNDM4LjU1IDU4LjEyMSA0NDMuNzk5IDY3LjM1IDQ0Ni4zMTVDNjYuMTExIDQ0OS40NDEgNjUuMTkxIDQ1Mi43NCA2NC42MzMgNDU2LjE3N0M2Mi4zNTUgNDcwLjE2NCA2Ni4yOTEgNDg0LjM0OCA3NS40MjggNDk1LjA5MUM4NC41NjYgNTA1LjgzNiA5Ny44OTcgNTEyIDExMS45OTggNTEySDMxOS45OTlDMzkwLjU4IDUxMiA0NDggNDU0LjU4NSA0NDggMzg0LjAxMlYzMjUuNUM0NDggMjcwLjA5MiA0MTIuNjM0IDIyMS4yMzIgMzU5Ljk5NSAyMDMuOTE5Wk00MTYgMzg0LjAxMkM0MTYgNDM3LjAyNiAzNzMuMDE5IDQ4MC4wMDMgMzE5Ljk5OSA0ODAuMDAzSDExMS45OThDMTAyLjI4MSA0ODAuMDAzIDk0LjU4NiA0NzEuMzQgOTYuMjE3IDQ2MS4zMTdDOTcuNDk4IDQ1My40NTEgMTA0Ljg4NSA0NDguMDA2IDExMi44NTYgNDQ4LjAwNkgxOTEuOTk5QzIwMC44MzUgNDQ4LjAwNiAyMDcuOTk5IDQ0MC44NDIgMjA3Ljk5OSA0MzIuMDA3QzIwNy45OTkgNDIzLjE3MiAyMDAuODM1IDQxNi4wMDkgMTkxLjk5OSA0MTYuMDA5SDc5Ljk5OEM3MC4yODEgNDE2LjAwOSA2Mi41ODYgNDA3LjM0NiA2NC4yMTcgMzk3LjMyM0M2NS40OTggMzg5LjQ1NyA3Mi44ODUgMzg0LjAxMiA4MC44NTUgMzg0LjAxMkgxOTEuOTk5QzIwMC44MzUgMzg0LjAxMiAyMDcuOTk5IDM3Ni44NDggMjA3Ljk5OSAzNjguMDEzQzIwNy45OTkgMzU5LjE3OCAyMDAuODM1IDM1Mi4wMTUgMTkxLjk5OSAzNTIuMDE1SDQ3Ljk5OEMzOC4yODEgMzUyLjAxNSAzMC41ODYgMzQzLjM1MSAzMi4yMTcgMzMzLjMyOUMzMy40OTggMzI1LjQ2MiA0MC44ODUgMzIwLjAxOCA0OC44NTUgMzIwLjAxOEgxOTEuOTk5QzIwMC44MzUgMzIwLjAxOCAyMDcuOTk5IDMxMi44NTQgMjA3Ljk5OSAzMDQuMDE5QzIwNy45OTkgMjk1LjE4NCAyMDAuODM1IDI4OC4wMjEgMTkxLjk5OSAyODguMDIxSDc5Ljk5OEM3MC4yODEgMjg4LjAyMSA2Mi41ODYgMjc5LjM1NyA2NC4yMTcgMjY5LjMzNUM2NS40OTggMjYxLjQ2OCA3Mi44ODUgMjU2LjAyMyA4MC44NTUgMjU2LjAyM0gyNjAuNjAyQzI2OS41ODEgMjU2LjAyMyAyNzEuNzQ3IDI0My41MDUgMjYzLjI5IDI0MC40OUwyMjYuMjQxIDIyNy4yNzhDMjE3LjkzOCAyMjQuMjU1IDIxMy42NTcgMjE1LjA3NiAyMTYuNjc4IDIwNi43NzJDMjE5LjA0NCAyMDAuMjc1IDIyNS4xNzggMTk2LjI0MiAyMzEuNzE2IDE5Ni4yNDJDMjMzLjUzMiAxOTYuMjQyIDIzNS4zOCAxOTYuNTU0IDIzNy4xODYgMTk3LjIxTDM0OS45OTUgMjM0LjMxNEMzODkuMzgyIDI0Ny4yNjggNDE2IDI4NC4wNDIgNDE2IDMyNS41VjM4NC4wMTJaIi8+PC9zdmc+|width=32|height=32)
 */
const Hands: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 128.035C452.39 128.035 441.73 132.179 433.42 139.063L397.57 40.574C390.517 21.199 372.224 8.181 352.048 8.181C349.165 8.181 346.251 8.446 343.327 9.003C334.589 10.661 326.614 14.647 320.163 20.414C311.151 7.847 296.63 0.004 280.974 0H280.958C278.075 0 275.161 0.268 272.235 0.824C258.321 3.465 246.335 12.013 239.364 24.271C234.522 32.784 232.448 42.438 233.245 51.98C232.753 51.964 232.258 51.956 231.764 51.956C228.883 51.956 225.973 52.22 223.051 52.774C209.118 55.423 197.135 63.973 190.165 76.231C185.327 84.742 183.252 94.396 184.049 103.934C183.557 103.918 183.065 103.91 182.571 103.91C179.688 103.91 176.772 104.178 173.848 104.733C155.323 108.248 140.227 122.225 135.813 141.487C133.658 150.887 134.832 160.759 138.131 169.822L139.108 172.506C142.721 182.431 154.692 186.333 163.461 180.439C170.53 175.689 172.735 166.289 168.516 158.89L167.659 157.386C164.334 148.254 169.844 138.062 179.823 136.167C180.743 135.991 181.663 135.907 182.571 135.907C184.206 135.907 185.743 136.238 187.184 136.816C195.844 140.294 202.506 137.95 204.678 137.171C216.153 133.056 222.452 120.807 218.282 109.353L216.854 105.43C213.532 96.3 219.042 86.107 229.018 84.211C229.938 84.035 230.856 83.953 231.764 83.953C238.577 83.953 244.813 88.685 247.218 95.292L260.212 130.99C261.889 135.597 265.587 139.183 270.247 140.716C282.935 144.889 294.851 132.597 290.282 120.046L266.05 53.476C262.727 44.346 268.237 34.151 278.214 32.257C279.136 32.081 280.054 31.997 280.964 31.997C287.774 31.999 294.009 36.731 296.415 43.338L336.904 154.564C337.048 154.962 339.796 163.596 350.218 164.883C361.943 166.332 370.919 154.468 366.88 143.368L337.136 61.656C333.812 52.524 339.321 42.332 349.3 40.438C350.22 40.262 351.14 40.178 352.048 40.178C358.861 40.178 365.095 44.91 367.499 51.519L421.236 199.144C422.252 201.933 424.14 204.321 426.621 205.952C435.797 211.984 448 205.403 448 194.424V176.886C448 168.918 453.445 161.532 461.31 160.251C471.336 158.62 480 166.311 480 176.031V304.283C480 312.987 487.068 320.037 495.771 320.018L496.24 320.016C504.916 319.996 511.939 312.96 511.941 304.287L512 176.042C511.998 149.564 490.465 128.035 464 128.035ZM359.995 203.919L247.186 166.815C242.841 165.219 237.321 164.245 231.716 164.245C211.614 164.245 193.489 176.935 186.61 195.824C183.192 205.218 182.901 215.002 185.2 224.026H80.855C56.701 224.026 36.422 240.919 32.633 264.195C31.205 272.959 32.219 281.8 35.422 289.825C17.5 294.764 3.691 309.396 0.632 328.189C-1.645 342.176 2.291 356.36 11.427 367.103C17.765 374.556 26.121 379.805 35.349 382.32C34.111 385.447 33.191 388.746 32.633 392.183C30.355 406.17 34.291 420.354 43.428 431.097C49.765 438.55 58.121 443.799 67.35 446.315C66.111 449.441 65.191 452.74 64.633 456.177C62.355 470.164 66.291 484.348 75.428 495.091C84.566 505.836 97.897 512 111.998 512H319.999C390.58 512 448 454.585 448 384.012V325.5C448 270.092 412.634 221.232 359.995 203.919ZM416 384.012C416 437.026 373.019 480.003 319.999 480.003H111.998C102.281 480.003 94.586 471.34 96.217 461.317C97.498 453.451 104.885 448.006 112.856 448.006H191.999C200.835 448.006 207.999 440.842 207.999 432.007C207.999 423.172 200.835 416.009 191.999 416.009H79.998C70.281 416.009 62.586 407.346 64.217 397.323C65.498 389.457 72.885 384.012 80.855 384.012H191.999C200.835 384.012 207.999 376.848 207.999 368.013C207.999 359.178 200.835 352.015 191.999 352.015H47.998C38.281 352.015 30.586 343.351 32.217 333.329C33.498 325.462 40.885 320.018 48.855 320.018H191.999C200.835 320.018 207.999 312.854 207.999 304.019C207.999 295.184 200.835 288.021 191.999 288.021H79.998C70.281 288.021 62.586 279.357 64.217 269.335C65.498 261.468 72.885 256.023 80.855 256.023H260.602C269.581 256.023 271.747 243.505 263.29 240.49L226.241 227.278C217.938 224.255 213.657 215.076 216.678 206.772C219.044 200.275 225.178 196.242 231.716 196.242C233.532 196.242 235.38 196.554 237.186 197.21L349.995 234.314C389.382 247.268 416 284.042 416 325.5V384.012Z" />
    </Icon>
);

export default Hands;

import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-certificate` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-certificate?s=thin file-certificate}
 * @preview ![file-certificate](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMzAuOTM1IDM2MC4zNDRDMjM0LjE1NCAzNDguMDk0IDIzNC4xNTQgMzQ4LjA5NCAyNDIuOTUyIDMzOS4xODdMMjQ1LjU2MSAzMzYuNTMxQzI1NC41NjIgMzI3LjUzMSAyNTguMDk0IDMxNC4yMTkgMjU0Ljc5NyAzMDEuNzVMMjU0LjE4NyAyOTkuNDY5QzI1Mi43MzQgMjk0LjAzMSAyNTEuNzk2IDI5MC43NSAyNTEuNDM3IDI4OEMyNTEuNzk2IDI4NS4yNSAyNTIuNzM0IDI4MS45NjkgMjU0LjE4NyAyNzYuNTMxTDI1NC43OTcgMjc0LjI1QzI1OC4wOTQgMjYxLjc4MSAyNTQuNTYyIDI0OC40NjggMjQ1LjYwOCAyMzkuNTMxTDI0My4yMTggMjM3LjA5M0MyMzQuMTg2IDIyNy45MzcgMjM0LjE4NiAyMjcuOTM3IDIzMC45NjcgMjE1Ljc1TDIyOS45NjcgMjExLjkzN0MyMjYuNzk0IDE5OS42MjUgMjE3LjIzMSAxODkuODc1IDIwNS4wMTIgMTg2LjUzMUwyMDEuMzM5IDE4NS41MzFDMTg5LjI3NiAxODIuMjE4IDE4OS4yNzYgMTgyLjIxOCAxODAuNDE2IDE3My4xODdMMTc3Ljg4NCAxNzAuNjI1QzE2OC45NjIgMTYxLjUzMSAxNTUuNzg5IDE1Ny45MzcgMTQzLjYxNiAxNjEuMjE4TDE0MC4wNjkgMTYyLjE4N0MxMjcuOTQzIDE2NS41IDEyNy45NTkgMTY1LjUgMTE1LjkyNyAxNjIuMTg3TDExMi4zOTUgMTYxLjIxOEMxMDAuMjM4IDE1Ny45MzcgODcuMDQ5IDE2MS41MzEgNzguMTU4IDE3MC41OTNMNzUuNjExIDE3My4xNTZDNjYuNjI2IDE4Mi4yMTggNjYuNjI2IDE4Mi4yMTggNTQuNjQxIDE4NS41MzFMNTEuMDE1IDE4Ni41MzFDMzguNzggMTg5Ljg3NSAyOS4yMTcgMTk5LjYyNSAyNi4wNiAyMTEuODc1TDI1LjA3NiAyMTUuNjU2QzIxLjg1NyAyMjcuOTA2IDIxLjg1NyAyMjcuOTA2IDEzLjA1OSAyMzYuODEyTDEwLjQ1IDIzOS40NjhDMS40NDkgMjQ4LjQ2OCAtMi4wODMgMjYxLjc4MSAxLjIxNSAyNzQuMjVMMS44MjQgMjc2LjUzMUMzLjQxOCAyODIuNDY5IDQuMzcxIDI4NS44NDQgNC42NTIgMjg3LjI1QzQuMzcxIDI5MC4xNTYgMy40MTggMjkzLjUzMSAxLjgyNCAyOTkuNDY5TDEuMjE1IDMwMS43NUMtMi4wODMgMzE0LjIxOSAxLjQ0OSAzMjcuNTMxIDEwLjQwMyAzMzYuNDY5TDEyLjc5NCAzMzguOTA2QzIxLjgyNiAzNDguMDYyIDIxLjgyNiAzNDguMDYyIDI1LjA0NSAzNjAuMjVMMjYuMDQ1IDM2NC4wNjJDMjkuMjE3IDM3Ni4zNzUgMzguNzggMzg2LjEyNSA1MSAzODkuNDY5TDU0LjY3MiAzOTAuNDY5QzU5LjE1NyAzOTEuNzAzIDYxLjc3NiAzOTIuNTM5IDY0LjAwMSAzOTMuNDg0VjUwNEM2NC4wMDEgNTA2Ljg0NCA2NS41MTYgNTA5LjUgNjcuOTg1IDUxMC45MDZDNjkuMjIgNTExLjYyNSA3MC42MTEgNTEyIDcyLjAwMSA1MTJDNzMuMzc2IDUxMiA3NC43MzYgNTExLjY1NiA3NS45NyA1MTAuOTM3TDEyOC4wMDYgNDgxLjIxOUwxODAuMDEgNTEwLjkzN0MxODIuNDc5IDUxMi40MDYgMTg1LjQ5NCA1MTIuMzEyIDE4Ny45OTUgNTEwLjkwNkMxOTAuNDY0IDUwOS41IDE5MS45NzkgNTA2Ljg0NCAxOTEuOTc5IDUwNEwxOTIuMDExIDM5My41MjNDMTk0LjI0MyAzOTIuNTU0IDE5Ni44NjIgMzkxLjcxNSAyMDEuMzcxIDM5MC40NjlMMjA0Ljk5NiAzODkuNDY5QzIxNy4yMzEgMzg2LjEyNSAyMjYuNzk0IDM3Ni4zNzUgMjI5Ljk1MSAzNjQuMTI1TDIzMC45MzUgMzYwLjM0NFpNMTc1Ljk3OCA0OTAuMjE5TDEzMS45NzUgNDY1LjA2MkMxMjkuNTA2IDQ2My42MjUgMTI2LjUwNSA0NjMuNjI1IDEyNC4wMzcgNDY1LjA2Mkw4MC4wMDIgNDkwLjIxOVY0MDYuODRDODguODQ0IDQxNC43MjYgMTAxLjAwNyA0MTcuOTE0IDExMi4zOTUgNDE0Ljc4MUwxMTUuOTQyIDQxMy44MTJDMTI4LjA2OCA0MTAuNSAxMjguMDUyIDQxMC41IDE0MC4wODUgNDEzLjgxMkwxNDMuNjE2IDQxNC43ODFDMTQ2LjYwMSA0MTUuNTk0IDE0OS42NDggNDE2IDE1Mi42NzkgNDE2QzE2MS4yNjYgNDE2IDE2OS40ODEgNDEyLjUgMTc2LjAwNSA0MDYuNjU2TDE3NS45NzggNDkwLjIxOVpNMjE1LjQ2NSAzNTYuMzEyTDIxNC40NjUgMzYwLjA2MkMyMTIuNzE1IDM2Ni44NDQgMjA3LjQ4IDM3Mi4xODcgMjAwLjc0NiAzNzQuMDMxTDE5Ny4xMzYgMzc1LjAzMUMxODEuNzYgMzc5LjI4MSAxODAuNDQ3IDM4MC4wMzEgMTY5LjAyNCAzOTEuNTk0TDE2Ni40NzcgMzk0LjE4N0MxNjEuNTg2IDM5OS4xMjUgMTU0LjUwOCA0MDEuMTU2IDE0Ny43ODggMzk5LjM0NEwxNDQuMzE5IDM5OC40MDZDMTM2LjU2OSAzOTYuMjUgMTMyLjMxOCAzOTUuMTg3IDEyOC4wNTIgMzk1LjE4N0MxMjMuNzg2IDM5NS4xODcgMTE5LjUyMSAzOTYuMjUgMTExLjczOSAzOTguMzc1TDEwOC4yMzggMzk5LjM0NEMxMDEuNTY2IDQwMS4xNTYgOTQuNDI1IDM5OS4xNTYgODkuNTM0IDM5NC4xNTZMODcuMDM0IDM5MS42MjVDNzUuNjg5IDM4MC4wMzEgNzQuMzc2IDM3OS4yODEgNTguODkxIDM3NS4wMzFMNTUuMjM0IDM3NC4wMzFDNDguNTMxIDM3Mi4xODcgNDMuMjk2IDM2Ni44NDQgNDEuNTMgMzYwTDQwLjUxNCAzNTYuMTg3QzM2LjQyIDM0MC42MjUgMzUuNjU1IDMzOS4zMTIgMjQuMTg1IDMyNy42ODdMMjEuNzYzIDMyNS4yMTlDMTYuNzc4IDMyMC4yNSAxNC44NDEgMzEyLjgxMiAxNi42ODQgMzA1Ljg3NUwxNy4yNzggMzAzLjYyNUMxOS4yMTYgMjk2LjQwNiAyMC4yNDcgMjkyLjMxMiAyMC41OTEgMjg3LjI1QzIwLjI0NyAyODMuNjg3IDE5LjIxNiAyNzkuNTk0IDE3LjI3OCAyNzIuMzc1TDE2LjY4NCAyNzAuMTI1QzE0Ljg0MSAyNjMuMTg3IDE2Ljc3OCAyNTUuNzUgMjEuODEgMjUwLjcxOEwyNC40NTEgMjQ4LjA2MkMzNS43MDIgMjM2LjY1NiAzNi40NTIgMjM1LjM0MyA0MC41NDYgMjE5LjY4N0w0MS41NDYgMjE1LjkzN0M0My4yOTYgMjA5LjE1NiA0OC41MzEgMjAzLjgxMiA1NS4yNjYgMjAxLjk2OEw1OC44NzUgMjAwLjk2OEM3NC4yNTEgMTk2LjcxOCA3NS41NjQgMTk1Ljk2OCA4Ni45ODcgMTg0LjQwNkw4OS41MzQgMTgxLjgxMkM5NC40MjUgMTc2Ljg3NSAxMDEuNDcyIDE3NC44NzUgMTA4LjIyMyAxNzYuNjU2TDExMS42OTIgMTc3LjU5M0MxMjcuMTkzIDE4MS45MDYgMTI4LjcwOSAxODEuODc1IDE0NC4yNzIgMTc3LjYyNUwxNDcuNzczIDE3Ni42NTZDMTU0LjQ3NiAxNzQuODc1IDE2MS41ODYgMTc2Ljg3NSAxNjYuNDc3IDE4MS44NDNMMTY4Ljk3NyAxODQuMzc1QzE4MC4zMjIgMTk1Ljk2OCAxODEuNjM1IDE5Ni43MTggMTk3LjEyIDIwMC45NjhMMjAwLjc3NyAyMDEuOTY4QzIwNy40OCAyMDMuODEyIDIxMi43MTUgMjA5LjE1NiAyMTQuNDgxIDIxNkwyMTUuNDk3IDIxOS44MTJDMjE5LjU5MSAyMzUuMzc1IDIyMC4zNTYgMjM2LjY4NyAyMzEuODI2IDI0OC4zMTJMMjM0LjI0OCAyNTAuNzgxQzIzOS4yMzMgMjU1Ljc1IDI0MS4xNzEgMjYzLjE4NyAyMzkuMzI3IDI3MC4xMjVMMjM4LjczMyAyNzIuMzc1QzIzNi43OTUgMjc5LjU5NCAyMzUuNzY0IDI4My42ODcgMjM1LjQyIDI4Ny4yNUwyMzUuMzU4IDI4OEwyMzUuNDIgMjg4Ljc1QzIzNS43NjQgMjkyLjMxMiAyMzYuNzk1IDI5Ni40MDYgMjM4LjczMyAzMDMuNjI1TDIzOS4zMjcgMzA1Ljg3NUMyNDEuMTcxIDMxMi44MTIgMjM5LjIzMyAzMjAuMjUgMjM0LjIwMSAzMjUuMjgxTDIzMS41NiAzMjcuOTM3QzIyMC4zMSAzMzkuMzQ0IDIxOS41NiAzNDAuNjU2IDIxNS40NjUgMzU2LjMxMlpNNTAyLjYyNCAxNTAuNjIxTDM2MS4zNTkgOS4zNzVDMzU1LjM1NSAzLjM3MSAzNDcuMjE0IDAgMzM4LjcyMyAwSDE5MS45NzVDMTU2LjYyNyAwIDEyNy45NyAyOC42NTIgMTI3Ljk3IDY0VjEyMEMxMjcuOTcgMTI0LjQxOCAxMzEuNTUzIDEyOCAxMzUuOTcxIDEyOFMxNDMuOTcyIDEyNC40MTggMTQzLjk3MiAxMjBWNjRDMTQzLjk3MiAzNy40OTIgMTY1LjQ2NCAxNiAxOTEuOTc1IDE2SDMzNS45ODZWMTM2QzMzNS45ODYgMTU4LjA5MyAzNTMuODk2IDE3NiAzNzUuOTkgMTc2SDQ5NS45OTlWNDQ4QzQ5NS45OTkgNDc0LjUwOCA0NzQuNTA3IDQ5NiA0NDcuOTk1IDQ5NkgyMzIuMDE0QzIyNy41OTUgNDk2IDIyNC4wMTMgNDk5LjU4MiAyMjQuMDEzIDUwNFMyMjcuNTk1IDUxMiAyMzIuMDE0IDUxMkg0NDcuOTk1QzQ4My4zNDQgNTEyIDUxMiA0ODMuMzQzIDUxMiA0NDhWMTczLjI1NEM1MTIgMTY0Ljc2NSA1MDguNjI3IDE1Ni42MjUgNTAyLjYyNCAxNTAuNjIxWk0zNzUuOTkgMTYwQzM2Mi43NyAxNjAgMzUxLjk4OCAxNDkuMjM0IDM1MS45ODggMTM2VjIyLjYyOUw0ODkuMzczIDE2MEgzNzUuOTlaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FileCertificate(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M230.935 360.344C234.154 348.094 234.154 348.094 242.952 339.187L245.561 336.531C254.562 327.531 258.094 314.219 254.797 301.75L254.187 299.469C252.734 294.031 251.796 290.75 251.437 288C251.796 285.25 252.734 281.969 254.187 276.531L254.797 274.25C258.094 261.781 254.562 248.468 245.608 239.531L243.218 237.093C234.186 227.937 234.186 227.937 230.967 215.75L229.967 211.937C226.794 199.625 217.231 189.875 205.012 186.531L201.339 185.531C189.276 182.218 189.276 182.218 180.416 173.187L177.884 170.625C168.962 161.531 155.789 157.937 143.616 161.218L140.069 162.187C127.943 165.5 127.959 165.5 115.927 162.187L112.395 161.218C100.238 157.937 87.049 161.531 78.158 170.593L75.611 173.156C66.626 182.218 66.626 182.218 54.641 185.531L51.015 186.531C38.78 189.875 29.217 199.625 26.06 211.875L25.076 215.656C21.857 227.906 21.857 227.906 13.059 236.812L10.45 239.468C1.449 248.468 -2.083 261.781 1.215 274.25L1.824 276.531C3.418 282.469 4.371 285.844 4.652 287.25C4.371 290.156 3.418 293.531 1.824 299.469L1.215 301.75C-2.083 314.219 1.449 327.531 10.403 336.469L12.794 338.906C21.826 348.062 21.826 348.062 25.045 360.25L26.045 364.062C29.217 376.375 38.78 386.125 51 389.469L54.672 390.469C59.157 391.703 61.776 392.539 64.001 393.484V504C64.001 506.844 65.516 509.5 67.985 510.906C69.22 511.625 70.611 512 72.001 512C73.376 512 74.736 511.656 75.97 510.937L128.006 481.219L180.01 510.937C182.479 512.406 185.494 512.312 187.995 510.906C190.464 509.5 191.979 506.844 191.979 504L192.011 393.523C194.243 392.554 196.862 391.715 201.371 390.469L204.996 389.469C217.231 386.125 226.794 376.375 229.951 364.125L230.935 360.344ZM175.978 490.219L131.975 465.062C129.506 463.625 126.505 463.625 124.037 465.062L80.002 490.219V406.84C88.844 414.726 101.007 417.914 112.395 414.781L115.942 413.812C128.068 410.5 128.052 410.5 140.085 413.812L143.616 414.781C146.601 415.594 149.648 416 152.679 416C161.266 416 169.481 412.5 176.005 406.656L175.978 490.219ZM215.465 356.312L214.465 360.062C212.715 366.844 207.48 372.187 200.746 374.031L197.136 375.031C181.76 379.281 180.447 380.031 169.024 391.594L166.477 394.187C161.586 399.125 154.508 401.156 147.788 399.344L144.319 398.406C136.569 396.25 132.318 395.187 128.052 395.187C123.786 395.187 119.521 396.25 111.739 398.375L108.238 399.344C101.566 401.156 94.425 399.156 89.534 394.156L87.034 391.625C75.689 380.031 74.376 379.281 58.891 375.031L55.234 374.031C48.531 372.187 43.296 366.844 41.53 360L40.514 356.187C36.42 340.625 35.655 339.312 24.185 327.687L21.763 325.219C16.778 320.25 14.841 312.812 16.684 305.875L17.278 303.625C19.216 296.406 20.247 292.312 20.591 287.25C20.247 283.687 19.216 279.594 17.278 272.375L16.684 270.125C14.841 263.187 16.778 255.75 21.81 250.718L24.451 248.062C35.702 236.656 36.452 235.343 40.546 219.687L41.546 215.937C43.296 209.156 48.531 203.812 55.266 201.968L58.875 200.968C74.251 196.718 75.564 195.968 86.987 184.406L89.534 181.812C94.425 176.875 101.472 174.875 108.223 176.656L111.692 177.593C127.193 181.906 128.709 181.875 144.272 177.625L147.773 176.656C154.476 174.875 161.586 176.875 166.477 181.843L168.977 184.375C180.322 195.968 181.635 196.718 197.12 200.968L200.777 201.968C207.48 203.812 212.715 209.156 214.481 216L215.497 219.812C219.591 235.375 220.356 236.687 231.826 248.312L234.248 250.781C239.233 255.75 241.171 263.187 239.327 270.125L238.733 272.375C236.795 279.594 235.764 283.687 235.42 287.25L235.358 288L235.42 288.75C235.764 292.312 236.795 296.406 238.733 303.625L239.327 305.875C241.171 312.812 239.233 320.25 234.201 325.281L231.56 327.937C220.31 339.344 219.56 340.656 215.465 356.312ZM502.624 150.621L361.359 9.375C355.355 3.371 347.214 0 338.723 0H191.975C156.627 0 127.97 28.652 127.97 64V120C127.97 124.418 131.553 128 135.971 128S143.972 124.418 143.972 120V64C143.972 37.492 165.464 16 191.975 16H335.986V136C335.986 158.093 353.896 176 375.99 176H495.999V448C495.999 474.508 474.507 496 447.995 496H232.014C227.595 496 224.013 499.582 224.013 504S227.595 512 232.014 512H447.995C483.344 512 512 483.343 512 448V173.254C512 164.765 508.627 156.625 502.624 150.621ZM375.99 160C362.77 160 351.988 149.234 351.988 136V22.629L489.373 160H375.99Z" />
        </Icon>
    </>
}
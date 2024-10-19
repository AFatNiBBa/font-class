
import { Icon } from "../../index";

/**
 * A component that renders the `handshake-simple` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/handshake-simple?s=thin handshake-simple}
 * @preview ![handshake-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzkuNjcyIDIxOS4yMTlDMzM2LjI1IDIxNi40NjkgMzMxLjIxOSAyMTYuOTM3IDMyOC40MjIgMjIwLjQwNkMzMjUuNjI1IDIyMy44MTIgMzI2LjE1NiAyMjguODc1IDMyOS41NzggMjMxLjY1Nkw0NzguODI4IDM1Mi44NzVDNDg5LjA2MiAzNjEuMTg3IDQ5MC42NDEgMzc2LjI4MSA0ODIuMzU5IDM4Ni41MzFMNDcyLjc4MSAzOTguMzQ0QzQ2NC41MTYgNDA4LjU2MiA0NDkuMzQ0IDQxMC4xNTYgNDM5LjE0MSA0MDJMNDI3LjUzMSAzOTIuMjgxTDM5MS4wNjIgNDM3LjE4N0MzODYuMTA5IDQ0My4yMTkgMzc5LjA5NCA0NDcgMzcxLjMxMiA0NDcuODEyQzM2My41OTQgNDQ4LjUzMSAzNTUuOTM3IDQ0Ni4zNzUgMzUwLjEwOSA0NDEuNTk0TDMzMi4yMzQgNDI2LjA5NEwzMjUuODEyIDQyMi4wNjJMMzIwLjU0NyA0MjcuMzQ0QzMxMS4xMDkgNDM4LjkzNyAyOTcuNzUgNDQ2LjE1NiAyODIuODkxIDQ0Ny42ODdDMjY4IDQ0OS4yODEgMjUzLjQzNyA0NDQuODc1IDI0Mi4xMDkgNDM1LjY4N0wxNDkuMzI4IDM1MS43ODFIOEMzLjU3OCAzNTEuNzgxIDAgMzU1LjM3NSAwIDM1OS43ODFTMy41NzggMzY3Ljc4MSA4IDM2Ny43ODFIMTQzLjE3MkwyMzEuNzAzIDQ0Ny44NDRDMjQ0LjY3MiA0NTguMzc1IDI2MC41MzEgNDY0IDI3NyA0NjRDMjc5LjUgNDY0IDI4Mi4wMTYgNDYzLjg3NSAyODQuNTQ3IDQ2My42MjVDMzAxLjEwOSA0NjEuOTA2IDMxNi4yMzQgNDU0LjY4NyAzMjcuNjcyIDQ0My4yODFMMzM5LjgxMiA0NTMuODEyQzM0OS4xMjUgNDYxLjQzNyAzNjAuODkxIDQ2NC44NDQgMzcyLjk2OSA0NjMuNzE5QzM4NC45NjkgNDYyLjQ2OSAzOTUuNzk3IDQ1Ni42NTYgNDAzLjQ1MyA0NDcuMjgxTDQyOS43MzQgNDE0LjkzN0M0NDYuOTUzIDQyOC4wNjIgNDcxLjYyNSA0MjUuMjE5IDQ4NS4yMTkgNDA4LjQwNkw0OTQuNzk3IDM5Ni41OTRDNTA4LjYwOSAzNzkuNSA1MDUuOTY5IDM1NC4zMTIgNDg4LjkyMiAzNDAuNDM3TDMzOS42NzIgMjE5LjIxOVpNOCAxNDMuOTY5SDEyOEwxMzEuNDY5IDE0My44MTJMMTMzLjgxMiAxNDEuNDY5QzE3My41NDcgMTAxLjg0NCAyMjYuMzU5IDgwIDI4Mi41NDcgODBDMjg2Ljk2OSA4MCAyOTAuNTQ3IDc2LjQwNiAyOTAuNTQ3IDcyUzI4Ni45NjkgNjQgMjgyLjU0NyA2NEMyMjMuMjAzIDY0IDE2Ny4zNTkgODYuNjI1IDEyNC43MTkgMTI3Ljk2OUg4QzMuNTc4IDEyNy45NjkgMCAxMzEuNTYyIDAgMTM1Ljk2OVMzLjU3OCAxNDMuOTY5IDggMTQzLjk2OVpNNjQwIDEzNS45NjlDNjQwIDEzMS41NjIgNjM2LjQyMiAxMjcuOTY5IDYzMiAxMjcuOTY5SDUxNS4yODFDNDcyLjc4MSA4Ni42ODggNDE2Ljg3NSA2NCAzNTcuNDg0IDY0SDM0OC44NzVDMzM4Ljk4NCA2NCAzMjkuNDA2IDY3LjY4OCAzMjEuODQ0IDc0LjQ2OUwyMjMuMzQ0IDE2NC42ODdMMjIyLjQyMiAxNjUuNzE5QzIwMy44MTIgMTg0LjAzMSAyMDMgMjEyLjk2OSAyMjAuNzM0IDIzMi4wOTRDMjI4LjM1OSAyNDAuNDM4IDI0Mi4xMDkgMjQ3LjU5NCAyNTcuMDYyIDI0Ny41OTRDMjY3LjA0NyAyNDcuNTk0IDI3Ny41NjIgMjQ0LjQwNiAyODcuMTU2IDIzNi4yMTlMMzY4LjUxNiAxNjJDMzcxLjc4MSAxNTkuMDMxIDM3Mi4wMTYgMTUzLjk2OSAzNjkuMDMxIDE1MC42ODhDMzY2LjA2MiAxNDcuNDY5IDM2MS4wMTYgMTQ3LjE4OCAzNTcuNzM0IDE1MC4xODhMMjc4Ljc1IDIyMi4zNDRMMjc0Ljc1IDIyMy45NjlWMjI1LjY1NkMyNTcuNzM0IDIzOC4xNTYgMjM4Ljg0NCAyMjguMTg4IDIzMi41IDIyMS4yNUMyMjAuNTMxIDIwOC4zNDQgMjIxLjI5NyAxODguNzE5IDIzNC4yMzQgMTc2LjU2MkwzMzIuNTk0IDg2LjM0NEMzMzcuMTQxIDgyLjI1IDM0Mi45MzcgODAgMzQ4Ljg3NSA4MEgzNTcuNDg0QzQxMy43MTkgODAgNDY2LjU5NCAxMDEuODc1IDUwNi4zNDQgMTQxLjYyNUw1MDguNjg3IDE0My45NjlINjMyQzYzNi40MjIgMTQzLjk2OSA2NDAgMTQwLjM3NSA2NDAgMTM1Ljk2OVpNNjMyIDM1MS42NTZINTI2LjM3NUM1MjEuOTUzIDM1MS42NTYgNTE4LjM3NSAzNTUuMjUgNTE4LjM3NSAzNTkuNjU2UzUyMS45NTMgMzY3LjY1NiA1MjYuMzc1IDM2Ny42NTZINjMyQzYzNi40MjIgMzY3LjY1NiA2NDAgMzY0LjA2MiA2NDAgMzU5LjY1NlM2MzYuNDIyIDM1MS42NTYgNjMyIDM1MS42NTZaIi8+PC9zdmc+|width=32|height=32)
 */
const HandshakeSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M339.672 219.219C336.25 216.469 331.219 216.937 328.422 220.406C325.625 223.812 326.156 228.875 329.578 231.656L478.828 352.875C489.062 361.187 490.641 376.281 482.359 386.531L472.781 398.344C464.516 408.562 449.344 410.156 439.141 402L427.531 392.281L391.062 437.187C386.109 443.219 379.094 447 371.312 447.812C363.594 448.531 355.937 446.375 350.109 441.594L332.234 426.094L325.812 422.062L320.547 427.344C311.109 438.937 297.75 446.156 282.891 447.687C268 449.281 253.437 444.875 242.109 435.687L149.328 351.781H8C3.578 351.781 0 355.375 0 359.781S3.578 367.781 8 367.781H143.172L231.703 447.844C244.672 458.375 260.531 464 277 464C279.5 464 282.016 463.875 284.547 463.625C301.109 461.906 316.234 454.687 327.672 443.281L339.812 453.812C349.125 461.437 360.891 464.844 372.969 463.719C384.969 462.469 395.797 456.656 403.453 447.281L429.734 414.937C446.953 428.062 471.625 425.219 485.219 408.406L494.797 396.594C508.609 379.5 505.969 354.312 488.922 340.437L339.672 219.219ZM8 143.969H128L131.469 143.812L133.812 141.469C173.547 101.844 226.359 80 282.547 80C286.969 80 290.547 76.406 290.547 72S286.969 64 282.547 64C223.203 64 167.359 86.625 124.719 127.969H8C3.578 127.969 0 131.562 0 135.969S3.578 143.969 8 143.969ZM640 135.969C640 131.562 636.422 127.969 632 127.969H515.281C472.781 86.688 416.875 64 357.484 64H348.875C338.984 64 329.406 67.688 321.844 74.469L223.344 164.687L222.422 165.719C203.812 184.031 203 212.969 220.734 232.094C228.359 240.438 242.109 247.594 257.062 247.594C267.047 247.594 277.562 244.406 287.156 236.219L368.516 162C371.781 159.031 372.016 153.969 369.031 150.688C366.062 147.469 361.016 147.188 357.734 150.188L278.75 222.344L274.75 223.969V225.656C257.734 238.156 238.844 228.188 232.5 221.25C220.531 208.344 221.297 188.719 234.234 176.562L332.594 86.344C337.141 82.25 342.937 80 348.875 80H357.484C413.719 80 466.594 101.875 506.344 141.625L508.687 143.969H632C636.422 143.969 640 140.375 640 135.969ZM632 351.656H526.375C521.953 351.656 518.375 355.25 518.375 359.656S521.953 367.656 526.375 367.656H632C636.422 367.656 640 364.062 640 359.656S636.422 351.656 632 351.656Z" />
    </Icon>
);

export default HandshakeSimple;
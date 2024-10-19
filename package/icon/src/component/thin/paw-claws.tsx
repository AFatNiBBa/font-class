
import { Icon } from "../../index";

/**
 * A component that renders the `paw-claws` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/paw-claws?s=thin paw-claws}
 * @preview ![paw-claws](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMTYuMDEyIDE1OC43NTJDMTI2LjUyNSAxOTcuMTYgMTU0Ljg4MSAyMjQuMDA2IDE4Mi43NTggMjI0LjAwNkMxODYuMzYzIDIyNC4wMDYgMTg5Ljk1NSAyMjMuNTU3IDE5My41MDYgMjIyLjYyN0MyMjQuMzc5IDIxNC41MDIgMjM5Ljg3NyAxNzIuNjI3IDIyOC4wMDIgMTI5LjI1NEMyMTcuNDg4IDkwLjg0NiAxODkuMTMzIDY0IDE2MS4yNTYgNjRDMTU3LjY1MiA2NCAxNTQuMDU5IDY0LjQ0OSAxNTAuNTA4IDY1LjM3OUMxNDMuMTQ1IDY3LjMxNiAxMzYuNzIzIDcxLjI4MSAxMzEuMjcxIDc2LjYyM0MxMzYuNSA1Mi45NjkgMTQ4LjExNyAzMS4xODQgMTY1LjY1NiAxMy42NTZDMTY4Ljc4MSAxMC41MzEgMTY4Ljc4MSA1LjQ2OSAxNjUuNjU2IDIuMzQ0QzE2Mi41NjIgLTAuNzUgMTU3LjUgLTAuODEyIDE1NC4zNDQgMi4zNDRDMTI3LjAzMSAyOS42MjUgMTEyIDY1LjkzOCAxMTIgMTA0LjU2MlYxMjhDMTEyIDEyOC4xMDUgMTEyLjEwOSAxMjguMTY2IDExMi4xMTMgMTI4LjI3MUMxMTEuOTc3IDEzOC4wNTkgMTEzLjE2NCAxNDguMzQ4IDExNi4wMTIgMTU4Ljc1MlpNMTM1Ljk2MSA5Ni4zODlDMTM5LjI2IDkwLjY2OCAxNDUuMTY4IDgzLjMyOCAxNTQuNTY0IDgwLjg1NUMxNTYuNzMyIDgwLjI4OSAxNTguOTgyIDgwIDE2MS4yNTYgODBDMTgyLjE2NCA4MCAyMDQuMjI1IDEwMi45OSAyMTIuNTcgMTMzLjQ3OUMyMTguNDE4IDE1NC44MzggMjE2LjcyOSAxNzYuNTcyIDIwOC4wNTMgMTkxLjYxN0MyMDQuNzU0IDE5Ny4zMzggMTk4Ljg0NiAyMDQuNjc4IDE4OS40NDkgMjA3LjE1QzE4Ny4yODEgMjA3LjcxNyAxODUuMDMxIDIwOC4wMDYgMTgyLjc1OCAyMDguMDA2QzE2MS44NSAyMDguMDA2IDEzOS43ODkgMTg1LjAxNiAxMzEuNDQzIDE1NC41MjdDMTI1LjU5NiAxMzMuMTY4IDEyNy4yODUgMTExLjQzNCAxMzUuOTYxIDk2LjM4OVpNMzE4LjQ5NiAyMjIuNjI3QzMyMi4wNDMgMjIzLjU1NyAzMjUuNjQxIDIyNC4wMDYgMzI5LjI0MiAyMjQuMDA2QzM1Ny4xMjEgMjI0LjAwNiAzODUuNDc1IDE5Ny4xNjQgMzk1Ljk5IDE1OC43NTJDMzk4LjgzOCAxNDguMzQ2IDQwMC4wMjUgMTM4LjA1NSAzOTkuODg5IDEyOC4yNjhDMzk5Ljg5MyAxMjguMTY0IDQwMCAxMjguMTA0IDQwMCAxMjhWMTA0LjU2MkM0MDAgNjUuOTM4IDM4NC45NjkgMjkuNjI1IDM1Ny42NTYgMi4zNDRDMzU0LjUgLTAuODEyIDM0OS40MzggLTAuNzUgMzQ2LjM0NCAyLjM0NEMzNDMuMjE5IDUuNDY5IDM0My4yMTkgMTAuNTMxIDM0Ni4zNDQgMTMuNjU2QzM2My44ODMgMzEuMTg0IDM3NS41IDUyLjk2OSAzODAuNzI5IDc2LjYyM0MzNzUuMjc3IDcxLjI4MSAzNjguODU3IDY3LjMxNiAzNjEuNDkyIDY1LjM3OUMzNTcuOTQ1IDY0LjQ0OSAzNTQuMzQ4IDY0IDM1MC43NDQgNjRDMzIyLjg2NSA2NCAyOTQuNTE0IDkwLjg0MiAyODMuOTk4IDEyOS4yNTRDMjcyLjEyNSAxNzIuNjI3IDI4Ny42MjMgMjE0LjUwMiAzMTguNDk2IDIyMi42MjdaTTI5OS40MzIgMTMzLjQ3OUMzMDcuNzc3IDEwMi45OSAzMjkuODM4IDgwIDM1MC43NDQgODBDMzUzLjAyIDgwIDM1NS4yNyA4MC4yODkgMzU3LjQyIDgwLjg1MkMzNjYuODMyIDgzLjMyOCAzNzIuNzQgOTAuNjY4IDM3Ni4wMzkgOTYuMzg5QzM4NC43MTcgMTExLjQzNCAzODYuNDA0IDEzMy4xNjggMzgwLjU1NyAxNTQuNTI3QzM3Mi4yMTEgMTg1LjAxNiAzNTAuMTUgMjA4LjAwNiAzMjkuMjQ0IDIwOC4wMDZDMzI2Ljk2OSAyMDguMDA2IDMyNC43MTkgMjA3LjcxNyAzMjIuNTY4IDIwNy4xNTRDMzEzLjE1NiAyMDQuNjc4IDMwNy4yNDggMTk3LjMzOCAzMDMuOTQ3IDE5MS42MTdDMjk1LjI3MSAxNzYuNTcyIDI5My41ODQgMTU0LjgzOCAyOTkuNDMyIDEzMy40NzlaTTc0Ljg5MSAzMTguNzUyQzEwNC4wMTIgMzExLjc1MiAxMTkuMTM3IDI3OC4wMDIgMTA4Ljc2MiAyNDMuMzc3Qzk5LjY2NiAyMTMuMDE0IDczLjg0NCAxOTEuOTc1IDQ3Ljk4OCAxOTEuOTc1QzQ0LjM1OSAxOTEuOTc1IDQwLjcyOSAxOTIuMzkxIDM3LjE0MyAxOTMuMjUyQzMwLjExNSAxOTQuOTQxIDIzLjk1MSAxOTguMjUyIDE4LjcxNyAyMDIuNjkzQzI0LjIzMiAxNzguMTk5IDM4LjM4NyAxNTYuMTM5IDU5LjE4OCAxNDEuMjY2TDY4LjY1NiAxMzQuNTE2QzcyLjI1IDEzMS45NTMgNzMuMDk0IDEyNi45NTMgNzAuNSAxMjMuMzU5QzY3Ljk2OSAxMTkuNzM0IDYyLjkwNiAxMTguOTM4IDU5LjM0NCAxMjEuNDg0TDQ5Ljg3NSAxMjguMjVDMTguNjU2IDE1MC41NzggMCAxODYuODI4IDAgMjI1LjIwM1YyNDhDMCAyNDguMjc1IDAuMjY2IDI0OC40MzggMC4yOTMgMjQ4LjcwNUMwLjQ2MSAyNTUuMjA3IDEuMjQ0IDI2MS44NjcgMy4yNyAyNjguNjI3QzEyLjM2NyAyOTguOTkgMzguMTg4IDMyMC4wMjkgNjQuMDQ1IDMyMC4wMjlDNjcuNjc0IDMyMC4wMjkgNzEuMzA1IDMxOS42MTMgNzQuODkxIDMxOC43NTJaTTE4LjU5OCAyNjQuMDM1QzE0LjIzIDI0OS40NjUgMTUuMzg1IDIzNC43NDYgMjEuNzY0IDIyMy42NTZDMjQuODg1IDIxOC4yMjkgMzAuNzM0IDIxMS4yNDggNDAuODgzIDIwOC44MDlDNDMuMTg0IDIwOC4yNTYgNDUuNTc0IDIwNy45NzUgNDcuOTg4IDIwNy45NzVDNjcuMDY2IDIwNy45NzUgODYuNjA0IDIyNS4xNyA5My40MzYgMjQ3Ljk2OUM5Ny44MDEgMjYyLjUzOSA5Ni42NDYgMjc3LjI1OCA5MC4yNyAyODguMzQ4Qzg3LjE0OCAyOTMuNzc1IDgxLjI5NyAzMDAuNzU2IDcxLjE1IDMwMy4xOTVDNjguODUgMzAzLjc0OCA2Ni40NTkgMzA0LjAyOSA2NC4wNDUgMzA0LjAyOUM0NC45NjcgMzA0LjAyOSAyNS40MjggMjg2LjgzNCAxOC41OTggMjY0LjAzNVpNMjU2IDI1Ni4wMDJDMTc2LjYzMSAyNTYuMDAyIDY0LjAxNiAzNzguNzUyIDY0LjAxNiA0NTYuMjVDNjQuMDE2IDQ5MS4xMjUgOTAuNzY0IDUxMiAxMzUuNzYgNTEyQzE4NC42MzEgNTEyIDIxNi44NzkgNDg2Ljg3NSAyNTYgNDg2Ljg3NUMyOTUuNDk4IDQ4Ni44NzUgMzI3Ljg2OSA1MTIgMzc2LjI0IDUxMkM0MjEuMjM4IDUxMiA0NDcuOTg2IDQ5MS4xMjUgNDQ3Ljk4NiA0NTYuMjVDNDQ3Ljk4NiAzNzguNzUyIDMzNS4zNjkgMjU2LjAwMiAyNTYgMjU2LjAwMlpNMzc2LjI0IDQ5NkMzNTMuNDA0IDQ5NiAzMzMuODQgNDg5LjUzOSAzMTQuOTIgNDgzLjI5MUMyOTYuNDM2IDQ3Ny4xODggMjc3LjMyMiA0NzAuODc1IDI1NiA0NzAuODc1QzIzNC45NDkgNDcwLjg3NSAyMTYuMDAyIDQ3Ny4xNDEgMTk3LjY4IDQ4My4yMDFDMTc4LjY1MiA0ODkuNDkyIDE1OC45NzcgNDk2IDEzNS43NiA0OTZDMTE0Ljk0MSA0OTYgODAuMDE2IDQ5MC44MzYgODAuMDE2IDQ1Ni4yNUM4MC4wMTYgMzg1LjY1IDE4OC41NjYgMjcyLjAwMiAyNTYgMjcyLjAwMlM0MzEuOTg2IDM4NS42NSA0MzEuOTg2IDQ1Ni4yNUM0MzEuOTg2IDQ5MC44MzYgMzk3LjA2MSA0OTYgMzc2LjI0IDQ5NlpNNDUxLjk2OSAxMjkuMDQ3QzQ0OC4wOTQgMTI2Ljg0NCA0NDMuMjE5IDEyOC4yMDMgNDQxLjA2MiAxMzIuMDMxQzQzOC44NzUgMTM1Ljg3NSA0NDAuMTg3IDE0MC43NSA0NDQuMDMxIDE0Mi45NTNDNDY2LjY2OCAxNTUuODgxIDQ4My4wNTcgMTc2Ljg1NyA0OTAuODQ4IDIwMS4wMjNDNDg2LjEyNSAxOTcuNTIgNDgwLjg3NyAxOTQuNjk5IDQ3NC44NTcgMTkzLjI1MkM0NzEuMjc1IDE5Mi4zOTEgNDY3LjY0MSAxOTEuOTc1IDQ2NC4wMTIgMTkxLjk3NUM0MzguMTU0IDE5MS45NzUgNDEyLjMzNiAyMTMuMDEyIDQwMy4yMzggMjQzLjM3N0MzOTIuODY1IDI3OC4wMDIgNDA3Ljk4OCAzMTEuNzUyIDQzNy4xMTEgMzE4Ljc1MkM0NDAuNjk1IDMxOS42MTMgNDQ0LjMyNiAzMjAuMDI5IDQ0Ny45NTEgMzIwLjAyOUM0NzMuNzg5IDMyMC4wMjkgNDk5LjUyMyAyOTguOTkyIDUwOC43MyAyNjguNjI3QzUxMC43NTYgMjYxLjg2NSA1MTEuNTQzIDI1NS4yMDUgNTExLjcwOSAyNDguNzAzQzUxMS43MzYgMjQ4LjQzNiA1MTIgMjQ4LjI3NSA1MTIgMjQ4VjIzMi41QzUxMiAxODkuODQ0IDQ4OSAxNTAuMjAzIDQ1MS45NjkgMTI5LjA0N1pNNDkzLjQyIDI2My45ODRDNDg2LjQ5OCAyODYuODEyIDQ2Ni45NTEgMzA0LjAyOSA0NDcuOTUxIDMwNC4wMjlDNDQ1LjU0MSAzMDQuMDI5IDQ0My4xNSAzMDMuNzQ4IDQ0MC44NSAzMDMuMTk1QzQzMC43MDMgMzAwLjc1NiA0MjQuODU0IDI5My43NzUgNDIxLjczMiAyODguMzQ4QzQxNS4zNTQgMjc3LjI1OCA0MTQuMTk5IDI2Mi41MzkgNDE4LjU2NCAyNDcuOTY5QzQyNS4zOTYgMjI1LjE3IDQ0NC45MzYgMjA3Ljk3NSA0NjQuMDEyIDIwNy45NzVDNDY2LjQyOCAyMDcuOTc1IDQ2OC44MTggMjA4LjI1NiA0NzEuMTE5IDIwOC44MDlDNDgxLjI2NiAyMTEuMjQ4IDQ4Ny4xMTcgMjE4LjIyOSA0OTAuMjM4IDIyMy42NTZDNDk2LjYxNSAyMzQuNzQ2IDQ5Ny43NyAyNDkuNDY1IDQ5My40MiAyNjMuOTg0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PawClaws: typeof Icon = x => (
    <Icon {...x}>
        <path d="M116.012 158.752C126.525 197.16 154.881 224.006 182.758 224.006C186.363 224.006 189.955 223.557 193.506 222.627C224.379 214.502 239.877 172.627 228.002 129.254C217.488 90.846 189.133 64 161.256 64C157.652 64 154.059 64.449 150.508 65.379C143.145 67.316 136.723 71.281 131.271 76.623C136.5 52.969 148.117 31.184 165.656 13.656C168.781 10.531 168.781 5.469 165.656 2.344C162.562 -0.75 157.5 -0.812 154.344 2.344C127.031 29.625 112 65.938 112 104.562V128C112 128.105 112.109 128.166 112.113 128.271C111.977 138.059 113.164 148.348 116.012 158.752ZM135.961 96.389C139.26 90.668 145.168 83.328 154.564 80.855C156.732 80.289 158.982 80 161.256 80C182.164 80 204.225 102.99 212.57 133.479C218.418 154.838 216.729 176.572 208.053 191.617C204.754 197.338 198.846 204.678 189.449 207.15C187.281 207.717 185.031 208.006 182.758 208.006C161.85 208.006 139.789 185.016 131.443 154.527C125.596 133.168 127.285 111.434 135.961 96.389ZM318.496 222.627C322.043 223.557 325.641 224.006 329.242 224.006C357.121 224.006 385.475 197.164 395.99 158.752C398.838 148.346 400.025 138.055 399.889 128.268C399.893 128.164 400 128.104 400 128V104.562C400 65.938 384.969 29.625 357.656 2.344C354.5 -0.812 349.438 -0.75 346.344 2.344C343.219 5.469 343.219 10.531 346.344 13.656C363.883 31.184 375.5 52.969 380.729 76.623C375.277 71.281 368.857 67.316 361.492 65.379C357.945 64.449 354.348 64 350.744 64C322.865 64 294.514 90.842 283.998 129.254C272.125 172.627 287.623 214.502 318.496 222.627ZM299.432 133.479C307.777 102.99 329.838 80 350.744 80C353.02 80 355.27 80.289 357.42 80.852C366.832 83.328 372.74 90.668 376.039 96.389C384.717 111.434 386.404 133.168 380.557 154.527C372.211 185.016 350.15 208.006 329.244 208.006C326.969 208.006 324.719 207.717 322.568 207.154C313.156 204.678 307.248 197.338 303.947 191.617C295.271 176.572 293.584 154.838 299.432 133.479ZM74.891 318.752C104.012 311.752 119.137 278.002 108.762 243.377C99.666 213.014 73.844 191.975 47.988 191.975C44.359 191.975 40.729 192.391 37.143 193.252C30.115 194.941 23.951 198.252 18.717 202.693C24.232 178.199 38.387 156.139 59.188 141.266L68.656 134.516C72.25 131.953 73.094 126.953 70.5 123.359C67.969 119.734 62.906 118.938 59.344 121.484L49.875 128.25C18.656 150.578 0 186.828 0 225.203V248C0 248.275 0.266 248.438 0.293 248.705C0.461 255.207 1.244 261.867 3.27 268.627C12.367 298.99 38.188 320.029 64.045 320.029C67.674 320.029 71.305 319.613 74.891 318.752ZM18.598 264.035C14.23 249.465 15.385 234.746 21.764 223.656C24.885 218.229 30.734 211.248 40.883 208.809C43.184 208.256 45.574 207.975 47.988 207.975C67.066 207.975 86.604 225.17 93.436 247.969C97.801 262.539 96.646 277.258 90.27 288.348C87.148 293.775 81.297 300.756 71.15 303.195C68.85 303.748 66.459 304.029 64.045 304.029C44.967 304.029 25.428 286.834 18.598 264.035ZM256 256.002C176.631 256.002 64.016 378.752 64.016 456.25C64.016 491.125 90.764 512 135.76 512C184.631 512 216.879 486.875 256 486.875C295.498 486.875 327.869 512 376.24 512C421.238 512 447.986 491.125 447.986 456.25C447.986 378.752 335.369 256.002 256 256.002ZM376.24 496C353.404 496 333.84 489.539 314.92 483.291C296.436 477.188 277.322 470.875 256 470.875C234.949 470.875 216.002 477.141 197.68 483.201C178.652 489.492 158.977 496 135.76 496C114.941 496 80.016 490.836 80.016 456.25C80.016 385.65 188.566 272.002 256 272.002S431.986 385.65 431.986 456.25C431.986 490.836 397.061 496 376.24 496ZM451.969 129.047C448.094 126.844 443.219 128.203 441.062 132.031C438.875 135.875 440.187 140.75 444.031 142.953C466.668 155.881 483.057 176.857 490.848 201.023C486.125 197.52 480.877 194.699 474.857 193.252C471.275 192.391 467.641 191.975 464.012 191.975C438.154 191.975 412.336 213.012 403.238 243.377C392.865 278.002 407.988 311.752 437.111 318.752C440.695 319.613 444.326 320.029 447.951 320.029C473.789 320.029 499.523 298.992 508.73 268.627C510.756 261.865 511.543 255.205 511.709 248.703C511.736 248.436 512 248.275 512 248V232.5C512 189.844 489 150.203 451.969 129.047ZM493.42 263.984C486.498 286.812 466.951 304.029 447.951 304.029C445.541 304.029 443.15 303.748 440.85 303.195C430.703 300.756 424.854 293.775 421.732 288.348C415.354 277.258 414.199 262.539 418.564 247.969C425.396 225.17 444.936 207.975 464.012 207.975C466.428 207.975 468.818 208.256 471.119 208.809C481.266 211.248 487.117 218.229 490.238 223.656C496.615 234.746 497.77 249.465 493.42 263.984Z" />
    </Icon>
);

export default PawClaws;
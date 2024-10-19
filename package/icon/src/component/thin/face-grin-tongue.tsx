
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `face-grin-tongue` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-tongue?s=thin face-grin-tongue}
 * @preview ![face-grin-tongue](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIuMDAxIDIwNi44ODlDMTkyLjAwMSAxOTguMDQ1IDE4NC44NDUgMTkwLjkwMiAxNzYuMDAxIDE5MC45MDJTMTYwLjAwMSAxOTguMDQ1IDE2MC4wMDEgMjA2Ljg4OUMxNjAuMDAxIDIxNS43MzQgMTY3LjE1NyAyMjIuODc3IDE3Ni4wMDEgMjIyLjg3N1MxOTIuMDAxIDIxNS43MzQgMTkyLjAwMSAyMDYuODg5Wk0xMjcuODkxIDMzNC43OTNDMTU5LjUwMyAzNDQuOTY1IDIwNi4xNzcgMzUwLjc5OSAyNTUuOTQ4IDM1MC43OTlDMzA1LjY5MiAzNTAuNzk5IDM1Mi4zNDEgMzQ0Ljk3MyAzODMuOTgxIDMzNC44MDFMMzg0LjAyOCAzMzQuOTIyQzM4MS4yMDQgMzUxLjc4MyAzNzAuMjUzIDM2Ni45MTYgMzU0Ljk3NSAzNzkuNDFDMzUzLjEyNCAzODAuOTI0IDM1Mi4wMDEgMzgzLjE2IDM1Mi4wMDEgMzg1LjU1M0MzNTIuMDAxIDM5Mi4yODkgMzU5Ljg0NSAzOTUuOTA0IDM2NS4wNzEgMzkxLjY0M0MzODMuMTk2IDM3Ni44NzMgMzk2LjI5NCAzNTguNTM1IDM5OS44MDcgMzM3LjU2MUM0MDEuMzYgMzI3LjMxNCAzOTMuMzYyIDMxOC44MDEgMzgzLjk3NSAzMTguODAxQzM4Mi4zNzggMzE4LjgwMSAzODAuNzM5IDMxOS4wNDcgMzc5LjEgMzE5LjU3NEMzNDguODI3IDMyOS4zMTYgMzAzLjkwMSAzMzQuODEyIDI1NS45NDggMzM0LjgxMlMxNjMuMDY5IDMyOS4zMTYgMTMyLjc5NiAzMTkuNTc0QzEzMS4xNCAzMTkuMDQ3IDEyOS40ODcgMzE4LjgwMSAxMjcuODc2IDMxOC44MDFDMTE4LjQxNyAzMTguODAxIDExMC40MzQgMzI3LjMxNCAxMTIuMDg5IDMzNy41NjFDMTE1LjY0OSAzNTguNTU1IDEyOC43ODIgMzc2LjkwNCAxNDYuOTMyIDM5MS42ODlDMTUyLjE1OSAzOTUuOTQzIDE2MC4wMDEgMzkyLjMzMiAxNjAuMDAxIDM4NS41OTZWMzg1LjUzN0MxNjAuMDAxIDM4My4xNDggMTU4Ljg3OCAzODAuOTE2IDE1Ny4wMjYgMzc5LjQwMkMxNDEuNzI3IDM2Ni44ODEgMTMwLjc0NSAzNTEuNzA5IDEyNy44OTEgMzM0Ljc5M1pNMjg4LjY5OCAzNzcuMDFDMjg1Ljg2NCAzNzcuMDEgMjgzLjAxMSAzNzcuMzUyIDI4MC4yMjIgMzc4LjA1MUwyNTYuMDAxIDM4NC4xMDJMMjMxLjc4MiAzNzguMDUxQzIyOC45OTEgMzc3LjM1MiAyMjYuMTQgMzc3LjAxIDIyMy4zMDYgMzc3LjAxQzIxNC4wMTMgMzc3LjAxIDIwNC45MzEgMzgwLjczNiAxOTkuMDMyIDM4OC4wODJDMTk0LjYzNCAzOTMuNTU5IDE5Mi4wMDEgNDAwLjUxNCAxOTIuMDAxIDQwOC4wODJWNDQ4LjA1MUMxOTIuMDAxIDQ4My4zNzEgMjIwLjY1NSA1MTIgMjU2LjAwMSA1MTJDMjkxLjM0OSA1MTIgMzIwLjAwMSA0ODMuMzcxIDMyMC4wMDEgNDQ4LjA1MVY0MDguMDgyQzMyMC4wMDEgNDAwLjUxNCAzMTcuMzcgMzkzLjU1OSAzMTIuOTcyIDM4OC4wODJDMzA3LjA3MSAzODAuNzM2IDI5Ny45OTEgMzc3LjAxIDI4OC42OTggMzc3LjAxWk0zMDQuMDAxIDQ0OC4wNTFDMzA0LjAwMSA0NzQuNDk4IDI4Mi40NjggNDk2LjAxMiAyNTYuMDAxIDQ5Ni4wMTJTMjA4LjAwMSA0NzQuNDk4IDIwOC4wMDEgNDQ4LjA1MVY0MDguMDgyQzIwOC4wMDEgNDAzLjQzNCAyMDkuOTA5IDQwMC4wOCAyMTEuNTExIDM5OC4wOUMyMTQuMTEgMzk0Ljg1IDIxOC40MDkgMzkyLjk5NiAyMjMuMzA2IDM5Mi45OTZDMjI0Ljg1IDM5Mi45OTYgMjI2LjM5NSAzOTMuMTg0IDIyNy45MDEgMzkzLjU2MkwyNDguMDU5IDM5OC41OThDMjQ4LjA1NyAzOTguNjUyIDI0OC4wMDEgMzk4LjY4NCAyNDguMDAxIDM5OC43MzhWNDMwLjcxM0MyNDguMDAxIDQzNS4xMTUgMjUxLjU3OSA0MzguNzA3IDI1Ni4wMDEgNDM4LjcwN1MyNjQuMDAxIDQzNS4xMTUgMjY0LjAwMSA0MzAuNzEzVjM5OC43MzhDMjY0LjAwMSAzOTguNjg0IDI2My45NDQgMzk4LjY1MiAyNjMuOTQyIDM5OC41OThMMjg0LjEwNCAzOTMuNTYzQzI4NS42MDYgMzkzLjE4NCAyODcuMTUzIDM5Mi45OTYgMjg4LjY5OCAzOTIuOTk2QzI5My41OTMgMzkyLjk5NiAyOTcuODkxIDM5NC44NSAzMDAuNDkzIDM5OC4wOUMzMDIuMDkzIDQwMC4wOCAzMDQuMDAxIDQwMy40MzQgMzA0LjAwMSA0MDguMDgyVjQ0OC4wNTFaTTM1Mi4wMDEgMjA2Ljg4OUMzNTIuMDAxIDE5OC4wNDUgMzQ0Ljg0NSAxOTAuOTAyIDMzNi4wMDEgMTkwLjkwMlMzMjAuMDAxIDE5OC4wNDUgMzIwLjAwMSAyMDYuODg5QzMyMC4wMDEgMjE1LjczNCAzMjcuMTU3IDIyMi44NzcgMzM2LjAwMSAyMjIuODc3UzM1Mi4wMDEgMjE1LjczNCAzNTIuMDAxIDIwNi44ODlaTTI0MC40NDIgOC40OUMxMjEuOTQgMTUuOTUzIDI1LjIyIDExMS42MzcgMTYuNjQ3IDIyOS45NzNDOS4zMjMgMzMxLjA4NCA2NC44NDMgNDE5Ljk3OSAxNDguMTA4IDQ2MS45MzhDMTUzLjU1IDQ2NC42ODIgMTYwLjAwMSA0NjAuNzk5IDE2MC4wMDEgNDU0LjcwOUMxNjAuMDAxIDQ1MS42NTIgMTU4LjI1MyA0NDguOTA4IDE1NS41MjIgNDQ3LjUzMUM3Ny4xMDQgNDA3Ljk4OCAyNC44MzcgMzIzLjk3NyAzMi44MDIgMjI4LjcwN0M0MS45NCAxMTkuMzk2IDEzMS41ODkgMzEuNTcgMjQxLjE0IDI0LjQ3MUMzNzEuMzU0IDE2LjAyMyA0ODAuMDAxIDExOS40NzUgNDgwLjAwMSAyNDcuODExQzQ4MC4wMDEgMzM1LjEgNDI5LjYxNCA0MTAuNjUgMzU2LjQ4NyA0NDcuNTI3QzM1My43NTMgNDQ4LjkwOCAzNTIuMDAxIDQ1MS42NTYgMzUyLjAwMSA0NTQuNzE3QzM1Mi4wMDEgNDYwLjgyMiAzNTguNDY2IDQ2NC42NzggMzYzLjkyMSA0NjEuOTI2QzQ0Mi4yMzcgNDIyLjQ0NSA0OTYuMDAxIDM0MS40NDMgNDk2LjAwMSAyNDcuODExQzQ5Ni4wMDEgMTEwLjIyMyAzODAuMDM2IC0wLjMwNyAyNDAuNDQyIDguNDlaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FaceGrinTongue(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M192.001 206.889C192.001 198.045 184.845 190.902 176.001 190.902S160.001 198.045 160.001 206.889C160.001 215.734 167.157 222.877 176.001 222.877S192.001 215.734 192.001 206.889ZM127.891 334.793C159.503 344.965 206.177 350.799 255.948 350.799C305.692 350.799 352.341 344.973 383.981 334.801L384.028 334.922C381.204 351.783 370.253 366.916 354.975 379.41C353.124 380.924 352.001 383.16 352.001 385.553C352.001 392.289 359.845 395.904 365.071 391.643C383.196 376.873 396.294 358.535 399.807 337.561C401.36 327.314 393.362 318.801 383.975 318.801C382.378 318.801 380.739 319.047 379.1 319.574C348.827 329.316 303.901 334.812 255.948 334.812S163.069 329.316 132.796 319.574C131.14 319.047 129.487 318.801 127.876 318.801C118.417 318.801 110.434 327.314 112.089 337.561C115.649 358.555 128.782 376.904 146.932 391.689C152.159 395.943 160.001 392.332 160.001 385.596V385.537C160.001 383.148 158.878 380.916 157.026 379.402C141.727 366.881 130.745 351.709 127.891 334.793ZM288.698 377.01C285.864 377.01 283.011 377.352 280.222 378.051L256.001 384.102L231.782 378.051C228.991 377.352 226.14 377.01 223.306 377.01C214.013 377.01 204.931 380.736 199.032 388.082C194.634 393.559 192.001 400.514 192.001 408.082V448.051C192.001 483.371 220.655 512 256.001 512C291.349 512 320.001 483.371 320.001 448.051V408.082C320.001 400.514 317.37 393.559 312.972 388.082C307.071 380.736 297.991 377.01 288.698 377.01ZM304.001 448.051C304.001 474.498 282.468 496.012 256.001 496.012S208.001 474.498 208.001 448.051V408.082C208.001 403.434 209.909 400.08 211.511 398.09C214.11 394.85 218.409 392.996 223.306 392.996C224.85 392.996 226.395 393.184 227.901 393.562L248.059 398.598C248.057 398.652 248.001 398.684 248.001 398.738V430.713C248.001 435.115 251.579 438.707 256.001 438.707S264.001 435.115 264.001 430.713V398.738C264.001 398.684 263.944 398.652 263.942 398.598L284.104 393.563C285.606 393.184 287.153 392.996 288.698 392.996C293.593 392.996 297.891 394.85 300.493 398.09C302.093 400.08 304.001 403.434 304.001 408.082V448.051ZM352.001 206.889C352.001 198.045 344.845 190.902 336.001 190.902S320.001 198.045 320.001 206.889C320.001 215.734 327.157 222.877 336.001 222.877S352.001 215.734 352.001 206.889ZM240.442 8.49C121.94 15.953 25.22 111.637 16.647 229.973C9.323 331.084 64.843 419.979 148.108 461.938C153.55 464.682 160.001 460.799 160.001 454.709C160.001 451.652 158.253 448.908 155.522 447.531C77.104 407.988 24.837 323.977 32.802 228.707C41.94 119.396 131.589 31.57 241.14 24.471C371.354 16.023 480.001 119.475 480.001 247.811C480.001 335.1 429.614 410.65 356.487 447.527C353.753 448.908 352.001 451.656 352.001 454.717C352.001 460.822 358.466 464.678 363.921 461.926C442.237 422.445 496.001 341.443 496.001 247.811C496.001 110.223 380.036 -0.307 240.442 8.49Z" />
        </Icon>
    </>
}
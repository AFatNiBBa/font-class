
import { Icon } from "../../index";

/**
 * A component that renders the `utensils` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/utensils?s=light utensils}
 * @preview ![utensils](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDUuNDE0IDEyLjc4MUMyNDMuNjMzIDQuMTA5IDIzNS4wNyAtMS4zMjggMjI2LjUwOCAwLjMyOEMyMTcuODUxIDIuMDk0IDIxMi4yODggMTAuNTYyIDIxNC4wMzkgMTkuMjE5TDIzNy42NjQgMTM0LjQyMkMyNDYuODUyIDE4Mi4wMzEgMjI5LjIyNyAyMTcuMjM0IDE4Ni42OTQgMjM2LjIxOUwxNzYuODE5IDI0MC42MjVMMTg1LjI1NiA0NjYuNjU2QzE4NS4zNSA0NzAuNTYyIDE4NC4wMzggNDc0LjM0NCAxODEuNjk0IDQ3N0MxODAuNDc1IDQ3OC4zNTkgMTc4LjQxMiA0ODAgMTc1LjM4MSA0ODBIMTQ1LjAzNkMxNDIuNTM2IDQ4MCAxNDAuMzQ5IDQ3OC45NTMgMTM4LjUzNiA0NzYuODkxQzEzNi4xOTIgNDc0LjI2NiAxMzQuODggNDcwLjUgMTM0Ljk0MiA0NjcuMDc4TDE0My4zNDkgMjQwLjcwM0wxMzMuNjMgMjM2LjI1QzkwLjUzNSAyMTYuNTE2IDczLjI1MyAxODIuNTYyIDgyLjMxNiAxMzUuNTMxTDEwNi4xNiAxOS4yMTlDMTA3LjkxIDEwLjU2MiAxMDIuMzQ4IDIuMDk0IDkzLjY5MSAwLjMyOEM4NS4xMjggLTEuMzU5IDc2LjU2NiA0LjEwOSA3NC43ODQgMTIuNzgxTDUwLjkwOSAxMjkuMjk3QzM5Ljc1MiAxODcuNDM4IDYwLjkwOSAyMzMuNjU2IDExMC41OTggMjYwLjUxNkwxMDIuOTQxIDQ2Ni4xNTZDMTAyLjcyMyA0NzcuODI4IDEwNi45NDIgNDg5LjQ2OSAxMTQuNTM2IDQ5OC4wNzhDMTIyLjQ3MyA1MDcuMDYyIDEzMy4zMTcgNTEyIDE0NS4wMzYgNTEySDE3NS4zODFDMTg3LjA2OSA1MTIgMTk3LjgxOSA1MDcuMDc4IDIwNS42OTUgNDk4LjE1NkMyMTMuMjg5IDQ4OS41NDcgMjE3LjQ3NiA0NzcuODQ0IDIxNy4yNTcgNDY1Ljc1TDIwOS42MDEgMjYwLjYwOUMyNTguNzI3IDIzNC4zMjggMjgwLjM1MyAxODYuNjg4IDI2OS4wNzEgMTI4LjE3MkwyNDUuNDE0IDEyLjc4MVpNNDI4Ljc4MSAwQzM5Ni45NjkgMCAzNDIuOTY5IDQzLjIwMyAzMTguMzEzIDEwMS4wMzFDMzAxLjI4MSAxNDAuOTIyIDI4NC45MzcgMjE5LjgyOCAzNjIuOTA2IDMwNC44NzVMMzU1LjIxOSA0NjMuOTIyQzM1NC42ODcgNDc3LjM3NSAzNTkuNDM3IDQ5MC4zNTkgMzY4LjI1IDQ5OS41MzFDMzc2IDUwNy41NzggMzg2LjEyNSA1MTIgMzk2Ljc4MSA1MTJINDIyLjQwNkM0NDUuMzQ0IDUxMiA0NjQgNDkxLjM1OSA0NjQgNDY2VjM4LjVDNDY0IDE3LjI2NiA0NDguMTg3IDAgNDI4Ljc4MSAwWk00MzIgNDY2QzQzMiA0NzQuMjUgNDI2LjkzNyA0ODAgNDIyLjQwNiA0ODBIMzk2Ljc4MUMzOTQuMzc1IDQ4MCAzOTIuNSA0NzguNTYyIDM5MS4zNDQgNDc3LjM1OUMzODguNTYyIDQ3NC40NjkgMzg3LjAzMSA0NjkuOTIyIDM4Ny4xODcgNDY1LjMyOEwzOTUuNTMxIDI5Mi43NjZMMzkwLjc4MSAyODcuNzk3QzMyMy42NTYgMjE3Ljc5NyAzMzAuMzEzIDE1NC40MjIgMzQ3Ljc1IDExMy41NzhDMzcwLjM0NCA2MC41OTQgNDE1LjM3NSAzMiA0MjguNzgxIDMyQzQyOS41OTQgMzIgNDMyIDM0LjIzNCA0MzIgMzguNVY0NjZaTTEyNy4xMjUgMTc1Ljk2OUMxMjcuNDA2IDE3NS45ODQgMTI3LjcxOSAxNzYgMTI4IDE3NkMxMzYuNDM3IDE3NiAxNDMuNSAxNjkuNDA2IDE0My45NjkgMTYwLjg5MUwxNTEuOTY5IDE2Ljg5MUMxNTIuNDY5IDguMDYyIDE0NS43MTkgMC41MTYgMTM2Ljg3NSAwLjAzMUMxMjguNTk0IC0wLjQwNiAxMjAuNTMxIDYuMzEyIDEyMC4wMzEgMTUuMTA5TDExMi4wMzEgMTU5LjEwOUMxMTEuNTMxIDE2Ny45MzggMTE4LjI4MSAxNzUuNDg0IDEyNy4xMjUgMTc1Ljk2OVpNMTkyIDE3NkMxOTIuMjgxIDE3NiAxOTIuNTk0IDE3NS45ODQgMTkyLjg3NSAxNzUuOTY5QzIwMS43MTkgMTc1LjQ4NCAyMDguNDY5IDE2Ny45MzggMjA3Ljk2OSAxNTkuMTA5TDE5OS45NjkgMTUuMTA5QzE5OS41IDYuMzEyIDE5Mi4wOTQgLTAuMzkxIDE4My4xMjUgMC4wMzFDMTc0LjI4MSAwLjUxNiAxNjcuNTMxIDguMDYyIDE2OC4wMzEgMTYuODkxTDE3Ni4wMzEgMTYwLjg5MUMxNzYuNSAxNjkuNDA2IDE4My41NjIgMTc2IDE5MiAxNzZaIi8+PC9zdmc+|width=32|height=32)
 */
const Utensils: typeof Icon = x => (
    <Icon {...x}>
        <path d="M245.414 12.781C243.633 4.109 235.07 -1.328 226.508 0.328C217.851 2.094 212.288 10.562 214.039 19.219L237.664 134.422C246.852 182.031 229.227 217.234 186.694 236.219L176.819 240.625L185.256 466.656C185.35 470.562 184.038 474.344 181.694 477C180.475 478.359 178.412 480 175.381 480H145.036C142.536 480 140.349 478.953 138.536 476.891C136.192 474.266 134.88 470.5 134.942 467.078L143.349 240.703L133.63 236.25C90.535 216.516 73.253 182.562 82.316 135.531L106.16 19.219C107.91 10.562 102.348 2.094 93.691 0.328C85.128 -1.359 76.566 4.109 74.784 12.781L50.909 129.297C39.752 187.438 60.909 233.656 110.598 260.516L102.941 466.156C102.723 477.828 106.942 489.469 114.536 498.078C122.473 507.062 133.317 512 145.036 512H175.381C187.069 512 197.819 507.078 205.695 498.156C213.289 489.547 217.476 477.844 217.257 465.75L209.601 260.609C258.727 234.328 280.353 186.688 269.071 128.172L245.414 12.781ZM428.781 0C396.969 0 342.969 43.203 318.313 101.031C301.281 140.922 284.937 219.828 362.906 304.875L355.219 463.922C354.687 477.375 359.437 490.359 368.25 499.531C376 507.578 386.125 512 396.781 512H422.406C445.344 512 464 491.359 464 466V38.5C464 17.266 448.187 0 428.781 0ZM432 466C432 474.25 426.937 480 422.406 480H396.781C394.375 480 392.5 478.562 391.344 477.359C388.562 474.469 387.031 469.922 387.187 465.328L395.531 292.766L390.781 287.797C323.656 217.797 330.313 154.422 347.75 113.578C370.344 60.594 415.375 32 428.781 32C429.594 32 432 34.234 432 38.5V466ZM127.125 175.969C127.406 175.984 127.719 176 128 176C136.437 176 143.5 169.406 143.969 160.891L151.969 16.891C152.469 8.062 145.719 0.516 136.875 0.031C128.594 -0.406 120.531 6.312 120.031 15.109L112.031 159.109C111.531 167.938 118.281 175.484 127.125 175.969ZM192 176C192.281 176 192.594 175.984 192.875 175.969C201.719 175.484 208.469 167.938 207.969 159.109L199.969 15.109C199.5 6.312 192.094 -0.391 183.125 0.031C174.281 0.516 167.531 8.062 168.031 16.891L176.031 160.891C176.5 169.406 183.562 176 192 176Z" />
    </Icon>
);

export default Utensils;
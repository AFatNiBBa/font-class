
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hat-santa` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hat-santa?s=light hat-santa}
 * @preview ![hat-santa](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NDAgMjM5LjM5QzY0MCAyMjguMTggNjM0LjEyNSAyMTguMDcyIDYyNC44NDQgMjEyLjMxQzYyNy40MzggMjAxLjYzNSA2MjQuNSAxOTAuMzMxIDYxNi41NjIgMTgyLjI3QzYwOC42NTYgMTc0LjM5OCA1OTcuNTMxIDE3MS40NyA1ODYuODc1IDE3NC4xMTVDNTc1LjQzNyAxNTUuMjg1IDU0NC41NjIgMTU1LjMxNiA1MzMuMTI1IDE3NC4wODNDNTIyLjYyNSAxNzEuNDA3IDUxMS4zNDQgMTc0LjM5OCA1MDMuMzQ0IDE4Mi4zNjVDNDk1LjQ2OSAxOTAuMzMxIDQ5Mi41NjIgMjAxLjYzNSA0OTUuMTg3IDIxMi4zNDFDNDg1Ljg0NCAyMTguMTA0IDQ4MCAyMjguMTggNDgwIDIzOS4zOVM0ODUuODc1IDI2MC43MDcgNDk1LjE1NiAyNjYuNDdDNDkyLjU2MiAyNzcuMTQ0IDQ5NS41IDI4OC40NDkgNTAzLjUgMjk2LjU3M0M1MTIuMDMxIDMwNC45OCA1MjIuNSAzMDcuNzgzIDUzMy4yMTkgMzA0LjgyM0M1MzguOTY5IDMxNC4xNDMgNTQ4LjkzOCAzMjAgNTYwIDMyMEM1NzEuMTI1IDMyMCA1ODEuMDk0IDMxNC4xMTIgNTg2LjgxMiAzMDQuNzkxQzU5NS40NjkgMzA3LjI0NyA2MDYuMDk0IDMwNi41MjMgNjE2LjgxMiAyOTYuMjU4QzYyNC41OTQgMjg4LjM1NCA2MjcuNDM3IDI3Ny4xNDQgNjI0LjgxMiAyNjYuNDM4QzYzNC4xNTYgMjYwLjY3NiA2NDAgMjUwLjYgNjQwIDIzOS4zOVpNNTkyLjQ2OSAyNTMuMTVDNTg5LjcxOSAyNTkuOTUyIDU5MC4xNTYgMjY3LjUwOSA1OTQuMjE5IDI3My4yNzFDNTg3LjcxOSAyNjkuNjUgNTc5Ljg3NSAyNjkuMzM1IDU3My40MzcgMjcyLjE2OUM1NjYuOTA2IDI3NC45NzIgNTYxLjkzNyAyODAuNDUxIDU2MC4yMTkgMjg3LjM0N0M1NTguMDYyIDI4MC40MTkgNTUzLjAzMSAyNzQuODQ2IDU0Ni41IDI3Mi4xNjlMNTQwLjUgMjcwLjMxMUg1MzcuMjgxQzUzMy4yMTkgMjcwLjMxMSA1MjkuMjUgMjcxLjM1MSA1MjYuMzEzIDI3My45NjRDNTI5Ljg0NCAyNjcuNTA5IDUzMC4yODEgMjU5Ljk1MiA1MjcuNTYzIDI1My4yNDVDNTI0Ljg0NCAyNDYuNDc1IDUxOS4zNDQgMjQxLjM0MiA1MTEuODc1IDIzOS44NjJDNTExLjg3NSAyMzkuODYyIDUxMS45NjkgMjM5LjczNiA1MTIuMzEzIDIzOS42NDJMNTEyLjQwNiAyMzkuNjFDNTE5LjM0NCAyMzcuNDM4IDUyNC44NDQgMjMyLjMwNSA1MjcuNTMxIDIyNS42M0M1MzAuMjgxIDIxOC44MjggNTI5Ljg0NCAyMTEuMjcxIDUyNS43ODEgMjA1LjUwOEM1MzIuMzQ0IDIwOS4wOTggNTM5Ljk2OSAyMDkuNDQ1IDU0Ni4yNSAyMDYuNzA1QzU1Mi45NjkgMjAzLjk2NiA1NTguMDYyIDE5OC40MjQgNTU5Ljc4MSAxOTEuNDMzQzU2MS45MzggMTk4LjQyNCA1NjcuMDMxIDIwMy45NjYgNTczLjQwNiAyMDYuNTQ4QzU4MC4xMjUgMjA5LjQ0NSA1ODcuOTA2IDIwOS4wMDQgNTkzLjY4OCAyMDQuODE2QzU5MC4xNTYgMjExLjI3MSA1ODkuNzE5IDIxOC44MjggNTkyLjQzOCAyMjUuNTM1QzU5NS4xNTYgMjMyLjMwNSA2MDAuNjU2IDIzNy40MzggNjA3LjU5NCAyMzkuMTY5QzYwMC42NTYgMjQxLjM0MiA1OTUuMTU2IDI0Ni40NzUgNTkyLjQ2OSAyNTMuMTVaTTQ2NCAzNTJINDU4Ljk5NkwzODIuOTM3IDE1NC4yNUMzNzkuNzgxIDE0Ni4wMzEgMzcwLjU2MiAxNDEuOTA2IDM2Mi4yNSAxNDUuMDYyQzM1NCAxNDguMjUgMzQ5LjkwNiAxNTcuNSAzNTMuMDYyIDE2NS43NUw0MjQuNjk3IDM1Mkg4Ny42MTlMMTYyLjk2OSAxNjMuNjU2QzE4Ny4xODggMTAzLjEyNSAyNDQuOTY5IDY0IDMxMC4xODggNjRDMzYxLjI1IDY0IDQwOS41IDg4LjgxMiA0MzkuMTg4IDEzMC40MDZMNDY2Ljk2OSAxNjkuMzEyQzQ3Mi4xMjUgMTc2LjQ2OSA0ODIuMDYzIDE3OC4xMjUgNDg5LjMxMyAxNzMuMDMxQzQ5Ni41IDE2Ny44NzUgNDk4LjE1NiAxNTcuOTA2IDQ5My4wMzEgMTUwLjY4N0w0NjUuMjUgMTExLjc4MUM0MjkuNTMxIDYxLjg0NCAzNzEuNTYyIDMyIDMxMC4xODggMzJDMjMxLjgxMiAzMiAxNjIuMzc1IDc5IDEzMy4yODEgMTUxLjc4MUw1My4xODIgMzUySDQ4QzIxLjQ5IDM1MiAwIDM3My40OSAwIDQwMFY0MzJDMCA0NTguNTEgMjEuNDkgNDgwIDQ4IDQ4MEg0NjRDNDkwLjUxIDQ4MCA1MTIgNDU4LjUxIDUxMiA0MzJWNDAwQzUxMiAzNzMuNDkgNDkwLjUxIDM1MiA0NjQgMzUyWk00ODAgNDMyQzQ4MCA0NDAuODM2IDQ3Mi44MzYgNDQ4IDQ2NCA0NDhINDhDMzkuMTY0IDQ0OCAzMiA0NDAuODM2IDMyIDQzMlY0MDBDMzIgMzkxLjE2NCAzOS4xNjQgMzg0IDQ4IDM4NEg0NjRDNDcyLjgzNiAzODQgNDgwIDM5MS4xNjQgNDgwIDQwMFY0MzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function HatSanta(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M640 239.39C640 228.18 634.125 218.072 624.844 212.31C627.438 201.635 624.5 190.331 616.562 182.27C608.656 174.398 597.531 171.47 586.875 174.115C575.437 155.285 544.562 155.316 533.125 174.083C522.625 171.407 511.344 174.398 503.344 182.365C495.469 190.331 492.562 201.635 495.187 212.341C485.844 218.104 480 228.18 480 239.39S485.875 260.707 495.156 266.47C492.562 277.144 495.5 288.449 503.5 296.573C512.031 304.98 522.5 307.783 533.219 304.823C538.969 314.143 548.938 320 560 320C571.125 320 581.094 314.112 586.812 304.791C595.469 307.247 606.094 306.523 616.812 296.258C624.594 288.354 627.437 277.144 624.812 266.438C634.156 260.676 640 250.6 640 239.39ZM592.469 253.15C589.719 259.952 590.156 267.509 594.219 273.271C587.719 269.65 579.875 269.335 573.437 272.169C566.906 274.972 561.937 280.451 560.219 287.347C558.062 280.419 553.031 274.846 546.5 272.169L540.5 270.311H537.281C533.219 270.311 529.25 271.351 526.313 273.964C529.844 267.509 530.281 259.952 527.563 253.245C524.844 246.475 519.344 241.342 511.875 239.862C511.875 239.862 511.969 239.736 512.313 239.642L512.406 239.61C519.344 237.438 524.844 232.305 527.531 225.63C530.281 218.828 529.844 211.271 525.781 205.508C532.344 209.098 539.969 209.445 546.25 206.705C552.969 203.966 558.062 198.424 559.781 191.433C561.938 198.424 567.031 203.966 573.406 206.548C580.125 209.445 587.906 209.004 593.688 204.816C590.156 211.271 589.719 218.828 592.438 225.535C595.156 232.305 600.656 237.438 607.594 239.169C600.656 241.342 595.156 246.475 592.469 253.15ZM464 352H458.996L382.937 154.25C379.781 146.031 370.562 141.906 362.25 145.062C354 148.25 349.906 157.5 353.062 165.75L424.697 352H87.619L162.969 163.656C187.188 103.125 244.969 64 310.188 64C361.25 64 409.5 88.812 439.188 130.406L466.969 169.312C472.125 176.469 482.063 178.125 489.313 173.031C496.5 167.875 498.156 157.906 493.031 150.687L465.25 111.781C429.531 61.844 371.562 32 310.188 32C231.812 32 162.375 79 133.281 151.781L53.182 352H48C21.49 352 0 373.49 0 400V432C0 458.51 21.49 480 48 480H464C490.51 480 512 458.51 512 432V400C512 373.49 490.51 352 464 352ZM480 432C480 440.836 472.836 448 464 448H48C39.164 448 32 440.836 32 432V400C32 391.164 39.164 384 48 384H464C472.836 384 480 391.164 480 400V432Z" />
        </Icon>
    </>
}
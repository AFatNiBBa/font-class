
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hat-santa` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hat-santa?s=regular hat-santa}
 * @preview ![hat-santa](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MTEuODc1IDIxNy44NDhDNjEzLjk0OSAyMDkuMzA5IDYxMS42IDIwMC4yNjQgNjA1LjI1IDE5My44MTZDNTk4LjkyNiAxODcuNTE4IDU5MC4wMjUgMTg1LjE3NiA1ODEuNSAxODcuMjkxQzU3Mi4zNSAxNzIuMjI3IDU0Ny42NSAxNzIuMjUyIDUzOC41IDE4Ny4yNjZDNTMwLjEgMTg1LjEyNSA1MjEuMDc0IDE4Ny41MTggNTE0LjY3NiAxOTMuODkxQzUwOC4zNzUgMjAwLjI2NCA1MDYuMDUxIDIwOS4zMDkgNTA4LjE1IDIxNy44NzNDNTAwLjY3NiAyMjIuNDgyIDQ5NiAyMzAuNTQzIDQ5NiAyMzkuNTEyQzQ5NiAyNDguNDc5IDUwMC42OTkgMjU2LjU2NiA1MDguMTI1IDI2MS4xNzZDNTA2LjA1MSAyNjkuNzE1IDUwOC40IDI3OC43NTggNTE0LjgwMSAyODUuMjU4QzUyMS42MjUgMjkxLjk4NCA1MzAgMjk0LjIyNSA1MzguNTc0IDI5MS44NTdDNTQzLjE3NiAyOTkuMzE0IDU1MS4xNSAzMDQgNTYwIDMwNEM1NjguOSAzMDQgNTc2Ljg3NSAyOTkuMjg5IDU4MS40NDkgMjkxLjgzMkM1ODguMzc1IDI5My43OTcgNTk2Ljg3NSAyOTMuMjE5IDYwNS40NDkgMjg1LjAwNkM2MTEuNjc2IDI3OC42ODQgNjEzLjk0OSAyNjkuNzE1IDYxMS44NSAyNjEuMTVDNjE5LjMyNCAyNTYuNTQxIDYyNCAyNDguNDc5IDYyNCAyMzkuNTEyQzYyNCAyMzAuNTQzIDYxOS4zMDEgMjIyLjQ1NyA2MTEuODc1IDIxNy44NDhaTTQ2NCAzNjhINDcwLjY0NUw0NjYuNDYzIDM1Ny4xMjdMMzkwLjQwNCAxNTkuMzc5QzM4Ni44NzMgMTUwLjE4MiAzNzcuODY3IDE0NC4wMDIgMzY3Ljk5OCAxNDQuMDAyQzM2NS4wNjQgMTQ0LjAwMiAzNjIuMTc2IDE0NC41MzMgMzU5LjQxIDE0NS41ODRDMzQ3LjA1MSAxNTAuMzU5IDM0MC44NzEgMTY0LjI3IDM0NS41OTIgMTc2LjYwOUw0MTcuMjMgMzYyLjg3MUw0MTkuMjAzIDM2OEg5My4wMzVMOTUuMDQ3IDM2Mi45NzFMMTcwLjM5NiAxNzQuNjI3QzE5My4zOTYgMTE3LjE0NSAyNDguMjY4IDgwIDMxMC4xODggODBDMzU4LjcwNSA4MCA0MDQuNDk2IDEwMy41NzIgNDMyLjY3NiAxNDMuMDU1TDQ2MC40NTkgMTgxLjk2MUM0NjQuOTg4IDE4OC4yNDggNDcyLjI4OSAxOTEuOTg0IDQ4MC4wMSAxOTEuOTg0QzQ4NSAxOTEuOTg0IDQ4OS44MDkgMTkwLjQ2MSA0OTMuOTEyIDE4Ny41NzhDNTA0LjY5NyAxNzkuODQgNTA3LjE5OSAxNjQuODI0IDQ5OS41NTUgMTU0LjA1N0w0NzEuNzYyIDExNS4xMzNDNDM0LjUyNyA2My4wNzYgMzc0LjEyNyAzMiAzMTAuMTg4IDMyQzIyOC41MTggMzIgMTU2LjE2MiA4MC45OTIgMTI1Ljg1NCAxNTYuODExTDQ1Ljc1NCAzNTcuMDI5TDQxLjM2NSAzNjhINDhDMjEuNDkgMzY4IDAgMzg5LjQ5IDAgNDE2VjQzMkMwIDQ1OC41MSAyMS40OSA0ODAgNDggNDgwSDQ2NEM0OTAuNTEgNDgwIDUxMiA0NTguNTEgNTEyIDQzMlY0MTZDNTEyIDM4OS40OSA0OTAuNTEgMzY4IDQ2NCAzNjhaTTQ4MC45OTggMTgzLjY3QzQ4MC42NTYgMTgzLjY5MSA0ODAuMzUyIDE4My45ODQgNDgwLjAxIDE4My45ODRDNDc5LjYyOSAxODMuOTg0IDQ3OS4yODkgMTgzLjc1MiA0NzguOTEgMTgzLjcyNUM0NzkuNjA1IDE4My43NzMgNDgwLjI5OSAxODMuNzEzIDQ4MC45OTggMTgzLjY3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HatSanta(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M611.875 217.848C613.949 209.309 611.6 200.264 605.25 193.816C598.926 187.518 590.025 185.176 581.5 187.291C572.35 172.227 547.65 172.252 538.5 187.266C530.1 185.125 521.074 187.518 514.676 193.891C508.375 200.264 506.051 209.309 508.15 217.873C500.676 222.482 496 230.543 496 239.512C496 248.479 500.699 256.566 508.125 261.176C506.051 269.715 508.4 278.758 514.801 285.258C521.625 291.984 530 294.225 538.574 291.857C543.176 299.314 551.15 304 560 304C568.9 304 576.875 299.289 581.449 291.832C588.375 293.797 596.875 293.219 605.449 285.006C611.676 278.684 613.949 269.715 611.85 261.15C619.324 256.541 624 248.479 624 239.512C624 230.543 619.301 222.457 611.875 217.848ZM464 368H470.645L466.463 357.127L390.404 159.379C386.873 150.182 377.867 144.002 367.998 144.002C365.064 144.002 362.176 144.533 359.41 145.584C347.051 150.359 340.871 164.27 345.592 176.609L417.23 362.871L419.203 368H93.035L95.047 362.971L170.396 174.627C193.396 117.145 248.268 80 310.188 80C358.705 80 404.496 103.572 432.676 143.055L460.459 181.961C464.988 188.248 472.289 191.984 480.01 191.984C485 191.984 489.809 190.461 493.912 187.578C504.697 179.84 507.199 164.824 499.555 154.057L471.762 115.133C434.527 63.076 374.127 32 310.188 32C228.518 32 156.162 80.992 125.854 156.811L45.754 357.029L41.365 368H48C21.49 368 0 389.49 0 416V432C0 458.51 21.49 480 48 480H464C490.51 480 512 458.51 512 432V416C512 389.49 490.51 368 464 368ZM480.998 183.67C480.656 183.691 480.352 183.984 480.01 183.984C479.629 183.984 479.289 183.752 478.91 183.725C479.605 183.773 480.299 183.713 480.998 183.67Z" />
        </Icon>
    </>
}

import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `sword-laser` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sword-laser?s=light sword-laser}
 * @preview ![sword-laser](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNjguNyAzMTUuNTQzTDI0Ni4wMTYgMjkyLjk4MkwyMTkuMDE4IDI2NS45ODRMMTgyLjI3IDIyOS4xMTFDMTc5LjE0NSAyMjUuOTg2IDE3NC4wMjEgMjI1Ljk4NiAxNzAuODk2IDIyOS4xMTFMMTU5LjY0NiAyNDAuNDg1QzE1Ni41MjIgMjQzLjYxIDE1Ni41MjIgMjQ4LjYxIDE1OS42NDYgMjUxLjczNUwxNjUuMjcxIDI1Ny40ODRMMTA4LjY1IDMxMy45ODFMMTA3LjUyNSAzMTIuODU2QzEwNC40IDMwOS43MzEgOTkuMjc1IDMwOS43MzEgOTYuMTUgMzEyLjg1NkwxNi4wMyAzOTIuOTc2Qy01LjM0MyA0MTQuMzUgLTUuMzQzIDQ0OC44NDggMTYuMDMgNDcwLjIyMUw0MS43NzkgNDk1Ljk3QzYzLjE1MiA1MTcuMzQzIDk3LjY1IDUxNy4zNDMgMTE5LjAyNCA0OTUuOTdMMTk5LjE0NCA0MTUuODVDMjAyLjI2OSA0MTIuNzI1IDIwMi4yNjkgNDA3LjYgMTk5LjE0NCA0MDQuNDc1TDI1NS43NjYgMzQ3Ljk3OUwyNjEuMzkgMzUzLjYwM0MyNjQuNTE1IDM1Ni43MjggMjY5LjY0IDM1Ni43MjggMjcyLjc2NCAzNTMuNjAzTDI4NC4wMTQgMzQyLjIyOUMyODcuMTM5IDMzOS4xMDQgMjg3LjEzOSAzMzQuMTA1IDI4NC4wMTQgMzMwLjk4TDI2OC43IDMxNS41NDNaTTk2LjQgNDczLjM0NkM4Ny41MjYgNDgyLjIyMSA3My4yNzcgNDgyLjIyMSA2NC40MDIgNDczLjM0NkwzOC42NTQgNDQ3LjU5OEMyOS43NzkgNDM4LjcyMyAyOS43NzkgNDI0LjQ3NCAzOC42NTQgNDE1LjZMMTAxLjkgMzUyLjM1M0wxMDguNjUgMzU5LjIyOEwxNTkuNTIxIDQxMC4xTDk2LjQgNDczLjM0NlpNMTc2LjUyIDM4MS44NTJMMTMxLjI3MyAzMzYuNjA0TDE0Mi42NDcgMzI1LjM1NUwxODcuODk1IDM3MC42MDJMMTc2LjUyIDM4MS44NTJaTTE5OS4xNDQgMzU5LjIyOEwxNTMuODk3IDMxMy45ODFMMTY1LjI3MSAzMDIuNzMyTDIxMC41MTggMzQ3Ljk3OUwxOTkuMTQ0IDM1OS4yMjhaTTIyMS43NjggMzM2LjYwNEwxNzYuNTIgMjkxLjM1N0wxODcuODk1IDI4MC4xMDhMMjMzLjE0MiAzMjUuMzU1TDIyMS43NjggMzM2LjYwNFpNNTAyLjM3NSAxMS45OTlDNDk1Ljg3NiA0Ljc1IDQ4Ni43NTEgMC41IDQ3Ny4wMDIgMEg0NzYuMjUyQzQ2Ni44NzggMCA0NTcuNzUzIDMuMzc1IDQ1MC42MjkgOS42MjRMMjMyLjI1NSAyMTAuMjg0QzIyNS41NTggMjE2LjQzOCAyMjUuMzM3IDIyNi45MyAyMzEuNzY3IDIzMy4zNjFMMjMxLjgyMyAyMzMuNDE3QzIzNy44ODEgMjM5LjQ3NSAyNDcuNjM4IDIzOS42ODEgMjUzLjk0NiAyMzMuODg0TDQ3Mi4xMjcgMzMuMzczQzQ3My4yNTIgMzIuNDk4IDQ3NC42MjcgMzEuOTk4IDQ3Ni4wMDIgMzEuOTk4QzQ3Ny4wMDIgMzIuMTIzIDQ3OC4xMjcgMzIuNjIzIDQ3OC43NTIgMzMuNDk4QzQ4MC4zNzcgMzUuMTIzIDQ4MC41MDIgMzcuODczIDQ3OC44NzcgMzkuNjIzTDI3OC4xMTcgMjU4LjA1NUMyNzIuMzIgMjY0LjM2MiAyNzIuNTI1IDI3NC4xMTkgMjc4LjU4MyAyODAuMTc3QzI4NS4wMTMgMjg2LjYwNyAyOTUuNTAzIDI4Ni4zODcgMzAxLjY1NyAyNzkuNjkzTDUwMi41IDYxLjI0NkM1MTUuMjUgNDcuMjQ3IDUxNS4xMjUgMjUuODczIDUwMi4zNzUgMTEuOTk5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SwordLaser(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M268.7 315.543L246.016 292.982L219.018 265.984L182.27 229.111C179.145 225.986 174.021 225.986 170.896 229.111L159.646 240.485C156.522 243.61 156.522 248.61 159.646 251.735L165.271 257.484L108.65 313.981L107.525 312.856C104.4 309.731 99.275 309.731 96.15 312.856L16.03 392.976C-5.343 414.35 -5.343 448.848 16.03 470.221L41.779 495.97C63.152 517.343 97.65 517.343 119.024 495.97L199.144 415.85C202.269 412.725 202.269 407.6 199.144 404.475L255.766 347.979L261.39 353.603C264.515 356.728 269.64 356.728 272.764 353.603L284.014 342.229C287.139 339.104 287.139 334.105 284.014 330.98L268.7 315.543ZM96.4 473.346C87.526 482.221 73.277 482.221 64.402 473.346L38.654 447.598C29.779 438.723 29.779 424.474 38.654 415.6L101.9 352.353L108.65 359.228L159.521 410.1L96.4 473.346ZM176.52 381.852L131.273 336.604L142.647 325.355L187.895 370.602L176.52 381.852ZM199.144 359.228L153.897 313.981L165.271 302.732L210.518 347.979L199.144 359.228ZM221.768 336.604L176.52 291.357L187.895 280.108L233.142 325.355L221.768 336.604ZM502.375 11.999C495.876 4.75 486.751 0.5 477.002 0H476.252C466.878 0 457.753 3.375 450.629 9.624L232.255 210.284C225.558 216.438 225.337 226.93 231.767 233.361L231.823 233.417C237.881 239.475 247.638 239.681 253.946 233.884L472.127 33.373C473.252 32.498 474.627 31.998 476.002 31.998C477.002 32.123 478.127 32.623 478.752 33.498C480.377 35.123 480.502 37.873 478.877 39.623L278.117 258.055C272.32 264.362 272.525 274.119 278.583 280.177C285.013 286.607 295.503 286.387 301.657 279.693L502.5 61.246C515.25 47.247 515.125 25.873 502.375 11.999Z" />
        </Icon>
    </>
}
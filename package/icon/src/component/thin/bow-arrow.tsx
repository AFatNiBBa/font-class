
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bow-arrow` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bow-arrow?s=thin bow-arrow}
 * @preview ![bow-arrow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDQuNDIxIDE4Ny44MTNDNDAyLjEyNCAxODQuMDQ4IDM5Ny4xNzEgMTgyLjkwNyAzOTMuNDA1IDE4NS4xNzNDMzg5LjYzOSAxODcuNDg1IDM4OC40NjggMTkyLjQwNyAzOTAuNzY0IDE5Ni4xODhDNDQ1LjYyNCAyODUuNjUyIDQzMi4wMyA0MDAuMDM3IDM1Ny43MTggNDc0LjM0NkMzNTcuNzA2IDQ3NC4zNTcgMzU3LjcxMiA0NzQuMzc5IDM1Ny43IDQ3NC4zOTFMMjM3LjY1NiAzNTQuMzUyQzIzNC41MzEgMzUxLjIyNyAyMjkuNDY4IDM1MS4yMjcgMjI2LjM0MyAzNTQuMzUyQzIyMy4yMTggMzU3LjQ3NyAyMjMuMjE4IDM2Mi41MzkgMjI2LjM0MyAzNjUuNjY0TDM3MC4zNDMgNTA5LjY1NkMzNzEuOTA1IDUxMS4yMTkgMzczLjk1MiA1MTIgMzc1Ljk5OSA1MTJDMzc4LjA0NiA1MTIgMzgwLjA5MyA1MTEuMjE5IDM4MS42NTUgNTA5LjY1NkMzODQuNzggNTA2LjUzMiAzODQuNzggNTAxLjQ2OSAzODEuNjU1IDQ5OC4zNDRMMzY4Ljk4NSA0ODUuNjc1QzM2OC45OTcgNDg1LjY2MyAzNjkuMDE4IDQ4NS42NjkgMzY5LjAzIDQ4NS42NThDNDQ4LjU5MiA0MDYuMDk5IDQ2My4xMzkgMjgzLjYyMSA0MDQuNDIxIDE4Ny44MTNaTTE0Ni4zNDQgMjg1LjY2OEMxNDcuOTA2IDI4Ny4yMyAxNDkuOTUzIDI4OC4wMTEgMTUyIDI4OC4wMTFTMTU2LjA5NCAyODcuMjMgMTU3LjY1NiAyODUuNjY4QzE2MC43ODEgMjgyLjU0MyAxNjAuNzgxIDI3Ny40ODEgMTU3LjY1NiAyNzQuMzU2TDM3LjYxMiAxNTQuMzE3QzM3LjYyMyAxNTQuMzA1IDM3LjY0NSAxNTQuMzExIDM3LjY1NyAxNTQuMjk5QzExMS45NjkgODAuMDA2IDIyNi4zNzUgNjYuMzgyIDMxNS44MjcgMTIxLjI1NEMzMTkuNTYyIDEyMy41MzUgMzI0LjQ4MyAxMjIuMzY0IDMyNi44NDMgMTE4LjYxNEMzMjkuMTQgMTE0LjgzMyAzMjcuOTY4IDEwOS45MTEgMzI0LjIwMiAxMDcuNTk5QzIyOC4zNzUgNDguODk4IDEwNS45MDYgNjMuNDEzIDI2LjM0NCAxNDIuOTg3QzI2LjMzMiAxNDIuOTk5IDI2LjMzOCAxNDMuMDIxIDI2LjMyNyAxNDMuMDMyTDEzLjY1NyAxMzAuMzYzQzEwLjUzMiAxMjcuMjM4IDUuNDY5IDEyNy4yMzggMi4zNDQgMTMwLjM2M0MtMC43ODEgMTMzLjQ4OCAtMC43ODEgMTM4LjU1IDIuMzQ0IDE0MS42NzVMMTQ2LjM0NCAyODUuNjY4Wk01MDkuNjU0IDIuMzdDNTA3Ljc2NCAwLjQ3OSA1MDUuMDE0IC0wLjQxMiA1MDIuNDM2IDAuMTgyTDM1OC40MzYgMjguOTc4QzM1Mi4yNzQgMzAuMjAyIDM0OS43NDcgMzcuOTE3IDM1NC4zNDMgNDIuNDc3TDQwNi4yODYgOTQuNDE4TDE2NS4zMDYgMzM1LjM4NEw4MS40MzIgMzIwLjEzNUM4MC45NjMgMzIwLjA1NyA4MC40NjMgMzIwLjAxIDc5Ljk5NCAzMjAuMDFDNzcuOTAxIDMyMC4wMSA3NS44MzggMzIwLjgzOCA3NC4zMzggMzIyLjM1M0wyLjMzOCAzOTQuMzVDMC4zMzggMzk2LjMzNCAtMC40NDMgMzk5LjIyNCAwLjI0NSA0MDEuOTU5QzAuOTMyIDQwNC42OTMgMi45OTUgNDA2Ljg2NSA1LjY4MiA0MDcuNjYyTDgxLjU1NyA0MzAuNDI2TDEwNC4zMzggNTA2LjI5N0MxMDUuMTUgNTA5IDEwNy4zMDcgNTExLjA2MyAxMTAuMDI1IDUxMS43NUMxMTIuNzc1IDUxMi40NTMgMTE1LjY1IDUxMS42NDEgMTE3LjY1IDUwOS42NTZMMTg5LjY1IDQzNy42NkMxOTEuNDk0IDQzNS44MDEgMTkyLjMzOCA0MzMuMTYgMTkxLjg2OSA0MzAuNTY3TDE3Ni42MTkgMzQ2LjY5Nkw0MTcuNTk4IDEwNS43M0w0NjkuNTQ1IDE1Ny42NzRDNDczLjgzNCAxNjEuOTYzIDQ4MS43MzMgMTYwLjE3NCA0ODMuMDQ1IDE1My41ODFMNTExLjg0MiA5LjU4OEM1MTIuMzczIDYuOTc5IDUxMS41NDUgNC4yNiA1MDkuNjU0IDIuMzdaTTIzLjEyIDM5Ni4xOTNMODIuNjgyIDMzNi42MzRMMTUxLjU0NSAzNDkuMTQ1TDg1LjcxMyA0MTQuOTcyTDIzLjEyIDM5Ni4xOTNaTTExNS44MDcgNDg4Ljg3Nkw5Ny4wMjUgNDI2LjI4NkwxNjIuODU3IDM2MC40NTdMMTc1LjM2OSA0MjkuMzE3TDExNS44MDcgNDg4Ljg3NlpNNDcwLjI5NSAxMzUuNzg1TDM3Ni4yMzMgNDEuNzI3TDQ5My43OTUgMTguMjI4TDQ3MC4yOTUgMTM1Ljc4NVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BowArrow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M404.421 187.813C402.124 184.048 397.171 182.907 393.405 185.173C389.639 187.485 388.468 192.407 390.764 196.188C445.624 285.652 432.03 400.037 357.718 474.346C357.706 474.357 357.712 474.379 357.7 474.391L237.656 354.352C234.531 351.227 229.468 351.227 226.343 354.352C223.218 357.477 223.218 362.539 226.343 365.664L370.343 509.656C371.905 511.219 373.952 512 375.999 512C378.046 512 380.093 511.219 381.655 509.656C384.78 506.532 384.78 501.469 381.655 498.344L368.985 485.675C368.997 485.663 369.018 485.669 369.03 485.658C448.592 406.099 463.139 283.621 404.421 187.813ZM146.344 285.668C147.906 287.23 149.953 288.011 152 288.011S156.094 287.23 157.656 285.668C160.781 282.543 160.781 277.481 157.656 274.356L37.612 154.317C37.623 154.305 37.645 154.311 37.657 154.299C111.969 80.006 226.375 66.382 315.827 121.254C319.562 123.535 324.483 122.364 326.843 118.614C329.14 114.833 327.968 109.911 324.202 107.599C228.375 48.898 105.906 63.413 26.344 142.987C26.332 142.999 26.338 143.021 26.327 143.032L13.657 130.363C10.532 127.238 5.469 127.238 2.344 130.363C-0.781 133.488 -0.781 138.55 2.344 141.675L146.344 285.668ZM509.654 2.37C507.764 0.479 505.014 -0.412 502.436 0.182L358.436 28.978C352.274 30.202 349.747 37.917 354.343 42.477L406.286 94.418L165.306 335.384L81.432 320.135C80.963 320.057 80.463 320.01 79.994 320.01C77.901 320.01 75.838 320.838 74.338 322.353L2.338 394.35C0.338 396.334 -0.443 399.224 0.245 401.959C0.932 404.693 2.995 406.865 5.682 407.662L81.557 430.426L104.338 506.297C105.15 509 107.307 511.063 110.025 511.75C112.775 512.453 115.65 511.641 117.65 509.656L189.65 437.66C191.494 435.801 192.338 433.16 191.869 430.567L176.619 346.696L417.598 105.73L469.545 157.674C473.834 161.963 481.733 160.174 483.045 153.581L511.842 9.588C512.373 6.979 511.545 4.26 509.654 2.37ZM23.12 396.193L82.682 336.634L151.545 349.145L85.713 414.972L23.12 396.193ZM115.807 488.876L97.025 426.286L162.857 360.457L175.369 429.317L115.807 488.876ZM470.295 135.785L376.233 41.727L493.795 18.228L470.295 135.785Z" />
        </Icon>
    </>
}
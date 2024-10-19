
import { Icon } from "../../index";

/**
 * A component that renders the `eclipse` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/eclipse?s=solid eclipse}
 * @preview ![eclipse](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQuMDA5IDgwLjAyMUMzNjYuNzYzIDgwLjAyMSAyODguMDE3IDE1OC43NjIgMjg4LjAxNyAyNTZTMzY2Ljc2MyA0MzEuOTc5IDQ2NC4wMDkgNDMxLjk3OVM2NDAgMzUzLjIzOCA2NDAgMjU2UzU2MS4yNTQgODAuMDIxIDQ2NC4wMDkgODAuMDIxWk0xNjUuNTIzIDM0Ni40ODlDMTE1LjY1MSAyOTYuNjIgMTE1LjY1MSAyMTUuMzggMTY1LjUyMyAxNjUuNTExQzIwMC42NDYgMTMwLjM5IDI1MS4wMTkgMTIwLjUxNyAyOTUuMjY3IDEzNC43NjVDMzAyLjc2NiAxMjQuMzkxIDMxMS4xNDEgMTE0Ljc2NyAzMjAuMzkxIDEwNS44OTNMMjcxLjUxOCA5LjY1NUMyNjUuMTQzIC0zLjIxOCAyNDYuODk0IC0zLjIxOCAyNDAuNTIgOS42NTVMMTkzLjI3MiAxMDQuMjY5TDkyLjc3NyA3MC43NzNDNzkuMTUyIDY2LjI3MyA2Ni4yNzggNzkuMjcyIDcwLjc3OCA5Mi43N0wxMDQuMjc2IDE5My4xMzNMOS42NTYgMjQwLjUwMkMtMy4yMTkgMjQ2Ljg3NiAtMy4yMTkgMjY1LjEyNCA5LjY1NiAyNzEuNDk4TDEwNC4yNzYgMzE4Ljc0Mkw3MC43NzggNDE5LjIzQzY2LjI3OCA0MzIuODUzIDc5LjI3NyA0NDUuNzI3IDkyLjc3NyA0NDEuMjI3TDE5My4xNDcgNDA3LjczMkwyNDAuMzk1IDUwMi4zNDVDMjQ2Ljc2OSA1MTUuMjE4IDI2NS4wMTggNTE1LjIxOCAyNzEuMzkzIDUwMi4zNDVMMzE4Ljc2NiA0MDcuNzMyTDMyNC4wMTUgNDA5LjQ4MUMzMTMuMjY2IDM5OS43MzIgMzAzLjc2NiAzODguOTg0IDI5NS4yNjcgMzc3LjIzNUMyNTEuMDE5IDM5MS40ODMgMjAwLjY0NiAzODEuNjEgMTY1LjUyMyAzNDYuNDg5Wk0yNTYuMDE5IDE2MC4wMTJDMjAzLjE0NiAxNjAuMDEyIDE2MC4wMjMgMjAzLjEzMSAxNjAuMDIzIDI1NlMyMDMuMTQ2IDM1MS45ODggMjU2LjAxOSAzNTEuOTg4QzI2My43NjggMzUxLjk4OCAyNzEuMTQzIDM1MC43MzggMjc4LjI2OCAzNDkuMTE0QzI2NC4xNDMgMzIxLjExNyAyNTYuMDE5IDI4OS40OTYgMjU2LjAxOSAyNTZTMjY0LjE0MyAxOTAuODgzIDI3OC4yNjggMTYyLjg4NkMyNzEuMTQzIDE2MS4yNjIgMjYzLjc2OCAxNjAuMDEyIDI1Ni4wMTkgMTYwLjAxMloiLz48L3N2Zz4=|width=32|height=32)
 */
const Eclipse: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M464.009 80.021C366.763 80.021 288.017 158.762 288.017 256S366.763 431.979 464.009 431.979S640 353.238 640 256S561.254 80.021 464.009 80.021ZM165.523 346.489C115.651 296.62 115.651 215.38 165.523 165.511C200.646 130.39 251.019 120.517 295.267 134.765C302.766 124.391 311.141 114.767 320.391 105.893L271.518 9.655C265.143 -3.218 246.894 -3.218 240.52 9.655L193.272 104.269L92.777 70.773C79.152 66.273 66.278 79.272 70.778 92.77L104.276 193.133L9.656 240.502C-3.219 246.876 -3.219 265.124 9.656 271.498L104.276 318.742L70.778 419.23C66.278 432.853 79.277 445.727 92.777 441.227L193.147 407.732L240.395 502.345C246.769 515.218 265.018 515.218 271.393 502.345L318.766 407.732L324.015 409.481C313.266 399.732 303.766 388.984 295.267 377.235C251.019 391.483 200.646 381.61 165.523 346.489ZM256.019 160.012C203.146 160.012 160.023 203.131 160.023 256S203.146 351.988 256.019 351.988C263.768 351.988 271.143 350.738 278.268 349.114C264.143 321.117 256.019 289.496 256.019 256S264.143 190.883 278.268 162.886C271.143 161.262 263.768 160.012 256.019 160.012Z" />
    </Icon>
);

export default Eclipse;
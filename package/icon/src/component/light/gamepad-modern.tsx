
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `gamepad-modern` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gamepad-modern?s=light gamepad-modern}
 * @preview ![gamepad-modern](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzguNTk0IDM2OC4yMTVMNjA1LjIxOSAxNTYuNjEzQzYwMC43OTcgMTMxLjQ4OCA1ODguNjk1IDEwOC43OTUgNTcxLjE2OCA5MC44NFM1MzAuNjg4IDU5LjY2NCA1MDQuNTYzIDUzLjQ4NEg1MDQuNUM0NzkuMzc1IDQ3LjU1NSA0NDYuMTQ4IDQyLjE4NCA0MTIuNzU0IDM4LjI5NVMzNDUuNzk3IDMyIDMyMCAzMkMyOTQuMTg4IDMyIDI2MC42MTcgMzQuNDA2IDIyNy4yMjMgMzguMjk1UzE2MC42MDkgNDcuNTU1IDEzNS41IDUzLjQ4NEMxMDkuMzI4IDU5LjY2NCA4Ni4zNTkgNzIuODgxIDY4LjgyOCA5MC44MzRTMzkuMjAzIDEzMS40OCAzNC43ODEgMTU2LjYxM0wxLjQwNiAzNjguMjE1Qy0zLjc1IDM5Ny40NzUgNS42MDIgNDI1LjQyIDI0LjA3OCA0NDYuMDUxQzQyLjU1NSA0NjYuNjg0IDcwLjE1NiA0ODAgMTAxLjUgNDgwQzEyNi4zNDQgNDgwIDE0OS43ODkgNDcyLjQ4NCAxNjguOTg4IDQ1OS4zOTZDMTg4LjE4OCA0NDYuMzA3IDIwMy4xNDEgNDI3LjY0NiAyMTEgNDA1LjM1N0wyMTQuNzUgMzk0LjY3NkwyMTguNSAzODMuOTk2SDQyMS41TDQyNS4yNSAzOTQuNjc2TDQyOSA0MDUuMzU3QzQzNi44NTkgNDI3LjY0NiA0NTEuODEzIDQ0Ni4zMDcgNDcxLjAxMiA0NTkuMzk2QzQ5MC4yMTEgNDcyLjQ4NCA1MTMuNjU2IDQ4MCA1MzguNSA0ODBDNTY5Ljg0NCA0ODAgNTk3LjQ0NSA0NjYuNjg0IDYxNS45MjIgNDQ2LjA1MUM2MzQuMzk4IDQyNS40MiA2NDMuNzUgMzk3LjQ3NSA2MzguNTk0IDM2OC4yMTVaTTU5Mi4wODQgNDI0LjcwM0M1NzguODI0IDQzOS41MSA1NTkuMjk1IDQ0OCA1MzguNSA0NDhDNTIwLjU3OCA0NDggNTAzLjQ3NSA0NDIuNzk3IDQ4OS4wMzcgNDMyLjk1N0M0NzQuOTM2IDQyMy4zNDIgNDY0LjYwOSA0MTAuMTE3IDQ1OS4xOTMgMzk0Ljc1OEw0NTUuNDQzIDM4NC4wNzRMNDUxLjY5MyAzNzMuMzk1QzQ0Ny4xOTEgMzYwLjU3NiA0MzUuMDg2IDM1MS45OTYgNDIxLjUgMzUxLjk5NkgyMTguNUMyMDQuOTE0IDM1MS45OTYgMTkyLjgwOSAzNjAuNTc2IDE4OC4zMDcgMzczLjM5NUwxODQuNTU3IDM4NC4wNzZMMTgwLjgyIDM5NC43MTdDMTc1LjM5MSA0MTAuMTE3IDE2NS4wNjQgNDIzLjM0MiAxNTAuOTYzIDQzMi45NTVDMTM2LjUyNSA0NDIuNzk3IDExOS40MjIgNDQ4IDEwMS41IDQ0OEM4MC43MDUgNDQ4IDYxLjE3NiA0MzkuNTEgNDcuOTE2IDQyNC43MDNDMzUgNDEwLjI3OSAyOS42NzQgMzkyLjE5MSAzMy4wMTYgMzczLjIwMUw0OS43MDMgMjY3LjRMNjYuMjk3IDE2Mi4xNThDNjkuNTE2IDE0My44NjEgNzguMzA5IDEyNi45MjggOTEuNzIzIDExMy4xOTFDMTA1LjQxNCA5OS4xNyAxMjMuMDk0IDg5LjI5MyAxNDIuODU1IDg0LjYyN0MxNjUuOTc1IDc5LjE2OCAxOTcuMjUyIDc0LjAwMiAyMzAuOTI0IDcwLjA4QzI2NC41OTYgNjYuMTYgMjk2LjIzIDY0IDMyMCA2NEMzNDMuNzU0IDY0IDM3NS4zODEgNjYuMTYgNDA5LjA1MyA3MC4wOEM0NDIuNzI3IDc0LjAwMiA0NzQuMDE0IDc5LjE2OCA0OTcuMTUgODQuNjI5QzQ5Ny40MTYgODQuNjkxIDQ5Ny42ODYgODQuNzUyIDQ5Ny45NTUgODQuODA3QzUxNy4zNzEgODkuNTQ1IDUzNC43NTYgOTkuMzQ4IDU0OC4yNyAxMTMuMTkzQzU2MS42ODkgMTI2Ljk0MSA1NzAuNDg0IDE0My44NzMgNTczLjYwOSAxNjEuNkw1OTAuMjk3IDI2Ny40TDYwNy4wOCAzNzMuNzdDNjEwLjMyNiAzOTIuMTkxIDYwNSA0MTAuMjc5IDU5Mi4wODQgNDI0LjcwM1pNNDMyIDI0OEM0MjUuMzczIDI0OCA0MTkuMzczIDI1MC42ODggNDE1LjAyOSAyNTUuMDMzQzQxMC42ODYgMjU5LjM3NyA0MDggMjY1LjM3NyA0MDggMjcyUzQxMC42ODYgMjg0LjYyMyA0MTUuMDI5IDI4OC45NjdDNDE5LjM3MyAyOTMuMzEyIDQyNS4zNzMgMjk2IDQzMiAyOTZDNDM4LjYyOSAyOTYgNDQ0LjYyOSAyOTMuMzEyIDQ0OC45NzEgMjg4Ljk2N0M0NTMuMzE0IDI4NC42MjMgNDU2IDI3OC42MjMgNDU2IDI3MlM0NTMuMzE0IDI1OS4zNzcgNDQ4Ljk3MSAyNTUuMDMzQzQ0NC42MjkgMjUwLjY4OCA0MzguNjI5IDI0OCA0MzIgMjQ4Wk00OTYgMTUyQzQ4OS4zNzMgMTUyIDQ4My4zNzMgMTU0LjY4OCA0NzkuMDI5IDE1OS4wMzNDNDc0LjY4NiAxNjMuMzc3IDQ3MiAxNjkuMzc3IDQ3MiAxNzZTNDc0LjY4NiAxODguNjIzIDQ3OS4wMjkgMTkyLjk2N0M0ODMuMzczIDE5Ny4zMTIgNDg5LjM3MyAyMDAgNDk2IDIwMEM1MDIuNjI5IDIwMCA1MDguNjI5IDE5Ny4zMTIgNTEyLjk3MSAxOTIuOTY3QzUxNy4zMTQgMTg4LjYyMyA1MjAgMTgyLjYyMyA1MjAgMTc2UzUxNy4zMTQgMTYzLjM3NyA1MTIuOTcxIDE1OS4wMzNDNTA4LjYyOSAxNTQuNjg4IDUwMi42MjkgMTUyIDQ5NiAxNTJaTTI1NiAyMDhIMjA4VjE2MEMyMDggMTUxLjE1NiAyMDAuODQ0IDE0NCAxOTIgMTQ0UzE3NiAxNTEuMTU2IDE3NiAxNjBWMjA4SDEyOEMxMTkuMTU2IDIwOCAxMTIgMjE1LjE1NiAxMTIgMjI0UzExOS4xNTYgMjQwIDEyOCAyNDBIMTc2VjI4OEMxNzYgMjk2Ljg0NCAxODMuMTU2IDMwNCAxOTIgMzA0UzIwOCAyOTYuODQ0IDIwOCAyODhWMjQwSDI1NkMyNjQuODQ0IDI0MCAyNzIgMjMyLjg0NCAyNzIgMjI0UzI2NC44NDQgMjA4IDI1NiAyMDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function GamepadModern(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M638.594 368.215L605.219 156.613C600.797 131.488 588.695 108.795 571.168 90.84S530.688 59.664 504.563 53.484H504.5C479.375 47.555 446.148 42.184 412.754 38.295S345.797 32 320 32C294.188 32 260.617 34.406 227.223 38.295S160.609 47.555 135.5 53.484C109.328 59.664 86.359 72.881 68.828 90.834S39.203 131.48 34.781 156.613L1.406 368.215C-3.75 397.475 5.602 425.42 24.078 446.051C42.555 466.684 70.156 480 101.5 480C126.344 480 149.789 472.484 168.988 459.396C188.188 446.307 203.141 427.646 211 405.357L214.75 394.676L218.5 383.996H421.5L425.25 394.676L429 405.357C436.859 427.646 451.813 446.307 471.012 459.396C490.211 472.484 513.656 480 538.5 480C569.844 480 597.445 466.684 615.922 446.051C634.398 425.42 643.75 397.475 638.594 368.215ZM592.084 424.703C578.824 439.51 559.295 448 538.5 448C520.578 448 503.475 442.797 489.037 432.957C474.936 423.342 464.609 410.117 459.193 394.758L455.443 384.074L451.693 373.395C447.191 360.576 435.086 351.996 421.5 351.996H218.5C204.914 351.996 192.809 360.576 188.307 373.395L184.557 384.076L180.82 394.717C175.391 410.117 165.064 423.342 150.963 432.955C136.525 442.797 119.422 448 101.5 448C80.705 448 61.176 439.51 47.916 424.703C35 410.279 29.674 392.191 33.016 373.201L49.703 267.4L66.297 162.158C69.516 143.861 78.309 126.928 91.723 113.191C105.414 99.17 123.094 89.293 142.855 84.627C165.975 79.168 197.252 74.002 230.924 70.08C264.596 66.16 296.23 64 320 64C343.754 64 375.381 66.16 409.053 70.08C442.727 74.002 474.014 79.168 497.15 84.629C497.416 84.691 497.686 84.752 497.955 84.807C517.371 89.545 534.756 99.348 548.27 113.193C561.689 126.941 570.484 143.873 573.609 161.6L590.297 267.4L607.08 373.77C610.326 392.191 605 410.279 592.084 424.703ZM432 248C425.373 248 419.373 250.688 415.029 255.033C410.686 259.377 408 265.377 408 272S410.686 284.623 415.029 288.967C419.373 293.312 425.373 296 432 296C438.629 296 444.629 293.312 448.971 288.967C453.314 284.623 456 278.623 456 272S453.314 259.377 448.971 255.033C444.629 250.688 438.629 248 432 248ZM496 152C489.373 152 483.373 154.688 479.029 159.033C474.686 163.377 472 169.377 472 176S474.686 188.623 479.029 192.967C483.373 197.312 489.373 200 496 200C502.629 200 508.629 197.312 512.971 192.967C517.314 188.623 520 182.623 520 176S517.314 163.377 512.971 159.033C508.629 154.688 502.629 152 496 152ZM256 208H208V160C208 151.156 200.844 144 192 144S176 151.156 176 160V208H128C119.156 208 112 215.156 112 224S119.156 240 128 240H176V288C176 296.844 183.156 304 192 304S208 296.844 208 288V240H256C264.844 240 272 232.844 272 224S264.844 208 256 208Z" />
        </Icon>
    </>
}
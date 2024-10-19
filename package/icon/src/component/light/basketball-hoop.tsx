
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `basketball-hoop` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/basketball-hoop?s=light basketball-hoop}
 * @preview ![basketball-hoop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzEuNDk2IDE3NS44NDhDNTcyLjYzNSA3MS4zODEgNDU1LjM3OSAwIDMyMCAwUzY3LjM2NSA3MS4zODEgOC41MDQgMTc1Ljg0OEMyLjk1NSAxODUuNjkzIDAgMTk2Ljc5OSAwIDIwOC4xMDJWMzI2LjE0M0MwIDM1MS41NyAxNS4wNTMgMzc0LjU4NiAzOC4zNDggMzg0Ljc3N0wxMDUuMzc1IDQxNC4xMDJDMTE2LjY2OCA0MTkuMDQxIDEyOS4wNyA0MDkuODk1IDEyNy42ODggMzk3LjY0NkMxMjcuMDQ3IDM5MS45NzMgMTIzLjQzMiAzODcuMDcgMTE4LjIwMSAzODQuNzgzTDUxLjE3NCAzNTUuNDU5QzM5LjUyNyAzNTAuMzYzIDMyIDMzOC44NTUgMzIgMzI2LjE0M1YyMDguMTAyQzMyIDIwMi40MzcgMzMuMTg5IDE5Ny4zMDEgMzUuNDM5IDE5My4yNDRDOTAuNjA1IDkzLjc4NSAxOTkuNjQzIDMyIDMyMCAzMlM1NDkuMzk1IDkzLjc4NSA2MDQuNTYxIDE5My4yNDRDNjA2LjgxMSAxOTcuMzAxIDYwOCAyMDIuNDM4IDYwOCAyMDguMTAyVjMyNi4xNDNDNjA4IDMzOC44NTUgNjAwLjQ3NSAzNTAuMzYzIDU4OC44MjYgMzU1LjQ1OUw1MjEuNzk5IDM4NC43ODNDNTE2LjU2OCAzODcuMDcgNTEyLjk1MyAzOTEuOTczIDUxMi4zMTIgMzk3LjY0NkM1MTAuOTMgNDA5Ljg5NSA1MjMuMzM0IDQxOS4wNDEgNTM0LjYyNSA0MTQuMTAyTDYwMS42NTIgMzg0Ljc3N0M2MjQuOTQ3IDM3NC41ODYgNjQwIDM1MS41NyA2NDAgMzI2LjE0M1YyMDguMTAyQzY0MCAxOTYuNzk5IDYzNy4wNDUgMTg1LjY5MyA2MzEuNDk2IDE3NS44NDhaTTQ2NCAyMDhDNDcyLjgzOCAyMDggNDgwIDIwMC44MzYgNDgwIDE5MlYxNjBDNDgwIDE0Mi4zMjYgNDY1LjY3NCAxMjggNDQ4IDEyOEgxOTJDMTc0LjMyOCAxMjggMTYwIDE0Mi4zMjYgMTYwIDE2MFYxOTJDMTYwIDIwMC44MzYgMTY3LjE2NCAyMDggMTc2IDIwOEMxODQuODM4IDIwOCAxOTIgMjAwLjgzNiAxOTIgMTkyVjE2MEg0NDhWMTkyQzQ0OCAyMDAuODM2IDQ1NS4xNjQgMjA4IDQ2NCAyMDhaTTUyOCAyNTZDNTI4IDI0Ny4xNjQgNTIwLjgzOCAyNDAgNTEyIDI0MEgxMjhDMTE5LjE2NCAyNDAgMTEyIDI0Ny4xNjQgMTEyIDI1NlMxMTkuMTY0IDI3MiAxMjggMjcySDE0Ni42TDE3Mi4wOTQgNDk3Ljc5N0MxNzIuNzUgNTAzLjY3MiAxNzYuNjI1IDUwOC43MDMgMTgyLjA5NCA1MTAuODc1QzE4My45OTQgNTExLjYxOSAxODUuOTk0IDUxMS45ODQgMTg3Ljk4MiA1MTEuOTg0QzE5MS43MTUgNTExLjk4NCAxOTUuNDA4IDUxMC42OTUgMTk4LjM0NCA1MDguMTg4TDI1My40NTUgNDYxLjM4NUwzMDkuNzUgNTA4LjI5N0MzMTIuNzE5IDUxMC43NjYgMzE2LjM3NSA1MTIgMzIwIDUxMlMzMjcuMjgxIDUxMC43NjYgMzMwLjI1IDUwOC4yOTdMMzg2LjU0NSA0NjEuMzg1TDQ0MS42NTYgNTA4LjE4N0M0NDQuNTk0IDUxMC42ODggNDQ4LjI4MSA1MTIgNDUyIDUxMkM0NTMuOTk5IDUxMiA0NTYgNTExLjYyNSA0NTcuOTA2IDUxMC44NzVDNDYzLjM3NSA1MDguNzAzIDQ2Ny4yNSA1MDMuNjcyIDQ2Ny45MDYgNDk3Ljc5N0w0OTMuNCAyNzJINTEyQzUyMC44MzggMjcyIDUyOCAyNjQuODM2IDUyOCAyNTZaTTQzOS40NzkgNDY0LjM1NUw0MDcuMjYgNDM2Ljk5MkM0MDEuMjg5IDQzMS45MjIgMzkzLjkxOCA0MjkuMzg1IDM4Ni41NDUgNDI5LjM4NUMzNzkuMjcxIDQyOS4zODUgMzcxLjk5NiA0MzEuODU0IDM2Ni4wNTkgNDM2LjgwMUwzMjAgNDc1LjE4NEwyNzMuOTQxIDQzNi44MDFDMjY4LjAwNCA0MzEuODU0IDI2MC43MyA0MjkuMzg1IDI1My40NTUgNDI5LjM4NUMyNDYuMDg0IDQyOS4zODUgMjM4LjcxMSA0MzEuOTI0IDIzMi43NDIgNDM2Ljk5MkwyMDAuNTIxIDQ2NC4zNTVMMTc4LjgwMyAyNzJINDYxLjE5N0w0MzkuNDc5IDQ2NC4zNTVaTTI0MCAzNDRDMjUzLjI1NiAzNDQgMjY0IDMzMy4yNTQgMjY0IDMyMEMyNjQgMzA2Ljc0NCAyNTMuMjU2IDI5NiAyNDAgMjk2QzIyNi43NDYgMjk2IDIxNiAzMDYuNzQ0IDIxNiAzMjBDMjE2IDMzMy4yNTQgMjI2Ljc0NiAzNDQgMjQwIDM0NFpNMjU2IDM4NEMyNTYgMzk3LjI1NCAyNjYuNzQ2IDQwOCAyODAgNDA4QzI5My4yNTYgNDA4IDMwNCAzOTcuMjU0IDMwNCAzODRDMzA0IDM3MC43NDQgMjkzLjI1NiAzNjAgMjgwIDM2MEMyNjYuNzQ2IDM2MCAyNTYgMzcwLjc0NCAyNTYgMzg0Wk0zMzYgMzg0QzMzNiAzOTcuMjU0IDM0Ni43NDYgNDA4IDM2MCA0MDhDMzczLjI1NiA0MDggMzg0IDM5Ny4yNTQgMzg0IDM4NEMzODQgMzcwLjc0NCAzNzMuMjU2IDM2MCAzNjAgMzYwQzM0Ni43NDYgMzYwIDMzNiAzNzAuNzQ0IDMzNiAzODRaTTQwMCAzNDRDNDEzLjI1NiAzNDQgNDI0IDMzMy4yNTQgNDI0IDMyMEM0MjQgMzA2Ljc0NCA0MTMuMjU2IDI5NiA0MDAgMjk2QzM4Ni43NDYgMjk2IDM3NiAzMDYuNzQ0IDM3NiAzMjBDMzc2IDMzMy4yNTQgMzg2Ljc0NiAzNDQgNDAwIDM0NFpNMzIwIDM0NEMzMzMuMjU2IDM0NCAzNDQgMzMzLjI1NCAzNDQgMzIwQzM0NCAzMDYuNzQ0IDMzMy4yNTYgMjk2IDMyMCAyOTZDMzA2Ljc0NiAyOTYgMjk2IDMwNi43NDQgMjk2IDMyMEMyOTYgMzMzLjI1NCAzMDYuNzQ2IDM0NCAzMjAgMzQ0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BasketballHoop(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M631.496 175.848C572.635 71.381 455.379 0 320 0S67.365 71.381 8.504 175.848C2.955 185.693 0 196.799 0 208.102V326.143C0 351.57 15.053 374.586 38.348 384.777L105.375 414.102C116.668 419.041 129.07 409.895 127.688 397.646C127.047 391.973 123.432 387.07 118.201 384.783L51.174 355.459C39.527 350.363 32 338.855 32 326.143V208.102C32 202.437 33.189 197.301 35.439 193.244C90.605 93.785 199.643 32 320 32S549.395 93.785 604.561 193.244C606.811 197.301 608 202.438 608 208.102V326.143C608 338.855 600.475 350.363 588.826 355.459L521.799 384.783C516.568 387.07 512.953 391.973 512.312 397.646C510.93 409.895 523.334 419.041 534.625 414.102L601.652 384.777C624.947 374.586 640 351.57 640 326.143V208.102C640 196.799 637.045 185.693 631.496 175.848ZM464 208C472.838 208 480 200.836 480 192V160C480 142.326 465.674 128 448 128H192C174.328 128 160 142.326 160 160V192C160 200.836 167.164 208 176 208C184.838 208 192 200.836 192 192V160H448V192C448 200.836 455.164 208 464 208ZM528 256C528 247.164 520.838 240 512 240H128C119.164 240 112 247.164 112 256S119.164 272 128 272H146.6L172.094 497.797C172.75 503.672 176.625 508.703 182.094 510.875C183.994 511.619 185.994 511.984 187.982 511.984C191.715 511.984 195.408 510.695 198.344 508.188L253.455 461.385L309.75 508.297C312.719 510.766 316.375 512 320 512S327.281 510.766 330.25 508.297L386.545 461.385L441.656 508.187C444.594 510.688 448.281 512 452 512C453.999 512 456 511.625 457.906 510.875C463.375 508.703 467.25 503.672 467.906 497.797L493.4 272H512C520.838 272 528 264.836 528 256ZM439.479 464.355L407.26 436.992C401.289 431.922 393.918 429.385 386.545 429.385C379.271 429.385 371.996 431.854 366.059 436.801L320 475.184L273.941 436.801C268.004 431.854 260.73 429.385 253.455 429.385C246.084 429.385 238.711 431.924 232.742 436.992L200.521 464.355L178.803 272H461.197L439.479 464.355ZM240 344C253.256 344 264 333.254 264 320C264 306.744 253.256 296 240 296C226.746 296 216 306.744 216 320C216 333.254 226.746 344 240 344ZM256 384C256 397.254 266.746 408 280 408C293.256 408 304 397.254 304 384C304 370.744 293.256 360 280 360C266.746 360 256 370.744 256 384ZM336 384C336 397.254 346.746 408 360 408C373.256 408 384 397.254 384 384C384 370.744 373.256 360 360 360C346.746 360 336 370.744 336 384ZM400 344C413.256 344 424 333.254 424 320C424 306.744 413.256 296 400 296C386.746 296 376 306.744 376 320C376 333.254 386.746 344 400 344ZM320 344C333.256 344 344 333.254 344 320C344 306.744 333.256 296 320 296C306.746 296 296 306.744 296 320C296 333.254 306.746 344 320 344Z" />
        </Icon>
    </>
}
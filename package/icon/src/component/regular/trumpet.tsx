
import { Icon } from "../../index";

/**
 * A component that renders the `trumpet` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/trumpet?s=regular trumpet}
 * @preview ![trumpet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MDggNDhDNTk3LjI1IDQ4IDU4Ny4yNSA1My4yNSA1ODEuMzc1IDYyLjI0OUM1ODAuODc1IDYyLjg3NCA1MzYuMjUgMTI4LjYyMSA0NjguNzUgMTY0LjI0NEM0NTQuMjUgMTcxLjg2OSA0MzYuNzUgMTc1Ljk5MyA0MTguMzc1IDE3NS45OTNINDAwVjE2Ny45OTRDNDAwIDE1NC43MzkgMzg5LjI1NCAxNDMuOTk1IDM3NiAxNDMuOTk1UzM1MiAxNTQuNzM5IDM1MiAxNjcuOTk0VjE3NS45OTNIMzEyVjE2Ny45OTRDMzEyIDE1NC43MzkgMzAxLjI1NCAxNDMuOTk1IDI4OCAxNDMuOTk1UzI2NCAxNTQuNzM5IDI2NCAxNjcuOTk0VjE3NS45OTNIMjI0VjE2Ny45OTRDMjI0IDE1NC43MzkgMjEzLjI1NCAxNDMuOTk1IDIwMCAxNDMuOTk1UzE3NiAxNTQuNzM5IDE3NiAxNjcuOTk0VjE3NS45OTNINDhWMTY3Ljk5NEM0OCAxNTQuNzM5IDM3LjI1NCAxNDMuOTk1IDI0IDE0My45OTVTMCAxNTQuNzM5IDAgMTY3Ljk5NFYzMTEuOTg3QzAgMzI1LjI0IDEwLjc0NiAzMzUuOTg1IDI0IDMzNS45ODVTNDggMzI1LjI0IDQ4IDMxMS45ODdWMzAzLjk4N0g4MC42MjVDNjAgMzM1Ljk4NSA1OC41IDM3Ni42MDggNzYuNzUgNDA5Ljk4MkM5NC44NzUgNDQzLjM1NSAxMzAgNDY0LjEwNCAxNjggNDYzLjk3OUg0MDhDNDM4LjYyNSA0NjQuNjA0IDQ2OCA0NTEuMzU0IDQ4Ny43NSA0MjcuODU2QzUwNy42MjUgNDA0LjQ4MiA1MTUuODc1IDM3My40ODMgNTEwLjI1IDM0My4yMzVDNTUzLjg3NSAzNzcuNjA4IDU4MSA0MTcuMjMxIDU4MS4zNzUgNDE3LjczMUM1ODcuMjUgNDI2LjYwNiA1OTcuMjUgNDMxLjk4IDYwOCA0MzEuOThDNjE4LjI1IDQzMS45OCA2NDAgNDI0LjIzMSA2NDAgMzk5Ljk4MlY3OS45OThDNjQwIDY5Ljg3NCA2MzIuMjUgNDggNjA4IDQ4Wk0xNzYgNDE1Ljk4MUgxNjhDMTM3LjEyNSA0MTUuOTgxIDExMiAzOTAuODU4IDExMiAzNTkuOTg0UzEzNy4xMjUgMzAzLjk4NyAxNjggMzAzLjk4N0gxNzZWNDE1Ljk4MVpNMjY0IDQxNS45ODFIMjI0VjMwMy45ODdIMjY0VjQxNS45ODFaTTM1MiA0MTUuOTgxSDMxMlYzMDMuOTg3SDM1MlY0MTUuOTgxWk00MDggNDE1Ljk4MUg0MDBWMzAzLjk4N0g0MDhDNDM4Ljg3NSAzMDMuOTg3IDQ2NCAzMjkuMTExIDQ2NCAzNTkuOTg0UzQzOC44NzUgNDE1Ljk4MSA0MDggNDE1Ljk4MVpNNTkyIDM1NC40ODRDNTY5LjI1IDMyOS4xMTEgNTM0LjM3NSAyOTYuMTEyIDQ5MS4yNSAyNzMuMzY0QzQ2OS43NSAyNjEuOTg5IDQ0NC42MjUgMjU1Ljk4OSA0MTguNSAyNTUuOTg5SDQ4VjIyMy45OTFINDE4LjVDNDQ0LjYyNSAyMjMuOTkxIDQ2OS43NSAyMTcuOTkxIDQ5MS4yNSAyMDYuNjE3QzUzNC43NSAxODMuNjE4IDU2OS41IDE1MC44NyA1OTIgMTI1LjYyMVYzNTQuNDg0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Trumpet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M608 48C597.25 48 587.25 53.25 581.375 62.249C580.875 62.874 536.25 128.621 468.75 164.244C454.25 171.869 436.75 175.993 418.375 175.993H400V167.994C400 154.739 389.254 143.995 376 143.995S352 154.739 352 167.994V175.993H312V167.994C312 154.739 301.254 143.995 288 143.995S264 154.739 264 167.994V175.993H224V167.994C224 154.739 213.254 143.995 200 143.995S176 154.739 176 167.994V175.993H48V167.994C48 154.739 37.254 143.995 24 143.995S0 154.739 0 167.994V311.987C0 325.24 10.746 335.985 24 335.985S48 325.24 48 311.987V303.987H80.625C60 335.985 58.5 376.608 76.75 409.982C94.875 443.355 130 464.104 168 463.979H408C438.625 464.604 468 451.354 487.75 427.856C507.625 404.482 515.875 373.483 510.25 343.235C553.875 377.608 581 417.231 581.375 417.731C587.25 426.606 597.25 431.98 608 431.98C618.25 431.98 640 424.231 640 399.982V79.998C640 69.874 632.25 48 608 48ZM176 415.981H168C137.125 415.981 112 390.858 112 359.984S137.125 303.987 168 303.987H176V415.981ZM264 415.981H224V303.987H264V415.981ZM352 415.981H312V303.987H352V415.981ZM408 415.981H400V303.987H408C438.875 303.987 464 329.111 464 359.984S438.875 415.981 408 415.981ZM592 354.484C569.25 329.111 534.375 296.112 491.25 273.364C469.75 261.989 444.625 255.989 418.5 255.989H48V223.991H418.5C444.625 223.991 469.75 217.991 491.25 206.617C534.75 183.618 569.5 150.87 592 125.621V354.484Z" />
    </Icon>
);

export default Trumpet;
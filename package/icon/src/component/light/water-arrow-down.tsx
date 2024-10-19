
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `water-arrow-down` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/water-arrow-down?s=light water-arrow-down}
 * @preview ![water-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjIuMDM4IDQ3OS4wOTRDNTMzLjkgNDc1LjQ2OSA1MDguNzQzIDQ2MC43NSA0OTMuMDA5IDQzOC43MTlDNDg3LjAwOSA0MzAuMjgxIDQ3Mi45NjQgNDMwLjI4MSA0NjYuOTY0IDQzOC43MTlDNDQ4LjUyNyA0NjQuNTYyIDQxNy41MTEgNDgwIDM4My45OTcgNDgwQzM1MC40ODIgNDgwIDMxOS40NjggNDY0LjU2MiAzMDEuMDMxIDQzOC43MTlDMjk0Ljk5OSA0MzAuMjgxIDI4MC45OTkgNDMwLjI4MSAyNzQuOTY4IDQzOC43MTlDMjU2LjUzMSA0NjQuNTYyIDIyNS41MTcgNDgwIDE5Mi4wMDEgNDgwQzE1OC40ODggNDgwIDEyNy40NzIgNDY0LjU2MiAxMDkuMDM0IDQzOC43MTlDMTA2LjAzNCA0MzQuNSAxMDEuMTc1IDQzMiA5Ni4wMDMgNDMyUzg1Ljk4OCA0MzQuNSA4Mi45ODggNDM4LjcxOUM2Ny4yNTUgNDYwLjc1IDQyLjA5OSA0NzUuNDY5IDEzLjk1OCA0NzkuMDk0QzUuMTkzIDQ4MC4yMTkgLTAuOTkzIDQ4OC4yNSAwLjEzMiA0OTcuMDMxQzEuMjU3IDUwNS43ODEgOS4xNjEgNTEyLjA5NCAxOC4wNTIgNTEwLjg0NEM0OC4wMzYgNTA2Ljk2OSA3NS41MzYgNDkzLjM3NSA5NS45ODggNDcyLjc1QzEyMC42MTMgNDk3LjU5NCAxNTUuMjIyIDUxMiAxOTIuMDAxIDUxMkMyMjguNzY3IDUxMiAyNjMuMzc0IDQ5Ny41OTQgMjg3Ljk5OSA0NzIuNzVDMzEyLjYyNCA0OTcuNTk0IDM0Ny4yMzIgNTEyIDM4My45OTcgNTEyQzQyMC43NzcgNTEyIDQ1NS4zODYgNDk3LjU5NCA0ODAuMDExIDQ3Mi43NUM1MDAuNDYyIDQ5My4zNzUgNTI3Ljk2MiA1MDYuOTY5IDU1Ny45NDcgNTEwLjg0NEM1NjYuODk4IDUxMi4yMTkgNTc0Ljc0MSA1MDUuNzgxIDU3NS44NjYgNDk3LjAzMUM1NzYuOTkxIDQ4OC4yNSA1NzAuODA0IDQ4MC4yMTkgNTYyLjAzOCA0NzkuMDk0Wk0xOC4wNTIgMzgyLjg0NEM0OC4wMzYgMzc4Ljk2OSA3NS41MzYgMzY1LjM3NSA5NS45ODggMzQ0Ljc1QzEyMC42MTMgMzY5LjU5NCAxNTUuMjIyIDM4NCAxOTIuMDAxIDM4NEMyMjguNzY3IDM4NCAyNjMuMzc0IDM2OS41OTQgMjg3Ljk5OSAzNDQuNzVDMzEyLjYyNCAzNjkuNTk0IDM0Ny4yMzIgMzg0IDM4My45OTcgMzg0QzQyMC43NzcgMzg0IDQ1NS4zODYgMzY5LjU5NCA0ODAuMDExIDM0NC43NUM1MDAuNDYyIDM2NS4zNzUgNTI3Ljk2MiAzNzguOTY5IDU1Ny45NDcgMzgyLjg0NEM1NjYuODk4IDM4NC4yMTkgNTc0Ljc0MSAzNzcuNzgxIDU3NS44NjYgMzY5LjAzMUM1NzYuOTkxIDM2MC4yNSA1NzAuODA0IDM1Mi4yMTkgNTYyLjAzOCAzNTEuMDk0QzUzMy45IDM0Ny40NjkgNTA4Ljc0MyAzMzIuNzUgNDkzLjAwOSAzMTAuNzE5QzQ4Ny4wMDkgMzAyLjI4MSA0NzIuOTY0IDMwMi4yODEgNDY2Ljk2NCAzMTAuNzE5QzQ0OC41MjcgMzM2LjU2MiA0MTcuNTExIDM1MiAzODMuOTk3IDM1MkMzNTAuNDgyIDM1MiAzMTkuNDY4IDMzNi41NjIgMzAxLjAzMSAzMTAuNzE5QzI5NC45OTkgMzAyLjI4MSAyODAuOTk5IDMwMi4yODEgMjc0Ljk2OCAzMTAuNzE5QzI1Ni41MzEgMzM2LjU2MiAyMjUuNTE3IDM1MiAxOTIuMDAxIDM1MkMxNTguNDg4IDM1MiAxMjcuNDcyIDMzNi41NjIgMTA5LjAzNCAzMTAuNzE5QzEwNi4wMzQgMzA2LjUgMTAxLjE3NSAzMDQgOTYuMDAzIDMwNFM4NS45ODggMzA2LjUgODIuOTg4IDMxMC43MTlDNjcuMjU1IDMzMi43NSA0Mi4wOTkgMzQ3LjQ2OSAxMy45NTggMzUxLjA5NEM1LjE5MyAzNTIuMjE5IC0wLjk5MyAzNjAuMjUgMC4xMzIgMzY5LjAzMUMxLjI1NyAzNzcuNzgxIDkuMTYxIDM4NC4wOTQgMTguMDUyIDM4Mi44NDRaTTI3Ni42ODcgMjM1LjMxMkMyNzkuODEyIDIzOC40MzggMjgzLjkwNiAyNDAgMjg3Ljk5OSAyNDBTMjk2LjE4NyAyMzguNDM4IDI5OS4zMTIgMjM1LjMxMkwzOTUuMzEyIDEzOS4zMTJDNDAxLjU2MiAxMzMuMDYyIDQwMS41NjIgMTIyLjkzNyAzOTUuMzEyIDExNi42ODhTMzc4LjkzNyAxMTAuNDM4IDM3Mi42ODcgMTE2LjY4OEwzMDMuOTk5IDE4NS4zNzVWMTZDMzAzLjk5OSA3LjE1NiAyOTYuODQzIDAgMjg3Ljk5OSAwUzI3MS45OTkgNy4xNTYgMjcxLjk5OSAxNlYxODUuMzc1TDIwMy4zMTIgMTE2LjY4OEMxOTcuMDYyIDExMC40MzggMTg2LjkzNyAxMTAuNDM4IDE4MC42ODcgMTE2LjY4OFMxNzQuNDM3IDEzMy4wNjMgMTgwLjY4NyAxMzkuMzEyTDI3Ni42ODcgMjM1LjMxMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function WaterArrowDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M562.038 479.094C533.9 475.469 508.743 460.75 493.009 438.719C487.009 430.281 472.964 430.281 466.964 438.719C448.527 464.562 417.511 480 383.997 480C350.482 480 319.468 464.562 301.031 438.719C294.999 430.281 280.999 430.281 274.968 438.719C256.531 464.562 225.517 480 192.001 480C158.488 480 127.472 464.562 109.034 438.719C106.034 434.5 101.175 432 96.003 432S85.988 434.5 82.988 438.719C67.255 460.75 42.099 475.469 13.958 479.094C5.193 480.219 -0.993 488.25 0.132 497.031C1.257 505.781 9.161 512.094 18.052 510.844C48.036 506.969 75.536 493.375 95.988 472.75C120.613 497.594 155.222 512 192.001 512C228.767 512 263.374 497.594 287.999 472.75C312.624 497.594 347.232 512 383.997 512C420.777 512 455.386 497.594 480.011 472.75C500.462 493.375 527.962 506.969 557.947 510.844C566.898 512.219 574.741 505.781 575.866 497.031C576.991 488.25 570.804 480.219 562.038 479.094ZM18.052 382.844C48.036 378.969 75.536 365.375 95.988 344.75C120.613 369.594 155.222 384 192.001 384C228.767 384 263.374 369.594 287.999 344.75C312.624 369.594 347.232 384 383.997 384C420.777 384 455.386 369.594 480.011 344.75C500.462 365.375 527.962 378.969 557.947 382.844C566.898 384.219 574.741 377.781 575.866 369.031C576.991 360.25 570.804 352.219 562.038 351.094C533.9 347.469 508.743 332.75 493.009 310.719C487.009 302.281 472.964 302.281 466.964 310.719C448.527 336.562 417.511 352 383.997 352C350.482 352 319.468 336.562 301.031 310.719C294.999 302.281 280.999 302.281 274.968 310.719C256.531 336.562 225.517 352 192.001 352C158.488 352 127.472 336.562 109.034 310.719C106.034 306.5 101.175 304 96.003 304S85.988 306.5 82.988 310.719C67.255 332.75 42.099 347.469 13.958 351.094C5.193 352.219 -0.993 360.25 0.132 369.031C1.257 377.781 9.161 384.094 18.052 382.844ZM276.687 235.312C279.812 238.438 283.906 240 287.999 240S296.187 238.438 299.312 235.312L395.312 139.312C401.562 133.062 401.562 122.937 395.312 116.688S378.937 110.438 372.687 116.688L303.999 185.375V16C303.999 7.156 296.843 0 287.999 0S271.999 7.156 271.999 16V185.375L203.312 116.688C197.062 110.438 186.937 110.438 180.687 116.688S174.437 133.063 180.687 139.312L276.687 235.312Z" />
        </Icon>
    </>
}
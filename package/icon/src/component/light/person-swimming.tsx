
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `person-swimming` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-swimming?s=light person-swimming}
 * @preview ![person-swimming](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNzUuOTk5IDMzNkMxODQuODQzIDMzNiAxOTEuOTk5IDMyOC44NDQgMTkxLjk5OSAzMjBDMTkxLjk5OSAyOTEuOTM4IDIwMC42MjQgMjY1LjA2MiAyMTYuOTIxIDI0Mi4yMzRMMjM4LjU5MyAyMTEuODkxQzI0NS4wNTYgMjAyLjg0NiAyNTIuOTE1IDE5NS4wMzkgMjYxLjMzOSAxODcuOTJMNDIxLjk5OSAzMTYuNUM0MjQuOTUyIDMxOC44NTkgNDI4LjQ4NCAzMjAgNDMxLjk4NCAzMjBDNDM2LjY4NyAzMjAgNDQxLjMyNyAzMTcuOTM4IDQ0NC40OTkgMzE0QzQ1MC4wMTUgMzA3LjA5NCA0NDguODkgMjk3LjAzMSA0NDEuOTk5IDI5MS41TDI4OS4yMiAxNjkuMjc3QzI5Ni4xMTUgMTY1LjkzMiAzMDMuMjg4IDE2My4xMzUgMzEwLjcwMiAxNjEuMDE2QzM0OC44MTIgMTUwLjE1NiAzODkuNTYyIDE0Ny44NzUgNDI4LjY1NiAxNTQuMzI4TDQ2MS4zNzQgMTU5Ljc4MUM0NzAuMTA5IDE2MS4yODEgNDc4LjM0MyAxNTUuMzQ0IDQ3OS43ODEgMTQ2LjYyNUM0ODEuMjM0IDEzNy45MDYgNDc1LjM0MyAxMjkuNjcyIDQ2Ni42MjQgMTI4LjIxOUw0MzMuOTA2IDEyMi43NjZDMzkwLjE3MSAxMTUuNTE2IDM0NC41MTUgMTE4LjA2MiAzMDEuOTIxIDEzMC4yMzRDMjY2LjAxNSAxNDAuNSAyMzQuMjgxIDE2Mi44OTEgMjEyLjU2MiAxOTMuMjgxTDE5MC44OSAyMjMuNjQxQzE3MC42ODcgMjUxLjkwNiAxNTkuOTk5IDI4NS4yMzQgMTU5Ljk5OSAzMjBDMTU5Ljk5OSAzMjguODQ0IDE2Ny4xNTYgMzM2IDE3NS45OTkgMzM2Wk0xMDMuOTk5IDI0MEMxNDMuNzY1IDI0MCAxNzUuOTk5IDIwNy43NjQgMTc1Ljk5OSAxNjhDMTc1Ljk5OSAxMjguMjM0IDE0My43NjUgOTYgMTAzLjk5OSA5NkM2NC4yMzYgOTYgMzEuOTk5IDEyOC4yMzQgMzEuOTk5IDE2OEMzMS45OTkgMjA3Ljc2NCA2NC4yMzYgMjQwIDEwMy45OTkgMjQwWk0xMDMuOTk5IDEyOEMxMjYuMDU2IDEyOCAxNDMuOTk5IDE0NS45NDMgMTQzLjk5OSAxNjhTMTI2LjA1NiAyMDggMTAzLjk5OSAyMDhTNjMuOTk5IDE5MC4wNTcgNjMuOTk5IDE2OFM4MS45NDMgMTI4IDEwMy45OTkgMTI4Wk01NjIuMDM4IDM4My4wOTRDNTMzLjkgMzc5LjQ2OSA1MDguNzQzIDM2NC43NSA0OTMuMDA5IDM0Mi43MTlDNDg3LjAwOSAzMzQuMjgxIDQ3Mi45NjQgMzM0LjI4MSA0NjYuOTY0IDM0Mi43MTlDNDQ4LjUyNyAzNjguNTYyIDQxNy41MTEgMzg0IDM4My45OTcgMzg0QzM1MC40ODIgMzg0IDMxOS40NjggMzY4LjU2MiAzMDEuMDMxIDM0Mi43MTlDMjk0Ljk5OSAzMzQuMjgxIDI4MC45OTkgMzM0LjI4MSAyNzQuOTY4IDM0Mi43MTlDMjU2LjUzMSAzNjguNTYyIDIyNS41MTcgMzg0IDE5Mi4wMDEgMzg0QzE1OC40ODggMzg0IDEyNy40NzIgMzY4LjU2MiAxMDkuMDM0IDM0Mi43MTlDMTA2LjAzNCAzMzguNSAxMDEuMTc1IDMzNiA5Ni4wMDMgMzM2Uzg1Ljk4OCAzMzguNSA4Mi45ODggMzQyLjcxOUM2Ny4yNTUgMzY0Ljc1IDQyLjA5OSAzNzkuNDY5IDEzLjk1OCAzODMuMDk0QzUuMTkzIDM4NC4yMTkgLTAuOTkzIDM5Mi4yNSAwLjEzMiA0MDEuMDMxQzEuMjU3IDQwOS43ODEgOS4xNjEgNDE2LjA5NCAxOC4wNTIgNDE0Ljg0NEM0OC4wMzYgNDEwLjk2OSA3NS41MzYgMzk3LjM3NSA5NS45ODggMzc2Ljc1QzEyMC42MTMgNDAxLjU5NCAxNTUuMjIyIDQxNiAxOTIuMDAxIDQxNkMyMjguNzY3IDQxNiAyNjMuMzc0IDQwMS41OTQgMjg3Ljk5OSAzNzYuNzVDMzEyLjYyNCA0MDEuNTk0IDM0Ny4yMzIgNDE2IDM4My45OTcgNDE2QzQyMC43NzcgNDE2IDQ1NS4zODYgNDAxLjU5NCA0ODAuMDExIDM3Ni43NUM1MDAuNDYyIDM5Ny4zNzUgNTI3Ljk2MiA0MTAuOTY5IDU1Ny45NDcgNDE0Ljg0NEM1NjYuODk4IDQxNi4yMTkgNTc0Ljc0MSA0MDkuNzgxIDU3NS44NjYgNDAxLjAzMUM1NzYuOTkxIDM5Mi4yNSA1NzAuODA0IDM4NC4yMTkgNTYyLjAzOCAzODMuMDk0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PersonSwimming(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M175.999 336C184.843 336 191.999 328.844 191.999 320C191.999 291.938 200.624 265.062 216.921 242.234L238.593 211.891C245.056 202.846 252.915 195.039 261.339 187.92L421.999 316.5C424.952 318.859 428.484 320 431.984 320C436.687 320 441.327 317.938 444.499 314C450.015 307.094 448.89 297.031 441.999 291.5L289.22 169.277C296.115 165.932 303.288 163.135 310.702 161.016C348.812 150.156 389.562 147.875 428.656 154.328L461.374 159.781C470.109 161.281 478.343 155.344 479.781 146.625C481.234 137.906 475.343 129.672 466.624 128.219L433.906 122.766C390.171 115.516 344.515 118.062 301.921 130.234C266.015 140.5 234.281 162.891 212.562 193.281L190.89 223.641C170.687 251.906 159.999 285.234 159.999 320C159.999 328.844 167.156 336 175.999 336ZM103.999 240C143.765 240 175.999 207.764 175.999 168C175.999 128.234 143.765 96 103.999 96C64.236 96 31.999 128.234 31.999 168C31.999 207.764 64.236 240 103.999 240ZM103.999 128C126.056 128 143.999 145.943 143.999 168S126.056 208 103.999 208S63.999 190.057 63.999 168S81.943 128 103.999 128ZM562.038 383.094C533.9 379.469 508.743 364.75 493.009 342.719C487.009 334.281 472.964 334.281 466.964 342.719C448.527 368.562 417.511 384 383.997 384C350.482 384 319.468 368.562 301.031 342.719C294.999 334.281 280.999 334.281 274.968 342.719C256.531 368.562 225.517 384 192.001 384C158.488 384 127.472 368.562 109.034 342.719C106.034 338.5 101.175 336 96.003 336S85.988 338.5 82.988 342.719C67.255 364.75 42.099 379.469 13.958 383.094C5.193 384.219 -0.993 392.25 0.132 401.031C1.257 409.781 9.161 416.094 18.052 414.844C48.036 410.969 75.536 397.375 95.988 376.75C120.613 401.594 155.222 416 192.001 416C228.767 416 263.374 401.594 287.999 376.75C312.624 401.594 347.232 416 383.997 416C420.777 416 455.386 401.594 480.011 376.75C500.462 397.375 527.962 410.969 557.947 414.844C566.898 416.219 574.741 409.781 575.866 401.031C576.991 392.25 570.804 384.219 562.038 383.094Z" />
        </Icon>
    </>
}
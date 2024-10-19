
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pizza` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pizza?s=regular pizza}
 * @preview ![pizza](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNzYuMDExIDMyOEMxNzYuMDExIDM0MS4yNSAxODYuNzYxIDM1MiAyMDAuMDA5IDM1MlMyMjQuMDA3IDM0MS4yNSAyMjQuMDA3IDMyOFMyMTMuMjU3IDMwNCAyMDAuMDA5IDMwNFMxNzYuMDExIDMxNC43NSAxNzYuMDExIDMyOFpNMjE2LjAwNyAxNDRDMjAyLjc1OSAxNDQgMTkyLjAwOSAxNTQuNzUgMTkyLjAwOSAxNjhTMjAyLjc1OSAxOTIgMjE2LjAwNyAxOTJTMjQwLjAwNSAxODEuMjUgMjQwLjAwNSAxNjhTMjI5LjI1NSAxNDQgMjE2LjAwNyAxNDRaTTUyMy4yMjQgMTAwLjEyNUM1MjAuMjI0IDk2LjI1IDUxNS41OTkgOTQuMTI1IDUxMC44NTEgOTQuMTI1QzUwNi40NzYgOTQuMTI1IDUwMi4zNTEgOTUuODc1IDQ5OS4yMjYgOTguODc1TDM0Mi4xMTkgMjU2TDQ5OS4yMjYgNDEzQzUwMi4zNTEgNDE2LjEyNSA1MDYuNDc2IDQxNy44NzUgNTEwLjg1MSA0MTcuODc1QzUxNS41OTkgNDE3Ljg3NSA1MjAuMjI0IDQxNS42MjUgNTIzLjIyNCA0MTEuODc1QzU1OC4zODEgMzY1LjkxIDU3NS45NzMgMzExLjAyMSA1NzYgMjU2LjEyNUM1NzYuMDI2IDIwMS4xNDYgNTU4LjQzNCAxNDYuMTYgNTIzLjIyNCAxMDAuMTI1Wk00NTUuODU3IDMwMS44NzVMNDA5Ljk4NiAyNTZMNDU1LjczMiAyMTAuMzc1QzQ2MC42MDUgMjI0Ljc1IDQ2My45OCAyMzkuODc1IDQ2My45OCAyNTZDNDYzLjg1NSAyNzEuNjI1IDQ2MS4xMDUgMjg3LjEyNSA0NTUuODU3IDMwMS44NzVaTTUwNS4xMDEgMzUxTDQ4MC44NTMgMzI2Ljc1QzUwMS4xMDEgMjgxLjc1IDUwMC45NzYgMjMwLjI1IDQ4MC43MjggMTg1LjI1TDUwNS4xMDEgMTYxQzUzNS41OTcgMjIwLjYyNSA1MzUuNTk3IDI5MS4zNzUgNTA1LjEwMSAzNTFaTTI1Ni41MDMgMjU2TDQyNS42MDkgODYuODc1QzQzMS45ODQgODAuMzc1IDQzMS45ODQgNjkuNSA0MjUuMTA5IDYzLjVDMzc4LjQ5IDIyLjUgMzE4LjQ5NiAtMC4xMjUgMjU2LjUwMyAwQzE3NS4zODYgMCA5NC4yNzEgMzguMjUgNDIuNjUyIDExNC44NzVDMTQuMjE3IDE1NyAwIDIwNi41IDAgMjU2QzAgMzA1LjUgMTQuMjE3IDM1NSA0Mi42NTIgMzk3LjEyNUM5NC4yNzEgNDczLjc1IDE3NS4zODYgNTEyIDI1Ni41MDMgNTEyQzMxOC40OTYgNTEyLjEyNSAzNzguNDkgNDg5LjUgNDI1LjEwOSA0NDguNUM0MzEuOTg0IDQ0Mi41IDQzMS45ODQgNDMxLjYyNSA0MjUuNjA5IDQyNS4xMjVMMjU2LjUwMyAyNTZaTTE4OC42MzYgMjU2TDMxNy45OTYgMzg1LjM3NUMyOTguNzQ4IDM5NC44NzUgMjc3LjUwMSAzOTkuODc1IDI1Ni4wMDMgNDAwQzE3Ni42MzYgNDAwIDExMi4wMTkgMzM1LjM3NSAxMTIuMDE5IDI1NlMxNzYuNjM2IDExMiAyNTYuMDAzIDExMkMyNzcuNTAxIDExMi4xMjUgMjk4Ljc0OCAxMTcuMTI1IDMxNy45OTYgMTI2LjYyNUwxODguNjM2IDI1NlpNMjU2LjUwMyA0NjRDMTg2LjAxMSA0NjQgMTIyLjY0MiA0MjkuODc1IDgyLjUyMSAzNzAuMzc1QzM2LjI3NyAzMDIgMzYuMjc3IDIxMC4xMjUgODIuNTIxIDE0MS43NUMxMjIuNjQyIDgyLjEyNSAxODYuMDExIDQ4IDI1Ni41MDMgNDhDMjk1IDQ4IDMzMi44NzEgNTguNjI1IDM2NS42MTcgNzguODc1TDM0MS44NjkgMTAyLjc1QzMxNS42MjEgODcuODc1IDI4Ni4xMjUgODAgMjU2LjAwMyA4MEMxNTguNzYzIDgwIDgwLjAyMyAxNTguNzUgODAuMDIzIDI1NlMxNTguNzYzIDQzMiAyNTYuMDAzIDQzMkMyODYuMTI1IDQzMiAzMTUuNjIxIDQyNC4xMjUgMzQxLjg2OSA0MDkuMjVMMzY1LjYxNyA0MzMuMTI1QzMzMi44NzEgNDUzLjM3NSAyOTUgNDY0IDI1Ni41MDMgNDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Pizza(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M176.011 328C176.011 341.25 186.761 352 200.009 352S224.007 341.25 224.007 328S213.257 304 200.009 304S176.011 314.75 176.011 328ZM216.007 144C202.759 144 192.009 154.75 192.009 168S202.759 192 216.007 192S240.005 181.25 240.005 168S229.255 144 216.007 144ZM523.224 100.125C520.224 96.25 515.599 94.125 510.851 94.125C506.476 94.125 502.351 95.875 499.226 98.875L342.119 256L499.226 413C502.351 416.125 506.476 417.875 510.851 417.875C515.599 417.875 520.224 415.625 523.224 411.875C558.381 365.91 575.973 311.021 576 256.125C576.026 201.146 558.434 146.16 523.224 100.125ZM455.857 301.875L409.986 256L455.732 210.375C460.605 224.75 463.98 239.875 463.98 256C463.855 271.625 461.105 287.125 455.857 301.875ZM505.101 351L480.853 326.75C501.101 281.75 500.976 230.25 480.728 185.25L505.101 161C535.597 220.625 535.597 291.375 505.101 351ZM256.503 256L425.609 86.875C431.984 80.375 431.984 69.5 425.109 63.5C378.49 22.5 318.496 -0.125 256.503 0C175.386 0 94.271 38.25 42.652 114.875C14.217 157 0 206.5 0 256C0 305.5 14.217 355 42.652 397.125C94.271 473.75 175.386 512 256.503 512C318.496 512.125 378.49 489.5 425.109 448.5C431.984 442.5 431.984 431.625 425.609 425.125L256.503 256ZM188.636 256L317.996 385.375C298.748 394.875 277.501 399.875 256.003 400C176.636 400 112.019 335.375 112.019 256S176.636 112 256.003 112C277.501 112.125 298.748 117.125 317.996 126.625L188.636 256ZM256.503 464C186.011 464 122.642 429.875 82.521 370.375C36.277 302 36.277 210.125 82.521 141.75C122.642 82.125 186.011 48 256.503 48C295 48 332.871 58.625 365.617 78.875L341.869 102.75C315.621 87.875 286.125 80 256.003 80C158.763 80 80.023 158.75 80.023 256S158.763 432 256.003 432C286.125 432 315.621 424.125 341.869 409.25L365.617 433.125C332.871 453.375 295 464 256.503 464Z" />
        </Icon>
    </>
}
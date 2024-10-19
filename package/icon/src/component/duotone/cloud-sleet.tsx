
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-sleet` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-sleet?s=duotone cloud-sleet}
 * @preview ![cloud-sleet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTExMy40NiAzNTMuOTM4QzEwMS4yNzMgMzQ4LjcxOSA4Ny4xNjMgMzU0LjM0NCA4MS45NDUgMzY2LjUzMUwzMy45NDYgNDc4LjUzMUMyOC43MjcgNDkwLjcxOSAzNC4zNjcgNTA0Ljg0NCA0Ni41NTUgNTEwLjA2M0M0OS42MzMgNTExLjM3NSA1Mi44MzYgNTEyIDU1Ljk5MiA1MTJDNjUuMzA0IDUxMiA3NC4xNjQgNTA2LjU2MiA3OC4wNyA0OTcuNDY5TDEyNi4wNjkgMzg1LjQ2OUMxMzEuMjg4IDM3My4yODEgMTI1LjY0NyAzNTkuMTU2IDExMy40NiAzNTMuOTM4Wk0zODUuNDU2IDM1My45MzhDMzczLjIzNyAzNDguNzE5IDM1OS4xNzUgMzU0LjM0NCAzNTMuOTQgMzY2LjUzMUwzMDUuOTQxIDQ3OC41MzFDMzAwLjcyMyA0OTAuNzE5IDMwNi4zNjMgNTA0Ljg0NCAzMTguNTUgNTEwLjA2M0MzMjEuNjI5IDUxMS4zNzUgMzI0LjgzMiA1MTIgMzI3Ljk4OCA1MTJDMzM3LjMgNTEyIDM0Ni4xNTkgNTA2LjU2MiAzNTAuMDY2IDQ5Ny40NjlMMzk4LjA2NSAzODUuNDY5QzQwMy4yODMgMzczLjI4MSAzOTcuNjQzIDM1OS4xNTYgMzg1LjQ1NiAzNTMuOTM4Wk01MjAgMzkySDUwNC4wMDFWMzc2QzUwNC4wMDEgMzYyLjc1IDQ5My4yNTEgMzUyIDQ4MC4wMDEgMzUyQzQ2Ni43NTEgMzUyIDQ1Ni4wMDEgMzYyLjc1IDQ1Ni4wMDEgMzc2VjM5Mkg0NDAuMDAyQzQyNi43NTIgMzkyIDQxNi4wMDIgNDAyLjc1IDQxNi4wMDIgNDE2UzQyNi43NTIgNDQwIDQ0MC4wMDIgNDQwSDQ1Ni4wMDFWNDU2QzQ1Ni4wMDEgNDY5LjI1IDQ2Ni43NTEgNDgwIDQ4MC4wMDEgNDgwQzQ5My4yNTEgNDgwIDUwNC4wMDEgNDY5LjI1IDUwNC4wMDEgNDU2VjQ0MEg1MjBDNTMzLjI1IDQ0MCA1NDQgNDI5LjI1IDU0NCA0MTZTNTMzLjI1IDM5MiA1MjAgMzkyWk0yNjQuMDA0IDM5MkgyNDguMDA1VjM3NkMyNDguMDA1IDM2Mi43NSAyMzcuMjU1IDM1MiAyMjQuMDA1IDM1MkMyMTAuNzU1IDM1MiAyMDAuMDA1IDM2Mi43NSAyMDAuMDA1IDM3NlYzOTJIMTg0LjAwNkMxNzAuNzU2IDM5MiAxNjAuMDA2IDQwMi43NSAxNjAuMDA2IDQxNlMxNzAuNzU2IDQ0MCAxODQuMDA2IDQ0MEgyMDAuMDA1VjQ1NkMyMDAuMDA1IDQ2OS4yNSAyMTAuNzU1IDQ4MCAyMjQuMDA1IDQ4MEMyMzcuMjU1IDQ4MCAyNDguMDA1IDQ2OS4yNSAyNDguMDA1IDQ1NlY0NDBIMjY0LjAwNEMyNzcuMjU0IDQ0MCAyODguMDA0IDQyOS4yNSAyODguMDA0IDQxNlMyNzcuMjU0IDM5MiAyNjQuMDA0IDM5MloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTI3Ljk5OCAzMjBINDQ3Ljk5M0M1MDAuOTkzIDMyMCA1NDMuOTkyIDI3NyA1NDMuOTkyIDIyNFM1MDAuOTkzIDEyOCA0NDcuOTkzIDEyOEM0NDcuMzY4IDEyOCA0NDYuODY4IDEyOC4yNSA0NDYuMzY4IDEyOC4yNUM0NDcuNDkzIDEyMyA0NDcuOTkzIDExNy42MjUgNDQ3Ljk5MyAxMTJDNDQ3Ljk5MyA2Ny43NSA0MTIuMjQ0IDMyIDM2Ny45OTUgMzJDMzQzLjM3IDMyIDMyMS43NDUgNDMuMjUgMzA2Ljk5NiA2MC43NUMyODguMzcxIDI0Ljc1IDI1MS4yNDcgMCAyMDcuOTk3IDBDMTQ2LjEyMyAwIDk1Ljk5OSA1MC4xMjUgOTUuOTk5IDExMkM5NS45OTkgMTE5LjI1IDk2Ljc0OSAxMjYuMjUgOTguMTI0IDEzMy4yNUM1OS43NSAxNDUuNzUgMzIgMTgxLjUgMzIgMjI0QzMyIDI3NyA3NC45OTkgMzIwIDEyNy45OTggMzIwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CloudSleet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path opacity={.4} d="M113.46 353.938C101.273 348.719 87.163 354.344 81.945 366.531L33.946 478.531C28.727 490.719 34.367 504.844 46.555 510.063C49.633 511.375 52.836 512 55.992 512C65.304 512 74.164 506.562 78.07 497.469L126.069 385.469C131.288 373.281 125.647 359.156 113.46 353.938ZM385.456 353.938C373.237 348.719 359.175 354.344 353.94 366.531L305.941 478.531C300.723 490.719 306.363 504.844 318.55 510.063C321.629 511.375 324.832 512 327.988 512C337.3 512 346.159 506.562 350.066 497.469L398.065 385.469C403.283 373.281 397.643 359.156 385.456 353.938ZM520 392H504.001V376C504.001 362.75 493.251 352 480.001 352C466.751 352 456.001 362.75 456.001 376V392H440.002C426.752 392 416.002 402.75 416.002 416S426.752 440 440.002 440H456.001V456C456.001 469.25 466.751 480 480.001 480C493.251 480 504.001 469.25 504.001 456V440H520C533.25 440 544 429.25 544 416S533.25 392 520 392ZM264.004 392H248.005V376C248.005 362.75 237.255 352 224.005 352C210.755 352 200.005 362.75 200.005 376V392H184.006C170.756 392 160.006 402.75 160.006 416S170.756 440 184.006 440H200.005V456C200.005 469.25 210.755 480 224.005 480C237.255 480 248.005 469.25 248.005 456V440H264.004C277.254 440 288.004 429.25 288.004 416S277.254 392 264.004 392Z" />
            <path d="M127.998 320H447.993C500.993 320 543.992 277 543.992 224S500.993 128 447.993 128C447.368 128 446.868 128.25 446.368 128.25C447.493 123 447.993 117.625 447.993 112C447.993 67.75 412.244 32 367.995 32C343.37 32 321.745 43.25 306.996 60.75C288.371 24.75 251.247 0 207.997 0C146.123 0 95.999 50.125 95.999 112C95.999 119.25 96.749 126.25 98.124 133.25C59.75 145.75 32 181.5 32 224C32 277 74.999 320 127.998 320Z" />
        </Icon>
    </>
}
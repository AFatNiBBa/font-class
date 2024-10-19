
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `palette` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/palette?s=duotone palette}
 * @preview ![palette](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIwNC4zMTIgNS4wMzdDMTA0LjkwNiAyNC40NDQgMjQuODEyIDEwNC4zNTEgNS4xODcgMjAzLjQ0N0MtMzEuODEzIDM5MC40NSAxMzYuOTA2IDUyOS44NTkgMjY0IDUxMC4xNEMzMDUuMTg3IDUwMy43MzQgMzI1LjQwNiA0NTUuNTQ1IDMwNi41IDQxOC40NTFDMjgzLjQwNiAzNzMuMDQ0IDMxNi40MDYgMzIwLjA0MyAzNjcuNDA2IDMyMC4wNDNINDQ3LjA5NEM0ODIuOTA2IDMyMC4wNDMgNTExLjkwNiAyOTAuNDQ4IDUxMiAyNTQuNzI5QzUxMS41IDk3LjEzMiAzNjguMDk0IC0yNi44NyAyMDQuMzEyIDUuMDM3Wk05NiAzMjAuMDQzQzc4LjMxMiAzMjAuMDQzIDY0IDMwNS43MyA2NCAyODguMDQyQzY0IDI3MC4zNTQgNzguMzEyIDI1Ni4wNDIgOTYgMjU2LjA0MlMxMjggMjcwLjM1NCAxMjggMjg4LjA0MkMxMjggMzA1LjczIDExMy42ODcgMzIwLjA0MyA5NiAzMjAuMDQzWk0xMjggMTkyLjA0QzExMC4zMTIgMTkyLjA0IDk2IDE3Ny43MjggOTYgMTYwLjA0UzExMC4zMTIgMTI4LjAzOSAxMjggMTI4LjAzOVMxNjAgMTQyLjM1MiAxNjAgMTYwLjA0UzE0NS42ODcgMTkyLjA0IDEyOCAxOTIuMDRaTTI1NiAxMjguMDM5QzIzOC4zMTIgMTI4LjAzOSAyMjQgMTEzLjcyNiAyMjQgOTYuMDM5UzIzOC4zMTIgNjQuMDM4IDI1NiA2NC4wMzhTMjg4IDc4LjM1MSAyODggOTYuMDM5UzI3My42ODcgMTI4LjAzOSAyNTYgMTI4LjAzOVpNMzg0IDE5Mi4wNEMzNjYuMzEyIDE5Mi4wNCAzNTIgMTc3LjcyOCAzNTIgMTYwLjA0UzM2Ni4zMTIgMTI4LjAzOSAzODQgMTI4LjAzOVM0MTYgMTQyLjM1MiA0MTYgMTYwLjA0UzQwMS42ODcgMTkyLjA0IDM4NCAxOTIuMDRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTk2IDMyMC4wNDNDNzguMzEyIDMyMC4wNDMgNjQgMzA1LjczIDY0IDI4OC4wNDJDNjQgMjcwLjM1NCA3OC4zMTIgMjU2LjA0MiA5NiAyNTYuMDQyUzEyOCAyNzAuMzU0IDEyOCAyODguMDQyQzEyOCAzMDUuNzMgMTEzLjY4OCAzMjAuMDQzIDk2IDMyMC4wNDNaTTEyOCAxOTIuMDRDMTEwLjMxMiAxOTIuMDQgOTYgMTc3LjcyOCA5NiAxNjAuMDRTMTEwLjMxMiAxMjguMDM5IDEyOCAxMjguMDM5UzE2MCAxNDIuMzUyIDE2MCAxNjAuMDRTMTQ1LjY4OCAxOTIuMDQgMTI4IDE5Mi4wNFpNMjU2IDEyOC4wMzlDMjM4LjMxMiAxMjguMDM5IDIyNCAxMTMuNzI2IDIyNCA5Ni4wMzlTMjM4LjMxMiA2NC4wMzggMjU2IDY0LjAzOFMyODggNzguMzUxIDI4OCA5Ni4wMzlTMjczLjY4OCAxMjguMDM5IDI1NiAxMjguMDM5Wk0zODQgMTkyLjA0QzM2Ni4zMTIgMTkyLjA0IDM1MiAxNzcuNzI4IDM1MiAxNjAuMDRTMzY2LjMxMiAxMjguMDM5IDM4NCAxMjguMDM5UzQxNiAxNDIuMzUyIDQxNiAxNjAuMDRTNDAxLjY4OCAxOTIuMDQgMzg0IDE5Mi4wNFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Palette(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M204.312 5.037C104.906 24.444 24.812 104.351 5.187 203.447C-31.813 390.45 136.906 529.859 264 510.14C305.187 503.734 325.406 455.545 306.5 418.451C283.406 373.044 316.406 320.043 367.406 320.043H447.094C482.906 320.043 511.906 290.448 512 254.729C511.5 97.132 368.094 -26.87 204.312 5.037ZM96 320.043C78.312 320.043 64 305.73 64 288.042C64 270.354 78.312 256.042 96 256.042S128 270.354 128 288.042C128 305.73 113.687 320.043 96 320.043ZM128 192.04C110.312 192.04 96 177.728 96 160.04S110.312 128.039 128 128.039S160 142.352 160 160.04S145.687 192.04 128 192.04ZM256 128.039C238.312 128.039 224 113.726 224 96.039S238.312 64.038 256 64.038S288 78.351 288 96.039S273.687 128.039 256 128.039ZM384 192.04C366.312 192.04 352 177.728 352 160.04S366.312 128.039 384 128.039S416 142.352 416 160.04S401.687 192.04 384 192.04Z" />
            <path d="M96 320.043C78.312 320.043 64 305.73 64 288.042C64 270.354 78.312 256.042 96 256.042S128 270.354 128 288.042C128 305.73 113.688 320.043 96 320.043ZM128 192.04C110.312 192.04 96 177.728 96 160.04S110.312 128.039 128 128.039S160 142.352 160 160.04S145.688 192.04 128 192.04ZM256 128.039C238.312 128.039 224 113.726 224 96.039S238.312 64.038 256 64.038S288 78.351 288 96.039S273.688 128.039 256 128.039ZM384 192.04C366.312 192.04 352 177.728 352 160.04S366.312 128.039 384 128.039S416 142.352 416 160.04S401.688 192.04 384 192.04Z" />
        </Icon>
    </>
}
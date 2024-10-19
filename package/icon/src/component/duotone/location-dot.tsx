
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `location-dot` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/location-dot?s=duotone location-dot}
 * @preview ![location-dot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE5MiAwQzg1Ljk2OSAwIDAgODUuOTY5IDAgMTkyLjAwMUMwIDI2OS40MDggMjYuOTY5IDI5MS4wMzMgMTcyLjI4MSA1MDEuNjc2QzE4MS44MTMgNTE1LjQ0MSAyMDIuMTg4IDUxNS40NDEgMjExLjcxOSA1MDEuNjc2QzM1Ny4wMzEgMjkxLjAzMyAzODQgMjY5LjQwOCAzODQgMTkyLjAwMUMzODQgODUuOTY5IDI5OC4wMzEgMCAxOTIgMFpNMTkyIDI3MS45OThDMTQ3Ljg3NSAyNzEuOTk4IDExMiAyMzYuMTIzIDExMiAxOTEuOTk4UzE0Ny44NzUgMTExLjk5NyAxOTIgMTExLjk5N1MyNzIgMTQ3Ljg3MiAyNzIgMTkxLjk5OFMyMzYuMTI1IDI3MS45OTggMTkyIDI3MS45OThaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI0MCAxOTEuOTk4QzI0MCAyMTguNTA3IDIxOC41MSAyMzkuOTk4IDE5MiAyMzkuOTk4UzE0NCAyMTguNTA3IDE0NCAxOTEuOTk4UzE2NS40OSAxNDMuOTk3IDE5MiAxNDMuOTk3UzI0MCAxNjUuNDg4IDI0MCAxOTEuOTk4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function LocationDot(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path opacity={.4} d="M192 0C85.969 0 0 85.969 0 192.001C0 269.408 26.969 291.033 172.281 501.676C181.813 515.441 202.188 515.441 211.719 501.676C357.031 291.033 384 269.408 384 192.001C384 85.969 298.031 0 192 0ZM192 271.998C147.875 271.998 112 236.123 112 191.998S147.875 111.997 192 111.997S272 147.872 272 191.998S236.125 271.998 192 271.998Z" />
            <path d="M240 191.998C240 218.507 218.51 239.998 192 239.998S144 218.507 144 191.998S165.49 143.997 192 143.997S240 165.488 240 191.998Z" />
        </Icon>
    </>
}
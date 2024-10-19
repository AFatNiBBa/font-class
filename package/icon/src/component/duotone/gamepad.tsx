
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `gamepad` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gamepad?s=duotone gamepad}
 * @preview ![gamepad](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0OCA2NEgxOTJDODUuOTYxIDY0IDAgMTQ5Ljk2MSAwIDI1NlM4NS45NjEgNDQ4IDE5MiA0NDhINDQ4QzU1NC4wMzkgNDQ4IDY0MCAzNjIuMDM5IDY0MCAyNTZTNTU0LjAzOSA2NCA0NDggNjRaTTI0OC4wNTUgMjY3Ljk4OEMyNDguMDU1IDI3NC42MTMgMjQyLjY4IDI3OS45ODggMjM2LjA1NSAyNzkuOTg4SDE4NC4wNTVWMzMxLjk4OEMxODQuMDU1IDMzOC42MTMgMTc4LjY4IDM0My45ODggMTcyLjA1NSAzNDMuOTg4SDE0OC4wNTVDMTQxLjQzIDM0My45ODggMTM2LjA1NSAzMzguNjEzIDEzNi4wNTUgMzMxLjk4OFYyNzkuOTg4SDg0LjA1NUM3Ny40MyAyNzkuOTg4IDcyLjA1NSAyNzQuNjEzIDcyLjA1NSAyNjcuOTg4VjI0My45ODhDNzIuMDU1IDIzNy4zNjMgNzcuNDMgMjMxLjk4OCA4NC4wNTUgMjMxLjk4OEgxMzYuMDU1VjE3OS45ODhDMTM2LjA1NSAxNzMuMzYzIDE0MS40MyAxNjcuOTg4IDE0OC4wNTUgMTY3Ljk4OEgxNzIuMDU1QzE3OC42OCAxNjcuOTg4IDE4NC4wNTUgMTczLjM2MyAxODQuMDU1IDE3OS45ODhWMjMxLjk4OEgyMzYuMDU1QzI0Mi42OCAyMzEuOTg4IDI0OC4wNTUgMjM3LjM2MyAyNDguMDU1IDI0My45ODhWMjY3Ljk4OFpNNDMyIDM0NC4wMTJDNDA5Ljg3NSAzNDQuMDEyIDM5MiAzMjYuMTM3IDM5MiAzMDQuMDEyUzQwOS44NzUgMjY0LjAxMiA0MzIgMjY0LjAxMlM0NzIgMjgxLjg4NyA0NzIgMzA0LjAxMlM0NTQuMTI1IDM0NC4wMTIgNDMyIDM0NC4wMTJaTTQ5NiAyNDhDNDczLjg3NSAyNDggNDU2IDIzMC4xMjUgNDU2IDIwOFM0NzMuODc1IDE2OCA0OTYgMTY4UzUzNiAxODUuODc1IDUzNiAyMDhTNTE4LjEyNSAyNDggNDk2IDI0OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjQ4IDI2Ny45ODhDMjQ4IDI3NC42MTMgMjQyLjYyNSAyNzkuOTg4IDIzNiAyNzkuOTg4SDE4NFYzMzEuOTg4QzE4NCAzMzguNjEzIDE3OC42MjUgMzQzLjk4OCAxNzIgMzQzLjk4OEgxNDhDMTQxLjM3NSAzNDMuOTg4IDEzNiAzMzguNjEzIDEzNiAzMzEuOTg4VjI3OS45ODhIODRDNzcuMzc1IDI3OS45ODggNzIgMjc0LjYxMyA3MiAyNjcuOTg4VjI0My45ODhDNzIgMjM3LjM2MyA3Ny4zNzUgMjMxLjk4OCA4NCAyMzEuOTg4SDEzNlYxNzkuOTg4QzEzNiAxNzMuMzYzIDE0MS4zNzUgMTY3Ljk4OCAxNDggMTY3Ljk4OEgxNzJDMTc4LjYyNSAxNjcuOTg4IDE4NCAxNzMuMzYzIDE4NCAxNzkuOTg4VjIzMS45ODhIMjM2QzI0Mi42MjUgMjMxLjk4OCAyNDggMjM3LjM2MyAyNDggMjQzLjk4OFYyNjcuOTg4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Gamepad(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M448 64H192C85.961 64 0 149.961 0 256S85.961 448 192 448H448C554.039 448 640 362.039 640 256S554.039 64 448 64ZM248.055 267.988C248.055 274.613 242.68 279.988 236.055 279.988H184.055V331.988C184.055 338.613 178.68 343.988 172.055 343.988H148.055C141.43 343.988 136.055 338.613 136.055 331.988V279.988H84.055C77.43 279.988 72.055 274.613 72.055 267.988V243.988C72.055 237.363 77.43 231.988 84.055 231.988H136.055V179.988C136.055 173.363 141.43 167.988 148.055 167.988H172.055C178.68 167.988 184.055 173.363 184.055 179.988V231.988H236.055C242.68 231.988 248.055 237.363 248.055 243.988V267.988ZM432 344.012C409.875 344.012 392 326.137 392 304.012S409.875 264.012 432 264.012S472 281.887 472 304.012S454.125 344.012 432 344.012ZM496 248C473.875 248 456 230.125 456 208S473.875 168 496 168S536 185.875 536 208S518.125 248 496 248Z" />
            <path d="M248 267.988C248 274.613 242.625 279.988 236 279.988H184V331.988C184 338.613 178.625 343.988 172 343.988H148C141.375 343.988 136 338.613 136 331.988V279.988H84C77.375 279.988 72 274.613 72 267.988V243.988C72 237.363 77.375 231.988 84 231.988H136V179.988C136 173.363 141.375 167.988 148 167.988H172C178.625 167.988 184 173.363 184 179.988V231.988H236C242.625 231.988 248 237.363 248 243.988V267.988Z" />
        </Icon>
    </>
}
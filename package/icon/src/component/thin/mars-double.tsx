
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mars-double` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mars-double?s=thin mars-double}
 * @preview ![mars-double](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzIgMzJINDg4QzQ4My41NzggMzIgNDgwIDM1LjU3OCA0ODAgNDBTNDgzLjU3OCA0OCA0ODggNDhINjEyLjY4OEw0ODAuOTg0IDE3OS43MDNDNDc3Ljg1OSAxODIuODI4IDQ3Ny44NTkgMTg3Ljg5MSA0ODAuOTg0IDE5MS4wMTZDNTExLjI5NyAyMjEuMzQ0IDUyOCAyNjEuNDY5IDUyOCAzMDRDNTI4IDM5Mi4yMTkgNDU2LjIxOSA0NjQgMzY4IDQ2NEMzNTIuNDM4IDQ2NCAzMzcuMDYyIDQ2MS43NjYgMzIyLjI4MSA0NTcuMzU5QzMxNy45ODQgNDU2LjIwMyAzMTMuNjA5IDQ1OC41MzEgMzEyLjMyOCA0NjIuNzVDMzExLjA3OCA0NjYuOTg0IDMxMy40ODQgNDcxLjQzOCAzMTcuNzE5IDQ3Mi43MDNDMzMzLjk2OSA0NzcuNTQ3IDM1MC44OTEgNDgwIDM2OCA0ODBDNDY1LjA0NyA0ODAgNTQ0IDQwMS4wNDcgNTQ0IDMwNEM1NDQgMjU5Ljg1OSA1MjcuNjU2IDIxOC4wNzggNDk3LjgyOCAxODUuNDg0TDYyNCA1OS4zMTJWMTg0QzYyNCAxODguNDIyIDYyNy41NzggMTkyIDYzMiAxOTJTNjQwIDE4OC40MjIgNjQwIDE4NFY0MEM2NDAgMzUuNTc4IDYzNi40MjIgMzIgNjMyIDMyWk0zMDUuODM4IDE4NS40NzdMNDMyIDU5LjMxMlYxODRDNDMyIDE4OC40MjIgNDM1LjU3OCAxOTIgNDQwIDE5MlM0NDggMTg4LjQyMiA0NDggMTg0VjQwQzQ0OCAzNS41NzggNDQ0LjQyMiAzMiA0NDAgMzJIMjk2QzI5MS41NzggMzIgMjg4IDM1LjU3OCAyODggNDBTMjkxLjU3OCA0OCAyOTYgNDhINDIwLjY4OEwyOTQuNTI1IDE3NC4xNjRDMjYzLjIzMiAxNDUuNTc4IDIyMS43MjEgMTI4IDE3NiAxMjhDNzguNzk5IDEyOCAwIDIwNi43OTcgMCAzMDRTNzguNzk5IDQ4MCAxNzYgNDgwQzI3My4yMDMgNDgwIDM1MiA0MDEuMjAzIDM1MiAzMDRDMzUyIDI1OC4yODEgMzM0LjQyIDIxNi43NjYgMzA1LjgzOCAxODUuNDc3Wk0xNzYgNDY0Qzg3Ljc3NSA0NjQgMTYgMzkyLjIyMyAxNiAzMDRTODcuNzc1IDE0NCAxNzYgMTQ0UzMzNiAyMTUuNzc3IDMzNiAzMDRTMjY0LjIyNSA0NjQgMTc2IDQ2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MarsDouble(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M632 32H488C483.578 32 480 35.578 480 40S483.578 48 488 48H612.688L480.984 179.703C477.859 182.828 477.859 187.891 480.984 191.016C511.297 221.344 528 261.469 528 304C528 392.219 456.219 464 368 464C352.438 464 337.062 461.766 322.281 457.359C317.984 456.203 313.609 458.531 312.328 462.75C311.078 466.984 313.484 471.438 317.719 472.703C333.969 477.547 350.891 480 368 480C465.047 480 544 401.047 544 304C544 259.859 527.656 218.078 497.828 185.484L624 59.312V184C624 188.422 627.578 192 632 192S640 188.422 640 184V40C640 35.578 636.422 32 632 32ZM305.838 185.477L432 59.312V184C432 188.422 435.578 192 440 192S448 188.422 448 184V40C448 35.578 444.422 32 440 32H296C291.578 32 288 35.578 288 40S291.578 48 296 48H420.688L294.525 174.164C263.232 145.578 221.721 128 176 128C78.799 128 0 206.797 0 304S78.799 480 176 480C273.203 480 352 401.203 352 304C352 258.281 334.42 216.766 305.838 185.477ZM176 464C87.775 464 16 392.223 16 304S87.775 144 176 144S336 215.777 336 304S264.225 464 176 464Z" />
        </Icon>
    </>
}
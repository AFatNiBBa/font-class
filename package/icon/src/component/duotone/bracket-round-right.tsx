
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bracket-round-right` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-round-right?s=duotone bracket-round-right}
 * @preview ![bracket-round-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM3LjUzNCA0NjUuODQ0QzI3LjY5MSA0NTEuMjUxIDMxLjU2NiA0MzEuMzc2IDQ2LjEyOCA0MjEuNDdDNDkuNDcyIDQxOS4xODkgMTI4LjAwMSAzNjQuMzc4IDEyOC4wMDEgMjU2LjAwNUMxMjguMDAxIDE0Ny43NTggNDkuNjI4IDkyLjk0NyA0Ni4xMjggOTAuNTRDMzEuNTM0IDgwLjcyOCAyNy41OTcgNjAuOTE2IDM3LjM3OCA0Ni4yNkM0Ny4xOSAzMS41NDIgNjcuMDM0IDI3LjU3MyA4MS43NTIgMzcuMzg1Qzg2LjI1MiA0MC4zODUgMTkyIDExMi41NCAxOTIgMjU2LjAwNVM4Ni4yNTIgNDcxLjYyNSA4MS43NTIgNDc0LjYyNUM3Ni4zMTUgNDc4LjI1IDcwLjE1OSA0ODAgNjQuMDk2IDQ4MEM1My44MTUgNDgwIDQzLjcyMiA0NzUuMDMxIDM3LjUzNCA0NjUuODQ0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BracketRoundRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 192 512" {...props}>
            <path opacity={.4} d="M37.534 465.844C27.691 451.251 31.566 431.376 46.128 421.47C49.472 419.189 128.001 364.378 128.001 256.005C128.001 147.758 49.628 92.947 46.128 90.54C31.534 80.728 27.597 60.916 37.378 46.26C47.19 31.542 67.034 27.573 81.752 37.385C86.252 40.385 192 112.54 192 256.005S86.252 471.625 81.752 474.625C76.315 478.25 70.159 480 64.096 480C53.815 480 43.722 475.031 37.534 465.844Z" />
        </Icon>
    </>
}
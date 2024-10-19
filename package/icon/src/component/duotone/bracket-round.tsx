
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bracket-round` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-round?s=duotone bracket-round}
 * @preview ![bracket-round](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEyNy45MDQgNDgwQzEyMS44NDEgNDgwIDExNS42ODUgNDc4LjI1IDExMC4yNDggNDc0LjYyNUMxMDUuNzQ4IDQ3MS42MjUgMCAzOTkuNDcxIDAgMjU2LjAwNVMxMDUuNzQ4IDQwLjM4NSAxMTAuMjQ4IDM3LjM4NUMxMjQuOTY2IDI3LjU3MyAxNDQuODEgMzEuNTQyIDE1NC42MjIgNDYuMjZDMTY0LjQwMyA2MC45MTYgMTYwLjQ2NiA4MC43MjggMTQ1Ljg3MiA5MC41NEMxNDIuMzcyIDkyLjk0NyA2My45OTkgMTQ3Ljc1OCA2My45OTkgMjU2LjAwNUM2My45OTkgMzY0LjM3OCAxNDIuNTI4IDQxOS4xODkgMTQ1Ljg3MiA0MjEuNDdDMTYwLjQzNCA0MzEuMzc2IDE2NC4zMDkgNDUxLjI1MSAxNTQuNDY2IDQ2NS44NDRDMTQ4LjI3OCA0NzUuMDMxIDEzOC4xODUgNDgwIDEyNy45MDQgNDgwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BracketRound(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 192 512" {...props}>
            <path class={generic.secondary} d="M127.904 480C121.841 480 115.685 478.25 110.248 474.625C105.748 471.625 0 399.471 0 256.005S105.748 40.385 110.248 37.385C124.966 27.573 144.81 31.542 154.622 46.26C164.403 60.916 160.466 80.728 145.872 90.54C142.372 92.947 63.999 147.758 63.999 256.005C63.999 364.378 142.528 419.189 145.872 421.47C160.434 431.376 164.309 451.251 154.466 465.844C148.278 475.031 138.185 480 127.904 480Z" />
        </Icon>
    </>
}

import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `gamepad-modern` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gamepad-modern?s=duotone gamepad-modern}
 * @preview ![gamepad-modern](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTYzOC41OTQgMzY4LjIwM0w2MDUuMjE5IDE1Ni42MDlDNTk2LjM3NSAxMDYuMzU5IDU1Ni44MTIgNjUuODQ0IDUwNC41NjMgNTMuNDg0SDUwNC41QzQ1NC4yNSA0MS42MjUgMzcxLjU5NCAzMiAzMjAgMzJDMjY4LjM3NSAzMiAxODUuNzE5IDQxLjYyNSAxMzUuNSA1My40ODRDODMuMTU2IDY1Ljg0NCA0My42MjUgMTA2LjM0NCAzNC43ODEgMTU2LjYwOUwxLjQwNiAzNjguMjAzQy04LjkwNiA0MjYuNzE5IDM4LjgxMyA0NzkuOTg0IDEwMS41IDQ3OS45ODRDMTUxLjE4OCA0NzkuOTg0IDE5NS4yODEgNDQ5LjkyMiAyMTEgNDA1LjM0NEwyMTguNSAzODMuOTg0SDQyMS41TDQyOSA0MDUuMzQ0QzQ0NC43MTkgNDQ5LjkyMiA0ODguODEzIDQ3OS45ODQgNTM4LjUgNDc5Ljk4NEM2MDEuMTg3IDQ3OS45ODQgNjQ4LjkwNiA0MjYuNzE5IDYzOC41OTQgMzY4LjIwM1pNMjgwIDIzNS45ODRDMjgwIDI0Mi42MDkgMjc0LjYyNSAyNDcuOTg0IDI2OCAyNDcuOTg0SDIxNlYyOTkuOTg0QzIxNiAzMDYuNjA5IDIxMC42MjUgMzExLjk4NCAyMDQgMzExLjk4NEgxODBDMTczLjM3NSAzMTEuOTg0IDE2OCAzMDYuNjA5IDE2OCAyOTkuOTg0VjI0Ny45ODRIMTE2QzEwOS4zNzUgMjQ3Ljk4NCAxMDQgMjQyLjYwOSAxMDQgMjM1Ljk4NFYyMTEuOTg0QzEwNCAyMDUuMzU5IDEwOS4zNzUgMTk5Ljk4NCAxMTYgMTk5Ljk4NEgxNjhWMTQ3Ljk4NEMxNjggMTQxLjM1OSAxNzMuMzc1IDEzNS45ODQgMTgwIDEzNS45ODRIMjA0QzIxMC42MjUgMTM1Ljk4NCAyMTYgMTQxLjM1OSAyMTYgMTQ3Ljk4NFYxOTkuOTg0SDI2OEMyNzQuNjI1IDE5OS45ODQgMjgwIDIwNS4zNTkgMjgwIDIxMS45ODRWMjM1Ljk4NFpNNDMyIDMxMS45ODRDNDA5LjkwNiAzMTEuOTg0IDM5MiAyOTQuMDYyIDM5MiAyNzEuOTg0UzQwOS45MDYgMjMxLjk4NCA0MzIgMjMxLjk4NFM0NzIgMjQ5LjkwNiA0NzIgMjcxLjk4NFM0NTQuMDk0IDMxMS45ODQgNDMyIDMxMS45ODRaTTQ5NiAyMTUuOTg0QzQ3My45MDYgMjE1Ljk4NCA0NTYgMTk4LjA2MiA0NTYgMTc1Ljk4NFM0NzMuOTA2IDEzNS45ODQgNDk2IDEzNS45ODRDNTE4LjA5NCAxMzUuOTg0IDUzNiAxNTMuOTA2IDUzNiAxNzUuOTg0UzUxOC4wOTQgMjE1Ljk4NCA0OTYgMjE1Ljk4NFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjgwIDIxMS45ODRDMjgwIDIwNS4zNTkgMjc0LjYyNSAxOTkuOTg0IDI2OCAxOTkuOTg0SDIxNlYxNDcuOTg0QzIxNiAxNDEuMzU5IDIxMC42MjUgMTM1Ljk4NCAyMDQgMTM1Ljk4NEgxODBDMTczLjM3NSAxMzUuOTg0IDE2OCAxNDEuMzU5IDE2OCAxNDcuOTg0VjE5OS45ODRIMTE2QzEwOS4zNzUgMTk5Ljk4NCAxMDQgMjA1LjM1OSAxMDQgMjExLjk4NFYyMzUuOTg0QzEwNCAyNDIuNjA5IDEwOS4zNzUgMjQ3Ljk4NCAxMTYgMjQ3Ljk4NEgxNjhWMjk5Ljk4NEMxNjggMzA2LjYwOSAxNzMuMzc1IDMxMS45ODQgMTgwIDMxMS45ODRIMjA0QzIxMC42MjUgMzExLjk4NCAyMTYgMzA2LjYwOSAyMTYgMjk5Ljk4NFYyNDcuOTg0SDI2OEMyNzQuNjI1IDI0Ny45ODQgMjgwIDI0Mi42MDkgMjgwIDIzNS45ODRWMjExLjk4NFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function GamepadModern(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M638.594 368.203L605.219 156.609C596.375 106.359 556.812 65.844 504.563 53.484H504.5C454.25 41.625 371.594 32 320 32C268.375 32 185.719 41.625 135.5 53.484C83.156 65.844 43.625 106.344 34.781 156.609L1.406 368.203C-8.906 426.719 38.813 479.984 101.5 479.984C151.188 479.984 195.281 449.922 211 405.344L218.5 383.984H421.5L429 405.344C444.719 449.922 488.813 479.984 538.5 479.984C601.187 479.984 648.906 426.719 638.594 368.203ZM280 235.984C280 242.609 274.625 247.984 268 247.984H216V299.984C216 306.609 210.625 311.984 204 311.984H180C173.375 311.984 168 306.609 168 299.984V247.984H116C109.375 247.984 104 242.609 104 235.984V211.984C104 205.359 109.375 199.984 116 199.984H168V147.984C168 141.359 173.375 135.984 180 135.984H204C210.625 135.984 216 141.359 216 147.984V199.984H268C274.625 199.984 280 205.359 280 211.984V235.984ZM432 311.984C409.906 311.984 392 294.062 392 271.984S409.906 231.984 432 231.984S472 249.906 472 271.984S454.094 311.984 432 311.984ZM496 215.984C473.906 215.984 456 198.062 456 175.984S473.906 135.984 496 135.984C518.094 135.984 536 153.906 536 175.984S518.094 215.984 496 215.984Z" />
            <path d="M280 211.984C280 205.359 274.625 199.984 268 199.984H216V147.984C216 141.359 210.625 135.984 204 135.984H180C173.375 135.984 168 141.359 168 147.984V199.984H116C109.375 199.984 104 205.359 104 211.984V235.984C104 242.609 109.375 247.984 116 247.984H168V299.984C168 306.609 173.375 311.984 180 311.984H204C210.625 311.984 216 306.609 216 299.984V247.984H268C274.625 247.984 280 242.609 280 235.984V211.984Z" />
        </Icon>
    </>
}
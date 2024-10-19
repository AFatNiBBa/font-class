
import { Icon, generic } from "../../index";

/**
 * A component that renders the `spell-check` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/spell-check?s=duotone spell-check}
 * @preview ![spell-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE0MS41MzQgMTkuNjg4QzEzNi41NjUgNy43ODEgMTI0LjkyNCAwIDExMi4wMDMgMFM4Ny40NCA3Ljc4MSA4Mi40NzEgMTkuNjg4TDIuNDcxIDIxMS42ODhDLTQuMzI2IDIyOCAzLjM3OCAyNDYuNzUgMTkuNjkgMjUzLjUzMUMzNi4wNDkgMjYwLjM0NCA1NC43NTMgMjUyLjU5NCA2MS41MzQgMjM2LjMxM0w2Ni42NjUgMjI0SDE1Ny4zNDFMMTYyLjQ3MSAyMzYuMzEyQzE2Ny41ODEgMjQ4LjU5NCAxNzkuNDg3IDI1NiAxOTIuMDE4IDI1NkMxOTYuMTEyIDI1NiAyMDAuMjg0IDI1NS4yMTkgMjA0LjMxNSAyNTMuNTMxQzIyMC42MjggMjQ2Ljc1IDIyOC4zMzEgMjI4IDIyMS41MzQgMjExLjY4OEwxNDEuNTM0IDE5LjY4OFpNOTMuMzMxIDE2MEwxMTIuMDAzIDExNS4xODhMMTMwLjY3NCAxNjBIOTMuMzMxWk00MjYuODkzIDEyMi4yOTlDNDM0LjYxNiAxMDkuOTk2IDQzOS4yNjggOTUuNTcgNDM5LjI2OCA4MEM0MzkuMjY4IDM1Ljg3NSA0MDMuMzc4IDAgMzU5LjI2OCAwSDI4OC4wMDNDMjcwLjMzMSAwIDI1Ni4wMDMgMTQuMzEyIDI1Ni4wMDMgMzJWMjI0QzI1Ni4wMDMgMjQxLjY4OCAyNzAuMzMxIDI1NiAyODguMDAzIDI1NkgzNjguMDAzQzQxMi4xMTIgMjU2IDQ0OC4wMDMgMjIwLjEyNSA0NDguMDAzIDE3NkM0NDguMDAzIDE1NS4yNjQgNDM5Ljg3NiAxMzYuNTIzIDQyNi44OTMgMTIyLjI5OVpNMzIwLjAwMyA2NEgzNTkuMjY4QzM2OC4wOTYgNjQgMzc1LjI2OCA3MS4xODggMzc1LjI2OCA4MFMzNjguMDk2IDk2IDM1OS4yNjggOTZIMzIwLjAwM1Y2NFpNMzY4LjAwMyAxOTJIMzIwLjAwM1YxNjBIMzY4LjAwM0MzNzYuODMxIDE2MCAzODQuMDAzIDE2Ny4xODggMzg0LjAwMyAxNzZTMzc2LjgzMSAxOTIgMzY4LjAwMyAxOTJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTU2NC4yODEgMzE4LjkzOEwzODIuOTUzIDUwMC4yODFDMzc1LjE0MSA1MDguMDk0IDM2NC45MDYgNTEyIDM1NC42NzIgNTEyUzMzNC4yMDMgNTA4LjA5NCAzMjYuMzkxIDUwMC4yODFMMjM1LjcxOSA0MDkuNjI1QzIyMC4wOTQgMzk0IDIyMC4wOTQgMzY4LjY4OCAyMzUuNzE5IDM1My4wNjNDMjUxLjMxMiAzMzcuNDM4IDI3Ni42NTYgMzM3LjQzOCAyOTIuMjgxIDM1My4wNjNMMzU0LjY3MiA0MTUuNDM4TDUwNy43MTkgMjYyLjM3NUM1MjMuMzQ0IDI0Ni43NSA1NDguNjU2IDI0Ni43NSA1NjQuMjgxIDI2Mi4zNzVTNTc5LjkwNiAzMDMuMzEyIDU2NC4yODEgMzE4LjkzOFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const SpellCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M141.534 19.688C136.565 7.781 124.924 0 112.003 0S87.44 7.781 82.471 19.688L2.471 211.688C-4.326 228 3.378 246.75 19.69 253.531C36.049 260.344 54.753 252.594 61.534 236.313L66.665 224H157.341L162.471 236.312C167.581 248.594 179.487 256 192.018 256C196.112 256 200.284 255.219 204.315 253.531C220.628 246.75 228.331 228 221.534 211.688L141.534 19.688ZM93.331 160L112.003 115.188L130.674 160H93.331ZM426.893 122.299C434.616 109.996 439.268 95.57 439.268 80C439.268 35.875 403.378 0 359.268 0H288.003C270.331 0 256.003 14.312 256.003 32V224C256.003 241.688 270.331 256 288.003 256H368.003C412.112 256 448.003 220.125 448.003 176C448.003 155.264 439.876 136.523 426.893 122.299ZM320.003 64H359.268C368.096 64 375.268 71.188 375.268 80S368.096 96 359.268 96H320.003V64ZM368.003 192H320.003V160H368.003C376.831 160 384.003 167.188 384.003 176S376.831 192 368.003 192Z" />
            <path d="M564.281 318.938L382.953 500.281C375.141 508.094 364.906 512 354.672 512S334.203 508.094 326.391 500.281L235.719 409.625C220.094 394 220.094 368.688 235.719 353.063C251.312 337.438 276.656 337.438 292.281 353.063L354.672 415.438L507.719 262.375C523.344 246.75 548.656 246.75 564.281 262.375S579.906 303.312 564.281 318.938Z" />
    </Icon>
);

export default SpellCheck;

import { Icon } from "../../index";

/**
 * A component that renders the `syringe` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/syringe?s=regular syringe}
 * @preview ![syringe](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDQuOTY5IDcxLjAzMUw0NDAuOTY5IDcuMDMxQzQzMS41OTQgLTIuMzQ0IDQxNi40MDYgLTIuMzQ0IDQwNy4wMzEgNy4wMzFTMzk3LjY1NiAzMS41OTQgNDA3LjAzMSA0MC45NjlMNDIyLjA2MiA1NkwzODQgOTQuMDYyTDMyOC45NjkgMzkuMDMxQzMxOS41OTQgMjkuNjU2IDMwNC40MDYgMjkuNjU2IDI5NS4wMzEgMzkuMDMxQzI4Ni41NjQgNDcuNDk4IDI4Ni4xNiA2MC41MDIgMjkyLjk4NiA2OS44ODlMNzEuMDMxIDI5MS44NDRDNjYuNTMxIDI5Ni4zNDQgNjQgMzAyLjQzOCA2NCAzMDguODEyVjQxNC4wNjJMNy4wMzEgNDcxLjAzMUMtMi4zNDQgNDgwLjQwNiAtMi4zNDQgNDk1LjU5NCA3LjAzMSA1MDQuOTY5QzExLjcxOSA1MDkuNjU2IDE3Ljg1OSA1MTIgMjQgNTEyUzM2LjI4MSA1MDkuNjU2IDQwLjk2OSA1MDQuOTY5TDk3LjkzOCA0NDhIMjAzLjIwM0MyMDkuNTYzIDQ0OCAyMTUuNjcyIDQ0NS40NjkgMjIwLjE3MiA0NDAuOTY5TDQ0Mi4xMTEgMjE5LjAxNEM0NDYuMzAxIDIyMi4wNjEgNDUxLjA1MSAyMjQgNDU2IDIyNEM0NjIuMTQxIDIyNCA0NjguMjgxIDIyMS42NTYgNDcyLjk2OSAyMTYuOTY5QzQ4Mi4zNDQgMjA3LjU5NCA0ODIuMzQ0IDE5Mi40MDYgNDcyLjk2OSAxODMuMDMxTDQxNy45MzggMTI4TDQ1NiA4OS45MzhMNDcxLjAzMSAxMDQuOTY5QzQ3NS43MTkgMTA5LjY1NiA0ODEuODU5IDExMiA0ODggMTEyUzUwMC4yODEgMTA5LjY1NiA1MDQuOTY5IDEwNC45NjlDNTE0LjM0NCA5NS41OTQgNTE0LjM0NCA4MC40MDYgNTA0Ljk2OSA3MS4wMzFaTTE5My4yNjYgNDAwSDExMlYzMTguNzVMMTQwLjA2MiAyOTAuNjg4TDE2NC42ODcgMzE1LjMxMkMxNjcuODEyIDMxOC40MzggMTcxLjkwNiAzMjAgMTc2IDMyMFMxODQuMTg4IDMxOC40MzggMTg3LjMxMiAzMTUuMzEyQzE5My41NjIgMzA5LjA2MiAxOTMuNTYyIDI5OC45MzcgMTg3LjMxMiAyOTIuNjg4TDE2Mi42ODggMjY4LjA2MkwyMDQuMDYzIDIyNi42ODdMMjI4LjY4OCAyNTEuMzEyQzIzMS44MTIgMjU0LjQzOCAyMzUuOTA2IDI1NiAyNDAgMjU2UzI0OC4xODggMjU0LjQzOCAyNTEuMzEyIDI1MS4zMTJDMjU3LjU2MiAyNDUuMDYyIDI1Ny41NjIgMjM0LjkzNyAyNTEuMzEyIDIyOC42ODhMMjI2LjY4OCAyMDQuMDYyTDI2OC4wNjMgMTYyLjY4N0wyOTIuNjg4IDE4Ny4zMTJDMjk1LjgxMiAxOTAuNDM4IDI5OS45MDYgMTkyIDMwNCAxOTJTMzEyLjE4OCAxOTAuNDM4IDMxNS4zMTIgMTg3LjMxMkMzMjEuNTYyIDE4MS4wNjIgMzIxLjU2MiAxNzAuOTM3IDMxNS4zMTIgMTY0LjY4OEwyOTAuNjg4IDE0MC4wNjNMMzI2LjQwNiAxMDQuMzQ0TDQwNy42NTYgMTg1LjU5NEwxOTMuMjY2IDQwMFoiLz48L3N2Zz4=|width=32|height=32)
 */
const Syringe: typeof Icon = x => (
    <Icon {...x}>
        <path d="M504.969 71.031L440.969 7.031C431.594 -2.344 416.406 -2.344 407.031 7.031S397.656 31.594 407.031 40.969L422.062 56L384 94.062L328.969 39.031C319.594 29.656 304.406 29.656 295.031 39.031C286.564 47.498 286.16 60.502 292.986 69.889L71.031 291.844C66.531 296.344 64 302.438 64 308.812V414.062L7.031 471.031C-2.344 480.406 -2.344 495.594 7.031 504.969C11.719 509.656 17.859 512 24 512S36.281 509.656 40.969 504.969L97.938 448H203.203C209.563 448 215.672 445.469 220.172 440.969L442.111 219.014C446.301 222.061 451.051 224 456 224C462.141 224 468.281 221.656 472.969 216.969C482.344 207.594 482.344 192.406 472.969 183.031L417.938 128L456 89.938L471.031 104.969C475.719 109.656 481.859 112 488 112S500.281 109.656 504.969 104.969C514.344 95.594 514.344 80.406 504.969 71.031ZM193.266 400H112V318.75L140.062 290.688L164.687 315.312C167.812 318.438 171.906 320 176 320S184.188 318.438 187.312 315.312C193.562 309.062 193.562 298.937 187.312 292.688L162.688 268.062L204.063 226.687L228.688 251.312C231.812 254.438 235.906 256 240 256S248.188 254.438 251.312 251.312C257.562 245.062 257.562 234.937 251.312 228.688L226.688 204.062L268.063 162.687L292.688 187.312C295.812 190.438 299.906 192 304 192S312.188 190.438 315.312 187.312C321.562 181.062 321.562 170.937 315.312 164.688L290.688 140.063L326.406 104.344L407.656 185.594L193.266 400Z" />
    </Icon>
);

export default Syringe;
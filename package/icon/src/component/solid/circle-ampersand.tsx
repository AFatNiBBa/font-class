
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-ampersand` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-ampersand?s=solid circle-ampersand}
 * @preview ![circle-ampersand](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTM1NiAzNzcuNzE5QzM1MS40MDYgMzgxLjkyMiAzNDUuNTk0IDM4NCAzMzkuODEyIDM4NEMzMzMuMzEyIDM4NCAzMjYuODQ0IDM4MS4zNzUgMzIyLjA5NCAzNzYuMTg4TDMwMy40NjkgMzU1LjgxMkMyODguNjg4IDM3My41OTQgMjY2LjcxOSAzODQgMjQzLjMxMiAzODRIMjEwLjg0NEMxNzQgMzg0IDE0NCAzNTQuMDE2IDE0NCAzMTcuMTU2QzE0NCAyOTYuODU5IDE1My4wNjIgMjc3LjkwNiAxNjguODQ0IDI2NS4xNzJMMTk4LjU5NCAyNDEuMTI1TDE4OC4yNSAyMjkuNzk3QzE3Ny4xODggMjE3LjY4NyAxNzEuMTI1IDIwMi4wMTYgMTcxLjEyNSAxODUuNjU2QzE3MS4xMjUgMTUzLjg1OSAxOTcgMTI4IDIyOC43ODEgMTI4SDI1MS45MDZDMjgzLjY4OCAxMjggMzA5LjU2MiAxNTMuODU5IDMwOS41NjIgMTg1LjY1NkMzMDkuNTYyIDIwMy4xNTYgMzAxLjc1IDIxOS41MTYgMjg4LjE1NiAyMzAuNTE2TDI2OC40NjkgMjQ2LjQwNkwyOTguMjA3IDI3OC45MzJMMzE5Ljk2OSAyNDdDMzI3LjQ2OSAyMzYuMDc4IDM0Mi4zNzUgMjMzLjIwMyAzNTMuMzQ0IDI0MC42ODhDMzY0LjI4MSAyNDguMTQxIDM2Ny4xMjUgMjYzLjA3OCAzNTkuNjU2IDI3NC4wMzFMMzMxLjUwMiAzMTUuMzQ0TDM1Ny41MzEgMzQzLjgxMkMzNjYuNDY5IDM1My41OTQgMzY1Ljc4MSAzNjguNzY2IDM1NiAzNzcuNzE5Wk0yMzYuMDMxIDIxMC45MDZMMjU3Ljk2OSAxOTMuMTcyQzI2MC4yNSAxOTEuMzQ0IDI2MS41NjMgMTg4LjU5NCAyNjEuNTYzIDE4NS42NTZDMjYxLjU2MiAxODAuMzI4IDI1Ny4yMTkgMTc2IDI1MS45MDYgMTc2SDIyOC43ODFDMjIzLjQ2OSAxNzYgMjE5LjEyNSAxODAuMzI4IDIxOS4xMjUgMTg1LjY1NkMyMTkuMTI1IDE5MC4wMTYgMjIwLjc1IDE5NC4yMDMgMjIzLjY4OCAxOTcuNDM4TDIzNi4wMzEgMjEwLjkwNlpNMTk5IDMwMi41MTZDMTk0LjUzMSAzMDYuMDk0IDE5MiAzMTEuNDM4IDE5MiAzMTcuMTU2QzE5MiAzMjcuNTQ3IDIwMC40NjkgMzM2IDIxMC44NDQgMzM2SDI0My4zMTJDMjUzLjM0NCAzMzYgMjYyLjY4OCAzMzEuMDYyIDI2OC4zMTIgMzIyLjc5N0wyNzAuNDMgMzE5LjY5MUwyMzEuMDYyIDI3Ni42MDlMMTk5IDMwMi41MTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleAmpersand(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM356 377.719C351.406 381.922 345.594 384 339.812 384C333.312 384 326.844 381.375 322.094 376.188L303.469 355.812C288.688 373.594 266.719 384 243.312 384H210.844C174 384 144 354.016 144 317.156C144 296.859 153.062 277.906 168.844 265.172L198.594 241.125L188.25 229.797C177.188 217.687 171.125 202.016 171.125 185.656C171.125 153.859 197 128 228.781 128H251.906C283.688 128 309.562 153.859 309.562 185.656C309.562 203.156 301.75 219.516 288.156 230.516L268.469 246.406L298.207 278.932L319.969 247C327.469 236.078 342.375 233.203 353.344 240.688C364.281 248.141 367.125 263.078 359.656 274.031L331.502 315.344L357.531 343.812C366.469 353.594 365.781 368.766 356 377.719ZM236.031 210.906L257.969 193.172C260.25 191.344 261.563 188.594 261.563 185.656C261.562 180.328 257.219 176 251.906 176H228.781C223.469 176 219.125 180.328 219.125 185.656C219.125 190.016 220.75 194.203 223.688 197.438L236.031 210.906ZM199 302.516C194.531 306.094 192 311.438 192 317.156C192 327.547 200.469 336 210.844 336H243.312C253.344 336 262.688 331.062 268.312 322.797L270.43 319.691L231.062 276.609L199 302.516Z" />
        </Icon>
    </>
}
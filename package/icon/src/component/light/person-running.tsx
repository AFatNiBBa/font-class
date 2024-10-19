
import { Icon } from "../../index";

/**
 * A component that renders the `person-running` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-running?s=light person-running}
 * @preview ![person-running](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yOTYgMTEyQzMyNi44NzUgMTEyIDM1MiA4Ni44NzUgMzUyIDU2UzMyNi44NzUgMCAyOTYgMFMyNDAgMjUuMTI1IDI0MCA1NlMyNjUuMTI1IDExMiAyOTYgMTEyWk0yOTYgMzJDMzA5LjIxOSAzMiAzMjAgNDIuNzY2IDMyMCA1NlMzMDkuMjE5IDgwIDI5NiA4MFMyNzIgNjkuMjM0IDI3MiA1NlMyODIuNzgxIDMyIDI5NiAzMlpNMTUxLjE1NiAzMzcuNjg4QzE0My4yNSAzMzMuNzgxIDEzMy42ODggMzM2Ljk1MyAxMjkuNjg4IDM0NC44NDRMMTE4LjEyNSAzNjhIMzJDMjMuMTU2IDM2OCAxNiAzNzUuMTU2IDE2IDM4NFMyMy4xNTYgNDAwIDMyIDQwMEgxMjhDMTM0LjA2MiA0MDAgMTM5LjU5NCAzOTYuNTc4IDE0Mi4zMTIgMzkxLjE1NkwxNTguMzEyIDM1OS4xNTZDMTYyLjI1IDM1MS4yNSAxNTkuMDYyIDM0MS42NDEgMTUxLjE1NiAzMzcuNjg4Wk00MTYgMjQwSDM1NS43ODFDMzQ5LjY1NiAyNDAgMzQ0LjE4OCAyMzYuNjI1IDM0MS40NjkgMjMxLjE1NkwzMjEuMDMxIDE5MC4zMTJDMzA3LjQwNiAxNjMuMDc4IDI4NC45MzggMTQwLjU3OCAyNTcuNjg4IDEyNi45NTNDMjM4LjEyNSAxMTcuMTcyIDIxNi4yMTkgMTEyIDE5NC4zNDQgMTEySDE1NC42NTZDMTQ0LjM0NCAxMTIgMTM0LjA5NCAxMTUuNDIyIDEyNS44NzUgMTIxLjYwOUw3MC40MDYgMTYzLjIwM0M2My4zNDQgMTY4LjUgNjEuOTA2IDE3OC41MzEgNjcuMTg4IDE4NS41OTRDNzIuNSAxOTIuNjg4IDgyLjUzMSAxOTQuMDk0IDg5LjU5NCAxODguNzk3TDE0NS4wOTQgMTQ3LjIwM0MxNDcuODEyIDE0NS4xNDEgMTUxLjIxOSAxNDQgMTU0LjY1NiAxNDRIMTk0LjM0NEMxOTguMDgyIDE0NCAyMDEuNzQgMTQ0LjkxNiAyMDUuNDU5IDE0NS4zMDFMMTcwLjM3NSAyMTUuNDUzQzE1Mi43ODEgMjUwLjY0MSAxNjMuODQ0IDI5NC4yMDMgMTk2LjA2MiAzMTYuNzgxTDMwMS40NjkgMzkwLjU2M0wyNzIuNjI1IDQ5MS42MDlDMjcwLjE4NyA1MDAuMDk0IDI3NS4wOTQgNTA4Ljk1MyAyODMuNTk0IDUxMS4zOTFDMjg1LjA2MiA1MTEuNzk3IDI4Ni41NjIgNTEyIDI4OCA1MTJDMjk0Ljk2OSA1MTIgMzAxLjM3NSA1MDcuNDIyIDMwMy4zNzUgNTAwLjM5MUwzMzUuMzc1IDM4OC4zOTFDMzM3LjI1IDM4MS44MjggMzM0Ljc4MSAzNzQuODEyIDMyOS4xODggMzcwLjg5MUwyMTQuNDM4IDI5MC41NjJDMTk1LjA2MiAyNzcuMDE2IDE4OC40MzggMjUwLjg3NSAxOTkgMjI5Ljc2NkwyMzcuMjE3IDE1My4zNUMyMzkuMjMgMTU0LjIwNyAyNDEuNDE4IDE1NC42IDI0My4zNzUgMTU1LjU3OEMyNjQuNDY5IDE2Ni4xMDkgMjgxLjg3NSAxODMuNTMxIDI5Mi40MDYgMjA0LjYyNUwzMTIuODQ0IDI0NS40NTNDMzIxIDI2MS44MjggMzM3LjQ2OSAyNzIgMzU1Ljc4MSAyNzJINDE2QzQyNC44NDQgMjcyIDQzMiAyNjQuODQ0IDQzMiAyNTZTNDI0Ljg0NCAyNDAgNDE2IDI0MFoiLz48L3N2Zz4=|width=32|height=32)
 */
const PersonRunning: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M296 112C326.875 112 352 86.875 352 56S326.875 0 296 0S240 25.125 240 56S265.125 112 296 112ZM296 32C309.219 32 320 42.766 320 56S309.219 80 296 80S272 69.234 272 56S282.781 32 296 32ZM151.156 337.688C143.25 333.781 133.688 336.953 129.688 344.844L118.125 368H32C23.156 368 16 375.156 16 384S23.156 400 32 400H128C134.062 400 139.594 396.578 142.312 391.156L158.312 359.156C162.25 351.25 159.062 341.641 151.156 337.688ZM416 240H355.781C349.656 240 344.188 236.625 341.469 231.156L321.031 190.312C307.406 163.078 284.938 140.578 257.688 126.953C238.125 117.172 216.219 112 194.344 112H154.656C144.344 112 134.094 115.422 125.875 121.609L70.406 163.203C63.344 168.5 61.906 178.531 67.188 185.594C72.5 192.688 82.531 194.094 89.594 188.797L145.094 147.203C147.812 145.141 151.219 144 154.656 144H194.344C198.082 144 201.74 144.916 205.459 145.301L170.375 215.453C152.781 250.641 163.844 294.203 196.062 316.781L301.469 390.563L272.625 491.609C270.187 500.094 275.094 508.953 283.594 511.391C285.062 511.797 286.562 512 288 512C294.969 512 301.375 507.422 303.375 500.391L335.375 388.391C337.25 381.828 334.781 374.812 329.188 370.891L214.438 290.562C195.062 277.016 188.438 250.875 199 229.766L237.217 153.35C239.23 154.207 241.418 154.6 243.375 155.578C264.469 166.109 281.875 183.531 292.406 204.625L312.844 245.453C321 261.828 337.469 272 355.781 272H416C424.844 272 432 264.844 432 256S424.844 240 416 240Z" />
    </Icon>
);

export default PersonRunning;
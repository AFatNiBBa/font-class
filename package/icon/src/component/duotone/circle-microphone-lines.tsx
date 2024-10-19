
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-microphone-lines` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-microphone-lines?s=duotone circle-microphone-lines}
 * @preview ![circle-microphone-lines](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTMgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDcgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMjA4IDE0NEMyMDggMTE3LjQ4NCAyMjkuNDg0IDk2IDI1NiA5NlMzMDQgMTE3LjQ4NCAzMDQgMTQ0SDI2NEMyNTkuNTgyIDE0NCAyNTYgMTQ3LjU4MiAyNTYgMTUyVjE2OEMyNTYgMTcyLjQxOCAyNTkuNTgyIDE3NiAyNjQgMTc2SDMwNFYyMDhIMjY0QzI1OS41ODIgMjA4IDI1NiAyMTEuNTgyIDI1NiAyMTZWMjMyQzI1NiAyMzYuNDE4IDI1OS41ODIgMjQwIDI2NCAyNDBIMzA0VjI1NkMzMDQgMjgyLjUxNiAyODIuNTE2IDMwNCAyNTYgMzA0UzIwOCAyODIuNTE2IDIwOCAyNTZWMTQ0Wk0zODQgMjU2QzM4NCAzMjEuMTAyIDMzNC45NjkgMzc0LjQwNiAyNzIgMzgyLjM4M1Y0MDhDMjcyIDQxMi40MTggMjY4LjQxOCA0MTYgMjY0IDQxNkgyNDhDMjQzLjU4MiA0MTYgMjQwIDQxMi40MTggMjQwIDQwOFYzODIuMzgzQzE3Ny4wMzEgMzc0LjQwNiAxMjggMzIxLjEwMiAxMjggMjU2VjIzMkMxMjggMjI3LjU4MiAxMzEuNTgyIDIyNCAxMzYgMjI0SDE1MkMxNTYuNDE4IDIyNCAxNjAgMjI3LjU4MiAxNjAgMjMyVjI1Mi42NkMxNjAgMzAxLjQ0NSAxOTQuOTggMzQ0Ljk4IDI0My4zNjkgMzUxLjE4OEMzMDEuOTE0IDM1OC42OTkgMzUyIDMxMy4wOTQgMzUyIDI1NlYyMzJDMzUyIDIyNy41ODIgMzU1LjU4MiAyMjQgMzYwIDIyNEgzNzZDMzgwLjQxOCAyMjQgMzg0IDIyNy41ODIgMzg0IDIzMlYyNTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI1NiAzMDRDMjgyLjUxNiAzMDQgMzA0IDI4Mi41MTYgMzA0IDI1NlYyNDBIMjY0QzI1OS41ODIgMjQwIDI1NiAyMzYuNDE4IDI1NiAyMzJWMjE2QzI1NiAyMTEuNTgyIDI1OS41ODIgMjA4IDI2NCAyMDhIMzA0VjE3NkgyNjRDMjU5LjU4MiAxNzYgMjU2IDE3Mi40MTggMjU2IDE2OFYxNTJDMjU2IDE0Ny41ODIgMjU5LjU4MiAxNDQgMjY0IDE0NEgzMDRDMzA0IDExNy40ODQgMjgyLjUxNiA5NiAyNTYgOTZTMjA4IDExNy40ODQgMjA4IDE0NFYyNTZDMjA4IDI4Mi41MTYgMjI5LjQ4NCAzMDQgMjU2IDMwNFpNMzc2IDIyNEgzNjBDMzU1LjU4MiAyMjQgMzUyIDIyNy41ODIgMzUyIDIzMlYyNTZDMzUyIDMxMy4wOTIgMzAxLjkxNCAzNTguNjk5IDI0My4zNjkgMzUxLjE4OEMxOTQuOTggMzQ0Ljk4IDE2MCAzMDEuNDQ3IDE2MCAyNTIuNjZWMjMyQzE2MCAyMjcuNTgyIDE1Ni40MTggMjI0IDE1MiAyMjRIMTM2QzEzMS41ODIgMjI0IDEyOCAyMjcuNTgyIDEyOCAyMzJWMjU2QzEyOCAzMjEuMSAxNzcuMDMxIDM3NC40MDYgMjQwIDM4Mi4zODNWNDA4QzI0MCA0MTIuNDE4IDI0My41ODIgNDE2IDI0OCA0MTZIMjY0QzI2OC40MTggNDE2IDI3MiA0MTIuNDE4IDI3MiA0MDhWMzgyLjM4M0MzMzQuOTY5IDM3NC40MDYgMzg0IDMyMS4xIDM4NCAyNTZWMjMyQzM4NCAyMjcuNTgyIDM4MC40MTggMjI0IDM3NiAyMjRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleMicrophoneLines: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 16C123.451 16 16 123.453 16 256S123.451 496 256 496S496 388.547 496 256S388.549 16 256 16ZM208 144C208 117.484 229.484 96 256 96S304 117.484 304 144H264C259.582 144 256 147.582 256 152V168C256 172.418 259.582 176 264 176H304V208H264C259.582 208 256 211.582 256 216V232C256 236.418 259.582 240 264 240H304V256C304 282.516 282.516 304 256 304S208 282.516 208 256V144ZM384 256C384 321.102 334.969 374.406 272 382.383V408C272 412.418 268.418 416 264 416H248C243.582 416 240 412.418 240 408V382.383C177.031 374.406 128 321.102 128 256V232C128 227.582 131.582 224 136 224H152C156.418 224 160 227.582 160 232V252.66C160 301.445 194.98 344.98 243.369 351.188C301.914 358.699 352 313.094 352 256V232C352 227.582 355.582 224 360 224H376C380.418 224 384 227.582 384 232V256Z" />
            <path d="M256 304C282.516 304 304 282.516 304 256V240H264C259.582 240 256 236.418 256 232V216C256 211.582 259.582 208 264 208H304V176H264C259.582 176 256 172.418 256 168V152C256 147.582 259.582 144 264 144H304C304 117.484 282.516 96 256 96S208 117.484 208 144V256C208 282.516 229.484 304 256 304ZM376 224H360C355.582 224 352 227.582 352 232V256C352 313.092 301.914 358.699 243.369 351.188C194.98 344.98 160 301.447 160 252.66V232C160 227.582 156.418 224 152 224H136C131.582 224 128 227.582 128 232V256C128 321.1 177.031 374.406 240 382.383V408C240 412.418 243.582 416 248 416H264C268.418 416 272 412.418 272 408V382.383C334.969 374.406 384 321.1 384 256V232C384 227.582 380.418 224 376 224Z" />
    </Icon>
);

export default CircleMicrophoneLines;
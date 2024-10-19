
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-smile-plus` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-plus?s=duotone face-smile-plus}
 * @preview ![face-smile-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIyNCA2NEMxMDAuMjg5IDY0IDAgMTY0LjI4OSAwIDI4OFMxMDAuMjg5IDUxMiAyMjQgNTEyQzM0Ny43MTMgNTEyIDQ0OCA0MTEuNzExIDQ0OCAyODhTMzQ3LjcxMyA2NCAyMjQgNjRaTTE0NCAyMDhDMTYxLjY0NSAyMDggMTc2IDIyMi4zNTUgMTc2IDI0MFMxNjEuNjQ1IDI3MiAxNDQgMjcyUzExMiAyNTcuNjQ1IDExMiAyNDBTMTI2LjM1NSAyMDggMTQ0IDIwOFpNMzMyIDM2Ny4yNUMzMDQuNjcyIDM5OC4yMTkgMjY1LjMxMiA0MTYgMjI0IDQxNkMxODIuNzAzIDQxNiAxNDMuMzI4IDM5OC4yMTkgMTE1Ljk4NCAzNjcuMjVDMTEwLjE0MSAzNjAuNjI1IDExMC43NjYgMzUwLjUgMTE3LjM5MSAzNDQuNjU2UzEzNC4xMjUgMzM5LjQ2OSAxMzkuOTg0IDM0Ni4wNjJDMTYxLjI1IDM3MC4xODggMTkxLjg3NSAzODQgMjI0IDM4NFMyODYuNzUgMzcwLjE4OCAzMDggMzQ2LjA2MkMzMTMuODQ0IDMzOS40NjkgMzI0LjAxNiAzMzguODEyIDMzMC41NzggMzQ0LjY1NkMzMzcuMjAzIDM1MC41IDMzNy44NDQgMzYwLjYyNSAzMzIgMzY3LjI1Wk0zMDQgMjcyQzI4Ni4zNTUgMjcyIDI3MiAyNTcuNjQ1IDI3MiAyNDBTMjg2LjM1NSAyMDggMzA0IDIwOFMzMzYgMjIyLjM1NSAzMzYgMjQwUzMyMS42NDUgMjcyIDMwNCAyNzJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTMwNCAyMDhDMjg2LjM1NSAyMDggMjcyIDIyMi4zNTUgMjcyIDI0MFMyODYuMzU1IDI3MiAzMDQgMjcyUzMzNiAyNTcuNjQ1IDMzNiAyNDBTMzIxLjY0NSAyMDggMzA0IDIwOFpNMTQ0IDIwOEMxMjYuMzU1IDIwOCAxMTIgMjIyLjM1NSAxMTIgMjQwUzEyNi4zNTUgMjcyIDE0NCAyNzJTMTc2IDI1Ny42NDUgMTc2IDI0MFMxNjEuNjQ1IDIwOCAxNDQgMjA4Wk02MTYgNzJINTY4VjI0QzU2OCAxMC43NDUgNTU3LjI1NSAwIDU0NCAwTDU0NCAwQzUzMC43NDUgMCA1MjAgMTAuNzQ1IDUyMCAyNFY3Mkg0NzJDNDU4Ljc0NSA3MiA0NDggODIuNzQ1IDQ0OCA5NlY5NkM0NDggMTA5LjI1NSA0NTguNzQ1IDEyMCA0NzIgMTIwSDUyMFYxNjhDNTIwIDE4MS4yNTUgNTMwLjc0NSAxOTIgNTQ0IDE5Mkw1NDQgMTkyQzU1Ny4yNTUgMTkyIDU2OCAxODEuMjU1IDU2OCAxNjhWMTIwSDYxNkM2MjkuMjU1IDEyMCA2NDAgMTA5LjI1NSA2NDAgOTZWOTZDNjQwIDgyLjc0NSA2MjkuMjU1IDcyIDYxNiA3MloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const FaceSmilePlus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M224 64C100.289 64 0 164.289 0 288S100.289 512 224 512C347.713 512 448 411.711 448 288S347.713 64 224 64ZM144 208C161.645 208 176 222.355 176 240S161.645 272 144 272S112 257.645 112 240S126.355 208 144 208ZM332 367.25C304.672 398.219 265.312 416 224 416C182.703 416 143.328 398.219 115.984 367.25C110.141 360.625 110.766 350.5 117.391 344.656S134.125 339.469 139.984 346.062C161.25 370.188 191.875 384 224 384S286.75 370.188 308 346.062C313.844 339.469 324.016 338.812 330.578 344.656C337.203 350.5 337.844 360.625 332 367.25ZM304 272C286.355 272 272 257.645 272 240S286.355 208 304 208S336 222.355 336 240S321.645 272 304 272Z" />
            <path d="M304 208C286.355 208 272 222.355 272 240S286.355 272 304 272S336 257.645 336 240S321.645 208 304 208ZM144 208C126.355 208 112 222.355 112 240S126.355 272 144 272S176 257.645 176 240S161.645 208 144 208ZM616 72H568V24C568 10.745 557.255 0 544 0L544 0C530.745 0 520 10.745 520 24V72H472C458.745 72 448 82.745 448 96V96C448 109.255 458.745 120 472 120H520V168C520 181.255 530.745 192 544 192L544 192C557.255 192 568 181.255 568 168V120H616C629.255 120 640 109.255 640 96V96C640 82.745 629.255 72 616 72Z" />
    </Icon>
);

export default FaceSmilePlus;
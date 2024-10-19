
import { Icon } from "../../index";

/**
 * A component that renders the `car-bus` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/car-bus?s=thin car-bus}
 * @preview ![car-bus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjAgMzM2QzU0Mi4zMjggMzM2IDUyOCAzNTAuMzI2IDUyOCAzNjhDNTI4IDM4NS42NzIgNTQyLjMyOCA0MDAgNTYwIDQwMFM1OTIgMzg1LjY3MiA1OTIgMzY4QzU5MiAzNTAuMzI2IDU3Ny42NzIgMzM2IDU2MCAzMzZaTTU2MCAzODRDNTUxLjE3OCAzODQgNTQ0IDM3Ni44MjIgNTQ0IDM2OFM1NTEuMTc4IDM1MiA1NjAgMzUyUzU3NiAzNTkuMTc4IDU3NiAzNjhTNTY4LjgyMiAzODQgNTYwIDM4NFpNMzA0IDMzNkMyODYuMzI4IDMzNiAyNzIgMzUwLjMyNiAyNzIgMzY4QzI3MiAzODUuNjcyIDI4Ni4zMjggNDAwIDMwNCA0MDBTMzM2IDM4NS42NzIgMzM2IDM2OEMzMzYgMzUwLjMyNiAzMjEuNjcyIDMzNiAzMDQgMzM2Wk0zMDQgMzg0QzI5NS4xNzggMzg0IDI4OCAzNzYuODIyIDI4OCAzNjhTMjk1LjE3OCAzNTIgMzA0IDM1MlMzMjAgMzU5LjE3OCAzMjAgMzY4UzMxMi44MjIgMzg0IDMwNCAzODRaTTU5MS40MSAyOTAuMDlMNTYxLjI4MSAxOTkuNzAzQzU1My4zNzUgMTc1Ljk1MyA1MzEuMjE5IDE2MCA1MDYuMTg4IDE2MEgzNTcuODEyQzMzMi43ODEgMTYwIDMxMC42MjUgMTc1Ljk1MyAzMDIuNzE5IDE5OS43MDNMMjcyLjU5IDI5MC4wOUMyNDQuNzY0IDI5Ny4wMzMgMjI0IDMyMi4wNDUgMjI0IDM1MlYzOTUuMzQ0QzIyNCA0MTcuMDQzIDIzNy4yMDkgNDM1LjcwNSAyNTYgNDQzLjc1NlY1MDRDMjU2IDUwOC40MTggMjU5LjU4MiA1MTIgMjY0IDUxMlMyNzIgNTA4LjQxOCAyNzIgNTA0VjQ0Ny41MjlDMjczLjU1OSA0NDcuNjY4IDI3NS4wNjIgNDQ4IDI3Ni42NTYgNDQ4SDU4Ny4zNDRDNTg4LjkzOCA0NDggNTkwLjQ0MSA0NDcuNjY4IDU5MiA0NDcuNTI5VjUwNEM1OTIgNTA4LjQxOCA1OTUuNTgyIDUxMiA2MDAgNTEyUzYwOCA1MDguNDE4IDYwOCA1MDRWNDQzLjc1NkM2MjYuNzkxIDQzNS43MDUgNjQwIDQxNy4wNDMgNjQwIDM5NS4zNDRWMzUyQzY0MCAzMjIuMDQ1IDYxOS4yMzYgMjk3LjAzMyA1OTEuNDEgMjkwLjA5Wk0zMTcuOTA2IDIwNC43NjZDMzIzLjYyNSAxODcuNTYyIDMzOS42ODggMTc2IDM1Ny44MTIgMTc2SDUwNi4xODhDNTI0LjMxMiAxNzYgNTQwLjM3NSAxODcuNTYyIDU0Ni4wOTQgMjA0Ljc2Nkw1NzMuODM4IDI4OEgyOTAuMTYyTDMxNy45MDYgMjA0Ljc2NlpNNjI0IDM5NS4zNDRDNjI0IDQxNS41NjIgNjA3LjU2MiA0MzIgNTg3LjM0NCA0MzJIMjc2LjY1NkMyNTYuNDM4IDQzMiAyNDAgNDE1LjU2MiAyNDAgMzk1LjM0NFYzNTJDMjQwIDMyNS41MzEgMjYxLjUzMSAzMDQgMjg4IDMwNEg1NzZDNjAyLjQ2OSAzMDQgNjI0IDMyNS41MzEgNjI0IDM1MlYzOTUuMzQ0Wk00OCAyNzJDNDggMjg5LjY0MSA2Mi4zNDQgMzA0IDgwIDMwNFMxMTIgMjg5LjY0MSAxMTIgMjcyUzk3LjY1NiAyNDAgODAgMjQwUzQ4IDI1NC4zNTkgNDggMjcyWk05NiAyNzJDOTYgMjgwLjgyOCA4OC44MTIgMjg4IDgwIDI4OFM2NCAyODAuODI4IDY0IDI3MlM3MS4xODggMjU2IDgwIDI1NlM5NiAyNjMuMTcyIDk2IDI3MlpNMTg0IDMzNkgyOS4zNzVDMjEuOTg4IDMzNiAxNiAzMzAuMDEyIDE2IDMyMi42MjVWMjA4SDI0OEMyNTIuNDIyIDIwOCAyNTYgMjA0LjQyMiAyNTYgMjAwUzI1Mi40MjIgMTkyIDI0OCAxOTJIMTZWOTZIMzM2VjEyMEMzMzYgMTI0LjQxOCAzMzkuNTgyIDEyOCAzNDQgMTI4UzM1MiAxMjQuNDE4IDM1MiAxMjBWNjIuODc1QzM1MiAyNy42MjUgMjc0IDAgMTc2IDBDNzggMCAwIDI3LjYyNSAwIDYyLjg3NVYzMjIuNjI1QzAgMzM4Ljg0OCAxMy4xNTIgMzUyIDI5LjM3NSAzNTJINDhWNDA4QzQ4IDQxMi40MTggNTEuNTgyIDQxNiA1NiA0MTZTNjQgNDEyLjQxOCA2NCA0MDhWMzUySDE4NEMxODguNDE4IDM1MiAxOTIgMzQ4LjQxOCAxOTIgMzQ0UzE4OC40MTggMzM2IDE4NCAzMzZaTTE2IDYyLjg3NUMxNiA0Ni41MTYgNzAuOTUzIDE2IDE3NiAxNkMyODEuMDQ5IDE2IDMzNiA0Ni41MTYgMzM2IDYyLjg3NVY4MEgxNlY2Mi44NzVaIi8+PC9zdmc+|width=32|height=32)
 */
const CarBus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M560 336C542.328 336 528 350.326 528 368C528 385.672 542.328 400 560 400S592 385.672 592 368C592 350.326 577.672 336 560 336ZM560 384C551.178 384 544 376.822 544 368S551.178 352 560 352S576 359.178 576 368S568.822 384 560 384ZM304 336C286.328 336 272 350.326 272 368C272 385.672 286.328 400 304 400S336 385.672 336 368C336 350.326 321.672 336 304 336ZM304 384C295.178 384 288 376.822 288 368S295.178 352 304 352S320 359.178 320 368S312.822 384 304 384ZM591.41 290.09L561.281 199.703C553.375 175.953 531.219 160 506.188 160H357.812C332.781 160 310.625 175.953 302.719 199.703L272.59 290.09C244.764 297.033 224 322.045 224 352V395.344C224 417.043 237.209 435.705 256 443.756V504C256 508.418 259.582 512 264 512S272 508.418 272 504V447.529C273.559 447.668 275.062 448 276.656 448H587.344C588.938 448 590.441 447.668 592 447.529V504C592 508.418 595.582 512 600 512S608 508.418 608 504V443.756C626.791 435.705 640 417.043 640 395.344V352C640 322.045 619.236 297.033 591.41 290.09ZM317.906 204.766C323.625 187.562 339.688 176 357.812 176H506.188C524.312 176 540.375 187.562 546.094 204.766L573.838 288H290.162L317.906 204.766ZM624 395.344C624 415.562 607.562 432 587.344 432H276.656C256.438 432 240 415.562 240 395.344V352C240 325.531 261.531 304 288 304H576C602.469 304 624 325.531 624 352V395.344ZM48 272C48 289.641 62.344 304 80 304S112 289.641 112 272S97.656 240 80 240S48 254.359 48 272ZM96 272C96 280.828 88.812 288 80 288S64 280.828 64 272S71.188 256 80 256S96 263.172 96 272ZM184 336H29.375C21.988 336 16 330.012 16 322.625V208H248C252.422 208 256 204.422 256 200S252.422 192 248 192H16V96H336V120C336 124.418 339.582 128 344 128S352 124.418 352 120V62.875C352 27.625 274 0 176 0C78 0 0 27.625 0 62.875V322.625C0 338.848 13.152 352 29.375 352H48V408C48 412.418 51.582 416 56 416S64 412.418 64 408V352H184C188.418 352 192 348.418 192 344S188.418 336 184 336ZM16 62.875C16 46.516 70.953 16 176 16C281.049 16 336 46.516 336 62.875V80H16V62.875Z" />
    </Icon>
);

export default CarBus;
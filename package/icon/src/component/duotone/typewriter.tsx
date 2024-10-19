
import { Icon, generic } from "../../index";

/**
 * A component that renders the `typewriter` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/typewriter?s=duotone typewriter}
 * @preview ![typewriter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY0IDE5MlY0OEM2NCAyMS40OSA4NS40OSAwIDExMiAwSDM1MlY5Nkg0NDhWMTkySDM2NS4yNUMzNTYuNzUgMTkyIDM0OC42MjUgMTk1LjM3NSAzNDIuNjI1IDIwMS4zNzVMMzI5LjM3NSAyMTQuNjI1QzMyMy4zNzUgMjIwLjYyNSAzMTUuMjUgMjI0IDMwNi43NSAyMjRIMjA1LjI1QzE5Ni43NSAyMjQgMTg4LjYyNSAyMjAuNjI1IDE4Mi42MjUgMjE0LjYyNUwxNjkuMzc1IDIwMS4zNzVDMTYzLjM3NSAxOTUuMzc1IDE1NS4yNSAxOTIgMTQ2Ljc1IDE5Mkg2NFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzUyIDBWOTZINDQ4TDM1MiAwWk00ODAgMTkySDM2NS4yNUMzNTYuNzUgMTkyIDM0OC42MjUgMTk1LjM3NSAzNDIuNjI1IDIwMS4zNzVMMzI5LjM3NSAyMTQuNjI1QzMyMy4zNzUgMjIwLjYyNSAzMTUuMjUgMjI0IDMwNi43NSAyMjRIMjA1LjI1QzE5Ni43NSAyMjQgMTg4LjYyNSAyMjAuNjI1IDE4Mi42MjUgMjE0LjYyNUwxNjkuMzc1IDIwMS4zNzVDMTYzLjM3NSAxOTUuMzc1IDE1NS4yNSAxOTIgMTQ2Ljc1IDE5MkgzMkMxNC40IDE5MiAwIDIwNi40IDAgMjI0VjI1NkMwIDI3My42MjUgMTQuMzc1IDI4OCAzMiAyODhWNDY0QzMyIDQ5MC41MSA1My40OSA1MTIgODAgNTEySDQzMkM0NTguNTEgNTEyIDQ4MCA0OTAuNTEgNDgwIDQ2NFYyODhDNDk3LjYyNSAyODggNTEyIDI3My42MjUgNTEyIDI1NlYyMjRDNTEyIDIwNi40IDQ5Ny42IDE5MiA0ODAgMTkyWk0zMzYgMjk2QzMzNiAyOTEuNjI1IDMzOS42MjUgMjg4IDM0NCAyODhIMzYwQzM2NC4zNzUgMjg4IDM2OCAyOTEuNjI1IDM2OCAyOTZWMzEyQzM2OCAzMTYuMzc1IDM2NC4zNzUgMzIwIDM2MCAzMjBIMzQ0QzMzOS42MjUgMzIwIDMzNiAzMTYuMzc1IDMzNiAzMTJWMjk2Wk0zMTIgMzUySDMyOEMzMzIuMzc1IDM1MiAzMzYgMzU1LjYyNSAzMzYgMzYwVjM3NkMzMzYgMzgwLjM3NSAzMzIuMzc1IDM4NCAzMjggMzg0SDMxMkMzMDcuNjI1IDM4NCAzMDQgMzgwLjM3NSAzMDQgMzc2VjM2MEMzMDQgMzU1LjYyNSAzMDcuNjI1IDM1MiAzMTIgMzUyWk0yNzIgMjk2QzI3MiAyOTEuNjI1IDI3NS42MjUgMjg4IDI4MCAyODhIMjk2QzMwMC4zNzUgMjg4IDMwNCAyOTEuNjI1IDMwNCAyOTZWMzEyQzMwNCAzMTYuMzc1IDMwMC4zNzUgMzIwIDI5NiAzMjBIMjgwQzI3NS42MjUgMzIwIDI3MiAzMTYuMzc1IDI3MiAzMTJWMjk2Wk0yNDggMzUySDI2NEMyNjguMzc1IDM1MiAyNzIgMzU1LjYyNSAyNzIgMzYwVjM3NkMyNzIgMzgwLjM3NSAyNjguMzc1IDM4NCAyNjQgMzg0SDI0OEMyNDMuNjI1IDM4NCAyNDAgMzgwLjM3NSAyNDAgMzc2VjM2MEMyNDAgMzU1LjYyNSAyNDMuNjI1IDM1MiAyNDggMzUyWk0yMDggMjk2QzIwOCAyOTEuNjI1IDIxMS42MjUgMjg4IDIxNiAyODhIMjMyQzIzNi4zNzUgMjg4IDI0MCAyOTEuNjI1IDI0MCAyOTZWMzEyQzI0MCAzMTYuMzc1IDIzNi4zNzUgMzIwIDIzMiAzMjBIMjE2QzIxMS42MjUgMzIwIDIwOCAzMTYuMzc1IDIwOCAzMTJWMjk2Wk0xODQgMzUySDIwMEMyMDQuMzc1IDM1MiAyMDggMzU1LjYyNSAyMDggMzYwVjM3NkMyMDggMzgwLjM3NSAyMDQuMzc1IDM4NCAyMDAgMzg0SDE4NEMxNzkuNjI1IDM4NCAxNzYgMzgwLjM3NSAxNzYgMzc2VjM2MEMxNzYgMzU1LjYyNSAxNzkuNjI1IDM1MiAxODQgMzUyWk0xNDQgMjk2QzE0NCAyOTEuNjI1IDE0Ny42MjUgMjg4IDE1MiAyODhIMTY4QzE3Mi4zNzUgMjg4IDE3NiAyOTEuNjI1IDE3NiAyOTZWMzEyQzE3NiAzMTYuMzc1IDE3Mi4zNzUgMzIwIDE2OCAzMjBIMTUyQzE0Ny42MjUgMzIwIDE0NCAzMTYuMzc1IDE0NCAzMTJWMjk2Wk0xMDQgMzIwSDg4QzgzLjYyNSAzMjAgODAgMzE2LjM3NSA4MCAzMTJWMjk2QzgwIDI5MS42MjUgODMuNjI1IDI4OCA4OCAyODhIMTA0QzEwOC4zNzUgMjg4IDExMiAyOTEuNjI1IDExMiAyOTZWMzEyQzExMiAzMTYuMzc1IDEwOC4zNzUgMzIwIDEwNCAzMjBaTTEzNiAzODRIMTIwQzExNS42MjUgMzg0IDExMiAzODAuMzc1IDExMiAzNzZWMzYwQzExMiAzNTUuNjI1IDExNS42MjUgMzUyIDEyMCAzNTJIMTM2QzE0MC4zNzUgMzUyIDE0NCAzNTUuNjI1IDE0NCAzNjBWMzc2QzE0NCAzODAuMzc1IDE0MC4zNzUgMzg0IDEzNiAzODRaTTM2OCA0NDBDMzY4IDQ0NC4zNzUgMzY0LjM3NSA0NDggMzYwIDQ0OEgxNTJDMTQ3LjYyNSA0NDggMTQ0IDQ0NC4zNzUgMTQ0IDQ0MFY0MjRDMTQ0IDQxOS42MjUgMTQ3LjYyNSA0MTYgMTUyIDQxNkgzNjBDMzY0LjM3NSA0MTYgMzY4IDQxOS42MjUgMzY4IDQyNFY0NDBaTTQwMCAzNzZDNDAwIDM4MC4zNzUgMzk2LjM3NSAzODQgMzkyIDM4NEgzNzZDMzcxLjYyNSAzODQgMzY4IDM4MC4zNzUgMzY4IDM3NlYzNjBDMzY4IDM1NS42MjUgMzcxLjYyNSAzNTIgMzc2IDM1MkgzOTJDMzk2LjM3NSAzNTIgNDAwIDM1NS42MjUgNDAwIDM2MFYzNzZaTTQzMiAzMTJDNDMyIDMxNi4zNzUgNDI4LjM3NSAzMjAgNDI0IDMyMEg0MDhDNDAzLjYyNSAzMjAgNDAwIDMxNi4zNzUgNDAwIDMxMlYyOTZDNDAwIDI5MS42MjUgNDAzLjYyNSAyODggNDA4IDI4OEg0MjRDNDI4LjM3NSAyODggNDMyIDI5MS42MjUgNDMyIDI5NlYzMTJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const Typewriter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 192V48C64 21.49 85.49 0 112 0H352V96H448V192H365.25C356.75 192 348.625 195.375 342.625 201.375L329.375 214.625C323.375 220.625 315.25 224 306.75 224H205.25C196.75 224 188.625 220.625 182.625 214.625L169.375 201.375C163.375 195.375 155.25 192 146.75 192H64Z" />
            <path d="M352 0V96H448L352 0ZM480 192H365.25C356.75 192 348.625 195.375 342.625 201.375L329.375 214.625C323.375 220.625 315.25 224 306.75 224H205.25C196.75 224 188.625 220.625 182.625 214.625L169.375 201.375C163.375 195.375 155.25 192 146.75 192H32C14.4 192 0 206.4 0 224V256C0 273.625 14.375 288 32 288V464C32 490.51 53.49 512 80 512H432C458.51 512 480 490.51 480 464V288C497.625 288 512 273.625 512 256V224C512 206.4 497.6 192 480 192ZM336 296C336 291.625 339.625 288 344 288H360C364.375 288 368 291.625 368 296V312C368 316.375 364.375 320 360 320H344C339.625 320 336 316.375 336 312V296ZM312 352H328C332.375 352 336 355.625 336 360V376C336 380.375 332.375 384 328 384H312C307.625 384 304 380.375 304 376V360C304 355.625 307.625 352 312 352ZM272 296C272 291.625 275.625 288 280 288H296C300.375 288 304 291.625 304 296V312C304 316.375 300.375 320 296 320H280C275.625 320 272 316.375 272 312V296ZM248 352H264C268.375 352 272 355.625 272 360V376C272 380.375 268.375 384 264 384H248C243.625 384 240 380.375 240 376V360C240 355.625 243.625 352 248 352ZM208 296C208 291.625 211.625 288 216 288H232C236.375 288 240 291.625 240 296V312C240 316.375 236.375 320 232 320H216C211.625 320 208 316.375 208 312V296ZM184 352H200C204.375 352 208 355.625 208 360V376C208 380.375 204.375 384 200 384H184C179.625 384 176 380.375 176 376V360C176 355.625 179.625 352 184 352ZM144 296C144 291.625 147.625 288 152 288H168C172.375 288 176 291.625 176 296V312C176 316.375 172.375 320 168 320H152C147.625 320 144 316.375 144 312V296ZM104 320H88C83.625 320 80 316.375 80 312V296C80 291.625 83.625 288 88 288H104C108.375 288 112 291.625 112 296V312C112 316.375 108.375 320 104 320ZM136 384H120C115.625 384 112 380.375 112 376V360C112 355.625 115.625 352 120 352H136C140.375 352 144 355.625 144 360V376C144 380.375 140.375 384 136 384ZM368 440C368 444.375 364.375 448 360 448H152C147.625 448 144 444.375 144 440V424C144 419.625 147.625 416 152 416H360C364.375 416 368 419.625 368 424V440ZM400 376C400 380.375 396.375 384 392 384H376C371.625 384 368 380.375 368 376V360C368 355.625 371.625 352 376 352H392C396.375 352 400 355.625 400 360V376ZM432 312C432 316.375 428.375 320 424 320H408C403.625 320 400 316.375 400 312V296C400 291.625 403.625 288 408 288H424C428.375 288 432 291.625 432 296V312Z" />
    </Icon>
);

export default Typewriter;
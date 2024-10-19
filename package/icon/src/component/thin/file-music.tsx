
import { Icon } from "../../index";

/**
 * A component that renders the `file-music` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-music?s=thin file-music}
 * @preview ![file-music](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzQuNjI5IDE1MC42MjVMMjMzLjM3MSA5LjM3NUMyMjcuMzcxIDMuMzcxIDIxOS4yMyAwIDIxMC43NDYgMEg2NEMyOC42NTIgMCAwIDI4LjY1MiAwIDY0VjQ0OEMwIDQ4My4zNDQgMjguNjUyIDUxMiA2NCA1MTJIMzIwQzM1NS4zNDggNTEyIDM4NCA0ODMuMzQ0IDM4NCA0NDhWMTczLjI1NEMzODQgMTY0Ljc2NiAzODAuNjI5IDE1Ni42MjkgMzc0LjYyOSAxNTAuNjI1Wk0yMjQgMjIuNjI5TDM2MS4zNzUgMTYwSDI0OEMyMzQuNzgxIDE2MCAyMjQgMTQ5LjIzNCAyMjQgMTM2VjIyLjYyOVpNMzY4IDQ0OEMzNjggNDc0LjQ2OSAzNDYuNDY5IDQ5NiAzMjAgNDk2SDY0QzM3LjUzMSA0OTYgMTYgNDc0LjQ2OSAxNiA0NDhWNjRDMTYgMzcuNTMxIDM3LjUzMSAxNiA2NCAxNkgyMDhWMTM2QzIwOCAxNTguMDYyIDIyNS45MzggMTc2IDI0OCAxNzZIMzY4VjQ0OFpNMTQ0IDI4OFYzOTIuMzA1QzEzNS40OTQgMzg3LjE5NSAxMjQuMzUgMzg0IDExMiAzODRDODUuNDkgMzg0IDY0IDM5OC4zMjggNjQgNDE2Uzg1LjQ5IDQ0OCAxMTIgNDQ4UzE2MCA0MzMuNjcyIDE2MCA0MTZWMjkzLjIxOUwyNzIgMjQ0LjIxOVYzNjAuMzA1QzI2My40OTQgMzU1LjE5NSAyNTIuMzUgMzUyIDI0MCAzNTJDMjEzLjQ5IDM1MiAxOTIgMzY2LjMyOCAxOTIgMzg0UzIxMy40OSA0MTYgMjQwIDQxNlMyODggNDAxLjY3MiAyODggMzg0VjIzMkMyODggMjI5LjMxMiAyODYuNjQxIDIyNi43ODEgMjg0LjM3NSAyMjUuMzEyQzI4Mi4xNTYgMjIzLjgxMiAyNzkuMjUgMjIzLjYyNSAyNzYuNzk3IDIyNC42NTZMMTQ4Ljc5NyAyODAuNjU2QzE0NS44NzUgMjgxLjkzOCAxNDQgMjg0LjgxMiAxNDQgMjg4Wk0xMTIgNDMyQzkyLjQ2NyA0MzIgODAgNDIyLjUyMyA4MCA0MTZTOTIuNDY3IDQwMCAxMTIgNDAwQzEzMS41MzUgNDAwIDE0NCA0MDkuNDc3IDE0NCA0MTZTMTMxLjUzNSA0MzIgMTEyIDQzMlpNMjQwIDQwMEMyMjAuNDY3IDQwMCAyMDggMzkwLjUyMyAyMDggMzg0UzIyMC40NjcgMzY4IDI0MCAzNjhDMjU5LjUzNSAzNjggMjcyIDM3Ny40NzcgMjcyIDM4NFMyNTkuNTM1IDQwMCAyNDAgNDAwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FileMusic: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M374.629 150.625L233.371 9.375C227.371 3.371 219.23 0 210.746 0H64C28.652 0 0 28.652 0 64V448C0 483.344 28.652 512 64 512H320C355.348 512 384 483.344 384 448V173.254C384 164.766 380.629 156.629 374.629 150.625ZM224 22.629L361.375 160H248C234.781 160 224 149.234 224 136V22.629ZM368 448C368 474.469 346.469 496 320 496H64C37.531 496 16 474.469 16 448V64C16 37.531 37.531 16 64 16H208V136C208 158.062 225.938 176 248 176H368V448ZM144 288V392.305C135.494 387.195 124.35 384 112 384C85.49 384 64 398.328 64 416S85.49 448 112 448S160 433.672 160 416V293.219L272 244.219V360.305C263.494 355.195 252.35 352 240 352C213.49 352 192 366.328 192 384S213.49 416 240 416S288 401.672 288 384V232C288 229.312 286.641 226.781 284.375 225.312C282.156 223.812 279.25 223.625 276.797 224.656L148.797 280.656C145.875 281.938 144 284.812 144 288ZM112 432C92.467 432 80 422.523 80 416S92.467 400 112 400C131.535 400 144 409.477 144 416S131.535 432 112 432ZM240 400C220.467 400 208 390.523 208 384S220.467 368 240 368C259.535 368 272 377.477 272 384S259.535 400 240 400Z" />
    </Icon>
);

export default FileMusic;
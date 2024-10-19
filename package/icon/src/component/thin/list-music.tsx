
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `list-music` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/list-music?s=thin list-music}
 * @preview ![list-music](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04IDIzMkgyODBDMjg0LjQwNiAyMzIgMjg4IDIyOC40MDYgMjg4IDIyNFMyODQuNDA2IDIxNiAyODAgMjE2SDhDMy41OTQgMjE2IDAgMjE5LjU5NCAwIDIyNFMzLjU5NCAyMzIgOCAyMzJaTTggMTA0SDI4MEMyODQuNDA2IDEwNCAyODggMTAwLjQwNiAyODggOTZTMjg0LjQwNiA4OCAyODAgODhIOEMzLjU5NCA4OCAwIDkxLjU5NCAwIDk2UzMuNTk0IDEwNCA4IDEwNFpNMTUyIDM0NEg4QzMuNTk0IDM0NCAwIDM0Ny41OTQgMCAzNTJTMy41OTQgMzYwIDggMzYwSDE1MkMxNTYuNDA2IDM2MCAxNjAgMzU2LjQwNiAxNjAgMzUyUzE1Ni40MDYgMzQ0IDE1MiAzNDRaTTQ4MS4yNDIgMC45ODRMMzk2LjU5NCAyNS44MTJDMzc5LjY4IDMwLjg5MSAzNjguMDk0IDQ2LjQ2MSAzNjguMDk0IDY0LjExN1YzODguMDIzQzM1MC45MjIgMzY2LjM0NCAzMjEuNSAzNTIgMjg4IDM1MkMyMzQuOTggMzUyIDE5MiAzODcuODE2IDE5MiA0MzJDMTkyIDQ3Ni4xOCAyMzQuOTggNTEyIDI4OCA1MTJTMzg0IDQ3Ni4xOCAzODQgNDMySDM4NC4wOTRWMTYyLjc1OEw0OTQuNzY2IDEzMC4yMjdDNTA0Ljk4NCAxMjcuMjI3IDUxMiAxMTcuODUyIDUxMiAxMDcuMjAzVjI0LjAxMkM1MTIgNy45OTYgNDk2LjYxMyAtMy41MjMgNDgxLjI0MiAwLjk4NFpNMjg4IDQ5NkMyNDMuODg3IDQ5NiAyMDggNDY3LjI4OSAyMDggNDMyUzI0My44ODcgMzY4IDI4OCAzNjhTMzY4IDM5Ni43MTEgMzY4IDQzMlMzMzIuMTEzIDQ5NiAyODggNDk2Wk00OTYgMTA3LjE5MUM0OTYgMTEwLjc0MiA0OTMuNjYgMTEzLjg2NyA0OTAuMjU4IDExNC44NjdMMzg0LjA5NCAxNDYuMDYyVjY0LjE0OEMzODQuMDk0IDUzLjQ4NCAzOTEuMTI1IDQ0LjA5NCA0MDEuMzU5IDQxLjA5NEw0ODUuNzUgMTYuMzM2QzQ5MC44NzEgMTQuODMyIDQ5NiAxOC42NzIgNDk2IDI0LjAxMlYxMDcuMTkxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ListMusic(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M8 232H280C284.406 232 288 228.406 288 224S284.406 216 280 216H8C3.594 216 0 219.594 0 224S3.594 232 8 232ZM8 104H280C284.406 104 288 100.406 288 96S284.406 88 280 88H8C3.594 88 0 91.594 0 96S3.594 104 8 104ZM152 344H8C3.594 344 0 347.594 0 352S3.594 360 8 360H152C156.406 360 160 356.406 160 352S156.406 344 152 344ZM481.242 0.984L396.594 25.812C379.68 30.891 368.094 46.461 368.094 64.117V388.023C350.922 366.344 321.5 352 288 352C234.98 352 192 387.816 192 432C192 476.18 234.98 512 288 512S384 476.18 384 432H384.094V162.758L494.766 130.227C504.984 127.227 512 117.852 512 107.203V24.012C512 7.996 496.613 -3.523 481.242 0.984ZM288 496C243.887 496 208 467.289 208 432S243.887 368 288 368S368 396.711 368 432S332.113 496 288 496ZM496 107.191C496 110.742 493.66 113.867 490.258 114.867L384.094 146.062V64.148C384.094 53.484 391.125 44.094 401.359 41.094L485.75 16.336C490.871 14.832 496 18.672 496 24.012V107.191Z" />
        </Icon>
    </>
}
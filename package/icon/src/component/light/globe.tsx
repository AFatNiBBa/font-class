
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `globe` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/globe?s=light globe}
 * @preview ![globe](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTQ2NCAyNTZDNDY0IDI3OC4zMzYgNDYwLjM2NyAyOTkuODE2IDQ1My44MiAzMjBIMzc5LjI1NkMzODIuMjY0IDI5OS41OTYgMzg0IDI3OC4xOTkgMzg0IDI1NlMzODIuMjY0IDIxMi40MDQgMzc5LjI1NiAxOTJINDUzLjgyQzQ2MC4zNjcgMjEyLjE4NCA0NjQgMjMzLjY2NCA0NjQgMjU2Wk0yNTYgNDY0QzIyMy43NyA0NjQgMTg5LjAxOCA0MjAuODIgMTcxLjUxIDM1MkgzNDAuNDlDMzIyLjk4MiA0MjAuODIgMjg4LjIzIDQ2NCAyNTYgNDY0Wk0xNjQuODc1IDMyMEMxNjEuNzU0IDMwMC4xNDMgMTYwIDI3OC43MTkgMTYwIDI1NlMxNjEuNzU0IDIxMS44NTcgMTY0Ljg3NSAxOTJIMzQ3LjEyNUMzNTAuMjQ2IDIxMS44NTcgMzUyIDIzMy4yODEgMzUyIDI1NlMzNTAuMjQ2IDMwMC4xNDMgMzQ3LjEyNSAzMjBIMTY0Ljg3NVpNNDggMjU2QzQ4IDIzMy42NjQgNTEuNjMzIDIxMi4xODQgNTguMTggMTkySDEzMi43NDRDMTI5LjczNiAyMTIuNDA0IDEyOCAyMzMuODAxIDEyOCAyNTZTMTI5LjczNiAyOTkuNTk2IDEzMi43NDQgMzIwSDU4LjE4QzUxLjYzMyAyOTkuODE2IDQ4IDI3OC4zMzYgNDggMjU2Wk0yNTYgNDhDMjg4LjIzIDQ4IDMyMi45ODIgOTEuMTggMzQwLjQ5IDE2MEgxNzEuNTFDMTg5LjAxOCA5MS4xOCAyMjMuNzcgNDggMjU2IDQ4Wk00NDAuMzM4IDE2MEgzNzMuMjc5QzM2NC4xNDggMTIwLjg0NiAzNDkuNTc2IDg3LjI5MSAzMzEuMzk2IDYyLjM1OUMzNzguNDEyIDgwLjczNCA0MTcuMTM1IDExNS42MjcgNDQwLjMzOCAxNjBaTTE4MC42MDQgNjIuMzU5QzE2Mi40MjQgODcuMjkxIDE0Ny44NTIgMTIwLjg0NiAxMzguNzIxIDE2MEg3MS42NjJDOTQuODY1IDExNS42MjcgMTMzLjU4OCA4MC43MzQgMTgwLjYwNCA2Mi4zNTlaTTcxLjY2MiAzNTJIMTM4LjcyMUMxNDcuODUyIDM5MS4xNTQgMTYyLjQyNCA0MjQuNzA5IDE4MC42MDQgNDQ5LjY0MUMxMzMuNTg4IDQzMS4yNjYgOTQuODY1IDM5Ni4zNzMgNzEuNjYyIDM1MlpNMzMxLjM5NiA0NDkuNjQxQzM0OS41NzYgNDI0LjcwOSAzNjQuMTQ4IDM5MS4xNTQgMzczLjI3OSAzNTJINDQwLjMzOEM0MTcuMTM1IDM5Ni4zNzMgMzc4LjQxMiA0MzEuMjY2IDMzMS4zOTYgNDQ5LjY0MVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Globe(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM464 256C464 278.336 460.367 299.816 453.82 320H379.256C382.264 299.596 384 278.199 384 256S382.264 212.404 379.256 192H453.82C460.367 212.184 464 233.664 464 256ZM256 464C223.77 464 189.018 420.82 171.51 352H340.49C322.982 420.82 288.23 464 256 464ZM164.875 320C161.754 300.143 160 278.719 160 256S161.754 211.857 164.875 192H347.125C350.246 211.857 352 233.281 352 256S350.246 300.143 347.125 320H164.875ZM48 256C48 233.664 51.633 212.184 58.18 192H132.744C129.736 212.404 128 233.801 128 256S129.736 299.596 132.744 320H58.18C51.633 299.816 48 278.336 48 256ZM256 48C288.23 48 322.982 91.18 340.49 160H171.51C189.018 91.18 223.77 48 256 48ZM440.338 160H373.279C364.148 120.846 349.576 87.291 331.396 62.359C378.412 80.734 417.135 115.627 440.338 160ZM180.604 62.359C162.424 87.291 147.852 120.846 138.721 160H71.662C94.865 115.627 133.588 80.734 180.604 62.359ZM71.662 352H138.721C147.852 391.154 162.424 424.709 180.604 449.641C133.588 431.266 94.865 396.373 71.662 352ZM331.396 449.641C349.576 424.709 364.148 391.154 373.279 352H440.338C417.135 396.373 378.412 431.266 331.396 449.641Z" />
        </Icon>
    </>
}
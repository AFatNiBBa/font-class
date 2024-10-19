
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-swirl` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-swirl?s=sharp-duotone-solid pen-swirl}
 * @preview ![pen-swirl](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkMwIDM5Ny40IDExNC42IDUxMiAyNTYgNTEybDMyIDAgMC02NC0zMiAwQzE1MCA0NDggNjQgMzYyIDY0IDI1NlMxNTAgNjQgMjU2IDY0YzE0LjEgMCAyNy44IDEuNSA0MSA0LjRMMzQ3LjggMTdDMzE5LjMgNiAyODguNCAwIDI1NiAwQzExNC42IDAgMCAxMTQuNiAwIDI1NnptMzIwIDk2bDAgNjQgMzIgMGM4OC40IDAgMTYwLTcxLjYgMTYwLTE2MGMwLTMyLjItNS45LTYzLTE2LjgtOTEuM2wtNTEuNCA1MS40YzIuNyAxMi45IDQuMiAyNi4yIDQuMiAzOS45YzAgNTMtNDMgOTYtOTYgOTZsLTMyIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNjAgMzUybDE2LTExMkwzNDAuNyA3NS4zbDk2IDk2TDI3MiAzMzYgMTYwIDM1MnpNNDU5LjMgMTQ4LjdsLTk2LTk2TDQxNiAwbDk2IDk2LTUyLjcgNTIuN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const PenSwirl: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512l32 0 0-64-32 0C150 448 64 362 64 256S150 64 256 64c14.1 0 27.8 1.5 41 4.4L347.8 17C319.3 6 288.4 0 256 0C114.6 0 0 114.6 0 256zm320 96l0 64 32 0c88.4 0 160-71.6 160-160c0-32.2-5.9-63-16.8-91.3l-51.4 51.4c2.7 12.9 4.2 26.2 4.2 39.9c0 53-43 96-96 96l-32 0z" />
            <path d="M160 352l16-112L340.7 75.3l96 96L272 336 160 352zM459.3 148.7l-96-96L416 0l96 96-52.7 52.7z" />
    </Icon>
);

export default PenSwirl;
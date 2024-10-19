
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `dna` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dna?s=thin dna}
 * @preview ![dna](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yOTIuODc1IDI4OS41QzI4OS4zNTkgMjg2Ljc4MSAyODQuMzQ0IDI4Ny40NjkgMjgxLjY1NiAyOTFDMjc4Ljk2OSAyOTQuNSAyNzkuNjU2IDI5OS41MzEgMjgzLjE1NiAzMDIuMTg4QzMwNC4xODIgMzE4LjI0IDMyMS4zNDQgMzM1LjEyMyAzMzUuNDg0IDM1MkgxMTIuOTg4QzEzOS4yMjUgMzIwLjY5NyAxNzUuNzgxIDI4OS4zMjYgMjI3LjYwOSAyNjMuMTI1QzIyNy43NjggMjYzLjA0NSAyMjcuOSAyNjIuOTUzIDIyOC4wNTkgMjYyLjg3M0MyMjguMSAyNjIuODUgMjI4LjE0MSAyNjIuODMyIDIyOC4xODIgMjYyLjgwNUM0MTMuODExIDE2OC42NDMgNDE2IDkuNTkyIDQxNiA4QzQxNiAzLjU5NCA0MTIuNDIyIDAgNDA4LjAxNiAwSDQwOEM0MDMuNTk0IDAgNDAwLjAxNiAzLjU5NCA0MDAgOEM0MDAgOC40NzkgMzk5LjY4IDI0LjEyMSAzOTMuNTkgNDhINTQuNDFDNDguMzIgMjQuMTIxIDQ4IDguNDc5IDQ4IDhDNDcuOTg0IDMuNTk0IDQ0LjQwNiAwIDQwIDBIMzkuOTg0QzM1LjU3OCAwIDMyIDMuNTk0IDMyIDhDMzIgOS41NTUgMzQuNTQ5IDE2MS4xOTcgMjA3LjY1OCAyNTZDMzQuNTQ5IDM1MC44MDMgMzIgNTAyLjQ0NSAzMiA1MDRDMzIgNTA4LjQwNiAzNS41NzggNTEyIDM5Ljk4NCA1MTJINDBDNDQuNDA2IDUxMiA0Ny45ODQgNTA4LjQwNiA0OCA1MDRDNDggNTAzLjUyMSA0OC4zMiA0ODcuODc5IDU0LjQxIDQ2NEgzOTMuNjdDMzk5LjczIDQ4Ny45MjggNDAwIDUwMy41ODYgNDAwIDUwNEM0MDAuMDE2IDUwOC40MDYgNDAzLjU5NCA1MTIgNDA4IDUxMkg0MDguMDE2QzQxMi40MjIgNTEyIDQxNiA1MDguNDA2IDQxNiA1MDRDNDE2IDQ5OS4wOTQgNDE0LjU5NCAzODIuNDA2IDI5Mi44NzUgMjg5LjVaTTM4OC45MTIgNjRDMzgxLjQzNiA4Ny4wNjggMzY4LjY1MiAxMTUuMDg0IDM0Ny41NDUgMTQ0SDEwMC40NTVDNzkuMzQ4IDExNS4wODQgNjYuNTY0IDg3LjA2OCA1OS4wODggNjRIMzg4LjkxMlpNMTEyLjk4OCAxNjBIMzM1LjAxMkMzMDkuNDI0IDE5MC41MjkgMjczLjgyOCAyMjEuMDU3IDIyNCAyNDYuODU3QzE3NC4xNzIgMjIxLjA1NyAxMzguNTc2IDE5MC41MjkgMTEyLjk4OCAxNjBaTTU5LjA4OCA0NDhDNjYuNTY0IDQyNC45MzIgNzkuMzQ4IDM5Ni45MTYgMTAwLjQ1NSAzNjhIMzQ3Ljk1N0MzNjkuMDE0IDM5Ni44NzkgMzgxLjU5NCA0MjQuOTE4IDM4OS4wMzUgNDQ4SDU5LjA4OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Dna(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M292.875 289.5C289.359 286.781 284.344 287.469 281.656 291C278.969 294.5 279.656 299.531 283.156 302.188C304.182 318.24 321.344 335.123 335.484 352H112.988C139.225 320.697 175.781 289.326 227.609 263.125C227.768 263.045 227.9 262.953 228.059 262.873C228.1 262.85 228.141 262.832 228.182 262.805C413.811 168.643 416 9.592 416 8C416 3.594 412.422 0 408.016 0H408C403.594 0 400.016 3.594 400 8C400 8.479 399.68 24.121 393.59 48H54.41C48.32 24.121 48 8.479 48 8C47.984 3.594 44.406 0 40 0H39.984C35.578 0 32 3.594 32 8C32 9.555 34.549 161.197 207.658 256C34.549 350.803 32 502.445 32 504C32 508.406 35.578 512 39.984 512H40C44.406 512 47.984 508.406 48 504C48 503.521 48.32 487.879 54.41 464H393.67C399.73 487.928 400 503.586 400 504C400.016 508.406 403.594 512 408 512H408.016C412.422 512 416 508.406 416 504C416 499.094 414.594 382.406 292.875 289.5ZM388.912 64C381.436 87.068 368.652 115.084 347.545 144H100.455C79.348 115.084 66.564 87.068 59.088 64H388.912ZM112.988 160H335.012C309.424 190.529 273.828 221.057 224 246.857C174.172 221.057 138.576 190.529 112.988 160ZM59.088 448C66.564 424.932 79.348 396.916 100.455 368H347.957C369.014 396.879 381.594 424.918 389.035 448H59.088Z" />
        </Icon>
    </>
}
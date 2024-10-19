
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `chevrons-right` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chevrons-right?s=duotone chevrons-right}
 * @preview ![chevrons-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1Ni4wMDkgMjU2QzI1Ni4wMDkgMjQ2LjA0NyAyNTIuMzIyIDIzNi4wNzggMjQ0LjkxNiAyMjguMzQ0TDY4LjkyMyA0NC4zNDRDNTMuNjQyIDI4LjM5MSAyOC4zMzIgMjcuODI4IDEyLjM2MyA0My4wOTRDLTMuNjA0IDU4LjM1OSAtNC4xNjYgODMuNjg4IDExLjExMyA5OS42NTZMMTYwLjY2OSAyNTZMMTEuMTEzIDQxMi4zNDRDLTQuMTM1IDQyOC4zMTIgLTMuNjY2IDQ1My42NDEgMTIuMzYzIDQ2OC45MDZDMjguMzMyIDQ4NC4xNzIgNTMuNjQyIDQ4My42MDkgNjguOTIzIDQ2Ny42NTZMMjQ0LjkxNiAyODMuNjU2QzI1Mi4zMjIgMjc1LjkyMiAyNTYuMDA5IDI2NS45NTMgMjU2LjAwOSAyNTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQzNi45MDQgMjI4LjM0NEwyNjAuOTEyIDQ0LjM0NEMyNDUuNjMyIDI4LjM5MSAyMjAuMzIgMjcuODI4IDIwNC4zNTMgNDMuMDk0QzE4OC4zODQgNTguMzU5IDE4Ny44NTMgODMuNjg4IDIwMy4xMDMgOTkuNjU2TDM1Mi42NTggMjU2TDIwMy4xMDMgNDEyLjM0NEMxODcuODUzIDQyOC4zMTIgMTg4LjM1MyA0NTMuNjQxIDIwNC4zNTMgNDY4LjkwNkMyMjAuMzIgNDg0LjE3MiAyNDUuNjMyIDQ4My42MDkgMjYwLjkxMiA0NjcuNjU2TDQzNi45MDQgMjgzLjY1NkM0NDQuMzEgMjc1LjkyMiA0NDcuOTk3IDI2NS45NTMgNDQ3Ljk5NyAyNTZTNDQ0LjMxIDIzNi4wNzggNDM2LjkwNCAyMjguMzQ0WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ChevronsRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M256.009 256C256.009 246.047 252.322 236.078 244.916 228.344L68.923 44.344C53.642 28.391 28.332 27.828 12.363 43.094C-3.604 58.359 -4.166 83.688 11.113 99.656L160.669 256L11.113 412.344C-4.135 428.312 -3.666 453.641 12.363 468.906C28.332 484.172 53.642 483.609 68.923 467.656L244.916 283.656C252.322 275.922 256.009 265.953 256.009 256Z" />
            <path d="M436.904 228.344L260.912 44.344C245.632 28.391 220.32 27.828 204.353 43.094C188.384 58.359 187.853 83.688 203.103 99.656L352.658 256L203.103 412.344C187.853 428.312 188.353 453.641 204.353 468.906C220.32 484.172 245.632 483.609 260.912 467.656L436.904 283.656C444.31 275.922 447.997 265.953 447.997 256S444.31 236.078 436.904 228.344Z" />
        </Icon>
    </>
}
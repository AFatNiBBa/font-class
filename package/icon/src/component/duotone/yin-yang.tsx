
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `yin-yang` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/yin-yang?s=duotone yin-yang}
 * @preview ![yin-yang](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1Ni4wMDkgMTZDMzIyLjI5NCAxNiAzNzYuMDE3IDY5Ljc1IDM3Ni4wMTcgMTM2UzMyMi4yOTQgMjU2IDI1Ni4wMDkgMjU2UzEzNiAzMDkuNzUgMTM2IDM3NlMxODkuNzI1IDQ5NiAyNTYuMDA5IDQ5NkMzODguNTc4IDQ5NiA0OTYuMDI2IDM4OC41IDQ5Ni4wMjYgMjU2UzM4OC41NzggMTYgMjU2LjAwOSAxNlpNMjU2LjAwOSA0MDhDMjM4LjMzMyA0MDggMjI0LjA0NyAzOTMuNjI1IDIyNC4wNDcgMzc2UzIzOC4zMzMgMzQ0IDI1Ni4wMDkgMzQ0UzI4Ny45NzEgMzU4LjM3NSAyODcuOTcxIDM3NlMyNzMuNjg1IDQwOCAyNTYuMDA5IDQwOFpNMjU2LjA0MiAxNjhDMjczLjcxOCAxNjggMjg4LjAwNCAxNTMuNjI1IDI4OC4wMDQgMTM2UzI3My43MTggMTA0IDI1Ni4wNDIgMTA0UzIyNC4wODEgMTE4LjM3NSAyMjQuMDgxIDEzNlMyMzguMzY3IDE2OCAyNTYuMDQyIDE2OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjU2LjAxNyAxNkMxMjMuNDQ4IDE2IDE2IDEyMy41IDE2IDI1NlMxMjMuNDQ4IDQ5NiAyNTYuMDE3IDQ5NkMxODkuNzMyIDQ5NiAxMzYuMDA5IDQ0Mi4yNSAxMzYuMDA5IDM3NlMxODkuNzMyIDI1NiAyNTYuMDE3IDI1NlMzNzYuMDI2IDIwMi4yNSAzNzYuMDI2IDEzNlMzMjIuMzAxIDE2IDI1Ni4wMTcgMTZaTTI1Ni4wMTcgMTY4QzIzOC4zNDEgMTY4IDIyNC4wNTUgMTUzLjYyNSAyMjQuMDU1IDEzNlMyMzguMzQxIDEwNCAyNTYuMDE3IDEwNFMyODcuOTc4IDExOC4zNzUgMjg3Ljk3OCAxMzZTMjczLjY5MiAxNjggMjU2LjAxNyAxNjhaTTI1NS45NDggMzQ0QzIzOC4yNzggMzQ0IDIyMy45NTUgMzU4LjMyNiAyMjMuOTU1IDM3NkMyMjMuOTU1IDM5My42NzIgMjM4LjI3OCA0MDggMjU1Ljk0OCA0MDhTMjg3Ljk0MSAzOTMuNjcyIDI4Ny45NDEgMzc2QzI4Ny45NDEgMzU4LjMyNiAyNzMuNjE4IDM0NCAyNTUuOTQ4IDM0NFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function YinYang(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M256.009 16C322.294 16 376.017 69.75 376.017 136S322.294 256 256.009 256S136 309.75 136 376S189.725 496 256.009 496C388.578 496 496.026 388.5 496.026 256S388.578 16 256.009 16ZM256.009 408C238.333 408 224.047 393.625 224.047 376S238.333 344 256.009 344S287.971 358.375 287.971 376S273.685 408 256.009 408ZM256.042 168C273.718 168 288.004 153.625 288.004 136S273.718 104 256.042 104S224.081 118.375 224.081 136S238.367 168 256.042 168Z" />
            <path d="M256.017 16C123.448 16 16 123.5 16 256S123.448 496 256.017 496C189.732 496 136.009 442.25 136.009 376S189.732 256 256.017 256S376.026 202.25 376.026 136S322.301 16 256.017 16ZM256.017 168C238.341 168 224.055 153.625 224.055 136S238.341 104 256.017 104S287.978 118.375 287.978 136S273.692 168 256.017 168ZM255.948 344C238.278 344 223.955 358.326 223.955 376C223.955 393.672 238.278 408 255.948 408S287.941 393.672 287.941 376C287.941 358.326 273.618 344 255.948 344Z" />
        </Icon>
    </>
}
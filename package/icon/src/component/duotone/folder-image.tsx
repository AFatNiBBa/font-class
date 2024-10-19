
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `folder-image` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folder-image?s=duotone folder-image}
 * @preview ![folder-image](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ2NCA5NkgyNzJMMjA4IDMySDQ4QzIxLjUgMzIgMCA1My41IDAgODBWNDMyQzAgNDU4LjUgMjEuNSA0ODAgNDggNDgwSDQ2NEM0OTAuNSA0ODAgNTEyIDQ1OC41IDUxMiA0MzJWMTQ0QzUxMiAxMTcuNSA0OTAuNSA5NiA0NjQgOTZaTTEyNy45ODQgMTkyQzE0NS42NiAxOTIgMTU5Ljk4NCAyMDYuMzI4IDE1OS45ODQgMjI0UzE0NS42NiAyNTYgMTI3Ljk4NCAyNTZDMTEwLjMxMiAyNTYgOTUuOTg0IDI0MS42NzIgOTUuOTg0IDIyNFMxMTAuMzEyIDE5MiAxMjcuOTg0IDE5MlpNNDE0LjEwOSA0MDcuNTUxQzQxMS4zMiA0MTIuNzU0IDQwNS44OTggNDE2IDQwMCA0MTZIMTEyQzEwNS45NzcgNDE2IDEwMC40NjkgNDEyLjYyMSA5Ny43MzggNDA3LjI1Qzk1LjAwOCA0MDEuODgzIDk1LjUyMyAzOTUuNDM4IDk5LjA3IDM5MC41NzRMMTY5LjA3IDI5NC41NzRDMTcyLjA4NiAyOTAuNDQxIDE3Ni44OTEgMjg4IDE4MiAyODhDMTg3LjEwOSAyODggMTkxLjkxNCAyOTAuNDQxIDE5NC45MyAyOTQuNTc0TDIxNy4yODEgMzI1LjIzNEwyODAuMDIzIDIzMS4xMjVDMjgyLjk4OCAyMjYuNjcyIDI4Ny45ODQgMjI0IDI5My4zMzYgMjI0QzI5OC42ODQgMjI0IDMwMy42OCAyMjYuNjcyIDMwNi42NDggMjMxLjEyNUw0MTMuMzEyIDM5MS4xMjVDNDE2LjU4NiAzOTYuMDM1IDQxNi44OTEgNDAyLjM0OCA0MTQuMTA5IDQwNy41NTFaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQxNC4xMSA0MDcuNTUxQzQxMS4zMjEgNDEyLjc1NCA0MDUuODk5IDQxNiA0MDAuMDAxIDQxNkgxMTIuMDAxQzEwNS45NzcgNDE2IDEwMC40NjkgNDEyLjYyMSA5Ny43MzkgNDA3LjI1Qzk1LjAwOCA0MDEuODgzIDk1LjUyNCAzOTUuNDM4IDk5LjA3MSAzOTAuNTc0TDE2OS4wNzEgMjk0LjU3NEMxNzIuMDg3IDI5MC40NDEgMTc2Ljg5MSAyODggMTgyLjAwMSAyODhDMTg3LjExIDI4OCAxOTEuOTE1IDI5MC40NDEgMTk0LjkzIDI5NC41NzRMMjE3LjI4MiAzMjUuMjM0TDI4MC4wMjQgMjMxLjEyNUMyODIuOTg5IDIyNi42NzIgMjg3Ljk4NSAyMjQgMjkzLjMzNyAyMjRDMjk4LjY4NCAyMjQgMzAzLjY4IDIyNi42NzIgMzA2LjY0OSAyMzEuMTI1TDQxMy4zMTMgMzkxLjEyNUM0MTYuNTg3IDM5Ni4wMzUgNDE2Ljg5MSA0MDIuMzQ4IDQxNC4xMSA0MDcuNTUxWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FolderImage(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M464 96H272L208 32H48C21.5 32 0 53.5 0 80V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V144C512 117.5 490.5 96 464 96ZM127.984 192C145.66 192 159.984 206.328 159.984 224S145.66 256 127.984 256C110.312 256 95.984 241.672 95.984 224S110.312 192 127.984 192ZM414.109 407.551C411.32 412.754 405.898 416 400 416H112C105.977 416 100.469 412.621 97.738 407.25C95.008 401.883 95.523 395.438 99.07 390.574L169.07 294.574C172.086 290.441 176.891 288 182 288C187.109 288 191.914 290.441 194.93 294.574L217.281 325.234L280.023 231.125C282.988 226.672 287.984 224 293.336 224C298.684 224 303.68 226.672 306.648 231.125L413.312 391.125C416.586 396.035 416.891 402.348 414.109 407.551Z" />
            <path d="M414.11 407.551C411.321 412.754 405.899 416 400.001 416H112.001C105.977 416 100.469 412.621 97.739 407.25C95.008 401.883 95.524 395.438 99.071 390.574L169.071 294.574C172.087 290.441 176.891 288 182.001 288C187.11 288 191.915 290.441 194.93 294.574L217.282 325.234L280.024 231.125C282.989 226.672 287.985 224 293.337 224C298.684 224 303.68 226.672 306.649 231.125L413.313 391.125C416.587 396.035 416.891 402.348 414.11 407.551Z" />
        </Icon>
    </>
}
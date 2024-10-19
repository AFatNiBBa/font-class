
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `air-freshener` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/air-freshener?s=duotone air-freshener}
 * @preview ![air-freshener](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMwNCAzODRIODBDNTMuNDkgMzg0IDMyIDQwNS40OSAzMiA0MzJWNDY0QzMyIDQ5MC41MSA1My40OSA1MTIgODAgNTEySDMwNEMzMzAuNTEgNTEyIDM1MiA0OTAuNTEgMzUyIDQ2NFY0MzJDMzUyIDQwNS40OSAzMzAuNTEgMzg0IDMwNCAzODRaTTMwNCA0NjRIODBWNDMySDMwNFY0NjRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTM3Ny4xNzQgMzA2LjE0MUwzMDUuODg3IDIyNEgzNDIuMTcyQzM2NC4xOTYgMjI0IDM3Ni4wNzcgMTk4LjQ4IDM2MS43NDMgMTgxLjk2M0wyMTEuNTM5IDguODkxQzIwMS4yNTIgLTIuOTY1IDE4Mi42ODQgLTIuOTYzIDE3Mi4zOTcgOC44OTVMMjIuMjU0IDE4MS45NjdDNy45MjQgMTk4LjQ4NCAxOS44MDUgMjI0IDQxLjgyNyAyMjRINzguMDg0TDYuODIzIDMwNi4xNDVDLTguODEgMzI0LjE2NCA0LjE1MSAzNTIgMjguMTc0IDM1MkgxNjAuMDA2VjM4NEgyMjQuMDA2VjM1MkgzNTUuODI1QzM3OS44NSAzNTIgMzkyLjgxMSAzMjQuMTYgMzc3LjE3NCAzMDYuMTQxWk0xOTIuMDA2IDEwNEMxNzguNzUyIDEwNCAxNjguMDA2IDkzLjI1NCAxNjguMDA2IDgwUzE3OC43NTIgNTYgMTkyLjAwNiA1NlMyMTYuMDA2IDY2Ljc0NiAyMTYuMDA2IDgwUzIwNS4yNiAxMDQgMTkyLjAwNiAxMDRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function AirFreshener(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path opacity={.4} d="M304 384H80C53.49 384 32 405.49 32 432V464C32 490.51 53.49 512 80 512H304C330.51 512 352 490.51 352 464V432C352 405.49 330.51 384 304 384ZM304 464H80V432H304V464Z" />
            <path d="M377.174 306.141L305.887 224H342.172C364.196 224 376.077 198.48 361.743 181.963L211.539 8.891C201.252 -2.965 182.684 -2.963 172.397 8.895L22.254 181.967C7.924 198.484 19.805 224 41.827 224H78.084L6.823 306.145C-8.81 324.164 4.151 352 28.174 352H160.006V384H224.006V352H355.825C379.85 352 392.811 324.16 377.174 306.141ZM192.006 104C178.752 104 168.006 93.254 168.006 80S178.752 56 192.006 56S216.006 66.746 216.006 80S205.26 104 192.006 104Z" />
        </Icon>
    </>
}
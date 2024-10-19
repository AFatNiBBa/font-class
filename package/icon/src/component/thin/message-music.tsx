
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `message-music` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-music?s=thin message-music}
 * @preview ![message-music](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDAuNzk3IDk2LjYzOUwyMTIuNzk3IDE1Mi42MzRDMjA5Ljg3NSAxNTMuOTE1IDIwOCAxNTYuNzkgMjA4IDE1OS45NzdWMjY0LjI3NEMxOTkuNDk0IDI1OS4xNjUgMTg4LjM1IDI1NS45NyAxNzYgMjU1Ljk3QzE0OS40OSAyNTUuOTcgMTI4IDI3MC4yOTcgMTI4IDI4Ny45NjdTMTQ5LjQ5IDMxOS45NjUgMTc2IDMxOS45NjVTMjI0IDMwNS42MzggMjI0IDI4Ny45NjdWMTY1LjE5NkwzMzYgMTE2LjJWMjMyLjI3NkMzMjcuNDk0IDIyNy4xNjcgMzE2LjM1IDIyMy45NzIgMzA0IDIyMy45NzJDMjc3LjQ5IDIyMy45NzIgMjU2IDIzOC4yOTkgMjU2IDI1NS45N1MyNzcuNDkgMjg3Ljk2NyAzMDQgMjg3Ljk2N1MzNTIgMjczLjY0IDM1MiAyNTUuOTdWMTAzLjk4MkMzNTIgMTAxLjI5NSAzNTAuNjQxIDk4Ljc2NCAzNDguMzc1IDk3LjI5NUMzNDYuMTU2IDk1Ljc5NSAzNDMuMjUgOTUuNjA4IDM0MC43OTcgOTYuNjM5Wk0xNzYgMzAzLjk2NkMxNTYuNDY3IDMwMy45NjYgMTQ0IDI5NC40OSAxNDQgMjg3Ljk2N1MxNTYuNDY3IDI3MS45NjggMTc2IDI3MS45NjhDMTk1LjUzNSAyNzEuOTY4IDIwOCAyODEuNDQ0IDIwOCAyODcuOTY3UzE5NS41MzUgMzAzLjk2NiAxNzYgMzAzLjk2NlpNMzA0IDI3MS45NjhDMjg0LjQ2NyAyNzEuOTY4IDI3MiAyNjIuNDkzIDI3MiAyNTUuOTdTMjg0LjQ2NyAyMzkuOTcxIDMwNCAyMzkuOTcxQzMyMy41MzUgMjM5Ljk3MSAzMzYgMjQ5LjQ0NyAzMzYgMjU1Ljk3UzMyMy41MzUgMjcxLjk2OCAzMDQgMjcxLjk2OFpNNDQ4IDBINjRDMjguNzUgMCAwIDI4Ljc0OCAwIDYzLjk5NVYzNTEuOTcyQzAgMzg3LjIxOSAyOC43NSA0MTUuOTY3IDY0IDQxNS45NjdIMTYwVjQ5OS45NkMxNjAgNTA3LjAzMiAxNjUuOTIgNTEyIDE3Mi4xNzggNTEyQzE3NC41NDcgNTEyIDE3Ni45NjMgNTExLjI4NyAxNzkuMTI1IDUwOS43MDlMMzA0IDQxNS45NjdINDQ4QzQ4My4yNSA0MTUuOTY3IDUxMiAzODcuMjE5IDUxMiAzNTEuOTcyVjYzLjk5NUM1MTIgMjguNzQ4IDQ4My4yNSAwIDQ0OCAwWk00OTYgMzUxLjk3MkM0OTYgMzc4LjQzNiA0NzQuNDY3IDM5OS45NjggNDQ4IDM5OS45NjhIMjk4LjY2MkwyOTQuMzk1IDQwMy4xNzNMMTc2IDQ5Mi4wNTJWMzk5Ljk2OEg2NEMzNy41MzMgMzk5Ljk2OCAxNiAzNzguNDM2IDE2IDM1MS45NzJWNjMuOTk1QzE2IDM3LjUzIDM3LjUzMyAxNS45OTkgNjQgMTUuOTk5SDQ0OEM0NzQuNDY3IDE1Ljk5OSA0OTYgMzcuNTMgNDk2IDYzLjk5NVYzNTEuOTcyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MessageMusic(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M340.797 96.639L212.797 152.634C209.875 153.915 208 156.79 208 159.977V264.274C199.494 259.165 188.35 255.97 176 255.97C149.49 255.97 128 270.297 128 287.967S149.49 319.965 176 319.965S224 305.638 224 287.967V165.196L336 116.2V232.276C327.494 227.167 316.35 223.972 304 223.972C277.49 223.972 256 238.299 256 255.97S277.49 287.967 304 287.967S352 273.64 352 255.97V103.982C352 101.295 350.641 98.764 348.375 97.295C346.156 95.795 343.25 95.608 340.797 96.639ZM176 303.966C156.467 303.966 144 294.49 144 287.967S156.467 271.968 176 271.968C195.535 271.968 208 281.444 208 287.967S195.535 303.966 176 303.966ZM304 271.968C284.467 271.968 272 262.493 272 255.97S284.467 239.971 304 239.971C323.535 239.971 336 249.447 336 255.97S323.535 271.968 304 271.968ZM448 0H64C28.75 0 0 28.748 0 63.995V351.972C0 387.219 28.75 415.967 64 415.967H160V499.96C160 507.032 165.92 512 172.178 512C174.547 512 176.963 511.287 179.125 509.709L304 415.967H448C483.25 415.967 512 387.219 512 351.972V63.995C512 28.748 483.25 0 448 0ZM496 351.972C496 378.436 474.467 399.968 448 399.968H298.662L294.395 403.173L176 492.052V399.968H64C37.533 399.968 16 378.436 16 351.972V63.995C16 37.53 37.533 15.999 64 15.999H448C474.467 15.999 496 37.53 496 63.995V351.972Z" />
        </Icon>
    </>
}
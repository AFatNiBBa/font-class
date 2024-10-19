
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `file-video` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-video?s=duotone file-video}
 * @preview ![file-video](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxMjhWMEg0OEMyMS40OSAwIDAgMjEuNDkyIDAgNDhWNDY0QzAgNDkwLjUwOCAyMS40OSA1MTIgNDggNTEySDMzNkMzNjIuNTEgNTEyIDM4NCA0OTAuNTA4IDM4NCA0NjRWMTI4SDI1NlpNMjI0IDM4NEMyMjQgNDAxLjY3MiAyMDkuNjc0IDQxNiAxOTIgNDE2SDk2Qzc4LjMyNiA0MTYgNjQgNDAxLjY3MiA2NCAzODRWMjg4QzY0IDI3MC4zMjggNzguMzI2IDI1NiA5NiAyNTZIMTkyQzIwOS42NzQgMjU2IDIyNCAyNzAuMzI4IDIyNCAyODhWMzg0Wk0zMjAgMzg3LjEzM0MzMjAgMzk5LjY5OSAzMDYuMTc4IDQwNy4zNTkgMjk1LjUyIDQwMC42OTlMMjU2IDM3NlYyOTZMMjk1LjUyIDI3MS4yOTdDMzA2LjE3OCAyNjQuNjQxIDMyMCAyNzIuMzAxIDMyMCAyODQuODY3VjM4Ny4xMzNaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI1NiAwVjEyOEgzODRMMjU2IDBaTTE5MiAyNTZIOTZDNzguMzI2IDI1NiA2NCAyNzAuMzI4IDY0IDI4OFYzODRDNjQgNDAxLjY3MiA3OC4zMjYgNDE2IDk2IDQxNkgxOTJDMjA5LjY3NCA0MTYgMjI0IDQwMS42NzIgMjI0IDM4NFYyODhDMjI0IDI3MC4zMjggMjA5LjY3NCAyNTYgMTkyIDI1NlpNMjk1LjUyIDI3MS4yOTdMMjU2IDI5NlYzNzZMMjk1LjUyIDQwMC42OTlDMzA2LjE3OCA0MDcuMzU5IDMyMCAzOTkuNjk5IDMyMCAzODcuMTMzVjI4NC44NjdDMzIwIDI3Mi4zMDEgMzA2LjE3OCAyNjQuNjQxIDI5NS41MiAyNzEuMjk3WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FileVideo(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path opacity={.4} d="M256 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V128H256ZM224 384C224 401.672 209.674 416 192 416H96C78.326 416 64 401.672 64 384V288C64 270.328 78.326 256 96 256H192C209.674 256 224 270.328 224 288V384ZM320 387.133C320 399.699 306.178 407.359 295.52 400.699L256 376V296L295.52 271.297C306.178 264.641 320 272.301 320 284.867V387.133Z" />
            <path d="M256 0V128H384L256 0ZM192 256H96C78.326 256 64 270.328 64 288V384C64 401.672 78.326 416 96 416H192C209.674 416 224 401.672 224 384V288C224 270.328 209.674 256 192 256ZM295.52 271.297L256 296V376L295.52 400.699C306.178 407.359 320 399.699 320 387.133V284.867C320 272.301 306.178 264.641 295.52 271.297Z" />
        </Icon>
    </>
}

import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `martini-glass` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/martini-glass?s=duotone martini-glass}
 * @preview ![martini-glass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUwMi4wMzcgNTcuNjI1QzUyMy4yOTEgMzYuMzc1IDUwOC4yODcgMCA0NzguMjg0IDBIMzMuNzE3QzMuNzEzIDAgLTExLjI5MSAzNi4zNzUgOS45NjMgNTcuNjI1TDIyMy45OTYgMjcxLjYyNVY0NDhIMTc2QzE0OS40OTEgNDQ4IDEyOCA0NjkuNDkyIDEyOCA0OTZDMTI4IDUwNC44MzYgMTM1LjE2NCA1MTIgMTQ0IDUxMkgzNjhDMzc2LjgzNiA1MTIgMzg0IDUwNC44MzYgMzg0IDQ5NkMzODQgNDY5LjQ5MiAzNjIuNTEgNDQ4IDMzNiA0NDhIMjg4LjAwNFYyNzEuNjI1TDUwMi4wMzcgNTcuNjI1Wk0yNTYgMjEzLjEyMUwxMDYuODU2IDY0SDQwNS4xNDVMMjU2IDIxMy4xMjFaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTM0MS4yNyAxMjhMMjU2LjEzNSAyMTMuMTIxTDE3MSAxMjhIMzQxLjI3WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MartiniGlass(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M502.037 57.625C523.291 36.375 508.287 0 478.284 0H33.717C3.713 0 -11.291 36.375 9.963 57.625L223.996 271.625V448H176C149.491 448 128 469.492 128 496C128 504.836 135.164 512 144 512H368C376.836 512 384 504.836 384 496C384 469.492 362.51 448 336 448H288.004V271.625L502.037 57.625ZM256 213.121L106.856 64H405.145L256 213.121Z" />
            <path d="M341.27 128L256.135 213.121L171 128H341.27Z" />
        </Icon>
    </>
}
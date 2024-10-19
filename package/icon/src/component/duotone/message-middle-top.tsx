
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `message-middle-top` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-middle-top?s=duotone message-middle-top}
 * @preview ![message-middle-top](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiAxNjAuMDI5VjQ0OC4wMDZDNTEyIDQ4My4yNTIgNDgzLjI1IDUxMiA0NDggNTEySDY0QzI4Ljc1IDUxMiAwIDQ4My4yNTIgMCA0NDguMDA2VjE2MC4wMjlDMCAxMjQuNzgxIDI4Ljc1IDk2LjAzMyA2NCA5Ni4wMzNIMTc1Ljk3NUwyNDMuMTk5IDYuNEMyNDYuMzk5IDIuMTM0IDI1MS4yIDAgMjU2IDBTMjY1LjYwMSAyLjEzNCAyNjguODAxIDYuNEwzMzYuMDI1IDk2LjAzM0g0NDhDNDgzLjI1IDk2LjAzMyA1MTIgMTI0Ljc4MSA1MTIgMTYwLjAyOVogIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ij48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
export default function MessageMiddleTop(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M512 160.029V448.006C512 483.252 483.25 512 448 512H64C28.75 512 0 483.252 0 448.006V160.029C0 124.781 28.75 96.033 64 96.033H175.975L243.199 6.4C246.399 2.134 251.2 0 256 0S265.601 2.134 268.801 6.4L336.025 96.033H448C483.25 96.033 512 124.781 512 160.029Z " />
        </Icon>
    </>
}
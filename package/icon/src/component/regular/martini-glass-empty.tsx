
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `martini-glass-empty` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/martini-glass-empty?s=regular martini-glass-empty}
 * @preview ![martini-glass-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzkuOTYyIDI3OS42MjVMNTAxLjk2MiA1Ny42MjVDNTIzLjIxMiAzNi4zNzUgNTA4LjIxMiAwIDQ3OC4yMTIgMEgzMy43MTJDMy43MTIgMCAtMTEuMjg4IDM2LjM3NSA5Ljk2MiA1Ny42MjVMMjMxLjk2MiAyNzkuNjI1VjQ2M0wyMjAuNzYyIDQ2NEgxNTIuMDAxQzEzOC43NTEgNDY0IDEyOC4wMDEgNDc0Ljc1IDEyOC4wMDEgNDg4UzEzOC43NTEgNTEyIDE1Mi4wMDEgNTEySDM2MC4wMDFDMzczLjI1MSA1MTIgMzg0LjAwMSA1MDEuMjUgMzg0LjAwMSA0ODhTMzczLjI1MSA0NjQgMzYwLjAwMSA0NjRIMjgxLjkwN0MyODAuMjA2IDQ2My43NzkgMjc4LjcwNCA0NjMgMjc2Ljk0MiA0NjNIMjc5Ljk2MlYyNzkuNjI1Wk0yNTUuOTYyIDIzNS43NUw2OC4yMTIgNDhINDQzLjcxMkwyNTUuOTYyIDIzNS43NVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MartiniGlassEmpty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M279.962 279.625L501.962 57.625C523.212 36.375 508.212 0 478.212 0H33.712C3.712 0 -11.288 36.375 9.962 57.625L231.962 279.625V463L220.762 464H152.001C138.751 464 128.001 474.75 128.001 488S138.751 512 152.001 512H360.001C373.251 512 384.001 501.25 384.001 488S373.251 464 360.001 464H281.907C280.206 463.779 278.704 463 276.942 463H279.962V279.625ZM255.962 235.75L68.212 48H443.712L255.962 235.75Z" />
        </Icon>
    </>
}

import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `message-middle-top` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-middle-top?s=solid message-middle-top}
 * @preview ![message-middle-top](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTIgMTYwLjAyOVY0NDguMDA2QzUxMiA0ODMuMjUyIDQ4My4yNSA1MTIgNDQ4IDUxMkg2NEMyOC43NSA1MTIgMCA0ODMuMjUyIDAgNDQ4LjAwNlYxNjAuMDI5QzAgMTI0Ljc4MSAyOC43NSA5Ni4wMzMgNjQgOTYuMDMzSDE3NS45NzVMMjQzLjE5OSA2LjRDMjQ2LjM5OSAyLjEzNCAyNTEuMiAwIDI1NiAwUzI2NS42MDEgMi4xMzQgMjY4LjgwMSA2LjRMMzM2LjAyNSA5Ni4wMzNINDQ4QzQ4My4yNSA5Ni4wMzMgNTEyIDEyNC43ODEgNTEyIDE2MC4wMjlaICI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
export default function MessageMiddleTop(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M512 160.029V448.006C512 483.252 483.25 512 448 512H64C28.75 512 0 483.252 0 448.006V160.029C0 124.781 28.75 96.033 64 96.033H175.975L243.199 6.4C246.399 2.134 251.2 0 256 0S265.601 2.134 268.801 6.4L336.025 96.033H448C483.25 96.033 512 124.781 512 160.029Z " />
        </Icon>
    </>
}
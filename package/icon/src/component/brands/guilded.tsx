
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `guilded` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/guilded?s=brands guilded}
 * @preview ![guilded](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDMuNDI3LDY0SDQuNTcxYzAsMTAzLjI2LDIyLjE5MiwxODAuMDYsNDMuNDE4LDIyMi4zNThDMTEyLjA0Niw0MTQuMTM1LDIyNCw0NDgsMjI1LjI1Niw0NDhhMzEyLjgyNCwzMTIuODI0LDAsMCwwLDE0MC41NS0xMDMuNDc3YzI1LjkwNy0zMy45MjMsNTMuMS04Ny4xOSw2NS45MTYtMTQ1Ljc2MUgxNzEuODMzYzQuMTQsMzYuNDI5LDIyLjE3Nyw2Ny45NDYsNDUuMSw4Ni45NDRoODguNTg5Yy0xNy4wMTIsMjguMjEzLTQ4LjE4Niw1NC40LTgwLjQ1Niw2OS40ODItMzEuMjMyLTEzLjI1OS02OS4wOS00Ni41NDQtOTYuNTQ4LTk4LjM2Mi0yNi43MjYtNTMuODMzLTI3LjA5Mi0xMDUuODgzLTI3LjA5Mi0xMDUuODgzSDQzNy41NzNBNjI1LjkxLDYyNS45MSwwLDAsMCw0NDMuNDI3LDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Guilded(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M443.427,64H4.571c0,103.26,22.192,180.06,43.418,222.358C112.046,414.135,224,448,225.256,448a312.824,312.824,0,0,0,140.55-103.477c25.907-33.923,53.1-87.19,65.916-145.761H171.833c4.14,36.429,22.177,67.946,45.1,86.944h88.589c-17.012,28.213-48.186,54.4-80.456,69.482-31.232-13.259-69.09-46.544-96.548-98.362-26.726-53.833-27.092-105.883-27.092-105.883H437.573A625.91,625.91,0,0,0,443.427,64Z" />
        </Icon>
    </>
}
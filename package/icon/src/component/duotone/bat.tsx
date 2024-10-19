
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bat` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bat?s=duotone bat}
 * @preview ![bat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQxMS4yOTUgMTcyLjMzMkwzMjAuMTUgMjI0TDIyOSAxNzIuMzYxTDI1Ni4xNSA2NEwyOTguNzc1IDk2SDM0MS41MjVMMzg0LjE1IDY0TDQxMS4yOTUgMTcyLjMzMloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNjQwIDMyMEw1OTAuMzc1IDMwMy41QzU2MyAyOTQuMzc1IDUzMi44NzUgMzA0LjYyNSA1MTYuODc1IDMyOC42MjVMNDgwIDM4NEw0NjguMTI1IDM3Mi4xMjVDNDQwLjYyNSAzNDQuNjI1IDM5NS4xMjUgMzQ3Ljg3NSAzNzEuNzUgMzc5TDMyMCA0NDhMMjY4LjI1IDM3OUMyNDQuODc1IDM0Ny44NzUgMTk5LjM3NSAzNDQuNjI1IDE3MS44NzUgMzcyLjEyNUwxNjAgMzg0TDEyMy4xMjUgMzI4LjYyNUMxMDcuMTI1IDMwNC42MjUgNzcgMjk0LjM3NSA0OS42MjUgMzAzLjVMMCAzMjBMODEuNSAxMjkuNzVDODkuMjUgMTExLjg3NSAxMTAuNzUgMTA0Ljg3NSAxMjcuMzc1IDExNC44NzVMMzIwIDIyNEw1MTIuNSAxMTQuODc1QzUyOS4yNSAxMDQuODc1IDU1MC43NSAxMTEuODc1IDU1OC41IDEyOS43NUw2NDAgMzIwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Bat(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M411.295 172.332L320.15 224L229 172.361L256.15 64L298.775 96H341.525L384.15 64L411.295 172.332Z" />
            <path d="M640 320L590.375 303.5C563 294.375 532.875 304.625 516.875 328.625L480 384L468.125 372.125C440.625 344.625 395.125 347.875 371.75 379L320 448L268.25 379C244.875 347.875 199.375 344.625 171.875 372.125L160 384L123.125 328.625C107.125 304.625 77 294.375 49.625 303.5L0 320L81.5 129.75C89.25 111.875 110.75 104.875 127.375 114.875L320 224L512.5 114.875C529.25 104.875 550.75 111.875 558.5 129.75L640 320Z" />
        </Icon>
    </>
}
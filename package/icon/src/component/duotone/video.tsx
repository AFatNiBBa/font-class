
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `video` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/video?s=duotone video}
 * @preview ![video](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAxMTIuMDAxVjQwMC4wMDFDMzg0IDQyNi41MSAzNjIuNTEgNDQ4LjAwMSAzMzYgNDQ4LjAwMUg0OEMyMS40OSA0NDguMDAxIDAgNDI2LjUxIDAgNDAwLjAwMVYxMTIuMDAxQzAgODUuNDkxIDIxLjQ5IDY0LjAwMSA0OCA2NC4wMDFIMzM2QzM2Mi41MSA2NC4wMDEgMzg0IDg1LjQ5MSAzODQgMTEyLjAwMVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNTc2IDEyNy41MDFWMzg0LjQwN0M1NzYgNDA5LjkwNyA1NDYuODEyIDQyNC43OTcgNTI1LjU5NCA0MTAuMjA0TDQxNiAzMzQuNzA0VjE3Ny4yOTdMNTI1LjU5NCAxMDEuNzA0QzU0Ni45MDYgODcuMDk0IDU3NiAxMDIuMDk0IDU3NiAxMjcuNTAxWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Video(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path opacity={.4} d="M384 112.001V400.001C384 426.51 362.51 448.001 336 448.001H48C21.49 448.001 0 426.51 0 400.001V112.001C0 85.491 21.49 64.001 48 64.001H336C362.51 64.001 384 85.491 384 112.001Z" />
            <path d="M576 127.501V384.407C576 409.907 546.812 424.797 525.594 410.204L416 334.704V177.297L525.594 101.704C546.906 87.094 576 102.094 576 127.501Z" />
        </Icon>
    </>
}
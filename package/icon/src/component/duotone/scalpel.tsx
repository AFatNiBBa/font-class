
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `scalpel` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scalpel?s=duotone scalpel}
 * @preview ![scalpel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTAgNTEyQzg4Ljk2OSA1MTIuMTI1IDE3NC4xMDQgNDgyLjg3NSAyMzkuNTUzIDQzMC44NzVDMjM5LjgwOSA0MzAuNjI1IDIzOS45MzYgNDMwLjUgMjQwLjE5MSA0MzAuMzc1QzI3Mi4yNzcgNDA0LjYyNSAyODggMzY2LjM3NSAyODggMzI4VjMyMEgxNzkuOTg0TDAgNTEyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00ODIuNzM5IDExLjg2MUM0NTMuNTA2IC05LjAxNCA0MTIuNTMyIC0xLjEzOSAzODkuMjk3IDI2LjExM0wxNTUuOTIyIDI5My40OThDMTQ2LjkyOCAzMDQgMTU0LjQyNCAzMjAgMTY4LjA0MiAzMjBIMjk5Ljk1OEMzMDkuMzI3IDMyMCAzMTguMTk2IDMxNS44NzUgMzI0LjMxNyAzMDguNzVMNDk1LjIzMSAxMTQuMzY3QzUyMS41OSA4My40OSA1MTYuNDY3IDM1Ljg2MyA0ODIuNzM5IDExLjg2MVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Scalpel(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M0 512C88.969 512.125 174.104 482.875 239.553 430.875C239.809 430.625 239.936 430.5 240.191 430.375C272.277 404.625 288 366.375 288 328V320H179.984L0 512Z" />
            <path d="M482.739 11.861C453.506 -9.014 412.532 -1.139 389.297 26.113L155.922 293.498C146.928 304 154.424 320 168.042 320H299.958C309.327 320 318.196 315.875 324.317 308.75L495.231 114.367C521.59 83.49 516.467 35.863 482.739 11.861Z" />
        </Icon>
    </>
}
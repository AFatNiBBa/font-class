
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `poo-bolt` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/poo-bolt?s=light poo-bolt}
 * @preview ![poo-bolt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zOTIuODc1IDE5Ny43NUMzOTMgMTk1Ljg3NSAzOTMuMTI1IDE5NCAzOTMuMTI1IDE5MkMzOTMuMTI1IDE1NiAzNzAuMjUgMTI1LjI1IDMzOC4yNSAxMTIuNzVWMTEyQzMzOC4yNSA1MC4yNSAyODcgMCAyMjQgMEMyMTcuNSAwIDIxMS42MjUgMC43NSAyMDYuMjUgMS42MjVDMTk1LjEyNSAzLjI1IDE4NS43NSAxMC43NSAxODEuNSAyMVMxNzguNzUgNDMuMjUgMTg1LjI1IDUyLjI1QzE4OC4zNzUgNTYuMjUgMTkyIDYzLjEyNSAxOTIgNzEuODc1QzE5MiA5MSAxNzUuNjI1IDEwNi42MjUgMTU1LjM3NSAxMDYuNjI1SDE0MS43NUM5My43NSAxMDYuNjI1IDU0Ljc1IDE0NC44NzUgNTQuNzUgMTkxLjg3NUM1NC43NSAxOTMuNzUgNTQuODc1IDE5NS43NSA1NSAxOTcuNzVDMjIuMzc1IDIxNC4yNSAwIDI0Ny42MjUgMCAyODUuMjVDMCAzMzguMjUgNDIuNzUgMzgxLjY5MyA5NiAzODQuMDY4VjM4NEMxMDQuODM2IDM4NCAxMTIgMzc2LjgzOCAxMTIgMzY4QzExMiAzNTkuMTY0IDEwNC44MzYgMzUyIDk2IDM1MkM2MC40MjQgMzQ5LjczOCAzMiAzMjAuNDU5IDMyIDI4NS4yNUMzMiAyNTAuNSA1OS44NzUgMjIyIDk1IDIxOS4yNUM5MCAyMTEuMjUgODYuNzUgMjAyIDg2Ljc1IDE5MkM4Ni43NSAxNjIuNSAxMTEuMzc1IDEzOC43NSAxNDEuNzUgMTM4Ljc1SDE1NS4zNzVDMTkzLjI1IDEzOC43NSAyMjQgMTA4Ljg3NSAyMjQgNzJDMjI0IDU3LjUgMjE5LjEyNSA0NC4yNSAyMTEuMTI1IDMzLjI1QzIxNS4yNSAzMi43NSAyMTkuNjI1IDMyIDIyNCAzMkMyNjkuMzc1IDMyIDMwNi4yNSA2Ny43NSAzMDYuMjUgMTEyQzMwNi4yNSAxMjEuMzc1IDMwNC4yNSAxMzAuMjUgMzAxLjI1IDEzOC43NUgzMDYuMjVDMzM2LjYyNSAxMzguNzUgMzYxLjI1IDE2Mi42MjUgMzYxLjI1IDE5MkMzNjEuMjUgMjAyLjEyNSAzNTggMjExLjI1IDM1MyAyMTkuMjVDMzg4LjEyNSAyMjIgNDE2IDI1MC41IDQxNiAyODUuMjVDNDE2IDMxOC43NSAzODUuMTI1IDM0Ny4yNSAzNTIgMzUyQzM0My4xNjQgMzUyIDMzNiAzNTkuMTYyIDMzNiAzNjhDMzM2IDM3Ni44MzYgMzQzLjE2NCAzODQgMzUyIDM4NEM0MDUuMzEyIDM4MS41NzIgNDQ4IDMzOC4xOTUgNDQ4IDI4NS4yNUM0NDggMjQ3LjYyNSA0MjUuNjI1IDIxNC4yNSAzOTIuODc1IDE5Ny43NVpNMjg4IDM1MkgxOTUuMjVMMjg0LjAzMSAyNTAuNTMxQzI4OS44NzUgMjQzLjg3NSAyODkuMTg4IDIzMy43ODEgMjgyLjUzMSAyMjcuOTY5QzI3NS45MzggMjIyLjE4OCAyNjUuODEzIDIyMi43ODEgMjU5Ljk2OSAyMjkuNDY5TDE0Ny45NjkgMzU3LjQ2OUMxNDMuODEzIDM2Mi4xODggMTQyLjg0NCAzNjguOTA2IDE0NS40MzggMzc0LjYyNVMxNTMuNzE5IDM4NCAxNjAgMzg0SDI1Mi43NUwxNjMuOTY5IDQ4NS40NjlDMTU4LjEyNSA0OTIuMTI1IDE1OC44MTIgNTAyLjIxOSAxNjUuNDY5IDUwOC4wMzFDMTY4LjUgNTEwLjY4OCAxNzIuMjUgNTEyIDE3NiA1MTJDMTgwLjQzOCA1MTIgMTg0Ljg3NSA1MTAuMTU2IDE4OC4wMzEgNTA2LjUzMUwzMDAuMDMxIDM3OC41MzFDMzA0LjE4OCAzNzMuODEzIDMwNS4xNTYgMzY3LjA5NCAzMDIuNTYzIDM2MS4zNzVTMjk0LjI4MSAzNTIgMjg4IDM1MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PooBolt(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M392.875 197.75C393 195.875 393.125 194 393.125 192C393.125 156 370.25 125.25 338.25 112.75V112C338.25 50.25 287 0 224 0C217.5 0 211.625 0.75 206.25 1.625C195.125 3.25 185.75 10.75 181.5 21S178.75 43.25 185.25 52.25C188.375 56.25 192 63.125 192 71.875C192 91 175.625 106.625 155.375 106.625H141.75C93.75 106.625 54.75 144.875 54.75 191.875C54.75 193.75 54.875 195.75 55 197.75C22.375 214.25 0 247.625 0 285.25C0 338.25 42.75 381.693 96 384.068V384C104.836 384 112 376.838 112 368C112 359.164 104.836 352 96 352C60.424 349.738 32 320.459 32 285.25C32 250.5 59.875 222 95 219.25C90 211.25 86.75 202 86.75 192C86.75 162.5 111.375 138.75 141.75 138.75H155.375C193.25 138.75 224 108.875 224 72C224 57.5 219.125 44.25 211.125 33.25C215.25 32.75 219.625 32 224 32C269.375 32 306.25 67.75 306.25 112C306.25 121.375 304.25 130.25 301.25 138.75H306.25C336.625 138.75 361.25 162.625 361.25 192C361.25 202.125 358 211.25 353 219.25C388.125 222 416 250.5 416 285.25C416 318.75 385.125 347.25 352 352C343.164 352 336 359.162 336 368C336 376.836 343.164 384 352 384C405.312 381.572 448 338.195 448 285.25C448 247.625 425.625 214.25 392.875 197.75ZM288 352H195.25L284.031 250.531C289.875 243.875 289.188 233.781 282.531 227.969C275.938 222.188 265.813 222.781 259.969 229.469L147.969 357.469C143.813 362.188 142.844 368.906 145.438 374.625S153.719 384 160 384H252.75L163.969 485.469C158.125 492.125 158.812 502.219 165.469 508.031C168.5 510.688 172.25 512 176 512C180.438 512 184.875 510.156 188.031 506.531L300.031 378.531C304.188 373.813 305.156 367.094 302.563 361.375S294.281 352 288 352Z" />
        </Icon>
    </>
}

import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `tencent-weibo` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tencent-weibo?s=brands tencent-weibo}
 * @preview ![tencent-weibo](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik03Mi4zIDQ5NS44YzEuNCAxOS45LTI3LjYgMjIuMi0yOS43IDIuOUMzMSAzNjguOCA3My43IDI1OS4yIDE0NCAxODUuNWMtMTUuNi0zNCA5LjItNzcuMSA1MC42LTc3LjEgMzAuMyAwIDU1LjEgMjQuNiA1NS4xIDU1LjEgMCA0NC00OS41IDcwLjgtODYuOSA0NS4xLTY1LjcgNzEuMy0xMDEuNCAxNjkuOC05MC41IDI4Ny4yek0xOTIgLjFDNjYuMS4xLTEyLjMgMTM0LjMgNDMuNyAyNDIuNCA1Mi40IDI1OS44IDc5IDI0Ni45IDcwIDIyOSAyMy43IDEzNi40IDkxIDI5LjggMTkyIDI5LjhjNzUuNCAwIDEzNi45IDYxLjQgMTM2LjkgMTM2LjkgMCA5MC44LTg2LjkgMTUzLjktMTY3LjcgMTMzLjEtMTkuMS00LjEtMjUuNiAyNC40LTYuNiAyOS4xIDExMC43IDIzLjIgMjA0LTYwIDIwNC0xNjIuM0MzNTguNiA3NC43IDI4NCAuMSAxOTIgLjF6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function TencentWeibo(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M72.3 495.8c1.4 19.9-27.6 22.2-29.7 2.9C31 368.8 73.7 259.2 144 185.5c-15.6-34 9.2-77.1 50.6-77.1 30.3 0 55.1 24.6 55.1 55.1 0 44-49.5 70.8-86.9 45.1-65.7 71.3-101.4 169.8-90.5 287.2zM192 .1C66.1.1-12.3 134.3 43.7 242.4 52.4 259.8 79 246.9 70 229 23.7 136.4 91 29.8 192 29.8c75.4 0 136.9 61.4 136.9 136.9 0 90.8-86.9 153.9-167.7 133.1-19.1-4.1-25.6 24.4-6.6 29.1 110.7 23.2 204-60 204-162.3C358.6 74.7 284 .1 192 .1z" />
        </Icon>
    </>
}
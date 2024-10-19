
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `ice-cream` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ice-cream?s=light ice-cream}
 * @preview ![ice-cream](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDcuOTk5IDIwOC4wNjZDNDQ3Ljk5OSAxNjkuMjc1IDQxOS45MTQgMTM1LjY0MiAzODAuOTUxIDEyOS4yNUMzNjYuNjkzIDU1LjYyNSAzMDEuOTEyIDAgMjIzLjk5OSAwUzgxLjMwNiA1NS42MjUgNjcuMDQ4IDEyOS4yNUMyOC4wODUgMTM1LjY0MiAwIDE2OS4yNzUgMCAyMDguMDY2QzAgMjY0LjQwMSA0OC45NDEgMjg4IDc5LjkyOSAyODhIODUuOTMzSDEyMS40NTFIMzI2LjU0OEgzNjIuMDY2SDM2OC4wN0MzOTguNTkgMjg4IDQ0Ny45OTkgMjY0LjQ2MSA0NDcuOTk5IDIwOC4wNjZaTTM2OC4zMTQgMjU2LjAwMUMzNjguMjMyIDI1Ni4wMDEgMzY4LjE1MSAyNTYgMzY4LjA3IDI1Nkg3OS45MjlDNzkuODQ4IDI1NiA3OS43NjcgMjU2LjAwMSA3OS42ODUgMjU2LjAwMUM2MS4zOTcgMjU2LjAwMSAzMS44NzYgMjQxLjkgMzEuODc2IDIwOC4xMDdDMzEuODc2IDE4NC44MzkgNDguNzEzIDE2NC42NjUgNzIuMTc1IDE2MC44NzVMOTQuMTg3IDE1Ny4yNUw5OC40MzkgMTM1LjM3NUMxMTAuMTk1IDc1LjM3NSAxNjIuODQ1IDMyIDIyMy45OTkgMzJTMzM3LjgwNCA3NS4zNzUgMzQ5LjU2IDEzNS4zNzVMMzUzLjgxMiAxNTcuMjVMMzc1LjgyNCAxNjAuODc1QzM5OS4yODYgMTY0LjY2NSA0MTYuMTIzIDE4NC44MzkgNDE2LjEyMyAyMDguMTA3QzQxNi4xMjMgMjQxLjg2NCAzODYuODgzIDI1Ni4wMDEgMzY4LjMxNCAyNTYuMDAxWk0zMzUuOTk2IDMzNi4wMDhDMzM1Ljk5NiAzMzguMzg0IDMzNS40NjUgMzQwLjc5OSAzMzQuMzQzIDM0My4wNzhMMjY0Ljk2OCA0ODMuODEyQzI1Ni4yODEgNTAxLjQ1MyAyNDAuOTY4IDUxMiAyMjMuOTk5IDUxMlMxOTEuNzE4IDUwMS40NTMgMTgzLjAzMSA0ODMuODEyTDExMy42NTYgMzQzLjA3OEMxMTIuNTM0IDM0MC43OTkgMTEyLjAwMiAzMzguMzg0IDExMi4wMDIgMzM2LjAwOEMxMTIuMDAyIDMyNi45MjggMTE5LjM4NyAzMjAuMDI2IDEyNy45NDcgMzIwLjAyNkMxMzMuODQyIDMyMC4wMjYgMTM5LjU1NiAzMjMuMjgxIDE0Mi4zNDMgMzI4LjkyMkwyMTEuNzE4IDQ2OS42NTZDMjE0LjkwNiA0NzYuMTQxIDIxOS40NTMgNDc5LjM4MyAyMjMuOTk5IDQ3OS4zODNTMjMzLjA5MyA0NzYuMTQxIDIzNi4yODEgNDY5LjY1NkwzMDUuNjU2IDMyOC45MjJDMzA4LjQ0MyAzMjMuMjgxIDMxNC4xODkgMzIwLjAyNiAzMjAuMDc5IDMyMC4wMjZDMzI4LjQ0OSAzMjAuMDI2IDMzNS45OTYgMzI2Ljc4MyAzMzUuOTk2IDMzNi4wMDhaICI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
export default function IceCream(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M447.999 208.066C447.999 169.275 419.914 135.642 380.951 129.25C366.693 55.625 301.912 0 223.999 0S81.306 55.625 67.048 129.25C28.085 135.642 0 169.275 0 208.066C0 264.401 48.941 288 79.929 288H85.933H121.451H326.548H362.066H368.07C398.59 288 447.999 264.461 447.999 208.066ZM368.314 256.001C368.232 256.001 368.151 256 368.07 256H79.929C79.848 256 79.767 256.001 79.685 256.001C61.397 256.001 31.876 241.9 31.876 208.107C31.876 184.839 48.713 164.665 72.175 160.875L94.187 157.25L98.439 135.375C110.195 75.375 162.845 32 223.999 32S337.804 75.375 349.56 135.375L353.812 157.25L375.824 160.875C399.286 164.665 416.123 184.839 416.123 208.107C416.123 241.864 386.883 256.001 368.314 256.001ZM335.996 336.008C335.996 338.384 335.465 340.799 334.343 343.078L264.968 483.812C256.281 501.453 240.968 512 223.999 512S191.718 501.453 183.031 483.812L113.656 343.078C112.534 340.799 112.002 338.384 112.002 336.008C112.002 326.928 119.387 320.026 127.947 320.026C133.842 320.026 139.556 323.281 142.343 328.922L211.718 469.656C214.906 476.141 219.453 479.383 223.999 479.383S233.093 476.141 236.281 469.656L305.656 328.922C308.443 323.281 314.189 320.026 320.079 320.026C328.449 320.026 335.996 326.783 335.996 336.008Z " />
        </Icon>
    </>
}
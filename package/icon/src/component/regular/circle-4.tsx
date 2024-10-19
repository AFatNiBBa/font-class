
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-4` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-4?s=regular circle-4}
 * @preview ![circle-4](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0NDhDMTUwLjEzMSA0NDggNjQgMzYxLjg2OSA2NCAyNTZTMTUwLjEzMSA2NCAyNTYgNjRTNDQ4IDE1MC4xMzEgNDQ4IDI1NlMzNjEuODY5IDQ0OCAyNTYgNDQ4Wk0zMjggMjcySDMyMFYyMjEuMzQ0QzMyMCAyMDguMDk0IDMwOS4yNSAxOTcuMzQ0IDI5NiAxOTcuMzQ0UzI3MiAyMDguMDk0IDI3MiAyMjEuMzQ0VjI3MkgyMDYuNDY5TDI1NC4wNDcgMTYxLjVDMjU5LjI4MSAxNDkuMzEyIDI1My42NzIgMTM1LjE4OCAyNDEuNDg0IDEyOS45NjlDMjI5LjI2NiAxMjQuNjU2IDIxNS4xODggMTMwLjM0NCAyMDkuOTUzIDE0Mi41TDE0Ny45NTMgMjg2LjVDMTQ0Ljc2NiAyOTMuOTM4IDE0NS41MTYgMzAyLjQzOCAxNDkuOTUzIDMwOS4xODhTMTYxLjkyMiAzMjAgMTcwIDMyMEgyNzJWMzYwQzI3MiAzNzMuMjUgMjgyLjc1IDM4NCAyOTYgMzg0UzMyMCAzNzMuMjUgMzIwIDM2MFYzMjBIMzI4QzM0MS4yNSAzMjAgMzUyIDMwOS4yNSAzNTIgMjk2UzM0MS4yNSAyNzIgMzI4IDI3MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Circle_4(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448ZM328 272H320V221.344C320 208.094 309.25 197.344 296 197.344S272 208.094 272 221.344V272H206.469L254.047 161.5C259.281 149.312 253.672 135.188 241.484 129.969C229.266 124.656 215.188 130.344 209.953 142.5L147.953 286.5C144.766 293.938 145.516 302.438 149.953 309.188S161.922 320 170 320H272V360C272 373.25 282.75 384 296 384S320 373.25 320 360V320H328C341.25 320 352 309.25 352 296S341.25 272 328 272Z" />
        </Icon>
    </>
}
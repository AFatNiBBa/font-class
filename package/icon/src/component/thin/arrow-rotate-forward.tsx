
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-rotate-forward` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-rotate-forward?s=thin arrow-rotate-forward}
 * @preview ![arrow-rotate-forward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNCAyNTZDMjQgMzgzLjkzOCAxMjguMDc4IDQ4OCAyNTYgNDg4QzMwMy43MTkgNDg4IDM0OS41NzggNDczLjYyNSAzODguNTk0IDQ0Ni40MDZDMzkyLjIxOSA0NDMuODc1IDM5My4xMDkgNDM4LjkwNiAzOTAuNTc4IDQzNS4yODFDMzg4LjAzMSA0MzEuNTk0IDM4MyA0MzAuNzgxIDM3OS40MzggNDMzLjI4MUMzNDMuMTI1IDQ1OC42MjUgMzAwLjQzOCA0NzIgMjU2IDQ3MkMxMzYuODkxIDQ3MiA0MCAzNzUuMDk0IDQwIDI1NlMxMzYuODkxIDQwIDI1NiA0MEMzNDguNTUxIDQwIDQzMS40MjggMTAwLjU4NiA0NjAuNTQ1IDE4Ny44NjdMMzUwLjI1IDE2NS44MTJDMzQ2LjE1NiAxNjUgMzQxLjcxOSAxNjcuNzUgMzQwLjg0NCAxNzIuMDk0QzMzOS45ODQgMTc2LjQwNiAzNDIuNzgxIDE4MC42MjUgMzQ3LjEyNSAxODEuNUw0NzIuNjQxIDIwNi41OTRDNDczLjE1NiAyMDYuNjg4IDQ3My42ODggMjA2Ljc1IDQ3NC4yMTkgMjA2Ljc1QzQ3Ny45NTMgMjA2Ljc1IDQ4MS4yODEgMjA0LjEyNSA0ODIuMDQ3IDIwMC4zMTJMNTA3LjE1NiA3NC44MTJDNTA4LjAzMSA3MC41IDUwNS4yMTkgNjYuMjgxIDUwMC44NzUgNjUuNDA2QzQ5Ni43MTkgNjQuNjI1IDQ5Mi4zNDQgNjcuMzQ0IDQ5MS40NjkgNzEuNjg4TDQ3MS40MjIgMTcxLjg1OUM0MzcuMDA0IDg0LjE0MSAzNTEuNDMyIDI0IDI1NiAyNEMxMjguMDc4IDI0IDI0IDEyOC4wNjIgMjQgMjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowRotateForward(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M24 256C24 383.938 128.078 488 256 488C303.719 488 349.578 473.625 388.594 446.406C392.219 443.875 393.109 438.906 390.578 435.281C388.031 431.594 383 430.781 379.438 433.281C343.125 458.625 300.438 472 256 472C136.891 472 40 375.094 40 256S136.891 40 256 40C348.551 40 431.428 100.586 460.545 187.867L350.25 165.812C346.156 165 341.719 167.75 340.844 172.094C339.984 176.406 342.781 180.625 347.125 181.5L472.641 206.594C473.156 206.688 473.688 206.75 474.219 206.75C477.953 206.75 481.281 204.125 482.047 200.312L507.156 74.812C508.031 70.5 505.219 66.281 500.875 65.406C496.719 64.625 492.344 67.344 491.469 71.688L471.422 171.859C437.004 84.141 351.432 24 256 24C128.078 24 24 128.062 24 256Z" />
        </Icon>
    </>
}
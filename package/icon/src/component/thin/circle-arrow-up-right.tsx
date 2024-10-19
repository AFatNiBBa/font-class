
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-up-right` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up-right?s=thin circle-arrow-up-right}
 * @preview ![circle-arrow-up-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiAzMkMzNzkuNTE0IDMyIDQ4MCAxMzIuNDg2IDQ4MCAyNTZTMzc5LjUxNCA0ODAgMjU2IDQ4MFMzMiAzNzkuNTE0IDMyIDI1NlMxMzIuNDg2IDMyIDI1NiAzMlpNMTgzLjk5OSAxNjBDMTc5LjU4IDE2MCAxNzYgMTYzLjU4IDE3NiAxNjcuOTk5QzE3NiAxNzIuNDE4IDE3OS41OCAxNzUuOTk4IDE4My45OTkgMTc1Ljk5OEgzMjQuNjg4TDE2Mi4zNDEgMzM4LjM0NUMxNTkuMjI1IDM0MS40NjEgMTU5LjIxNCAzNDYuNTMyIDE2Mi4zNDEgMzQ5LjY1OVMxNzAuNTM5IDM1Mi43NzUgMTczLjY1NSAzNDkuNjU5TDMzNi4wMDIgMTg3LjMxMlYzMjguMDAxQzMzNi4wMDIgMzMyLjQyIDMzOS41ODIgMzM2IDM0NC4wMDEgMzM2QzM0OC40MjMgMzM2IDM1MiAzMzIuNDIzIDM1MiAzMjguMDAxVjE2Ny45OTlDMzUyIDE2My41OCAzNDguNDIgMTYwIDM0NC4wMDEgMTYwSDE4My45OTlaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleArrowUpRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 32C379.514 32 480 132.486 480 256S379.514 480 256 480S32 379.514 32 256S132.486 32 256 32ZM183.999 160C179.58 160 176 163.58 176 167.999C176 172.418 179.58 175.998 183.999 175.998H324.688L162.341 338.345C159.225 341.461 159.214 346.532 162.341 349.659S170.539 352.775 173.655 349.659L336.002 187.312V328.001C336.002 332.42 339.582 336 344.001 336C348.423 336 352 332.423 352 328.001V167.999C352 163.58 348.42 160 344.001 160H183.999Z" />
        </Icon>
    </>
}
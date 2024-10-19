
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `light-ceiling` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/light-ceiling?s=light light-ceiling}
 * @preview ![light-ceiling](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzEuOTI5IDE2MC43NVYxNkMyNzEuOTI5IDcuMTY0IDI2NC43NjMgMCAyNTUuOTIzIDBTMjM5LjkxOCA3LjE2NCAyMzkuOTE4IDE2VjE2MC43NUMxMTcuMzk0IDE2OC4yMjUgMTcuODU1IDI2MC4wMTggMC4zNjMgMzc4LjQ1MUMtMi41NDcgMzk4LjE1NiAxMi40MDIgNDE2IDMyLjMzIDQxNkg0NzkuNTE3QzQ5OS4wMjUgNDE2IDUxNC41MzEgMzk4Ljg3NSA1MTEuNjU2IDM3OS42MjVDNDk0LjY0OCAyNjAuNjI1IDM5NC44NTcgMTY4LjI1IDI3MS45MjkgMTYwLjc1Wk0zMS44MyAzODQuMTI1QzQ3LjU4NiAyNzQuNjI1IDE0My44NzcgMTkyIDI1NS45MjMgMTkyUzQ2NC4yNjEgMjc0LjYyNSA0NzkuNTE3IDM4NEwzMS44MyAzODQuMTI1Wk0zMjQuMTA5IDQzMi41MzFDMzE1LjY0IDQzMC4yMTkgMzA2Ljc5NyA0MzUuMzQ0IDMwNC41MzEgNDQzLjkwNkMyOTguODkgNDY1LjE1NiAyNzguOTM3IDQ4MCAyNTYgNDgwUzIxMy4xMDkgNDY1LjE1NiAyMDcuNDY4IDQ0My45MDZDMjA1LjE4NyA0MzUuMzQ0IDE5Ni40MjIgNDMwLjIxOSAxODcuODkgNDMyLjUzMUMxNzkuMzU5IDQzNC44MTIgMTc0LjI2NSA0NDMuNTYyIDE3Ni41MzEgNDUyLjA5NEMxODUuOTA2IDQ4Ny4zNzUgMjE4LjU3OCA1MTIgMjU2IDUxMlMzMjYuMDkzIDQ4Ny4zNzUgMzM1LjQ2OCA0NTIuMDk0QzMzNy43MzQgNDQzLjU2MiAzMzIuNjQgNDM0LjgxMiAzMjQuMTA5IDQzMi41MzFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function LightCeiling(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M271.929 160.75V16C271.929 7.164 264.763 0 255.923 0S239.918 7.164 239.918 16V160.75C117.394 168.225 17.855 260.018 0.363 378.451C-2.547 398.156 12.402 416 32.33 416H479.517C499.025 416 514.531 398.875 511.656 379.625C494.648 260.625 394.857 168.25 271.929 160.75ZM31.83 384.125C47.586 274.625 143.877 192 255.923 192S464.261 274.625 479.517 384L31.83 384.125ZM324.109 432.531C315.64 430.219 306.797 435.344 304.531 443.906C298.89 465.156 278.937 480 256 480S213.109 465.156 207.468 443.906C205.187 435.344 196.422 430.219 187.89 432.531C179.359 434.812 174.265 443.562 176.531 452.094C185.906 487.375 218.578 512 256 512S326.093 487.375 335.468 452.094C337.734 443.562 332.64 434.812 324.109 432.531Z" />
        </Icon>
    </>
}
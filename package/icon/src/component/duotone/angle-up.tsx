
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `angle-up` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/angle-up?s=duotone angle-up}
 * @preview ![angle-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM3My4wMyAzMzkuNDlDMzY1LjE3MSAzNDcuODAyIDM1NC41OTMgMzUxLjk4OSAzNDMuOTk5IDM1MS45ODlDMzM0LjEyNCAzNTEuOTg5IDMyNC4yMTggMzQ4LjM2NCAzMTYuNDg0IDM0MS4wMjFMMTkyIDIyMy4wODlMNjcuNTE2IDM0MS4wMjFDNTEuNDY5IDM1Ni4yMzkgMjYuMTU3IDM1NS41NTEgMTAuOTcgMzM5LjQ5Qy00LjIzMyAzMjMuNDU5IC0zLjU0NiAyOTguMTQ4IDEyLjQ4NSAyODIuOTYxTDE2NC40ODQgMTM4Ljk2OEMxNzkuOTIyIDEyNC4zNDQgMjA0LjA3OCAxMjQuMzQ0IDIxOS41MTYgMTM4Ljk2OEwzNzEuNTE1IDI4Mi45NjFDMzg3LjU0NiAyOTguMTQ4IDM4OC4yMzMgMzIzLjQ1OSAzNzMuMDMgMzM5LjQ5WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function AngleUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M373.03 339.49C365.171 347.802 354.593 351.989 343.999 351.989C334.124 351.989 324.218 348.364 316.484 341.021L192 223.089L67.516 341.021C51.469 356.239 26.157 355.551 10.97 339.49C-4.233 323.459 -3.546 298.148 12.485 282.961L164.484 138.968C179.922 124.344 204.078 124.344 219.516 138.968L371.515 282.961C387.546 298.148 388.233 323.459 373.03 339.49Z" />
        </Icon>
    </>
}
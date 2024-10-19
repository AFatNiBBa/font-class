
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `folder-minus` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folder-minus?s=duotone folder-minus}
 * @preview ![folder-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ2NCA5NkgyNzJMMjA4IDMySDQ4QzIxLjUgMzIgMCA1My41IDAgODBWNDMyQzAgNDU4LjUgMjEuNSA0ODAgNDggNDgwSDQ2NEM0OTAuNSA0ODAgNTEyIDQ1OC41IDUxMiA0MzJWMTQ0QzUxMiAxMTcuNSA0OTAuNSA5NiA0NjQgOTZaTTMzNiAzMTEuOTk4SDE3NkMxNjIuNzMgMzExLjk5OCAxNTIgMzAxLjI1NiAxNTIgMjg4QzE1MiAyNzQuNzQyIDE2Mi43MzggMjY0LjAwMiAxNzYgMjY0LjAwMkgzMzZDMzQ5LjI2MiAyNjQuMDAyIDM2MCAyNzQuNzQyIDM2MCAyODhTMzQ5LjI2MiAzMTEuOTk4IDMzNiAzMTEuOTk4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zNjAgMjg4QzM2MCAzMDEuMjU4IDM0OS4yNjIgMzExLjk5OCAzMzYuMDAyIDMxMS45OThIMTc1Ljk5OEMxNjIuNzMgMzExLjk5OCAxNTIgMzAxLjI1NiAxNTIgMjg4QzE1MiAyNzQuNzQyIDE2Mi43MzggMjY0LjAwMiAxNzUuOTk4IDI2NC4wMDJIMzM2LjAwMkMzNDkuMjYyIDI2NC4wMDIgMzYwIDI3NC43NDIgMzYwIDI4OFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function FolderMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M464 96H272L208 32H48C21.5 32 0 53.5 0 80V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V144C512 117.5 490.5 96 464 96ZM336 311.998H176C162.73 311.998 152 301.256 152 288C152 274.742 162.738 264.002 176 264.002H336C349.262 264.002 360 274.742 360 288S349.262 311.998 336 311.998Z" />
            <path d="M360 288C360 301.258 349.262 311.998 336.002 311.998H175.998C162.73 311.998 152 301.256 152 288C152 274.742 162.738 264.002 175.998 264.002H336.002C349.262 264.002 360 274.742 360 288Z" />
        </Icon>
    </>
}
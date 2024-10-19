
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `option` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/option?s=light option}
 * @preview ![option](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgNDQ4SDQxNkwxMTcuMDk0IDM4LjU5NEMxMTQuMDk0IDM0LjQ1MyAxMDkuMjgxIDMyIDEwNC4xNTYgMzJIMTZDNy4xNTYgMzIgMCAzOS4xNTYgMCA0OFM3LjE1NiA2NCAxNiA2NEg5NkwzOTQuOTA2IDQ3My40MDZDMzk3LjkwNiA0NzcuNTQ3IDQwMi43MTkgNDgwIDQwNy44NDQgNDgwSDQ5NkM1MDQuODQ0IDQ4MCA1MTIgNDcyLjg0NCA1MTIgNDY0UzUwNC44NDQgNDQ4IDQ5NiA0NDhaTTMzNiA2NEg0OTZDNTA0LjgzNiA2NCA1MTIgNTYuODM2IDUxMiA0OEM1MTIgMzkuMTYyIDUwNC44MzYgMzIgNDk2IDMySDMzNkMzMjcuMTY0IDMyIDMyMCAzOS4xNjIgMzIwIDQ4QzMyMCA1Ni44MzYgMzI3LjE2NCA2NCAzMzYgNjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Option(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496 448H416L117.094 38.594C114.094 34.453 109.281 32 104.156 32H16C7.156 32 0 39.156 0 48S7.156 64 16 64H96L394.906 473.406C397.906 477.547 402.719 480 407.844 480H496C504.844 480 512 472.844 512 464S504.844 448 496 448ZM336 64H496C504.836 64 512 56.836 512 48C512 39.162 504.836 32 496 32H336C327.164 32 320 39.162 320 48C320 56.836 327.164 64 336 64Z" />
        </Icon>
    </>
}
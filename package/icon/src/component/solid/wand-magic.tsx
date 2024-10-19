
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `wand-magic` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wand-magic?s=solid wand-magic}
 * @preview ![wand-magic](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTcuOTQ0IDQ4TDQ2NC4wMiAxNC4wNjFDNDQ1LjI3NiAtNC42ODYgNDE0Ljg4MSAtNC42ODggMzk2LjEzNyAxNC4wNTlMMTQuMDYxIDM5Ni4xMDlDLTQuNjg1IDQxNC44NTQgLTQuNjg3IDQ0NS4yNDQgMTQuMDU3IDQ2My45OUw0Ny45OSA0OTcuOTM4QzY2LjczMyA1MTYuNjg2IDk3LjEyNyA1MTYuNjg4IDExNS44NzMgNDk3Ljk0MUw0OTcuOTQyIDExNS44NzlDNTE2LjY4NiA5Ny4xMzUgNTE2LjY4NiA2Ni43NDYgNDk3Ljk0NCA0OFpNMzQ3LjMxMSAxODcuMzExTDMyNC42ODQgMTY0LjY4NEw0MzAuMDQ1IDU5LjMyTDQ1Mi43MDMgODEuOTQ3TDM0Ny4zMTEgMTg3LjMxMVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function WandMagic(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M497.944 48L464.02 14.061C445.276 -4.686 414.881 -4.688 396.137 14.059L14.061 396.109C-4.685 414.854 -4.687 445.244 14.057 463.99L47.99 497.938C66.733 516.686 97.127 516.688 115.873 497.941L497.942 115.879C516.686 97.135 516.686 66.746 497.944 48ZM347.311 187.311L324.684 164.684L430.045 59.32L452.703 81.947L347.311 187.311Z" />
        </Icon>
    </>
}
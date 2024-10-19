
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `check-double` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/check-double?s=regular check-double}
 * @preview ![check-double](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAuOTY5IDE1OC44ODhDNDcxLjU5NCAxNDkuNTEzIDQ1Ni40MDYgMTQ5LjUxMyA0NDcuMDMxIDE1OC44ODhMMTkyIDQxMy45MTlMNjQuOTY5IDI4Ni44ODhDNTUuNTk0IDI3Ny41MTMgNDAuNDA2IDI3Ny41MTMgMzEuMDMxIDI4Ni44ODhTMjEuNjU2IDMxMS40NSAzMS4wMzEgMzIwLjgyNUwxNzUuMDMxIDQ2NC44MjVDMTc5LjcxOSA0NjkuNTEzIDE4NS44NDQgNDcxLjg1NiAxOTIgNDcxLjg1NlMyMDQuMjgxIDQ2OS41MTMgMjA4Ljk2OSA0NjQuODI1TDQ4MC45NjkgMTkyLjgyNUM0OTAuMzQ0IDE4My40NSA0OTAuMzQ0IDE2OC4yNjMgNDgwLjk2OSAxNTguODg4Wk0xNzUuMDMxIDI0MC44MjVDMTc5LjcxOSAyNDUuNTEzIDE4NS44NDQgMjQ3Ljg1NiAxOTIgMjQ3Ljg1NlMyMDQuMjgxIDI0NS41MTMgMjA4Ljk2OSAyNDAuODI1TDM4NC45NjkgNjQuODI1QzM5NC4zNDQgNTUuNDUgMzk0LjM0NCA0MC4yNjMgMzg0Ljk2OSAzMC44ODhTMzYwLjQwNiAyMS41MTMgMzUxLjAzMSAzMC44ODhMMTkyIDE4OS45MTlMMTEyLjk2OSAxMTAuODg4QzEwMy41OTQgMTAxLjUxMyA4OC40MDYgMTAxLjUxMyA3OS4wMzEgMTEwLjg4OFM2OS42NTYgMTM1LjQ1IDc5LjAzMSAxNDQuODI1TDE3NS4wMzEgMjQwLjgyNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CheckDouble(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M480.969 158.888C471.594 149.513 456.406 149.513 447.031 158.888L192 413.919L64.969 286.888C55.594 277.513 40.406 277.513 31.031 286.888S21.656 311.45 31.031 320.825L175.031 464.825C179.719 469.513 185.844 471.856 192 471.856S204.281 469.513 208.969 464.825L480.969 192.825C490.344 183.45 490.344 168.263 480.969 158.888ZM175.031 240.825C179.719 245.513 185.844 247.856 192 247.856S204.281 245.513 208.969 240.825L384.969 64.825C394.344 55.45 394.344 40.263 384.969 30.888S360.406 21.513 351.031 30.888L192 189.919L112.969 110.888C103.594 101.513 88.406 101.513 79.031 110.888S69.656 135.45 79.031 144.825L175.031 240.825Z" />
        </Icon>
    </>
}
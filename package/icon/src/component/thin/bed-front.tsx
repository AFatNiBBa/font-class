
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bed-front` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bed-front?s=thin bed-front}
 * @preview ![bed-front](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAgMjM2LjE4OFY4OEM0ODAgNTcuMTI1IDQ1NC44NzUgMzIgNDI0IDMySDg4QzU3LjEyNSAzMiAzMiA1Ny4xMjUgMzIgODhWMjM2LjE4OEMxMi43MjUgMjQ5LjEyMSAwIDI3MS4wOTQgMCAyOTZWNDcyQzAgNDc2LjQyMiAzLjU3OCA0ODAgOCA0ODBTMTYgNDc2LjQyMiAxNiA0NzJWNDE2SDQ5NlY0NzJDNDk2IDQ3Ni40MjIgNDk5LjU3OCA0ODAgNTA0IDQ4MFM1MTIgNDc2LjQyMiA1MTIgNDcyVjI5NkM1MTIgMjcxLjA5NCA0OTkuMjc1IDI0OS4xMjEgNDgwIDIzNi4xODhaTTcyIDIyNEM2My41NDMgMjI0IDU1LjU0MyAyMjUuNzMyIDQ4IDIyOC40MjJWMTY4QzQ4IDE1NC43NjYgNTguNzY2IDE0NCA3MiAxNDRIMjI0QzIzNy4yMzQgMTQ0IDI0OCAxNTQuNzY2IDI0OCAxNjhWMjI0SDcyWk00NjQgMjI4LjQyMkM0NTYuNDU3IDIyNS43MzIgNDQ4LjQ1NyAyMjQgNDQwIDIyNEgyNjRWMTY4QzI2NCAxNTQuNzY2IDI3NC43NjYgMTQ0IDI4OCAxNDRINDQwQzQ1My4yMzQgMTQ0IDQ2NCAxNTQuNzY2IDQ2NCAxNjhWMjI4LjQyMlpNODggNDhINDI0QzQ0Ni4wNjIgNDggNDY0IDY1LjkzOCA0NjQgODhWMTM2Ljg0NEM0NTcuMjQ0IDEzMS42MzEgNDQ5LjE3OCAxMjggNDQwIDEyOEgyODhDMjc0LjU3MiAxMjggMjYzLjI1OCAxMzUuMDc0IDI1NiAxNDUuMjVDMjQ4Ljc0MiAxMzUuMDc0IDIzNy40MjggMTI4IDIyNCAxMjhINzJDNjIuODIyIDEyOCA1NC43NTYgMTMxLjYzMSA0OCAxMzYuODQ0Vjg4QzQ4IDY1LjkzOCA2NS45MzggNDggODggNDhaTTE2IDQwMFYyOTZDMTYgMjY1LjEyNSA0MS4xMjUgMjQwIDcyIDI0MEg0NDBDNDcwLjg3NSAyNDAgNDk2IDI2NS4xMjUgNDk2IDI5NlY0MDBIMTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BedFront(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M480 236.188V88C480 57.125 454.875 32 424 32H88C57.125 32 32 57.125 32 88V236.188C12.725 249.121 0 271.094 0 296V472C0 476.422 3.578 480 8 480S16 476.422 16 472V416H496V472C496 476.422 499.578 480 504 480S512 476.422 512 472V296C512 271.094 499.275 249.121 480 236.188ZM72 224C63.543 224 55.543 225.732 48 228.422V168C48 154.766 58.766 144 72 144H224C237.234 144 248 154.766 248 168V224H72ZM464 228.422C456.457 225.732 448.457 224 440 224H264V168C264 154.766 274.766 144 288 144H440C453.234 144 464 154.766 464 168V228.422ZM88 48H424C446.062 48 464 65.938 464 88V136.844C457.244 131.631 449.178 128 440 128H288C274.572 128 263.258 135.074 256 145.25C248.742 135.074 237.428 128 224 128H72C62.822 128 54.756 131.631 48 136.844V88C48 65.938 65.938 48 88 48ZM16 400V296C16 265.125 41.125 240 72 240H440C470.875 240 496 265.125 496 296V400H16Z" />
        </Icon>
    </>
}
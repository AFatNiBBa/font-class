
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `signal-bars` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/signal-bars?s=regular signal-bars}
 * @preview ![signal-bars](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjggMzg0SDY0QzQ2LjMyOCAzODQgMzIgMzk4LjMyOCAzMiA0MTZWNDgwQzMyIDQ5Ny42NzIgNDYuMzI4IDUxMiA2NCA1MTJIMTI4QzE0NS42NzQgNTEyIDE2MCA0OTcuNjcyIDE2MCA0ODBWNDE2QzE2MCAzOTguMzI4IDE0NS42NzQgMzg0IDEyOCAzODRaTTExMiA0NjRIODBWNDMySDExMlY0NjRaTTI4MCAyNTZIMjE2QzE5OC4zMjggMjU2IDE4NCAyNzAuMzI4IDE4NCAyODhWNDgwQzE4NCA0OTcuNjcyIDE5OC4zMjggNTEyIDIxNiA1MTJIMjgwQzI5Ny42NzQgNTEyIDMxMiA0OTcuNjcyIDMxMiA0ODBWMjg4QzMxMiAyNzAuMzI4IDI5Ny42NzQgMjU2IDI4MCAyNTZaTTI2NCA0NjRIMjMyVjMwNEgyNjRWNDY0Wk01ODQgMEg1MjBDNTAyLjMyOCAwIDQ4OCAxNC4zMjggNDg4IDMyVjQ4MEM0ODggNDk3LjY3MiA1MDIuMzI4IDUxMiA1MjAgNTEySDU4NEM2MDEuNjc0IDUxMiA2MTYgNDk3LjY3MiA2MTYgNDgwVjMyQzYxNiAxNC4zMjggNjAxLjY3NCAwIDU4NCAwWk01NjggNDY0SDUzNlY0OEg1NjhWNDY0Wk00MzIgMTI4SDM2OEMzNTAuMzI4IDEyOCAzMzYgMTQyLjMyOCAzMzYgMTYwVjQ4MEMzMzYgNDk3LjY3MiAzNTAuMzI4IDUxMiAzNjggNTEySDQzMkM0NDkuNjc0IDUxMiA0NjQgNDk3LjY3MiA0NjQgNDgwVjE2MEM0NjQgMTQyLjMyOCA0NDkuNjc0IDEyOCA0MzIgMTI4Wk00MTYgNDY0SDM4NFYxNzZINDE2VjQ2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SignalBars(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M128 384H64C46.328 384 32 398.328 32 416V480C32 497.672 46.328 512 64 512H128C145.674 512 160 497.672 160 480V416C160 398.328 145.674 384 128 384ZM112 464H80V432H112V464ZM280 256H216C198.328 256 184 270.328 184 288V480C184 497.672 198.328 512 216 512H280C297.674 512 312 497.672 312 480V288C312 270.328 297.674 256 280 256ZM264 464H232V304H264V464ZM584 0H520C502.328 0 488 14.328 488 32V480C488 497.672 502.328 512 520 512H584C601.674 512 616 497.672 616 480V32C616 14.328 601.674 0 584 0ZM568 464H536V48H568V464ZM432 128H368C350.328 128 336 142.328 336 160V480C336 497.672 350.328 512 368 512H432C449.674 512 464 497.672 464 480V160C464 142.328 449.674 128 432 128ZM416 464H384V176H416V464Z" />
        </Icon>
    </>
}
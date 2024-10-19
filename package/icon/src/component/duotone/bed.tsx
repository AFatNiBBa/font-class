
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bed` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bed?s=duotone bed}
 * @preview ![bed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE3NiAxMjhDMTMxLjg3NSAxMjggOTYgMTYzLjg3NSA5NiAyMDhTMTMxLjg3NSAyODggMTc2IDI4OFMyNTYgMjUyLjEyNSAyNTYgMjA4UzIyMC4xMjUgMTI4IDE3NiAxMjhaTTU0NCAxMjhIMzA0QzI5NS4xNjMgMTI4IDI4OCAxMzUuMTYzIDI4OCAxNDRWMzIwSDY0MFYyMjRDNjQwIDE3MC45ODEgNTk3LjAxOSAxMjggNTQ0IDEyOFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNjQwIDMyMFY0NjRDNjQwIDQ3Mi44NDQgNjMyLjg0NCA0ODAgNjI0IDQ4MEg1OTJDNTgzLjE1NiA0ODAgNTc2IDQ3Mi44NDQgNTc2IDQ2NFY0MTZINjRWNDY0QzY0IDQ3Mi44NDQgNTYuODQ0IDQ4MCA0OCA0ODBIMTZDNy4xNTYgNDgwIDAgNDcyLjg0NCAwIDQ2NFY0OEMwIDM5LjE1NiA3LjE1NiAzMiAxNiAzMkg0OEM1Ni44NDQgMzIgNjQgMzkuMTU2IDY0IDQ4VjMyMEg2NDBaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Bed(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M176 128C131.875 128 96 163.875 96 208S131.875 288 176 288S256 252.125 256 208S220.125 128 176 128ZM544 128H304C295.163 128 288 135.163 288 144V320H640V224C640 170.981 597.019 128 544 128Z" />
            <path d="M640 320V464C640 472.844 632.844 480 624 480H592C583.156 480 576 472.844 576 464V416H64V464C64 472.844 56.844 480 48 480H16C7.156 480 0 472.844 0 464V48C0 39.156 7.156 32 16 32H48C56.844 32 64 39.156 64 48V320H640Z" />
        </Icon>
    </>
}
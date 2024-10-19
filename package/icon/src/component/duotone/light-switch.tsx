
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `light-switch` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/light-switch?s=duotone light-switch}
 * @preview ![light-switch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI4OCAyNzJIOTZWMjQwSDI4OFYyNzJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTMyMCAwSDY0QzI4LjYyNSAwIDAgMjguNjI1IDAgNjRWNDQ4QzAgNDgzLjM3NSAyOC42MjUgNTEyIDY0IDUxMkgzMjBDMzU1LjM3NSA1MTIgMzg0IDQ4My4zNzUgMzg0IDQ0OFY2NEMzODQgMjguNjI1IDM1NS4zNzUgMCAzMjAgMFpNMTkyIDMyQzIwMC44NzUgMzIgMjA4IDM5LjEyNSAyMDggNDhTMjAwLjg3NSA2NCAxOTIgNjRTMTc2IDU2Ljg3NSAxNzYgNDhTMTgzLjEyNSAzMiAxOTIgMzJaTTE5MiA0ODBDMTgzLjEyNSA0ODAgMTc2IDQ3Mi44NzUgMTc2IDQ2NFMxODMuMTI1IDQ0OCAxOTIgNDQ4UzIwOCA0NTUuMTI1IDIwOCA0NjRTMjAwLjg3NSA0ODAgMTkyIDQ4MFpNMjg4IDM2OEMyODggMzk0LjUgMjY2LjUgNDE2IDI0MCA0MTZIMTQ0QzExNy41IDQxNiA5NiAzOTQuNSA5NiAzNjhWMTQ0Qzk2IDExNy41IDExNy41IDk2IDE0NCA5NkgyNDBDMjY2LjUgOTYgMjg4IDExNy41IDI4OCAxNDRWMzY4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function LightSwitch(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path opacity={.4} d="M288 272H96V240H288V272Z" />
            <path d="M320 0H64C28.625 0 0 28.625 0 64V448C0 483.375 28.625 512 64 512H320C355.375 512 384 483.375 384 448V64C384 28.625 355.375 0 320 0ZM192 32C200.875 32 208 39.125 208 48S200.875 64 192 64S176 56.875 176 48S183.125 32 192 32ZM192 480C183.125 480 176 472.875 176 464S183.125 448 192 448S208 455.125 208 464S200.875 480 192 480ZM288 368C288 394.5 266.5 416 240 416H144C117.5 416 96 394.5 96 368V144C96 117.5 117.5 96 144 96H240C266.5 96 288 117.5 288 144V368Z" />
        </Icon>
    </>
}
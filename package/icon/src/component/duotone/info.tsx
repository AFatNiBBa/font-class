
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `info` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/info?s=duotone info}
 * @preview ![info](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE2MCA4MEMxNjAgMTE1LjM0NiAxMzEuMzQ2IDE0NCA5NiAxNDRTMzIgMTE1LjM0NiAzMiA4MEMzMiA0NC42NTIgNjAuNjU0IDE2IDk2IDE2UzE2MCA0NC42NTIgMTYwIDgwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0xOTIgNDY0LjA4OUMxOTIgNDkwLjU0IDE3MC41MTYgNTEyIDE0NCA1MTJINDhDMjEuNDg0IDUxMiAwIDQ5MC41NCAwIDQ2NC4wODlTMjEuNDg0IDQxNi4xNzggNDggNDE2LjE3OEg0OC4wNDVMNDcuNTUzIDI4Ny44MjJDMjAuOTczIDI4Ny40NzkgLTAuMzI2IDI2NS43NjkgMC4wMDQgMjM5LjMxOEMwLjMzMiAyMTMuMDU1IDIxLjgxOCAxOTIgNDguMTMzIDE5Mkg0OC43NDRMOTYuODg5IDE5Mi41OTNDMTIzLjI0OCAxOTIuOTM2IDE0NC40MzggMjE0LjI3MSAxNDQuNDM4IDI0MC41MDRWNDE2LjIyM0MxNzAuNzQ0IDQxNi40NjIgMTkyIDQzNy43ODggMTkyIDQ2NC4wODlaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Info(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 192 512" {...props}>
            <path class={generic.secondary} d="M160 80C160 115.346 131.346 144 96 144S32 115.346 32 80C32 44.652 60.654 16 96 16S160 44.652 160 80Z" />
            <path d="M192 464.089C192 490.54 170.516 512 144 512H48C21.484 512 0 490.54 0 464.089S21.484 416.178 48 416.178H48.045L47.553 287.822C20.973 287.479 -0.326 265.769 0.004 239.318C0.332 213.055 21.818 192 48.133 192H48.744L96.889 192.593C123.248 192.936 144.438 214.271 144.438 240.504V416.223C170.744 416.462 192 437.788 192 464.089Z" />
        </Icon>
    </>
}
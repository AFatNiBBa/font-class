
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `qrcode` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/qrcode?s=duotone qrcode}
 * @preview ![qrcode](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE2MCAyODhIMzJDMTQuMzI4IDI4OCAwIDMwMi4zMjYgMCAzMjBWNDQ4QzAgNDY1LjY3NCAxNC4zMjggNDgwIDMyIDQ4MEgxNjBDMTc3LjY3NCA0ODAgMTkyIDQ2NS42NzQgMTkyIDQ0OFYzMjBDMTkyIDMwMi4zMjYgMTc3LjY3NCAyODggMTYwIDI4OFpNMTI4IDQxNkg2NFYzNTJIMTI4VjQxNlpNMTYwIDMySDMyQzE0LjMyOCAzMiAwIDQ2LjMyNiAwIDY0VjE5MkMwIDIwOS42NzQgMTQuMzI4IDIyNCAzMiAyMjRIMTYwQzE3Ny42NzQgMjI0IDE5MiAyMDkuNjc0IDE5MiAxOTJWNjRDMTkyIDQ2LjMyNiAxNzcuNjc0IDMyIDE2MCAzMlpNMTI4IDE2MEg2NFY5NkgxMjhWMTYwWk00MTYgMzJIMjg4QzI3MC4zMjggMzIgMjU2IDQ2LjMyNiAyNTYgNjRWMTkyQzI1NiAyMDkuNjc0IDI3MC4zMjggMjI0IDI4OCAyMjRINDE2QzQzMy42NzQgMjI0IDQ0OCAyMDkuNjc0IDQ0OCAxOTJWNjRDNDQ4IDQ2LjMyNiA0MzMuNjc0IDMyIDQxNiAzMlpNMzg0IDE2MEgzMjBWOTZIMzg0VjE2MFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzUyIDQ4MEgzODRWNDQ4SDM1MlY0ODBaTTQxNiAyODhWMzIwSDM1MlYyODhIMjU2VjQ4MEgzMjBWMzg0SDM1MlY0MTZINDQ4VjI4OEg0MTZaTTQxNiA0ODBINDQ4VjQ0OEg0MTZWNDgwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Qrcode(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M160 288H32C14.328 288 0 302.326 0 320V448C0 465.674 14.328 480 32 480H160C177.674 480 192 465.674 192 448V320C192 302.326 177.674 288 160 288ZM128 416H64V352H128V416ZM160 32H32C14.328 32 0 46.326 0 64V192C0 209.674 14.328 224 32 224H160C177.674 224 192 209.674 192 192V64C192 46.326 177.674 32 160 32ZM128 160H64V96H128V160ZM416 32H288C270.328 32 256 46.326 256 64V192C256 209.674 270.328 224 288 224H416C433.674 224 448 209.674 448 192V64C448 46.326 433.674 32 416 32ZM384 160H320V96H384V160Z" />
            <path d="M352 480H384V448H352V480ZM416 288V320H352V288H256V480H320V384H352V416H448V288H416ZM416 480H448V448H416V480Z" />
        </Icon>
    </>
}
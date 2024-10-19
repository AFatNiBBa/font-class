
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `city` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/city?s=thin city}
 * @preview ![city](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjAgMjk2SDcyQzYzLjE4OCAyOTYgNTYgMzAzLjE3MiA1NiAzMTJWMzYwQzU2IDM2OC44MjggNjMuMTg4IDM3NiA3MiAzNzZIMTIwQzEyOC44MTIgMzc2IDEzNiAzNjguODI4IDEzNiAzNjBWMzEyQzEzNiAzMDMuMTcyIDEyOC44MTIgMjk2IDEyMCAyOTZaTTEyMCAzNTkuOTg0QzEyMCAzNjAgMTIwIDM2MCAxMjAgMzYwSDcyVjMxMkgxMjBWMzU5Ljk4NFpNMTIwIDQyNEg3MkM2My4xODggNDI0IDU2IDQzMS4xNzIgNTYgNDQwVjQ4OEM1NiA0OTYuODI4IDYzLjE4OCA1MDQgNzIgNTA0SDEyMEMxMjguODEyIDUwNCAxMzYgNDk2LjgyOCAxMzYgNDg4VjQ0MEMxMzYgNDMxLjE3MiAxMjguODEyIDQyNCAxMjAgNDI0Wk0xMjAgNDg3Ljk4NEMxMjAgNDg4IDEyMCA0ODggMTIwIDQ4OEg3MlY0NDBIMTIwVjQ4Ny45ODRaTTQwOCAyMDBIMzYwQzM1MS4xODggMjAwIDM0NCAyMDcuMTcyIDM0NCAyMTZWMjY0QzM0NCAyNzIuODI4IDM1MS4xODggMjgwIDM2MCAyODBINDA4QzQxNi44MTIgMjgwIDQyNCAyNzIuODI4IDQyNCAyNjRWMjE2QzQyNCAyMDcuMTcyIDQxNi44MTIgMjAwIDQwOCAyMDBaTTQwOCAyNjMuOTg0QzQwOCAyNjQgNDA4IDI2NCA0MDggMjY0SDM2MFYyMTZINDA4VjI2My45ODRaTTYwOCAxOTJINDgwVjMyQzQ4MCAxNC4zMjYgNDY1LjY3MiAwIDQ0OCAwSDMyMEMzMDIuMzI4IDAgMjg4IDE0LjMyNiAyODggMzJWOTZIMjE2VjhDMjE2IDMuNTc4IDIxMi40MDYgMCAyMDggMFMyMDAgMy41NzggMjAwIDhWOTZIODhWOEM4OCAzLjU3OCA4NC40MDYgMCA4MCAwUzcyIDMuNTc4IDcyIDhWOTZIMzJDMTQuMzI4IDk2IDAgMTEwLjMyNiAwIDEyOFY1MDRDMCA1MDguNDIyIDMuNTk0IDUxMiA4IDUxMlMxNiA1MDguNDIyIDE2IDUwNFYxMjhDMTYgMTE5LjE2MiAyMy4xNjQgMTEyIDMyIDExMkgzMDRWMzJDMzA0IDIzLjE2MiAzMTEuMTY0IDE2IDMyMCAxNkg0NDhDNDU2LjgzNiAxNiA0NjQgMjMuMTYyIDQ2NCAzMlYyMDhINjA4QzYxNi44MzYgMjA4IDYyNCAyMTUuMTYyIDYyNCAyMjRWNTA0QzYyNCA1MDguNDIyIDYyNy41OTQgNTEyIDYzMiA1MTJTNjQwIDUwOC40MjIgNjQwIDUwNFYyMjRDNjQwIDIwNi4zMjYgNjI1LjY3MiAxOTIgNjA4IDE5MlpNMTIwIDE2OEg3MkM2My4xODggMTY4IDU2IDE3NS4xNzIgNTYgMTg0VjIzMkM1NiAyNDAuODI4IDYzLjE4OCAyNDggNzIgMjQ4SDEyMEMxMjguODEyIDI0OCAxMzYgMjQwLjgyOCAxMzYgMjMyVjE4NEMxMzYgMTc1LjE3MiAxMjguODEyIDE2OCAxMjAgMTY4Wk0xMjAgMjMxLjk4NEMxMjAgMjMyIDEyMCAyMzIgMTIwIDIzMkg3MlYxODRIMTIwVjIzMS45ODRaTTU2OCAyOTZINTIwQzUxMS4xODggMjk2IDUwNCAzMDMuMTcyIDUwNCAzMTJWMzYwQzUwNCAzNjguODI4IDUxMS4xODggMzc2IDUyMCAzNzZINTY4QzU3Ni44MTIgMzc2IDU4NCAzNjguODI4IDU4NCAzNjBWMzEyQzU4NCAzMDMuMTcyIDU3Ni44MTIgMjk2IDU2OCAyOTZaTTU2OCAzNTkuOTg0QzU2OCAzNjAgNTY4IDM2MCA1NjggMzYwSDUyMFYzMTJINTY4VjM1OS45ODRaTTQwOCA3MkgzNjBDMzUxLjE4OCA3MiAzNDQgNzkuMTcyIDM0NCA4OFYxMzZDMzQ0IDE0NC44MjggMzUxLjE4OCAxNTIgMzYwIDE1Mkg0MDhDNDE2LjgxMiAxNTIgNDI0IDE0NC44MjggNDI0IDEzNlY4OEM0MjQgNzkuMTcyIDQxNi44MTIgNzIgNDA4IDcyWk00MDggMTM1Ljk4NEM0MDggMTM2IDQwOCAxMzYgNDA4IDEzNkgzNjBWODhINDA4VjEzNS45ODRaTTI0OCAxNjhIMjAwQzE5MS4xODggMTY4IDE4NCAxNzUuMTcyIDE4NCAxODRWMjMyQzE4NCAyNDAuODI4IDE5MS4xODggMjQ4IDIwMCAyNDhIMjQ4QzI1Ni44MTIgMjQ4IDI2NCAyNDAuODI4IDI2NCAyMzJWMTg0QzI2NCAxNzUuMTcyIDI1Ni44MTIgMTY4IDI0OCAxNjhaTTI0OCAyMzEuOTg0QzI0OCAyMzIgMjQ4IDIzMiAyNDggMjMySDIwMFYxODRIMjQ4VjIzMS45ODRaTTQwOCAzMjhIMzYwQzM1MS4xODggMzI4IDM0NCAzMzUuMTcyIDM0NCAzNDRWMzkyQzM0NCA0MDAuODI4IDM1MS4xODggNDA4IDM2MCA0MDhINDA4QzQxNi44MTIgNDA4IDQyNCA0MDAuODI4IDQyNCAzOTJWMzQ0QzQyNCAzMzUuMTcyIDQxNi44MTIgMzI4IDQwOCAzMjhaTTQwOCAzOTEuOTg0QzQwOCAzOTIgNDA4IDM5MiA0MDggMzkySDM2MFYzNDRINDA4VjM5MS45ODRaTTU2OCA0MjRINTIwQzUxMS4xODggNDI0IDUwNCA0MzEuMTcyIDUwNCA0NDBWNDg4QzUwNCA0OTYuODI4IDUxMS4xODggNTA0IDUyMCA1MDRINTY4QzU3Ni44MTIgNTA0IDU4NCA0OTYuODI4IDU4NCA0ODhWNDQwQzU4NCA0MzEuMTcyIDU3Ni44MTIgNDI0IDU2OCA0MjRaTTU2OCA0ODcuOTg0QzU2OCA0ODggNTY4IDQ4OCA1NjggNDg4SDUyMFY0NDBINTY4VjQ4Ny45ODRaTTI0OCA0MjRIMjAwQzE5MS4xODggNDI0IDE4NCA0MzEuMTcyIDE4NCA0NDBWNDg4QzE4NCA0OTYuODI4IDE5MS4xODggNTA0IDIwMCA1MDRIMjQ4QzI1Ni44MTIgNTA0IDI2NCA0OTYuODI4IDI2NCA0ODhWNDQwQzI2NCA0MzEuMTcyIDI1Ni44MTIgNDI0IDI0OCA0MjRaTTI0OCA0ODcuOTg0QzI0OCA0ODggMjQ4IDQ4OCAyNDggNDg4SDIwMFY0NDBIMjQ4VjQ4Ny45ODRaTTI0OCAyOTZIMjAwQzE5MS4xODggMjk2IDE4NCAzMDMuMTcyIDE4NCAzMTJWMzYwQzE4NCAzNjguODI4IDE5MS4xODggMzc2IDIwMCAzNzZIMjQ4QzI1Ni44MTIgMzc2IDI2NCAzNjguODI4IDI2NCAzNjBWMzEyQzI2NCAzMDMuMTcyIDI1Ni44MTIgMjk2IDI0OCAyOTZaTTI0OCAzNTkuOTg0QzI0OCAzNjAgMjQ4IDM2MCAyNDggMzYwSDIwMFYzMTJIMjQ4VjM1OS45ODRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function City(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M120 296H72C63.188 296 56 303.172 56 312V360C56 368.828 63.188 376 72 376H120C128.812 376 136 368.828 136 360V312C136 303.172 128.812 296 120 296ZM120 359.984C120 360 120 360 120 360H72V312H120V359.984ZM120 424H72C63.188 424 56 431.172 56 440V488C56 496.828 63.188 504 72 504H120C128.812 504 136 496.828 136 488V440C136 431.172 128.812 424 120 424ZM120 487.984C120 488 120 488 120 488H72V440H120V487.984ZM408 200H360C351.188 200 344 207.172 344 216V264C344 272.828 351.188 280 360 280H408C416.812 280 424 272.828 424 264V216C424 207.172 416.812 200 408 200ZM408 263.984C408 264 408 264 408 264H360V216H408V263.984ZM608 192H480V32C480 14.326 465.672 0 448 0H320C302.328 0 288 14.326 288 32V96H216V8C216 3.578 212.406 0 208 0S200 3.578 200 8V96H88V8C88 3.578 84.406 0 80 0S72 3.578 72 8V96H32C14.328 96 0 110.326 0 128V504C0 508.422 3.594 512 8 512S16 508.422 16 504V128C16 119.162 23.164 112 32 112H304V32C304 23.162 311.164 16 320 16H448C456.836 16 464 23.162 464 32V208H608C616.836 208 624 215.162 624 224V504C624 508.422 627.594 512 632 512S640 508.422 640 504V224C640 206.326 625.672 192 608 192ZM120 168H72C63.188 168 56 175.172 56 184V232C56 240.828 63.188 248 72 248H120C128.812 248 136 240.828 136 232V184C136 175.172 128.812 168 120 168ZM120 231.984C120 232 120 232 120 232H72V184H120V231.984ZM568 296H520C511.188 296 504 303.172 504 312V360C504 368.828 511.188 376 520 376H568C576.812 376 584 368.828 584 360V312C584 303.172 576.812 296 568 296ZM568 359.984C568 360 568 360 568 360H520V312H568V359.984ZM408 72H360C351.188 72 344 79.172 344 88V136C344 144.828 351.188 152 360 152H408C416.812 152 424 144.828 424 136V88C424 79.172 416.812 72 408 72ZM408 135.984C408 136 408 136 408 136H360V88H408V135.984ZM248 168H200C191.188 168 184 175.172 184 184V232C184 240.828 191.188 248 200 248H248C256.812 248 264 240.828 264 232V184C264 175.172 256.812 168 248 168ZM248 231.984C248 232 248 232 248 232H200V184H248V231.984ZM408 328H360C351.188 328 344 335.172 344 344V392C344 400.828 351.188 408 360 408H408C416.812 408 424 400.828 424 392V344C424 335.172 416.812 328 408 328ZM408 391.984C408 392 408 392 408 392H360V344H408V391.984ZM568 424H520C511.188 424 504 431.172 504 440V488C504 496.828 511.188 504 520 504H568C576.812 504 584 496.828 584 488V440C584 431.172 576.812 424 568 424ZM568 487.984C568 488 568 488 568 488H520V440H568V487.984ZM248 424H200C191.188 424 184 431.172 184 440V488C184 496.828 191.188 504 200 504H248C256.812 504 264 496.828 264 488V440C264 431.172 256.812 424 248 424ZM248 487.984C248 488 248 488 248 488H200V440H248V487.984ZM248 296H200C191.188 296 184 303.172 184 312V360C184 368.828 191.188 376 200 376H248C256.812 376 264 368.828 264 360V312C264 303.172 256.812 296 248 296ZM248 359.984C248 360 248 360 248 360H200V312H248V359.984Z" />
        </Icon>
    </>
}
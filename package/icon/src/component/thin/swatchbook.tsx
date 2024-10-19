
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `swatchbook` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/swatchbook?s=thin swatchbook}
 * @preview ![swatchbook](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05NiAzODRDNzguMzI2IDM4NCA2NCAzOTguMzI2IDY0IDQxNkM2NCA0MzMuNjcyIDc4LjMyNiA0NDggOTYgNDQ4UzEyOCA0MzMuNjcyIDEyOCA0MTZDMTI4IDM5OC4zMjYgMTEzLjY3NCAzODQgOTYgMzg0Wk05NiA0MzJDODcuMTc4IDQzMiA4MCA0MjQuODIyIDgwIDQxNlM4Ny4xNzggNDAwIDk2IDQwMFMxMTIgNDA3LjE3OCAxMTIgNDE2UzEwNC44MjIgNDMyIDk2IDQzMlpNMTI4IDQ4SDY0QzU1LjE2NCA0OCA0OCA1NS4xNjIgNDggNjRWMTI4QzQ4IDEzNi44MzYgNTUuMTY0IDE0NCA2NCAxNDRIMTI4QzEzNi44MzYgMTQ0IDE0NCAxMzYuODM2IDE0NCAxMjhWNjRDMTQ0IDU1LjE2MiAxMzYuODM2IDQ4IDEyOCA0OFpNMTI4IDEyOEg2NFY2NEgxMjhWMTI4Wk0xOTIgMzJDMTkyIDE0LjMyNiAxNzcuNjc0IDAgMTYwIDBIMzJDMTQuMzI2IDAgMCAxNC4zMjYgMCAzMlY0MTZDMCA0NjkuMDIgNDIuOTggNTEyIDk2IDUxMlMxOTIgNDY5LjAyIDE5MiA0MTZWMzJaTTE3NiA0MTZDMTc2IDQ2MC4xMTEgMTQwLjExMSA0OTYgOTYgNDk2UzE2IDQ2MC4xMTEgMTYgNDE2VjMyQzE2IDIzLjE3OCAyMy4xNzggMTYgMzIgMTZIMTYwQzE2OC44MjIgMTYgMTc2IDIzLjE3OCAxNzYgMzJWNDE2Wk0xMjggMTc2SDY0QzU1LjE2NCAxNzYgNDggMTgzLjE2MiA0OCAxOTJWMjU2QzQ4IDI2NC44MzYgNTUuMTY0IDI3MiA2NCAyNzJIMTI4QzEzNi44MzYgMjcyIDE0NCAyNjQuODM2IDE0NCAyNTZWMTkyQzE0NCAxODMuMTYyIDEzNi44MzYgMTc2IDEyOCAxNzZaTTEyOCAyNTZINjRWMTkySDEyOFYyNTZaTTQ3NC42NTYgMzIwSDM4NEMzNzkuNTk0IDMyMCAzNzYgMzIzLjU3OCAzNzYgMzI4UzM3OS41OTQgMzM2IDM4NCAzMzZINDc0LjY1NkM0ODYuNDM4IDMzNiA0OTYgMzQ1LjU2MiA0OTYgMzU3LjMyOFY0NzQuNjcyQzQ5NiA0ODYuNDM4IDQ4Ni40MzggNDk2IDQ3NC42NTYgNDk2SDE5MkMxODcuNTk0IDQ5NiAxODQgNDk5LjU3OCAxODQgNTA0UzE4Ny41OTQgNTEyIDE5MiA1MTJINDc0LjY1NkM0OTUuMjUgNTEyIDUxMiA0OTUuMjUgNTEyIDQ3NC42NzJWMzU3LjMyOEM1MTIgMzM2Ljc1IDQ5NS4yNSAzMjAgNDc0LjY1NiAzMjBaTTIxOC4zNDQgNDA2Ljc5N0MyMTUuMjE5IDQwOS45MjIgMjE1LjIxOSA0MTQuOTg0IDIxOC4zNDQgNDE4LjEwOUMyMTkuOTA2IDQxOS42NzIgMjIxLjkzOCA0MjAuNDUzIDIyNCA0MjAuNDUzUzIyOC4wOTQgNDE5LjY3MiAyMjkuNjU2IDQxOC4xMDlMNDM3LjA2MiAyMTAuNzAzQzQ0NC4xMjUgMjAzLjY1NiA0NDggMTk0LjI4MSA0NDggMTg0LjMxMkM0NDggMTc0LjMyOCA0NDQuMTI1IDE2NC45NTMgNDM3LjA2MiAxNTcuOTA2TDM1NC4wOTQgNzQuOTM4QzM0MC4wMzEgNjAuODc1IDMxNS4zNzUgNjAuODEzIDMwMS4zMTIgNzQuOTM4TDIxOC4zNDQgMTU3Ljg5MUMyMTUuMjE5IDE2MS4wMTYgMjE1LjIxOSAxNjYuMDc4IDIxOC4zNDQgMTY5LjIwM1MyMjYuNTMxIDE3Mi4zMjggMjI5LjY1NiAxNjkuMjAzTDMxMi42MjUgODYuMjVDMzIwLjY4NyA3OC4xNDEgMzM0LjcxOSA3OC4yMDMgMzQyLjc4MSA4Ni4yNUw0MjUuNzUgMTY5LjIxOUM0MjkuNzgxIDE3My4yNSA0MzIgMTc4LjYwOSA0MzIgMTg0LjMxMkM0MzIgMTkwIDQyOS43ODEgMTk1LjM1OSA0MjUuNzUgMTk5LjM5MUwyMTguMzQ0IDQwNi43OTdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Swatchbook(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M96 384C78.326 384 64 398.326 64 416C64 433.672 78.326 448 96 448S128 433.672 128 416C128 398.326 113.674 384 96 384ZM96 432C87.178 432 80 424.822 80 416S87.178 400 96 400S112 407.178 112 416S104.822 432 96 432ZM128 48H64C55.164 48 48 55.162 48 64V128C48 136.836 55.164 144 64 144H128C136.836 144 144 136.836 144 128V64C144 55.162 136.836 48 128 48ZM128 128H64V64H128V128ZM192 32C192 14.326 177.674 0 160 0H32C14.326 0 0 14.326 0 32V416C0 469.02 42.98 512 96 512S192 469.02 192 416V32ZM176 416C176 460.111 140.111 496 96 496S16 460.111 16 416V32C16 23.178 23.178 16 32 16H160C168.822 16 176 23.178 176 32V416ZM128 176H64C55.164 176 48 183.162 48 192V256C48 264.836 55.164 272 64 272H128C136.836 272 144 264.836 144 256V192C144 183.162 136.836 176 128 176ZM128 256H64V192H128V256ZM474.656 320H384C379.594 320 376 323.578 376 328S379.594 336 384 336H474.656C486.438 336 496 345.562 496 357.328V474.672C496 486.438 486.438 496 474.656 496H192C187.594 496 184 499.578 184 504S187.594 512 192 512H474.656C495.25 512 512 495.25 512 474.672V357.328C512 336.75 495.25 320 474.656 320ZM218.344 406.797C215.219 409.922 215.219 414.984 218.344 418.109C219.906 419.672 221.938 420.453 224 420.453S228.094 419.672 229.656 418.109L437.062 210.703C444.125 203.656 448 194.281 448 184.312C448 174.328 444.125 164.953 437.062 157.906L354.094 74.938C340.031 60.875 315.375 60.813 301.312 74.938L218.344 157.891C215.219 161.016 215.219 166.078 218.344 169.203S226.531 172.328 229.656 169.203L312.625 86.25C320.687 78.141 334.719 78.203 342.781 86.25L425.75 169.219C429.781 173.25 432 178.609 432 184.312C432 190 429.781 195.359 425.75 199.391L218.344 406.797Z" />
        </Icon>
    </>
}
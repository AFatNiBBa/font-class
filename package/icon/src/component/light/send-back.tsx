
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `send-back` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/send-back?s=light send-back}
 * @preview ![send-back](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgODBDMTkyIDcxLjEyNSAxODQuODc1IDY0IDE3NiA2NEg4MEM3MS4xMjUgNjQgNjQgNzEuMTI1IDY0IDgwVjE3NkM2NCAxODQuODc1IDcxLjEyNSAxOTIgODAgMTkySDE3NkMxODQuODc1IDE5MiAxOTIgMTg0Ljg3NSAxOTIgMTc2VjgwWk0xNjAgMTYwSDk2Vjk2SDE2MFYxNjBaTTQ0OCAxNDRWMjA4QzQ0OCAyMTYuODM3IDQ1NS4xNjMgMjI0IDQ2NCAyMjRINDY0QzQ3Mi44MzcgMjI0IDQ4MCAyMTYuODM3IDQ4MCAyMDhWMTQ0QzQ4MCAxMTcuNDkgNDU4LjUxIDk2IDQzMiA5NkgzMDRDMjk1LjE2MyA5NiAyODggMTAzLjE2MyAyODggMTEyVjExMkMyODggMTIwLjgzNyAyOTUuMTYzIDEyOCAzMDQgMTI4SDQzMkM0NDAuODM3IDEyOCA0NDggMTM1LjE2MyA0NDggMTQ0Wk0yNTYgMTkyVjY0QzI1NiAyOC42NTIgMjI3LjM0NiAwIDE5MiAwSDQ4QzIxLjQ5IDAgMCAyMS40OSAwIDQ4VjE5MkMwIDIyNy4zNDYgMjguNjU0IDI1NiA2NCAyNTZIMTkyQzIyNy4zNDYgMjU2IDI1NiAyMjcuMzQ2IDI1NiAxOTJaTTMyIDE5MlY2NEMzMiA0Ni4zMjYgNDYuMzI2IDMyIDY0IDMySDE5MkMyMDkuNjc0IDMyIDIyNCA0Ni4zMjYgMjI0IDY0VjE5MkMyMjQgMjA5LjY3MiAyMDkuNjc0IDIyNCAxOTIgMjI0SDY0QzQ2LjMyNiAyMjQgMzIgMjA5LjY3MiAzMiAxOTJaTTU3NiAyNTZINDQ4QzQxMi42NTQgMjU2IDM4NCAyODQuNjUyIDM4NCAzMjBWNDQ4QzM4NCA0ODMuMzQ2IDQxMi42NTQgNTEyIDQ0OCA1MTJINTc2QzYxMS4zNDYgNTEyIDY0MCA0ODMuMzQ2IDY0MCA0NDhWMzIwQzY0MCAyODQuNjUyIDYxMS4zNDYgMjU2IDU3NiAyNTZaTTYwOCA0NDhDNjA4IDQ2NS42NzIgNTkzLjY3NCA0ODAgNTc2IDQ4MEg0NDhDNDMwLjMyNiA0ODAgNDE2IDQ2NS42NzIgNDE2IDQ0OFYzMjBDNDE2IDMwMi4zMjYgNDMwLjMyNiAyODggNDQ4IDI4OEg1NzZDNTkzLjY3NCAyODggNjA4IDMwMi4zMjYgNjA4IDMyMFY0NDhaTTU2MCAzMjBINDY0QzQ1NS4xMjUgMzIwIDQ0OCAzMjcuMTI1IDQ0OCAzMzZWNDMyQzQ0OCA0NDAuODc1IDQ1NS4xMjUgNDQ4IDQ2NCA0NDhINTYwQzU2OC44NzUgNDQ4IDU3NiA0NDAuODc1IDU3NiA0MzJWMzM2QzU3NiAzMjcuMTI1IDU2OC44NzUgMzIwIDU2MCAzMjBaTTU0NCA0MTZINDgwVjM1Mkg1NDRWNDE2Wk0xOTIgMzY4VjMwNEMxOTIgMjk1LjE2MyAxODQuODM3IDI4OCAxNzYgMjg4SDE3NkMxNjcuMTYzIDI4OCAxNjAgMjk1LjE2MyAxNjAgMzA0VjM2OEMxNjAgMzk0LjUxIDE4MS40OSA0MTYgMjA4IDQxNkgzMzZDMzQ0LjgzNyA0MTYgMzUyIDQwOC44MzcgMzUyIDQwMFY0MDBDMzUyIDM5MS4xNjMgMzQ0LjgzNyAzODQgMzM2IDM4NEgyMDhDMTk5LjE2MyAzODQgMTkyIDM3Ni44MzcgMTkyIDM2OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SendBack(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M192 80C192 71.125 184.875 64 176 64H80C71.125 64 64 71.125 64 80V176C64 184.875 71.125 192 80 192H176C184.875 192 192 184.875 192 176V80ZM160 160H96V96H160V160ZM448 144V208C448 216.837 455.163 224 464 224H464C472.837 224 480 216.837 480 208V144C480 117.49 458.51 96 432 96H304C295.163 96 288 103.163 288 112V112C288 120.837 295.163 128 304 128H432C440.837 128 448 135.163 448 144ZM256 192V64C256 28.652 227.346 0 192 0H48C21.49 0 0 21.49 0 48V192C0 227.346 28.654 256 64 256H192C227.346 256 256 227.346 256 192ZM32 192V64C32 46.326 46.326 32 64 32H192C209.674 32 224 46.326 224 64V192C224 209.672 209.674 224 192 224H64C46.326 224 32 209.672 32 192ZM576 256H448C412.654 256 384 284.652 384 320V448C384 483.346 412.654 512 448 512H576C611.346 512 640 483.346 640 448V320C640 284.652 611.346 256 576 256ZM608 448C608 465.672 593.674 480 576 480H448C430.326 480 416 465.672 416 448V320C416 302.326 430.326 288 448 288H576C593.674 288 608 302.326 608 320V448ZM560 320H464C455.125 320 448 327.125 448 336V432C448 440.875 455.125 448 464 448H560C568.875 448 576 440.875 576 432V336C576 327.125 568.875 320 560 320ZM544 416H480V352H544V416ZM192 368V304C192 295.163 184.837 288 176 288H176C167.163 288 160 295.163 160 304V368C160 394.51 181.49 416 208 416H336C344.837 416 352 408.837 352 400V400C352 391.163 344.837 384 336 384H208C199.163 384 192 376.837 192 368Z" />
        </Icon>
    </>
}
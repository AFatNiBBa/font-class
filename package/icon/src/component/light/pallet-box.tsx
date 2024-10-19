
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `pallet-box` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pallet-box?s=light pallet-box}
 * @preview ![pallet-box](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMjg4SDQ0OEM0ODMuMzQ2IDI4OCA1MTIgMjU5LjM0NiA1MTIgMjI0VjY0QzUxMiAyOC42NTIgNDgzLjM0NiAwIDQ0OCAwSDE5MkMxNTYuNjU0IDAgMTI4IDI4LjY1MiAxMjggNjRWMjI0QzEyOCAyNTkuMzQ2IDE1Ni42NTQgMjg4IDE5MiAyODhaTTI3MiAzMkgzNjhWMTAyLjEyNUwzMjcuMTU2IDgxLjY4N0MzMjIuNjU2IDc5LjQzNyAzMTcuMzQ0IDc5LjQzNyAzMTIuODQ0IDgxLjY4N0wyNzIgMTAyLjEyNVYzMlpNMTYwIDY0QzE2MCA0Ni4zNTUgMTc0LjM1NSAzMiAxOTIgMzJIMjQwVjEyOEMyNDAgMTMzLjUzMSAyNDIuODc1IDEzOC42ODggMjQ3LjU5NCAxNDEuNjI1QzI1Mi4yNSAxNDQuNDM3IDI1OC4xODggMTQ0Ljc4MSAyNjMuMTU2IDE0Mi4zMTJMMzIwIDExMy44NzVMMzc2Ljg0NCAxNDIuMzEzQzM3OS4wOTQgMTQzLjQzOCAzODEuNTYyIDE0NCAzODQgMTQ0QzM4Ni45MzggMTQ0IDM4OS44NDQgMTQzLjE4OCAzOTIuNDA2IDE0MS42MjVDMzk3LjEyNSAxMzguNjg4IDQwMCAxMzMuNTMxIDQwMCAxMjhWMzJINDQ4QzQ2NS42NDUgMzIgNDgwIDQ2LjM1NSA0ODAgNjRWMjI0QzQ4MCAyNDEuNjQ1IDQ2NS42NDUgMjU2IDQ0OCAyNTZIMTkyQzE3NC4zNTUgMjU2IDE2MCAyNDEuNjQ1IDE2MCAyMjRWNjRaTTYyNCA0ODBINTYwVjM4NEg2MjRDNjMyLjg0NCAzODQgNjQwIDM3Ni44NDQgNjQwIDM2OFM2MzIuODQ0IDM1MiA2MjQgMzUySDE2QzcuMTU2IDM1MiAwIDM1OS4xNTYgMCAzNjhTNy4xNTYgMzg0IDE2IDM4NEg4MFY0ODBIMTZDNy4xNTYgNDgwIDAgNDg3LjE1NiAwIDQ5NlM3LjE1NiA1MTIgMTYgNTEySDYyNEM2MzIuODQ0IDUxMiA2NDAgNTA0Ljg0NCA2NDAgNDk2UzYzMi44NDQgNDgwIDYyNCA0ODBaTTMwNCA0ODBIMTEyVjM4NEgzMDRWNDgwWk01MjggNDgwSDMzNlYzODRINTI4VjQ4MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PalletBox(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M192 288H448C483.346 288 512 259.346 512 224V64C512 28.652 483.346 0 448 0H192C156.654 0 128 28.652 128 64V224C128 259.346 156.654 288 192 288ZM272 32H368V102.125L327.156 81.687C322.656 79.437 317.344 79.437 312.844 81.687L272 102.125V32ZM160 64C160 46.355 174.355 32 192 32H240V128C240 133.531 242.875 138.688 247.594 141.625C252.25 144.437 258.188 144.781 263.156 142.312L320 113.875L376.844 142.313C379.094 143.438 381.562 144 384 144C386.938 144 389.844 143.188 392.406 141.625C397.125 138.688 400 133.531 400 128V32H448C465.645 32 480 46.355 480 64V224C480 241.645 465.645 256 448 256H192C174.355 256 160 241.645 160 224V64ZM624 480H560V384H624C632.844 384 640 376.844 640 368S632.844 352 624 352H16C7.156 352 0 359.156 0 368S7.156 384 16 384H80V480H16C7.156 480 0 487.156 0 496S7.156 512 16 512H624C632.844 512 640 504.844 640 496S632.844 480 624 480ZM304 480H112V384H304V480ZM528 480H336V384H528V480Z" />
        </Icon>
    </>
}
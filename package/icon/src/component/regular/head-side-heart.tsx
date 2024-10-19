
import { Icon } from "../../index";

/**
 * A component that renders the `head-side-heart` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/head-side-heart?s=regular head-side-heart}
 * @preview ![head-side-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDkuMjIzIDI3NUM0ODguMjIzIDIyNy44NzUgNDYwLjcyNyAxMjMuMjUgNDM2LjEwNCA4OC4yNUMzOTcuNjA2IDMzLjYyNSAzMzQuNDg3IDAgMjY2LjExNyAwSDE5OS45OThDOTUuNTA2IDAgNC4xMzkgODAuMTI1IDAuMTM5IDE4NC41Qy0yLjExMSAyNDQuMzc1IDIzLjEzNyAyOTguMTI1IDY0LjAwOCAzMzQuODc1VjQ4OEM2NC4wMDggNTAxLjI1NiA3NC43NTQgNTEyIDg4LjAwOCA1MTJDMTAxLjI2IDUxMiAxMTIuMDA0IDUwMS4yNTYgMTEyLjAwNCA0ODguMDAyVjMxMy4zNzVMOTYuMDA2IDI5OS4xMjVDNDkuMTM1IDI1NyAzMy4wMTIgMTg3LjM3NSA2My44ODMgMTI2LjYyNUM4OS4yNTYgNzYuNzUgMTQzLjEyNyA0OCAxOTguOTk4IDQ4SDI2Ni4xMTdDMzE4LjExNCA0OCAzNjYuOTg1IDczLjM3NSAzOTYuODU2IDExNS44NzVDNDA4LjEwNiAxMzEuNzUgNDI0Ljg1NCAxODEuNSA0MzcuMjI5IDIxNy44NzVDNDQzLjcyNyAyMzcuMjUgNDUwLjEwMiAyNTUuNzUgNDU2LjIyNyAyNzJIMzk5Ljk4MVYzODRDMzk5Ljk4MSAzOTIuODM2IDM5Mi44MTcgNDAwIDM4My45ODEgNDAwSDMwMy45ODlWNDg4QzMwMy45ODkgNTAxLjI1NiAzMTQuNzMzIDUxMiAzMjcuOTg5IDUxMkMzNDEuMjQgNTEyIDM1MS45ODUgNTAxLjI1NiAzNTEuOTg1IDQ4OC4wMDJWNDQ4SDM4My45ODNDNDE5LjMyNiA0NDggNDQ3Ljk3NyA0MTkuMzQ4IDQ0Ny45NzcgMzg0LjAwNFYzMjBINDc5Ljk3NUM1MDMuMDk4IDMyMCA1MTguNTk2IDI5Ni4xMjUgNTA5LjIyMyAyNzVaTTMxNS4wOCAxMjIuOTM4QzI5NS4xOTYgMTA2LjI1OCAyNjUuNDE0IDEwOS4yODMgMjQ3LjA4NCAxMjcuNzMyTDIzOS45MDEgMTM1LjAyN0wyMzIuNzE3IDEyNy43MzJDMjE0LjQ5MiAxMDkuMjgzIDE4NC44MTkgMTA2LjI1OCAxNjQuODI0IDEyMi45MzhDMTQxLjkxOCAxNDIuMTE3IDE0MC42NjggMTc2LjQxNCAxNjEuMTc4IDE5Ny4yNjJMMjMxLjc4IDI2OC41NjFDMjM2LjM2MiAyNzMuMTQ2IDI0My42NDkgMjczLjE0NiAyNDguMjMxIDI2OC41NjFMMzE4LjgzMiAxOTcuMjYyQzMzOS4zNDYgMTc2LjQxNCAzMzguMDk2IDE0Mi4xMTcgMzE1LjA4IDEyMi45MzhaIi8+PC9zdmc+|width=32|height=32)
 */
const HeadSideHeart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M509.223 275C488.223 227.875 460.727 123.25 436.104 88.25C397.606 33.625 334.487 0 266.117 0H199.998C95.506 0 4.139 80.125 0.139 184.5C-2.111 244.375 23.137 298.125 64.008 334.875V488C64.008 501.256 74.754 512 88.008 512C101.26 512 112.004 501.256 112.004 488.002V313.375L96.006 299.125C49.135 257 33.012 187.375 63.883 126.625C89.256 76.75 143.127 48 198.998 48H266.117C318.114 48 366.985 73.375 396.856 115.875C408.106 131.75 424.854 181.5 437.229 217.875C443.727 237.25 450.102 255.75 456.227 272H399.981V384C399.981 392.836 392.817 400 383.981 400H303.989V488C303.989 501.256 314.733 512 327.989 512C341.24 512 351.985 501.256 351.985 488.002V448H383.983C419.326 448 447.977 419.348 447.977 384.004V320H479.975C503.098 320 518.596 296.125 509.223 275ZM315.08 122.938C295.196 106.258 265.414 109.283 247.084 127.732L239.901 135.027L232.717 127.732C214.492 109.283 184.819 106.258 164.824 122.938C141.918 142.117 140.668 176.414 161.178 197.262L231.78 268.561C236.362 273.146 243.649 273.146 248.231 268.561L318.832 197.262C339.346 176.414 338.096 142.117 315.08 122.938Z" />
    </Icon>
);

export default HeadSideHeart;

import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `violin` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/violin?s=solid violin}
 * @preview ![violin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQuOTUyIDk2LjAwOEM0NzguMjAyIDk2LjAwOCA0ODguOTU0IDg1LjI1OCA0ODguOTU0IDcyLjAwNEM0ODguOTU0IDU4Ljc1NCA0NzguMjAyIDQ4IDQ2NC45NTIgNDhDNDUxLjcgNDggNDQwLjk0OSA1OC43NTQgNDQwLjk0OSA3Mi4wMDRDNDQwLjk0OSA4NS4yNTggNDUxLjcgOTYuMDA4IDQ2NC45NTIgOTYuMDA4Wk01MTIuOTU2IDQ4QzUyNi4yMDggNDggNTM2Ljk1OCAzNy4yNSA1MzYuOTU4IDI0UzUyNi4yMDggMCA1MTIuOTU2IDBTNDg4Ljk1NCAxMC43NSA0ODguOTU0IDI0UzQ5OS43MDQgNDggNTEyLjk1NiA0OFpNMjMwLjU1NCA0MTUuOTA2TDIxNy4wNTIgNDAyLjQwMkMyMTEuNjc3IDM5Ny4wMjcgMjAzLjMwMiAzOTYuMTUyIDE5Ni45MjUgNDAwLjQwMkwxMjguMDQ0IDQ0Ni4yODFDMTI0LjA0NCA0NDkuMDMxIDEyMS40MTcgNDUzLjI4MSAxMjEuMDQyIDQ1OC4wMzFDMTIwLjU0MiA0NjIuNzgxIDEyMi4xNjcgNDY3LjUzMSAxMjUuNjY5IDQ3MC45MDZMMTYyLjA0NiA1MDcuMjg1QzE2NS40MjMgNTEwLjc4NSAxNzAuMTczIDUxMi40MSAxNzQuOTIzIDUxMS45MUMxNzkuNjczIDUxMS41MzUgMTgzLjkyNSA1MDguOTEgMTg2LjY3NSA1MDQuOTFMMjMyLjU1NCA0MzYuMDMxQzIzNi44MDQgNDI5LjY1NiAyMzUuOTI5IDQyMS4yODEgMjMwLjU1NCA0MTUuOTA2Wk02MDguOTY2IDk2LjAwOEM1OTUuNzE0IDk2LjAwOCA1ODQuOTY0IDEwNi43NTggNTg0Ljk2NCAxMjAuMDA4UzU5NS43MTQgMTQ0LjAwOCA2MDguOTY2IDE0NC4wMDhDNjIyLjIxNiAxNDQuMDA4IDYzMi45NjggMTMzLjI1OCA2MzIuOTY4IDEyMC4wMDhTNjIyLjIxNiA5Ni4wMDggNjA4Ljk2NiA5Ni4wMDhaTTQ1MC43IDIyNy41MTZMNjI4LjIxOCA1MC4wMDRDNjM0LjQ2OCA0My43NSA2MzQuNDY4IDMzLjUgNjI4LjIxOCAyNy4yNUw2MDUuNzE2IDQuNzVDNTk5LjQ2NCAtMS41IDU4OS4yMTQgLTEuNSA1ODIuOTYyIDQuNzVMNDA1LjQ0NyAxODIuMjYyQzM5My4zMiAxNzMuNTEyIDM3OS45NDMgMTY2LjUxMiAzNjUuMzE4IDE2My4xMzdDMzMyLjQzOSAxNTUuMzgzIDI5OS41NiAxNjIuMTM3IDI3Ni42ODMgMTg0LjEzN0MyNzkuNDMzIDE5Mi4wMTYgMjgwLjgwOCAyMDAuMTQxIDI4MC45MzMgMjA4LjM5MUMyODEuMDU4IDIzNy43NjYgMjY1LjA1OCAyNjQuNjQxIDIzOS4zMDQgMjc4LjY0NUMyMTMuNTUyIDI5Mi42NDUgMTgyLjE3MyAyOTEuNTIgMTU3LjY3MSAyNzUuNTJDMTU1LjE3MSAyNzcuMzk1IDE1Mi43OTYgMjc5LjM5NSAxNTAuNDIxIDI4MS41MkMxMTkuMTY3IDMxMi42NDggMTEzLjc5MiAzNjAuNzczIDEzMC45MTkgNDA2LjAzMUwxNzkuMTczIDM3My43NzNDMTk4LjE3NSAzNjEuMTQ4IDIyMy41NTQgMzYzLjY0OCAyMzkuODA0IDM3OS43NzdMMjUzLjE4MSAzOTMuMjc3QzI2OS4zMDggNDA5LjUzMSAyNzEuODA4IDQzNC43ODEgMjU5LjE4MSA0NTMuNzgxTDIyNy4wNTQgNTAyLjAzNUMyNzIuMTgzIDUxOS4xNjQgMzIwLjMxMiA1MTMuNjYgMzUxLjQ0MSA0ODIuNTMxQzM1My42OTEgNDgwLjE1NiAzNTUuNjkxIDQ3Ny42NTYgMzU3LjY5MSA0NzUuMDMxQzMzOS4wNjQgNDQ2Ljc4MSAzNDAuMzE0IDQwOS45MDYgMzYwLjgxNiAzODMuMDI3QzM4MS40NDMgMzU2LjE0OCA0MTYuNjk3IDM0NS4zOTggNDQ4LjgyNSAzNTYuMDIzQzQ3MC43MDIgMzMzLjE0OCA0NzcuNDUyIDMwMC4zOTggNDY5LjgyNyAyNjcuNjQxQzQ2Ni40NTIgMjUzLjAxNiA0NTkuNDUgMjM5LjY0MSA0NTAuNyAyMjcuNTE2Wk01NjAuOTYgMTQ0LjAwOEM1NDcuNzEgMTQ0LjAwOCA1MzYuOTU4IDE1NC43NTggNTM2Ljk1OCAxNjguMDEyQzUzNi45NTggMTgxLjI2MiA1NDcuNzEgMTkyLjAxNiA1NjAuOTYgMTkyLjAxNkM1NzQuMjEyIDE5Mi4wMTYgNTg0Ljk2NCAxODEuMjYyIDU4NC45NjQgMTY4LjAxMkM1ODQuOTY0IDE1NC43NTggNTc0LjIxMiAxNDQuMDA4IDU2MC45NiAxNDQuMDA4Wk0zMzcuOTcxIDcuMDMxQzMyOC41OTUgLTIuMzQ0IDMxMy40MDYgLTIuMzQ0IDMwNC4wMyA3LjAzMUwwIDMxMS4wMzJDLTkuMzc2IDMyMC40MDcgLTkuMzc2IDMzNS41OTUgMCAzNDQuOTdDNC42ODggMzQ5LjY1NyAxMC44MjkgMzUyLjAwMSAxNi45NyAzNTIuMDAxUzI5LjI1MyAzNDkuNjU3IDMzLjk0MSAzNDQuOTdMMzM3Ljk3MSA0MC45NjlDMzQ3LjM0NiAzMS41OTQgMzQ3LjM0NiAxNi40MDYgMzM3Ljk3MSA3LjAzMVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Violin(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M464.952 96.008C478.202 96.008 488.954 85.258 488.954 72.004C488.954 58.754 478.202 48 464.952 48C451.7 48 440.949 58.754 440.949 72.004C440.949 85.258 451.7 96.008 464.952 96.008ZM512.956 48C526.208 48 536.958 37.25 536.958 24S526.208 0 512.956 0S488.954 10.75 488.954 24S499.704 48 512.956 48ZM230.554 415.906L217.052 402.402C211.677 397.027 203.302 396.152 196.925 400.402L128.044 446.281C124.044 449.031 121.417 453.281 121.042 458.031C120.542 462.781 122.167 467.531 125.669 470.906L162.046 507.285C165.423 510.785 170.173 512.41 174.923 511.91C179.673 511.535 183.925 508.91 186.675 504.91L232.554 436.031C236.804 429.656 235.929 421.281 230.554 415.906ZM608.966 96.008C595.714 96.008 584.964 106.758 584.964 120.008S595.714 144.008 608.966 144.008C622.216 144.008 632.968 133.258 632.968 120.008S622.216 96.008 608.966 96.008ZM450.7 227.516L628.218 50.004C634.468 43.75 634.468 33.5 628.218 27.25L605.716 4.75C599.464 -1.5 589.214 -1.5 582.962 4.75L405.447 182.262C393.32 173.512 379.943 166.512 365.318 163.137C332.439 155.383 299.56 162.137 276.683 184.137C279.433 192.016 280.808 200.141 280.933 208.391C281.058 237.766 265.058 264.641 239.304 278.645C213.552 292.645 182.173 291.52 157.671 275.52C155.171 277.395 152.796 279.395 150.421 281.52C119.167 312.648 113.792 360.773 130.919 406.031L179.173 373.773C198.175 361.148 223.554 363.648 239.804 379.777L253.181 393.277C269.308 409.531 271.808 434.781 259.181 453.781L227.054 502.035C272.183 519.164 320.312 513.66 351.441 482.531C353.691 480.156 355.691 477.656 357.691 475.031C339.064 446.781 340.314 409.906 360.816 383.027C381.443 356.148 416.697 345.398 448.825 356.023C470.702 333.148 477.452 300.398 469.827 267.641C466.452 253.016 459.45 239.641 450.7 227.516ZM560.96 144.008C547.71 144.008 536.958 154.758 536.958 168.012C536.958 181.262 547.71 192.016 560.96 192.016C574.212 192.016 584.964 181.262 584.964 168.012C584.964 154.758 574.212 144.008 560.96 144.008ZM337.971 7.031C328.595 -2.344 313.406 -2.344 304.03 7.031L0 311.032C-9.376 320.407 -9.376 335.595 0 344.97C4.688 349.657 10.829 352.001 16.97 352.001S29.253 349.657 33.941 344.97L337.971 40.969C347.346 31.594 347.346 16.406 337.971 7.031Z" />
        </Icon>
    </>
}
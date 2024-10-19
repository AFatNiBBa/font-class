
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `face-grin-tears` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-tears?s=light face-grin-tears}
 * @preview ![face-grin-tears](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MjMuODM2IDI1My43NUM2MDguNDI1IDIzOC4zMjggNTU4Ljc1NiAyMjguNjA5IDUzMC41MjkgMjI0LjE4OEM1MjUuNDk3IDIyMy4zNzUgNTIwLjM3MSAyMjUuMDc4IDUxNi43NDUgMjI4LjY4OFM1MTEuNDYyIDIzNy40MjIgNTEyLjI0MyAyNDIuNDg0QzUxNi42NTEgMjcwLjU5NCA1MjYuMzcyIDMyMC4wNzggNTQxLjkwOCAzMzUuNTQ3QzU1Mi4zNzkgMzQ2LjEyNSA1NjYuNTA4IDM1MS45NjkgNTgxLjY2OCAzNTJINTgxLjc2MkM1OTcuMjY2IDM1MiA2MTEuODY0IDM0NS45MDYgNjIyLjkyOSAzMzQuODI4QzYyMi45NjEgMzM0LjgxMiA2MjIuOTYxIDMzNC43OTcgNjIyLjk2MSAzMzQuNzk3QzY0NS4zMSAzMTIuMzEyIDY0NS43NDggMjc1Ljk4NCA2MjMuODM2IDI1My43NVpNNjAwLjI2NyAzMTIuMjM0QzU5NS4yMzQgMzE3LjI1IDU4OC42NyAzMjAgNTgxLjc2MiAzMjBINTgxLjczMUM1NzUuMTY2IDMxOS45ODQgNTY5LjA3MSAzMTcuNSA1NjQuNjMyIDMxMy4wNDdDNTYyLjEgMzEwLjE3MiA1NTQuODggMjk1LjM1OSA1NDcuNzg0IDI1OS43MTlDNTgzLjYwNiAyNjYuNzgxIDU5OC4zOTEgMjczLjkyMiA2MDEuMTExIDI3Ni4yODFDNjEwLjY3NiAyODYgNjEwLjMwMSAzMDIuMTI1IDYwMC4yNjcgMzEyLjIzNFpNMTIzLjI2NCAyMjguNjg4QzExOS42MzggMjI1LjA3OCAxMTQuNDggMjIzLjM3NSAxMDkuNDc5IDIyNC4xODhDODEuMjUzIDIyOC42MDkgMzEuNTgzIDIzOC4zMjggMTYuMTczIDI1My43NUwxNi4wNzkgMjUzLjg0NEMtNS43MzkgMjc1Ljk4NCAtNS4zMDIgMzEyLjMxMiAxNy4wNzkgMzM0LjgyOEMyOC4xNDUgMzQ1LjkwNiA0Mi43NDIgMzUyIDU4LjI0NyAzNTJINTguMzRDNzMuNTAxIDM1MS45NjkgODcuNjI5IDM0Ni4xMjUgOTguMDcgMzM1LjYwOUMxMTMuNjM2IDMyMC4wNzggMTIzLjM1OCAyNzAuNTk0IDEyNy43NjUgMjQyLjQ4NEMxMjguNTQ3IDIzNy40MjIgMTI2Ljg5IDIzMi4yOTcgMTIzLjI2NCAyMjguNjg4Wk03NS40MDcgMzEzLjAxNkM3MC45MzcgMzE3LjUgNjQuODQyIDMxOS45ODQgNTguMjc4IDMyMEg1OC4yNDdDNTEuMzA3IDMyMCA0NC43NDMgMzE3LjIzNCAzOS43NDIgMzEyLjIzNEMyOS43NyAzMDIuMTg4IDI5LjMzMyAyODYuMTU2IDM4Ljc3MyAyNzYuNDIyQzQxLjc0MiAyNzMuODc1IDU2LjYyMSAyNjYuNzUgOTIuMjI0IDI1OS43MTlDODUuMTI5IDI5NS4zNDQgNzcuOTA4IDMxMC4xNTYgNzUuNDA3IDMxMy4wMTZaTTE3Ni4yMjcgMzIyLjc1QzE4NS40MzMgMzc3Ljc1IDI1OS40NDEgNDE2IDMyMC4xMjUgNDE2QzM4MC42ODkgNDE2IDQ1NC42OTcgMzc3Ljc1IDQ2My45MDIgMzIyLjc1QzQ2NC44NzEgMzE3LjI1IDQ2Mi44MTIgMzExLjYyNSA0NTguNjk0IDMwNy44NzVDNDU0LjMzMyAzMDQuMjUgNDQ4LjM5OCAzMDMgNDQzLjE5IDMwNC43NUM0MTIuOTA4IDMxNC41IDM2Ny45NyAzMjAgMzIwLjAwNCAzMjBTMjI3LjEgMzE0LjUgMTk2LjgxOSAzMDQuNzVDMTkxLjYxIDMwMy4xMjUgMTg1Ljc5NiAzMDQuMjUgMTgxLjU1NyAzMDcuODc1QzE3Ny4zMTggMzExLjYyNSAxNzUuMzggMzE3LjEyNSAxNzYuMjI3IDMyMi43NVpNNDE4LjYwMSAzNDMuNzVDMzk3LjA0MSAzNjcuNzUgMzU1LjAxIDM4NCAzMjAuMDA0IDM4NFMyNDIuOTY4IDM2Ny43NSAyMjEuNTI5IDM0My43NUMyNzguOTQyIDM1NC41IDM2MS4wNjYgMzU0LjUgNDE4LjYwMSAzNDMuNzVaTTM1OS4wMDcgMjI4TDM2OC41NzYgMjExQzM3Ni4yMDcgMTk3LjI1IDM4Ny43MTQgMTg5LjM3NSA0MDAuMDY5IDE4OS4zNzVDNDEyLjMwMiAxODkuMzc1IDQyMy44MDkgMTk3LjI1IDQzMS41NjIgMjExTDQ0MS4wMDkgMjI4QzQ0My4xOSAyMzEuNzUgNDQ3LjE4NyAyMzIuNzUgNDUwLjMzNiAyMzEuNzVDNDUzLjk3IDIzMC42MjUgNDU2LjM5MiAyMjcuMjUgNDU2LjAyOSAyMjMuMzc1QzQ1Mi43NTkgMTgxLjI1IDQyMy44MDkgMTUyIDQwMC4wNjkgMTUyQzM3Ni4yMDcgMTUyIDM0Ny4yNTggMTgxLjI1IDM0My45ODcgMjIzLjM3NUMzNDMuNzQ1IDIyNy4xMjUgMzQ2LjE2OCAyMzAuNjI1IDM0OS42OCAyMzEuNzVDMzUzLjA3MiAyMzIuNzUgMzU3LjA2OSAyMzEuMjUgMzU5LjAwNyAyMjhaTTE5OC45OTkgMjI4TDIwOC40NDcgMjExQzIxNi4xOTkgMTk3LjI1IDIyNy43MDYgMTg5LjM3NSAyMzkuOTQgMTg5LjM3NUMyNTIuMjk1IDE4OS4zNzUgMjYzLjgwMiAxOTcuMjUgMjcxLjQzMyAyMTFMMjgxLjAwMiAyMjhDMjgzLjA2MSAyMzEuNzUgMjg3LjE3OSAyMzIuNzUgMjkwLjMyOCAyMzEuNzVDMjkzLjg0MSAyMzAuNjI1IDI5Ni4yNjQgMjI3LjI1IDI5Ni4wMjEgMjIzLjM3NUMyOTIuNzUxIDE4MS4yNSAyNjMuODAyIDE1MiAyMzkuOTQgMTUyQzIxNi4xOTkgMTUyIDE4Ny4yNSAxODEuMjUgMTgzLjk4IDIyMy4zNzVDMTgzLjYxNiAyMjcuMTI1IDE4Ni4wMzkgMjMwLjYyNSAxODkuNjcyIDIzMS43NUMxOTMuMDY0IDIzMi43NSAxOTcuMDYxIDIzMS4yNSAxOTguOTk5IDIyOFpNNTIwLjMwOCAzNTcuNzM0QzUxMi44NjkgMzUzLjE3MiA1MDIuOTYgMzU1LjYwOSA0OTguMzMzIDM2My4xODhDNDYwLjI5MiA0MjYuMzEyIDM5My42NDkgNDY0IDMyMC4wMDQgNDY0UzE3OS43MTcgNDI2LjMxMiAxNDEuNjc1IDM2My4xNzJDMTM3LjA4IDM1NS42MDkgMTI3LjIwMyAzNTMuMTcyIDExOS43MDEgMzU3LjcxOUMxMTIuMTM2IDM2Mi4yODEgMTA5LjY5OCAzNzIuMTA5IDExNC4yMyAzNzkuNjcyQzE1OC4xMTcgNDUyLjUxNiAyMzUuMDQ0IDQ5NiAzMjAuMDA0IDQ5NlM0ODEuODkxIDQ1Mi41MTYgNTI1Ljc3OCAzNzkuNjg4QzUzMC4zMTEgMzcyLjEyNSA1MjcuODcyIDM2Mi4yOTcgNTIwLjMwOCAzNTcuNzM0Wk0xMDAuNjY0IDIwNy4zMjhDMTA5LjI5MiAyMDkuODU5IDExOC4wNzUgMjA1LjAzMSAxMjAuNTc2IDE5Ni41NjJDMTQ2LjYxNCAxMDkuMDk0IDIyOC42MDUgNDggMzIwLjAwNCA0OFM0OTMuMzk1IDEwOS4wOTQgNTE5LjQzMyAxOTYuNTYyQzUyMS40OTYgMjAzLjUxNiA1MjcuODcyIDIwOCA1MzQuNzgxIDIwOEM1MzYuMjgxIDIwOCA1MzcuODEzIDIwNy43ODEgNTM5LjM0NCAyMDcuMzI4QzU0Ny44MTUgMjA0LjgxMiA1NTIuNjI5IDE5NS45MDYgNTUwLjEyOCAxODcuNDM4QzUyMC4wODkgODYuNSA0MjUuNDM5IDE2IDMyMC4wMDQgMTZTMTE5LjkxOSA4Ni41IDg5Ljg4IDE4Ny40MzhDODcuMzc5IDE5NS45MDYgOTIuMTkzIDIwNC44MTIgMTAwLjY2NCAyMDcuMzI4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FaceGrinTears(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M623.836 253.75C608.425 238.328 558.756 228.609 530.529 224.188C525.497 223.375 520.371 225.078 516.745 228.688S511.462 237.422 512.243 242.484C516.651 270.594 526.372 320.078 541.908 335.547C552.379 346.125 566.508 351.969 581.668 352H581.762C597.266 352 611.864 345.906 622.929 334.828C622.961 334.812 622.961 334.797 622.961 334.797C645.31 312.312 645.748 275.984 623.836 253.75ZM600.267 312.234C595.234 317.25 588.67 320 581.762 320H581.731C575.166 319.984 569.071 317.5 564.632 313.047C562.1 310.172 554.88 295.359 547.784 259.719C583.606 266.781 598.391 273.922 601.111 276.281C610.676 286 610.301 302.125 600.267 312.234ZM123.264 228.688C119.638 225.078 114.48 223.375 109.479 224.188C81.253 228.609 31.583 238.328 16.173 253.75L16.079 253.844C-5.739 275.984 -5.302 312.312 17.079 334.828C28.145 345.906 42.742 352 58.247 352H58.34C73.501 351.969 87.629 346.125 98.07 335.609C113.636 320.078 123.358 270.594 127.765 242.484C128.547 237.422 126.89 232.297 123.264 228.688ZM75.407 313.016C70.937 317.5 64.842 319.984 58.278 320H58.247C51.307 320 44.743 317.234 39.742 312.234C29.77 302.188 29.333 286.156 38.773 276.422C41.742 273.875 56.621 266.75 92.224 259.719C85.129 295.344 77.908 310.156 75.407 313.016ZM176.227 322.75C185.433 377.75 259.441 416 320.125 416C380.689 416 454.697 377.75 463.902 322.75C464.871 317.25 462.812 311.625 458.694 307.875C454.333 304.25 448.398 303 443.19 304.75C412.908 314.5 367.97 320 320.004 320S227.1 314.5 196.819 304.75C191.61 303.125 185.796 304.25 181.557 307.875C177.318 311.625 175.38 317.125 176.227 322.75ZM418.601 343.75C397.041 367.75 355.01 384 320.004 384S242.968 367.75 221.529 343.75C278.942 354.5 361.066 354.5 418.601 343.75ZM359.007 228L368.576 211C376.207 197.25 387.714 189.375 400.069 189.375C412.302 189.375 423.809 197.25 431.562 211L441.009 228C443.19 231.75 447.187 232.75 450.336 231.75C453.97 230.625 456.392 227.25 456.029 223.375C452.759 181.25 423.809 152 400.069 152C376.207 152 347.258 181.25 343.987 223.375C343.745 227.125 346.168 230.625 349.68 231.75C353.072 232.75 357.069 231.25 359.007 228ZM198.999 228L208.447 211C216.199 197.25 227.706 189.375 239.94 189.375C252.295 189.375 263.802 197.25 271.433 211L281.002 228C283.061 231.75 287.179 232.75 290.328 231.75C293.841 230.625 296.264 227.25 296.021 223.375C292.751 181.25 263.802 152 239.94 152C216.199 152 187.25 181.25 183.98 223.375C183.616 227.125 186.039 230.625 189.672 231.75C193.064 232.75 197.061 231.25 198.999 228ZM520.308 357.734C512.869 353.172 502.96 355.609 498.333 363.188C460.292 426.312 393.649 464 320.004 464S179.717 426.312 141.675 363.172C137.08 355.609 127.203 353.172 119.701 357.719C112.136 362.281 109.698 372.109 114.23 379.672C158.117 452.516 235.044 496 320.004 496S481.891 452.516 525.778 379.688C530.311 372.125 527.872 362.297 520.308 357.734ZM100.664 207.328C109.292 209.859 118.075 205.031 120.576 196.562C146.614 109.094 228.605 48 320.004 48S493.395 109.094 519.433 196.562C521.496 203.516 527.872 208 534.781 208C536.281 208 537.813 207.781 539.344 207.328C547.815 204.812 552.629 195.906 550.128 187.438C520.089 86.5 425.439 16 320.004 16S119.919 86.5 89.88 187.438C87.379 195.906 92.193 204.812 100.664 207.328Z" />
        </Icon>
    </>
}
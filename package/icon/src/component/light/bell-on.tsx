
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bell-on` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bell-on?s=light bell-on}
 * @preview ![bell-on](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MC44NzUgMzAuMjVMMTA0Ljg3NSA2Mi4yNUMxMDcuMTI1IDYzLjM3NSAxMDkuNSA2NCAxMTIgNjRDMTE5LjM3NSA2NCAxMjUuODc1IDU4Ljg3NSAxMjcuNjI1IDUxLjYyNUMxMjkuMjUgNDQuNSAxMjUuNzUgMzcgMTE5LjEyNSAzMy43NUw1NS4xMjUgMS43NUM0Ny4yNSAtMi4yNSAzNy42MjUgMC44NzUgMzMuNzUgOC44NzVDMjkuNzUgMTYuNzUgMzIuODc1IDI2LjM3NSA0MC44NzUgMzAuMjVaTTUyOCA2NEM1MzAuNSA2NCA1MzIuODc1IDYzLjM3NSA1MzUuMTI1IDYyLjI1TDU5OS4xMjUgMzAuMjVDNjA3LjEyNSAyNi4zNzUgNjEwLjI1IDE2Ljc1IDYwNi4yNSA4Ljg3NUM2MDIuMzc1IDAuODc1IDU5Mi43NSAtMi4yNSA1ODQuODc1IDEuNzVMNTIwLjg3NSAzMy43NUM1MTQuMjUgMzcgNTEwLjc1IDQ0LjUgNTEyLjM3NSA1MS42MjVDNTE0LjEyNSA1OC44NzUgNTIwLjYyNSA2NCA1MjggNjRaTTgwIDE2MEgxNkM3LjEyNSAxNjAgMCAxNjcuMTI1IDAgMTc2UzcuMTI1IDE5MiAxNiAxOTJIODBDODguODc1IDE5MiA5NiAxODQuODc1IDk2IDE3NlM4OC44NzUgMTYwIDgwIDE2MFpNNjI0IDE2MEg1NjBDNTUxLjEyNSAxNjAgNTQ0IDE2Ny4xMjUgNTQ0IDE3NlM1NTEuMTI1IDE5MiA1NjAgMTkySDYyNEM2MzIuODc1IDE5MiA2NDAgMTg0Ljg3NSA2NDAgMTc2UzYzMi44NzUgMTYwIDYyNCAxNjBaTTM2OC4yOTUgNDQ4QzM2MC44NTcgNDQ4IDM1My43ODMgNDUyLjE0NiAzNTEuMjQ0IDQ1OC44NzlDMzQ2LjYwNCA0NzEuMTc2IDMzNC4zMzQgNDgwIDMxOS45OTQgNDgwUzI5My4zODUgNDcxLjE3NiAyODguNzQ0IDQ1OC44NzlDMjg2LjIwNSA0NTIuMTQ2IDI3OS4xMjkgNDQ4IDI3MS42OTMgNDQ4SDI3MS42OTFDMjYxLjA3OCA0NDggMjUzLjQ4IDQ1Ny45OTggMjU2Ljc2NiA0NjcuNzE3QzI2NS40MzIgNDkzLjM3MSAyOTAuNTI1IDUxMiAzMTkuOTk0IDUxMkMzNDkuNDYxIDUxMiAzNzQuNTU1IDQ5My4zNzEgMzgzLjIyMyA0NjcuNzE3QzM4Ni41MDYgNDU3Ljk5OCAzNzguOTEgNDQ4IDM2OC4yOTUgNDQ4Wk00ODAuMDA0IDE4NS44NzVDNDgwLjAwNCAxMDYuMjUgNDE2LjYyNyA0MS4zNzUgMzM2IDMzLjVWMTZDMzM2IDcuMTI1IDMyOC44NzUgMCAzMjAgMFMzMDQgNy4xMjUgMzA0IDE2VjMzLjVDMjIzLjM3MyA0MS4zNzUgMTU5Ljk5NiAxMDYuMjUgMTU5Ljk5NiAxODUuODc1QzE1OS45OTYgMjgwLjM3NSAxMzguNjE5IDMwOC4yNSAxMTAuNjE5IDMzNC43NUM5Ni42MTkgMzQ4LjEyNSA5Mi4yNDQgMzY4LjI1IDk5LjM2OSAzODZDMTA2LjYxOSA0MDQuMjUgMTI0LjExOSA0MTYgMTQzLjk5NCA0MTZINDk2LjAwNkM1MTUuODgxIDQxNiA1MzMuMzgxIDQwNC4yNSA1NDAuNjMxIDM4NkM1NDcuNzU2IDM2OC4yNSA1NDMuMzgxIDM0OC4xMjUgNTI5LjM4MSAzMzQuNzVDNTAxLjM4MSAzMDguMjUgNDgwLjAwNCAyODAuMzc1IDQ4MC4wMDQgMTg1Ljg3NVpNNDk2LjAwNiAzODRIMTQzLjk5NEMxMjkuNzQ0IDM4NCAxMjIuNjE5IDM2Ny41IDEzMi42MTkgMzU4QzE2Ny40OTYgMzI0Ljc1IDE5MS45OTYgMjg3LjYyNSAxOTEuOTk2IDE4NS44NzVDMTkxLjk5NiAxMTguNSAyNDkuMjQ4IDY0IDMyMCA2NFM0NDguMDA0IDExOC41IDQ0OC4wMDQgMTg1Ljg3NUM0NDguMDA0IDI4Ny4yNSA0NzIuMjU0IDMyNC42MjUgNTA3LjM4MSAzNThDNTE3LjM4MSAzNjcuNjI1IDUxMC4xMzEgMzg0IDQ5Ni4wMDYgMzg0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BellOn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M40.875 30.25L104.875 62.25C107.125 63.375 109.5 64 112 64C119.375 64 125.875 58.875 127.625 51.625C129.25 44.5 125.75 37 119.125 33.75L55.125 1.75C47.25 -2.25 37.625 0.875 33.75 8.875C29.75 16.75 32.875 26.375 40.875 30.25ZM528 64C530.5 64 532.875 63.375 535.125 62.25L599.125 30.25C607.125 26.375 610.25 16.75 606.25 8.875C602.375 0.875 592.75 -2.25 584.875 1.75L520.875 33.75C514.25 37 510.75 44.5 512.375 51.625C514.125 58.875 520.625 64 528 64ZM80 160H16C7.125 160 0 167.125 0 176S7.125 192 16 192H80C88.875 192 96 184.875 96 176S88.875 160 80 160ZM624 160H560C551.125 160 544 167.125 544 176S551.125 192 560 192H624C632.875 192 640 184.875 640 176S632.875 160 624 160ZM368.295 448C360.857 448 353.783 452.146 351.244 458.879C346.604 471.176 334.334 480 319.994 480S293.385 471.176 288.744 458.879C286.205 452.146 279.129 448 271.693 448H271.691C261.078 448 253.48 457.998 256.766 467.717C265.432 493.371 290.525 512 319.994 512C349.461 512 374.555 493.371 383.223 467.717C386.506 457.998 378.91 448 368.295 448ZM480.004 185.875C480.004 106.25 416.627 41.375 336 33.5V16C336 7.125 328.875 0 320 0S304 7.125 304 16V33.5C223.373 41.375 159.996 106.25 159.996 185.875C159.996 280.375 138.619 308.25 110.619 334.75C96.619 348.125 92.244 368.25 99.369 386C106.619 404.25 124.119 416 143.994 416H496.006C515.881 416 533.381 404.25 540.631 386C547.756 368.25 543.381 348.125 529.381 334.75C501.381 308.25 480.004 280.375 480.004 185.875ZM496.006 384H143.994C129.744 384 122.619 367.5 132.619 358C167.496 324.75 191.996 287.625 191.996 185.875C191.996 118.5 249.248 64 320 64S448.004 118.5 448.004 185.875C448.004 287.25 472.254 324.625 507.381 358C517.381 367.625 510.131 384 496.006 384Z" />
        </Icon>
    </>
}
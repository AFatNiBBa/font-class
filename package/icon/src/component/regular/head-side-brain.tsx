
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `head-side-brain` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/head-side-brain?s=regular head-side-brain}
 * @preview ![head-side-brain](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTMuNjMxIDE5MkMzMzQuNzU2IDE5MiAzNTIuMDA2IDE3NS41IDM1Mi4wMDYgMTU1LjI1QzM1Mi4wMDYgMTM0Ljg3NSAzMzQuNzU2IDExOC4zNzUgMzEzLjYzMSAxMTguMzc1SDMxMS4wMDZDMzA1Ljc1NiAxMDMuMTI1IDI5MS4zODEgOTIuODc1IDI3NS4yNTYgOTIuNzVDMjY4LjEzMSA5Mi43NSAyNjEuODgxIDk1LjI1IDI1Ni4xMzEgOTguNjI1QzI0OS4zODEgODcuNjI1IDIzNy43NTYgODAgMjI0LjAwNiA4MFMxOTguNjMxIDg3LjYyNSAxOTEuODgxIDk4LjYyNUMxODYuMTMxIDk1LjI1IDE3OS44ODEgOTIuNzUgMTcyLjc1NiA5Mi43NUMxNTEuNjMxIDkyLjc1IDEzNC4zODEgMTEwIDEzNC4zODEgMTMxLjI1QzExMy4yNTYgMTMxLjI1IDk2LjAwNiAxNDguMzc1IDk2LjAwNiAxNjkuNjI1Qzk2LjAwNiAxODYuNSAxMDcuMDA2IDIwMC4zNzUgMTIyLjEzMSAyMDUuNUMxMjIuMDA2IDIwNi4zNzUgMTIxLjYzMSAyMDcuMTI1IDEyMS42MzEgMjA4QzEyMS42MzEgMjI5LjI1IDEzOC43NTYgMjQ2LjM3NSAxNjAuMDA2IDI0Ni4zNzVDMTY0LjM4MSAyNDYuMjUgMTY4Ljc1NiAyNDUuMzc1IDE3Mi43NTYgMjQzLjg3NVYyOTQuMzc1QzE3Mi43NTYgMzA4LjUyNyAxODQuMjI5IDMyMCAxOTguMzgxIDMyMFMyMjQuMDA2IDMwOC41MjcgMjI0LjAwNiAyOTQuMzc1VjI0My44NzVDMjI4LjEzMSAyNDUuMzc1IDIzMi4zODEgMjQ2LjI1IDIzNi43NTYgMjQ2LjM3NUMyNTguMDA2IDI0Ni4zNzUgMjc1LjI1NiAyMjkuMjUgMjc1LjI1NiAyMDhDMjc1LjEzMSAyMDIuNSAyNzMuODgxIDE5NyAyNzEuNTA2IDE5MkgzMTMuNjMxWk01MDkuMjIzIDI3NUM0ODguMjIzIDIyNy44NzUgNDYwLjcyNyAxMjMuMjUgNDM2LjEwNCA4OC4yNUMzOTcuNjA2IDMzLjYyNSAzMzQuNDg3IDAgMjY2LjExNyAwSDE5OS45OThDOTUuNTA2IDAgNC4xMzkgODAuMTI1IDAuMTM5IDE4NC41Qy0yLjExMSAyNDQuMzc1IDIzLjEzNyAyOTguMTI1IDY0LjAwOCAzMzQuODc1VjQ4OEM2NC4wMDggNTAxLjI1NiA3NC43NTQgNTEyIDg4LjAwOCA1MTJDMTAxLjI2IDUxMiAxMTIuMDA0IDUwMS4yNTYgMTEyLjAwNCA0ODguMDAyVjMxMy4zNzVMOTYuMDA2IDI5OS4xMjVDNDkuMTM1IDI1NyAzMy4wMTIgMTg3LjM3NSA2My44ODMgMTI2LjYyNUM4OS4yNTYgNzYuNzUgMTQzLjEyNyA0OCAxOTguOTk4IDQ4SDI2Ni4xMTdDMzE4LjExNCA0OCAzNjYuOTg1IDczLjM3NSAzOTYuODU2IDExNS44NzVDNDA4LjEwNiAxMzEuNzUgNDI0Ljg1NCAxODEuNSA0MzcuMjI5IDIxNy44NzVDNDQzLjcyNyAyMzcuMjUgNDUwLjEwMiAyNTUuNzUgNDU2LjIyNyAyNzJIMzk5Ljk4MVYzODRDMzk5Ljk4MSAzOTIuODM2IDM5Mi44MTcgNDAwIDM4My45ODEgNDAwSDMwMy45ODlWNDg4QzMwMy45ODkgNTAxLjI1NiAzMTQuNzMzIDUxMiAzMjcuOTg5IDUxMkMzNDEuMjQgNTEyIDM1MS45ODUgNTAxLjI1NiAzNTEuOTg1IDQ4OC4wMDJWNDQ4SDM4My45ODNDNDE5LjMyNiA0NDggNDQ3Ljk3NyA0MTkuMzQ4IDQ0Ny45NzcgMzg0LjAwNFYzMjBINDc5Ljk3NUM1MDMuMDk4IDMyMCA1MTguNTk2IDI5Ni4xMjUgNTA5LjIyMyAyNzVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function HeadSideBrain(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M313.631 192C334.756 192 352.006 175.5 352.006 155.25C352.006 134.875 334.756 118.375 313.631 118.375H311.006C305.756 103.125 291.381 92.875 275.256 92.75C268.131 92.75 261.881 95.25 256.131 98.625C249.381 87.625 237.756 80 224.006 80S198.631 87.625 191.881 98.625C186.131 95.25 179.881 92.75 172.756 92.75C151.631 92.75 134.381 110 134.381 131.25C113.256 131.25 96.006 148.375 96.006 169.625C96.006 186.5 107.006 200.375 122.131 205.5C122.006 206.375 121.631 207.125 121.631 208C121.631 229.25 138.756 246.375 160.006 246.375C164.381 246.25 168.756 245.375 172.756 243.875V294.375C172.756 308.527 184.229 320 198.381 320S224.006 308.527 224.006 294.375V243.875C228.131 245.375 232.381 246.25 236.756 246.375C258.006 246.375 275.256 229.25 275.256 208C275.131 202.5 273.881 197 271.506 192H313.631ZM509.223 275C488.223 227.875 460.727 123.25 436.104 88.25C397.606 33.625 334.487 0 266.117 0H199.998C95.506 0 4.139 80.125 0.139 184.5C-2.111 244.375 23.137 298.125 64.008 334.875V488C64.008 501.256 74.754 512 88.008 512C101.26 512 112.004 501.256 112.004 488.002V313.375L96.006 299.125C49.135 257 33.012 187.375 63.883 126.625C89.256 76.75 143.127 48 198.998 48H266.117C318.114 48 366.985 73.375 396.856 115.875C408.106 131.75 424.854 181.5 437.229 217.875C443.727 237.25 450.102 255.75 456.227 272H399.981V384C399.981 392.836 392.817 400 383.981 400H303.989V488C303.989 501.256 314.733 512 327.989 512C341.24 512 351.985 501.256 351.985 488.002V448H383.983C419.326 448 447.977 419.348 447.977 384.004V320H479.975C503.098 320 518.596 296.125 509.223 275Z" />
        </Icon>
    </>
}
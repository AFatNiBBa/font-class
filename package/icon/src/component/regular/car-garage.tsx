
import { Icon } from "../../index";

/**
 * A component that renders the `car-garage` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/car-garage?s=regular car-garage}
 * @preview ![car-garage](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQuMDA3IDMzNkMyMTAuNzUzIDMzNiAyMDAuMDA3IDM0Ni43NDQgMjAwLjAwNyAzNjBDMjAwLjAwNyAzNzMuMjU0IDIxMC43NTMgMzg0IDIyNC4wMDcgMzg0UzI0OC4wMDcgMzczLjI1NCAyNDguMDA3IDM2MEMyNDguMDA3IDM0Ni43NDQgMjM3LjI2MSAzMzYgMjI0LjAwNyAzMzZaTTQxNi4wMDcgMzM2QzQwMi43NTMgMzM2IDM5Mi4wMDcgMzQ2Ljc0NCAzOTIuMDA3IDM2MEMzOTIuMDA3IDM3My4yNTQgNDAyLjc1MyAzODQgNDE2LjAwNyAzODRTNDQwLjAwNyAzNzMuMjU0IDQ0MC4wMDcgMzYwQzQ0MC4wMDcgMzQ2Ljc0NCA0MjkuMjYxIDMzNiA0MTYuMDA3IDMzNlpNNDkwLjQ0OCAyODQuMzgzTDQ3NS4xNjUgMjQ2LjE3NEw0NTguNjMyIDIwNC44MzhDNDQ3LjcyOCAxNzcuNTk2IDQyMS43MzIgMTYwIDM5Mi40IDE2MEgyNDcuNjE2QzIxOC4yODIgMTYwIDE5Mi4yODYgMTc3LjU5NiAxODEuMzg2IDIwNC44MjhMMTY0Ljg0OSAyNDYuMTc0TDE0OS41NjYgMjg0LjM4NUMxMjYuODg2IDMwMS45NTkgMTEyLjAwNyAzMjkuMTUyIDExMi4wMDcgMzYwVjQ4MEMxMTIuMDA3IDQ5Ny42NzIgMTI2LjMzMyA1MTIgMTQ0LjAwNyA1MTJTMTc2LjAwNyA0OTcuNjcyIDE3Ni4wMDcgNDgwVjQ0OEg0NjQuMDA3VjQ4MEM0NjQuMDA3IDQ5Ny42NzIgNDc4LjMzMyA1MTIgNDk2LjAwNyA1MTJTNTI4LjAwNyA0OTcuNjcyIDUyOC4wMDcgNDgwVjM2MEM1MjguMDA3IDMyOS4xNTIgNTEzLjEyOCAzMDEuOTU3IDQ5MC40NDggMjg0LjM4M1pNMjI1Ljk1IDIyMi42NjRDMjI5LjUxNSAyMTMuNzYgMjM4LjAxOSAyMDggMjQ3LjYxNiAyMDhIMzkyLjRDNDAxLjk5NyAyMDggNDEwLjUwMSAyMTMuNzYgNDE0LjA2NCAyMjIuNjY0TDQzMC41OTkgMjY0SDIwOS40MTdMMjI1Ljk1IDIyMi42NjRaTTQ4MC4wMDcgNDAwSDE2MC4wMDdWMzYwQzE2MC4wMDcgMzMzLjUzMyAxODEuNTQgMzEyIDIwOC4wMDcgMzEySDQzMi4wMDdDNDU4LjQ3NCAzMTIgNDgwLjAwNyAzMzMuNTMzIDQ4MC4wMDcgMzYwVjQwMFpNNjQwLjAxNCAxODQuMDEyQzY0MC4wMTQgMTc1LjQ4NCA2MzUuNDUxIDE2Ny4yMjcgNjI3LjQxMyAxNjIuODkxTDMzMS40MTMgMi44OTFDMzI3Ljg2NiAwLjk2OSAzMjMuOTM3IDAuMDA4IDMyMC4wMDcgMC4wMDhTMzEyLjE0OCAwLjk2OSAzMDguNjAxIDIuODkxTDEyLjYwMSAxNjIuODkxQzQuNTYzIDE2Ny4yMjcgMCAxNzUuNDg0IDAgMTg0LjAxMkMwIDE5Ni40OTMgMTAuMDY4IDIwOC4wMDQgMjQuMDM5IDIwOC4wMDRDMjcuODg5IDIwOC4wMDQgMzEuNzkyIDIwNy4wNzMgMzUuNDEzIDIwNS4xMDlMMzIwLjAwNyA1MS4yODFMNjA0LjYwMSAyMDUuMTA5QzYwOC4yMjYgMjA3LjA3OCA2MTIuMTMyIDIwOCA2MTUuOTkxIDIwOEM2MzAuMTUxIDIwOCA2NDAuMDE0IDE5Ni4zNjggNjQwLjAxNCAxODQuMDEyWiAiPjwvcGF0aD48L3N2Zz4=|width=32|height=32)
 */
const CarGarage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224.007 336C210.753 336 200.007 346.744 200.007 360C200.007 373.254 210.753 384 224.007 384S248.007 373.254 248.007 360C248.007 346.744 237.261 336 224.007 336ZM416.007 336C402.753 336 392.007 346.744 392.007 360C392.007 373.254 402.753 384 416.007 384S440.007 373.254 440.007 360C440.007 346.744 429.261 336 416.007 336ZM490.448 284.383L475.165 246.174L458.632 204.838C447.728 177.596 421.732 160 392.4 160H247.616C218.282 160 192.286 177.596 181.386 204.828L164.849 246.174L149.566 284.385C126.886 301.959 112.007 329.152 112.007 360V480C112.007 497.672 126.333 512 144.007 512S176.007 497.672 176.007 480V448H464.007V480C464.007 497.672 478.333 512 496.007 512S528.007 497.672 528.007 480V360C528.007 329.152 513.128 301.957 490.448 284.383ZM225.95 222.664C229.515 213.76 238.019 208 247.616 208H392.4C401.997 208 410.501 213.76 414.064 222.664L430.599 264H209.417L225.95 222.664ZM480.007 400H160.007V360C160.007 333.533 181.54 312 208.007 312H432.007C458.474 312 480.007 333.533 480.007 360V400ZM640.014 184.012C640.014 175.484 635.451 167.227 627.413 162.891L331.413 2.891C327.866 0.969 323.937 0.008 320.007 0.008S312.148 0.969 308.601 2.891L12.601 162.891C4.563 167.227 0 175.484 0 184.012C0 196.493 10.068 208.004 24.039 208.004C27.889 208.004 31.792 207.073 35.413 205.109L320.007 51.281L604.601 205.109C608.226 207.078 612.132 208 615.991 208C630.151 208 640.014 196.368 640.014 184.012Z " />
    </Icon>
);

export default CarGarage;
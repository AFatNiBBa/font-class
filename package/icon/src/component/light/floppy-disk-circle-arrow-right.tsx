
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `floppy-disk-circle-arrow-right` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disk-circle-arrow-right?s=light floppy-disk-circle-arrow-right}
 * @preview ![floppy-disk-circle-arrow-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNjYuNjk5IDQ0OEg4MEM1My40OSA0NDggMzIgNDI2LjUxIDMyIDQwMFYxMTJDMzIgOTEuMTY4IDQ1LjQxNiA3My41NzQgNjQgNjYuOTQ3VjE2MEM2NCAxNzcuNjcyIDc4LjMyNiAxOTIgOTYgMTkySDI4OEMzMDUuNjc0IDE5MiAzMjAgMTc3LjY3MiAzMjAgMTYwVjcyLjAyQzMyMi42NjQgNzMuNzc3IDMyNS4xNjYgNzUuNzkxIDMyNy40MzggNzguMDYzTDQwMS45MzggMTUyLjU2M0M0MDguMDY0IDE1OC42OTkgNDEyLjMzNCAxNjYuMTkzIDQxNC40NTcgMTc0LjM2OUM0MTYuMzA1IDE4MS40ODIgNDIyLjU5NCAxODYuNTE2IDQyOS45NDEgMTg2LjUxNkM0NDAuNTU1IDE4Ni41MTYgNDQ4LjA4NCAxNzYuNDE2IDQ0NS40MDIgMTY2LjE0OEM0NDEuODU3IDE1Mi41NjggNDM0Ljc1OCAxNDAuMTIxIDQyNC41NjMgMTI5LjkzOEwzNTAuMDYzIDU1LjQzOEMzMzQuOTM4IDQwLjMyOCAzMTQuODc1IDMyIDI5My41IDMySDgwQzM1LjgxNiAzMiAwIDY3LjgxNiAwIDExMlY0MDBDMCA0NDQuMTgyIDM1LjgxNiA0ODAgODAgNDgwSDI2Ni42OTlDMjc5LjQwNCA0ODAgMjg3LjA0MSA0NjUuOTAyIDI4MC4xMDIgNDU1LjI2QzI3Ny4xNDggNDUwLjczIDI3Mi4xMDcgNDQ4IDI2Ni42OTkgNDQ4Wk05NiA2NEgyODhWMTYwSDk2VjY0Wk0yMjQgMjcyQzIzNS45NDcgMjcyIDI0Ni44NSAyNzYuNDAyIDI1NS4yMjcgMjgzLjY2NEMyNjIuOTU3IDI5MC4zNjUgMjc0LjU2MSAyODguNzc5IDI3OS42NTIgMjc5LjkwNkMyNzkuNzEzIDI3OS43OTkgMjc5Ljc3NSAyNzkuNjkzIDI3OS44MzYgMjc5LjU4NkMyODMuNTQ3IDI3My4xNTIgMjgyLjAzNSAyNjUuMDIxIDI3Ni40OCAyNjAuMDk0QzI2Mi40NjMgMjQ3LjY2MiAyNDQuMTg2IDI0MCAyMjQgMjQwQzE3OS45NzUgMjQwIDE0NC4xNiAyNzUuNzMgMTQ0IDMxOS43MDNDMTQzLjg1NSAzNTkuMzI2IDE3NC4yMjMgMzkzLjgxMyAyMTMuNDY5IDM5OS4yNjhDMjI0LjgwNyA0MDAuODQ0IDIzNS42MDcgMzk5Ljc5OSAyNDUuNjMxIDM5Ni44NjVDMjUyLjYyNSAzOTQuODIgMjU3LjM2MyAzODguMzEzIDI1Ny4wMzUgMzgxLjAzMUMyNTcuMDI3IDM4MC44ODMgMjU3LjAyMSAzODAuNzMyIDI1Ny4wMTYgMzgwLjU4NEMyNTYuNTYyIDM3MC4yNDQgMjQ2LjU0MSAzNjMuNTM5IDIzNi41NjYgMzY2LjI5OUMyMjkuMTI1IDM2OC4zNTcgMjIwLjk1MyAzNjguNjQzIDIxMi40ODQgMzY2LjYyOUMxOTQuODI2IDM2Mi40MjggMTgwLjcxNyAzNDcuOTM2IDE3Ny4wNDkgMzMwLjE2QzE3MC42NzYgMjk5LjI3MSAxOTQuMjExIDI3MiAyMjQgMjcyWk00MzIuMDAyIDIyNEMzNTIuNDYzIDIyNCAyODggMjg4LjQ2MyAyODggMzY4UzM1Mi40NjMgNTEyIDQzMi4wMDIgNTEyQzUxMS41MzcgNTEyIDU3NiA0NDcuNTM3IDU3NiAzNjhTNTExLjUzNyAyMjQgNDMyLjAwMiAyMjRaTTQzMi4wMDIgNDgwQzM3MC4yNDQgNDgwIDMyMCA0MjkuNzU4IDMyMCAzNjhTMzcwLjI0NCAyNTYgNDMyLjAwMiAyNTZDNDkzLjc1OCAyNTYgNTQ0IDMwNi4yNDIgNTQ0IDM2OFM0OTMuNzU4IDQ4MCA0MzIuMDAyIDQ4MFpNNTA3LjMxMiAzNTYuNjg4TDQ1MS4zMTIgMzAwLjY4OEM0NDUuMDYyIDI5NC40MzggNDM0LjkzNyAyOTQuNDM4IDQyOC42ODggMzAwLjY4OFM0MjIuNDM4IDMxNy4wNjMgNDI4LjY4OCAzMjMuMzEyTDQ1Ny4zNzUgMzUySDM2OEMzNTkuMTY0IDM1MiAzNTIgMzU5LjE2NCAzNTIgMzY4UzM1OS4xNjQgMzg0IDM2OCAzODRINDU3LjM3NUw0MjguNjg4IDQxMi42ODhDNDIyLjQzOCA0MTguOTM4IDQyMi40MzggNDI5LjA2MyA0MjguNjg4IDQzNS4zMTJDNDMxLjgxMiA0MzguNDM4IDQzNS45MDYgNDQwIDQ0MCA0NDBTNDQ4LjE4OCA0MzguNDM4IDQ1MS4zMTIgNDM1LjMxMkw1MDcuMzEyIDM3OS4zMTJDNTEzLjU2MiAzNzMuMDYyIDUxMy41NjIgMzYyLjkzOCA1MDcuMzEyIDM1Ni42ODhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FloppyDiskCircleArrowRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M266.699 448H80C53.49 448 32 426.51 32 400V112C32 91.168 45.416 73.574 64 66.947V160C64 177.672 78.326 192 96 192H288C305.674 192 320 177.672 320 160V72.02C322.664 73.777 325.166 75.791 327.438 78.063L401.938 152.563C408.064 158.699 412.334 166.193 414.457 174.369C416.305 181.482 422.594 186.516 429.941 186.516C440.555 186.516 448.084 176.416 445.402 166.148C441.857 152.568 434.758 140.121 424.563 129.938L350.063 55.438C334.938 40.328 314.875 32 293.5 32H80C35.816 32 0 67.816 0 112V400C0 444.182 35.816 480 80 480H266.699C279.404 480 287.041 465.902 280.102 455.26C277.148 450.73 272.107 448 266.699 448ZM96 64H288V160H96V64ZM224 272C235.947 272 246.85 276.402 255.227 283.664C262.957 290.365 274.561 288.779 279.652 279.906C279.713 279.799 279.775 279.693 279.836 279.586C283.547 273.152 282.035 265.021 276.48 260.094C262.463 247.662 244.186 240 224 240C179.975 240 144.16 275.73 144 319.703C143.855 359.326 174.223 393.813 213.469 399.268C224.807 400.844 235.607 399.799 245.631 396.865C252.625 394.82 257.363 388.313 257.035 381.031C257.027 380.883 257.021 380.732 257.016 380.584C256.562 370.244 246.541 363.539 236.566 366.299C229.125 368.357 220.953 368.643 212.484 366.629C194.826 362.428 180.717 347.936 177.049 330.16C170.676 299.271 194.211 272 224 272ZM432.002 224C352.463 224 288 288.463 288 368S352.463 512 432.002 512C511.537 512 576 447.537 576 368S511.537 224 432.002 224ZM432.002 480C370.244 480 320 429.758 320 368S370.244 256 432.002 256C493.758 256 544 306.242 544 368S493.758 480 432.002 480ZM507.312 356.688L451.312 300.688C445.062 294.438 434.937 294.438 428.688 300.688S422.438 317.063 428.688 323.312L457.375 352H368C359.164 352 352 359.164 352 368S359.164 384 368 384H457.375L428.688 412.688C422.438 418.938 422.438 429.063 428.688 435.312C431.812 438.438 435.906 440 440 440S448.188 438.438 451.312 435.312L507.312 379.312C513.562 373.062 513.562 362.938 507.312 356.688Z" />
        </Icon>
    </>
}
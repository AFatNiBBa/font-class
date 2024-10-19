
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `scythe` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scythe?s=light scythe}
 * @preview ![scythe](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzkuNjkyIDE5LjEyNUw1NDMuNjkyIDQ5OS4xMjVDNTQyLjE3NyA1MDYuNzUgNTM1LjQ4OSA1MTIgNTI4LjAyIDUxMkM1MjYuOTg5IDUxMiA1MjUuOTI3IDUxMS45MDYgNTI0Ljg2NCA1MTEuNjg4QzUxNi4yMDggNTA5Ljk2OSA1MTAuNTgzIDUwMS41MzEgNTEyLjMxNyA0OTIuODc1TDU0My42OTQgMzM2SDQwMC4wMDFDMzkxLjE1NyAzMzYgMzg0LjAwMSAzMjguODQ0IDM4NC4wMDEgMzIwUzM5MS4xNTcgMzA0IDQwMC4wMDEgMzA0SDU1MC4wOTNMNjA0LjQ4OSAzMi4wMzFDNTU3LjgxNyAzMi4wMzEgMzM3LjQxMSAzMiAzMzcuNDExIDMyQzIyMi4yMDggMzIgMTEzLjI2OCA4Ni41MzEgNDYuMjg0IDE3Nkg1MTIuMDA1QzUyMC44NDkgMTc2IDUyOC4wMDUgMTgzLjE1NiA1MjguMDA1IDE5MlM1MjAuODQ5IDIwOCA1MTIuMDA1IDIwOEgxNi4wMDNDMTAuMTkgMjA4IDQuODQ3IDIwNC44NDQgMi4wMTggMTk5Ljc4MUMtMC44MSAxOTQuNjg4IC0wLjY1MyAxODguNSAyLjQwOSAxODMuNTYzQzcyLjcyMiA3MC4zNDQgMjAxLjA5OSAwIDMzNy40MTEgMEMzMzcuNDExIDAgNTg4LjUyIDAuMDYyIDYyMy45ODkgMEg2MjQuMDA1QzYyOC44MDIgMCA2MzMuMzMzIDIuMTU2IDYzNi4zNjQgNS44NDRDNjM5LjQxMSA5LjU2MiA2NDAuNjMgMTQuNDM4IDYzOS42OTIgMTkuMTI1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Scythe(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M639.692 19.125L543.692 499.125C542.177 506.75 535.489 512 528.02 512C526.989 512 525.927 511.906 524.864 511.688C516.208 509.969 510.583 501.531 512.317 492.875L543.694 336H400.001C391.157 336 384.001 328.844 384.001 320S391.157 304 400.001 304H550.093L604.489 32.031C557.817 32.031 337.411 32 337.411 32C222.208 32 113.268 86.531 46.284 176H512.005C520.849 176 528.005 183.156 528.005 192S520.849 208 512.005 208H16.003C10.19 208 4.847 204.844 2.018 199.781C-0.81 194.688 -0.653 188.5 2.409 183.563C72.722 70.344 201.099 0 337.411 0C337.411 0 588.52 0.062 623.989 0H624.005C628.802 0 633.333 2.156 636.364 5.844C639.411 9.562 640.63 14.438 639.692 19.125Z" />
        </Icon>
    </>
}
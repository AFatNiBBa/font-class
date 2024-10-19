
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hand-holding-seedling` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-seedling?s=regular hand-holding-seedling}
 * @preview ![hand-holding-seedling](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTAuNzg1IDE5MkgyNjQuMDM3VjIzMkMyNjQuMDM3IDI0NS4yIDI3NC44MzkgMjU2IDI4OC4wNCAyNTZIMjg4LjA0MUMzMDEuMjQyIDI1NiAzMTIuMDQ0IDI0NS4yIDMxMi4wNDQgMjMyVjE5MkgzMjUuMjk2QzQxMC42ODMgMTkyIDQ4MC4wNjggMTE2LjYyNSA0ODAuMDY4IDI0VjI0QzQ4MC4wNjggMTAuNzQ1IDQ2OS4zMjEgMCA0NTYuMDY0IDBINDE4LjgwOUMzNjMuNTUxIDAgMzE1LjQxOSAzMS43NSAyODguMDQgNzlDMjYwLjY2MiAzMS43NSAyMTIuNTMgMCAxNTcuMjcyIDBIMTIwLjAxN0MxMDYuNzYgMCA5Ni4wMTQgMTAuNzQ1IDk2LjAxNCAyNFYyNEM5Ni4wMTQgMTE2LjYyNSAxNjUuMzk4IDE5MiAyNTAuNzg1IDE5MlpNNDE4LjgwOSA0OEg0MjkuOTM1QzQyMC4wNTkgMTAyLjc1IDM3Ni45MjggMTQ0IDMyNS40MjEgMTQ0SDMxNC4yOTRDMzI0LjE3MSA4OS4yNSAzNjcuMzAyIDQ4IDQxOC44MDkgNDhaTTE1Ny4yNzIgNDhDMjA4Ljc3OSA0OCAyNTEuOTEgODkuMjUgMjYxLjc4NyAxNDRIMjUwLjY2QzE5OS4xNTMgMTQ0IDE1Ni4wMjIgMTAyLjc1IDE0Ni4xNDYgNDhIMTU3LjI3MlpNNTUxLjk1MyAzMTJDNTIwLjgyMyAyODUuNjI1IDQ4Mi42OTMgMjk1Ljg3NSA0NjMuNTY1IDMxMC4yNUw0MDMuMTgyIDM1NS43NUgzOTkuODA2QzM5OS42ODEgMzE3Ljc1IDM2OS4zMDIgMjg3Ljg3NSAzMzAuNjcyIDI4Ny44NzVIMTg2LjY1MUMxNTguMjcyIDI4Ny44NzUgMTMwLjI2OCAyOTcuMjUgMTA4LjE0IDMxNC4yNUw3OS43NjEgMzM2SDI0LjAwM0MxMC44MDIgMzM2IDAgMzQ2LjggMCAzNjBWMzYwQzAgMzczLjIgMTAuODAyIDM4NCAyNC4wMDMgMzg0SDk2LjAxNEwxMzcuMjY5IDM1Mi41QzE1MS4yNzEgMzQxLjc1IDE2OC43NzQgMzM2IDE4Ni43NzYgMzM2SDMzMC43OTdDMzU4LjY3NSAzMzYgMzU5LjgwMSAzNzYuMjUgMzI5LjY3MSAzNzYuMjVIMjY5Ljc4OEMyNjIuMjg3IDM3Ni4yNSAyNTYuMDM2IDM4Mi4zNzUgMjU2LjAzNiAzOTBWMzkwLjEyNUMyNTYuMDM2IDM5Ny43NSAyNjIuMjg3IDQwMy44NzUgMjY5Ljc4OCA0MDMuODc1SDQwNC4zOTVDNDE0LjEwNiA0MDMuODc1IDQyMy41NTMgNDAwLjcxNiA0MzEuMzExIDM5NC44NzVMNDkyLjU2OSAzNDguNzVDNTAwLjgyIDM0Mi42MjUgNTEzLjA3MiAzNDIuMTI1IDUyMC45NDggMzQ4Ljc1QzUzMS4wNzUgMzU3LjI1IDUzMC4zMjUgMzcxLjg3NSA1MjAuMDczIDM3OS41TDQxOS40MzQgNDU1QzQxMS42ODMgNDYwLjc1IDQwMi4zMDcgNDY0IDM5Mi41NTUgNDY0SDI0LjAwM0MxMC44MDIgNDY0IDAgNDc0LjggMCA0ODhWNDg4QzAgNTAxLjIgMTAuODAyIDUxMiAyNC4wMDMgNTEySDM5Mi44MDVDNDEyLjgwOCA1MTIgNDMyLjE4NiA1MDUuNSA0NDguMDYzIDQ5My41TDU0OC44MjcgNDE3LjYyNUM1NjUuNDU1IDQwNS4xMjUgNTc1LjMzMSAzODYuMTI1IDU3NS45NTYgMzY1LjYyNUM1NzYuNzA2IDM0NS4xMjUgNTY3LjgzIDMyNS41IDU1MS45NTMgMzEyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HandHoldingSeedling(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M250.785 192H264.037V232C264.037 245.2 274.839 256 288.04 256H288.041C301.242 256 312.044 245.2 312.044 232V192H325.296C410.683 192 480.068 116.625 480.068 24V24C480.068 10.745 469.321 0 456.064 0H418.809C363.551 0 315.419 31.75 288.04 79C260.662 31.75 212.53 0 157.272 0H120.017C106.76 0 96.014 10.745 96.014 24V24C96.014 116.625 165.398 192 250.785 192ZM418.809 48H429.935C420.059 102.75 376.928 144 325.421 144H314.294C324.171 89.25 367.302 48 418.809 48ZM157.272 48C208.779 48 251.91 89.25 261.787 144H250.66C199.153 144 156.022 102.75 146.146 48H157.272ZM551.953 312C520.823 285.625 482.693 295.875 463.565 310.25L403.182 355.75H399.806C399.681 317.75 369.302 287.875 330.672 287.875H186.651C158.272 287.875 130.268 297.25 108.14 314.25L79.761 336H24.003C10.802 336 0 346.8 0 360V360C0 373.2 10.802 384 24.003 384H96.014L137.269 352.5C151.271 341.75 168.774 336 186.776 336H330.797C358.675 336 359.801 376.25 329.671 376.25H269.788C262.287 376.25 256.036 382.375 256.036 390V390.125C256.036 397.75 262.287 403.875 269.788 403.875H404.395C414.106 403.875 423.553 400.716 431.311 394.875L492.569 348.75C500.82 342.625 513.072 342.125 520.948 348.75C531.075 357.25 530.325 371.875 520.073 379.5L419.434 455C411.683 460.75 402.307 464 392.555 464H24.003C10.802 464 0 474.8 0 488V488C0 501.2 10.802 512 24.003 512H392.805C412.808 512 432.186 505.5 448.063 493.5L548.827 417.625C565.455 405.125 575.331 386.125 575.956 365.625C576.706 345.125 567.83 325.5 551.953 312Z" />
        </Icon>
    </>
}
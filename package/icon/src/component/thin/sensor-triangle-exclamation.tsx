
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `sensor-triangle-exclamation` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sensor-triangle-exclamation?s=thin sensor-triangle-exclamation}
 * @preview ![sensor-triangle-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04MCAxMDRWMjgwQzgwIDI4NC40MDYgODMuNTk0IDI4OCA4OCAyODhTOTYgMjg0LjQwNiA5NiAyODBWMTA0Qzk2IDk5LjU5NCA5Mi40MDYgOTYgODggOTZTODAgOTkuNTk0IDgwIDEwNFpNNjMzLjEwNyA0MDIuMTIzTDQ5Mi4yNDYgMTU0LjAxMkM0ODIuNDM2IDEzNi42NyA0NjUuMjE3IDEyOCA0NDggMTI4UzQxMy41NjYgMTM2LjY3IDQwMy43NTQgMTU0LjAxMkwyNjIuODkzIDQwMi4xMjNDMjQzLjI3IDQzNi42NzggMjY3Ljg5MyA0ODAgMzA3LjEzOSA0ODBINTg4Ljg2MUM2MjguMTA3IDQ4MCA2NTIuNzMgNDM2LjY3OCA2MzMuMTA3IDQwMi4xMjNaTTYxOC45NTUgNDQ2LjQ1M0M2MTIuNTYxIDQ1Ny40MzkgNjAxLjMxMSA0NjQgNTg4Ljg2MSA0NjRIMzA3LjEzOUMyOTQuNjkxIDQ2NCAyODMuNDQxIDQ1Ny40MzkgMjc3LjA0NSA0NDYuNDUzQzI3MC40MTIgNDM1LjA1OSAyNzAuMzIyIDQyMS40NDEgMjc2LjgwNyA0MTAuMDIzTDQxNy42OCAxNjEuODkxQzQyNC4wMTggMTUwLjY4OCA0MzUuMzU0IDE0NCA0NDggMTQ0QzQ2MC42NDggMTQ0IDQ3MS45ODIgMTUwLjY4OCA0NzguMzMyIDE2MS45MUw2MTkuMTk1IDQxMC4wMjVDNjI1LjY3OCA0MjEuNDQxIDYyNS41ODggNDM1LjA1OSA2MTguOTU1IDQ0Ni40NTNaTTIxNiA0NjRINjRDMzcuNDkgNDY0IDE2IDQ0Mi41MSAxNiA0MTZWOTZDMTYgNjkuNDkgMzcuNDkgNDggNjQgNDhIMzg0QzQwOC4xNTYgNDggNDI4LjIwMyA2NS45MzggNDMxLjUyIDg5LjE5MUM0MzIuMDc2IDkzLjEwNCA0MzUuNDIgOTYgNDM5LjM3MSA5NkM0NDQuMjE3IDk2IDQ0OC4wNDEgOTEuNzAzIDQ0Ny4zNTkgODYuOTA2QzQ0Mi45NDMgNTUuODY1IDQxNi4yNiAzMiAzODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgyMTZDMjIwLjQxOCA0ODAgMjI0IDQ3Ni40MTggMjI0IDQ3MlMyMjAuNDE4IDQ2NCAyMTYgNDY0Wk0xNDQgMTA0VjI4MEMxNDQgMjg0LjQwNiAxNDcuNTk0IDI4OCAxNTIgMjg4UzE2MCAyODQuNDA2IDE2MCAyODBWMTA0QzE2MCA5OS41OTQgMTU2LjQwNiA5NiAxNTIgOTZTMTQ0IDk5LjU5NCAxNDQgMTA0Wk0yMTYgOTZDMjExLjU5NCA5NiAyMDggOTkuNTk0IDIwOCAxMDRWMjgwQzIwOCAyODQuNDA2IDIxMS41OTQgMjg4IDIxNiAyODhTMjI0IDI4NC40MDYgMjI0IDI4MFYxMDRDMjI0IDk5LjU5NCAyMjAuNDA2IDk2IDIxNiA5NlpNNDQ4IDM4NEM0MzkuMTc4IDM4NCA0MzIgMzkxLjE4IDQzMiA0MDBTNDM5LjE3OCA0MTYgNDQ4IDQxNlM0NjQgNDA4LjgyIDQ2NCA0MDBTNDU2LjgyMiAzODQgNDQ4IDM4NFpNNDQ3LjkzOCAzNTJDNDUyLjM0NCAzNTIgNDU1LjkzOCAzNDguNDA2IDQ1NS45MzggMzQ0VjI0Ny45OThDNDU1LjkzOCAyNDMuNTkyIDQ1Mi4zNDQgMjM5Ljk5OCA0NDcuOTM4IDIzOS45OThTNDM5LjkzOCAyNDMuNTkyIDQzOS45MzggMjQ3Ljk5OFYzNDRDNDM5LjkzOCAzNDguNDA2IDQ0My41MzEgMzUyIDQ0Ny45MzggMzUyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SensorTriangleExclamation(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M80 104V280C80 284.406 83.594 288 88 288S96 284.406 96 280V104C96 99.594 92.406 96 88 96S80 99.594 80 104ZM633.107 402.123L492.246 154.012C482.436 136.67 465.217 128 448 128S413.566 136.67 403.754 154.012L262.893 402.123C243.27 436.678 267.893 480 307.139 480H588.861C628.107 480 652.73 436.678 633.107 402.123ZM618.955 446.453C612.561 457.439 601.311 464 588.861 464H307.139C294.691 464 283.441 457.439 277.045 446.453C270.412 435.059 270.322 421.441 276.807 410.023L417.68 161.891C424.018 150.688 435.354 144 448 144C460.648 144 471.982 150.688 478.332 161.91L619.195 410.025C625.678 421.441 625.588 435.059 618.955 446.453ZM216 464H64C37.49 464 16 442.51 16 416V96C16 69.49 37.49 48 64 48H384C408.156 48 428.203 65.938 431.52 89.191C432.076 93.104 435.42 96 439.371 96C444.217 96 448.041 91.703 447.359 86.906C442.943 55.865 416.26 32 384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H216C220.418 480 224 476.418 224 472S220.418 464 216 464ZM144 104V280C144 284.406 147.594 288 152 288S160 284.406 160 280V104C160 99.594 156.406 96 152 96S144 99.594 144 104ZM216 96C211.594 96 208 99.594 208 104V280C208 284.406 211.594 288 216 288S224 284.406 224 280V104C224 99.594 220.406 96 216 96ZM448 384C439.178 384 432 391.18 432 400S439.178 416 448 416S464 408.82 464 400S456.822 384 448 384ZM447.938 352C452.344 352 455.938 348.406 455.938 344V247.998C455.938 243.592 452.344 239.998 447.938 239.998S439.938 243.592 439.938 247.998V344C439.938 348.406 443.531 352 447.938 352Z" />
        </Icon>
    </>
}
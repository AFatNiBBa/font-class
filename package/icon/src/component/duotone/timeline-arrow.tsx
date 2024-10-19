
import { Icon, generic } from "../../index";

/**
 * A component that renders the `timeline-arrow` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/timeline-arrow?s=duotone timeline-arrow}
 * @preview ![timeline-arrow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY0MCAyNTZDNjQwIDI2Ni4wNzggNjM1LjI1IDI3NS41NjIgNjI3LjE4OCAyODEuNTk0TDUzMS4xODggMzUzLjU5NEM1MjUuNDM4IDM1Ny45MjIgNTE4LjcxOSAzNjAgNTEyLjAzMSAzNjBDNTAyLjI4MSAzNjAgNDkyLjY4OCAzNTUuNTc4IDQ4Ni40MDYgMzQ3LjIwM0M0NzUuNzgxIDMzMy4wNjMgNDc4LjY1NiAzMTMgNDkyLjgxMyAzMDIuNDA2TDUxMi4wMTIgMjg4SDI1NlYzNTguNzU0QzI0Ni4xODggMzU0LjQ1OSAyMzUuMzk1IDM1MiAyMjQgMzUyUzIwMS44MTEgMzU0LjQ1OSAxOTIgMzU4Ljc1NFYyODhIMzJDMTQuMzM0IDI4OCAwIDI3My42NjYgMCAyNTZTMTQuMzM0IDIyNCAzMiAyMjRIOTZWMTUzLjI0NkMxMDUuODEyIDE1Ny41NDEgMTE2LjYwNSAxNjAgMTI4IDE2MFMxNTAuMTg5IDE1Ny41NDEgMTYwIDE1My4yNDZWMjI0SDMyMFYxNTMuMjQ2QzMyOS44MTIgMTU3LjU0MSAzNDAuNjA1IDE2MCAzNTIgMTYwUzM3NC4xODkgMTU3LjU0MSAzODQgMTUzLjI0NlYyMjRINTEyLjAxMkw0OTIuODEyIDIwOS41OTRDNDc4LjY1NiAxOTkgNDc1Ljc4MSAxNzguOTM4IDQ4Ni40MDYgMTY0Ljc5N0M0OTcgMTUwLjY4OCA1MTcuMDYyIDE0Ny43ODEgNTMxLjE4OCAxNTguNDA2TDYyNy4xODggMjMwLjQwNkM2MzUuMjUgMjM2LjQzOCA2NDAgMjQ1LjkyMiA2NDAgMjU2WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yMDggODBDMjA4IDM1LjgyIDE3Mi4xODQgMCAxMjggMEM4My44MTggMCA0OCAzNS44MiA0OCA4MFM4My44MTggMTYwIDEyOCAxNjBDMTcyLjE4NCAxNjAgMjA4IDEyNC4xOCAyMDggODBaTTEyOCAxMTJDMTEwLjM1NSAxMTIgOTYgOTcuNjQ1IDk2IDgwUzExMC4zNTUgNDggMTI4IDQ4UzE2MCA2Mi4zNTUgMTYwIDgwUzE0NS42NDUgMTEyIDEyOCAxMTJaTTIyNCAzNTJDMTc5LjgxNiAzNTIgMTQ0IDM4Ny44MiAxNDQgNDMyUzE3OS44MTYgNTEyIDIyNCA1MTJDMjY4LjE4MiA1MTIgMzA0IDQ3Ni4xOCAzMDQgNDMyUzI2OC4xODIgMzUyIDIyNCAzNTJaTTIyNCA0NjRDMjA2LjM1NSA0NjQgMTkyIDQ0OS42NDUgMTkyIDQzMlMyMDYuMzU1IDQwMCAyMjQgNDAwUzI1NiA0MTQuMzU1IDI1NiA0MzJTMjQxLjY0NSA0NjQgMjI0IDQ2NFpNMzUyIDBDMzA3LjgxOCAwIDI3MiAzNS44MiAyNzIgODBTMzA3LjgxOCAxNjAgMzUyIDE2MEMzOTYuMTg0IDE2MCA0MzIgMTI0LjE4IDQzMiA4MFMzOTYuMTg0IDAgMzUyIDBaTTM1MiAxMTJDMzM0LjM1NSAxMTIgMzIwIDk3LjY0NSAzMjAgODBTMzM0LjM1NSA0OCAzNTIgNDhTMzg0IDYyLjM1NSAzODQgODBTMzY5LjY0NSAxMTIgMzUyIDExMloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const TimelineArrow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M640 256C640 266.078 635.25 275.562 627.188 281.594L531.188 353.594C525.438 357.922 518.719 360 512.031 360C502.281 360 492.688 355.578 486.406 347.203C475.781 333.063 478.656 313 492.813 302.406L512.012 288H256V358.754C246.188 354.459 235.395 352 224 352S201.811 354.459 192 358.754V288H32C14.334 288 0 273.666 0 256S14.334 224 32 224H96V153.246C105.812 157.541 116.605 160 128 160S150.189 157.541 160 153.246V224H320V153.246C329.812 157.541 340.605 160 352 160S374.189 157.541 384 153.246V224H512.012L492.812 209.594C478.656 199 475.781 178.938 486.406 164.797C497 150.688 517.062 147.781 531.188 158.406L627.188 230.406C635.25 236.438 640 245.922 640 256Z" />
            <path d="M208 80C208 35.82 172.184 0 128 0C83.818 0 48 35.82 48 80S83.818 160 128 160C172.184 160 208 124.18 208 80ZM128 112C110.355 112 96 97.645 96 80S110.355 48 128 48S160 62.355 160 80S145.645 112 128 112ZM224 352C179.816 352 144 387.82 144 432S179.816 512 224 512C268.182 512 304 476.18 304 432S268.182 352 224 352ZM224 464C206.355 464 192 449.645 192 432S206.355 400 224 400S256 414.355 256 432S241.645 464 224 464ZM352 0C307.818 0 272 35.82 272 80S307.818 160 352 160C396.184 160 432 124.18 432 80S396.184 0 352 0ZM352 112C334.355 112 320 97.645 320 80S334.355 48 352 48S384 62.355 384 80S369.645 112 352 112Z" />
    </Icon>
);

export default TimelineArrow;
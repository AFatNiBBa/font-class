
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-image` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-image?s=thin calendar-image}
 * @preview ![calendar-image](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMzkuMjgxIDM1My44NTlMOTIuNTk0IDQxNy44NzVDODcuMjUgNDI1LjIzNCA4Ni41IDQzNC44MTMgOTAuNjI1IDQ0Mi44NTlDOTQuNzE5IDQ1MC45NjkgMTAyLjkwNiA0NTYgMTEyIDQ1NkgzMzZDMzQ0Ljg3NSA0NTYgMzUyLjk2OSA0NTEuMTQxIDM1Ny4xMjUgNDQzLjM0NEMzNjEuMzQ0IDQzNS41MzEgMzYwLjkwNiA0MjYuMDc4IDM1NS45NjkgNDE4LjY4OEwyNzAuNjI1IDI5MC42ODhDMjYxLjY4NyAyNzcuMzEyIDIzOS42MjUgMjc3LjMxMiAyMzAuNjg3IDI5MC42ODhMMTgzLjU2MiAzNjEuMzkxTDE3OC4wNjIgMzUzLjg5MUMxNjkuMTU2IDM0MS40ODQgMTQ4LjIxOSAzNDEuNDg0IDEzOS4yODEgMzUzLjg1OVpNMTg0LjEyNSAzODkuMzU5TDI0NCAyOTkuNTYyQzI0NyAyOTUuMDk0IDI1NC4zMTIgMjk1LjA5NCAyNTcuMzEyIDI5OS41NjJMMzQyLjY1NiA0MjcuNTc4QzM0NC4zMTIgNDMwLjAzMSAzNDQuNDY5IDQzMy4xNTYgMzQzLjAzMSA0MzUuNzgxQzM0MS42NTYgNDM4LjM3NSAzMzguOTM4IDQ0MCAzMzYgNDQwSDExMkMxMDguOTY5IDQ0MCAxMDYuMjUgNDM4LjMyOCAxMDQuODc1IDQzNS42MDlDMTAzLjUgNDMyLjkyMiAxMDMuNzUgNDI5LjczNCAxMDUuNTMxIDQyNy4yOTdMMTUyLjIxOSAzNjMuMjY2QzE1My43MTkgMzYxLjIxOSAxNTYuMTI1IDM2MCAxNTguNjU2IDM2MEMxNjEuMjE5IDM2MCAxNjMuNjI1IDM2MS4yMTkgMTY1LjEyNSAzNjMuMjk3TDE4NC4xMjUgMzg5LjM1OVpNNDAwIDY0SDMzNlY4QzMzNiAzLjU3OCAzMzIuNDA2IDAgMzI4IDBTMzIwIDMuNTc4IDMyMCA4VjY0SDEyOFY4QzEyOCAzLjU3OCAxMjQuNDA2IDAgMTIwIDBTMTEyIDMuNTc4IDExMiA4VjY0SDQ4QzIxLjUgNjQgMCA4NS41IDAgMTEyVjQ2NEMwIDQ5MC41IDIxLjUgNTEyIDQ4IDUxMkg0MDBDNDI2LjUgNTEyIDQ0OCA0OTAuNSA0NDggNDY0VjExMkM0NDggODUuNSA0MjYuNSA2NCA0MDAgNjRaTTQzMiA0NjRDNDMyIDQ4MS42NDUgNDE3LjY0NSA0OTYgNDAwIDQ5Nkg0OEMzMC4zNTUgNDk2IDE2IDQ4MS42NDUgMTYgNDY0VjIwOEg0MzJWNDY0Wk00MzIgMTkySDE2VjExMkMxNiA5NC4zNTUgMzAuMzU1IDgwIDQ4IDgwSDExMlYxMjhDMTEyIDEzMi40MjIgMTE1LjU5NCAxMzYgMTIwIDEzNlMxMjggMTMyLjQyMiAxMjggMTI4VjgwSDMyMFYxMjhDMzIwIDEzMi40MjIgMzIzLjU5NCAxMzYgMzI4IDEzNlMzMzYgMTMyLjQyMiAzMzYgMTI4VjgwSDQwMEM0MTcuNjQ1IDgwIDQzMiA5NC4zNTUgNDMyIDExMlYxOTJaTTEyOCAzMjhDMTUwLjA2MiAzMjggMTY4IDMxMC4wNjIgMTY4IDI4OFMxNTAuMDYyIDI0OCAxMjggMjQ4Uzg4IDI2NS45MzggODggMjg4UzEwNS45MzggMzI4IDEyOCAzMjhaTTEyOCAyNjRDMTQxLjIxOSAyNjQgMTUyIDI3NC43NjYgMTUyIDI4OFMxNDEuMjE5IDMxMiAxMjggMzEyUzEwNCAzMDEuMjM0IDEwNCAyODhTMTE0Ljc4MSAyNjQgMTI4IDI2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CalendarImage(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M139.281 353.859L92.594 417.875C87.25 425.234 86.5 434.813 90.625 442.859C94.719 450.969 102.906 456 112 456H336C344.875 456 352.969 451.141 357.125 443.344C361.344 435.531 360.906 426.078 355.969 418.688L270.625 290.688C261.687 277.312 239.625 277.312 230.687 290.688L183.562 361.391L178.062 353.891C169.156 341.484 148.219 341.484 139.281 353.859ZM184.125 389.359L244 299.562C247 295.094 254.312 295.094 257.312 299.562L342.656 427.578C344.312 430.031 344.469 433.156 343.031 435.781C341.656 438.375 338.938 440 336 440H112C108.969 440 106.25 438.328 104.875 435.609C103.5 432.922 103.75 429.734 105.531 427.297L152.219 363.266C153.719 361.219 156.125 360 158.656 360C161.219 360 163.625 361.219 165.125 363.297L184.125 389.359ZM400 64H336V8C336 3.578 332.406 0 328 0S320 3.578 320 8V64H128V8C128 3.578 124.406 0 120 0S112 3.578 112 8V64H48C21.5 64 0 85.5 0 112V464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V112C448 85.5 426.5 64 400 64ZM432 464C432 481.645 417.645 496 400 496H48C30.355 496 16 481.645 16 464V208H432V464ZM432 192H16V112C16 94.355 30.355 80 48 80H112V128C112 132.422 115.594 136 120 136S128 132.422 128 128V80H320V128C320 132.422 323.594 136 328 136S336 132.422 336 128V80H400C417.645 80 432 94.355 432 112V192ZM128 328C150.062 328 168 310.062 168 288S150.062 248 128 248S88 265.938 88 288S105.938 328 128 328ZM128 264C141.219 264 152 274.766 152 288S141.219 312 128 312S104 301.234 104 288S114.781 264 128 264Z" />
        </Icon>
    </>
}
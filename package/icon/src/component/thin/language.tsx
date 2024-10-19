
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `language` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/language?s=thin language}
 * @preview ![language](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzYgNjRINjRDMjguNjUyIDY0IDAgOTIuNjUyIDAgMTI4VjM4NEMwIDQxOS4zNDggMjguNjUyIDQ0OCA2NCA0NDhINTc2QzYxMS4zNDggNDQ4IDY0MCA0MTkuMzQ4IDY0MCAzODRWMTI4QzY0MCA5Mi42NTIgNjExLjM0OCA2NCA1NzYgNjRaTTMxMiA0MzJINjRDMzcuNTMxIDQzMiAxNiA0MTAuNDY5IDE2IDM4NFYxMjhDMTYgMTAxLjUzMSAzNy41MzEgODAgNjQgODBIMzEyVjQzMlpNNjI0IDM4NEM2MjQgNDEwLjQ2OSA2MDIuNDY5IDQzMiA1NzYgNDMySDMyOFY4MEg1NzZDNjAyLjQ2OSA4MCA2MjQgMTAxLjUzMSA2MjQgMTI4VjM4NFpNODQuOTY5IDM1MS40MDZDODkuMDk0IDM1My4wNjIgOTMuNzE5IDM1MS4wOTQgOTUuNDA2IDM0Ny4wMzFMMTE5LjYxNyAyODcuODQ0QzExOS43NjYgMjg3Ljg1MSAxMTkuODUyIDI4OCAxMjAgMjg4SDIwMEMyMDAuMTQ4IDI4OCAyMDAuMjM0IDI4Ny44NTEgMjAwLjM4MyAyODcuODQ0TDIyNC41OTQgMzQ3LjAzMUMyMjUuODc1IDM1MC4xMjUgMjI4Ljg0NCAzNTIgMjMyIDM1MkMyMzMgMzUyIDIzNC4wMzEgMzUxLjgxMiAyMzUuMDMxIDM1MS40MDZDMjM5LjEyNSAzNDkuNzE5IDI0MS4wNjMgMzQ1LjA2MiAyMzkuNDA2IDM0MC45NjlMMTY3LjQwNiAxNjQuOTY5QzE2NC45NjkgMTU4Ljk2OSAxNTUuMDMxIDE1OC45NjkgMTUyLjU5NCAxNjQuOTY5TDgwLjU5NCAzNDAuOTY5Qzc4LjkzOCAzNDUuMDYyIDgwLjg3NSAzNDkuNzE5IDg0Ljk2OSAzNTEuNDA2Wk0xNjAgMTg5LjEyNUwxOTMuODk4IDI3MkgxMjYuMTAyTDE2MCAxODkuMTI1Wk01NjAgMTkySDQ4OFYxNjhDNDg4IDE2My41OTQgNDg0LjQwNiAxNjAgNDgwIDE2MFM0NzIgMTYzLjU5NCA0NzIgMTY4VjE5Mkg0MDBDMzk1LjU5NCAxOTIgMzkyIDE5NS41OTQgMzkyIDIwMFMzOTUuNTk0IDIwOCA0MDAgMjA4SDUyNy4zMzJDNTIzLjk0OSAyNDUuMTMzIDQ5OC4xMDkgMjc2LjYxMyA0NzIuMTA5IDI5OS4xMzNDNDU5LjAwOCAyODcuMzIgNDQ3LjUxMiAyNzQuMjc3IDQzOC44NzUgMjU5Ljg3NUM0MzYuNTMxIDI1Ni4wNjIgNDMxLjY4OCAyNTQuOTA2IDQyNy44NzUgMjU3LjEyNUM0MjQuMDk0IDI1OS40MDYgNDIyLjg3NSAyNjQuMzQ0IDQyNS4xMjUgMjY4LjEyNUM0MzQuMTggMjgzLjIwMyA0NDYuMTU2IDI5Ni44MjQgNDU5LjY0OCAzMDkuMjczQzQzNy4xOCAzMjYuNTk0IDQxNy42ODggMzM2LjYwOSA0MTcuMjE5IDMzNi44NDRDNDEzLjI4MSAzMzguODEyIDQxMS42ODggMzQzLjYyNSA0MTMuNjU2IDM0Ny41OTRDNDE1LjA2MyAzNTAuMzc1IDQxNy44NzUgMzUyIDQyMC44MTMgMzUyQzQyMi4wMzEgMzUyIDQyMy4yNSAzNTEuNzE5IDQyNC4zNzUgMzUxLjE1NkM0MjYuNDM4IDM1MC4xMzMgNDQ3LjkzIDMzOS4xMTcgNDcyLjExNyAzMjAuMTA5QzQ4Ny44OTEgMzMyLjUxMiA1MDUuNTA4IDM0My4yODEgNTI0LjkzOCAzNTEuMzc1QzUyNS45MzggMzUxLjgxMiA1MjYuOTY5IDM1MiA1MjggMzUyQzUzMS4xMjUgMzUyIDUzNC4wOTQgMzUwLjE1NiA1MzUuMzc1IDM0Ny4wNjJDNTM3LjA5NCAzNDMgNTM1LjE1NiAzMzguMzEyIDUzMS4wNjMgMzM2LjYyNUM1MTQuMDk0IDMyOS41NDcgNDk4Ljc1OCAzMjAuMTcyIDQ4NC43OTcgMzA5LjU3OEM1MTIuNzQyIDI4NC44OTEgNTQwLjE3MiAyNTAuMTMzIDU0My4zNzUgMjA4SDU2MEM1NjQuNDA2IDIwOCA1NjggMjA0LjQwNiA1NjggMjAwUzU2NC40MDYgMTkyIDU2MCAxOTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Language(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M576 64H64C28.652 64 0 92.652 0 128V384C0 419.348 28.652 448 64 448H576C611.348 448 640 419.348 640 384V128C640 92.652 611.348 64 576 64ZM312 432H64C37.531 432 16 410.469 16 384V128C16 101.531 37.531 80 64 80H312V432ZM624 384C624 410.469 602.469 432 576 432H328V80H576C602.469 80 624 101.531 624 128V384ZM84.969 351.406C89.094 353.062 93.719 351.094 95.406 347.031L119.617 287.844C119.766 287.851 119.852 288 120 288H200C200.148 288 200.234 287.851 200.383 287.844L224.594 347.031C225.875 350.125 228.844 352 232 352C233 352 234.031 351.812 235.031 351.406C239.125 349.719 241.063 345.062 239.406 340.969L167.406 164.969C164.969 158.969 155.031 158.969 152.594 164.969L80.594 340.969C78.938 345.062 80.875 349.719 84.969 351.406ZM160 189.125L193.898 272H126.102L160 189.125ZM560 192H488V168C488 163.594 484.406 160 480 160S472 163.594 472 168V192H400C395.594 192 392 195.594 392 200S395.594 208 400 208H527.332C523.949 245.133 498.109 276.613 472.109 299.133C459.008 287.32 447.512 274.277 438.875 259.875C436.531 256.062 431.688 254.906 427.875 257.125C424.094 259.406 422.875 264.344 425.125 268.125C434.18 283.203 446.156 296.824 459.648 309.273C437.18 326.594 417.688 336.609 417.219 336.844C413.281 338.812 411.688 343.625 413.656 347.594C415.063 350.375 417.875 352 420.813 352C422.031 352 423.25 351.719 424.375 351.156C426.438 350.133 447.93 339.117 472.117 320.109C487.891 332.512 505.508 343.281 524.938 351.375C525.938 351.812 526.969 352 528 352C531.125 352 534.094 350.156 535.375 347.062C537.094 343 535.156 338.312 531.063 336.625C514.094 329.547 498.758 320.172 484.797 309.578C512.742 284.891 540.172 250.133 543.375 208H560C564.406 208 568 204.406 568 200S564.406 192 560 192Z" />
        </Icon>
    </>
}

import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `language` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/language?s=light language}
 * @preview ![language](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjAgMTkyLjAwNEg0OTZWMTc2LjAwMkM0OTYgMTY3LjE2NCA0ODguODM2IDE2MCA0ODAgMTYwUzQ2NCAxNjcuMTY0IDQ2NCAxNzYuMDAyVjE5Mi4wMDRINDAwQzM5MS4xNjQgMTkyLjAwNCAzODQgMTk5LjE3IDM4NCAyMDguMDA4UzM5MS4xNjQgMjI0LjAxIDQwMCAyMjQuMDFINTE0LjVDNTA3LjYyNSAyNDEuMTM3IDQ5NiAyNTkuMTQxIDQ4MC44NzUgMjc2LjAxOEM0NzMgMjY3LjAxNiA0NjUuNjI1IDI1Ny42NDEgNDU5LjI1IDI0OC4xMzlDNDU1Ljc1IDI0Mi43NjQgNDQ4LjYyNSAyNDEuMjYyIDQ0My4xMjUgMjQ0LjUxNEw0MzYuMjUgMjQ4LjYzOUM0MzAuMzc1IDI1Mi4xMzkgNDI4LjYyNSAyNTkuODkxIDQzMi41IDI2NS42NDFDNDM5LjUgMjc2LjE0MyA0NDguMTI1IDI4Ny4zOTUgNDU4LjEyNSAyOTguNjQ2QzQ0OC4xMjUgMzA3LjM5OCA0MzcuMzc1IDMxNS42NDggNDI1Ljg3NSAzMjIuOUM0MjAuNSAzMjYuNCA0MTguNjI1IDMzMy40MDIgNDIxLjg3NSAzMzkuMDI3TDQyNS44NzUgMzQ1LjkwNEM0MjkuMjUgMzUxLjkwNCA0MzYuODc1IDM1My43ODEgNDQyLjYyNSAzNTAuMTU0QzQ1Ni4xMjUgMzQxLjY1NCA0NjguODc1IDMzMS45MDIgNDgwLjYyNSAzMjEuNTI1QzQ5MS43NSAzMzEuNzc3IDUwNCAzNDEuNTI5IDUxNy4yNSAzNTAuMDI5QzUyMyAzNTMuNzgxIDUzMC43NSAzNTEuOTA0IDUzNC4xMjUgMzQ1LjkwNEw1MzguMTI1IDMzOC45MDJDNTQxLjM3NSAzMzMuNDAyIDUzOS42MjUgMzI2LjQgNTM0LjM3NSAzMjIuOUM1MjMuODc1IDMxNi4xNDggNTEzLjM3NSAzMDcuODk4IDUwMy4zNzUgMjk4Ljg5NkM1MjQuODc1IDI3NS4wMTggNTQwLjc1IDI0OC43NjQgNTQ4LjI1IDIyNC4wMUg1NjBDNTY4LjgzNiAyMjQuMDEgNTc2IDIxNi44NDYgNTc2IDIwOC4wMDhTNTY4LjgzNiAxOTIuMDA0IDU2MCAxOTIuMDA0Wk01NzYgNjRINjRDMjguNjU0IDY0IDAgOTIuNjU0IDAgMTI4VjM4NEMwIDQxOS4zNDYgMjguNjU0IDQ0OCA2NCA0NDhINTc2QzYxMS4zNDYgNDQ4IDY0MCA0MTkuMzQ2IDY0MCAzODRWMTI4QzY0MCA5Mi42NTQgNjExLjM0NiA2NCA1NzYgNjRaTTMwNCA0MTZINjRDNDYuMzU1IDQxNiAzMiA0MDEuNjQ1IDMyIDM4NFYxMjhDMzIgMTEwLjM1NSA0Ni4zNTUgOTYgNjQgOTZIMzA0VjQxNlpNNjA4IDM4NEM2MDggNDAxLjY0NSA1OTMuNjQ1IDQxNiA1NzYgNDE2SDMzNlY5Nkg1NzZDNTkzLjY0NSA5NiA2MDggMTEwLjM1NSA2MDggMTI4VjM4NFpNNzIuODQ0IDM1MC4zMTJDODAuNzgxIDM1NC4yMzQgOTAuMzc1IDM1MS4wOTQgOTQuMzEyIDM0My4xNTZMMTEzLjg5MSAzMDRIMjA2LjEwOUwyMjUuNjg4IDM0My4xNTZDMjI4LjUgMzQ4Ljc2NiAyMzQuMTU2IDM1MiAyNDAgMzUyQzI0Mi40MDYgMzUyIDI0NC44NDQgMzUxLjQ1MyAyNDcuMTU2IDM1MC4zMTJDMjU1LjA2MiAzNDYuMzU5IDI1OC4yNSAzMzYuNzUgMjU0LjMxMiAzMjguODQ0TDE3NC4zMTIgMTY4Ljg0NEMxNjguODc1IDE1OCAxNTEuMTI1IDE1OCAxNDUuNjg4IDE2OC44NDRMNjUuNjg4IDMyOC44NDRDNjEuNzUgMzM2Ljc1IDY0LjkzOCAzNDYuMzU5IDcyLjg0NCAzNTAuMzEyWk0xNjAgMjExLjc4MUwxOTAuMTA5IDI3MkgxMjkuODkxTDE2MCAyMTEuNzgxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Language(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M560 192.004H496V176.002C496 167.164 488.836 160 480 160S464 167.164 464 176.002V192.004H400C391.164 192.004 384 199.17 384 208.008S391.164 224.01 400 224.01H514.5C507.625 241.137 496 259.141 480.875 276.018C473 267.016 465.625 257.641 459.25 248.139C455.75 242.764 448.625 241.262 443.125 244.514L436.25 248.639C430.375 252.139 428.625 259.891 432.5 265.641C439.5 276.143 448.125 287.395 458.125 298.646C448.125 307.398 437.375 315.648 425.875 322.9C420.5 326.4 418.625 333.402 421.875 339.027L425.875 345.904C429.25 351.904 436.875 353.781 442.625 350.154C456.125 341.654 468.875 331.902 480.625 321.525C491.75 331.777 504 341.529 517.25 350.029C523 353.781 530.75 351.904 534.125 345.904L538.125 338.902C541.375 333.402 539.625 326.4 534.375 322.9C523.875 316.148 513.375 307.898 503.375 298.896C524.875 275.018 540.75 248.764 548.25 224.01H560C568.836 224.01 576 216.846 576 208.008S568.836 192.004 560 192.004ZM576 64H64C28.654 64 0 92.654 0 128V384C0 419.346 28.654 448 64 448H576C611.346 448 640 419.346 640 384V128C640 92.654 611.346 64 576 64ZM304 416H64C46.355 416 32 401.645 32 384V128C32 110.355 46.355 96 64 96H304V416ZM608 384C608 401.645 593.645 416 576 416H336V96H576C593.645 96 608 110.355 608 128V384ZM72.844 350.312C80.781 354.234 90.375 351.094 94.312 343.156L113.891 304H206.109L225.688 343.156C228.5 348.766 234.156 352 240 352C242.406 352 244.844 351.453 247.156 350.312C255.062 346.359 258.25 336.75 254.312 328.844L174.312 168.844C168.875 158 151.125 158 145.688 168.844L65.688 328.844C61.75 336.75 64.938 346.359 72.844 350.312ZM160 211.781L190.109 272H129.891L160 211.781Z" />
        </Icon>
    </>
}
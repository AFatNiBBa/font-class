
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `money-bills` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/money-bills?s=solid money-bills}
 * @preview ![money-bills](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01OTIgMzJIMTQ0QzExNy40OTIgMzIgOTYgNTMuNDkyIDk2IDgwVjMzNkM5NiAzNjIuNTA4IDExNy40OTIgMzg0IDE0NCAzODRINTkyQzYxOC41MTIgMzg0IDY0MCAzNjIuNTA4IDY0MCAzMzZWODBDNjQwIDUzLjQ5MiA2MTguNTEyIDMyIDU5MiAzMlpNMTQ0IDMzNlYyNzJDMTc5LjM3NSAyNzIgMjA4IDMwMC42MjUgMjA4IDMzNkgxNDRaTTE0NCAxNDRWODBIMjA4QzIwOCAxMTUuMzc1IDE3OS4zNzUgMTQ0IDE0NCAxNDRaTTM2Ny45ODQgMzA0QzMyMy44MDEgMzA0IDI4Ny45ODQgMjYxLjAxOCAyODcuOTg0IDIwOEMyODcuOTg0IDE1NC45OCAzMjMuODAxIDExMiAzNjcuOTg0IDExMlM0NDcuOTg0IDE1NC45OCA0NDcuOTg0IDIwOEM0NDcuOTg0IDI2MS4wMTggNDEyLjE2OCAzMDQgMzY3Ljk4NCAzMDRaTTU5MiAzMzZINTI4QzUyOCAzMDAuNjI1IDU1Ni42MjUgMjcyIDU5MiAyNzJWMzM2Wk01OTIgMTQ0QzU1Ni42MjUgMTQ0IDUyOCAxMTUuMzc1IDUyOCA4MEg1OTJWMTQ0Wk00OCA0MDBWOTZDMjEuNDkgOTYgMCAxMTcuNDkyIDAgMTQ0VjQxNkMwIDQ1MS4zNDQgMjguNjU0IDQ4MCA2NCA0ODBINDk2QzUyMi41MSA0ODAgNTQ0IDQ1OC41MDggNTQ0IDQzMkg4MEM2Mi4zMjYgNDMyIDQ4IDQxNy42NzIgNDggNDAwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MoneyBills(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M592 32H144C117.492 32 96 53.492 96 80V336C96 362.508 117.492 384 144 384H592C618.512 384 640 362.508 640 336V80C640 53.492 618.512 32 592 32ZM144 336V272C179.375 272 208 300.625 208 336H144ZM144 144V80H208C208 115.375 179.375 144 144 144ZM367.984 304C323.801 304 287.984 261.018 287.984 208C287.984 154.98 323.801 112 367.984 112S447.984 154.98 447.984 208C447.984 261.018 412.168 304 367.984 304ZM592 336H528C528 300.625 556.625 272 592 272V336ZM592 144C556.625 144 528 115.375 528 80H592V144ZM48 400V96C21.49 96 0 117.492 0 144V416C0 451.344 28.654 480 64 480H496C522.51 480 544 458.508 544 432H80C62.326 432 48 417.672 48 400Z" />
        </Icon>
    </>
}
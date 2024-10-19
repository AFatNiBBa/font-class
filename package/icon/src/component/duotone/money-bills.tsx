
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-bills` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/money-bills?s=duotone money-bills}
 * @preview ![money-bills](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUyOCA4MEgyMDhDMjA4IDExNS4zNzUgMTc5LjM3NSAxNDQgMTQ0IDE0NFYyNzJDMTc5LjM3NSAyNzIgMjA4IDMwMC42MjUgMjA4IDMzNkg1MjhDNTI4IDMwMC42MjUgNTU2LjYyNSAyNzIgNTkyIDI3MlYxNDRDNTU2LjYyNSAxNDQgNTI4IDExNS4zNzUgNTI4IDgwWk0zNjcuOTg0IDMwNEMzMjMuODAxIDMwNCAyODcuOTg0IDI2MS4wMTggMjg3Ljk4NCAyMDhDMjg3Ljk4NCAxNTQuOTggMzIzLjgwMSAxMTIgMzY3Ljk4NCAxMTJTNDQ3Ljk4NCAxNTQuOTggNDQ3Ljk4NCAyMDhDNDQ3Ljk4NCAyNjEuMDE4IDQxMi4xNjggMzA0IDM2Ny45ODQgMzA0Wk00OCA0MDBWOTZDMjEuNDkgOTYgMCAxMTcuNDkyIDAgMTQ0VjQxNkMwIDQ1MS4zNDQgMjguNjU0IDQ4MCA2NCA0ODBINDk2QzUyMi41MSA0ODAgNTQ0IDQ1OC41MDggNTQ0IDQzMkg4MEM2Mi4zMjYgNDMyIDQ4IDQxNy42NzIgNDggNDAwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik01OTIgMzJIMTQ0QzExNy40OTIgMzIgOTYgNTMuNDkyIDk2IDgwVjMzNkM5NiAzNjIuNTA4IDExNy40OTIgMzg0IDE0NCAzODRINTkyQzYxOC41MTIgMzg0IDY0MCAzNjIuNTA4IDY0MCAzMzZWODBDNjQwIDUzLjQ5MiA2MTguNTEyIDMyIDU5MiAzMlpNNTkyIDI3MkM1NTYuNjI1IDI3MiA1MjggMzAwLjYyNSA1MjggMzM2SDIwOEMyMDggMzAwLjYyNSAxNzkuMzc1IDI3MiAxNDQgMjcyVjE0NEMxNzkuMzc1IDE0NCAyMDggMTE1LjM3NSAyMDggODBINTI4QzUyOCAxMTUuMzc1IDU1Ni42MjUgMTQ0IDU5MiAxNDRWMjcyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const MoneyBills: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M528 80H208C208 115.375 179.375 144 144 144V272C179.375 272 208 300.625 208 336H528C528 300.625 556.625 272 592 272V144C556.625 144 528 115.375 528 80ZM367.984 304C323.801 304 287.984 261.018 287.984 208C287.984 154.98 323.801 112 367.984 112S447.984 154.98 447.984 208C447.984 261.018 412.168 304 367.984 304ZM48 400V96C21.49 96 0 117.492 0 144V416C0 451.344 28.654 480 64 480H496C522.51 480 544 458.508 544 432H80C62.326 432 48 417.672 48 400Z" />
            <path d="M592 32H144C117.492 32 96 53.492 96 80V336C96 362.508 117.492 384 144 384H592C618.512 384 640 362.508 640 336V80C640 53.492 618.512 32 592 32ZM592 272C556.625 272 528 300.625 528 336H208C208 300.625 179.375 272 144 272V144C179.375 144 208 115.375 208 80H528C528 115.375 556.625 144 592 144V272Z" />
    </Icon>
);

export default MoneyBills;
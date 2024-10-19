
import { Icon } from "../../index";

/**
 * A component that renders the `border-right` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/border-right?s=solid border-right}
 * @preview ![border-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDAgMjI0SDIwOEMxOTkuMTI1IDIyNCAxOTIgMjMxLjEyNSAxOTIgMjQwVjI3MkMxOTIgMjgwLjg3NSAxOTkuMTI1IDI4OCAyMDggMjg4SDI0MEMyNDguODc1IDI4OCAyNTYgMjgwLjg3NSAyNTYgMjcyVjI0MEMyNTYgMjMxLjEyNSAyNDguODc1IDIyNCAyNDAgMjI0Wk0zMzYgMjI0SDMwNEMyOTUuMTI1IDIyNCAyODggMjMxLjEyNSAyODggMjQwVjI3MkMyODggMjgwLjg3NSAyOTUuMTI1IDI4OCAzMDQgMjg4SDMzNkMzNDQuODc1IDI4OCAzNTIgMjgwLjg3NSAzNTIgMjcyVjI0MEMzNTIgMjMxLjEyNSAzNDQuODc1IDIyNCAzMzYgMjI0Wk0xNDQgMjI0SDExMkMxMDMuMTI1IDIyNCA5NiAyMzEuMTI1IDk2IDI0MFYyNzJDOTYgMjgwLjg3NSAxMDMuMTI1IDI4OCAxMTIgMjg4SDE0NEMxNTIuODc1IDI4OCAxNjAgMjgwLjg3NSAxNjAgMjcyVjI0MEMxNjAgMjMxLjEyNSAxNTIuODc1IDIyNCAxNDQgMjI0Wk0yNDAgNDE2SDIwOEMxOTkuMTI1IDQxNiAxOTIgNDIzLjEyNSAxOTIgNDMyVjQ2NEMxOTIgNDcyLjg3NSAxOTkuMTI1IDQ4MCAyMDggNDgwSDI0MEMyNDguODc1IDQ4MCAyNTYgNDcyLjg3NSAyNTYgNDY0VjQzMkMyNTYgNDIzLjEyNSAyNDguODc1IDQxNiAyNDAgNDE2Wk0zMzYgNDE2SDMwNEMyOTUuMTI1IDQxNiAyODggNDIzLjEyNSAyODggNDMyVjQ2NEMyODggNDcyLjg3NSAyOTUuMTI1IDQ4MCAzMDQgNDgwSDMzNkMzNDQuODc1IDQ4MCAzNTIgNDcyLjg3NSAzNTIgNDY0VjQzMkMzNTIgNDIzLjEyNSAzNDQuODc1IDQxNiAzMzYgNDE2Wk0yNDAgMzIwSDIwOEMxOTkuMTI1IDMyMCAxOTIgMzI3LjEyNSAxOTIgMzM2VjM2OEMxOTIgMzc2Ljg3NSAxOTkuMTI1IDM4NCAyMDggMzg0SDI0MEMyNDguODc1IDM4NCAyNTYgMzc2Ljg3NSAyNTYgMzY4VjMzNkMyNTYgMzI3LjEyNSAyNDguODc1IDMyMCAyNDAgMzIwWk0yNDAgMTI4SDIwOEMxOTkuMTI1IDEyOCAxOTIgMTM1LjEyNSAxOTIgMTQ0VjE3NkMxOTIgMTg0Ljg3NSAxOTkuMTI1IDE5MiAyMDggMTkySDI0MEMyNDguODc1IDE5MiAyNTYgMTg0Ljg3NSAyNTYgMTc2VjE0NEMyNTYgMTM1LjEyNSAyNDguODc1IDEyOCAyNDAgMTI4Wk0xNDQgNDE2SDExMkMxMDMuMTI1IDQxNiA5NiA0MjMuMTI1IDk2IDQzMlY0NjRDOTYgNDcyLjg3NSAxMDMuMTI1IDQ4MCAxMTIgNDgwSDE0NEMxNTIuODc1IDQ4MCAxNjAgNDcyLjg3NSAxNjAgNDY0VjQzMkMxNjAgNDIzLjEyNSAxNTIuODc1IDQxNiAxNDQgNDE2Wk0yNDAgMzJIMjA4QzE5OS4xMjUgMzIgMTkyIDM5LjEyNSAxOTIgNDhWODBDMTkyIDg4Ljg3NSAxOTkuMTI1IDk2IDIwOCA5NkgyNDBDMjQ4Ljg3NSA5NiAyNTYgODguODc1IDI1NiA4MFY0OEMyNTYgMzkuMTI1IDI0OC44NzUgMzIgMjQwIDMyWk0zMzYgMzJIMzA0QzI5NS4xMjUgMzIgMjg4IDM5LjEyNSAyODggNDhWODBDMjg4IDg4Ljg3NSAyOTUuMTI1IDk2IDMwNCA5NkgzMzZDMzQ0Ljg3NSA5NiAzNTIgODguODc1IDM1MiA4MFY0OEMzNTIgMzkuMTI1IDM0NC44NzUgMzIgMzM2IDMyWk00OCAyMjRIMTZDNy4xMjUgMjI0IDAgMjMxLjEyNSAwIDI0MFYyNzJDMCAyODAuODc1IDcuMTI1IDI4OCAxNiAyODhINDhDNTYuODc1IDI4OCA2NCAyODAuODc1IDY0IDI3MlYyNDBDNjQgMjMxLjEyNSA1Ni44NzUgMjI0IDQ4IDIyNFpNNDggNDE2SDE2QzcuMTI1IDQxNiAwIDQyMy4xMjUgMCA0MzJWNDY0QzAgNDcyLjg3NSA3LjEyNSA0ODAgMTYgNDgwSDQ4QzU2Ljg3NSA0ODAgNjQgNDcyLjg3NSA2NCA0NjRWNDMyQzY0IDQyMy4xMjUgNTYuODc1IDQxNiA0OCA0MTZaTTQ4IDMyMEgxNkM3LjEyNSAzMjAgMCAzMjcuMTI1IDAgMzM2VjM2OEMwIDM3Ni44NzUgNy4xMjUgMzg0IDE2IDM4NEg0OEM1Ni44NzUgMzg0IDY0IDM3Ni44NzUgNjQgMzY4VjMzNkM2NCAzMjcuMTI1IDU2Ljg3NSAzMjAgNDggMzIwWk00OCAxMjhIMTZDNy4xMjUgMTI4IDAgMTM1LjEyNSAwIDE0NFYxNzZDMCAxODQuODc1IDcuMTI1IDE5MiAxNiAxOTJINDhDNTYuODc1IDE5MiA2NCAxODQuODc1IDY0IDE3NlYxNDRDNjQgMTM1LjEyNSA1Ni44NzUgMTI4IDQ4IDEyOFpNNDggMzJIMTZDNy4xMjUgMzIgMCAzOS4xMjUgMCA0OFY4MEMwIDg4Ljg3NSA3LjEyNSA5NiAxNiA5Nkg0OEM1Ni44NzUgOTYgNjQgODguODc1IDY0IDgwVjQ4QzY0IDM5LjEyNSA1Ni44NzUgMzIgNDggMzJaTTE0NCAzMkgxMTJDMTAzLjEyNSAzMiA5NiAzOS4xMjUgOTYgNDhWODBDOTYgODguODc1IDEwMy4xMjUgOTYgMTEyIDk2SDE0NEMxNTIuODc1IDk2IDE2MCA4OC44NzUgMTYwIDgwVjQ4QzE2MCAzOS4xMjUgMTUyLjg3NSAzMiAxNDQgMzJaTTQxNiAzMkg0MTZDMzk4LjMyNyAzMiAzODQgNDYuMzI3IDM4NCA2NFY0NDhDMzg0IDQ2NS42NzMgMzk4LjMyNyA0ODAgNDE2IDQ4MEg0MTZDNDMzLjY3MyA0ODAgNDQ4IDQ2NS42NzMgNDQ4IDQ0OFY2NEM0NDggNDYuMzI3IDQzMy42NzMgMzIgNDE2IDMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BorderRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M240 224H208C199.125 224 192 231.125 192 240V272C192 280.875 199.125 288 208 288H240C248.875 288 256 280.875 256 272V240C256 231.125 248.875 224 240 224ZM336 224H304C295.125 224 288 231.125 288 240V272C288 280.875 295.125 288 304 288H336C344.875 288 352 280.875 352 272V240C352 231.125 344.875 224 336 224ZM144 224H112C103.125 224 96 231.125 96 240V272C96 280.875 103.125 288 112 288H144C152.875 288 160 280.875 160 272V240C160 231.125 152.875 224 144 224ZM240 416H208C199.125 416 192 423.125 192 432V464C192 472.875 199.125 480 208 480H240C248.875 480 256 472.875 256 464V432C256 423.125 248.875 416 240 416ZM336 416H304C295.125 416 288 423.125 288 432V464C288 472.875 295.125 480 304 480H336C344.875 480 352 472.875 352 464V432C352 423.125 344.875 416 336 416ZM240 320H208C199.125 320 192 327.125 192 336V368C192 376.875 199.125 384 208 384H240C248.875 384 256 376.875 256 368V336C256 327.125 248.875 320 240 320ZM240 128H208C199.125 128 192 135.125 192 144V176C192 184.875 199.125 192 208 192H240C248.875 192 256 184.875 256 176V144C256 135.125 248.875 128 240 128ZM144 416H112C103.125 416 96 423.125 96 432V464C96 472.875 103.125 480 112 480H144C152.875 480 160 472.875 160 464V432C160 423.125 152.875 416 144 416ZM240 32H208C199.125 32 192 39.125 192 48V80C192 88.875 199.125 96 208 96H240C248.875 96 256 88.875 256 80V48C256 39.125 248.875 32 240 32ZM336 32H304C295.125 32 288 39.125 288 48V80C288 88.875 295.125 96 304 96H336C344.875 96 352 88.875 352 80V48C352 39.125 344.875 32 336 32ZM48 224H16C7.125 224 0 231.125 0 240V272C0 280.875 7.125 288 16 288H48C56.875 288 64 280.875 64 272V240C64 231.125 56.875 224 48 224ZM48 416H16C7.125 416 0 423.125 0 432V464C0 472.875 7.125 480 16 480H48C56.875 480 64 472.875 64 464V432C64 423.125 56.875 416 48 416ZM48 320H16C7.125 320 0 327.125 0 336V368C0 376.875 7.125 384 16 384H48C56.875 384 64 376.875 64 368V336C64 327.125 56.875 320 48 320ZM48 128H16C7.125 128 0 135.125 0 144V176C0 184.875 7.125 192 16 192H48C56.875 192 64 184.875 64 176V144C64 135.125 56.875 128 48 128ZM48 32H16C7.125 32 0 39.125 0 48V80C0 88.875 7.125 96 16 96H48C56.875 96 64 88.875 64 80V48C64 39.125 56.875 32 48 32ZM144 32H112C103.125 32 96 39.125 96 48V80C96 88.875 103.125 96 112 96H144C152.875 96 160 88.875 160 80V48C160 39.125 152.875 32 144 32ZM416 32H416C398.327 32 384 46.327 384 64V448C384 465.673 398.327 480 416 480H416C433.673 480 448 465.673 448 448V64C448 46.327 433.673 32 416 32Z" />
    </Icon>
);

export default BorderRight;
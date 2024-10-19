
import { Icon } from "../../index";

/**
 * A component that renders the `border-top` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/border-top?s=solid border-top}
 * @preview ![border-top](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDAgMjI0SDIwOEMxOTkuMTI1IDIyNCAxOTIgMjMxLjEyNSAxOTIgMjQwVjI3MkMxOTIgMjgwLjg3NSAxOTkuMTI1IDI4OCAyMDggMjg4SDI0MEMyNDguODc1IDI4OCAyNTYgMjgwLjg3NSAyNTYgMjcyVjI0MEMyNTYgMjMxLjEyNSAyNDguODc1IDIyNCAyNDAgMjI0Wk0zMzYgMjI0SDMwNEMyOTUuMTI1IDIyNCAyODggMjMxLjEyNSAyODggMjQwVjI3MkMyODggMjgwLjg3NSAyOTUuMTI1IDI4OCAzMDQgMjg4SDMzNkMzNDQuODc1IDI4OCAzNTIgMjgwLjg3NSAzNTIgMjcyVjI0MEMzNTIgMjMxLjEyNSAzNDQuODc1IDIyNCAzMzYgMjI0Wk00MzIgMjI0SDQwMEMzOTEuMTI1IDIyNCAzODQgMjMxLjEyNSAzODQgMjQwVjI3MkMzODQgMjgwLjg3NSAzOTEuMTI1IDI4OCA0MDAgMjg4SDQzMkM0NDAuODc1IDI4OCA0NDggMjgwLjg3NSA0NDggMjcyVjI0MEM0NDggMjMxLjEyNSA0NDAuODc1IDIyNCA0MzIgMjI0Wk0xNDQgMjI0SDExMkMxMDMuMTI1IDIyNCA5NiAyMzEuMTI1IDk2IDI0MFYyNzJDOTYgMjgwLjg3NSAxMDMuMTI1IDI4OCAxMTIgMjg4SDE0NEMxNTIuODc1IDI4OCAxNjAgMjgwLjg3NSAxNjAgMjcyVjI0MEMxNjAgMjMxLjEyNSAxNTIuODc1IDIyNCAxNDQgMjI0Wk0yNDAgNDE2SDIwOEMxOTkuMTI1IDQxNiAxOTIgNDIzLjEyNSAxOTIgNDMyVjQ2NEMxOTIgNDcyLjg3NSAxOTkuMTI1IDQ4MCAyMDggNDgwSDI0MEMyNDguODc1IDQ4MCAyNTYgNDcyLjg3NSAyNTYgNDY0VjQzMkMyNTYgNDIzLjEyNSAyNDguODc1IDQxNiAyNDAgNDE2Wk0zMzYgNDE2SDMwNEMyOTUuMTI1IDQxNiAyODggNDIzLjEyNSAyODggNDMyVjQ2NEMyODggNDcyLjg3NSAyOTUuMTI1IDQ4MCAzMDQgNDgwSDMzNkMzNDQuODc1IDQ4MCAzNTIgNDcyLjg3NSAzNTIgNDY0VjQzMkMzNTIgNDIzLjEyNSAzNDQuODc1IDQxNiAzMzYgNDE2Wk00MzIgNDE2SDQwMEMzOTEuMTI1IDQxNiAzODQgNDIzLjEyNSAzODQgNDMyVjQ2NEMzODQgNDcyLjg3NSAzOTEuMTI1IDQ4MCA0MDAgNDgwSDQzMkM0NDAuODc1IDQ4MCA0NDggNDcyLjg3NSA0NDggNDY0VjQzMkM0NDggNDIzLjEyNSA0NDAuODc1IDQxNiA0MzIgNDE2Wk00MzIgMzIwSDQwMEMzOTEuMTI1IDMyMCAzODQgMzI3LjEyNSAzODQgMzM2VjM2OEMzODQgMzc2Ljg3NSAzOTEuMTI1IDM4NCA0MDAgMzg0SDQzMkM0NDAuODc1IDM4NCA0NDggMzc2Ljg3NSA0NDggMzY4VjMzNkM0NDggMzI3LjEyNSA0NDAuODc1IDMyMCA0MzIgMzIwWk00MzIgMTI4SDQwMEMzOTEuMTI1IDEyOCAzODQgMTM1LjEyNSAzODQgMTQ0VjE3NkMzODQgMTg0Ljg3NSAzOTEuMTI1IDE5MiA0MDAgMTkySDQzMkM0NDAuODc1IDE5MiA0NDggMTg0Ljg3NSA0NDggMTc2VjE0NEM0NDggMTM1LjEyNSA0NDAuODc1IDEyOCA0MzIgMTI4Wk0yNDAgMzIwSDIwOEMxOTkuMTI1IDMyMCAxOTIgMzI3LjEyNSAxOTIgMzM2VjM2OEMxOTIgMzc2Ljg3NSAxOTkuMTI1IDM4NCAyMDggMzg0SDI0MEMyNDguODc1IDM4NCAyNTYgMzc2Ljg3NSAyNTYgMzY4VjMzNkMyNTYgMzI3LjEyNSAyNDguODc1IDMyMCAyNDAgMzIwWk0yNDAgMTI4SDIwOEMxOTkuMTI1IDEyOCAxOTIgMTM1LjEyNSAxOTIgMTQ0VjE3NkMxOTIgMTg0Ljg3NSAxOTkuMTI1IDE5MiAyMDggMTkySDI0MEMyNDguODc1IDE5MiAyNTYgMTg0Ljg3NSAyNTYgMTc2VjE0NEMyNTYgMTM1LjEyNSAyNDguODc1IDEyOCAyNDAgMTI4Wk0xNDQgNDE2SDExMkMxMDMuMTI1IDQxNiA5NiA0MjMuMTI1IDk2IDQzMlY0NjRDOTYgNDcyLjg3NSAxMDMuMTI1IDQ4MCAxMTIgNDgwSDE0NEMxNTIuODc1IDQ4MCAxNjAgNDcyLjg3NSAxNjAgNDY0VjQzMkMxNjAgNDIzLjEyNSAxNTIuODc1IDQxNiAxNDQgNDE2Wk00OCAyMjRIMTZDNy4xMjUgMjI0IDAgMjMxLjEyNSAwIDI0MFYyNzJDMCAyODAuODc1IDcuMTI1IDI4OCAxNiAyODhINDhDNTYuODc1IDI4OCA2NCAyODAuODc1IDY0IDI3MlYyNDBDNjQgMjMxLjEyNSA1Ni44NzUgMjI0IDQ4IDIyNFpNNDggNDE2SDE2QzcuMTI1IDQxNiAwIDQyMy4xMjUgMCA0MzJWNDY0QzAgNDcyLjg3NSA3LjEyNSA0ODAgMTYgNDgwSDQ4QzU2Ljg3NSA0ODAgNjQgNDcyLjg3NSA2NCA0NjRWNDMyQzY0IDQyMy4xMjUgNTYuODc1IDQxNiA0OCA0MTZaTTQ4IDMyMEgxNkM3LjEyNSAzMjAgMCAzMjcuMTI1IDAgMzM2VjM2OEMwIDM3Ni44NzUgNy4xMjUgMzg0IDE2IDM4NEg0OEM1Ni44NzUgMzg0IDY0IDM3Ni44NzUgNjQgMzY4VjMzNkM2NCAzMjcuMTI1IDU2Ljg3NSAzMjAgNDggMzIwWk00OCAxMjhIMTZDNy4xMjUgMTI4IDAgMTM1LjEyNSAwIDE0NFYxNzZDMCAxODQuODc1IDcuMTI1IDE5MiAxNiAxOTJINDhDNTYuODc1IDE5MiA2NCAxODQuODc1IDY0IDE3NlYxNDRDNjQgMTM1LjEyNSA1Ni44NzUgMTI4IDQ4IDEyOFpNNDE2IDMySDMyQzE0LjMyNyAzMiAwIDQ2LjMyNyAwIDY0VjY0QzAgODEuNjczIDE0LjMyNyA5NiAzMiA5Nkg0MTZDNDMzLjY3MyA5NiA0NDggODEuNjczIDQ0OCA2NFY2NEM0NDggNDYuMzI3IDQzMy42NzMgMzIgNDE2IDMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BorderTop: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M240 224H208C199.125 224 192 231.125 192 240V272C192 280.875 199.125 288 208 288H240C248.875 288 256 280.875 256 272V240C256 231.125 248.875 224 240 224ZM336 224H304C295.125 224 288 231.125 288 240V272C288 280.875 295.125 288 304 288H336C344.875 288 352 280.875 352 272V240C352 231.125 344.875 224 336 224ZM432 224H400C391.125 224 384 231.125 384 240V272C384 280.875 391.125 288 400 288H432C440.875 288 448 280.875 448 272V240C448 231.125 440.875 224 432 224ZM144 224H112C103.125 224 96 231.125 96 240V272C96 280.875 103.125 288 112 288H144C152.875 288 160 280.875 160 272V240C160 231.125 152.875 224 144 224ZM240 416H208C199.125 416 192 423.125 192 432V464C192 472.875 199.125 480 208 480H240C248.875 480 256 472.875 256 464V432C256 423.125 248.875 416 240 416ZM336 416H304C295.125 416 288 423.125 288 432V464C288 472.875 295.125 480 304 480H336C344.875 480 352 472.875 352 464V432C352 423.125 344.875 416 336 416ZM432 416H400C391.125 416 384 423.125 384 432V464C384 472.875 391.125 480 400 480H432C440.875 480 448 472.875 448 464V432C448 423.125 440.875 416 432 416ZM432 320H400C391.125 320 384 327.125 384 336V368C384 376.875 391.125 384 400 384H432C440.875 384 448 376.875 448 368V336C448 327.125 440.875 320 432 320ZM432 128H400C391.125 128 384 135.125 384 144V176C384 184.875 391.125 192 400 192H432C440.875 192 448 184.875 448 176V144C448 135.125 440.875 128 432 128ZM240 320H208C199.125 320 192 327.125 192 336V368C192 376.875 199.125 384 208 384H240C248.875 384 256 376.875 256 368V336C256 327.125 248.875 320 240 320ZM240 128H208C199.125 128 192 135.125 192 144V176C192 184.875 199.125 192 208 192H240C248.875 192 256 184.875 256 176V144C256 135.125 248.875 128 240 128ZM144 416H112C103.125 416 96 423.125 96 432V464C96 472.875 103.125 480 112 480H144C152.875 480 160 472.875 160 464V432C160 423.125 152.875 416 144 416ZM48 224H16C7.125 224 0 231.125 0 240V272C0 280.875 7.125 288 16 288H48C56.875 288 64 280.875 64 272V240C64 231.125 56.875 224 48 224ZM48 416H16C7.125 416 0 423.125 0 432V464C0 472.875 7.125 480 16 480H48C56.875 480 64 472.875 64 464V432C64 423.125 56.875 416 48 416ZM48 320H16C7.125 320 0 327.125 0 336V368C0 376.875 7.125 384 16 384H48C56.875 384 64 376.875 64 368V336C64 327.125 56.875 320 48 320ZM48 128H16C7.125 128 0 135.125 0 144V176C0 184.875 7.125 192 16 192H48C56.875 192 64 184.875 64 176V144C64 135.125 56.875 128 48 128ZM416 32H32C14.327 32 0 46.327 0 64V64C0 81.673 14.327 96 32 96H416C433.673 96 448 81.673 448 64V64C448 46.327 433.673 32 416 32Z" />
    </Icon>
);

export default BorderTop;
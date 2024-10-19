
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `grip` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/grip?s=light grip}
 * @preview ![grip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04MCAyODhINDhDMjEuNDkgMjg4IDAgMzA5LjQ5IDAgMzM2VjM2OEMwIDM5NC41MSAyMS40OSA0MTYgNDggNDE2SDgwQzEwNi41MSA0MTYgMTI4IDM5NC41MSAxMjggMzY4VjMzNkMxMjggMzA5LjQ5IDEwNi41MSAyODggODAgMjg4Wk05NiAzNjhDOTYgMzc2LjgyMiA4OC44MjIgMzg0IDgwIDM4NEg0OEMzOS4xNzggMzg0IDMyIDM3Ni44MjIgMzIgMzY4VjMzNkMzMiAzMjcuMTc4IDM5LjE3OCAzMjAgNDggMzIwSDgwQzg4LjgyMiAzMjAgOTYgMzI3LjE3OCA5NiAzMzZWMzY4Wk04MCA5Nkg0OEMyMS40OSA5NiAwIDExNy40OSAwIDE0NFYxNzZDMCAyMDIuNTEgMjEuNDkgMjI0IDQ4IDIyNEg4MEMxMDYuNTEgMjI0IDEyOCAyMDIuNTEgMTI4IDE3NlYxNDRDMTI4IDExNy40OSAxMDYuNTEgOTYgODAgOTZaTTk2IDE3NkM5NiAxODQuODIyIDg4LjgyMiAxOTIgODAgMTkySDQ4QzM5LjE3OCAxOTIgMzIgMTg0LjgyMiAzMiAxNzZWMTQ0QzMyIDEzNS4xNzggMzkuMTc4IDEyOCA0OCAxMjhIODBDODguODIyIDEyOCA5NiAxMzUuMTc4IDk2IDE0NFYxNzZaTTI0MCA5NkgyMDhDMTgxLjQ5IDk2IDE2MCAxMTcuNDkgMTYwIDE0NFYxNzZDMTYwIDIwMi41MSAxODEuNDkgMjI0IDIwOCAyMjRIMjQwQzI2Ni41MSAyMjQgMjg4IDIwMi41MSAyODggMTc2VjE0NEMyODggMTE3LjQ5IDI2Ni41MSA5NiAyNDAgOTZaTTI1NiAxNzZDMjU2IDE4NC44MjIgMjQ4LjgyMiAxOTIgMjQwIDE5MkgyMDhDMTk5LjE3OCAxOTIgMTkyIDE4NC44MjIgMTkyIDE3NlYxNDRDMTkyIDEzNS4xNzggMTk5LjE3OCAxMjggMjA4IDEyOEgyNDBDMjQ4LjgyMiAxMjggMjU2IDEzNS4xNzggMjU2IDE0NFYxNzZaTTQwMCA5NkgzNjhDMzQxLjQ5IDk2IDMyMCAxMTcuNDkgMzIwIDE0NFYxNzZDMzIwIDIwMi41MSAzNDEuNDkgMjI0IDM2OCAyMjRINDAwQzQyNi41MSAyMjQgNDQ4IDIwMi41MSA0NDggMTc2VjE0NEM0NDggMTE3LjQ5IDQyNi41MSA5NiA0MDAgOTZaTTQxNiAxNzZDNDE2IDE4NC44MjIgNDA4LjgyMiAxOTIgNDAwIDE5MkgzNjhDMzU5LjE3OCAxOTIgMzUyIDE4NC44MjIgMzUyIDE3NlYxNDRDMzUyIDEzNS4xNzggMzU5LjE3OCAxMjggMzY4IDEyOEg0MDBDNDA4LjgyMiAxMjggNDE2IDEzNS4xNzggNDE2IDE0NFYxNzZaTTQwMCAyODhIMzY4QzM0MS40OSAyODggMzIwIDMwOS40OSAzMjAgMzM2VjM2OEMzMjAgMzk0LjUxIDM0MS40OSA0MTYgMzY4IDQxNkg0MDBDNDI2LjUxIDQxNiA0NDggMzk0LjUxIDQ0OCAzNjhWMzM2QzQ0OCAzMDkuNDkgNDI2LjUxIDI4OCA0MDAgMjg4Wk00MTYgMzY4QzQxNiAzNzYuODIyIDQwOC44MjIgMzg0IDQwMCAzODRIMzY4QzM1OS4xNzggMzg0IDM1MiAzNzYuODIyIDM1MiAzNjhWMzM2QzM1MiAzMjcuMTc4IDM1OS4xNzggMzIwIDM2OCAzMjBINDAwQzQwOC44MjIgMzIwIDQxNiAzMjcuMTc4IDQxNiAzMzZWMzY4Wk0yNDAgMjg4SDIwOEMxODEuNDkgMjg4IDE2MCAzMDkuNDkgMTYwIDMzNlYzNjhDMTYwIDM5NC41MSAxODEuNDkgNDE2IDIwOCA0MTZIMjQwQzI2Ni41MSA0MTYgMjg4IDM5NC41MSAyODggMzY4VjMzNkMyODggMzA5LjQ5IDI2Ni41MSAyODggMjQwIDI4OFpNMjU2IDM2OEMyNTYgMzc2LjgyMiAyNDguODIyIDM4NCAyNDAgMzg0SDIwOEMxOTkuMTc4IDM4NCAxOTIgMzc2LjgyMiAxOTIgMzY4VjMzNkMxOTIgMzI3LjE3OCAxOTkuMTc4IDMyMCAyMDggMzIwSDI0MEMyNDguODIyIDMyMCAyNTYgMzI3LjE3OCAyNTYgMzM2VjM2OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Grip(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M80 288H48C21.49 288 0 309.49 0 336V368C0 394.51 21.49 416 48 416H80C106.51 416 128 394.51 128 368V336C128 309.49 106.51 288 80 288ZM96 368C96 376.822 88.822 384 80 384H48C39.178 384 32 376.822 32 368V336C32 327.178 39.178 320 48 320H80C88.822 320 96 327.178 96 336V368ZM80 96H48C21.49 96 0 117.49 0 144V176C0 202.51 21.49 224 48 224H80C106.51 224 128 202.51 128 176V144C128 117.49 106.51 96 80 96ZM96 176C96 184.822 88.822 192 80 192H48C39.178 192 32 184.822 32 176V144C32 135.178 39.178 128 48 128H80C88.822 128 96 135.178 96 144V176ZM240 96H208C181.49 96 160 117.49 160 144V176C160 202.51 181.49 224 208 224H240C266.51 224 288 202.51 288 176V144C288 117.49 266.51 96 240 96ZM256 176C256 184.822 248.822 192 240 192H208C199.178 192 192 184.822 192 176V144C192 135.178 199.178 128 208 128H240C248.822 128 256 135.178 256 144V176ZM400 96H368C341.49 96 320 117.49 320 144V176C320 202.51 341.49 224 368 224H400C426.51 224 448 202.51 448 176V144C448 117.49 426.51 96 400 96ZM416 176C416 184.822 408.822 192 400 192H368C359.178 192 352 184.822 352 176V144C352 135.178 359.178 128 368 128H400C408.822 128 416 135.178 416 144V176ZM400 288H368C341.49 288 320 309.49 320 336V368C320 394.51 341.49 416 368 416H400C426.51 416 448 394.51 448 368V336C448 309.49 426.51 288 400 288ZM416 368C416 376.822 408.822 384 400 384H368C359.178 384 352 376.822 352 368V336C352 327.178 359.178 320 368 320H400C408.822 320 416 327.178 416 336V368ZM240 288H208C181.49 288 160 309.49 160 336V368C160 394.51 181.49 416 208 416H240C266.51 416 288 394.51 288 368V336C288 309.49 266.51 288 240 288ZM256 368C256 376.822 248.822 384 240 384H208C199.178 384 192 376.822 192 368V336C192 327.178 199.178 320 208 320H240C248.822 320 256 327.178 256 336V368Z" />
        </Icon>
    </>
}
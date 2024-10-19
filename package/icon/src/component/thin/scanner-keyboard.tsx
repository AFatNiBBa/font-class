
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `scanner-keyboard` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-keyboard?s=thin scanner-keyboard}
 * @preview ![scanner-keyboard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjggMjg4SDk2Qzc4LjMyOCAyODggNjQgMzAyLjMyNiA2NCAzMjBDNjQgMzM3LjY3MiA3OC4zMjggMzUyIDk2IDM1MkgxMjhDMTQ1LjY3NCAzNTIgMTYwIDMzNy42NzIgMTYwIDMyMEMxNjAgMzAyLjMyNiAxNDUuNjc0IDI4OCAxMjggMjg4Wk0xMjggMzM2SDk2Qzg3LjE3OCAzMzYgODAgMzI4LjgyMiA4MCAzMjBTODcuMTc4IDMwNCA5NiAzMDRIMTI4QzEzNi44MjIgMzA0IDE0NCAzMTEuMTc4IDE0NCAzMjBTMTM2LjgyMiAzMzYgMTI4IDMzNlpNMzIwIDY0QzMyNC40MjIgNjQgMzI4IDYwLjQyMiAzMjggNTZWOEMzMjggMy41NzggMzI0LjQyMiAwIDMyMCAwUzMxMiAzLjU3OCAzMTIgOFY1NkMzMTIgNjAuNDIyIDMxNS41NzggNjQgMzIwIDY0Wk0yNTYgNjRDMjYwLjQyMiA2NCAyNjQgNjAuNDIyIDI2NCA1NlY4QzI2NCAzLjU3OCAyNjAuNDIyIDAgMjU2IDBTMjQ4IDMuNTc4IDI0OCA4VjU2QzI0OCA2MC40MjIgMjUxLjU3OCA2NCAyNTYgNjRaTTIwOCA2NEMyMTIuNDIyIDY0IDIxNiA2MC40MjIgMjE2IDU2VjhDMjE2IDMuNTc4IDIxMi40MjIgMCAyMDggMFMyMDAgMy41NzggMjAwIDhWNTZDMjAwIDYwLjQyMiAyMDMuNTc4IDY0IDIwOCA2NFpNMTM2IDY0QzE0MC40MjIgNjQgMTQ0IDYwLjQyMiAxNDQgNTZWOEMxNDQgMy41NzggMTQwLjQyMiAwIDEzNiAwUzEyOCAzLjU3OCAxMjggOFY1NkMxMjggNjAuNDIyIDEzMS41NzggNjQgMTM2IDY0Wk0xMjggMzg0SDk2Qzc4LjMyOCAzODQgNjQgMzk4LjMyNiA2NCA0MTZDNjQgNDMzLjY3MiA3OC4zMjggNDQ4IDk2IDQ0OEgxMjhDMTQ1LjY3NCA0NDggMTYwIDQzMy42NzIgMTYwIDQxNkMxNjAgMzk4LjMyNiAxNDUuNjc0IDM4NCAxMjggMzg0Wk0xMjggNDMySDk2Qzg3LjE3OCA0MzIgODAgNDI0LjgyMiA4MCA0MTZTODcuMTc4IDQwMCA5NiA0MDBIMTI4QzEzNi44MjIgNDAwIDE0NCA0MDcuMTc4IDE0NCA0MTZTMTM2LjgyMiA0MzIgMTI4IDQzMlpNMjU2IDM4NEgyMjRDMjA2LjMyOCAzODQgMTkyIDM5OC4zMjYgMTkyIDQxNkMxOTIgNDMzLjY3MiAyMDYuMzI4IDQ0OCAyMjQgNDQ4SDI1NkMyNzMuNjc0IDQ0OCAyODggNDMzLjY3MiAyODggNDE2QzI4OCAzOTguMzI2IDI3My42NzQgMzg0IDI1NiAzODRaTTI1NiA0MzJIMjI0QzIxNS4xNzggNDMyIDIwOCA0MjQuODIyIDIwOCA0MTZTMjE1LjE3OCA0MDAgMjI0IDQwMEgyNTZDMjY0LjgyMiA0MDAgMjcyIDQwNy4xNzggMjcyIDQxNlMyNjQuODIyIDQzMiAyNTYgNDMyWk00MDAgMEMzOTUuNTc4IDAgMzkyIDMuNTc4IDM5MiA4VjI4MEMzOTIgMjg0LjQyMiAzOTUuNTc4IDI4OCA0MDAgMjg4UzQwOCAyODQuNDIyIDQwOCAyODBWOEM0MDggMy41NzggNDA0LjQyMiAwIDQwMCAwWk01MDQgMEM0OTkuNTc4IDAgNDk2IDMuNTc4IDQ5NiA4VjI4MEM0OTYgMjg0LjQyMiA0OTkuNTc4IDI4OCA1MDQgMjg4UzUxMiAyODQuNDIyIDUxMiAyODBWOEM1MTIgMy41NzggNTA4LjQyMiAwIDUwNCAwWk00NDggMEM0NDMuNTc4IDAgNDQwIDMuNTc4IDQ0MCA4VjI4MEM0NDAgMjg0LjQyMiA0NDMuNTc4IDI4OCA0NDggMjg4UzQ1NiAyODQuNDIyIDQ1NiAyODBWOEM0NTYgMy41NzggNDUyLjQyMiAwIDQ0OCAwWk0yNTYgMjg4SDIyNEMyMDYuMzI4IDI4OCAxOTIgMzAyLjMyNiAxOTIgMzIwQzE5MiAzMzcuNjcyIDIwNi4zMjggMzUyIDIyNCAzNTJIMjU2QzI3My42NzQgMzUyIDI4OCAzMzcuNjcyIDI4OCAzMjBDMjg4IDMwMi4zMjYgMjczLjY3NCAyODggMjU2IDI4OFpNMjU2IDMzNkgyMjRDMjE1LjE3OCAzMzYgMjA4IDMyOC44MjIgMjA4IDMyMFMyMTUuMTc4IDMwNCAyMjQgMzA0SDI1NkMyNjQuODIyIDMwNCAyNzIgMzExLjE3OCAyNzIgMzIwUzI2NC44MjIgMzM2IDI1NiAzMzZaTTMwNCA5Nkg0OEMyMS40OSA5NiAwIDExNy40OSAwIDE0NFY0NjRDMCA0OTAuNTEgMjEuNDkgNTEyIDQ4IDUxMkgzMDRDMzMwLjUxIDUxMiAzNTIgNDkwLjUxIDM1MiA0NjRWMTQ0QzM1MiAxMTcuNDkgMzMwLjUxIDk2IDMwNCA5NlpNMzM2IDQ2NEMzMzYgNDgxLjY0NSAzMjEuNjQ1IDQ5NiAzMDQgNDk2SDQ4QzMwLjM1NSA0OTYgMTYgNDgxLjY0NSAxNiA0NjRWMTQ0QzE2IDEyNi4zNTUgMzAuMzU1IDExMiA0OCAxMTJIMzA0QzMyMS42NDUgMTEyIDMzNiAxMjYuMzU1IDMzNiAxNDRWNDY0Wk0yNTYgMTYwSDk2Qzc4LjMyOCAxNjAgNjQgMTc0LjMyNiA2NCAxOTJWMjI0QzY0IDI0MS42NzIgNzguMzI4IDI1NiA5NiAyNTZIMjU2QzI3My42NzQgMjU2IDI4OCAyNDEuNjcyIDI4OCAyMjRWMTkyQzI4OCAxNzQuMzI2IDI3My42NzQgMTYwIDI1NiAxNjBaTTI3MiAyMjRDMjcyIDIzMi44MjIgMjY0LjgyMiAyNDAgMjU2IDI0MEg5NkM4Ny4xNzggMjQwIDgwIDIzMi44MjIgODAgMjI0VjE5MkM4MCAxODMuMTc4IDg3LjE3OCAxNzYgOTYgMTc2SDI1NkMyNjQuODIyIDE3NiAyNzIgMTgzLjE3OCAyNzIgMTkyVjIyNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ScannerKeyboard(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M128 288H96C78.328 288 64 302.326 64 320C64 337.672 78.328 352 96 352H128C145.674 352 160 337.672 160 320C160 302.326 145.674 288 128 288ZM128 336H96C87.178 336 80 328.822 80 320S87.178 304 96 304H128C136.822 304 144 311.178 144 320S136.822 336 128 336ZM320 64C324.422 64 328 60.422 328 56V8C328 3.578 324.422 0 320 0S312 3.578 312 8V56C312 60.422 315.578 64 320 64ZM256 64C260.422 64 264 60.422 264 56V8C264 3.578 260.422 0 256 0S248 3.578 248 8V56C248 60.422 251.578 64 256 64ZM208 64C212.422 64 216 60.422 216 56V8C216 3.578 212.422 0 208 0S200 3.578 200 8V56C200 60.422 203.578 64 208 64ZM136 64C140.422 64 144 60.422 144 56V8C144 3.578 140.422 0 136 0S128 3.578 128 8V56C128 60.422 131.578 64 136 64ZM128 384H96C78.328 384 64 398.326 64 416C64 433.672 78.328 448 96 448H128C145.674 448 160 433.672 160 416C160 398.326 145.674 384 128 384ZM128 432H96C87.178 432 80 424.822 80 416S87.178 400 96 400H128C136.822 400 144 407.178 144 416S136.822 432 128 432ZM256 384H224C206.328 384 192 398.326 192 416C192 433.672 206.328 448 224 448H256C273.674 448 288 433.672 288 416C288 398.326 273.674 384 256 384ZM256 432H224C215.178 432 208 424.822 208 416S215.178 400 224 400H256C264.822 400 272 407.178 272 416S264.822 432 256 432ZM400 0C395.578 0 392 3.578 392 8V280C392 284.422 395.578 288 400 288S408 284.422 408 280V8C408 3.578 404.422 0 400 0ZM504 0C499.578 0 496 3.578 496 8V280C496 284.422 499.578 288 504 288S512 284.422 512 280V8C512 3.578 508.422 0 504 0ZM448 0C443.578 0 440 3.578 440 8V280C440 284.422 443.578 288 448 288S456 284.422 456 280V8C456 3.578 452.422 0 448 0ZM256 288H224C206.328 288 192 302.326 192 320C192 337.672 206.328 352 224 352H256C273.674 352 288 337.672 288 320C288 302.326 273.674 288 256 288ZM256 336H224C215.178 336 208 328.822 208 320S215.178 304 224 304H256C264.822 304 272 311.178 272 320S264.822 336 256 336ZM304 96H48C21.49 96 0 117.49 0 144V464C0 490.51 21.49 512 48 512H304C330.51 512 352 490.51 352 464V144C352 117.49 330.51 96 304 96ZM336 464C336 481.645 321.645 496 304 496H48C30.355 496 16 481.645 16 464V144C16 126.355 30.355 112 48 112H304C321.645 112 336 126.355 336 144V464ZM256 160H96C78.328 160 64 174.326 64 192V224C64 241.672 78.328 256 96 256H256C273.674 256 288 241.672 288 224V192C288 174.326 273.674 160 256 160ZM272 224C272 232.822 264.822 240 256 240H96C87.178 240 80 232.822 80 224V192C80 183.178 87.178 176 96 176H256C264.822 176 272 183.178 272 192V224Z" />
        </Icon>
    </>
}
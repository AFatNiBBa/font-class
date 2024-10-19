
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `scanner-touchscreen` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-touchscreen?s=thin scanner-touchscreen}
 * @preview ![scanner-touchscreen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMEM0NDMuNTc4IDAgNDQwIDMuNTc4IDQ0MCA4VjI4MEM0NDAgMjg0LjQyMiA0NDMuNTc4IDI4OCA0NDggMjg4UzQ1NiAyODQuNDIyIDQ1NiAyODBWOEM0NTYgMy41NzggNDUyLjQyMiAwIDQ0OCAwWk0xMzYgNjRDMTQwLjQyMiA2NCAxNDQgNjAuNDIyIDE0NCA1NlY4QzE0NCAzLjU3OCAxNDAuNDIyIDAgMTM2IDBTMTI4IDMuNTc4IDEyOCA4VjU2QzEyOCA2MC40MjIgMTMxLjU3OCA2NCAxMzYgNjRaTTIwOCA2NEMyMTIuNDIyIDY0IDIxNiA2MC40MjIgMjE2IDU2VjhDMjE2IDMuNTc4IDIxMi40MjIgMCAyMDggMFMyMDAgMy41NzggMjAwIDhWNTZDMjAwIDYwLjQyMiAyMDMuNTc4IDY0IDIwOCA2NFpNNTA0IDBDNDk5LjU3OCAwIDQ5NiAzLjU3OCA0OTYgOFYyODBDNDk2IDI4NC40MjIgNDk5LjU3OCAyODggNTA0IDI4OFM1MTIgMjg0LjQyMiA1MTIgMjgwVjhDNTEyIDMuNTc4IDUwOC40MjIgMCA1MDQgMFpNMjU2IDY0QzI2MC40MjIgNjQgMjY0IDYwLjQyMiAyNjQgNTZWOEMyNjQgMy41NzggMjYwLjQyMiAwIDI1NiAwUzI0OCAzLjU3OCAyNDggOFY1NkMyNDggNjAuNDIyIDI1MS41NzggNjQgMjU2IDY0Wk00MDAgMEMzOTUuNTc4IDAgMzkyIDMuNTc4IDM5MiA4VjI4MEMzOTIgMjg0LjQyMiAzOTUuNTc4IDI4OCA0MDAgMjg4UzQwOCAyODQuNDIyIDQwOCAyODBWOEM0MDggMy41NzggNDA0LjQyMiAwIDQwMCAwWk0zMjAgNjRDMzI0LjQyMiA2NCAzMjggNjAuNDIyIDMyOCA1NlY4QzMyOCAzLjU3OCAzMjQuNDIyIDAgMzIwIDBTMzEyIDMuNTc4IDMxMiA4VjU2QzMxMiA2MC40MjIgMzE1LjU3OCA2NCAzMjAgNjRaTTI1NiAxNjBIOTZDNzguMzI4IDE2MCA2NCAxNzQuMzI2IDY0IDE5MlY0MTZDNjQgNDMzLjY3MiA3OC4zMjggNDQ4IDk2IDQ0OEgyNTZDMjczLjY3NCA0NDggMjg4IDQzMy42NzIgMjg4IDQxNlYxOTJDMjg4IDE3NC4zMjYgMjczLjY3NCAxNjAgMjU2IDE2MFpNMjcyIDQxNkMyNzIgNDI0LjgyMiAyNjQuODIyIDQzMiAyNTYgNDMySDk2Qzg3LjE3OCA0MzIgODAgNDI0LjgyMiA4MCA0MTZWMTkyQzgwIDE4My4xNzggODcuMTc4IDE3NiA5NiAxNzZIMjU2QzI2NC44MjIgMTc2IDI3MiAxODMuMTc4IDI3MiAxOTJWNDE2Wk0zMDQgOTZINDhDMjEuNDkgOTYgMCAxMTcuNDkgMCAxNDRWNDY0QzAgNDkwLjUxIDIxLjQ5IDUxMiA0OCA1MTJIMzA0QzMzMC41MSA1MTIgMzUyIDQ5MC41MSAzNTIgNDY0VjE0NEMzNTIgMTE3LjQ5IDMzMC41MSA5NiAzMDQgOTZaTTMzNiA0NjRDMzM2IDQ4MS42NDUgMzIxLjY0NSA0OTYgMzA0IDQ5Nkg0OEMzMC4zNTUgNDk2IDE2IDQ4MS42NDUgMTYgNDY0VjE0NEMxNiAxMjYuMzU1IDMwLjM1NSAxMTIgNDggMTEySDMwNEMzMjEuNjQ1IDExMiAzMzYgMTI2LjM1NSAzMzYgMTQ0VjQ2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ScannerTouchscreen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 0C443.578 0 440 3.578 440 8V280C440 284.422 443.578 288 448 288S456 284.422 456 280V8C456 3.578 452.422 0 448 0ZM136 64C140.422 64 144 60.422 144 56V8C144 3.578 140.422 0 136 0S128 3.578 128 8V56C128 60.422 131.578 64 136 64ZM208 64C212.422 64 216 60.422 216 56V8C216 3.578 212.422 0 208 0S200 3.578 200 8V56C200 60.422 203.578 64 208 64ZM504 0C499.578 0 496 3.578 496 8V280C496 284.422 499.578 288 504 288S512 284.422 512 280V8C512 3.578 508.422 0 504 0ZM256 64C260.422 64 264 60.422 264 56V8C264 3.578 260.422 0 256 0S248 3.578 248 8V56C248 60.422 251.578 64 256 64ZM400 0C395.578 0 392 3.578 392 8V280C392 284.422 395.578 288 400 288S408 284.422 408 280V8C408 3.578 404.422 0 400 0ZM320 64C324.422 64 328 60.422 328 56V8C328 3.578 324.422 0 320 0S312 3.578 312 8V56C312 60.422 315.578 64 320 64ZM256 160H96C78.328 160 64 174.326 64 192V416C64 433.672 78.328 448 96 448H256C273.674 448 288 433.672 288 416V192C288 174.326 273.674 160 256 160ZM272 416C272 424.822 264.822 432 256 432H96C87.178 432 80 424.822 80 416V192C80 183.178 87.178 176 96 176H256C264.822 176 272 183.178 272 192V416ZM304 96H48C21.49 96 0 117.49 0 144V464C0 490.51 21.49 512 48 512H304C330.51 512 352 490.51 352 464V144C352 117.49 330.51 96 304 96ZM336 464C336 481.645 321.645 496 304 496H48C30.355 496 16 481.645 16 464V144C16 126.355 30.355 112 48 112H304C321.645 112 336 126.355 336 144V464Z" />
        </Icon>
    </>
}
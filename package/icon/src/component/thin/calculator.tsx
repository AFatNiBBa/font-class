
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `calculator` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/calculator?s=thin calculator}
 * @preview ![calculator](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04MCAyNTZIMTEyQzEyMC44MzYgMjU2IDEyOCAyNDguODM2IDEyOCAyNDBWMjA4QzEyOCAxOTkuMTY0IDEyMC44MzYgMTkyIDExMiAxOTJIODBDNzEuMTY0IDE5MiA2NCAxOTkuMTY0IDY0IDIwOFYyNDBDNjQgMjQ4LjgzNiA3MS4xNjQgMjU2IDgwIDI1NlpNODAgMjA4SDExMlYyNDBIODBWMjA4Wk02NCAzMzZDNjQgMzQ0LjgzNiA3MS4xNjQgMzUyIDgwIDM1MkgxMTJDMTIwLjgzNiAzNTIgMTI4IDM0NC44MzYgMTI4IDMzNlYzMDRDMTI4IDI5NS4xNjQgMTIwLjgzNiAyODggMTEyIDI4OEg4MEM3MS4xNjQgMjg4IDY0IDI5NS4xNjQgNjQgMzA0VjMzNlpNODAgMzA0SDExMlYzMzZIODBWMzA0Wk0yMDggMzg0SDgwQzcxLjE2NCAzODQgNjQgMzkxLjE2NCA2NCA0MDBWNDMyQzY0IDQ0MC44MzYgNzEuMTY0IDQ0OCA4MCA0NDhIMjA4QzIxNi44MzYgNDQ4IDIyNCA0NDAuODM2IDIyNCA0MzJWNDAwQzIyNCAzOTEuMTY0IDIxNi44MzYgMzg0IDIwOCAzODRaTTIwOCA0MzJIODBWNDAwSDIwOFY0MzJaTTMwNCAyODhIMjcyQzI2My4xNjQgMjg4IDI1NiAyOTUuMTY0IDI1NiAzMDRWMzM2QzI1NiAzNDQuODM2IDI2My4xNjQgMzUyIDI3MiAzNTJIMzA0QzMxMi44MzYgMzUyIDMyMCAzNDQuODM2IDMyMCAzMzZWMzA0QzMyMCAyOTUuMTY0IDMxMi44MzYgMjg4IDMwNCAyODhaTTMwNCAzMzZIMjcyVjMwNEgzMDRWMzM2Wk0yODggNjRIOTZDNzguMzI2IDY0IDY0IDc4LjMyNiA2NCA5NlYxMjhDNjQgMTQ1LjY3NCA3OC4zMjYgMTYwIDk2IDE2MEgyODhDMzA1LjY3NCAxNjAgMzIwIDE0NS42NzQgMzIwIDEyOFY5NkMzMjAgNzguMzI2IDMwNS42NzQgNjQgMjg4IDY0Wk0zMDQgMTI4QzMwNCAxMzYuODIyIDI5Ni44MjIgMTQ0IDI4OCAxNDRIOTZDODcuMTc4IDE0NCA4MCAxMzYuODIyIDgwIDEyOFY5NkM4MCA4Ny4xNzggODcuMTc4IDgwIDk2IDgwSDI4OEMyOTYuODIyIDgwIDMwNCA4Ny4xNzggMzA0IDk2VjEyOFpNMzA0IDE5MkgyNzJDMjYzLjE2NCAxOTIgMjU2IDE5OS4xNjQgMjU2IDIwOFYyNDBDMjU2IDI0OC44MzYgMjYzLjE2NCAyNTYgMjcyIDI1NkgzMDRDMzEyLjgzNiAyNTYgMzIwIDI0OC44MzYgMzIwIDI0MFYyMDhDMzIwIDE5OS4xNjQgMzEyLjgzNiAxOTIgMzA0IDE5MlpNMzA0IDI0MEgyNzJWMjA4SDMwNFYyNDBaTTMyMCAwSDY0QzI4LjY1NiAwIDAgMjguNjU2IDAgNjRWNDQ4QzAgNDgzLjM0NCAyOC42NTYgNTEyIDY0IDUxMkgzMjBDMzU1LjM0NCA1MTIgMzg0IDQ4My4zNDQgMzg0IDQ0OFY2NEMzODQgMjguNjU2IDM1NS4zNDQgMCAzMjAgMFpNMzY4IDQ0OEMzNjggNDc0LjQ2OSAzNDYuNDY5IDQ5NiAzMjAgNDk2SDY0QzM3LjUzMSA0OTYgMTYgNDc0LjQ2OSAxNiA0NDhWNjRDMTYgMzcuNTMxIDM3LjUzMSAxNiA2NCAxNkgzMjBDMzQ2LjQ2OSAxNiAzNjggMzcuNTMxIDM2OCA2NFY0NDhaTTIwOCAxOTJIMTc2QzE2Ny4xNjQgMTkyIDE2MCAxOTkuMTY0IDE2MCAyMDhWMjQwQzE2MCAyNDguODM2IDE2Ny4xNjQgMjU2IDE3NiAyNTZIMjA4QzIxNi44MzYgMjU2IDIyNCAyNDguODM2IDIyNCAyNDBWMjA4QzIyNCAxOTkuMTY0IDIxNi44MzYgMTkyIDIwOCAxOTJaTTIwOCAyNDBIMTc2VjIwOEgyMDhWMjQwWk0yMDggMjg4SDE3NkMxNjcuMTY0IDI4OCAxNjAgMjk1LjE2NCAxNjAgMzA0VjMzNkMxNjAgMzQ0LjgzNiAxNjcuMTY0IDM1MiAxNzYgMzUySDIwOEMyMTYuODM2IDM1MiAyMjQgMzQ0LjgzNiAyMjQgMzM2VjMwNEMyMjQgMjk1LjE2NCAyMTYuODM2IDI4OCAyMDggMjg4Wk0yMDggMzM2SDE3NlYzMDRIMjA4VjMzNlpNMzA0IDM4NEgyNzJDMjYzLjE2NCAzODQgMjU2IDM5MS4xNjQgMjU2IDQwMFY0MzJDMjU2IDQ0MC44MzYgMjYzLjE2NCA0NDggMjcyIDQ0OEgzMDRDMzEyLjgzNiA0NDggMzIwIDQ0MC44MzYgMzIwIDQzMlY0MDBDMzIwIDM5MS4xNjQgMzEyLjgzNiAzODQgMzA0IDM4NFpNMzA0IDQzMkgyNzJWNDAwSDMwNFY0MzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Calculator(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M80 256H112C120.836 256 128 248.836 128 240V208C128 199.164 120.836 192 112 192H80C71.164 192 64 199.164 64 208V240C64 248.836 71.164 256 80 256ZM80 208H112V240H80V208ZM64 336C64 344.836 71.164 352 80 352H112C120.836 352 128 344.836 128 336V304C128 295.164 120.836 288 112 288H80C71.164 288 64 295.164 64 304V336ZM80 304H112V336H80V304ZM208 384H80C71.164 384 64 391.164 64 400V432C64 440.836 71.164 448 80 448H208C216.836 448 224 440.836 224 432V400C224 391.164 216.836 384 208 384ZM208 432H80V400H208V432ZM304 288H272C263.164 288 256 295.164 256 304V336C256 344.836 263.164 352 272 352H304C312.836 352 320 344.836 320 336V304C320 295.164 312.836 288 304 288ZM304 336H272V304H304V336ZM288 64H96C78.326 64 64 78.326 64 96V128C64 145.674 78.326 160 96 160H288C305.674 160 320 145.674 320 128V96C320 78.326 305.674 64 288 64ZM304 128C304 136.822 296.822 144 288 144H96C87.178 144 80 136.822 80 128V96C80 87.178 87.178 80 96 80H288C296.822 80 304 87.178 304 96V128ZM304 192H272C263.164 192 256 199.164 256 208V240C256 248.836 263.164 256 272 256H304C312.836 256 320 248.836 320 240V208C320 199.164 312.836 192 304 192ZM304 240H272V208H304V240ZM320 0H64C28.656 0 0 28.656 0 64V448C0 483.344 28.656 512 64 512H320C355.344 512 384 483.344 384 448V64C384 28.656 355.344 0 320 0ZM368 448C368 474.469 346.469 496 320 496H64C37.531 496 16 474.469 16 448V64C16 37.531 37.531 16 64 16H320C346.469 16 368 37.531 368 64V448ZM208 192H176C167.164 192 160 199.164 160 208V240C160 248.836 167.164 256 176 256H208C216.836 256 224 248.836 224 240V208C224 199.164 216.836 192 208 192ZM208 240H176V208H208V240ZM208 288H176C167.164 288 160 295.164 160 304V336C160 344.836 167.164 352 176 352H208C216.836 352 224 344.836 224 336V304C224 295.164 216.836 288 208 288ZM208 336H176V304H208V336ZM304 384H272C263.164 384 256 391.164 256 400V432C256 440.836 263.164 448 272 448H304C312.836 448 320 440.836 320 432V400C320 391.164 312.836 384 304 384ZM304 432H272V400H304V432Z" />
        </Icon>
    </>
}
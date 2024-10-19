
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `credit-card` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/credit-card?s=light credit-card}
 * @preview ![credit-card](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDAgMzg0SDM2OEMzNzYuODM2IDM4NCAzODQgMzc2LjgzNiAzODQgMzY4QzM4NCAzNTkuMTYyIDM3Ni44MzYgMzUyIDM2OCAzNTJIMjQwQzIzMS4xNjQgMzUyIDIyNCAzNTkuMTYyIDIyNCAzNjhDMjI0IDM3Ni44MzYgMjMxLjE2NCAzODQgMjQwIDM4NFpNMTEyIDM4NEgxNzZDMTg0LjgzNiAzODQgMTkyIDM3Ni44MzYgMTkyIDM2OEMxOTIgMzU5LjE2MiAxODQuODM2IDM1MiAxNzYgMzUySDExMkMxMDMuMTY0IDM1MiA5NiAzNTkuMTYyIDk2IDM2OEM5NiAzNzYuODM2IDEwMy4xNjQgMzg0IDExMiAzODRaTTUxMiAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTIgMCA5NlY0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwSDUxMkM1NDcuMzQ4IDQ4MCA1NzYgNDUxLjM0NiA1NzYgNDE2Vjk2QzU3NiA2MC42NTIgNTQ3LjM0OCAzMiA1MTIgMzJaTTU0NCA0MTZDNTQ0IDQzMy42NDUgNTI5LjY0NSA0NDggNTEyIDQ0OEg2NEM0Ni4zNTUgNDQ4IDMyIDQzMy42NDUgMzIgNDE2VjI1Nkg1NDRWNDE2Wk01NDQgMjI0SDMyVjE2MEg1NDRWMjI0Wk01NDQgMTI4SDMyVjk2QzMyIDc4LjM1NSA0Ni4zNTUgNjQgNjQgNjRINTEyQzUyOS42NDUgNjQgNTQ0IDc4LjM1NSA1NDQgOTZWMTI4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CreditCard(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M240 384H368C376.836 384 384 376.836 384 368C384 359.162 376.836 352 368 352H240C231.164 352 224 359.162 224 368C224 376.836 231.164 384 240 384ZM112 384H176C184.836 384 192 376.836 192 368C192 359.162 184.836 352 176 352H112C103.164 352 96 359.162 96 368C96 376.836 103.164 384 112 384ZM512 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H512C547.348 480 576 451.346 576 416V96C576 60.652 547.348 32 512 32ZM544 416C544 433.645 529.645 448 512 448H64C46.355 448 32 433.645 32 416V256H544V416ZM544 224H32V160H544V224ZM544 128H32V96C32 78.355 46.355 64 64 64H512C529.645 64 544 78.355 544 96V128Z" />
        </Icon>
    </>
}
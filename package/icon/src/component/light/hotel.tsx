
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hotel` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hotel?s=light hotel}
 * @preview ![hotel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgNDgwSDQ4MFYzMkg0OTZDNTA0LjgzNiAzMiA1MTIgMjQuODM2IDUxMiAxNkM1MTIgNy4xNjIgNTA0LjgzNiAwIDQ5NiAwSDE2QzcuMTY0IDAgMCA3LjE2MiAwIDE2QzAgMjQuODM2IDcuMTY0IDMyIDE2IDMySDMyVjQ4MEgxNkM3LjE2NCA0ODAgMCA0ODcuMTYyIDAgNDk2QzAgNTA0LjgzNiA3LjE2NCA1MTIgMTYgNTEySDIyNEMyMzIuODQ0IDUxMiAyNDAgNTA0Ljg0NCAyNDAgNDk2VjQxNkgyNzJWNDk2QzI3MiA1MDQuODQ0IDI3OS4xNTYgNTEyIDI4OCA1MTJINDk2QzUwNC44MzYgNTEyIDUxMiA1MDQuODM2IDUxMiA0OTZDNTEyIDQ4Ny4xNjIgNTA0LjgzNiA0ODAgNDk2IDQ4MFpNNDQ4IDQ4MEgzMDRWNDE2QzMwNCAzOTguMzU5IDI4OS42NDEgMzg0IDI3MiAzODRIMjQwQzIyMi4zNTkgMzg0IDIwOCAzOTguMzU5IDIwOCA0MTZWNDgwSDY0VjMySDQ0OFY0ODBaTTMyMCAxNjBIMzUyQzM2OS42NzQgMTYwIDM4NCAxNDUuNjcyIDM4NCAxMjhWOTZDMzg0IDc4LjMyNiAzNjkuNjc0IDY0IDM1MiA2NEgzMjBDMzAyLjMyNiA2NCAyODggNzguMzI2IDI4OCA5NlYxMjhDMjg4IDE0NS42NzIgMzAyLjMyNiAxNjAgMzIwIDE2MFpNMzIwIDk2SDM1MlYxMjhIMzIwVjk2Wk0xNjAgMjg4SDE5MkMyMDkuNjc0IDI4OCAyMjQgMjczLjY3MiAyMjQgMjU2VjIyNEMyMjQgMjA2LjMyNiAyMDkuNjc0IDE5MiAxOTIgMTkySDE2MEMxNDIuMzI2IDE5MiAxMjggMjA2LjMyNiAxMjggMjI0VjI1NkMxMjggMjczLjY3MiAxNDIuMzI2IDI4OCAxNjAgMjg4Wk0xNjAgMjI0SDE5MlYyNTZIMTYwVjIyNFpNMzIwIDI4OEgzNTJDMzY5LjY3NCAyODggMzg0IDI3My42NzIgMzg0IDI1NlYyMjRDMzg0IDIwNi4zMjYgMzY5LjY3NCAxOTIgMzUyIDE5MkgzMjBDMzAyLjMyNiAxOTIgMjg4IDIwNi4zMjYgMjg4IDIyNFYyNTZDMjg4IDI3My42NzIgMzAyLjMyNiAyODggMzIwIDI4OFpNMzIwIDIyNEgzNTJWMjU2SDMyMFYyMjRaTTE2MCAxNjBIMTkyQzIwOS42NzQgMTYwIDIyNCAxNDUuNjcyIDIyNCAxMjhWOTZDMjI0IDc4LjMyNiAyMDkuNjc0IDY0IDE5MiA2NEgxNjBDMTQyLjMyNiA2NCAxMjggNzguMzI2IDEyOCA5NlYxMjhDMTI4IDE0NS42NzIgMTQyLjMyNiAxNjAgMTYwIDE2MFpNMTYwIDk2SDE5MlYxMjhIMTYwVjk2Wk0xNjIuMDE2IDM3Ni4yMTlDMTU3LjcxOSAzODMuOTM3IDE2MC41IDM5My42ODcgMTY4LjIxOSAzOTcuOTY5QzE3NS45ODQgNDAyLjMxMiAxODUuNjcyIDM5OS40NjkgMTg5Ljk4NCAzOTEuNzgxQzIwMy42NDEgMzY3LjI1IDIyOC45MzggMzUyIDI1NiAzNTJTMzA4LjM1OSAzNjcuMjUgMzIyLjAxNiAzOTEuNzgxQzMyNC45NTMgMzk3LjAzMSAzMzAuMzkxIDQwMCAzMzYuMDE2IDQwMEMzMzguNjQxIDQwMCAzNDEuMzEyIDM5OS4zNDQgMzQzLjc4MSAzOTcuOTY5QzM1MS41IDM5My42ODcgMzU0LjI4MSAzODMuOTM3IDM0OS45ODQgMzc2LjIxOUMzMzAuNjcyIDM0MS41MzEgMjk0LjY3MiAzMjAgMjU2IDMyMFMxODEuMzI4IDM0MS41MzEgMTYyLjAxNiAzNzYuMjE5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Hotel(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496 480H480V32H496C504.836 32 512 24.836 512 16C512 7.162 504.836 0 496 0H16C7.164 0 0 7.162 0 16C0 24.836 7.164 32 16 32H32V480H16C7.164 480 0 487.162 0 496C0 504.836 7.164 512 16 512H224C232.844 512 240 504.844 240 496V416H272V496C272 504.844 279.156 512 288 512H496C504.836 512 512 504.836 512 496C512 487.162 504.836 480 496 480ZM448 480H304V416C304 398.359 289.641 384 272 384H240C222.359 384 208 398.359 208 416V480H64V32H448V480ZM320 160H352C369.674 160 384 145.672 384 128V96C384 78.326 369.674 64 352 64H320C302.326 64 288 78.326 288 96V128C288 145.672 302.326 160 320 160ZM320 96H352V128H320V96ZM160 288H192C209.674 288 224 273.672 224 256V224C224 206.326 209.674 192 192 192H160C142.326 192 128 206.326 128 224V256C128 273.672 142.326 288 160 288ZM160 224H192V256H160V224ZM320 288H352C369.674 288 384 273.672 384 256V224C384 206.326 369.674 192 352 192H320C302.326 192 288 206.326 288 224V256C288 273.672 302.326 288 320 288ZM320 224H352V256H320V224ZM160 160H192C209.674 160 224 145.672 224 128V96C224 78.326 209.674 64 192 64H160C142.326 64 128 78.326 128 96V128C128 145.672 142.326 160 160 160ZM160 96H192V128H160V96ZM162.016 376.219C157.719 383.937 160.5 393.687 168.219 397.969C175.984 402.312 185.672 399.469 189.984 391.781C203.641 367.25 228.938 352 256 352S308.359 367.25 322.016 391.781C324.953 397.031 330.391 400 336.016 400C338.641 400 341.312 399.344 343.781 397.969C351.5 393.687 354.281 383.937 349.984 376.219C330.672 341.531 294.672 320 256 320S181.328 341.531 162.016 376.219Z" />
        </Icon>
    </>
}
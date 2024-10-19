
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `seal-exclamation` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/seal-exclamation?s=thin seal-exclamation}
 * @preview ![seal-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTMuMjM1IDIyMi4wNTlMNDQ3LjY0NyAxNzYuNDcxVjExMkM0NDcuNjQ3IDg1LjQ5IDQyNi4xNTcgNjQgMzk5LjY0NyA2NEgzMzUuMTc3TDI4OS41ODkgMTguNDEyQzI4MC4yMTYgOS4wMzkgMjY3LjkzMyA0LjM1NCAyNTUuNjQ3IDQuMzU0QzI0My4zNjQgNC4zNTQgMjMxLjA3OSA5LjAzOSAyMjEuNzA2IDE4LjQxMkwxNzYuMTE4IDY0SDExMS42NDdDODUuMTM4IDY0IDYzLjY0NyA4NS40OSA2My42NDcgMTEyVjE3Ni40NzFMMTguMDYgMjIyLjA1OUMtMC42ODcgMjQwLjgwMyAtMC42ODcgMjcxLjE5NSAxOC4wNiAyODkuOTQxTDYzLjY0NyAzMzUuNTI5VjQwMEM2My42NDcgNDI2LjUxIDg1LjEzOCA0NDggMTExLjY0NyA0NDhIMTc2LjExOEwyMjEuNzA2IDQ5My41ODhDMjMxLjA3OSA1MDIuOTU5IDI0My4zNjQgNTA3LjY0NiAyNTUuNjQ3IDUwNy42NDZDMjY3LjkzMyA1MDcuNjQ2IDI4MC4yMTYgNTAyLjk1OSAyODkuNTg5IDQ5My41ODhMMzM1LjE3NyA0NDhIMzk5LjY0N0M0MjYuMTU3IDQ0OCA0NDcuNjQ3IDQyNi41MSA0NDcuNjQ3IDQwMFYzMzUuNTI5TDQ5My4yMzUgMjg5Ljk0MUM1MTEuOTgxIDI3MS4xOTUgNTExLjk4MSAyNDAuODAzIDQ5My4yMzUgMjIyLjA1OVpNNDgxLjkyMyAyNzguNjI5TDQzNi4zMzUgMzI0LjIxN0w0MzEuNjQ3IDMyOC45MDJWNDAwQzQzMS42NDcgNDE3LjY0NSA0MTcuMjkyIDQzMiAzOTkuNjQ3IDQzMkgzMjguNTVMMjc4LjI3NiA0ODIuMjczQzI3Mi4yMzEgNDg4LjMxNiAyNjQuMTk0IDQ5MS42NDYgMjU1LjY0NyA0OTEuNjQ2UzIzOS4wNjMgNDg4LjMxNiAyMzMuMDIxIDQ4Mi4yNzNMMTgyLjc0NSA0MzJIMTExLjY0N0M5NC4wMDMgNDMyIDc5LjY0NyA0MTcuNjQ1IDc5LjY0NyA0MDBWMzI4LjkwMkw3NC45NiAzMjQuMjE3TDI5LjM3MiAyNzguNjI5QzIzLjMyOSAyNzIuNTg0IDE5Ljk5OSAyNjQuNTQ3IDE5Ljk5OSAyNTZTMjMuMzI5IDIzOS40MTYgMjkuMzcyIDIzMy4zNzNMNzQuOTYgMTg3Ljc4NUw3OS42NDcgMTgzLjFWMTEyQzc5LjY0NyA5NC4zNTUgOTQuMDAzIDgwIDExMS42NDcgODBIMTgyLjc0NUwyMzMuMDIxIDI5LjcyN0MyMzkuMDY1IDIzLjY4MiAyNDcuMTAxIDIwLjM1NCAyNTUuNjQ3IDIwLjM1NFMyNzIuMjMxIDIzLjY4MiAyNzguMjc0IDI5LjcyN0wzMjguNTUgODBIMzk5LjY0N0M0MTcuMjkyIDgwIDQzMS42NDcgOTQuMzU1IDQzMS42NDcgMTEyVjE4My4xTDQzNi4zMzUgMTg3Ljc4NUw0ODEuOTIzIDIzMy4zNzNDNDg3Ljk2OCAyMzkuNDE2IDQ5MS4yOTYgMjQ3LjQ1MyA0OTEuMjk2IDI1NlM0ODcuOTY2IDI3Mi41ODQgNDgxLjkyMyAyNzguNjI5Wk0yNTUuNjQ3IDMwNEMyNjAuMDU0IDMwNCAyNjMuNjQ3IDMwMC40MjIgMjYzLjY0NyAyOTZWMTIwQzI2My42NDcgMTE1LjU3OCAyNjAuMDU0IDExMiAyNTUuNjQ3IDExMlMyNDcuNjQ3IDExNS41NzggMjQ3LjY0NyAxMjBWMjk2QzI0Ny42NDcgMzAwLjQyMiAyNTEuMjQxIDMwNCAyNTUuNjQ3IDMwNFpNMjU1LjY0NyAzNTJDMjQ2LjgxMiAzNTIgMjM5LjY0NyAzNTkuMTY0IDIzOS42NDcgMzY4UzI0Ni44MTIgMzg0IDI1NS42NDcgMzg0UzI3MS42NDcgMzc2LjgzNiAyNzEuNjQ3IDM2OFMyNjQuNDgzIDM1MiAyNTUuNjQ3IDM1MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SealExclamation(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M493.235 222.059L447.647 176.471V112C447.647 85.49 426.157 64 399.647 64H335.177L289.589 18.412C280.216 9.039 267.933 4.354 255.647 4.354C243.364 4.354 231.079 9.039 221.706 18.412L176.118 64H111.647C85.138 64 63.647 85.49 63.647 112V176.471L18.06 222.059C-0.687 240.803 -0.687 271.195 18.06 289.941L63.647 335.529V400C63.647 426.51 85.138 448 111.647 448H176.118L221.706 493.588C231.079 502.959 243.364 507.646 255.647 507.646C267.933 507.646 280.216 502.959 289.589 493.588L335.177 448H399.647C426.157 448 447.647 426.51 447.647 400V335.529L493.235 289.941C511.981 271.195 511.981 240.803 493.235 222.059ZM481.923 278.629L436.335 324.217L431.647 328.902V400C431.647 417.645 417.292 432 399.647 432H328.55L278.276 482.273C272.231 488.316 264.194 491.646 255.647 491.646S239.063 488.316 233.021 482.273L182.745 432H111.647C94.003 432 79.647 417.645 79.647 400V328.902L74.96 324.217L29.372 278.629C23.329 272.584 19.999 264.547 19.999 256S23.329 239.416 29.372 233.373L74.96 187.785L79.647 183.1V112C79.647 94.355 94.003 80 111.647 80H182.745L233.021 29.727C239.065 23.682 247.101 20.354 255.647 20.354S272.231 23.682 278.274 29.727L328.55 80H399.647C417.292 80 431.647 94.355 431.647 112V183.1L436.335 187.785L481.923 233.373C487.968 239.416 491.296 247.453 491.296 256S487.966 272.584 481.923 278.629ZM255.647 304C260.054 304 263.647 300.422 263.647 296V120C263.647 115.578 260.054 112 255.647 112S247.647 115.578 247.647 120V296C247.647 300.422 251.241 304 255.647 304ZM255.647 352C246.812 352 239.647 359.164 239.647 368S246.812 384 255.647 384S271.647 376.836 271.647 368S264.483 352 255.647 352Z" />
        </Icon>
    </>
}
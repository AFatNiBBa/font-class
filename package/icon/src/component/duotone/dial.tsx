
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `dial` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dial?s=duotone dial}
 * @preview ![dial](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyIDI1NkMxNC4zMjYgMjU2IDAgMjcwLjMyOCAwIDI4OEMwIDMwNS42NzQgMTQuMzI2IDMyMCAzMiAzMjBTNjQgMzA1LjY3NCA2NCAyODhDNjQgMjcwLjMyOCA0OS42NzQgMjU2IDMyIDI1NlpNODQuMzU0IDQ0Ni4zOTNDNzEuODU3IDQ1OC44OTEgNzEuODU3IDQ3OS4xNSA4NC4zNTQgNDkxLjY0OEM5Ni44NSA1MDQuMTQ1IDExNy4xMTEgNTA0LjE0NSAxMjkuNjA5IDQ5MS42NDhDMTQyLjEwNSA0NzkuMTUgMTQyLjEwNSA0NTguODkxIDEyOS42MDkgNDQ2LjM5M0MxMTcuMTExIDQzMy44OTYgOTYuODUgNDMzLjg5NiA4NC4zNTQgNDQ2LjM5M1pNODQuMzU0IDg0LjM1NEM3MS44NTcgOTYuODUgNzEuODU3IDExNy4xMTEgODQuMzU0IDEyOS42MDdDOTYuODUgMTQyLjEwNSAxMTcuMTExIDE0Mi4xMDUgMTI5LjYwOSAxMjkuNjA3QzE0Mi4xMDUgMTE3LjExMSAxNDIuMTA1IDk2Ljg1IDEyOS42MDkgODQuMzU0QzExNy4xMTEgNzEuODU3IDk2Ljg1IDcxLjg1NyA4NC4zNTQgODQuMzU0Wk01NDQgMjU2QzUyNi4zMjYgMjU2IDUxMiAyNzAuMzI4IDUxMiAyODhDNTEyIDMwNS42NzQgNTI2LjMyNiAzMjAgNTQ0IDMyMFM1NzYgMzA1LjY3NCA1NzYgMjg4QzU3NiAyNzAuMzI4IDU2MS42NzQgMjU2IDU0NCAyNTZaTTI4OCAwQzI3MC4zMjggMCAyNTYgMTQuMzI2IDI1NiAzMlMyNzAuMzI4IDY0IDI4OCA2NEMzMDUuNjc0IDY0IDMyMCA0OS42NzQgMzIwIDMyUzMwNS42NzQgMCAyODggMFpNNDQ2LjM5MyA4NC4zNTRDNDMzLjg5NiA5Ni44NSA0MzMuODk2IDExNy4xMTEgNDQ2LjM5MyAxMjkuNjA3QzQ1OC44OTEgMTQyLjEwNSA0NzkuMTUyIDE0Mi4xMDUgNDkxLjY0OCAxMjkuNjA3QzUwNC4xNDUgMTE3LjExMSA1MDQuMTQ1IDk2Ljg1IDQ5MS42NDggODQuMzU0UzQ1OC44OTEgNzEuODU3IDQ0Ni4zOTMgODQuMzU0Wk00NDYuMzkzIDQ0Ni4zOTNDNDMzLjg5NiA0NTguODkxIDQzMy44OTYgNDc5LjE1IDQ0Ni4zOTMgNDkxLjY0OEM0NTguODkxIDUwNC4xNDUgNDc5LjE1MiA1MDQuMTQ1IDQ5MS42NDggNDkxLjY0OEM1MDQuMTQ1IDQ3OS4xNSA1MDQuMTQ1IDQ1OC44OTEgNDkxLjY0OCA0NDYuMzkzQzQ3OS4xNTIgNDMzLjg5NiA0NTguODkxIDQzMy44OTYgNDQ2LjM5MyA0NDYuMzkzWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00NDguMDAyIDI4OC4wMDJDNDQ4LjAwMiAzNzYuMzY3IDM3Ni4zNjcgNDQ4LjAwMiAyODguMDAyIDQ0OC4wMDJDMTk5LjYzNSA0NDguMDAyIDEyOCAzNzYuMzY3IDEyOCAyODguMDAyQzEyOCAxOTkuNjM1IDE5OS42MzUgMTI4IDI4OC4wMDIgMTI4QzMyNi40MDIgMTI4IDM2MS4xNjggMTQyLjA4NiAzODguNzQyIDE2NC42MzVMMjc2LjY4OSAyNzYuNjg4QzI3MC40MzkgMjgyLjkzOCAyNzAuNDM5IDI5My4wNjMgMjc2LjY4OSAyOTkuMzEyUzI5My4wNjQgMzA1LjU2MiAyOTkuMzE0IDI5OS4zMTJMNDExLjM2NyAxODcuMjZDNDMzLjkxNiAyMTQuODM2IDQ0OC4wMDIgMjQ5LjYwMiA0NDguMDAyIDI4OC4wMDJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Dial(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M32 256C14.326 256 0 270.328 0 288C0 305.674 14.326 320 32 320S64 305.674 64 288C64 270.328 49.674 256 32 256ZM84.354 446.393C71.857 458.891 71.857 479.15 84.354 491.648C96.85 504.145 117.111 504.145 129.609 491.648C142.105 479.15 142.105 458.891 129.609 446.393C117.111 433.896 96.85 433.896 84.354 446.393ZM84.354 84.354C71.857 96.85 71.857 117.111 84.354 129.607C96.85 142.105 117.111 142.105 129.609 129.607C142.105 117.111 142.105 96.85 129.609 84.354C117.111 71.857 96.85 71.857 84.354 84.354ZM544 256C526.326 256 512 270.328 512 288C512 305.674 526.326 320 544 320S576 305.674 576 288C576 270.328 561.674 256 544 256ZM288 0C270.328 0 256 14.326 256 32S270.328 64 288 64C305.674 64 320 49.674 320 32S305.674 0 288 0ZM446.393 84.354C433.896 96.85 433.896 117.111 446.393 129.607C458.891 142.105 479.152 142.105 491.648 129.607C504.145 117.111 504.145 96.85 491.648 84.354S458.891 71.857 446.393 84.354ZM446.393 446.393C433.896 458.891 433.896 479.15 446.393 491.648C458.891 504.145 479.152 504.145 491.648 491.648C504.145 479.15 504.145 458.891 491.648 446.393C479.152 433.896 458.891 433.896 446.393 446.393Z" />
            <path d="M448.002 288.002C448.002 376.367 376.367 448.002 288.002 448.002C199.635 448.002 128 376.367 128 288.002C128 199.635 199.635 128 288.002 128C326.402 128 361.168 142.086 388.742 164.635L276.689 276.688C270.439 282.938 270.439 293.063 276.689 299.312S293.064 305.562 299.314 299.312L411.367 187.26C433.916 214.836 448.002 249.602 448.002 288.002Z" />
        </Icon>
    </>
}
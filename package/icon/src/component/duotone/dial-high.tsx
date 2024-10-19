
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `dial-high` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dial-high?s=duotone dial-high}
 * @preview ![dial-high](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTg0LjM1NCA4NC4zNTRDNzEuODU3IDk2Ljg1IDcxLjg1NyAxMTcuMTExIDg0LjM1NCAxMjkuNjA3Qzk2Ljg1IDE0Mi4xMDUgMTE3LjExMSAxNDIuMTA1IDEyOS42MDkgMTI5LjYwN0MxNDIuMTA1IDExNy4xMTEgMTQyLjEwNSA5Ni44NSAxMjkuNjA5IDg0LjM1NEMxMTcuMTExIDcxLjg1NyA5Ni44NSA3MS44NTcgODQuMzU0IDg0LjM1NFpNODQuMzU0IDQ0Ni4zOTNDNzEuODU3IDQ1OC44OTEgNzEuODU3IDQ3OS4xNSA4NC4zNTQgNDkxLjY0OEM5Ni44NSA1MDQuMTQ1IDExNy4xMTEgNTA0LjE0NSAxMjkuNjA5IDQ5MS42NDhDMTQyLjEwNSA0NzkuMTUgMTQyLjEwNSA0NTguODkxIDEyOS42MDkgNDQ2LjM5M0MxMTcuMTExIDQzMy44OTYgOTYuODUgNDMzLjg5NiA4NC4zNTQgNDQ2LjM5M1pNMzIgMjU2QzE0LjMyNiAyNTYgMCAyNzAuMzI4IDAgMjg4QzAgMzA1LjY3NCAxNC4zMjYgMzIwIDMyIDMyMFM2NCAzMDUuNjc0IDY0IDI4OEM2NCAyNzAuMzI4IDQ5LjY3NCAyNTYgMzIgMjU2Wk00NDYuMzkzIDQ0Ni4zOTNDNDMzLjg5NiA0NTguODkxIDQzMy44OTYgNDc5LjE1IDQ0Ni4zOTMgNDkxLjY0OEM0NTguODkxIDUwNC4xNDUgNDc5LjE1MiA1MDQuMTQ1IDQ5MS42NDggNDkxLjY0OEM1MDQuMTQ1IDQ3OS4xNSA1MDQuMTQ1IDQ1OC44OTEgNDkxLjY0OCA0NDYuMzkzQzQ3OS4xNTIgNDMzLjg5NiA0NTguODkxIDQzMy44OTYgNDQ2LjM5MyA0NDYuMzkzWk01NDQgMjU2QzUyNi4zMjYgMjU2IDUxMiAyNzAuMzI4IDUxMiAyODhDNTEyIDMwNS42NzQgNTI2LjMyNiAzMjAgNTQ0IDMyMFM1NzYgMzA1LjY3NCA1NzYgMjg4QzU3NiAyNzAuMzI4IDU2MS42NzQgMjU2IDU0NCAyNTZaTTI4OCAwQzI3MC4zMjggMCAyNTYgMTQuMzI2IDI1NiAzMlMyNzAuMzI4IDY0IDI4OCA2NEMzMDUuNjc0IDY0IDMyMCA0OS42NzQgMzIwIDMyUzMwNS42NzQgMCAyODggMFpNNDQ2LjM5MyA4NC4zNTRDNDMzLjg5NiA5Ni44NSA0MzMuODk2IDExNy4xMTEgNDQ2LjM5MyAxMjkuNjA3QzQ1OC44OTEgMTQyLjEwNSA0NzkuMTUyIDE0Mi4xMDUgNDkxLjY0OCAxMjkuNjA3QzUwNC4xNDUgMTE3LjExMSA1MDQuMTQ1IDk2Ljg1IDQ5MS42NDggODQuMzU0UzQ1OC44OTEgNzEuODU3IDQ0Ni4zOTMgODQuMzU0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yODguMDAyIDMwMy45OThINDQ2LjQ2OUM0NDIuOTE0IDMzOS40NDMgNDI4LjI5MSAzNzMuOTg2IDQwMS4xMzkgNDAxLjEzOUMzMzguNjU0IDQ2My42MjMgMjM3LjM0OCA0NjMuNjIzIDE3NC44NjMgNDAxLjEzOVMxMTIuMzc5IDIzNy4zNDggMTc0Ljg2MyAxNzQuODYzUzMzOC42NTQgMTEyLjM3OSA0MDEuMTM5IDE3NC44NjNDNDI4LjI5MyAyMDIuMDE2IDQ0Mi45MTYgMjM2LjU2MSA0NDYuNDY5IDI3Mi4wMDJIMjg4LjAwMkMyNzkuMTY0IDI3Mi4wMDIgMjcyLjAwNCAyNzkuMTYyIDI3Mi4wMDQgMjg4QzI3Mi4wMDQgMjk2Ljg0IDI3OS4xNjQgMzAzLjk5OCAyODguMDAyIDMwMy45OThaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function DialHigh(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path opacity={.4} d="M84.354 84.354C71.857 96.85 71.857 117.111 84.354 129.607C96.85 142.105 117.111 142.105 129.609 129.607C142.105 117.111 142.105 96.85 129.609 84.354C117.111 71.857 96.85 71.857 84.354 84.354ZM84.354 446.393C71.857 458.891 71.857 479.15 84.354 491.648C96.85 504.145 117.111 504.145 129.609 491.648C142.105 479.15 142.105 458.891 129.609 446.393C117.111 433.896 96.85 433.896 84.354 446.393ZM32 256C14.326 256 0 270.328 0 288C0 305.674 14.326 320 32 320S64 305.674 64 288C64 270.328 49.674 256 32 256ZM446.393 446.393C433.896 458.891 433.896 479.15 446.393 491.648C458.891 504.145 479.152 504.145 491.648 491.648C504.145 479.15 504.145 458.891 491.648 446.393C479.152 433.896 458.891 433.896 446.393 446.393ZM544 256C526.326 256 512 270.328 512 288C512 305.674 526.326 320 544 320S576 305.674 576 288C576 270.328 561.674 256 544 256ZM288 0C270.328 0 256 14.326 256 32S270.328 64 288 64C305.674 64 320 49.674 320 32S305.674 0 288 0ZM446.393 84.354C433.896 96.85 433.896 117.111 446.393 129.607C458.891 142.105 479.152 142.105 491.648 129.607C504.145 117.111 504.145 96.85 491.648 84.354S458.891 71.857 446.393 84.354Z" />
            <path d="M288.002 303.998H446.469C442.914 339.443 428.291 373.986 401.139 401.139C338.654 463.623 237.348 463.623 174.863 401.139S112.379 237.348 174.863 174.863S338.654 112.379 401.139 174.863C428.293 202.016 442.916 236.561 446.469 272.002H288.002C279.164 272.002 272.004 279.162 272.004 288C272.004 296.84 279.164 303.998 288.002 303.998Z" />
        </Icon>
    </>
}
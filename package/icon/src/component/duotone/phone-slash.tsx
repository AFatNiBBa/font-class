
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `phone-slash` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/phone-slash?s=duotone phone-slash}
 * @preview ![phone-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI3MS45MjIgMzY3LjUzM0wyMjcuODc1IDMxMy43MjJDMjE5LjE4OCAzMDIuOTQxIDIwNC4xNzIgMjk5LjIyMiAxOTEuMzkxIDMwNC43NTNMODIuOTA3IDM1MS4yNTJDNjkuMDAxIDM1Ny4yNTIgNjEuNDIzIDM3Mi40MDggNjQuNzk4IDM4Ny4wMDJMODguMDQ4IDQ4Ny43ODJDOTEuMzEzIDUwMi4wMzEgMTAzLjg0NCA1MTIgMTE4LjUxNiA1MTJDMjI1LjkyIDUxMiAzMjQuNTk4IDQ3NC41NDUgNDAyLjc0MiA0MTIuMzQ3TDMxMy45OTIgMzQyLjc4OEMzMDAuNTYyIDM1MS45MTMgMjg2LjYwNiAzNjAuMzI1IDI3MS45MjIgMzY3LjUzM1pNNTUxLjc4IDI0LjA3TDQ1MS4wMzEgMC44MkM0MzYuMzQzIC0yLjU4NiA0MjEuMjY1IDUuMDM5IDQxNS4xNzEgMTguOTQ1TDM2OC42NCAxMjcuNTA2QzM2My4yMDMgMTQwLjI4NyAzNjYuODc1IDE1NS4xNjIgMzc3LjYyNSAxNjMuOTQzTDQzMS40NTMgMjA4LjAzNkM0MTkuMTc5IDIzMy4wMzIgNDAzLjg3NyAyNTYuMjI3IDM4Ni4xODUgMjc3LjM3MUw0NzEuMjU1IDM0NC4wNDZDNTM2LjI4NCAyNjUuMDc4IDU3NS45OTkgMTY0LjU2NCA1NzUuOTk5IDU0LjUwN0M1NzUuOTk5IDM5Ljg1MSA1NjYuMDMgMjcuMzIgNTUxLjc4IDI0LjA3WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik02MzQuODc0IDUwMi44MDVDNjI2Ljc0OSA1MTMuMjExIDYxMS42ODYgNTE1LjA4NiA2MDEuMTg2IDUwNi44ODNMOS4xODkgNDIuODlDLTEuMjQ5IDM0LjcxOCAtMy4wNjEgMTkuNjI1IDUuMTI2IDkuMTg3QzkuODQ1IDMuMTU2IDE2LjkwNyAwIDI0LjAzMiAwQzI5LjE4OSAwIDM0LjQwNyAxLjY3MiAzOC44MTQgNS4xMDlMNjMwLjgxMSA0NjkuMTAyQzY0MS4yNDkgNDc3LjI3NCA2NDMuMDYxIDQ5Mi4zNjcgNjM0Ljg3NCA1MDIuODA1WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PhoneSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M271.922 367.533L227.875 313.722C219.188 302.941 204.172 299.222 191.391 304.753L82.907 351.252C69.001 357.252 61.423 372.408 64.798 387.002L88.048 487.782C91.313 502.031 103.844 512 118.516 512C225.92 512 324.598 474.545 402.742 412.347L313.992 342.788C300.562 351.913 286.606 360.325 271.922 367.533ZM551.78 24.07L451.031 0.82C436.343 -2.586 421.265 5.039 415.171 18.945L368.64 127.506C363.203 140.287 366.875 155.162 377.625 163.943L431.453 208.036C419.179 233.032 403.877 256.227 386.185 277.371L471.255 344.046C536.284 265.078 575.999 164.564 575.999 54.507C575.999 39.851 566.03 27.32 551.78 24.07Z" />
            <path d="M634.874 502.805C626.749 513.211 611.686 515.086 601.186 506.883L9.189 42.89C-1.249 34.718 -3.061 19.625 5.126 9.187C9.845 3.156 16.907 0 24.032 0C29.189 0 34.407 1.672 38.814 5.109L630.811 469.102C641.249 477.274 643.061 492.367 634.874 502.805Z" />
        </Icon>
    </>
}
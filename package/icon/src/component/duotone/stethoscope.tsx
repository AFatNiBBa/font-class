
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `stethoscope` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/stethoscope?s=duotone stethoscope}
 * @preview ![stethoscope](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMS45IDI2NS4yNDZWMzQ0LjAwMkM1MTEuOSA0MzYuNjAyIDQzMi45IDUxMiAzMzUuOSA1MTJDMjQwLjUxIDUxMiAxNjIuNjIxIDQzOS4yMjEgMTYwIDM0OC44MzJIMTYwLjU0N0MxNzAuNjk3IDM1MC44NTkgMTgxLjE2NCAzNTIuMDAyIDE5MS45IDM1Mi4wMDJTMjEzLjEwNCAzNTAuODU5IDIyMy4yNTQgMzQ4LjgzMkgyMjQuMUMyMjYuODAxIDQwMy45MzIgMjc2IDQ0OC4wMzEgMzM2IDQ0OC4wMzFDMzk3LjgwMSA0NDguMDMxIDQ0OCA0MDEuMzMgNDQ4IDM0NC4wMzFWMjY1LjI5OUM0NTcuNzgzIDI2OS41NjQgNDY4LjU0NSAyNzIgNDc5LjkgMjcyQzQ5MS4yOTUgMjcyIDUwMi4wOSAyNjkuNTM5IDUxMS45IDI2NS4yNDZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTMzMi42OTkgMTMuMDc0TDI2OS44MDEgMC40NzVDMjU2LjgzOCAtMi4xMzMgMjQ0LjIxNyA2LjI2MiAyNDEuNjA5IDE5LjIyNUMyNDEuNjA3IDE5LjI0IDI0MS42MDQgMTkuMjU4IDI0MS42IDE5LjI3M0wyMzguNCAzNS4wMDRDMjM1Ljc5MyA0Ny45NjcgMjQ0LjE4OCA2MC41ODggMjU3LjE1IDYzLjE5M0MyNTcuMTY2IDYzLjE5NyAyNTcuMTg0IDYzLjIwMSAyNTcuMTk5IDYzLjIwM0wyODcuOSA2OS4zMDVMMjg4IDE5Mi4wMDJDMjg4IDI0NS4wMjEgMjQ1LjAyIDI4OC4wMDIgMTkyIDI4OC4wMDJTOTYgMjQ1LjAyMSA5NiAxOTIuMDAyTDk1LjkgMTIwLjAwNFY2OS4zNzNMMTI2LjYgNjMuMjczQzEzOS41NjggNjAuNjk1IDE0Ny45ODggNDguMDkyIDE0NS40MSAzNS4xMjVDMTQ1LjQwNiAzNS4xMDcgMTQ1LjQwNCAzNS4wOTIgMTQ1LjQgMzUuMDc0TDE0Mi4zMDEgMTkuMzc1QzEzOS43MjEgNi40MDYgMTI3LjExNyAtMi4wMTQgMTE0LjE1IDAuNTY0QzExNC4xMzMgMC41NjggMTE0LjExNyAwLjU3IDExNC4xIDAuNTc0TDUxLjMwMSAxMy4wMDRDNDAuMDg2IDE1LjI3OSAzMi4wMTggMjUuMTMxIDMyIDM2LjU3NFYxOTIuMDAyQzMyIDI4MC4yMjMgMTAzLjc3OSAzNTIuMDAyIDE5MiAzNTIuMDAyUzM1MiAyODAuMjIzIDM1MiAxOTIuMDAyVjM2LjU3NEMzNTEuOTgyIDI1LjE0NSAzNDMuOTA4IDE1LjMxMiAzMzIuNjk5IDEzLjA3NFpNNDgwIDExMkM0MzUuODE4IDExMiA0MDAgMTQ3LjgxNiA0MDAgMTkyUzQzNS44MTggMjcyIDQ4MCAyNzJDNTI0LjE4NCAyNzIgNTYwIDIzNi4xODQgNTYwIDE5MlM1MjQuMTg0IDExMiA0ODAgMTEyWk00ODAgMjE2QzQ2Ni43NjggMjE2IDQ1NiAyMDUuMjM0IDQ1NiAxOTJTNDY2Ljc2OCAxNjggNDgwIDE2OEM0OTMuMjM0IDE2OCA1MDQgMTc4Ljc2NiA1MDQgMTkyUzQ5My4yMzQgMjE2IDQ4MCAyMTZaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Stethoscope(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path opacity={.4} d="M511.9 265.246V344.002C511.9 436.602 432.9 512 335.9 512C240.51 512 162.621 439.221 160 348.832H160.547C170.697 350.859 181.164 352.002 191.9 352.002S213.104 350.859 223.254 348.832H224.1C226.801 403.932 276 448.031 336 448.031C397.801 448.031 448 401.33 448 344.031V265.299C457.783 269.564 468.545 272 479.9 272C491.295 272 502.09 269.539 511.9 265.246Z" />
            <path d="M332.699 13.074L269.801 0.475C256.838 -2.133 244.217 6.262 241.609 19.225C241.607 19.24 241.604 19.258 241.6 19.273L238.4 35.004C235.793 47.967 244.188 60.588 257.15 63.193C257.166 63.197 257.184 63.201 257.199 63.203L287.9 69.305L288 192.002C288 245.021 245.02 288.002 192 288.002S96 245.021 96 192.002L95.9 120.004V69.373L126.6 63.273C139.568 60.695 147.988 48.092 145.41 35.125C145.406 35.107 145.404 35.092 145.4 35.074L142.301 19.375C139.721 6.406 127.117 -2.014 114.15 0.564C114.133 0.568 114.117 0.57 114.1 0.574L51.301 13.004C40.086 15.279 32.018 25.131 32 36.574V192.002C32 280.223 103.779 352.002 192 352.002S352 280.223 352 192.002V36.574C351.982 25.145 343.908 15.312 332.699 13.074ZM480 112C435.818 112 400 147.816 400 192S435.818 272 480 272C524.184 272 560 236.184 560 192S524.184 112 480 112ZM480 216C466.768 216 456 205.234 456 192S466.768 168 480 168C493.234 168 504 178.766 504 192S493.234 216 480 216Z" />
        </Icon>
    </>
}
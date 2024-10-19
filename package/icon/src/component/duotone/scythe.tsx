
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `scythe` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scythe?s=duotone scythe}
 * @preview ![scythe](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU4My44NzMgMEgzMzguODUyQzE5MS45ODYgMCA2My45OTYgNjQgMCAxOTJINTQ0TDU4My44NzMgMFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNjMyLjYwNyAxMS42MjVDNjI2LjYwNyA0LjI1IDYxNy40ODIgMCA2MDcuOTg0IDBINTgyLjQ4Nkw1MjIuNzQgMjg4SDQxNS45OThDMzk4LjMyNiAyODggMzg0IDMwMi4zMjYgMzg0IDMyMFMzOTguMzI2IDM1MiA0MTUuOTk4IDM1Mkg1MDkuNDlMNDgwLjI0MiA0OTNDNDc5LjM2NyA0OTcuNzUgNDgwLjYxNyA1MDIuNSA0ODMuNzQyIDUwNi4yNUM0ODYuNzQyIDUwOS44NzUgNDkxLjI0MiA1MTIgNDk1Ljk5MiA1MTJINTI3LjQ5QzUzNS4xMTMgNTEyIDU0MS43MzggNTA2LjUgNTQzLjExMyA0OTlMNjM5LjQ4IDM4QzY0MS4yMyAyOC42MjUgNjM4LjczIDE5IDYzMi42MDcgMTEuNjI1WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Scythe(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M583.873 0H338.852C191.986 0 63.996 64 0 192H544L583.873 0Z" />
            <path d="M632.607 11.625C626.607 4.25 617.482 0 607.984 0H582.486L522.74 288H415.998C398.326 288 384 302.326 384 320S398.326 352 415.998 352H509.49L480.242 493C479.367 497.75 480.617 502.5 483.742 506.25C486.742 509.875 491.242 512 495.992 512H527.49C535.113 512 541.738 506.5 543.113 499L639.48 38C641.23 28.625 638.73 19 632.607 11.625Z" />
        </Icon>
    </>
}
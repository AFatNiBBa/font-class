
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dungeon` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dungeon?s=duotone dungeon}
 * @preview ![dungeon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI0MCAxNzcuNjI1VjQ3MkMyNDAgNDc2LjM3NSAyNDMuNjI1IDQ4MCAyNDggNDgwSDI2NEMyNjguMzc1IDQ4MCAyNzIgNDc2LjM3NSAyNzIgNDcyVjE3Ny42MjVDMjY2Ljc1IDE3Ni43NSAyNjEuNSAxNzYgMjU2IDE3NlMyNDUuMjUgMTc2Ljc1IDI0MCAxNzcuNjI1Wk0xNzYgMjE5LjEyNVY0NzJDMTc2IDQ3Ni4zNzUgMTc5LjYyNSA0ODAgMTg0IDQ4MEgyMDBDMjA0LjM3NSA0ODAgMjA4IDQ3Ni4zNzUgMjA4IDQ3MlYxODkuMzc1QzE5NS4yNSAxOTYuNzUgMTg0LjEyNSAyMDYuODc1IDE3NiAyMTkuMTI1Wk0zMDQgMTg5LjM3NVY0NzJDMzA0IDQ3Ni4zNzUgMzA3LjYyNSA0ODAgMzEyIDQ4MEgzMjhDMzMyLjM3NSA0ODAgMzM2IDQ3Ni4zNzUgMzM2IDQ3MlYyMTkuMTI1QzMyNy44NzUgMjA2Ljg3NSAzMTYuNzUgMTk2Ljc1IDMwNCAxODkuMzc1WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0xMjguNzUgMTk1LjM3NUw0NS44NzUgMTQzLjVDMzcuODc1IDEzOC41IDI2Ljg3NSAxNDEuMzc1IDIzIDE1MEMxMC4xMjUgMTc4LjEyNSAyLjUgMjA4LjM3NSAwLjUgMjM5LjI1QzAgMjQ4LjM3NSA3LjYyNSAyNTYgMTYuNzUgMjU2SDExMy44NzVDMTIxLjc1IDI1NiAxMjcuODc1IDI0OS43NSAxMjguODc1IDI0MS44NzVDMTI5Ljg3NSAyMzIuNSAxMzIuMTI1IDIyMy41IDEzNS4xMjUgMjE0Ljg3NUMxMzcuNjI1IDIwNy41IDEzNS4zNzUgMTk5LjUgMTI4Ljc1IDE5NS4zNzVaTTMxOSA4QzI5OC44NzUgMi44NzUgMjc3Ljc1IDAgMjU2IDBTMjEzLjEyNSAyLjg3NSAxOTMgOEMxODMuNzUgMTAuMzc1IDE3OSAyMC42MjUgMTgyLjYyNSAyOS4zNzVMMjIwIDEzMy4zNzVDMjIyLjM3NSAxMzkuNzUgMjI4LjM3NSAxNDQgMjM1LjEyNSAxNDRIMjc2Ljg3NUMyODMuNjI1IDE0NCAyODkuNjI1IDEzOS43NSAyOTIgMTMzLjM3NUwzMjkuMzc1IDI5LjM3NUMzMzMgMjAuNjI1IDMyOC4yNSAxMC4zNzUgMzE5IDhaTTExMiAyODhIMTZDNy4xMjUgMjg4IDAgMjk1LjEyNSAwIDMwNFYzNjhDMCAzNzYuODc1IDcuMTI1IDM4NCAxNiAzODRIMTEyQzEyMC44NzUgMzg0IDEyOCAzNzYuODc1IDEyOCAzNjhWMzA0QzEyOCAyOTUuMTI1IDEyMC44NzUgMjg4IDExMiAyODhaTTExMiA0MTZIMTZDNy4xMjUgNDE2IDAgNDIzLjEyNSAwIDQzMlY0OTZDMCA1MDQuODc1IDcuMTI1IDUxMiAxNiA1MTJIMTEyQzEyMC44NzUgNTEyIDEyOCA1MDQuODc1IDEyOCA0OTZWNDMyQzEyOCA0MjMuMTI1IDEyMC44NzUgNDE2IDExMiA0MTZaTTE4OS4yNSAxMzIuMzc1TDE1MyA0MS41QzE0OS41IDMyLjc1IDEzOC44NzUgMjguNSAxMzAuNjI1IDMzLjI1QzEwMy4yNSA0OC42MjUgNzkgNjkgNTkgOTMuMTI1QzUyLjg3NSAxMDAuMzc1IDU1LjEyNSAxMTEuNjI1IDYzLjEyNSAxMTYuNjI1TDE0Ni4xMjUgMTY4LjVDMTUyLjYyNSAxNzIuNSAxNjAuNzUgMTcxLjEyNSAxNjYuMjUgMTY1LjYyNUMxNzEuMzc1IDE2MC41IDE3NyAxNTUuODc1IDE4MyAxNTEuNjI1QzE4OS4yNSAxNDcuMjUgMTkyLjEyNSAxMzkuNSAxODkuMjUgMTMyLjM3NVpNMzk4LjEyNSAyNTZINDk1LjI1QzUwNC4zNzUgMjU2IDUxMiAyNDguMzc1IDUxMS41IDIzOS4yNUM1MDkuNSAyMDguMzc1IDUwMS44NzUgMTc4LjEyNSA0ODkgMTUwQzQ4NS4xMjUgMTQxLjM3NSA0NzQuMTI1IDEzOC41IDQ2Ni4xMjUgMTQzLjVMMzgzLjI1IDE5NS4zNzVDMzc2LjYyNSAxOTkuNSAzNzQuMzc1IDIwNy41IDM3Ni44NzUgMjE0Ljg3NUMzODAgMjIzLjUgMzgyLjEyNSAyMzIuNSAzODMuMTI1IDI0MS44NzVDMzg0LjEyNSAyNDkuNzUgMzkwLjI1IDI1NiAzOTguMTI1IDI1NlpNNDUzIDkzLjEyNUM0MzMgNjkgNDA4Ljc1IDQ4LjYyNSAzODEuMzc1IDMzLjI1QzM3My4xMjUgMjguNSAzNjIuNSAzMi43NSAzNTkgNDEuNUwzMjIuNjI1IDEzMi4zNzVDMzE5Ljg3NSAxMzkuNSAzMjIuNzUgMTQ3LjI1IDMyOSAxNTEuNjI1QzMzNSAxNTUuNzUgMzQwLjYyNSAxNjAuNSAzNDUuNzUgMTY1LjYyNUMzNTEuMjUgMTcxLjEyNSAzNTkuMzc1IDE3Mi41IDM2NS44NzUgMTY4LjVMNDQ4Ljc1IDExNi42MjVDNDU2Ljg3NSAxMTEuNjI1IDQ1OS4xMjUgMTAwLjM3NSA0NTMgOTMuMTI1Wk00OTYgMjg4SDQwMEMzOTEuMTI1IDI4OCAzODQgMjk1LjEyNSAzODQgMzA0VjM2OEMzODQgMzc2Ljg3NSAzOTEuMTI1IDM4NCA0MDAgMzg0SDQ5NkM1MDQuODc1IDM4NCA1MTIgMzc2Ljg3NSA1MTIgMzY4VjMwNEM1MTIgMjk1LjEyNSA1MDQuODc1IDI4OCA0OTYgMjg4Wk00OTYgNDE2SDQwMEMzOTEuMTI1IDQxNiAzODQgNDIzLjEyNSAzODQgNDMyVjQ5NkMzODQgNTA0Ljg3NSAzOTEuMTI1IDUxMiA0MDAgNTEySDQ5NkM1MDQuODc1IDUxMiA1MTIgNTA0Ljg3NSA1MTIgNDk2VjQzMkM1MTIgNDIzLjEyNSA1MDQuODc1IDQxNiA0OTYgNDE2WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const Dungeon: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M240 177.625V472C240 476.375 243.625 480 248 480H264C268.375 480 272 476.375 272 472V177.625C266.75 176.75 261.5 176 256 176S245.25 176.75 240 177.625ZM176 219.125V472C176 476.375 179.625 480 184 480H200C204.375 480 208 476.375 208 472V189.375C195.25 196.75 184.125 206.875 176 219.125ZM304 189.375V472C304 476.375 307.625 480 312 480H328C332.375 480 336 476.375 336 472V219.125C327.875 206.875 316.75 196.75 304 189.375Z" />
            <path d="M128.75 195.375L45.875 143.5C37.875 138.5 26.875 141.375 23 150C10.125 178.125 2.5 208.375 0.5 239.25C0 248.375 7.625 256 16.75 256H113.875C121.75 256 127.875 249.75 128.875 241.875C129.875 232.5 132.125 223.5 135.125 214.875C137.625 207.5 135.375 199.5 128.75 195.375ZM319 8C298.875 2.875 277.75 0 256 0S213.125 2.875 193 8C183.75 10.375 179 20.625 182.625 29.375L220 133.375C222.375 139.75 228.375 144 235.125 144H276.875C283.625 144 289.625 139.75 292 133.375L329.375 29.375C333 20.625 328.25 10.375 319 8ZM112 288H16C7.125 288 0 295.125 0 304V368C0 376.875 7.125 384 16 384H112C120.875 384 128 376.875 128 368V304C128 295.125 120.875 288 112 288ZM112 416H16C7.125 416 0 423.125 0 432V496C0 504.875 7.125 512 16 512H112C120.875 512 128 504.875 128 496V432C128 423.125 120.875 416 112 416ZM189.25 132.375L153 41.5C149.5 32.75 138.875 28.5 130.625 33.25C103.25 48.625 79 69 59 93.125C52.875 100.375 55.125 111.625 63.125 116.625L146.125 168.5C152.625 172.5 160.75 171.125 166.25 165.625C171.375 160.5 177 155.875 183 151.625C189.25 147.25 192.125 139.5 189.25 132.375ZM398.125 256H495.25C504.375 256 512 248.375 511.5 239.25C509.5 208.375 501.875 178.125 489 150C485.125 141.375 474.125 138.5 466.125 143.5L383.25 195.375C376.625 199.5 374.375 207.5 376.875 214.875C380 223.5 382.125 232.5 383.125 241.875C384.125 249.75 390.25 256 398.125 256ZM453 93.125C433 69 408.75 48.625 381.375 33.25C373.125 28.5 362.5 32.75 359 41.5L322.625 132.375C319.875 139.5 322.75 147.25 329 151.625C335 155.75 340.625 160.5 345.75 165.625C351.25 171.125 359.375 172.5 365.875 168.5L448.75 116.625C456.875 111.625 459.125 100.375 453 93.125ZM496 288H400C391.125 288 384 295.125 384 304V368C384 376.875 391.125 384 400 384H496C504.875 384 512 376.875 512 368V304C512 295.125 504.875 288 496 288ZM496 416H400C391.125 416 384 423.125 384 432V496C384 504.875 391.125 512 400 512H496C504.875 512 512 504.875 512 496V432C512 423.125 504.875 416 496 416Z" />
    </Icon>
);

export default Dungeon;
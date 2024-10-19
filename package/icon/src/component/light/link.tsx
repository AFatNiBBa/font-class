
import { Icon } from "../../index";

/**
 * A component that renders the `link` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/link?s=light link}
 * @preview ![link](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjIuMzgyIDQwNC43MjNMMTc3LjUyOSA0NDkuNTk0QzEzNi45NTggNDkwLjEzNSA3MC45NzYgNDkwLjEzNSAzMC40MDYgNDQ5LjU5NEMtMTAuMTM1IDQwOS4wMzUgLTEwLjEzNSAzNDMuMDIgMzAuNDA2IDMwMi40NjNMMTU4LjQzMSAxNzQuNDNDMTk5LjAwMyAxMzMuODg5IDI2NC45ODYgMTMzLjg4OSAzMDUuNTU2IDE3NC40M0MzNDEuOTcgMjEwLjg2MSAzNDYuMTI2IDI2OS4zMTIgMzE1LjI0NiAzMTAuNDAyQzMwOS45MzEgMzE3LjQ2NyAzMTEuMzUzIDMyNy41IDMxOC40MTcgMzMyLjc5OUMzMjUuNDY2IDMzOC4xMTEgMzM1LjUxNSAzMzYuNzA1IDM0MC44MTQgMzI5LjYyNUMzODEuMjI4IDI3NS44OTMgMzc1LjgwNCAxOTkuNDM2IDMyOC4xODUgMTUxLjc5OUMyNzUuMTQ0IDk4Ljc1NCAxODguODQzIDk4Ljc4NSAxMzUuODAyIDE1MS43OTlMNy43NzUgMjc5LjgzMkMtNDUuMjUgMzMyLjg3NyAtNDUuMjUgNDE5LjE4IDcuNzc1IDQ3Mi4yMjVDMzQuMjk2IDQ5OC43NDYgNjkuMTMyIDUxMiAxMDMuOTY2IDUxMkMxMzguODAyIDUxMiAxNzMuNjM4IDQ5OC43MyAyMDAuMTYgNDcyLjIyNUwyNDUuMDExIDQyNy4zNTRDMjUxLjI2MyA0MjEuMTAyIDI1MS4yNjMgNDEwLjk3NSAyNDUuMDExIDQwNC43MjNDMjM4Ljc2MSAzOTguNDcxIDIyOC42MzQgMzk4LjQ3MSAyMjIuMzgyIDQwNC43MjNaTTU2OC4yMzYgMzkuNzcxQzUxNS4xOTMgLTEzLjI3MyA0MjguODk0IC0xMy4yNDIgMzc1Ljg1MSAzOS43NzFMMzMxIDg0LjY0M0MzMjQuNzQ4IDkwLjg5MyAzMjQuNzQ4IDEwMS4wMjEgMzMxIDEwNy4yNzNDMzM3LjI1IDExMy41MjMgMzQ3LjM3NiAxMTMuNTIzIDM1My42MjggMTA3LjI3M0wzOTguNDgyIDYyLjQwMkM0MzkuMDUyIDIxLjg2MSA1MDUuMDM1IDIxLjg2MSA1NDUuNjA1IDYyLjQwMkM1ODYuMTQ2IDEwMi45NTkgNTg2LjE0NiAxNjguOTc3IDU0NS42MDUgMjA5LjUzM0w0MTcuNTggMzM3LjU2NEMzNzcuMDA3IDM3OC4xMDUgMzExLjAyNSAzNzguMTA1IDI3MC40NTUgMzM3LjU2NEMyMzQuMDQxIDMwMS4xMzUgMjI5Ljg4NCAyNDIuNjgyIDI2MC43NjUgMjAxLjU5NEMyNjYuMDggMTk0LjUyOSAyNjQuNjU4IDE4NC40OTYgMjU3LjU5MyAxNzkuMTk3QzI1MC41NDQgMTczLjg1MiAyNDAuNDk2IDE3NS4zMDUgMjM1LjE5NyAxODIuMzY5QzE5NC43ODMgMjM2LjEwMiAyMDAuMjA3IDMxMi41NTkgMjQ3LjgyNiAzNjAuMTk1QzI3NC4zNDcgMzg2LjcxOSAzMDkuMTgxIDM5OS45NzEgMzQ0LjAxNyAzOTkuOTcxUzQxMy42ODcgMzg2LjcwMyA0NDAuMjA4IDM2MC4xOTVMNTY4LjIzNiAyMzIuMTY0QzYyMS4yNjEgMTc5LjExOSA2MjEuMjYxIDkyLjgxNiA1NjguMjM2IDM5Ljc3MVoiLz48L3N2Zz4=|width=32|height=32)
 */
const Link: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M222.382 404.723L177.529 449.594C136.958 490.135 70.976 490.135 30.406 449.594C-10.135 409.035 -10.135 343.02 30.406 302.463L158.431 174.43C199.003 133.889 264.986 133.889 305.556 174.43C341.97 210.861 346.126 269.312 315.246 310.402C309.931 317.467 311.353 327.5 318.417 332.799C325.466 338.111 335.515 336.705 340.814 329.625C381.228 275.893 375.804 199.436 328.185 151.799C275.144 98.754 188.843 98.785 135.802 151.799L7.775 279.832C-45.25 332.877 -45.25 419.18 7.775 472.225C34.296 498.746 69.132 512 103.966 512C138.802 512 173.638 498.73 200.16 472.225L245.011 427.354C251.263 421.102 251.263 410.975 245.011 404.723C238.761 398.471 228.634 398.471 222.382 404.723ZM568.236 39.771C515.193 -13.273 428.894 -13.242 375.851 39.771L331 84.643C324.748 90.893 324.748 101.021 331 107.273C337.25 113.523 347.376 113.523 353.628 107.273L398.482 62.402C439.052 21.861 505.035 21.861 545.605 62.402C586.146 102.959 586.146 168.977 545.605 209.533L417.58 337.564C377.007 378.105 311.025 378.105 270.455 337.564C234.041 301.135 229.884 242.682 260.765 201.594C266.08 194.529 264.658 184.496 257.593 179.197C250.544 173.852 240.496 175.305 235.197 182.369C194.783 236.102 200.207 312.559 247.826 360.195C274.347 386.719 309.181 399.971 344.017 399.971S413.687 386.703 440.208 360.195L568.236 232.164C621.261 179.119 621.261 92.816 568.236 39.771Z" />
    </Icon>
);

export default Link;
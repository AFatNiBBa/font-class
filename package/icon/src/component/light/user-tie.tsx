
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-tie` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-tie?s=light user-tie}
 * @preview ![user-tie](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjguMjI4IDMxMi42MjdDMzI2LjczMiAzMTIuMTQxIDMyNS4yMSAzMTEuOTEgMzIzLjcwNiAzMTEuOTFDMzE3LjUzNiAzMTEuOTEgMzExLjY3MSAzMTUuNzc5IDMwOS4wODcgMzIxLjY5N0wyNzMuNzUxIDQwMi42MzdMMjQ2LjIwNiAzMjBIMjU1Ljk5N0MyNjQuODQxIDMyMCAyNzEuOTk3IDMxMi44NDQgMjcxLjk5NyAzMDRTMjY0Ljg0MSAyODggMjU1Ljk5NyAyODhIMTkxLjk5N0MxODMuMTU0IDI4OCAxNzUuOTk3IDI5NS4xNTYgMTc1Ljk5NyAzMDRTMTgzLjE1NCAzMjAgMTkxLjk5NyAzMjBIMjAxLjc4OEwxNzQuMjQ0IDQwMi42MzdMMTM4LjkwOCAzMjEuNjk3QzEzNi4zMjQgMzE1Ljc4MSAxMzAuNDU4IDMxMS45MTIgMTI0LjI4OCAzMTEuOTEyQzEyMi43ODUgMzExLjkxMiAxMjEuMjY1IDMxMi4xNDEgMTE5Ljc2NyAzMTIuNjI3QzQ5LjgwNCAzMzUuMzQ4IC0wLjY5MiA0MDEuMjE3IDAuMDA3IDQ3OC45MjJDMC4xNzMgNDk3LjQyNiAxNi4xNTggNTEyIDM0LjY2MSA1MTJINDEzLjMzM0M0MzEuODM3IDUxMiA0NDcuODIyIDQ5Ny40MjYgNDQ3Ljk4OCA0NzguOTIyQzQ0OC42ODcgNDAxLjIxNyAzOTguMTk1IDMzNS4zNDYgMzI4LjIyOCAzMTIuNjI3Wk0zNC42NjEgNDgwQzMzLjE1IDQ4MCAzMi4xMTcgNDc4LjkzNiAzMi4wMDUgNDc4LjYzNUMzMS40OTQgNDIxLjczIDY0LjU2MiAzNzEuMTI3IDExNS42NiAzNDguNDI0TDE3My4xMDEgNDgwSDM0LjY2MVpNMjM5Ljk5NyA0NzkuOTUzSDIwNy45OTdMMTkzLjM4IDQ0Ni40NzNMMjIzLjk5NyAzNTQuNTk0TDI1NC42MTUgNDQ2LjQ3M0wyMzkuOTk3IDQ3OS45NTNaTTQxMy4zMzMgNDgwSDI3NC44OTRMMzMyLjMzNSAzNDguNDI0QzM4My40MzEgMzcxLjEyMyA0MTYuNTAxIDQyMS43MjcgNDE1Ljk5OSA0NzguNTk4QzQxNS44NzggNDc4LjkzNiA0MTQuODQ1IDQ4MCA0MTMuMzMzIDQ4MFpNMjIzLjk5NyAyNTZDMjk0Ljc0NyAyNTYgMzUxLjk5NyAxOTguNzUgMzUxLjk5NyAxMjhTMjk0Ljc0NyAwIDIyMy45OTcgMFM5NS45OTcgNTcuMjUgOTUuOTk3IDEyOFMxNTMuMjQ3IDI1NiAyMjMuOTk3IDI1NlpNMjIzLjk5NyAzMkMyNzYuOTMzIDMyIDMxOS45OTcgNzUuMDY0IDMxOS45OTcgMTI4QzMxOS45OTcgMTgwLjkzNCAyNzYuOTMzIDIyNCAyMjMuOTk3IDIyNFMxMjcuOTk3IDE4MC45MzQgMTI3Ljk5NyAxMjhDMTI3Ljk5NyA3NS4wNjQgMTcxLjA2MiAzMiAyMjMuOTk3IDMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function UserTie(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M328.228 312.627C326.732 312.141 325.21 311.91 323.706 311.91C317.536 311.91 311.671 315.779 309.087 321.697L273.751 402.637L246.206 320H255.997C264.841 320 271.997 312.844 271.997 304S264.841 288 255.997 288H191.997C183.154 288 175.997 295.156 175.997 304S183.154 320 191.997 320H201.788L174.244 402.637L138.908 321.697C136.324 315.781 130.458 311.912 124.288 311.912C122.785 311.912 121.265 312.141 119.767 312.627C49.804 335.348 -0.692 401.217 0.007 478.922C0.173 497.426 16.158 512 34.661 512H413.333C431.837 512 447.822 497.426 447.988 478.922C448.687 401.217 398.195 335.346 328.228 312.627ZM34.661 480C33.15 480 32.117 478.936 32.005 478.635C31.494 421.73 64.562 371.127 115.66 348.424L173.101 480H34.661ZM239.997 479.953H207.997L193.38 446.473L223.997 354.594L254.615 446.473L239.997 479.953ZM413.333 480H274.894L332.335 348.424C383.431 371.123 416.501 421.727 415.999 478.598C415.878 478.936 414.845 480 413.333 480ZM223.997 256C294.747 256 351.997 198.75 351.997 128S294.747 0 223.997 0S95.997 57.25 95.997 128S153.247 256 223.997 256ZM223.997 32C276.933 32 319.997 75.064 319.997 128C319.997 180.934 276.933 224 223.997 224S127.997 180.934 127.997 128C127.997 75.064 171.062 32 223.997 32Z" />
        </Icon>
    </>
}
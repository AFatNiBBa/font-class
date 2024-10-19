
import { Icon } from "../../index";

/**
 * A component that renders the `compass-slash` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/compass-slash?s=thin compass-slash}
 * @preview ![compass-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTkuOTk5IDMxLjk5NkM0NDMuNTE1IDMxLjk5NiA1NDMuOTk5IDEzMi40ODMgNTQzLjk5OSAyNTUuOTk3QzU0My45OTkgMjgyLjQ5OCA1MzkuMTMyIDMwNy44MjQgNTMwLjY0NiAzMzEuNDM5TDU0My44NzIgMzQxLjk1MUM1NTQuMTM4IDMxNS4yMzQgNTU5Ljk5OSAyODYuMzMgNTU5Ljk5OSAyNTUuOTk3QzU1OS45OTkgMTIzLjQ0NiA0NTIuNTUgMTUuOTk2IDMxOS45OTkgMTUuOTk2QzI3MC4xNzUgMTUuOTk2IDIyMy45MDYgMzEuMTkyIDE4NS41NDggNTcuMTgyTDE5OC45MzMgNjcuODE5QzIzMy44ODQgNDUuMjUyIDI3NS4zOSAzMS45OTYgMzE5Ljk5OSAzMS45OTZaTTQwMy4zOSAyMzAuMzA2TDQxNi4zMDIgMjQwLjU2OEw0NTMuNDA2IDE1OS4zNzJDNDU4LjI4MSAxNDguNzMxIDQ1Ni4wOTMgMTM2LjQ5NyA0NDcuODEyIDEyOC4yMTZDNDM5LjQ5OSAxMTkuOTAzIDQyNy4yNDkgMTE3LjcgNDE2LjYyNCAxMjIuNTU5TDMyMi4xNTIgMTY1Ljc0NUwzMzYuMjA0IDE3Ni45MTNMNDIzLjI0OSAxMzcuMTIyQzQzMC4yNDkgMTMzLjkzNCA0MzUuMTU2IDEzOC4xNjkgNDM2LjQ5OSAxMzkuNTEyQzQzNy44NDMgMTQwLjg3MiA0NDEuOTk5IDE0NS44MjUgNDM4Ljg0MyAxNTIuNzE2TDQwMy4zOSAyMzAuMzA2Wk0zMTkuOTk5IDQ3OS45OTlDMTk2LjQ4NCA0NzkuOTk5IDk1Ljk5OSAzNzkuNTEyIDk1Ljk5OSAyNTUuOTk3Qzk1Ljk5OSAyMjkuNTA5IDEwMC44NjEgMjA0LjE5MiAxMDkuMzQxIDE4MC41ODVMOTYuMTE1IDE3MC4wNzNDODUuODU1IDE5Ni43ODIgNzkuOTk5IDIyNS42NzcgNzkuOTk5IDI1NS45OTdDNzkuOTk5IDM4OC41NDkgMTg3LjQ0OSA0OTUuOTk5IDMxOS45OTkgNDk1Ljk5OUMzNjkuODE0IDQ5NS45OTkgNDE2LjA3MiA0ODAuODExIDQ1NC40MjUgNDU0LjgzMUw0NDEuMDM4IDQ0NC4xOTJDNDA2LjA5MSA0NjYuNzQ3IDM2NC41OTcgNDc5Ljk5OSAzMTkuOTk5IDQ3OS45OTlaTTIzNi41OTMgMjgxLjcxNEwyMjMuNjgxIDI3MS40NTVMMTg2LjU5MyAzNTIuNjA3QzE4MS43MTggMzYzLjI2NCAxODMuOTA2IDM3NS40OTggMTkyLjE4NyAzODMuNzk1QzE5Ny41NjIgMzg5LjE1NCAyMDQuNTkzIDM5MS45NjcgMjExLjc0OSAzOTEuOTY3QzIxNS42NTYgMzkxLjk2NyAyMTkuNjI0IDM5MS4xMzkgMjIzLjM3NCAzODkuNDJMMzE3LjgxIDM0Ni4yNkwzMDMuNzU3IDMzNS4wOTJMMjE2Ljc0OSAzNzQuODU3QzIwOS45MzcgMzc3Ljk4MiAyMDQuOTA2IDM3My44NTcgMjAzLjUzMSAzNzIuNDgyQzIwMi4xNTYgMzcxLjEyMyAxOTcuOTk5IDM2Ni4xNyAyMDEuMTU2IDM1OS4yNjRMMjM2LjU5MyAyODEuNzE0Wk02MzYuOTggNDk3LjczM0wxMi45ODggMS43M0MxMS41MjUgMC41NjYgOS43NzEgMCA4LjAyNSAwQzUuNjczIDAgMy4zMzUgMS4wMjkgMS43MzggMy4wMTJDLTEuMDEyIDYuNDgxIC0wLjQzNCAxMS41MTIgMy4wMTkgMTQuMjYyTDYyNy4wMTEgNTEwLjI2NEM2MjguNDk2IDUxMS40MzYgNjMwLjI0NiA1MTEuOTk5IDYzMS45OTYgNTExLjk5OUM2MzQuMzM5IDUxMS45OTkgNjM2LjY4MyA1MTAuOTY4IDYzOC4yNjEgNTA4Ljk4M0M2NDEuMDExIDUwNS41MTQgNjQwLjQzMyA1MDAuNDgzIDYzNi45OCA0OTcuNzMzWiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CompassSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M319.999 31.996C443.515 31.996 543.999 132.483 543.999 255.997C543.999 282.498 539.132 307.824 530.646 331.439L543.872 341.951C554.138 315.234 559.999 286.33 559.999 255.997C559.999 123.446 452.55 15.996 319.999 15.996C270.175 15.996 223.906 31.192 185.548 57.182L198.933 67.819C233.884 45.252 275.39 31.996 319.999 31.996ZM403.39 230.306L416.302 240.568L453.406 159.372C458.281 148.731 456.093 136.497 447.812 128.216C439.499 119.903 427.249 117.7 416.624 122.559L322.152 165.745L336.204 176.913L423.249 137.122C430.249 133.934 435.156 138.169 436.499 139.512C437.843 140.872 441.999 145.825 438.843 152.716L403.39 230.306ZM319.999 479.999C196.484 479.999 95.999 379.512 95.999 255.997C95.999 229.509 100.861 204.192 109.341 180.585L96.115 170.073C85.855 196.782 79.999 225.677 79.999 255.997C79.999 388.549 187.449 495.999 319.999 495.999C369.814 495.999 416.072 480.811 454.425 454.831L441.038 444.192C406.091 466.747 364.597 479.999 319.999 479.999ZM236.593 281.714L223.681 271.455L186.593 352.607C181.718 363.264 183.906 375.498 192.187 383.795C197.562 389.154 204.593 391.967 211.749 391.967C215.656 391.967 219.624 391.139 223.374 389.42L317.81 346.26L303.757 335.092L216.749 374.857C209.937 377.982 204.906 373.857 203.531 372.482C202.156 371.123 197.999 366.17 201.156 359.264L236.593 281.714ZM636.98 497.733L12.988 1.73C11.525 0.566 9.771 0 8.025 0C5.673 0 3.335 1.029 1.738 3.012C-1.012 6.481 -0.434 11.512 3.019 14.262L627.011 510.264C628.496 511.436 630.246 511.999 631.996 511.999C634.339 511.999 636.683 510.968 638.261 508.983C641.011 505.514 640.433 500.483 636.98 497.733Z" />
    </Icon>
);

export default CompassSlash;
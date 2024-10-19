
import { Icon } from "../../index";

/**
 * A component that renders the `house-tree` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/house-tree?s=thin house-tree}
 * @preview ![house-tree](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMTUuNDc3IDEwNS4wNzhDMjA4LjgyIDk5LjAyNSAyMDAuNDA4IDk2IDE5MS45OTYgOTZTMTc1LjE3IDk5LjAyNSAxNjguNTE0IDEwNS4wNzhMMTcuMTM5IDI0Mi42OTFDNi4yMjMgMjUyLjYxNyAwIDI2Ni42ODYgMCAyODEuNDM4VjQ3Ny4wOUMwIDQ5Ni4zNzEgMTUuNjI5IDUxMiAzNC45MDggNTEySDM0OS4wODRDMzY4LjM2MSA1MTIgMzgzLjk5IDQ5Ni40IDM4My45OTIgNDc3LjEyMUMzODMuOTk2IDQyNC41MzkgMzg0IDMyOC45NjMgMzg0IDI4MS4yODFDMzgzLjk5OCAyNjYuNTUxIDM3Ny43ODMgMjUyLjYyNyAzNjYuODgzIDI0Mi43MTdMMjE1LjQ3NyAxMDUuMDc4Wk0zNjcuOTkyIDQ3Ny4xMTlDMzY3Ljk5IDQ4Ny41MjkgMzU5LjUxIDQ5NiAzNDkuMDg0IDQ5NkgzNC45MDhDMjQuNDgyIDQ5NiAxNiA0ODcuNTE4IDE2IDQ3Ny4wOVYyODEuNDM4QzE2IDI3MS4yMTUgMjAuMzM4IDI2MS40MDggMjcuOTAyIDI1NC41MzFMMTc5LjI3NyAxMTYuOTE2QzE4Mi43NjYgMTEzLjc0NiAxODcuMjgxIDExMS45OTggMTkxLjk5NiAxMTEuOTk4QzE5Ni43MDkgMTExLjk5OCAyMDEuMjI1IDExMy43NDYgMjA0LjcxNSAxMTYuOTE4TDM1Ni4xMTkgMjU0LjU1NUMzNjMuNjY4IDI2MS40MTggMzY3Ljk5OCAyNzEuMTYgMzY4IDI4MS4yODFMMzY3Ljk5MiA0NzcuMTE5Wk0yMjQgMjY0SDE2MEMxNDYuNzgxIDI2NCAxMzYgMjc0Ljc4MSAxMzYgMjg4VjM1MkMxMzYgMzY1LjIxOSAxNDYuNzgxIDM3NiAxNjAgMzc2SDIyNEMyMzcuMjE5IDM3NiAyNDggMzY1LjIxOSAyNDggMzUyVjI4OEMyNDggMjc0Ljc4MSAyMzcuMjE5IDI2NCAyMjQgMjY0Wk0yMzIgMzUyQzIzMiAzNTYuNSAyMjguNSAzNjAgMjI0IDM2MEgxNjBDMTU1LjUgMzYwIDE1MiAzNTYuNSAxNTIgMzUyVjI4OEMxNTIgMjgzLjUgMTU1LjUgMjgwIDE2MCAyODBIMjI0QzIyOC41IDI4MCAyMzIgMjgzLjUgMjMyIDI4OFYzNTJaTTYyOS45MDMgNDQ0LjA1OEw1NTQuMzQ4IDM1Ni44NDZINTcxLjY5QzU4Ni40MzkgMzU2Ljg0NiA1OTkuNDA2IDM0OC42NSA2MDUuNTMgMzM1LjQxOUM2MTEuNTYxIDMyMi40MzcgNjA5LjUzIDMwNy41NzggNjAwLjI4MSAyOTYuNTk5TDUxOS42MzMgMjAxLjY5Mkg1NDUuNjYyQzU1OC44NDggMjAxLjY5MiA1NzAuNjI4IDE5NC4zNDEgNTc1LjU5NiAxODIuOTg2QzU4MC4xODkgMTcyLjUzOCA1NzguMTU4IDE2MC43MTQgNTcwLjI4NCAxNTIuMTQzTDQzOS41NzkgMTAuMTI3QzQyNy4zMyAtMy4zODYgNDAyLjY3NiAtMy4zNTUgMzkwLjQ5IDEwLjA5NkwyOTguMTI1IDExMC41MzlDMjk1LjEyNSAxMTMuNzkzIDI5NS4zNDQgMTE4Ljg2IDI5OC41OTMgMTIxLjgzMkMzMDEuODQzIDEyNC44OTcgMzA2LjkzNiAxMjQuNjQ3IDMwOS44NzQgMTIxLjM2M0w0MDIuMjcgMjAuODg4QzQwOC41MiAxNC4wNjkgNDIxLjQ4NyAxNC4wMzcgNDI3Ljc5OSAyMC45MTlMNTU4LjUwNCAxNjIuOTY2QzU2Mi4xMjkgMTY2LjkwOCA1NjMuMDA0IDE3MS44NSA1NjAuOTczIDE3Ni41NDJDNTU5LjAzNSAxODAuOTUzIDU1My45NzMgMTg1LjY3NiA1NDUuNjYyIDE4NS42NzZINTAyLjMyMkM0OTkuMTk4IDE4NS42NzYgNDk2LjM1NCAxODcuNDkxIDQ5NS4wNzMgMTkwLjMzN0M0OTMuNzYxIDE5My4xNTMgNDk0LjE5OCAxOTYuNSA0OTYuMjI5IDE5OC44NzdMNTg4LjA2NCAzMDYuOTUzQzU5My4zNDQgMzEzLjIwOSA1OTQuNDM4IDMyMS4zMTEgNTkxLjAzMiAzMjguNjYyQzU4Ny41MDEgMzM2LjI5NCA1ODAuMjUyIDM0MC44MyA1NzEuNjkgMzQwLjgzSDUzNi44MTlDNTMzLjY5NCAzNDAuODMgNTMwLjg1MSAzNDIuNjc2IDUyOS41MzggMzQ1LjUyMkM1MjguMjI2IDM0OC4zNjkgNTI4LjcyNiAzNTEuNzE2IDUzMC43ODggMzU0LjA5M0w2MTcuODQyIDQ1NC41NjhDNjI1LjYyMiA0NjMuNTc3IDYyNC45MDMgNDc0LjQ5NCA2MjEuNTkxIDQ4MS42ODlDNjE3LjUyOSA0OTAuNjM1IDYwOS4zNzQgNDk1Ljk4NCA1OTkuNzgxIDQ5NS45ODRINDIzLjk4N0M0MTkuNTgxIDQ5NS45ODQgNDE1Ljk4OCA0OTkuNTgxIDQxNS45ODggNTAzLjk5MkM0MTUuOTg4IDUwOC40MDMgNDE5LjU4MSA1MTIgNDIzLjk4NyA1MTJINTk5Ljc4MUM2MTUuNTYxIDUxMiA2MjkuNDk3IDUwMi45MjggNjM2LjE1MiA0ODguMzUyQzY0Mi45OTUgNDczLjM2OCA2NDAuNTg5IDQ1Ni40MTQgNjI5LjkwMyA0NDQuMDU4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HouseTree: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M215.477 105.078C208.82 99.025 200.408 96 191.996 96S175.17 99.025 168.514 105.078L17.139 242.691C6.223 252.617 0 266.686 0 281.438V477.09C0 496.371 15.629 512 34.908 512H349.084C368.361 512 383.99 496.4 383.992 477.121C383.996 424.539 384 328.963 384 281.281C383.998 266.551 377.783 252.627 366.883 242.717L215.477 105.078ZM367.992 477.119C367.99 487.529 359.51 496 349.084 496H34.908C24.482 496 16 487.518 16 477.09V281.438C16 271.215 20.338 261.408 27.902 254.531L179.277 116.916C182.766 113.746 187.281 111.998 191.996 111.998C196.709 111.998 201.225 113.746 204.715 116.918L356.119 254.555C363.668 261.418 367.998 271.16 368 281.281L367.992 477.119ZM224 264H160C146.781 264 136 274.781 136 288V352C136 365.219 146.781 376 160 376H224C237.219 376 248 365.219 248 352V288C248 274.781 237.219 264 224 264ZM232 352C232 356.5 228.5 360 224 360H160C155.5 360 152 356.5 152 352V288C152 283.5 155.5 280 160 280H224C228.5 280 232 283.5 232 288V352ZM629.903 444.058L554.348 356.846H571.69C586.439 356.846 599.406 348.65 605.53 335.419C611.561 322.437 609.53 307.578 600.281 296.599L519.633 201.692H545.662C558.848 201.692 570.628 194.341 575.596 182.986C580.189 172.538 578.158 160.714 570.284 152.143L439.579 10.127C427.33 -3.386 402.676 -3.355 390.49 10.096L298.125 110.539C295.125 113.793 295.344 118.86 298.593 121.832C301.843 124.897 306.936 124.647 309.874 121.363L402.27 20.888C408.52 14.069 421.487 14.037 427.799 20.919L558.504 162.966C562.129 166.908 563.004 171.85 560.973 176.542C559.035 180.953 553.973 185.676 545.662 185.676H502.322C499.198 185.676 496.354 187.491 495.073 190.337C493.761 193.153 494.198 196.5 496.229 198.877L588.064 306.953C593.344 313.209 594.438 321.311 591.032 328.662C587.501 336.294 580.252 340.83 571.69 340.83H536.819C533.694 340.83 530.851 342.676 529.538 345.522C528.226 348.369 528.726 351.716 530.788 354.093L617.842 454.568C625.622 463.577 624.903 474.494 621.591 481.689C617.529 490.635 609.374 495.984 599.781 495.984H423.987C419.581 495.984 415.988 499.581 415.988 503.992C415.988 508.403 419.581 512 423.987 512H599.781C615.561 512 629.497 502.928 636.152 488.352C642.995 473.368 640.589 456.414 629.903 444.058Z" />
    </Icon>
);

export default HouseTree;
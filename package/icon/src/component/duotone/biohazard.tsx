
import { Icon, generic } from "../../index";

/**
 * A component that renders the `biohazard` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/biohazard?s=duotone biohazard}
 * @preview ![biohazard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQzMC4xMDIgMjkzLjg4OUM0MjQuOTgyIDMyNi44NTIgNDA4Ljg2NyAzNTUuOTY1IDM4NS4zNDggMzc3LjU2NkMzODYuNSA0MDAuMzQgMzk2LjAzMSA0MjIuMTU2IDQxMi41MTIgNDM4LjQ0MUM0NTkuOTY1IDQwMy4wMDYgNDkxLjY4OCAzNDcuOTE0IDQ5NS42NiAyODUuMTM5QzQ3My4wODQgMjc4Ljk2NSA0NDkuOTg0IDI4Mi4zODUgNDMwLjEwMiAyOTMuODg5Wk0yMDYuMTk1IDgwLjc3M0MyMTQuNTk2IDEwMy45NzcgMjMxLjY4OSAxMjIuNzg3IDI1My42MTEgMTMyLjU3OEMyNzkuODM2IDEyNi4wMjcgMjk4Ljk4IDEyNi41NTMgMzIzLjEzMyAxMzIuNjA0QzM0NS4wNjEgMTIyLjgyNiAzNjIuMTY2IDEwNC4wMjMgMzcwLjU3OCA4MC44MjhDMzQ1LjM0NCA2OS45NDkgMzE3LjU1NyA2My44NjMgMjg4LjMzIDYzLjg2M0MyNTkuMTQ4IDYzLjg2MyAyMzEuNCA2OS45MjQgMjA2LjE5NSA4MC43NzNaTTgxIDI4NS4xMzlDODQuOTc1IDM0Ny45MjggMTE2LjcxMyA0MDMuMDMzIDE2NC4xODQgNDM4LjQ2N0MxODAuNjQ2IDQyMi4yMTEgMTkwLjE2IDQwMC4zNTQgMTkxLjI3NSAzNzcuNTM1QzE2Ny43ODcgMzU1Ljk0OSAxNTEuNjg2IDMyNi44NjMgMTQ2LjU2MyAyOTMuOTM5QzEyNy4yMDkgMjgyLjY5MyAxMDQuMDg4IDI3OC44MTQgODEgMjg1LjEzOVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNTc1LjQ5MSAyODMuNDg0QzU2Mi4zNjQgMjQ0LjM3MSA1MzUuOTg3IDIxMS41MDQgNTAxLjM1OSAxOTEuMTM1QzQ4My44NTkgMTgwLjc2MiA0NjUuMTA3IDE3NC41MTQgNDQ2LjEwNSAxNzEuMjY2QzQ1Mi4xMDUgMTUzLjUyIDQ1Ni4xMDUgMTM0Ljc3NSA0NTYuMTA1IDExNS4wMjlDNDU2LjEwNSA3NC4wNDEgNDQxLjYwNSAzNC4zMDMgNDE1LjEwMSAyLjgxMUM0MTIuNjAxIC0wLjE4OSA0MDguNDc2IC0wLjgxMiA0MDUuMTAxIDEuMDYxQzQwMS44NTEgMi45MzYgNDAwLjM1MSA3LjA1OSA0MDEuNDc2IDEwLjgwOUM0MDUuOTc2IDI0LjU1NSA0MDguMTAxIDM3LjA1MSA0MDguMTAxIDQ5LjI5OUM0MDguMTAxIDExNy4wMjkgMzU0LjM0NSAxNzIuMTQxIDI4OC4wODkgMTcyLjE0MVMxNjguMDc5IDExNy4wMjkgMTY4LjA3OSA0OS4yOTlDMTY4LjA3OSAzNy4xNzYgMTcwLjMyOSAyNC41NTUgMTc0LjcwNCAxMC44MDlDMTc1LjgyOSA3LjA1OSAxNzQuMzI5IDIuOTM2IDE3MS4wNzkgMS4wNjFDMTY3LjcwNCAtMC44MTIgMTYzLjU3NyAtMC4xODkgMTYxLjA3NyAyLjgxMUMxMzQuNyAzNC4zMDMgMTIwLjA3MyA3NC4wNDEgMTIwLjA3MyAxMTUuMDI5QzEyMC4wNzMgMTM0Ljc3NSAxMjMuOTQ4IDE1My41MiAxMzAuMDc1IDE3MS4yNjZDMTExLjE5OCAxNzQuNTE0IDkyLjMyMSAxODAuNzYyIDc0LjgyIDE5MS4xMzVDNDAuMTkzIDIxMS42MjkgMTMuODE0IDI0NC4zNzEgMC40MzkgMjgzLjQ4NEMtMC44MTEgMjg3LjIzNCAwLjY4OSAyOTEuMjMyIDMuOTM5IDI5My4yMzJDNy4zMTQgMjk1LjIzMiAxMS40MzkgMjk0LjYwNyAxMy45MzkgMjkxLjczMkMyMy4zMTYgMjgwLjg2MSAzMi45NDEgMjcyLjYxMyA0My4xOTMgMjY2LjYxNUMxMDAuNDQ2IDIzMi43NDggMTczLjk1NCAyNTIuODY3IDIwNy4wODEgMzExLjYwMkMyNDAuMjEgMzcwLjIxMSAyMjAuNDU4IDQ0NS41NjYgMTYzLjIwMiA0NzkuNDMyQzE1Mi45NTIgNDg1LjU1NSAxNDEuMiA0ODkuODA1IDEyNy4zMjUgNDkyLjgwM0MxMjMuNjk4IDQ5My42NzggMTIwLjk0OCA0OTcuMDUzIDEyMC45NDggNTAwLjkyNkMxMjEuMDczIDUwNC45MjYgMTIzLjY5OCA1MDguMTc0IDEyNy40NSA1MDguOTI0QzE2Ny4yMDQgNTE2LjY3MiAyMDguMDgxIDUwOS42NzQgMjQyLjcxIDQ4OS4xOEMyNjAuNzEyIDQ3OC42ODIgMjc1LjU4OSA0NjQuNjg2IDI4Ny45NjQgNDQ5LjE4OUMzMDAuMzQxIDQ2NC42ODYgMzE1LjM0MyA0NzguNjgyIDMzMy4zNDMgNDg5LjE4QzM2Ny44NDcgNTA5LjY3NCA0MDguODUxIDUxNi42NzIgNDQ4LjQ4IDUwOC45MjRDNDUyLjM1NSA1MDguMTc0IDQ1NC44NTUgNTA0LjkyNiA0NTQuOTggNTAwLjkyNkM0NTQuOTggNDk3LjA1MyA0NTIuMzU1IDQ5My42NzggNDQ4LjYwNSA0OTIuODAzQzQzNC43MjggNDg5LjkzIDQyMi45NzggNDg1LjU1NSA0MTIuODUxIDQ3OS40MzJDMzU1LjQ3MiA0NDUuNTY2IDMzNS44NDUgMzcwLjIxMSAzNjguODQ3IDMxMS42MDJDNDAxLjk3NiAyNTIuODY3IDQ3NS40ODIgMjMyLjc0OCA1MzIuODYyIDI2Ni42MTVDNTQyLjk4NyAyNzIuNzM4IDU1Mi42MTQgMjgwLjg2MSA1NjEuOTg5IDI5MS43MzJDNTY0LjQ4OSAyOTQuNjA3IDU2OC43NDEgMjk1LjIzMiA1NzEuOTkxIDI5My4yMzJDNTc1LjM2NiAyOTEuMjMyIDU3Ni44NjYgMjg3LjIzNCA1NzUuNDkxIDI4My40ODRaTTI4Ny45NjQgMzIwLjFDMjYxLjQ2MiAzMjAuMSAyMzkuOTYgMjk4LjYwNSAyMzkuOTYgMjcyLjExM0MyMzkuOTYgMjQ1LjYxOSAyNjEuNDYyIDIyNC4xMjUgMjg3Ljk2NCAyMjQuMTI1QzMxNC40NjggMjI0LjEyNSAzMzUuOTcgMjQ1LjYxOSAzMzUuOTcgMjcyLjExM0MzMzUuOTcgMjk4LjYwNSAzMTQuNDY4IDMyMC4xIDI4Ny45NjQgMzIwLjFaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const Biohazard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M430.102 293.889C424.982 326.852 408.867 355.965 385.348 377.566C386.5 400.34 396.031 422.156 412.512 438.441C459.965 403.006 491.688 347.914 495.66 285.139C473.084 278.965 449.984 282.385 430.102 293.889ZM206.195 80.773C214.596 103.977 231.689 122.787 253.611 132.578C279.836 126.027 298.98 126.553 323.133 132.604C345.061 122.826 362.166 104.023 370.578 80.828C345.344 69.949 317.557 63.863 288.33 63.863C259.148 63.863 231.4 69.924 206.195 80.773ZM81 285.139C84.975 347.928 116.713 403.033 164.184 438.467C180.646 422.211 190.16 400.354 191.275 377.535C167.787 355.949 151.686 326.863 146.563 293.939C127.209 282.693 104.088 278.814 81 285.139Z" />
            <path d="M575.491 283.484C562.364 244.371 535.987 211.504 501.359 191.135C483.859 180.762 465.107 174.514 446.105 171.266C452.105 153.52 456.105 134.775 456.105 115.029C456.105 74.041 441.605 34.303 415.101 2.811C412.601 -0.189 408.476 -0.812 405.101 1.061C401.851 2.936 400.351 7.059 401.476 10.809C405.976 24.555 408.101 37.051 408.101 49.299C408.101 117.029 354.345 172.141 288.089 172.141S168.079 117.029 168.079 49.299C168.079 37.176 170.329 24.555 174.704 10.809C175.829 7.059 174.329 2.936 171.079 1.061C167.704 -0.812 163.577 -0.189 161.077 2.811C134.7 34.303 120.073 74.041 120.073 115.029C120.073 134.775 123.948 153.52 130.075 171.266C111.198 174.514 92.321 180.762 74.82 191.135C40.193 211.629 13.814 244.371 0.439 283.484C-0.811 287.234 0.689 291.232 3.939 293.232C7.314 295.232 11.439 294.607 13.939 291.732C23.316 280.861 32.941 272.613 43.193 266.615C100.446 232.748 173.954 252.867 207.081 311.602C240.21 370.211 220.458 445.566 163.202 479.432C152.952 485.555 141.2 489.805 127.325 492.803C123.698 493.678 120.948 497.053 120.948 500.926C121.073 504.926 123.698 508.174 127.45 508.924C167.204 516.672 208.081 509.674 242.71 489.18C260.712 478.682 275.589 464.686 287.964 449.189C300.341 464.686 315.343 478.682 333.343 489.18C367.847 509.674 408.851 516.672 448.48 508.924C452.355 508.174 454.855 504.926 454.98 500.926C454.98 497.053 452.355 493.678 448.605 492.803C434.728 489.93 422.978 485.555 412.851 479.432C355.472 445.566 335.845 370.211 368.847 311.602C401.976 252.867 475.482 232.748 532.862 266.615C542.987 272.738 552.614 280.861 561.989 291.732C564.489 294.607 568.741 295.232 571.991 293.232C575.366 291.232 576.866 287.234 575.491 283.484ZM287.964 320.1C261.462 320.1 239.96 298.605 239.96 272.113C239.96 245.619 261.462 224.125 287.964 224.125C314.468 224.125 335.97 245.619 335.97 272.113C335.97 298.605 314.468 320.1 287.964 320.1Z" />
    </Icon>
);

export default Biohazard;
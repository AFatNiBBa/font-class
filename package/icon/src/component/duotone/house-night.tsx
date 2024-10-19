
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-night` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/house-night?s=duotone house-night}
 * @preview ![house-night](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE5NC44ODcgMTczLjkyQzE5My4xNjQgMTczLjkyIDE4Ny43OTYgMTc1LjU5MSAxNzcuMzQgMTc1LjU5MUMxMjguODE3IDE3NS41OTEgODkuNjg2IDEzNi4wOTcgODkuNjg2IDg3Ljg2Qzg5LjY4NiAzMC45MjIgMTM2LjcwMSAxMy42MzIgMTM2LjcwMSA3LjA1OEMxMzYuNzAxIDYuMjkyIDEzNi4yNjYgMi41MzggMTMyLjQ5OCAxLjg3M0MxMjUuNzQ4IDAuNzQ4IDExOC44NzMgMC4xMjMgMTExLjk5OCAtMC4wMDJDNTAuMTI1IC0wLjAwMiAwIDUwLjEyMyAwIDExMS45OThTNTAuMTI1IDIyMy45OTggMTExLjk5OCAyMjMuOTk4QzE3MC4yODQgMjIzLjk5OCAyMDAuMTg0IDE4MS41NDcgMjAwLjE4NCAxNzkuMjE1QzIwMC4xODQgMTc2LjY4OSAxOTguMDMxIDE3My45MiAxOTQuODg3IDE3My45MlpNMzE3LjEyMSA1OS4yNDhMMjc3LjM3MyA0Mi42MjNMMjYwLjc0OCAyLjk5OEMyNTkuODczIDEuMTIzIDI1Ny45OTYgLTAuMDAyIDI1NS45OTggLTAuMDAyQzI1My45OTYgLTAuMDAyIDI1Mi4xMjMgMS4xMjMgMjUxLjI0OCAyLjk5OEwyMzQuNjIzIDQyLjYyM0wxOTQuOTk4IDU5LjI0OEMxOTMuMjQ4IDYwLjEyMyAxOTEuOTk4IDYxLjk5OCAxOTEuOTk4IDYzLjk5OFMxOTMuMjQ4IDY3Ljg3MyAxOTQuOTk4IDY4Ljc0OEwyMzQuNzQ4IDg1LjM3M0wyNTEuMjQ4IDEyNC45OThDMjUyLjEyMyAxMjYuODczIDI1My45OTYgMTI3Ljk5OCAyNTUuOTk4IDEyNy45OThDMjU4LjEyMyAxMjcuOTk4IDI1OS44NzMgMTI2Ljg3MyAyNjAuODczIDEyNC45OThMMjc3LjM3MyA4NS4zNzNMMzE3LjEyMSA2OC43NDhDMzE4Ljg3MSA2Ny44NzMgMzE5Ljk5NiA2NS45OTggMzE5Ljk5NiA2My45OThTMzE4Ljg3MSA2MC4xMjMgMzE3LjEyMSA1OS4yNDhaTTExNy4zNzMgMzYyLjYyM0wxMDAuNzQ4IDMyMi45OThDOTkuODczIDMyMS4xMjMgOTcuOTk4IDMxOS45OTggOTUuOTk4IDMxOS45OThTOTIuMTI1IDMyMS4xMjMgOTEuMjUgMzIyLjk5OEw3NC42MjUgMzYyLjYyM0wzNSAzNzkuMjQ4QzMzLjI1IDM4MC4xMjMgMzIgMzgxLjk5OCAzMiAzODMuOTk4UzMzLjI1IDM4Ny44NzMgMzUgMzg4Ljc0OEw3NC43NSA0MDUuMzczTDkxLjI1IDQ0NC45OThDOTIuMTI1IDQ0Ni44NzMgOTMuOTk4IDQ0Ny45OTggOTUuOTk4IDQ0Ny45OThDOTguMTIzIDQ0Ny45OTggOTkuODczIDQ0Ni44NzMgMTAwLjg3MyA0NDQuOTk4TDExNy4zNzMgNDA1LjM3M0wxNTcuMTIzIDM4OC43NDhDMTU4Ljg3MyAzODcuODczIDE1OS45OTggMzg1Ljk5OCAxNTkuOTk4IDM4My45OThTMTU4Ljg3MyAzODAuMTIzIDE1Ny4xMjMgMzc5LjI0OEwxMTcuMzczIDM2Mi42MjNaICIgY2xhc3M9ImZhLXNlY29uZGFyeSI+PC9wYXRoPjxwYXRoIGQ9Ik02MjkuNjk5IDI5Ni41TDU3NS45OSAyNDYuOTIxVjE0NEM1NzUuOTkgMTM1LjE2MiA1NjguODI4IDEyOCA1NTkuOTkgMTI4SDUyNy45OUM1MTkuMTU2IDEyOCA1MTEuOTkyIDEzNS4xNjIgNTExLjk5MiAxNDMuOTk4VjE4Ny44NDdMNDIxLjY5OSAxMDQuNUM0MTUuNTcyIDk4Ljg0MyA0MDcuNzg3IDk2IDQwMCA5NkMzOTkuOTk3IDk2IDM5OS45OTUgOTYgMzk5Ljk5MiA5NkMzOTIuMjA2IDk2IDM4NC40MjIgOTguODQzIDM3OC4yOTMgMTA0LjVMMTcwLjI5MyAyOTYuNUMxNjMuNTk4IDMwMi42NzcgMTYwIDMxMS4yNDIgMTYwIDMyMEMxNjAgMzM3LjU0NCAxNzQuMjExIDM1MiAxOTEuOTk2IDM1MkgyMjMuOTk0VjQ2NEMyMjMuOTk0IDQ5MC40IDI0NS41OTYgNTEyIDI3MS45OTQgNTEySDUyNy45OUM1NTQuMzkxIDUxMiA1NzUuOTkgNDkwLjQgNTc1Ljk5IDQ2NFYzNTJINjA3Ljk5NkM2MjUuODE2IDM1MiA2NDAgMzM3LjUxNyA2NDAgMzIwQzY0MCAzMTEuMjQyIDYzNi4zOTYgMzAyLjY3NyA2MjkuNjk5IDI5Ni41Wk00NDcuOTkyIDM2OEM0NDcuOTkyIDM3Ni44NzUgNDQwLjg2NyAzODQgNDMxLjk5MiAzODRIMzY3Ljk5MkMzNTkuMTE3IDM4NCAzNTEuOTkyIDM3Ni44NzUgMzUxLjk5MiAzNjhWMzA0QzM1MS45OTIgMjk1LjEyNSAzNTkuMTE3IDI4OCAzNjcuOTkyIDI4OEg0MzEuOTkyQzQ0MC44NjcgMjg4IDQ0Ny45OTIgMjk1LjEyNSA0NDcuOTkyIDMwNFYzNjhaICIgY2xhc3M9ImZhLXByaW1hcnkiPjwvcGF0aD48L3N2Zz4=|width=32|height=32)
 */
const HouseNight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M194.887 173.92C193.164 173.92 187.796 175.591 177.34 175.591C128.817 175.591 89.686 136.097 89.686 87.86C89.686 30.922 136.701 13.632 136.701 7.058C136.701 6.292 136.266 2.538 132.498 1.873C125.748 0.748 118.873 0.123 111.998 -0.002C50.125 -0.002 0 50.123 0 111.998S50.125 223.998 111.998 223.998C170.284 223.998 200.184 181.547 200.184 179.215C200.184 176.689 198.031 173.92 194.887 173.92ZM317.121 59.248L277.373 42.623L260.748 2.998C259.873 1.123 257.996 -0.002 255.998 -0.002C253.996 -0.002 252.123 1.123 251.248 2.998L234.623 42.623L194.998 59.248C193.248 60.123 191.998 61.998 191.998 63.998S193.248 67.873 194.998 68.748L234.748 85.373L251.248 124.998C252.123 126.873 253.996 127.998 255.998 127.998C258.123 127.998 259.873 126.873 260.873 124.998L277.373 85.373L317.121 68.748C318.871 67.873 319.996 65.998 319.996 63.998S318.871 60.123 317.121 59.248ZM117.373 362.623L100.748 322.998C99.873 321.123 97.998 319.998 95.998 319.998S92.125 321.123 91.25 322.998L74.625 362.623L35 379.248C33.25 380.123 32 381.998 32 383.998S33.25 387.873 35 388.748L74.75 405.373L91.25 444.998C92.125 446.873 93.998 447.998 95.998 447.998C98.123 447.998 99.873 446.873 100.873 444.998L117.373 405.373L157.123 388.748C158.873 387.873 159.998 385.998 159.998 383.998S158.873 380.123 157.123 379.248L117.373 362.623Z " />
            <path d="M629.699 296.5L575.99 246.921V144C575.99 135.162 568.828 128 559.99 128H527.99C519.156 128 511.992 135.162 511.992 143.998V187.847L421.699 104.5C415.572 98.843 407.787 96 400 96C399.997 96 399.995 96 399.992 96C392.206 96 384.422 98.843 378.293 104.5L170.293 296.5C163.598 302.677 160 311.242 160 320C160 337.544 174.211 352 191.996 352H223.994V464C223.994 490.4 245.596 512 271.994 512H527.99C554.391 512 575.99 490.4 575.99 464V352H607.996C625.816 352 640 337.517 640 320C640 311.242 636.396 302.677 629.699 296.5ZM447.992 368C447.992 376.875 440.867 384 431.992 384H367.992C359.117 384 351.992 376.875 351.992 368V304C351.992 295.125 359.117 288 367.992 288H431.992C440.867 288 447.992 295.125 447.992 304V368Z " />
    </Icon>
);

export default HouseNight;
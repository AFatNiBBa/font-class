
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `wifi-slash` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wifi-slash?s=solid wifi-slash}
 * @preview ![wifi-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjkuNDk1IDI2NEMxMTYuMjQ1IDI3NS43MTkgMTE0Ljk5NSAyOTUuOTM4IDEyNi42ODMgMzA5LjE4OEMxMzguNDY0IDMyMi40MzggMTU4LjY1MSAzMjMuNjg4IDE3MS44NyAzMTJDMTg4LjkwMyAyOTYuOTQ1IDIwOC4wNTggMjg0LjkgMjI4LjQ2NiAyNzUuNzUyTDE3My4wNzkgMjMyLjM0QzE1Ny43IDI0MS40NjcgMTQzLjA3OSAyNTIuMDA2IDEyOS40OTUgMjY0Wk0zMjYuNjAyIDM1Mi42NjhDMzI0LjM5OSAzNTIuNDM5IDMyMi4yNTcgMzUyLjAwMiAzMTkuOTkzIDM1Mi4wMDJDMjg0LjY0NyAzNTIuMDAyIDI1NS45OTEgMzgwLjY1OCAyNTUuOTkxIDQxNi4wMDJTMjg0LjY0NyA0ODAuMDAyIDMxOS45OTMgNDgwLjAwMkMzNTUuMzM3IDQ4MC4wMDIgMzgzLjk5NSA0NTEuMzQ2IDM4My45OTUgNDE2LjAwMkMzODMuOTk1IDQwOC40MzcgMzgyLjQ1IDQwMS4yODcgMzgwLjA0IDM5NC41NTFMMzI2LjYwMiAzNTIuNjY4Wk05LjgzOSAxNTYuNzE5Qy0yLjkxMSAxNjguOTY5IC0zLjMxNyAxODkuMjE5IDguOTAxIDIwMS45NjlDMjEuMTIgMjE0Ljc1IDQxLjM3IDIxNS4wOTQgNTQuMTUxIDIwMi45MDZDNjYuNjM0IDE5MC45MyA4MC4wMTMgMTgwLjI0NiA5My43NjUgMTcwLjE3Nkw0MS40NCAxMjkuMTY2QzMwLjU1OCAxMzcuODI4IDE5Ljk4NyAxNDYuOTgyIDkuODM5IDE1Ni43MTlaTTM2NC45MTkgMjYwLjcwMUM0MDIuOTgxIDI2OC40ODYgNDM4LjYzIDI4NS45MzYgNDY4LjEyIDMxMkM0NzQuMjE0IDMxNy4zNzUgNDgxLjc3NiAzMjAgNDg5LjMwOCAzMjBDNDk4LjE1MSAzMjAgNTA2Ljk2NCAzMTYuMzQ0IDUxMy4zMDggMzA5LjE4OEM1MjQuOTk1IDI5NS45MzggNTIzLjc0NSAyNzUuNzE5IDUxMC40OTUgMjY0QzQ1Ny45MDEgMjE3LjU2MiAzOTAuMjQ1IDE5MiAzMTkuOTk1IDE5MkMzMDYuODcgMTkyIDI5My44OTUgMTkzLjE4IDI4MS4wNCAxOTQuOTU5TDE4Ni4xMzggMTIwLjU3OEMyMjguNDk1IDEwNC43MjEgMjczLjU4NyA5NiAzMTkuOTk1IDk2QzQxOS41ODkgOTYgNTEzLjk5NSAxMzMuOTY5IDU4NS44MzkgMjAyLjkwNkM1OTIuMDU4IDIwOC44NDQgNjAwLjAyNiAyMTEuODEyIDYwNy45OTUgMjExLjgxMkM2MTYuNDAxIDIxMS44MTIgNjI0LjgwOCAyMDguNTMxIDYzMS4wODkgMjAxLjk2OUM2NDMuMzA4IDE4OS4yMTkgNjQyLjkwMSAxNjguOTY5IDYzMC4xNTEgMTU2LjcxOUM1NDYuMzA4IDc2LjI4MSA0MzYuMTgzIDMyIDMxOS45OTUgMzJDMjUyLjczNSAzMiAxODcuNjc3IDQ3LjE5MSAxMjguNDMzIDc1LjM1TDM4LjgxNSA1LjEwOUMzNC40MDkgMS42NzIgMjkuMTkgMCAyNC4wMzQgMEMxNi45MDkgMCA5Ljg0NyAzLjE1NiA1LjEyOCA5LjE4OEMtMy4wNiAxOS42MjUgLTEuMjQ3IDM0LjcxNyA5LjE5IDQyLjg4OUw2MDEuMTg2IDUwNi44ODNDNjExLjY4NiA1MTUuMDg2IDYyNi43NDkgNTEzLjIxMSA2MzQuODc0IDUwMi44MDVDNjQzLjA2MSA0OTIuMzY3IDY0MS4yNDkgNDc3LjI3MyA2MzAuODExIDQ2OS4xMDJMMzY0LjkxOSAyNjAuNzAxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function WifiSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M129.495 264C116.245 275.719 114.995 295.938 126.683 309.188C138.464 322.438 158.651 323.688 171.87 312C188.903 296.945 208.058 284.9 228.466 275.752L173.079 232.34C157.7 241.467 143.079 252.006 129.495 264ZM326.602 352.668C324.399 352.439 322.257 352.002 319.993 352.002C284.647 352.002 255.991 380.658 255.991 416.002S284.647 480.002 319.993 480.002C355.337 480.002 383.995 451.346 383.995 416.002C383.995 408.437 382.45 401.287 380.04 394.551L326.602 352.668ZM9.839 156.719C-2.911 168.969 -3.317 189.219 8.901 201.969C21.12 214.75 41.37 215.094 54.151 202.906C66.634 190.93 80.013 180.246 93.765 170.176L41.44 129.166C30.558 137.828 19.987 146.982 9.839 156.719ZM364.919 260.701C402.981 268.486 438.63 285.936 468.12 312C474.214 317.375 481.776 320 489.308 320C498.151 320 506.964 316.344 513.308 309.188C524.995 295.938 523.745 275.719 510.495 264C457.901 217.562 390.245 192 319.995 192C306.87 192 293.895 193.18 281.04 194.959L186.138 120.578C228.495 104.721 273.587 96 319.995 96C419.589 96 513.995 133.969 585.839 202.906C592.058 208.844 600.026 211.812 607.995 211.812C616.401 211.812 624.808 208.531 631.089 201.969C643.308 189.219 642.901 168.969 630.151 156.719C546.308 76.281 436.183 32 319.995 32C252.735 32 187.677 47.191 128.433 75.35L38.815 5.109C34.409 1.672 29.19 0 24.034 0C16.909 0 9.847 3.156 5.128 9.188C-3.06 19.625 -1.247 34.717 9.19 42.889L601.186 506.883C611.686 515.086 626.749 513.211 634.874 502.805C643.061 492.367 641.249 477.273 630.811 469.102L364.919 260.701Z" />
        </Icon>
    </>
}
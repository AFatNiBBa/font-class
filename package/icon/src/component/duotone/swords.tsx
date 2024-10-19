
import { Icon, generic } from "../../index";

/**
 * A component that renders the `swords` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/swords?s=duotone swords}
 * @preview ![swords](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE1LjI2MiAwLjEzN0M2LjM4NyAtMS4xMTMgLTEuMTEzIDYuMzg3IDAuMTM3IDE1LjI2NEwxMy4zODcgOTMuMzk2TDMzMS45OTggNDEyLjA1MUw0MTEuOTk2IDMzMi4wNDNMOTMuMzgzIDEzLjM4OUwxNS4yNjIgMC4xMzdaTTQ5Ni43MzggMC4xMzdMNDE4LjYxNyAxMy4zODlMMjc4LjYyMyAxNTMuNDAyTDM1OC42MjEgMjMzLjQxTDQ5OC42MTMgOTMuMzk2TDUxMS44NjMgMTUuMjY0QzUxMy4xMTMgNi4zODcgNTA1LjYxMyAtMS4xMTMgNDk2LjczOCAwLjEzN1pNMTAwLjAwOCAzMzIuMDQ1TDE4MC4wMDQgNDEyLjA1M0wyMzMuMzc3IDM1OC42NzJMMTUzLjM3OSAyNzguNjY0TDEwMC4wMDggMzMyLjA0NVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNTA3LjE2NCA0NjIuMDU5TDQ0Ny45MTYgNDAyLjgwM0w0NzkuNTQxIDM0My43OTdDNDgyLjkxNiAzMzcuNTQ1IDQ4MS43OTEgMzI5LjkyIDQ3Ni43OTEgMzI0LjkyTDQ1OS4xNjYgMzA3LjQxOEM0NTIuOTE2IDMwMS4xNjYgNDQyLjc5MyAzMDEuMTY2IDQzNi41NDMgMzA3LjQxOEwzMDcuMTc0IDQzNi44MDVDMzAwLjkyNCA0NDMuMDU3IDMwMC45MjQgNDUzLjE4MiAzMDcuMTc0IDQ1OS4zMDdMMzI0Ljc5NyA0NzYuOTM0QzMyOS43OTcgNDgxLjkzNiAzMzcuNDIyIDQ4My4wNjEgMzQzLjY3MiA0NzkuNjg0TDQwMi42NyA0NDguMDU3TDQ2MS45MTYgNTA3LjMxM0M0NjguMTY2IDUxMy41NjMgNDc4LjQxNiA1MTMuNTYzIDQ4NC42NjYgNTA3LjMxM0w1MDcuMTY0IDQ4NC44MTFDNTEzLjQxNCA0NzguNTU5IDUxMy40MTQgNDY4LjMwOSA1MDcuMTY0IDQ2Mi4wNTlaTTc1LjE4NCAzMDcuMjkzQzY4LjkzNCAzMDEuMDQxIDU4LjgxMSAzMDEuMDQxIDUyLjY4NiAzMDcuMjkzTDM1LjA2MSAzMjQuOTJDMzAuMDYxIDMyOS45MiAyOC45MzYgMzM3LjU0NSAzMi4zMTEgMzQzLjc5N0w2My45MzYgNDAyLjgwM0w0LjY4OCA0NjIuMDU5Qy0xLjU2MyA0NjguMzA5IC0xLjU2MyA0NzguNTU5IDQuNjg4IDQ4NC44MTFMMjcuMTg2IDUwNy4zMTJDMzMuNDM2IDUxMy41NjIgNDMuNjg2IDUxMy41NjIgNDkuOTM2IDUwNy4zMTJMMTA5LjE4MiA0NDguMDU3TDE2OC4xOCA0NzkuNjg0QzE3NC40MyA0ODMuMDYxIDE4Mi4wNTUgNDgxLjkzNiAxODcuMDU1IDQ3Ni45MzRMMjA0LjU1MyA0NTkuMzA3QzIxMC44MDMgNDUzLjA1NyAyMTAuODAzIDQ0Mi45MzIgMjA0LjU1MyA0MzYuODA1TDc1LjE4NCAzMDcuMjkzWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const Swords: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M15.262 0.137C6.387 -1.113 -1.113 6.387 0.137 15.264L13.387 93.396L331.998 412.051L411.996 332.043L93.383 13.389L15.262 0.137ZM496.738 0.137L418.617 13.389L278.623 153.402L358.621 233.41L498.613 93.396L511.863 15.264C513.113 6.387 505.613 -1.113 496.738 0.137ZM100.008 332.045L180.004 412.053L233.377 358.672L153.379 278.664L100.008 332.045Z" />
            <path d="M507.164 462.059L447.916 402.803L479.541 343.797C482.916 337.545 481.791 329.92 476.791 324.92L459.166 307.418C452.916 301.166 442.793 301.166 436.543 307.418L307.174 436.805C300.924 443.057 300.924 453.182 307.174 459.307L324.797 476.934C329.797 481.936 337.422 483.061 343.672 479.684L402.67 448.057L461.916 507.313C468.166 513.563 478.416 513.563 484.666 507.313L507.164 484.811C513.414 478.559 513.414 468.309 507.164 462.059ZM75.184 307.293C68.934 301.041 58.811 301.041 52.686 307.293L35.061 324.92C30.061 329.92 28.936 337.545 32.311 343.797L63.936 402.803L4.688 462.059C-1.563 468.309 -1.563 478.559 4.688 484.811L27.186 507.312C33.436 513.562 43.686 513.562 49.936 507.312L109.182 448.057L168.18 479.684C174.43 483.061 182.055 481.936 187.055 476.934L204.553 459.307C210.803 453.057 210.803 442.932 204.553 436.805L75.184 307.293Z" />
    </Icon>
);

export default Swords;
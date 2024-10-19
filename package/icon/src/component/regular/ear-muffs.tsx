
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ear-muffs` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ear-muffs?s=regular ear-muffs}
 * @preview ![ear-muffs](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzguNTQ5IDMzNS4wNTFDNjM4LjUxOCAzMzQuODk1IDYzOC40NzEgMzM0LjczOCA2MzguNDQgMzM0LjU4MkM2MzUuNTAyIDMyMy4xNzIgNjI5LjExIDMxMy4xMDcgNjIwLjE3IDMwNS40OEM2MTkuMDE0IDI5My45MTQgNjE0LjIwMiAyODIuODgxIDYwNi4yMTUgMjc0LjEyOUM1OTguMDczIDI2NC45NzEgNTg3LjExOCAyNTguNTYzIDU3NC44ODEgMjU1LjU5NEM1NjguMDY5IDI0NS41OSA1NTguMDUxIDIzNy44MDcgNTQ1Ljg3NyAyMzMuMzY5QzU0MC4xMTIgMjMxLjI5OSA1MzQuMTA0IDIzMC4zMjIgNTI4LjA3NyAyMzAuMDMzVjIwOC4wNTFDNTI4LjA3NyA5My4zMzQgNDM0Ljc0NyAwIDMyMC4wNCAwQzIwNS4zMzEgMCAxMTIuMDAyIDkzLjMzNCAxMTIuMDAyIDIwOC4wNTFWMjMwLjA2NEMxMDUuOTExIDIzMC4zNSA5OS44MzUgMjMxLjM0NiA5My45ODMgMjMzLjQzMkM4MS45MTkgMjM3LjgwNyA3MS45NDggMjQ1LjU5IDY1LjEzMyAyNTUuNTk0QzUyLjkxMyAyNTguNTMxIDQxLjk4OSAyNjQuODc3IDMzLjk4NyAyNzMuODc5QzI1Ljg3NyAyODIuNzg3IDIxLjAwMSAyOTMuODgzIDE5LjgyOSAzMDUuNDhDMTAuODg5IDMxMy4xMzkgNC40NjcgMzIzLjMyOCAxLjQ1IDMzNS4wNTFDLTEuMjA2IDM0Ni4zMDMgLTAuMTYgMzU3Ljk2MSA0LjE1NSAzNjguMzcxQy0wLjEyOCAzNzkuMDI5IC0wLjk4OCAzOTAuODQ2IDEuOTgxIDQwMi4xNkM1LjAzIDQxMy40NzUgMTEuMzg5IDQyMy40NDcgMjAuMTI2IDQzMC45OEMyMS40MjIgNDQyLjQ1MSAyNi4zNDYgNDUzLjQ1MyAzNC43MDggNDYyLjgzMkM0My4xMjkgNDcxLjgwMyA1NC4wMjIgNDc3Ljk1OSA2NS44OTkgNDgwLjc0MkM3Mi42ODIgNDkwLjcxMyA4Mi40NjUgNDk4LjM3MSA5My4yOTUgNTAyLjA1OUMxMDQuNTMyIDUwNi45NjcgMTE5LjI4NCA1MDcuOTY3IDEzMy4wODUgNTA0LjI0OEMxNDIuMjI1IDUwOS4zMTEgMTUyLjU4NiA1MTIgMTYzLjM3IDUxMkMxOTYuODEzIDUxMiAyMjQuMDIyIDQ4Ni4yNDIgMjI0LjAyMiA0NTQuNjExQzIyNC4wMjIgNDQ3LjE3MiAyMjIuMzgxIDQzOS44MjYgMjE5LjI4OCA0MzIuOTQ5QzIyMi4zODEgNDI2LjA3MiAyMjQuMDIyIDQxOC42OTUgMjI0LjAyMiA0MTEuMjU2QzIyNC4wMjIgNDAzLjY5MSAyMjIuNDkxIDM5Ni4zNDYgMjE5LjU4NSAzODkuNTYyQzIyMi40OTEgMzgyLjc4MSAyMjQuMDIyIDM3NS40NjcgMjI0LjAyMiAzNjcuOTY1UzIyMi40OTEgMzUzLjE0OCAyMTkuNTg1IDM0Ni4zOTZDMjIyLjQ5MSAzMzkuNjEzIDIyNC4wMjIgMzMyLjI5OSAyMjQuMDIyIDMyNC43OTdDMjI0LjAyMiAzMTcuMjAxIDIyMi40MjggMzA5Ljg1NSAyMTkuMzM1IDMwMy4wMTJDMjIyLjQyOCAyOTYuMTY2IDIyNC4wMjIgMjg4Ljg1MiAyMjQuMDIyIDI4MS4zMThDMjI0LjAyMiAyNDkuNjg2IDE5Ni44MTMgMjIzLjkzIDE2My4zNyAyMjMuOTNDMTYyLjIyOSAyMjMuOTMgMTYxLjE0NSAyMjQuMzE0IDE2MC4wMSAyMjQuMzc5VjIwOC4wNTFDMTYwLjAxIDExOS44MTEgMjMxLjgwNSA0OC4wMTIgMzIwLjA0IDQ4LjAxMlM0ODAuMDY5IDExOS44MTEgNDgwLjA2OSAyMDguMDUxVjIyNC4zODlDNDc4LjkwNyAyMjQuMzIyIDQ3Ny43OTcgMjIzLjkzIDQ3Ni42MjkgMjIzLjkzQzQ0My4xODYgMjIzLjkzIDQxNS45NzkgMjQ5LjY4NiA0MTUuOTc5IDI4MS4zMThDNDE1Ljk3OSAyODguODUyIDQxNy41NzMgMjk2LjE2NiA0MjAuNjY3IDMwMy4wMTJDNDE3LjU3MyAzMDkuODU1IDQxNS45NzkgMzE3LjIwMSA0MTUuOTc5IDMyNC43OTdDNDE1Ljk3OSAzMzIuMjk5IDQxNy41MSAzMzkuNjEzIDQyMC40MTcgMzQ2LjM5NkM0MTcuNTEgMzUzLjE0OCA0MTUuOTc5IDM2MC40NjMgNDE1Ljk3OSAzNjcuOTY1UzQxNy41MSAzODIuNzgxIDQyMC40MTcgMzg5LjU2MkM0MTcuNTEgMzk2LjM0NiA0MTUuOTc5IDQwMy42OTEgNDE1Ljk3OSA0MTEuMjU2QzQxNS45NzkgNDE4LjY5NSA0MTcuNjIgNDI2LjA3MiA0MjAuNzEzIDQzMi45NDlDNDE3LjYyIDQzOS44MjYgNDE1Ljk3OSA0NDcuMTcyIDQxNS45NzkgNDU0LjYxMUM0MTUuOTc5IDQ4Ni4yNDIgNDQzLjE4NiA1MTIgNDc2LjYyOSA1MTJDNDg3LjQyOCA1MTIgNDk3Ljc5IDUwOS4zMTEgNTA2LjkzMiA1MDQuMjQ4QzUyMC42ODQgNTA3LjkzNiA1MzYuNjQxIDUwNi40OTggNTQ0LjkyNCA1MDIuNzQ4QzU1Ni45NzMgNDk4LjU5IDU2Ny4xNDcgNDkwLjc3NSA1NzQuMDY5IDQ4MC43NDJDNTg1Ljk5MyA0NzcuOTI4IDU5Ni45OTUgNDcxLjY0NiA2MDUuNzYyIDQ2Mi4zMzJDNjEzLjgxMSA0NTMuMjY2IDYxOC42MzkgNDQyLjM4OSA2MTkuODg5IDQzMC45OEM2MjguNjI2IDQyMy40MTYgNjM0Ljk4NyA0MTMuNDEyIDYzOC4wNjUgNDAxLjk3M0M2NDEuMDAyIDM5MC43ODMgNjQwLjEyNyAzNzkuMDI5IDYzNS44NjIgMzY4LjM3MUM2NDAuMTU5IDM1Ny45MyA2NDEuMjA2IDM0Ni4zMDMgNjM4LjU0OSAzMzUuMDUxWk0xNzYuMDE0IDI4MS4zMThDMTc2LjAxNCAyODMuMTkzIDE3NC41NDMgMjg1LjEgMTczLjMwOSAyODYuMzgzQzE2NC4zNyAyOTUuNjk3IDE2NC40MDEgMzEwLjM4OSAxNzMuMzU2IDMxOS42NzJDMTc1LjEyMiAzMjEuNTE2IDE3Ni4wMTQgMzIzLjIzNCAxNzYuMDE0IDMyNC43OTdDMTc2LjAxNCAzMjYuNjQzIDE3NS4zMjUgMzI4LjIzNiAxNzMuOTM0IDMyOS43MDVDMTY0Ljk4MSAzMzguOTg4IDE2NC45NSAzNTMuNjggMTczLjg4NyAzNjIuOTk0QzE3NS43OTUgMzY0Ljk2MyAxNzYuMDE0IDM2Ni43NzcgMTc2LjAxNCAzNjcuOTY1UzE3NS43OTUgMzcwLjk2NSAxNzMuODg3IDM3Mi45MzRDMTY0Ljk1IDM4Mi4yNSAxNjQuOTgxIDM5Ni45MzkgMTczLjkzNCA0MDYuMjIzQzE3NS4zNTYgNDA3LjY5MyAxNzYuMDE0IDQwOS4yODcgMTc2LjAxNCA0MTEuMjU2QzE3Ni4wMTQgNDEzLjEgMTc0LjU1OSA0MTQuOTc3IDE3My4zNTYgNDE2LjI1OEMxNjQuNDAxIDQyNS41NDEgMTY0LjM3IDQ0MC4yMzIgMTczLjMwOSA0NDkuNTQ3QzE3NC45OTcgNDUxLjI5NyAxNzYuMDE0IDQ1My4yMDMgMTc2LjAxNCA0NTQuNjExQzE3Ni4wMTQgNDU5LjcwNSAxNzAuMjMxIDQ2My45ODggMTYzLjM3IDQ2My45ODhDMTU4LjQ0OCA0NjMuOTg4IDE1NS4xNjcgNDYxLjc5OSAxNTMuMjkgNDU5Ljk1NUMxNDguNjggNDU1LjM5MyAxNDIuNiA0NTMuMDQ3IDEzNi40NiA0NTMuMDQ3QzEzMi4zNSA0NTMuMDQ3IDEyOC4yMDggNDU0LjEwOSAxMjQuNDU4IDQ1Ni4yNjhDMTE5LjQ3MSA0NTkuMTExIDExNC40MjQgNDU4Ljc5OSAxMTAuNzM3IDQ1Ny4zNjFDMTA3LjA0NyA0NTYuMDggMTA1LjA5NCA0NTMuNTE2IDEwNC41MDEgNDUxLjUxNkMxMDEuMzkxIDQ0MS4xMDcgOTIuNTMgNDM0Ljg1NSA4MC44MDkgNDM0LjM4N0M3Ni41MSA0MzQuMzI0IDcyLjQxNyA0MzIuODU1IDcwLjEyIDQzMC40NDlDNjguMTY3IDQyOC4yMjkgNjcuNDMyIDQyNS44NTQgNjcuOTc5IDQyMy4zNTRDNzAuMzU0IDQxMi4yODcgNjQuNjY1IDQwMS4wNjYgNTQuMzM1IDM5Ni40MDhDNTEuMzAzIDM5NS4wNjQgNDkuMTMxIDM5Mi41OTYgNDguMzgxIDM4OS44NDRDNDcuNzEgMzg3LjI1IDQ5LjE5NCAzODUuMDMxIDUwLjE0NyAzODMuOTM4QzU4LjExOCAzNzQuNzQ4IDU3Ljk2MSAzNjEuMDU3IDQ5Ljc4OCAzNTIuMDU1QzQ4LjY5NCAzNTAuODM2IDQ3LjUyMiAzNDguODM0IDQ4LjA2OSAzNDYuNTIxQzQ5LjAyMiAzNDIuODAzIDUyLjI4OCAzNDAuODYzIDU0LjE0NyAzNDAuMDUxQzY0LjcyNyAzMzUuMzMyIDcwLjQzMiAzMjMuNzY2IDY3Ljc0NSAzMTIuNTE0QzY3LjM3IDMxMC45MiA2Ny4zNTQgMzA4LjU3NCA2OS42NjcgMzA2LjAxMkM3Mi4wNDIgMzAzLjM1NSA3Ni4xOTggMzAxLjc2IDgwLjgwOSAzMDEuNzZDOTEuMzI3IDMwMS43NiAxMDAuNjEgMjk0LjkxNiAxMDMuNzM1IDI4NC44ODFDMTA0LjYxIDI4Mi4wNjggMTA3LjA0NyAyNzkuNzU2IDExMC4zMTMgMjc4LjU2OEMxMTUuOTQgMjc2LjU5OCAxMjEuMTU5IDI3OC44NSAxMjMuNzU0IDI4MC4zNUMxMzMuNDEzIDI4Ni4xMzMgMTQ1LjcxMSAyODQuMzUgMTUzLjQxNSAyNzYuMjU0QzE1NC45NDggMjc0LjYyOSAxNTguMjYgMjcxLjk0MSAxNjMuMzcgMjcxLjk0MUMxNzAuMjMxIDI3MS45NDEgMTc2LjAxNCAyNzYuMjIzIDE3Ni4wMTQgMjgxLjMxOFpNNTg5Ljg1NCAzODMuOTM4QzU5MC44MDcgMzg1LjAzMSA1OTIuMjkyIDM4Ny4yNSA1OTEuNjY3IDM4OS42NTZDNTkwLjg3IDM5Mi41OTYgNTg4LjY5OCAzOTUuMDY0IDU4NS42NjUgMzk2LjQwOEM1NzUuMzM1IDQwMS4wNjYgNTY5LjY0NyA0MTIuMjg3IDU3Mi4wMjIgNDIzLjM1NEM1NzIuNTY5IDQyNS44NTQgNTcxLjgzNSA0MjguMjI5IDU3MC4zNSA0MjkuOTQ3QzU2Ny42MTYgNDMyLjg1NSA1NjMuNjkyIDQzNC4zODcgNTU5LjE5MiA0MzQuMzg3QzU0Ny4wNDkgNDM0LjI2MiA1MzguNjEgNDQxLjEwNyA1MzUuNTAxIDQ1MS41MTZDNTM0LjkwNyA0NTMuNTE2IDUzMi45NTIgNDU2LjA4IDUyNy40ODMgNDU4LjA0OUM1MjcuMzg5IDQ1OC4xMTEgNTIwLjUxMiA0NTkuMTExIDUxNS41NDQgNDU2LjI2OEM1MDYuMjEzIDQ1MC44OTEgNDk0LjQxNSA0NTIuMzkxIDQ4Ni42OTQgNDU5Ljk1NUM0ODQuODE5IDQ2MS43OTkgNDgxLjU2OSA0NjMuOTg4IDQ3Ni42MjkgNDYzLjk4OEM0NjkuNzcgNDYzLjk4OCA0NjMuOTg3IDQ1OS43MDUgNDYzLjk4NyA0NTQuNjExQzQ2My45ODcgNDUzLjIwMyA0NjUuMDAyIDQ1MS4yOTcgNDY2LjY5IDQ0OS41NDdDNDc1LjYyOSA0NDAuMjMyIDQ3NS41OTggNDI1LjU0MSA0NjYuNjQzIDQxNi4yNThDNDY1LjQ0IDQxNC45NzcgNDYzLjk4NyA0MTMuMSA0NjMuOTg3IDQxMS4yNTZDNDYzLjk4NyA0MDkuMjg3IDQ2NC42NDMgNDA3LjY5MyA0NjYuMDY1IDQwNi4yMjNDNDc1LjAyIDM5Ni45MzkgNDc1LjA1MSAzODIuMjUgNDY2LjExMiAzNzIuOTM0QzQ2NC4yMDYgMzcwLjk2NSA0NjMuOTg3IDM2OS4xNTIgNDYzLjk4NyAzNjcuOTY1UzQ2NC4yMDYgMzY0Ljk2MyA0NjYuMTEyIDM2Mi45OTRDNDc1LjA1MSAzNTMuNjggNDc1LjAyIDMzOC45ODggNDY2LjA2NSAzMjkuNzA1QzQ2NC42NzQgMzI4LjIzNiA0NjMuOTg3IDMyNi42NDMgNDYzLjk4NyAzMjQuNzk3QzQ2My45ODcgMzIzLjIzNCA0NjQuODc3IDMyMS41MTYgNDY2LjY0MyAzMTkuNjcyQzQ3NS41OTggMzEwLjM4OSA0NzUuNjI5IDI5NS42OTcgNDY2LjY5IDI4Ni4zODNDNDY1LjQ1NiAyODUuMSA0NjMuOTg3IDI4My4xOTMgNDYzLjk4NyAyODEuMzE4QzQ2My45ODcgMjc2LjIyMyA0NjkuNzcgMjcxLjk0MSA0NzYuNjI5IDI3MS45NDFDNDgxLjc0MSAyNzEuOTQxIDQ4NS4wNTMgMjc0LjYyOSA0ODYuNTg1IDI3Ni4yNTRDNDk0LjI3NCAyODQuMzUgNTA2LjU4OCAyODYuMTMzIDUxNi4yNDcgMjgwLjM1QzUxOC44NTYgMjc4Ljg1IDUyNC4xMDggMjc2LjU5OCA1MjkuNTQ1IDI3OC41MDZDNTMyLjk1MiAyNzkuNzU2IDUzNS40MDcgMjgyLjA2OCA1MzYuMjY2IDI4NC44NUM1MzkuMzc2IDI5NC45MTYgNTQ4LjY3NCAzMDEuNzYgNTU5LjE5MiAzMDEuNzZDNTYzLjgwMSAzMDEuNzYgNTY3Ljk2IDMwMy4zNTUgNTcwLjUzOCAzMDYuMjYyQzU3Mi42NDcgMzA4LjU3NCA1NzIuNjMxIDMxMC45MiA1NzIuMjU2IDMxMi41MTRDNTY5LjU2OSAzMjMuNzY2IDU3NS4yNzIgMzM1LjMzMiA1ODUuODUyIDM0MC4wNTFDNTg3LjY4IDM0MC44NjMgNTkwLjgzOCAzNDIuNzQgNTkxLjg3IDM0Ni4zMDNDNTkyLjQwMSAzNDguOTI4IDU5MS4yNzYgMzUwLjg2NyA1OTAuMjEzIDM1Mi4wNTVDNTgyLjA0IDM2MS4wNTcgNTgxLjg4MyAzNzQuNzQ4IDU4OS44NTQgMzgzLjkzOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function EarMuffs(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M638.549 335.051C638.518 334.895 638.471 334.738 638.44 334.582C635.502 323.172 629.11 313.107 620.17 305.48C619.014 293.914 614.202 282.881 606.215 274.129C598.073 264.971 587.118 258.563 574.881 255.594C568.069 245.59 558.051 237.807 545.877 233.369C540.112 231.299 534.104 230.322 528.077 230.033V208.051C528.077 93.334 434.747 0 320.04 0C205.331 0 112.002 93.334 112.002 208.051V230.064C105.911 230.35 99.835 231.346 93.983 233.432C81.919 237.807 71.948 245.59 65.133 255.594C52.913 258.531 41.989 264.877 33.987 273.879C25.877 282.787 21.001 293.883 19.829 305.48C10.889 313.139 4.467 323.328 1.45 335.051C-1.206 346.303 -0.16 357.961 4.155 368.371C-0.128 379.029 -0.988 390.846 1.981 402.16C5.03 413.475 11.389 423.447 20.126 430.98C21.422 442.451 26.346 453.453 34.708 462.832C43.129 471.803 54.022 477.959 65.899 480.742C72.682 490.713 82.465 498.371 93.295 502.059C104.532 506.967 119.284 507.967 133.085 504.248C142.225 509.311 152.586 512 163.37 512C196.813 512 224.022 486.242 224.022 454.611C224.022 447.172 222.381 439.826 219.288 432.949C222.381 426.072 224.022 418.695 224.022 411.256C224.022 403.691 222.491 396.346 219.585 389.562C222.491 382.781 224.022 375.467 224.022 367.965S222.491 353.148 219.585 346.396C222.491 339.613 224.022 332.299 224.022 324.797C224.022 317.201 222.428 309.855 219.335 303.012C222.428 296.166 224.022 288.852 224.022 281.318C224.022 249.686 196.813 223.93 163.37 223.93C162.229 223.93 161.145 224.314 160.01 224.379V208.051C160.01 119.811 231.805 48.012 320.04 48.012S480.069 119.811 480.069 208.051V224.389C478.907 224.322 477.797 223.93 476.629 223.93C443.186 223.93 415.979 249.686 415.979 281.318C415.979 288.852 417.573 296.166 420.667 303.012C417.573 309.855 415.979 317.201 415.979 324.797C415.979 332.299 417.51 339.613 420.417 346.396C417.51 353.148 415.979 360.463 415.979 367.965S417.51 382.781 420.417 389.562C417.51 396.346 415.979 403.691 415.979 411.256C415.979 418.695 417.62 426.072 420.713 432.949C417.62 439.826 415.979 447.172 415.979 454.611C415.979 486.242 443.186 512 476.629 512C487.428 512 497.79 509.311 506.932 504.248C520.684 507.936 536.641 506.498 544.924 502.748C556.973 498.59 567.147 490.775 574.069 480.742C585.993 477.928 596.995 471.646 605.762 462.332C613.811 453.266 618.639 442.389 619.889 430.98C628.626 423.416 634.987 413.412 638.065 401.973C641.002 390.783 640.127 379.029 635.862 368.371C640.159 357.93 641.206 346.303 638.549 335.051ZM176.014 281.318C176.014 283.193 174.543 285.1 173.309 286.383C164.37 295.697 164.401 310.389 173.356 319.672C175.122 321.516 176.014 323.234 176.014 324.797C176.014 326.643 175.325 328.236 173.934 329.705C164.981 338.988 164.95 353.68 173.887 362.994C175.795 364.963 176.014 366.777 176.014 367.965S175.795 370.965 173.887 372.934C164.95 382.25 164.981 396.939 173.934 406.223C175.356 407.693 176.014 409.287 176.014 411.256C176.014 413.1 174.559 414.977 173.356 416.258C164.401 425.541 164.37 440.232 173.309 449.547C174.997 451.297 176.014 453.203 176.014 454.611C176.014 459.705 170.231 463.988 163.37 463.988C158.448 463.988 155.167 461.799 153.29 459.955C148.68 455.393 142.6 453.047 136.46 453.047C132.35 453.047 128.208 454.109 124.458 456.268C119.471 459.111 114.424 458.799 110.737 457.361C107.047 456.08 105.094 453.516 104.501 451.516C101.391 441.107 92.53 434.855 80.809 434.387C76.51 434.324 72.417 432.855 70.12 430.449C68.167 428.229 67.432 425.854 67.979 423.354C70.354 412.287 64.665 401.066 54.335 396.408C51.303 395.064 49.131 392.596 48.381 389.844C47.71 387.25 49.194 385.031 50.147 383.938C58.118 374.748 57.961 361.057 49.788 352.055C48.694 350.836 47.522 348.834 48.069 346.521C49.022 342.803 52.288 340.863 54.147 340.051C64.727 335.332 70.432 323.766 67.745 312.514C67.37 310.92 67.354 308.574 69.667 306.012C72.042 303.355 76.198 301.76 80.809 301.76C91.327 301.76 100.61 294.916 103.735 284.881C104.61 282.068 107.047 279.756 110.313 278.568C115.94 276.598 121.159 278.85 123.754 280.35C133.413 286.133 145.711 284.35 153.415 276.254C154.948 274.629 158.26 271.941 163.37 271.941C170.231 271.941 176.014 276.223 176.014 281.318ZM589.854 383.938C590.807 385.031 592.292 387.25 591.667 389.656C590.87 392.596 588.698 395.064 585.665 396.408C575.335 401.066 569.647 412.287 572.022 423.354C572.569 425.854 571.835 428.229 570.35 429.947C567.616 432.855 563.692 434.387 559.192 434.387C547.049 434.262 538.61 441.107 535.501 451.516C534.907 453.516 532.952 456.08 527.483 458.049C527.389 458.111 520.512 459.111 515.544 456.268C506.213 450.891 494.415 452.391 486.694 459.955C484.819 461.799 481.569 463.988 476.629 463.988C469.77 463.988 463.987 459.705 463.987 454.611C463.987 453.203 465.002 451.297 466.69 449.547C475.629 440.232 475.598 425.541 466.643 416.258C465.44 414.977 463.987 413.1 463.987 411.256C463.987 409.287 464.643 407.693 466.065 406.223C475.02 396.939 475.051 382.25 466.112 372.934C464.206 370.965 463.987 369.152 463.987 367.965S464.206 364.963 466.112 362.994C475.051 353.68 475.02 338.988 466.065 329.705C464.674 328.236 463.987 326.643 463.987 324.797C463.987 323.234 464.877 321.516 466.643 319.672C475.598 310.389 475.629 295.697 466.69 286.383C465.456 285.1 463.987 283.193 463.987 281.318C463.987 276.223 469.77 271.941 476.629 271.941C481.741 271.941 485.053 274.629 486.585 276.254C494.274 284.35 506.588 286.133 516.247 280.35C518.856 278.85 524.108 276.598 529.545 278.506C532.952 279.756 535.407 282.068 536.266 284.85C539.376 294.916 548.674 301.76 559.192 301.76C563.801 301.76 567.96 303.355 570.538 306.262C572.647 308.574 572.631 310.92 572.256 312.514C569.569 323.766 575.272 335.332 585.852 340.051C587.68 340.863 590.838 342.74 591.87 346.303C592.401 348.928 591.276 350.867 590.213 352.055C582.04 361.057 581.883 374.748 589.854 383.938Z" />
        </Icon>
    </>
}
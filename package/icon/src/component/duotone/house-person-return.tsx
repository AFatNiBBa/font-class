
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-person-return` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/house-person-return?s=duotone house-person-return}
 * @preview ![house-person-return](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM3NS4xMDkgMzMzLjQ1M0MzNDQuMzI2IDM0NS41NzkgMzA5LjI4OSAzMzEuOTUzIDI5NC43NzQgMzAyLjMyN0MyNzkuMjU4IDI3MC43IDI5Mi4xNDYgMjMyLjMyNCAzMjMuMzA0IDIxNi41NzNMMzM0Ljk0MSAyMTAuODIzTDM0MC40NDcgMTkzLjk0N0MzNDkuODMyIDE2NS40NDUgMzY4LjEwMSAxNDAuNTY5IDM5Mi41MDIgMTIyLjgxOEwyNjMuNzQxIDguOTM4QzI1MC4zNTIgLTIuOTM4IDIzMC4yMDYgLTIuOTM4IDIxNi44MTcgOC45MzhMNC43MTkgMTk2LjQ0N0MtMS4wMzggMjAxLjY5NyAtMS42NjMgMjEwLjU3MyAzLjU5MiAyMTYuNDQ4TDIyLjM2MiAyMzcuODI0QzI3LjQ5MyAyNDMuNTc0IDM2LjUwMiAyNDQuMTk5IDQyLjM4MyAyMzkuMDc0TDY0LjAzMSAyMTkuOTQ4VjM4NC4wODFDNjQuMDMxIDQwMS43MDcgNzguNDIxIDQxNi4wODIgOTYuMDY1IDQxNi4wODJIMzQyLjE5OUwzNTIuMzM1IDM3NS40NTVDMzU2LjIxNCAzNTkuOTU1IDM2My44NDcgMzQ1LjcwNCAzNzQuNzMzIDMzMy45NTNMMzc1LjEwOSAzMzMuNDUzWk0yMjQuMiAyNzIuMDc2QzIyNC4yIDI4MC45NTEgMjE3LjA2NyAyODguMDc2IDIwOC4xODMgMjg4LjA3NkgxNDQuMTE1QzEzNS4yMzEgMjg4LjA3NiAxMjguMDk4IDI4MC45NTEgMTI4LjA5OCAyNzIuMDc2VjIwOC4wNzJDMTI4LjA5OCAxOTkuMTk3IDEzNS4yMzEgMTkyLjA3MiAxNDQuMTE1IDE5Mi4wNzJIMjA4LjE4M0MyMTcuMDY3IDE5Mi4wNzIgMjI0LjIgMTk5LjE5NyAyMjQuMiAyMDguMDcyVjI3Mi4wNzZaTTQzMi40MTkgOTYuMDY3QzQ1OC45NDcgOTYuMDY3IDQ4MC40NyA3NC41NjYgNDgwLjQ3IDQ4LjA2NVM0NTguOTQ3IDAuMDYzIDQzMi40MTkgMC4wNjNDNDA1Ljg5MSAwLjA2MyAzODQuMzY4IDIxLjU2NCAzODQuMzY4IDQ4LjA2NVM0MDUuODkxIDk2LjA2NyA0MzIuNDE5IDk2LjA2N1oiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNTMxLjI3IDI2Mi41NDRMNTE2LjAwNCAyMDEuNzkxTDU0Mi45MDggMjEyLjY2NkM1NTAuMDQgMjE1LjU0MiA1NTUuOTIxIDIyMS4wNDIgNTU5LjMgMjI4LjA0Mkw1NjYuMDU3IDI0MS42NjhDNTY5LjY4NiAyNDkuMTY4IDU3Ni4zMTggMjU0LjkxOCA1ODQuMzI2IDI1Ny42NjlDNTkyLjMzNSAyNjAuMjk0IDYwMC45NjkgMjU5LjY2OSA2MDguNjAyIDI1NS45MThDNjI0LjI0MyAyNDcuOTE4IDYzMC42MjUgMjI4Ljc5MiA2MjIuNzQyIDIxMy4wNDFMNjE2LjExIDE5OS40MTZDNjA1LjcyNCAxNzguNTQgNTg3Ljk1NSAxNjIuMDM5IDU2Ni4zMDcgMTUzLjI4OUM1MjguODkzIDEzOC4xNjMgNTA4Ljk5NyAxMjcuOTEyIDQ3Mi45NTkgMTI4LjAzN0M0MjYuNDEgMTI4LjE2MiAzODUuMzY3IDE1OS4yODkgMzcwLjYwMSAyMDMuOTE2TDM2MC45NjYgMjMzLjI5MkwzMzcuNTY2IDI0NS4xNjhDMzIxLjkyNSAyNTMuMTY4IDMxNS41NDMgMjcyLjI5NCAzMjMuMzAxIDI4OC4xN0MzMjcuMDU1IDI5NS42NyAzMzMuNTYyIDMwMS40MjEgMzQxLjU3IDMwNC4xNzFDMzQ5LjU3OSAzMDYuNzk2IDM1OC4zMzggMzA2LjE3MSAzNjUuODQ2IDMwMi40MjFMMzg5LjEyMSAyOTAuNjdDNDA0LjI2MSAyODIuOTIgNDE1LjY0OCAyNjkuNjY5IDQyMC45MDQgMjUzLjY2OEw0MjYuNDEgMjM3LjE2OEw0NDMuNTUzIDMwNS43OTZMMzk4LjEzIDM1NS41NDhDMzkwLjg3MiAzNjMuMjk5IDM4NS43NDIgMzcyLjkyNCAzODMuMjM5IDM4My4xNzVMMzYwLjk2NiA0NzIuMTc5QzM1Ni43MTEgNDg5LjMwNSAzNjcuMDk3IDUwNi42OCAzODQuMzY1IDUxMS4wNTZDNDAxLjUwOSA1MTUuMzA2IDQxOC45MDIgNTA0LjgwNSA0MjMuMTU2IDQ4Ny42OEw0NDEuNDI2IDQxNC40MjZDNDQ0LjA1MyA0MDQuMDUxIDQ0OS4xODQgMzk0LjU1IDQ1Ni4zMTYgMzg2LjY3NUw1MTYuMzggMzIxLjI5N0M1MzAuODk1IDMwNS40MjEgNTM2LjQwMSAyODMuNDIgNTMxLjI3IDI2Mi41NDRaTTYzMSA0NTcuNDI4TDU4MC45NDggNDA3LjMwMUM1NzQuODE2IDQwMS4xNzUgNTY5LjkzNiAzOTMuOTI1IDU2Ni44MDggMzg1LjhMNTQ2LjAzNiAzMzQuMjk3QzUzNy4yNzcgMzQ2LjE3MyA1NTMuOTE5IDMyNy42NzIgNDk4LjYxMSAzODguMDVMNTEyLjEyNSA0MjEuODAxQzUxNS4zNzkgNDI5LjgwMiA1MjAuMTM0IDQzNy4xNzcgNTI2LjI2NSA0NDMuMzAyTDU4NS44MjggNTAyLjY4QzU5OC4zNDEgNTE0LjU1NiA2MTguMTEyIDUxNC4xODEgNjMwLjM3NSA1MDEuOTNDNjQyLjYzOCA0ODkuNjggNjQyLjg4OCA0NjkuOTI5IDYzMSA0NTcuNDI4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const HousePersonReturn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M375.109 333.453C344.326 345.579 309.289 331.953 294.774 302.327C279.258 270.7 292.146 232.324 323.304 216.573L334.941 210.823L340.447 193.947C349.832 165.445 368.101 140.569 392.502 122.818L263.741 8.938C250.352 -2.938 230.206 -2.938 216.817 8.938L4.719 196.447C-1.038 201.697 -1.663 210.573 3.592 216.448L22.362 237.824C27.493 243.574 36.502 244.199 42.383 239.074L64.031 219.948V384.081C64.031 401.707 78.421 416.082 96.065 416.082H342.199L352.335 375.455C356.214 359.955 363.847 345.704 374.733 333.953L375.109 333.453ZM224.2 272.076C224.2 280.951 217.067 288.076 208.183 288.076H144.115C135.231 288.076 128.098 280.951 128.098 272.076V208.072C128.098 199.197 135.231 192.072 144.115 192.072H208.183C217.067 192.072 224.2 199.197 224.2 208.072V272.076ZM432.419 96.067C458.947 96.067 480.47 74.566 480.47 48.065S458.947 0.063 432.419 0.063C405.891 0.063 384.368 21.564 384.368 48.065S405.891 96.067 432.419 96.067Z" />
            <path d="M531.27 262.544L516.004 201.791L542.908 212.666C550.04 215.542 555.921 221.042 559.3 228.042L566.057 241.668C569.686 249.168 576.318 254.918 584.326 257.669C592.335 260.294 600.969 259.669 608.602 255.918C624.243 247.918 630.625 228.792 622.742 213.041L616.11 199.416C605.724 178.54 587.955 162.039 566.307 153.289C528.893 138.163 508.997 127.912 472.959 128.037C426.41 128.162 385.367 159.289 370.601 203.916L360.966 233.292L337.566 245.168C321.925 253.168 315.543 272.294 323.301 288.17C327.055 295.67 333.562 301.421 341.57 304.171C349.579 306.796 358.338 306.171 365.846 302.421L389.121 290.67C404.261 282.92 415.648 269.669 420.904 253.668L426.41 237.168L443.553 305.796L398.13 355.548C390.872 363.299 385.742 372.924 383.239 383.175L360.966 472.179C356.711 489.305 367.097 506.68 384.365 511.056C401.509 515.306 418.902 504.805 423.156 487.68L441.426 414.426C444.053 404.051 449.184 394.55 456.316 386.675L516.38 321.297C530.895 305.421 536.401 283.42 531.27 262.544ZM631 457.428L580.948 407.301C574.816 401.175 569.936 393.925 566.808 385.8L546.036 334.297C537.277 346.173 553.919 327.672 498.611 388.05L512.125 421.801C515.379 429.802 520.134 437.177 526.265 443.302L585.828 502.68C598.341 514.556 618.112 514.181 630.375 501.93C642.638 489.68 642.888 469.929 631 457.428Z" />
    </Icon>
);

export default HousePersonReturn;
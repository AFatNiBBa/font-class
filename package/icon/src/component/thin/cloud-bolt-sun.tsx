
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-bolt-sun` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-bolt-sun?s=thin cloud-bolt-sun}
 * @preview ![cloud-bolt-sun](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNTcuNDY5IDMwMC45ODJMMTA0LjU3OCAzMTguNjg0QzEwMi4wMTYgMzE5LjU0NSAxMDAuMzU5IDMxOC4xNjggOTkuNzUgMzE3LjU0MUM5OS4wMzEgMzE2LjgyMiA5Ny45MzggMzE1LjI1NiA5OC43MDMgMzEyLjk1NUwxMjUuMDc4IDIzMy43OTVMNTAuNTYyIDE5Ni40NjlDNDguMjUgMTk1LjI5NSA0OCAxOTMuMTk3IDQ4IDE5Mi4zNTRDNDggMTkxLjUwOCA0OC4yNSAxODkuNDEgNTAuNTMxIDE4OC4yNTJMMTI1LjA3OCAxNTAuODk1TDk4LjcwMyA3MS43ODFDOTcuODkxIDY5LjI3NyA5OS4xODggNjcuNjE3IDk5Ljc4MSA2Ny4wMjNDMTAwLjMyOCA2Ni40MjggMTAxLjg5MSA2NS4wOTggMTA0LjM0NCA2NS45NzVMMTgzLjM3NSA5Mi4zOTNMMjIwLjY0MSAxNy43NTZDMjIxLjgxMyAxNS40MzkgMjIzLjkwNiAxNS4xODcgMjI0Ljc1IDE1LjE4N1MyMjcuNjg4IDE1LjQzOSAyMjguODQ0IDE3LjcyNUwyNjYuMTQxIDkyLjM5M0wzNDUuMTI1IDY1Ljk3NUMzNDcuNTYyIDY1LjE2IDM0OS4yODEgNjYuNDI4IDM0OS44NzUgNjcuMDU1QzM1MC40NTMgNjcuNjMzIDM1MS43MTkgNjkuMjMgMzUwLjkyMiA3MS42NDFMMzQzLjkwNiA5Mi43OTlDMzQyLjUxNiA5Ni45OTQgMzQ0Ljc4MSAxMDEuNTMzIDM0OC45ODQgMTAyLjkyNkMzNTMuMTI1IDEwNC4zNjUgMzU3LjcxOSAxMDIuMDE4IDM1OS4wOTQgOTcuODRMMzY2LjEwOSA3Ni42NjRDMzY4LjU2MyA2OS4yMyAzNjYuNjcyIDYxLjIxNyAzNjEuMTg4IDU1LjcyM0MzNTUuNjg4IDUwLjE4NCAzNDcuNTc4IDQ4LjI4OSAzNDAuMDk0IDUwLjc2MkwyNzQuMjM0IDcyLjc5OUwyNDMuMTQxIDEwLjUyNUMyMzYuMDQ3IC0zLjQ5OCAyMTMuNDY5IC0zLjUyOSAyMDYuMzQ0IDEwLjU1N0wxNzUuMjgxIDcyLjc5OUwxMDkuMzc1IDUwLjc2MkMxMDEuOTY5IDQ4LjI3MyA5My45MzggNTAuMTg0IDg4LjQ2OSA1NS42OTFDODIuOTUzIDYxLjIxNyA4MS4wNDcgNjkuMjkzIDgzLjUxNiA3Ni44MkwxMDUuNTE2IDE0Mi43ODdMNDMuMzQ0IDE3My45MzJDMzYuMzQ0IDE3Ny40ODQgMzIgMTg0LjU0MyAzMiAxOTIuMzU0QzMyIDIwMC4xNjIgMzYuMzQ0IDIwNy4yMjEgNDMuMzc1IDIxMC43ODlMMTA1LjUxNiAyNDEuOTAyTDgzLjUxNiAzMDcuOTE2QzgxLjA3OCAzMTUuMzAzIDgyLjkzOCAzMjMuMzE2IDg4LjM3NSAzMjguODI2QzkyLjMxMyAzMzIuODAxIDk3LjU2MyAzMzQuOTQ1IDEwMy4wMzEgMzM0Ljk0NUMxMDUuMTg4IDMzNC45NDUgMTA3LjM3NSAzMzQuNiAxMDkuNTMxIDMzMy45MjhMMTYyLjUzMSAzMTYuMTk1QzE2Ni43MTkgMzE0Ljc4NyAxNjguOTg0IDMxMC4yNDggMTY3LjU5NCAzMDYuMDU1QzE2Ni4xNzIgMzAxLjg1OSAxNjEuNjcyIDI5OS42MzcgMTU3LjQ2OSAzMDAuOTgyWk0xNzEuMjAzIDE5Mi4yODlDMTcxLjIwMyAxNjIuNjggMTk0Ljg1OSAxMzguNTk0IDIyMy45NTMgMTM4LjU5NEMyMzMuNjQxIDEzOC41OTQgMjQzLjIzNCAxNDEuNDU3IDI1MS43MDMgMTQ2Ljg1N0MyNTUuNDA2IDE0OS4yMTkgMjYwLjM3NSAxNDguMTU2IDI2Mi43NSAxNDQuMzk4QzI2NS4xMjUgMTQwLjY3NCAyNjQuMDMxIDEzNS43MTMgMjYwLjI5NyAxMzMuMzM0QzI0OS4yNSAxMjYuMjkxIDIzNi42ODcgMTIyLjU2NiAyMjMuOTUzIDEyMi41NjZDMTg2LjA0NyAxMjIuNTY2IDE1NS4yMDMgMTUzLjgzNiAxNTUuMjAzIDE5Mi4yODlDMTU1LjIwMyAyMTEuODY5IDE2My4yMzQgMjMwLjEwMiAxNzcuODEyIDI0My42MjNDMTc5LjM1OSAyNDUuMDQ5IDE4MS4yOTcgMjQ1Ljc1MiAxODMuMjUgMjQ1Ljc1MkMxODUuNDA2IDI0NS43NTIgMTg3LjU0NyAyNDQuODkxIDE4OS4xMjUgMjQzLjE4NkMxOTIuMTI1IDIzOS45MyAxOTEuOTIyIDIzNC44NTkgMTg4LjY4OCAyMzEuODU1QzE3Ny40MDYgMjIxLjQgMTcxLjIwMyAyMDcuMzQ2IDE3MS4yMDMgMTkyLjI4OVpNNTQzLjkwNiAyMTguMzMyQzUzNC41NjIgMTc5LjI1NCA1MDAuNzUgMTUxLjQxIDQ2MS42MDkgMTUxLjQxQzQ1MS4yNjYgMTUxLjQxIDQ0MS4wNzggMTUzLjQ0NSA0MzEuMjM0IDE1Ny40NjdDNDEyLjAxNiAxMzMuMTYyIDM4NC4xNzIgMTE5LjM1OSAzNTMuODkxIDExOS4zNTlDMzAwLjU0NyAxMTkuMzU5IDI1Ni43OTcgMTYyLjc4OSAyNTMuOTM3IDIxOC44NUMyMTcuNjg4IDIyOS4zNSAxOTIgMjY0LjAxNiAxOTIgMzAzLjY2QzE5MiAzNTIuMjcgMjMwLjEwOSAzOTEuODAzIDI3Ni45NTMgMzkxLjgwM0MyODEuMzc1IDM5MS44MDMgMjg0Ljk1MyAzODguMjE5IDI4NC45NTMgMzgzLjc5MUMyODQuOTUzIDM3OS4zNjEgMjgxLjM3NSAzNzUuNzc3IDI3Ni45NTMgMzc1Ljc3N0MyMzguOTM4IDM3NS43NzcgMjA4IDM0My40MjggMjA4IDMwMy42NkMyMDggMjY5LjMzOCAyMzEuMjk3IDIzOS42MTcgMjYzLjQwNiAyMzIuOTk4TDI2OS41NjIgMjMwLjA1NVYyMjMuNTI5QzI2OS41NjIgMTc0LjkxOCAzMDcuMzkxIDEzNS4zODUgMzUzLjg5MSAxMzUuMzg1QzM4MS4wMzEgMTM1LjM4NSA0MDUuODkxIDE0OC43MzQgNDIyLjEwOSAxNzIuMDIzTDQyNi4wNjIgMTc3LjcwM0w0MzIuMjUgMTc0LjYwNUM0NDEuNzM0IDE2OS44NDggNDUxLjYwOSAxNjcuNDM3IDQ2MS42MDkgMTY3LjQzN0M0OTQuNzM0IDE2Ny40MzcgNTIzLjE3MiAxOTIuMjQyIDUyOS4yNSAyMjYuNDM5TDUzMC4yMTkgMjMxLjg4N0w1MzUuNjQxIDIzMi45MDJDNTY4LjQwNiAyMzkuMDg2IDU5Mi4xMDkgMjY4LjgzNiA1OTIgMzAzLjY2QzU5MiAzNDMuNDI4IDU2MS4wNjIgMzc1Ljc3NyA1MjMuMDQ3IDM3NS43NzdINDk0LjIwM0M0ODkuNzgxIDM3NS43NzcgNDg2LjIwMyAzNzkuMzYxIDQ4Ni4yMDMgMzgzLjc5MUM0ODYuMjAzIDM4OC4yMTkgNDg5Ljc4MSAzOTEuODAzIDQ5NC4yMDMgMzkxLjgwM0g1MjMuMDQ3QzU2OS44OTEgMzkxLjgwMyA2MDggMzUyLjI3IDYwOCAzMDMuNjkxQzYwOC4xMjUgMjYzLjA0NyA1ODEuNDg0IDIyOC4wMDQgNTQzLjkwNiAyMTguMzMyWk00NDQgMzc2SDM0Mi44NTlMNDQ1Ljc1IDI2OS41NjJDNDQ4LjgyOCAyNjYuMzc1IDQ0OC43MzQgMjYxLjMxMiA0NDUuNTYyIDI1OC4yNUM0NDIuMzkxIDI1NS4yMTkgNDM3LjM0NCAyNTUuMjgxIDQzNC4yNSAyNTguNDM4TDMxOC4yNSAzNzguNDM4QzMxNi4wMTYgMzgwLjc1IDMxNS4zNzUgMzg0LjE1NiAzMTYuNjQxIDM4Ny4xMjVDMzE3Ljg5MSAzOTAuMDk0IDMyMC43OTcgMzkyIDMyNCAzOTJINDI1LjE0MUwzMjIuMjUgNDk4LjQzOEMzMTkuMTcyIDUwMS42MjUgMzE5LjI2NiA1MDYuNjg4IDMyMi40MzggNTA5Ljc1QzMyNCA1MTEuMjUgMzI2IDUxMiAzMjggNTEyQzMzMC4wOTQgNTEyIDMzMi4xODggNTExLjE4OCAzMzMuNzUgNTA5LjU2Mkw0NDkuNzUgMzg5LjU2MkM0NTEuOTg0IDM4Ny4yNSA0NTIuNjI1IDM4My44NDQgNDUxLjM1OSAzODAuODc1QzQ1MC4xMDkgMzc3LjkwNiA0NDcuMjAzIDM3NiA0NDQgMzc2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CloudBoltSun(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M157.469 300.982L104.578 318.684C102.016 319.545 100.359 318.168 99.75 317.541C99.031 316.822 97.938 315.256 98.703 312.955L125.078 233.795L50.562 196.469C48.25 195.295 48 193.197 48 192.354C48 191.508 48.25 189.41 50.531 188.252L125.078 150.895L98.703 71.781C97.891 69.277 99.188 67.617 99.781 67.023C100.328 66.428 101.891 65.098 104.344 65.975L183.375 92.393L220.641 17.756C221.813 15.439 223.906 15.187 224.75 15.187S227.688 15.439 228.844 17.725L266.141 92.393L345.125 65.975C347.562 65.16 349.281 66.428 349.875 67.055C350.453 67.633 351.719 69.23 350.922 71.641L343.906 92.799C342.516 96.994 344.781 101.533 348.984 102.926C353.125 104.365 357.719 102.018 359.094 97.84L366.109 76.664C368.563 69.23 366.672 61.217 361.188 55.723C355.688 50.184 347.578 48.289 340.094 50.762L274.234 72.799L243.141 10.525C236.047 -3.498 213.469 -3.529 206.344 10.557L175.281 72.799L109.375 50.762C101.969 48.273 93.938 50.184 88.469 55.691C82.953 61.217 81.047 69.293 83.516 76.82L105.516 142.787L43.344 173.932C36.344 177.484 32 184.543 32 192.354C32 200.162 36.344 207.221 43.375 210.789L105.516 241.902L83.516 307.916C81.078 315.303 82.938 323.316 88.375 328.826C92.313 332.801 97.563 334.945 103.031 334.945C105.188 334.945 107.375 334.6 109.531 333.928L162.531 316.195C166.719 314.787 168.984 310.248 167.594 306.055C166.172 301.859 161.672 299.637 157.469 300.982ZM171.203 192.289C171.203 162.68 194.859 138.594 223.953 138.594C233.641 138.594 243.234 141.457 251.703 146.857C255.406 149.219 260.375 148.156 262.75 144.398C265.125 140.674 264.031 135.713 260.297 133.334C249.25 126.291 236.687 122.566 223.953 122.566C186.047 122.566 155.203 153.836 155.203 192.289C155.203 211.869 163.234 230.102 177.812 243.623C179.359 245.049 181.297 245.752 183.25 245.752C185.406 245.752 187.547 244.891 189.125 243.186C192.125 239.93 191.922 234.859 188.688 231.855C177.406 221.4 171.203 207.346 171.203 192.289ZM543.906 218.332C534.562 179.254 500.75 151.41 461.609 151.41C451.266 151.41 441.078 153.445 431.234 157.467C412.016 133.162 384.172 119.359 353.891 119.359C300.547 119.359 256.797 162.789 253.937 218.85C217.688 229.35 192 264.016 192 303.66C192 352.27 230.109 391.803 276.953 391.803C281.375 391.803 284.953 388.219 284.953 383.791C284.953 379.361 281.375 375.777 276.953 375.777C238.938 375.777 208 343.428 208 303.66C208 269.338 231.297 239.617 263.406 232.998L269.562 230.055V223.529C269.562 174.918 307.391 135.385 353.891 135.385C381.031 135.385 405.891 148.734 422.109 172.023L426.062 177.703L432.25 174.605C441.734 169.848 451.609 167.437 461.609 167.437C494.734 167.437 523.172 192.242 529.25 226.439L530.219 231.887L535.641 232.902C568.406 239.086 592.109 268.836 592 303.66C592 343.428 561.062 375.777 523.047 375.777H494.203C489.781 375.777 486.203 379.361 486.203 383.791C486.203 388.219 489.781 391.803 494.203 391.803H523.047C569.891 391.803 608 352.27 608 303.691C608.125 263.047 581.484 228.004 543.906 218.332ZM444 376H342.859L445.75 269.562C448.828 266.375 448.734 261.312 445.562 258.25C442.391 255.219 437.344 255.281 434.25 258.438L318.25 378.438C316.016 380.75 315.375 384.156 316.641 387.125C317.891 390.094 320.797 392 324 392H425.141L322.25 498.438C319.172 501.625 319.266 506.688 322.438 509.75C324 511.25 326 512 328 512C330.094 512 332.188 511.188 333.75 509.562L449.75 389.562C451.984 387.25 452.625 383.844 451.359 380.875C450.109 377.906 447.203 376 444 376Z" />
        </Icon>
    </>
}
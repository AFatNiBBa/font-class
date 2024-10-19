
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `spider-black-widow` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/spider-black-widow?s=solid spider-black-widow}
 * @preview ![spider-black-widow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MzUuODg2IDMxMi45MzhDNTMzLjc0NSAzMDYuMDEgNTI4LjU3NSAzMDAuNDE4IDUyMS44MjEgMjk3LjcyN0w0MTcuMTA0IDI1Nkg0MTcuMTAyTDUyMS43OTkgMjE0LjI4MUM1MjguNTY3IDIxMS41ODQgNTMzLjc0NyAyMDUuOTgyIDUzNS44OSAxOTkuMDQzTDU2My4yODYgMTEwLjM1MkM1NjUuODkzIDEwMS45MDggNTYxLjEzNyA5Mi45NTUgNTUyLjY1OSA5MC4zNTVMNTM3LjMxIDg1LjY0NkM1MjguODMgODMuMDQ3IDUxOS44NCA4Ny43ODUgNTE3LjIzMyA5Ni4yMzJMNDkzLjIyMSAxNzMuOTY5TDQxMy40MyAyMDUuNzdMNDY2LjkwNCAxNDMuNjIzQzQ3MS45ODQgMTM3LjcxOSA0NzMuODc4IDEyOS43MyA0NzEuOTg0IDEyMi4xODhMNDQzLjc1NSAxMi4xMjNDNDQxLjYwNCAzLjU1MyA0MzIuODg3IC0xLjY2IDQyNC4yODQgMC40OEw0MDguNzA3IDQuMzU0QzQwMC4wOTkgNi40OTQgMzk0Ljg2NSAxNS4xODQgMzk3LjAxNSAyMy43NThMNDIyLjIxNSAxMjEuNzgxTDM2OC4zMDYgMTg0LjQ0NVYxNjBIMzY3Ljg2N0MzNjcuOTM3IDE1OC42MjUgMzY4LjMwNiAxNTcuMzM0IDM2OC4zMDYgMTU1Ljk0MUMzNjguMzA2IDEyMS4wNDkgMzQ1Ljg4MiA5MS4zODcgMzE0LjYwOSA4MC40NDlDMzA5LjQ1NCA3OC42NDYgMzA0LjA2IDgyLjY0NiAzMDQuMDYgODguMDlWMTEySDI3MS45MzhWODguMDc0QzI3MS45MzggODIuNjQ4IDI2Ni41NzcgNzguNjQxIDI2MS40MzcgODAuNDM0QzIyOC45NDcgOTEuNzcxIDIwNi4yMDggMTIzLjM2OSAyMDguMDA0IDE2MEgyMDcuNjkyVjE4NC40NDVMMTUzLjc4MyAxMjEuNzgxTDE3OC45ODMgMjMuNzU4QzE4MS4xMzUgMTUuMTg0IDE3NS45MDEgNi40OTQgMTY3LjI5MSA0LjM1NEwxNTEuNzE2IDAuNDhDMTQzLjExMSAtMS42NiAxMzQuMzk0IDMuNTUzIDEzMi4yNDMgMTIuMTIzTDEwNC4wMTQgMTIyLjE4OEMxMDIuMTIyIDEyOS43MyAxMDQuMDE0IDEzNy43MTkgMTA5LjA5NCAxNDMuNjIzTDE2Mi41NjggMjA1Ljc3TDgyLjc3NyAxNzMuOTY5TDU4Ljc2NyA5Ni4yMzJDNTYuMTU4IDg3Ljc4NSA0Ny4xNjggODMuMDQ3IDM4LjY4OSA4NS42NDZMMjMuMzM5IDkwLjM1NUMxNC44NjMgOTIuOTU1IDEwLjEwNyAxMDEuOTA4IDEyLjcxNCAxMTAuMzUyTDQwLjExNCAxOTkuMDYyQzQyLjI1NSAyMDUuOTkgNDcuNDI1IDIxMS41ODIgNTQuMTc5IDIxNC4yNzNMMTU4Ljg5NiAyNTZIMTU4Ljg5OEw1NC4yMDEgMjk3LjcxOUM0Ny40MzMgMzAwLjQxNiA0Mi4yNTMgMzA2LjAxOCA0MC4xMSAzMTIuOTU3TDEyLjcxNCA0MDEuNjQ4QzEwLjEwNyA0MTAuMDkyIDE0Ljg2MyA0MTkuMDQ1IDIzLjM0MSA0MjEuNjQ1TDM4LjY5IDQyNi4zNTRDNDcuMTcgNDI4Ljk1MyA1Ni4xNiA0MjQuMjE1IDU4Ljc2NyA0MTUuNzY4TDgyLjc3OSAzMzguMDMxTDE2Mi41NyAzMDYuMjNMMTA5LjA5NiAzNjguMzc3QzEwNC4wMTYgMzc0LjI4MSAxMDIuMTIyIDM4Mi4yNyAxMDQuMDE2IDM4OS44MTJMMTMyLjI0NSA0OTkuODc3QzEzNC4zOTYgNTA4LjQ0NyAxNDMuMTEzIDUxMy42NiAxNTEuNzE2IDUxMS41MkwxNjcuMjkzIDUwNy42NDZDMTc1LjkwMSA1MDUuNTA2IDE4MS4xMzUgNDk2LjgxNiAxNzguOTg1IDQ4OC4yNDJMMTUzLjc4NSAzOTAuMjE5TDE5Mi4yOTMgMzQ1LjQ1N0MxOTIuMTQyIDM0Ny42NiAxOTEuNjMxIDM0OS43NTggMTkxLjYzMSAzNTJDMTkxLjYzMSA0MDUuMDIgMjM0Ljc3NiA0NDggMjg3Ljk5OSA0NDhTMzg0LjM2NyA0MDUuMDIgMzg0LjM2NyAzNTJDMzg0LjM2NyAzNDkuNzU4IDM4My44NTggMzQ3LjY1NiAzODMuNzA1IDM0NS40NTFMNDIyLjIxNyAzOTAuMjE5TDM5Ny4wMTcgNDg4LjI0MkMzOTQuODY1IDQ5Ni44MTYgNDAwLjA5OSA1MDUuNTA2IDQwOC43MDkgNTA3LjY0Nkw0MjQuMjg0IDUxMS41MkM0MzIuODg5IDUxMy42NiA0NDEuNjA2IDUwOC40NDcgNDQzLjc1NyA0OTkuODc3TDQ3MS45ODYgMzg5LjgxMkM0NzMuODc4IDM4Mi4yNyA0NzEuOTg2IDM3NC4yODEgNDY2LjkwNiAzNjguMzc3TDQxMy40MzIgMzA2LjIzTDQ5My4yMjMgMzM4LjAzMUw1MTcuMjMzIDQxNS43NjhDNTE5Ljg0MiA0MjQuMjE1IDUyOC44MzIgNDI4Ljk1MyA1MzcuMzEyIDQyNi4zNTRMNTUyLjY2MSA0MjEuNjQ1QzU2MS4xMzcgNDE5LjA0NSA1NjUuODkzIDQxMC4wOTIgNTYzLjI4NiA0MDEuNjQ4TDUzNS44ODYgMzEyLjkzOFpNMzI2LjUyMSAzNzEuMjVDMzMwLjUzNyAzNzYuNSAzMjYuNzcyIDM4NCAzMjAuMTIyIDM4NEgyNTUuODc2QzI0OS4yMjYgMzg0IDI0NS40NjEgMzc2LjUgMjQ5LjQ3NyAzNzEuMjVMMjc1Ljk1MyAzMzZMMjQ5LjQ3NyAzMDAuNzVDMjQ1LjQ2MSAyOTUuNSAyNDkuMjI2IDI4OCAyNTUuODc2IDI4OEgzMjAuMTIyQzMyNi43NzIgMjg4IDMzMC41MzcgMjk1LjUgMzI2LjUyMSAzMDAuNzVMMzAwLjA0NSAzMzZMMzI2LjUyMSAzNzEuMjVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SpiderBlackWidow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M535.886 312.938C533.745 306.01 528.575 300.418 521.821 297.727L417.104 256H417.102L521.799 214.281C528.567 211.584 533.747 205.982 535.89 199.043L563.286 110.352C565.893 101.908 561.137 92.955 552.659 90.355L537.31 85.646C528.83 83.047 519.84 87.785 517.233 96.232L493.221 173.969L413.43 205.77L466.904 143.623C471.984 137.719 473.878 129.73 471.984 122.188L443.755 12.123C441.604 3.553 432.887 -1.66 424.284 0.48L408.707 4.354C400.099 6.494 394.865 15.184 397.015 23.758L422.215 121.781L368.306 184.445V160H367.867C367.937 158.625 368.306 157.334 368.306 155.941C368.306 121.049 345.882 91.387 314.609 80.449C309.454 78.646 304.06 82.646 304.06 88.09V112H271.938V88.074C271.938 82.648 266.577 78.641 261.437 80.434C228.947 91.771 206.208 123.369 208.004 160H207.692V184.445L153.783 121.781L178.983 23.758C181.135 15.184 175.901 6.494 167.291 4.354L151.716 0.48C143.111 -1.66 134.394 3.553 132.243 12.123L104.014 122.188C102.122 129.73 104.014 137.719 109.094 143.623L162.568 205.77L82.777 173.969L58.767 96.232C56.158 87.785 47.168 83.047 38.689 85.646L23.339 90.355C14.863 92.955 10.107 101.908 12.714 110.352L40.114 199.062C42.255 205.99 47.425 211.582 54.179 214.273L158.896 256H158.898L54.201 297.719C47.433 300.416 42.253 306.018 40.11 312.957L12.714 401.648C10.107 410.092 14.863 419.045 23.341 421.645L38.69 426.354C47.17 428.953 56.16 424.215 58.767 415.768L82.779 338.031L162.57 306.23L109.096 368.377C104.016 374.281 102.122 382.27 104.016 389.812L132.245 499.877C134.396 508.447 143.113 513.66 151.716 511.52L167.293 507.646C175.901 505.506 181.135 496.816 178.985 488.242L153.785 390.219L192.293 345.457C192.142 347.66 191.631 349.758 191.631 352C191.631 405.02 234.776 448 287.999 448S384.367 405.02 384.367 352C384.367 349.758 383.858 347.656 383.705 345.451L422.217 390.219L397.017 488.242C394.865 496.816 400.099 505.506 408.709 507.646L424.284 511.52C432.889 513.66 441.606 508.447 443.757 499.877L471.986 389.812C473.878 382.27 471.986 374.281 466.906 368.377L413.432 306.23L493.223 338.031L517.233 415.768C519.842 424.215 528.832 428.953 537.312 426.354L552.661 421.645C561.137 419.045 565.893 410.092 563.286 401.648L535.886 312.938ZM326.521 371.25C330.537 376.5 326.772 384 320.122 384H255.876C249.226 384 245.461 376.5 249.477 371.25L275.953 336L249.477 300.75C245.461 295.5 249.226 288 255.876 288H320.122C326.772 288 330.537 295.5 326.521 300.75L300.045 336L326.521 371.25Z" />
        </Icon>
    </>
}
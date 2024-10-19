
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `shovel` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shovel?s=thin shovel}
 * @preview ![shovel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDkuNjU3IDg3Ljg5MUw0MjQuMDQ3IDIuMjVDNDIxLjA0NyAtMC43NSA0MTUuNzM1IC0wLjc1IDQxMi43MzUgMi4yNUwzNzguMzYgMzYuNjkzQzM2NS40MjIgNDkuNjA0IDM1OC4yODIgNjYuODI0IDM1OC4yODIgODUuMTQxQzM1OC4yODIgMTAwLjcyOSAzNjMuNzI1IDExNS4zNSAzNzMuMjUgMTI3LjM2N0wyMTQuMzQgMjg2LjMwN0wxNTIuMTEyIDIyNC4wNjhDMTQ1Ljg2MiAyMTcuODE0IDEzNy42NzQgMjE0LjY4OCAxMjkuNDg1IDIxNC42ODhDMTIxLjI5NyAyMTQuNjg4IDExMy4xMDggMjE3LjgxNCAxMDYuODU4IDIyNC4wNjhMMzguOTczIDI5MS45NjNDLTExLjAzMyAzNDEuOTc3IC02LjI4MyA0NzMuMDIgMTYuMzQ2IDQ5NS42NTJDMjYuMjIxIDUwNS41MjkgNTYuNzM5IDUxMiA5Mi4xNTcgNTEyQzEzNy44OTcgNTEyIDE5MS44MTMgNTAxLjIwOSAyMTkuOTk2IDQ3My4wMkwyODcuODc5IDQwNS4xMjFDMzAwLjM4MSAzOTIuNjE5IDMwMC4zODEgMzcyLjM2NSAyODcuODc5IDM1OS44NTlMMjI1LjY1MyAyOTcuNjIxTDM4NC41ODYgMTM4LjY1OEMzOTYuMzQ0IDE0Ny44MTYgNDExLjIxMyAxNTMuMTg0IDQyNi44MjggMTUzLjE4NEM0NDUuMjM1IDE1My4xODQgNDYyLjg3NSAxNDYuMDU5IDQ3NS4yMzUgMTMzLjYxOUw1MDkuNjU3IDk5LjIwNUM1MTEuMTU3IDk3LjcwNSA1MTIgOTUuNjc0IDUxMiA5My41NDlTNTExLjE1NyA4OS4zOTEgNTA5LjY1NyA4Ny44OTFaTTI3Ni41NjUgMzcxLjE3NEMyNzkuNTkgMzc0LjE5OSAyODEuMjU2IDM3OC4yMTkgMjgxLjI1NiAzODIuNDkyQzI4MS4yNTYgMzg2Ljc2MiAyNzkuNTkgMzkwLjc4MSAyNzYuNTY1IDM5My44MDVMMjA4LjY4NCA0NjEuNzAzQzE4My40MDMgNDg2Ljk4OCAxMzEuOTEyIDQ5NS45OTYgOTIuMTU3IDQ5NS45OTZDNTIuNjIzIDQ5NS45OTYgMzEuMzEzIDQ4Ny45OSAyNy42NjEgNDg0LjMzOEMyMi42OSA0NzkuMzY1IDEzLjk4OSA0NTAuMDg0IDE2LjM5OSA0MDQuOTNDMTguNzkzIDM2MC4xMDcgMzEuNDYxIDMyMi4xMDcgNTAuMjg3IDMwMy4yNzdMMTE4LjE3NCAyMzUuMzgxQzEyMS4xOTggMjMyLjM1NyAxMjUuMjEzIDIzMC42OTEgMTI5LjQ4NSAyMzAuNjkxUzEzNy43NzQgMjMyLjM1NyAxNDAuNzk5IDIzNS4zODNMMjc2LjU2NSAzNzEuMTc0Wk00NjMuOTIyIDEyMi4zMDNDNDYzLjkyMiAxMjIuMzAzIDQ2My45MDcgMTIyLjMwMyA0NjMuOTA3IDEyMi4zMzRDNDQ1LjEyNSAxNDEuMjEzIDQwOC40ODUgMTQxLjIxMyAzODkuNzAzIDEyMi4zMDNDMzc5Ljc1IDExMi4zOTYgMzc0LjI4MiA5OS4xNzQgMzc0LjI4MiA4NS4xNDFTMzc5Ljc1IDU3LjkxNiAzODkuNjcyIDQ4LjAxTDQxOC4zOTEgMTkuMjIzTDQ5Mi42ODggOTMuNTQ5TDQ2My45MjIgMTIyLjMwM1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Shovel(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M509.657 87.891L424.047 2.25C421.047 -0.75 415.735 -0.75 412.735 2.25L378.36 36.693C365.422 49.604 358.282 66.824 358.282 85.141C358.282 100.729 363.725 115.35 373.25 127.367L214.34 286.307L152.112 224.068C145.862 217.814 137.674 214.688 129.485 214.688C121.297 214.688 113.108 217.814 106.858 224.068L38.973 291.963C-11.033 341.977 -6.283 473.02 16.346 495.652C26.221 505.529 56.739 512 92.157 512C137.897 512 191.813 501.209 219.996 473.02L287.879 405.121C300.381 392.619 300.381 372.365 287.879 359.859L225.653 297.621L384.586 138.658C396.344 147.816 411.213 153.184 426.828 153.184C445.235 153.184 462.875 146.059 475.235 133.619L509.657 99.205C511.157 97.705 512 95.674 512 93.549S511.157 89.391 509.657 87.891ZM276.565 371.174C279.59 374.199 281.256 378.219 281.256 382.492C281.256 386.762 279.59 390.781 276.565 393.805L208.684 461.703C183.403 486.988 131.912 495.996 92.157 495.996C52.623 495.996 31.313 487.99 27.661 484.338C22.69 479.365 13.989 450.084 16.399 404.93C18.793 360.107 31.461 322.107 50.287 303.277L118.174 235.381C121.198 232.357 125.213 230.691 129.485 230.691S137.774 232.357 140.799 235.383L276.565 371.174ZM463.922 122.303C463.922 122.303 463.907 122.303 463.907 122.334C445.125 141.213 408.485 141.213 389.703 122.303C379.75 112.396 374.282 99.174 374.282 85.141S379.75 57.916 389.672 48.01L418.391 19.223L492.688 93.549L463.922 122.303Z" />
        </Icon>
    </>
}
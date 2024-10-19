
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `star-half-stroke` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/star-half-stroke?s=light star-half-stroke}
 * @preview ![star-half-stroke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MjguNTMgMTcxLjQ5TDM4Mi4xNzEgMTUwLjE5NUwzMTYuNzM5IDE3LjgwNUMzMTAuODY2IDUuOTcxIDI5OS40NjggLTAuMDAyIDI4Ny45OTkgMEMyNzYuNjA0IDAgMjY1LjE0MSA1Ljg5OCAyNTkuMjU5IDE3LjgwNUwxOTMuODI3IDE1MC4xOTVMNDcuNDY4IDE3MS40OUMyMS4yMDIgMTc1LjI4NyAxMC42ODIgMjA3LjU4IDI5LjcxOCAyMjYuMDc4TDEzNS42MjggMzI5LjA2NkwxMTAuNTgzIDQ3NC41NTFDMTA3LjAyIDQ5NS4zNDQgMTIzLjU5OSA1MTIgMTQyLjE5IDUxMkMxNDcuMTIyIDUxMiAxNTIuMTk2IDUxMC44MjggMTU3LjA3MyA1MDguMjVMMjg3Ljk5OSA0MzkuNTU1TDQxOC45MjUgNTA4LjI1QzQyMy43OSA1MTAuODAzIDQyOC44NSA1MTEuOTYzIDQzMy43NyA1MTEuOTYzQzQ1Mi4zNzggNTExLjk2MyA0NjguOTgxIDQ5NS4zNTcgNDY1LjQxNyA0NzQuNTUxTDQ0MC4zNyAzMjkuMDY2TDU0Ni4yODIgMjI2LjA3OEM1NjUuMzE3IDIwNy41OCA1NTQuNzk4IDE3NS4yODcgNTI4LjUzIDE3MS40OVpNMTQyLjExOCA0NzkuOTc5TDE2OC41OTQgMzI2LjE4NkMxNjkuNDg5IDMyMC45ODcgMTY3Ljc2NCAzMTUuNjggMTYzLjk4MiAzMTIuMDAyTDUyLjA3NSAyMDMuMTU4TDIwNi43NTQgMTgwLjY1MUMyMTEuOTU5IDE3OS44OTQgMjE2LjQ2IDE3Ni42MjYgMjE4Ljc5MiAxNzEuOTEyTDI3MS45OTkgNjQuMzQ2VjQxMS44MTJMMTQyLjExOCA0NzkuOTc5Wk00MDcuMzk5IDMyNi4xODNMNDMzLjc5NCA0NzkuOTE0TDMwMy45OTkgNDExLjgxMVY2NC4zNDZMMzU3LjIwNSAxNzEuOTFDMzU5LjUzOCAxNzYuNjI2IDM2NC4wMzkgMTc5Ljg5MyAzNjkuMjQ1IDE4MC42NUw1MjMuOTc0IDIwMy4xMzdMNDEyLjAxNCAzMTIuMDA1QzQwOC4yMzMgMzE1LjY4MiA0MDYuNTA3IDMyMC45ODUgNDA3LjM5OSAzMjYuMTgzWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function StarHalfStroke(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M528.53 171.49L382.171 150.195L316.739 17.805C310.866 5.971 299.468 -0.002 287.999 0C276.604 0 265.141 5.898 259.259 17.805L193.827 150.195L47.468 171.49C21.202 175.287 10.682 207.58 29.718 226.078L135.628 329.066L110.583 474.551C107.02 495.344 123.599 512 142.19 512C147.122 512 152.196 510.828 157.073 508.25L287.999 439.555L418.925 508.25C423.79 510.803 428.85 511.963 433.77 511.963C452.378 511.963 468.981 495.357 465.417 474.551L440.37 329.066L546.282 226.078C565.317 207.58 554.798 175.287 528.53 171.49ZM142.118 479.979L168.594 326.186C169.489 320.987 167.764 315.68 163.982 312.002L52.075 203.158L206.754 180.651C211.959 179.894 216.46 176.626 218.792 171.912L271.999 64.346V411.812L142.118 479.979ZM407.399 326.183L433.794 479.914L303.999 411.811V64.346L357.205 171.91C359.538 176.626 364.039 179.893 369.245 180.65L523.974 203.137L412.014 312.005C408.233 315.682 406.507 320.985 407.399 326.183Z" />
        </Icon>
    </>
}
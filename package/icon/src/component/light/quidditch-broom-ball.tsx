
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `quidditch-broom-ball` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/quidditch-broom-ball?s=light quidditch-broom-ball}
 * @preview ![quidditch-broom-ball](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgMzUyQzQ1MS44NzUgMzUyIDQxNiAzODcuNjM3IDQxNiA0MzEuNjI1UzQ1MS44NzUgNTEyIDQ5NiA1MTJTNTc2IDQ3NS42MTMgNTc2IDQzMS42MjVTNTQwLjI1IDM1MiA0OTYgMzUyWk00OTYgNDc5LjQ3N0M0NjkuNSA0NzkuNDc3IDQ0OCA0NTguMDQzIDQ0OCA0MzEuNjI1UzQ2OS41IDM4My43NzMgNDk2IDM4My43NzNTNTQ0IDQwNS4yMDcgNTQ0IDQzMS42MjVTNTIyLjUgNDc5LjQ3NyA0OTYgNDc5LjQ3N1pNMzA0LjIzOSAzMzIuMTMzQzMwNC4xMTQgMzMyLjk2MSAyODkuODAxIDQxNS4wOTQgMjQyLjMzNiA0NTIuMTEzQzIwNi44MzggNDc5LjcxMSA5My43MTkgNDgxLjM5OCAzNS4wOTggNDc5LjIxMUMzNi40NzMgNDcyLjIzIDM4LjI4NSA0NjMuNTE2IDQwLjUwNCA0NTMuNjZMMTIxLjcxNyAzNTkuNTc4QzEzNi4wOCAzNDIuOTM0IDExOC42NDUgMzE4LjYxNyA5OC4zNDQgMzI1Ljg3MUw3OC4yMjEgMzMzLjAzOUM5MC4zNzUgMzA2LjQ1NyAxMDAuOTA3IDI5NC4wNyAxMDguMzEzIDI4OC4zMDVDMTU1LjkzNCAyNTEuMjczIDI0MS4yNDIgMjU2LjA5OCAyNDIuMTggMjU2LjE2QzI2My44OTUgMjU2LjY3MiAyNjQuNzkxIDIyNS41NDcgMjQ0LjIxMSAyMjQuMjM0QzI0MC4xNDkgMjI0IDE0NS45NjcgMjE4LjUxNiA4OC42ODggMjYzLjA0N0M2OS4wMzMgMjc4LjI5MyA1MS41MzUgMzA4LjI2NiAzNS4xNiAzNTQuNjZDMzAuNzAzIDM2Ny4yNSA0Mi44OTcgMzc5LjU1NSA1NS42MjcgMzc1LjA1OUw3MC43NTIgMzY5LjY3MkwxMy42NjIgNDM1Ljc3M0MxMS45NzUgNDM3Ljc0MiAxMC43ODcgNDQwLjEwMiAxMC4xOTQgNDQyLjYzM0MzLjYzMSA0NzEuMTQxIDAuMjU2IDQ5MS42OCAwLjI1NiA0OTEuNjhDLTEuNzM4IDUwMy41MiA4LjM2IDUwOS43OTcgMTUuMDA2IDUxMC4yMzRDMjEuNDQyIDUxMC42NDEgNDQuNzIzIDUxMiA3NC45NzEgNTEyQzEzNS42NTUgNTEyIDIyNC40MyA1MDYuNTc4IDI2MS45OTEgNDc3LjM0QzMxOS4zOTUgNDMyLjU4NiAzMzUuMTc0IDM0MS4yNTggMzM1Ljc5OSAzMzcuMzk4QzMzOS4yMjMgMzE2LjYzMyAzMDcuNzc4IDMxMS4xMzcgMzA0LjIzOSAzMzIuMTMzWk02MzYuNSA1Ljk5MkM2MzAuOTY5IC0wLjg2NyA2MjAuOTcxIC0yLjAyMyA2MTQuMDAyIDMuNDkyTDM4MS45MiAxODkuMTA5TDM0MS41NDkgMTM3LjkxNEMzNDEuNTQ5IDEzNy44OTggMzQxLjUxOCAxMzcuODY3IDM0MS40ODcgMTM3Ljg1MkMzMjkuNjkgMTIzLjAxNiAzMDUuNjggMTI0Ljk3NyAyOTcuMDUxIDE0My4yNDJMMjczLjQ5MSAxOTQuNDkyQzI3MC45NTkgMTk5Ljk2MSAyNzEuNzQxIDIwNi4zNjMgMjc1LjQ1OSAyMTEuMDc4TDM1Ni40NTMgMzEzLjc5N0MzNTcuNTk2IDMxNS4yNSAzNjMuMzU2IDMyMS41ODYgMzcyLjM2IDMxOS41MzFMNDI3LjA3NSAzMDcuODEyQzQ0Ni4wMiAzMDMuOTMgNDU0LjUgMjgxLjMzNiA0NDIuMzg3IDI2NS43ODFMNDAxLjc0MSAyMTQuMjQyTDYzNCAyOC40ODRDNjQwLjkwNyAyMi45NTMgNjQyIDEyLjg5NSA2MzYuNSA1Ljk5MlpNNDExLjYwOCAyNzguNDE4TDM3NS40MjIgMjg2LjE2NEwzMDYuNjQ1IDE5OC45NjFMMzIyLjIzNyAxNjUuMDc4TDQxMS42MDggMjc4LjQxOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function QuidditchBroomBall(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M496 352C451.875 352 416 387.637 416 431.625S451.875 512 496 512S576 475.613 576 431.625S540.25 352 496 352ZM496 479.477C469.5 479.477 448 458.043 448 431.625S469.5 383.773 496 383.773S544 405.207 544 431.625S522.5 479.477 496 479.477ZM304.239 332.133C304.114 332.961 289.801 415.094 242.336 452.113C206.838 479.711 93.719 481.398 35.098 479.211C36.473 472.23 38.285 463.516 40.504 453.66L121.717 359.578C136.08 342.934 118.645 318.617 98.344 325.871L78.221 333.039C90.375 306.457 100.907 294.07 108.313 288.305C155.934 251.273 241.242 256.098 242.18 256.16C263.895 256.672 264.791 225.547 244.211 224.234C240.149 224 145.967 218.516 88.688 263.047C69.033 278.293 51.535 308.266 35.16 354.66C30.703 367.25 42.897 379.555 55.627 375.059L70.752 369.672L13.662 435.773C11.975 437.742 10.787 440.102 10.194 442.633C3.631 471.141 0.256 491.68 0.256 491.68C-1.738 503.52 8.36 509.797 15.006 510.234C21.442 510.641 44.723 512 74.971 512C135.655 512 224.43 506.578 261.991 477.34C319.395 432.586 335.174 341.258 335.799 337.398C339.223 316.633 307.778 311.137 304.239 332.133ZM636.5 5.992C630.969 -0.867 620.971 -2.023 614.002 3.492L381.92 189.109L341.549 137.914C341.549 137.898 341.518 137.867 341.487 137.852C329.69 123.016 305.68 124.977 297.051 143.242L273.491 194.492C270.959 199.961 271.741 206.363 275.459 211.078L356.453 313.797C357.596 315.25 363.356 321.586 372.36 319.531L427.075 307.812C446.02 303.93 454.5 281.336 442.387 265.781L401.741 214.242L634 28.484C640.907 22.953 642 12.895 636.5 5.992ZM411.608 278.418L375.422 286.164L306.645 198.961L322.237 165.078L411.608 278.418Z" />
        </Icon>
    </>
}
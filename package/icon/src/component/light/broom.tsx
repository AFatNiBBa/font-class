
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `broom` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/broom?s=light broom}
 * @preview ![broom](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzYuNSA1Ljk5QzYzMC45NjkgLTAuODY3IDYyMC45NzEgLTIuMDIzIDYxNC4wMDIgMy40OUwzODEuOTIgMTg5LjEwN0wzNDEuNTQ5IDEzNy45MTZDMzQxLjU0OSAxMzcuOSAzNDEuNTE4IDEzNy44NjkgMzQxLjQ4NyAxMzcuODU0QzMyOS42OSAxMjMuMDE0IDMwNS42OCAxMjQuOTc3IDI5Ny4wNTEgMTQzLjI0MkwyNzMuNDkxIDE5NC40OTJDMjcwLjk1OSAxOTkuOTU5IDI3MS43NDEgMjA2LjM2MyAyNzUuNDU5IDIxMS4wOEwzNTYuNDUzIDMxMy43OTdDMzU3LjU5NiAzMTUuMjQ4IDM2My4zNTYgMzIxLjU4OCAzNzIuMzYgMzE5LjUyOUw0MjcuMDc1IDMwNy44MTRDNDQ2LjAyIDMwMy45MjggNDU0LjUgMjgxLjMzNCA0NDIuMzg3IDI2NS43ODFMNDAxLjc0MSAyMTQuMjQyTDYzNCAyOC40ODJDNjQwLjkwNyAyMi45NTMgNjQyIDEyLjg5NSA2MzYuNSA1Ljk5Wk00MTEuNjA4IDI3OC40MThMMzc1LjQyMiAyODYuMTY2TDMwNi42NDUgMTk4Ljk1OUwzMjIuMjM3IDE2NS4wOEw0MTEuNjA4IDI3OC40MThaTTMwNC4yMzkgMzMyLjEzNUMzMDQuMTE0IDMzMi45NjMgMjg5LjgwMSA0MTUuMDk0IDI0Mi4zMzYgNDUyLjExM0MyMDYuODM4IDQ3OS43MTMgOTMuNzE5IDQ4MS40IDM1LjA5OCA0NzkuMjEzQzM2LjQ3MyA0NzIuMjMgMzguMjg1IDQ2My41MTYgNDAuNTA0IDQ1My42NkwxMjEuNzE3IDM1OS41OEMxMzYuMDggMzQyLjkzNCAxMTguNjQ1IDMxOC42MTkgOTguMzQ0IDMyNS44NzFMNzguMjIxIDMzMy4wNDFDOTAuMzc1IDMwNi40NTcgMTAwLjkwNyAyOTQuMDcgMTA4LjMxMyAyODguMzA3QzE1NS45MzQgMjUxLjI3MSAyNDEuMjQyIDI1Ni4wOTggMjQyLjE4IDI1Ni4xNkMyNjMuODk1IDI1Ni42NyAyNjQuNzkxIDIyNS41NDUgMjQ0LjIxMSAyMjQuMjMyQzI0MC4xNDkgMjIzLjk5OCAxNDUuOTY3IDIxOC41MTYgODguNjg4IDI2My4wNDlDNjkuMDMzIDI3OC4yOTMgNTEuNTM1IDMwOC4yNjggMzUuMTYgMzU0LjY2QzMwLjcwMyAzNjcuMjQ4IDQyLjg5NyAzNzkuNTU3IDU1LjYyNyAzNzUuMDU5TDcwLjc1MiAzNjkuNjdMMTMuNjYyIDQzNS43NzNDMTEuOTc1IDQzNy43NDIgMTAuNzg3IDQ0MC4xMDIgMTAuMTk0IDQ0Mi42MzFDMy42MzEgNDcxLjEzOSAwLjI1NiA0OTEuNjc4IDAuMjU2IDQ5MS42NzhDLTEuNzM4IDUwMy41MiA4LjM2IDUwOS43OTcgMTUuMDA2IDUxMC4yMzRDMjEuNDQyIDUxMC42NDEgNDQuNzIzIDUxMiA3NC45NzEgNTEyQzEzNS42NTUgNTEyIDIyNC40MyA1MDYuNTggMjYxLjk5MSA0NzcuMzRDMzE5LjM5NSA0MzIuNTg4IDMzNS4xNzQgMzQxLjI1OCAzMzUuNzk5IDMzNy40QzMzOS4yMjMgMzE2LjYzNSAzMDcuNzc4IDMxMS4xMzcgMzA0LjIzOSAzMzIuMTM1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Broom(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M636.5 5.99C630.969 -0.867 620.971 -2.023 614.002 3.49L381.92 189.107L341.549 137.916C341.549 137.9 341.518 137.869 341.487 137.854C329.69 123.014 305.68 124.977 297.051 143.242L273.491 194.492C270.959 199.959 271.741 206.363 275.459 211.08L356.453 313.797C357.596 315.248 363.356 321.588 372.36 319.529L427.075 307.814C446.02 303.928 454.5 281.334 442.387 265.781L401.741 214.242L634 28.482C640.907 22.953 642 12.895 636.5 5.99ZM411.608 278.418L375.422 286.166L306.645 198.959L322.237 165.08L411.608 278.418ZM304.239 332.135C304.114 332.963 289.801 415.094 242.336 452.113C206.838 479.713 93.719 481.4 35.098 479.213C36.473 472.23 38.285 463.516 40.504 453.66L121.717 359.58C136.08 342.934 118.645 318.619 98.344 325.871L78.221 333.041C90.375 306.457 100.907 294.07 108.313 288.307C155.934 251.271 241.242 256.098 242.18 256.16C263.895 256.67 264.791 225.545 244.211 224.232C240.149 223.998 145.967 218.516 88.688 263.049C69.033 278.293 51.535 308.268 35.16 354.66C30.703 367.248 42.897 379.557 55.627 375.059L70.752 369.67L13.662 435.773C11.975 437.742 10.787 440.102 10.194 442.631C3.631 471.139 0.256 491.678 0.256 491.678C-1.738 503.52 8.36 509.797 15.006 510.234C21.442 510.641 44.723 512 74.971 512C135.655 512 224.43 506.58 261.991 477.34C319.395 432.588 335.174 341.258 335.799 337.4C339.223 316.635 307.778 311.137 304.239 332.135Z" />
        </Icon>
    </>
}
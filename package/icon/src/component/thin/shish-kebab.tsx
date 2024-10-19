
import { Icon } from "../../index";

/**
 * A component that renders the `shish-kebab` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shish-kebab?s=thin shish-kebab}
 * @preview ![shish-kebab](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMzIuMiAyNDkuOTc2QzEyNC45OCAyNDIuNjYzIDExNS4zMjMgMjM4LjYzMSAxMDUuMDQxIDIzOC42SDEwNC45MTZDOTQuNjM0IDIzOC42IDg0LjkxNCAyNDIuNjMyIDc3LjYwMSAyNDkuOTQ1TDM1LjM0NyAyOTIuMTk5QzI4LjAwMyAyOTkuNTQzIDIzLjk3MSAzMDkuMjk0IDI0LjAwMiAzMTkuNjM5QzI0LjAzMyAzMjkuOTIxIDI4LjA2NSAzMzkuNTc4IDM1LjM0NyAzNDYuNzY2TDE2NS4yMDMgNDc2LjYyMkMxNzIuNDIyIDQ4My45MzUgMTgyLjA3OSA0ODcuOTY3IDE5Mi4zNjEgNDg3Ljk5OEgxOTIuNDg2QzIwMi43NjkgNDg3Ljk5OCAyMTIuNDg4IDQ4My45NjYgMjE5LjgwMSA0NzYuNjUzTDI2Mi4wMjQgNDM0LjM5OUMyNzcuMTE5IDQxOS4zMzUgMjc3LjExOSAzOTQuNzcxIDI2Mi4wMjQgMzc5LjcwN0wxMzIuMiAyNDkuOTc2Wk0yNTAuNzEgNDIzLjA4NkwyMDguNDg4IDQ2NS4zMzlDMjA0LjIwNiA0NjkuNjIxIDE5OC41MTggNDcxLjk5NiAxOTIuNDg2IDQ3MS45OTZDMTkyLjQ1NSA0NzEuOTk2IDE5Mi40MjQgNDcxLjk5NiAxOTIuNDI0IDQ3MS45OTZDMTg2LjQyMyA0NzEuOTY1IDE4MC43OTggNDY5LjYyMSAxNzYuNTQ3IDQ2NS4zMzlMNDYuNjI5IDMzNS40MjFDNDIuMzc5IDMzMS4yMDIgNDAuMDM1IDMyNS41NzcgNDAuMDA0IDMxOS41NzZDMzkuOTcyIDMxMy41NDQgNDIuMzQ4IDMwNy44MjUgNDYuNjYxIDMwMy41MTJMODguOTE0IDI2MS4yNThDOTMuMTk2IDI1Ni45NzcgOTguODg0IDI1NC42MDEgMTA0LjkxNiAyNTQuNjAxQzEwNC45NDcgMjU0LjYwMSAxMDQuOTc4IDI1NC42MDEgMTA0Ljk3OCAyNTQuNjAxQzExMC45NzkgMjU0LjYwMSAxMTYuNjA0IDI1Ni45NzcgMTIwLjgyNCAyNjEuMjI3TDI1MC43MSAzOTEuMDJDMjU5LjU1NSAzOTkuODY1IDI1OS41NTUgNDE0LjI0MSAyNTAuNzEgNDIzLjA4NlpNMjQwLjM5NyAxNDEuNjg1QzIzMy4xNzggMTM0LjM3MiAyMjMuNDg5IDEzMC4zNCAyMTMuMTc2IDEzMC4zNEMyMTMuMTQ0IDEzMC4zNCAyMTMuMTQ0IDEzMC4zNCAyMTMuMTQ0IDEzMC4zNEMyMDIuOCAxMzAuMzQgMTkzLjA4IDEzNC4zNzIgMTg1Ljg2MSAxNDEuNjg1TDE0My40NTEgMTgzLjk3QzEyOC41NDMgMTk5LjAzNCAxMjguNTQzIDIyMy41MzYgMTQzLjQ4MiAyMzguNjMxTDI3My4zNjkgMzY4LjU0OUMyODAuOTAxIDM3Ni4wMTkgMjkwLjgwOCAzNzkuNzM4IDMwMC42NTMgMzc5LjczOEMzMTAuNTYgMzc5LjczOCAzMjAuNDA0IDM3Ni4wMTkgMzI3LjkwNSAzNjguNTE4TDM3MC4yODQgMzI2LjEzOUMzODUuMzE3IDMxMS4xMDcgMzg1LjMxNyAyODYuNjA0IDM3MC4yODQgMjcxLjU3MkwyNDAuMzk3IDE0MS42ODVaTTM1OC45NyAzMTQuODI2TDMxNi41OTEgMzU3LjIwNUMzMDcuODQxIDM2NS45NTUgMjkzLjQ2NCAzNjUuOTU1IDI4NC42NTEgMzU3LjIwNUwxNTQuODI3IDIyNy4zNDlDMTQ2LjA3NiAyMTguNTA0IDE0Ni4wNzYgMjA0LjA2NiAxNTQuNzk1IDE5NS4yNTJMMTk3LjIwNiAxNTIuOTY3QzIwMS40MjUgMTQ4LjY4NSAyMDcuMDgxIDE0Ni4zNDIgMjEzLjE0NSAxNDYuMzQyQzIxOS4yMDggMTQ2LjM0MiAyMjQuODMzIDE0OC42ODUgMjI5LjA1MiAxNTIuOTY3TDM1OC45NyAyODIuODg1QzM2Ny43ODQgMjkxLjY5OSAzNjcuNzg0IDMwNi4wMTIgMzU4Ljk3IDMxNC44MjZaTTQ4My45MTkgMjguMDgxQzQ0Ni40NzggLTkuMzYgMzg1LjU5OCAtOS4zNiAzNDguMTU3IDI4LjA4MUMzMTIuNjIyIDYzLjYxNSAzMTAuODEgMTIwLjI3NyAzNDIuNzE5IDE1Ny45NjhMMzIyLjM3MyAxNzguMzEzQzMxOS4yNDggMTgxLjQzOSAzMTkuMjQ4IDE4Ni41MDEgMzIyLjM3MyAxODkuNjI3QzMyMy45MzYgMTkxLjE4OSAzMjUuOTY3IDE5MS45NzEgMzI4LjAzIDE5MS45NzFTMzMyLjEyNCAxOTEuMTg5IDMzMy42ODcgMTg5LjYyN0wzNTkuNDcgMTYzLjg0M0MzNjIuNTk2IDE2MC43MTggMzYyLjU5NiAxNTUuNjU1IDM1OS40NyAxNTIuNTNDMzI4LjI4IDEyMS4zMzkgMzI4LjI4IDcwLjU4NSAzNTkuNDcgMzkuMzk0UzQ0MS40MTUgOC4yMDQgNDcyLjYwNiAzOS4zOTRTNTAzLjc5NiAxMjEuMzM5IDQ3Mi42MDYgMTUyLjUzQzQ2OS40OCAxNTUuNjU1IDQ2OS40OCAxNjAuNzE4IDQ3Mi42MDYgMTYzLjg0M1M0ODAuNzk0IDE2Ni45NjggNDgzLjkxOSAxNjMuODQzQzUyMS4zNiAxMjYuNDAyIDUyMS4zNiA2NS41MjIgNDgzLjkxOSAyOC4wODFaTTc0LjM1MSA0MjYuMzM2TDIuMzQ0IDQ5OC4zNDJDLTAuNzgxIDUwMS40NjggLTAuNzgxIDUwNi41MzEgMi4zNDQgNTA5LjY1NkMzLjkwNyA1MTEuMjE5IDUuOTM4IDUxMiA4LjAwMSA1MTJTMTIuMDk1IDUxMS4yMTkgMTMuNjU4IDUwOS42NTZMODUuNjY0IDQzNy42NDlDODguNzg5IDQzNC41MjQgODguNzg5IDQyOS40NjEgODUuNjY0IDQyNi4zMzZTNzcuNDc2IDQyMy4yMTEgNzQuMzUxIDQyNi4zMzZaIi8+PC9zdmc+|width=32|height=32)
 */
const ShishKebab: typeof Icon = x => (
    <Icon {...x}>
        <path d="M132.2 249.976C124.98 242.663 115.323 238.631 105.041 238.6H104.916C94.634 238.6 84.914 242.632 77.601 249.945L35.347 292.199C28.003 299.543 23.971 309.294 24.002 319.639C24.033 329.921 28.065 339.578 35.347 346.766L165.203 476.622C172.422 483.935 182.079 487.967 192.361 487.998H192.486C202.769 487.998 212.488 483.966 219.801 476.653L262.024 434.399C277.119 419.335 277.119 394.771 262.024 379.707L132.2 249.976ZM250.71 423.086L208.488 465.339C204.206 469.621 198.518 471.996 192.486 471.996C192.455 471.996 192.424 471.996 192.424 471.996C186.423 471.965 180.798 469.621 176.547 465.339L46.629 335.421C42.379 331.202 40.035 325.577 40.004 319.576C39.972 313.544 42.348 307.825 46.661 303.512L88.914 261.258C93.196 256.977 98.884 254.601 104.916 254.601C104.947 254.601 104.978 254.601 104.978 254.601C110.979 254.601 116.604 256.977 120.824 261.227L250.71 391.02C259.555 399.865 259.555 414.241 250.71 423.086ZM240.397 141.685C233.178 134.372 223.489 130.34 213.176 130.34C213.144 130.34 213.144 130.34 213.144 130.34C202.8 130.34 193.08 134.372 185.861 141.685L143.451 183.97C128.543 199.034 128.543 223.536 143.482 238.631L273.369 368.549C280.901 376.019 290.808 379.738 300.653 379.738C310.56 379.738 320.404 376.019 327.905 368.518L370.284 326.139C385.317 311.107 385.317 286.604 370.284 271.572L240.397 141.685ZM358.97 314.826L316.591 357.205C307.841 365.955 293.464 365.955 284.651 357.205L154.827 227.349C146.076 218.504 146.076 204.066 154.795 195.252L197.206 152.967C201.425 148.685 207.081 146.342 213.145 146.342C219.208 146.342 224.833 148.685 229.052 152.967L358.97 282.885C367.784 291.699 367.784 306.012 358.97 314.826ZM483.919 28.081C446.478 -9.36 385.598 -9.36 348.157 28.081C312.622 63.615 310.81 120.277 342.719 157.968L322.373 178.313C319.248 181.439 319.248 186.501 322.373 189.627C323.936 191.189 325.967 191.971 328.03 191.971S332.124 191.189 333.687 189.627L359.47 163.843C362.596 160.718 362.596 155.655 359.47 152.53C328.28 121.339 328.28 70.585 359.47 39.394S441.415 8.204 472.606 39.394S503.796 121.339 472.606 152.53C469.48 155.655 469.48 160.718 472.606 163.843S480.794 166.968 483.919 163.843C521.36 126.402 521.36 65.522 483.919 28.081ZM74.351 426.336L2.344 498.342C-0.781 501.468 -0.781 506.531 2.344 509.656C3.907 511.219 5.938 512 8.001 512S12.095 511.219 13.658 509.656L85.664 437.649C88.789 434.524 88.789 429.461 85.664 426.336S77.476 423.211 74.351 426.336Z" />
    </Icon>
);

export default ShishKebab;
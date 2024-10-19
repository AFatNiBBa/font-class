
import { Icon } from "../../index";

/**
 * A component that renders the `bomb` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bomb?s=regular bomb}
 * @preview ![bomb](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zOTAuNDc3IDE0NC4xNDhMNDAzLjMxMiAxMzEuMzEzQzQwOS41NjIgMTI1LjA2MyA0MDkuNTYyIDExNC45MzggNDAzLjMxMiAxMDguNjg4QzQwMC4xODggMTA1LjU2MiAzOTYuMDk0IDEwNCAzOTIgMTA0UzM4My44MTIgMTA1LjU2MiAzODAuNjg4IDEwOC42ODhMMzY3Ljg1MiAxMjEuNTIzTDMzMi42NDYgODYuMzJDMzI4LjQzMiA4Mi4xMDUgMzIyLjkxIDc5Ljk5OCAzMTcuMzg3IDc5Ljk5OFMzMDYuMzQyIDgyLjEwNSAzMDIuMTI3IDg2LjMyTDI3OS41NDcgMTA4LjlDMjU3LjIwNyAxMDAuNzAzIDIzMy4xODIgOTYgMjA4IDk2QzkzLjEyNSA5NiAwIDE4OS4xMjUgMCAzMDRTOTMuMTI1IDUxMiAyMDggNTEyUzQxNiA0MTguODc1IDQxNiAzMDRDNDE2IDI3OC44MTggNDExLjI5NyAyNTQuNzkxIDQwMy4xIDIzMi40NTFMNDI1LjY4IDIwOS44NzNDNDM0LjEwNyAyMDEuNDQ1IDQzNC4xMDcgMTg3Ljc4MSA0MjUuNjggMTc5LjM1MkwzOTAuNDc3IDE0NC4xNDhaTTM2OS4xNiAxOTguNTA4TDM0Ny40NzMgMjIwLjE5M0wzNTguMDM3IDI0OC45ODZDMzY0LjY0OCAyNjcuMDAyIDM2OCAyODUuNTEgMzY4IDMwNEMzNjggMzkyLjIyNSAyOTYuMjI1IDQ2NCAyMDggNDY0UzQ4IDM5Mi4yMjUgNDggMzA0UzExOS43NzUgMTQ0IDIwOCAxNDRDMjI2LjQ4OCAxNDQgMjQ0Ljk5NiAxNDcuMzUyIDI2My4wMTIgMTUzLjk2M0wyOTEuODAzIDE2NC41MjdMMzEzLjQ4OCAxNDIuODQyTDMxNy4zODcgMTM4Ljk0MUwzMjkuMTg0IDE1MC43MzZMMzU2LjUzNSAxNzguMDlMMzczLjA1NyAxOTQuNjExTDM2OS4xNiAxOTguNTA4Wk0yMjQgMTc2QzE0NC41OTQgMTc2IDgwIDI0MC41OTQgODAgMzIwQzgwIDMyOC44NDQgODcuMTU2IDMzNiA5NiAzMzZTMTEyIDMyOC44NDQgMTEyIDMyMEMxMTIgMjU4LjI1IDE2Mi4yNSAyMDggMjI0IDIwOEMyMzIuODQ0IDIwOCAyNDAgMjAwLjg0NCAyNDAgMTkyUzIzMi44NDQgMTc2IDIyNCAxNzZaTTUwOS4xMDkgNTkuMjI3TDQ2OS4zNTIgNDIuNjVMNDUyLjc3MyAyLjlDNDUwLjgxOCAtMS4wMzEgNDQ1LjExMyAtMC45MDIgNDQzLjIyNSAyLjlMNDI2LjY0NSA0Mi42NUwzODYuODg5IDU5LjIyN0MzODIuOTczIDYxLjE4NiAzODMuMTA0IDY2Ljg4MSAzODYuODg5IDY4Ljc3NUw0MjYuNjQ1IDg1LjM1Mkw0NDMuMjI1IDEyNS4xQzQ0NS4xIDEyOC44NzMgNDUwLjgwNSAxMjkuMDU5IDQ1Mi43NzMgMTI1LjFMNDY5LjM1MiA4NS4zNTJMNTA5LjEwOSA2OC43NzVDNTEyLjg4NyA2Ni44ODcgNTEzLjA0MSA2MS4xOTEgNTA5LjEwOSA1OS4yMjdaIi8+PC9zdmc+|width=32|height=32)
 */
const Bomb: typeof Icon = x => (
    <Icon {...x}>
        <path d="M390.477 144.148L403.312 131.313C409.562 125.063 409.562 114.938 403.312 108.688C400.188 105.562 396.094 104 392 104S383.812 105.562 380.688 108.688L367.852 121.523L332.646 86.32C328.432 82.105 322.91 79.998 317.387 79.998S306.342 82.105 302.127 86.32L279.547 108.9C257.207 100.703 233.182 96 208 96C93.125 96 0 189.125 0 304S93.125 512 208 512S416 418.875 416 304C416 278.818 411.297 254.791 403.1 232.451L425.68 209.873C434.107 201.445 434.107 187.781 425.68 179.352L390.477 144.148ZM369.16 198.508L347.473 220.193L358.037 248.986C364.648 267.002 368 285.51 368 304C368 392.225 296.225 464 208 464S48 392.225 48 304S119.775 144 208 144C226.488 144 244.996 147.352 263.012 153.963L291.803 164.527L313.488 142.842L317.387 138.941L329.184 150.736L356.535 178.09L373.057 194.611L369.16 198.508ZM224 176C144.594 176 80 240.594 80 320C80 328.844 87.156 336 96 336S112 328.844 112 320C112 258.25 162.25 208 224 208C232.844 208 240 200.844 240 192S232.844 176 224 176ZM509.109 59.227L469.352 42.65L452.773 2.9C450.818 -1.031 445.113 -0.902 443.225 2.9L426.645 42.65L386.889 59.227C382.973 61.186 383.104 66.881 386.889 68.775L426.645 85.352L443.225 125.1C445.1 128.873 450.805 129.059 452.773 125.1L469.352 85.352L509.109 68.775C512.887 66.887 513.041 61.191 509.109 59.227Z" />
    </Icon>
);

export default Bomb;
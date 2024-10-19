
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `book-journal-whills` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/book-journal-whills?s=solid book-journal-whills}
 * @preview ![book-journal-whills](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzYwVjI0QzQ0OCAxMC43NDIgNDM3LjI1NCAwIDQyNCAwSDk2QzQyLjk4IDAgMCA0Mi45OCAwIDk2VjQxNkMwIDQ2OS4wMiA0Mi45OCA1MTIgOTYgNTEySDQyNEM0MzcuMjU0IDUxMiA0NDggNTAxLjI1NCA0NDggNDg4VjQ3MkM0NDggNDYxLjU4MiA0NDEuMjc1IDQ1Mi45MzggNDMyIDQ0OS42MTdWMzgyLjM4M0M0NDEuMjc1IDM3OS4wNjIgNDQ4IDM3MC40MTQgNDQ4IDM2MFpNMTMzLjEyNSAxNjAuMzc1TDE1NC4zNzUgMTgxLjYyNUMxNTcuNSAxODQuNzUgMTYyLjUgMTg0Ljc1IDE2NS42MjUgMTgxLjYyNVMxNjguNzUgMTczLjUgMTY1LjYyNSAxNzAuMzc1TDEzOS4yNSAxNDMuODc1QzE0OS4yNSAxMjMuMTI1IDE2NS41IDEwNS44NzUgMTg1LjYyNSA5NC42MjVDMTY4LjYyNSAxMjEuNzUgMTc0LjYyNSAxNTcuMzc1IDE5OS42MjUgMTc3LjI1QzE4NS41IDE5MiAxODAuNSAyMTMuMTI1IDE4Ni41IDIzMi41QzE5Mi4zNzUgMjUxLjg3NSAyMDguNSAyNjYuNjI1IDIyOC4zNzUgMjcwLjc1TDIyOS43NSAyMzhMMjE5LjM3NSAyNDUuMTI1QzIxOC43NSAyNDUuNSAyMTcuODc1IDI0NS43NSAyMTcuMTI1IDI0NS43NUMyMTYuMTI1IDI0NS43NSAyMTUuMTI1IDI0NS4zNzUgMjE0LjM3NSAyNDQuNzVDMjEzLjYyNSAyNDMuODc1IDIxMy4xMjUgMjQyLjg3NSAyMTMuMTI1IDI0MS43NUMyMTMuMTI1IDI0MS4xMjUgMjEzLjM3NSAyNDAuMzc1IDIxMy42MjUgMjM5Ljc1TDIyMi4yNSAyMjUuNUwyMDQuMjUgMjIxLjc1QzIwMi41IDIyMS4zNzUgMjAxLjEyNSAyMTkuNjI1IDIwMS4xMjUgMjE3Ljc1UzIwMi41IDIxNC4yNSAyMDQuMjUgMjEzLjg3NUwyMjIuMjUgMjEwLjEyNUwyMTMuNjI1IDE5NS44NzVDMjEyLjc1IDE5NC4yNSAyMTMgMTkyLjEyNSAyMTQuMzc1IDE5MC44NzVTMjE3Ljg3NSAxODkuMzc1IDIxOS4zNzUgMTkwLjVMMjMxLjM3NSAxOTguNjI1TDIzNiA4Ny44NzVDMjM2LjEyNSA4NS42MjUgMjM3Ljg3NSA4NCAyNDAgODRTMjQzLjg3NSA4NS42MjUgMjQ0IDg3Ljg3NUwyNDguNzUgMjAwLjEyNUwyNjIuODc1IDE5MC41QzI2My41IDE5MCAyNjQuMzc1IDE4OS44NzUgMjY1LjEyNSAxODkuNzVDMjY2LjYyNSAxODkuNzUgMjY3Ljg3NSAxOTAuNSAyNjguNjI1IDE5MS43NVMyNjkuMjUgMTk0LjYyNSAyNjguNSAxOTUuODc1TDI2MCAyMTAuMTI1TDI3Ny45OTkgMjEzLjg3NUMyNzkuNzUgMjE0LjI1IDI4MS4xMjUgMjE1Ljg3NSAyODEuMTI1IDIxNy43NVMyNzkuNzUgMjIxLjM3NSAyNzcuOTk5IDIyMS43NUwyNjAgMjI1LjM3NUwyNjguNSAyMzkuNzVDMjY5LjI1IDI0MSAyNjkuMzc1IDI0Mi41IDI2OC42MjUgMjQzLjc1UzI2Ni42MjUgMjQ1Ljc1IDI2NS4xMjUgMjQ1Ljc1QzI2NC4zNzUgMjQ1Ljc1IDI2My41IDI0NS41IDI2Mi44NzUgMjQ1LjEyNUwyNTAuMjUgMjM2LjVMMjUxLjYyNSAyNzAuNzVDMjcxLjUgMjY2LjYyNSAyODcuNjI1IDI1MS44NzUgMjkzLjUgMjMyLjVDMjk5LjUgMjEzLjEyNSAyOTQuNSAxOTEuODc1IDI4MC4zNzUgMTc3LjI1QzMwNS4zNzUgMTU3LjM3NSAzMTEuMzc1IDEyMS43NSAyOTQuMzc1IDk0LjYyNUMzMTQuNjI1IDEwNS44NzUgMzMwLjc1IDEyMy4xMjUgMzQwLjc1IDE0My44NzVMMzE0LjM3NSAxNzAuMzc1QzMxMS4yNSAxNzMuNSAzMTEuMjUgMTc4LjUgMzE0LjM3NSAxODEuNjI1UzMyMi41IDE4NC43NSAzMjUuNjI1IDE4MS42MjVMMzQ2Ljg3NSAxNjAuMzc1QzM0OS44NzUgMTcwLjUgMzUyIDE4MSAzNTIgMTkyQzM1MiAxOTIuNSAzNTEuODc1IDE5MyAzNTEuODc1IDE5My41TDMxNC43NSAyMjZDMzEzLjEyNSAyMjcuNjI1IDMxMi4xMjUgMjI5Ljc1IDMxMiAyMzJDMzEyLjEyNSAyMzMuODc1IDMxMi43NSAyMzUuNzUgMzEzLjk5OSAyMzcuMjVDMzE1LjYyNSAyMzguODc1IDMxNy43NSAyMzkuODc1IDMyMCAyNDBDMzIxLjk5OSAyNDAgMzIzLjg3NSAyMzkuMjUgMzI1LjI1IDIzOEwzNDguODc1IDIxNy4zNzVDMzM3LjI1IDI2NyAyOTMuMTI1IDMwNCAyNDAgMzA0UzE0Mi43NSAyNjcgMTMxLjEyNSAyMTcuMzc1TDE1NC43NSAyMzhDMTU2LjI1IDIzOS4yNSAxNTguMTI1IDIzOS44NzUgMTYwIDI0MEMxNjMuMzc1IDI0MCAxNjYuMjUgMjM3Ljg3NSAxNjcuNSAyMzQuODc1QzE2OC42MjUgMjMxLjc1IDE2Ny43NSAyMjguMTI1IDE2NS4yNSAyMjZMMTI4LjEyNSAxOTMuNUMxMjguMTI1IDE5MyAxMjggMTkyLjUgMTI4IDE5MkMxMjggMTgxIDEzMC4xMjUgMTcwLjUgMTMzLjEyNSAxNjAuMzc1Wk0zODQgNDQ4SDk2Qzc4LjMyNiA0NDggNjQgNDMzLjY3MiA2NCA0MTZTNzguMzI2IDM4NCA5NiAzODRIMzg0VjQ0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BookJournalWhills(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448 360V24C448 10.742 437.254 0 424 0H96C42.98 0 0 42.98 0 96V416C0 469.02 42.98 512 96 512H424C437.254 512 448 501.254 448 488V472C448 461.582 441.275 452.938 432 449.617V382.383C441.275 379.062 448 370.414 448 360ZM133.125 160.375L154.375 181.625C157.5 184.75 162.5 184.75 165.625 181.625S168.75 173.5 165.625 170.375L139.25 143.875C149.25 123.125 165.5 105.875 185.625 94.625C168.625 121.75 174.625 157.375 199.625 177.25C185.5 192 180.5 213.125 186.5 232.5C192.375 251.875 208.5 266.625 228.375 270.75L229.75 238L219.375 245.125C218.75 245.5 217.875 245.75 217.125 245.75C216.125 245.75 215.125 245.375 214.375 244.75C213.625 243.875 213.125 242.875 213.125 241.75C213.125 241.125 213.375 240.375 213.625 239.75L222.25 225.5L204.25 221.75C202.5 221.375 201.125 219.625 201.125 217.75S202.5 214.25 204.25 213.875L222.25 210.125L213.625 195.875C212.75 194.25 213 192.125 214.375 190.875S217.875 189.375 219.375 190.5L231.375 198.625L236 87.875C236.125 85.625 237.875 84 240 84S243.875 85.625 244 87.875L248.75 200.125L262.875 190.5C263.5 190 264.375 189.875 265.125 189.75C266.625 189.75 267.875 190.5 268.625 191.75S269.25 194.625 268.5 195.875L260 210.125L277.999 213.875C279.75 214.25 281.125 215.875 281.125 217.75S279.75 221.375 277.999 221.75L260 225.375L268.5 239.75C269.25 241 269.375 242.5 268.625 243.75S266.625 245.75 265.125 245.75C264.375 245.75 263.5 245.5 262.875 245.125L250.25 236.5L251.625 270.75C271.5 266.625 287.625 251.875 293.5 232.5C299.5 213.125 294.5 191.875 280.375 177.25C305.375 157.375 311.375 121.75 294.375 94.625C314.625 105.875 330.75 123.125 340.75 143.875L314.375 170.375C311.25 173.5 311.25 178.5 314.375 181.625S322.5 184.75 325.625 181.625L346.875 160.375C349.875 170.5 352 181 352 192C352 192.5 351.875 193 351.875 193.5L314.75 226C313.125 227.625 312.125 229.75 312 232C312.125 233.875 312.75 235.75 313.999 237.25C315.625 238.875 317.75 239.875 320 240C321.999 240 323.875 239.25 325.25 238L348.875 217.375C337.25 267 293.125 304 240 304S142.75 267 131.125 217.375L154.75 238C156.25 239.25 158.125 239.875 160 240C163.375 240 166.25 237.875 167.5 234.875C168.625 231.75 167.75 228.125 165.25 226L128.125 193.5C128.125 193 128 192.5 128 192C128 181 130.125 170.5 133.125 160.375ZM384 448H96C78.326 448 64 433.672 64 416S78.326 384 96 384H384V448Z" />
        </Icon>
    </>
}
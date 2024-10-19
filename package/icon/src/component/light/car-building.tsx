
import { Icon } from "../../index";

/**
 * A component that renders the `car-building` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/car-building?s=light car-building}
 * @preview ![car-building](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjAgODhIMTA0Qzk1LjE2NCA4OCA4OCA5NS4xNjIgODggMTA0VjEyMEM4OCAxMjguODM2IDk1LjE2NCAxMzYgMTA0IDEzNkgxMjBDMTI4LjgzNiAxMzYgMTM2IDEyOC44MzYgMTM2IDEyMFYxMDRDMTM2IDk1LjE2MiAxMjguODM2IDg4IDEyMCA4OFpNMzIwIDQ4VjExMkMzMjAgMTIwLjgzNiAzMjcuMTY0IDEyOCAzMzYgMTI4UzM1MiAxMjAuODM2IDM1MiAxMTJWNDhDMzUyIDIxLjQ5IDMzMC41MSAwIDMwNCAwSDQ4QzIxLjQ5IDAgMCAyMS40OSAwIDQ4VjQ2NEMwIDQ3Mi43OTkgNy4xOTkgNDgwIDE2IDQ4MFMzMiA0NzIuNzk5IDMyIDQ2NFY0OEMzMiAzOS4xNjIgMzkuMTY0IDMyIDQ4IDMySDMwNEMzMTIuODM2IDMyIDMyMCAzOS4xNjIgMzIwIDQ4Wk0xMjAgMjE2SDEwNEM5NS4xNjQgMjE2IDg4IDIyMy4xNjIgODggMjMyVjI0OEM4OCAyNTYuODM2IDk1LjE2NCAyNjQgMTA0IDI2NEgxMjBDMTI4LjgzNiAyNjQgMTM2IDI1Ni44MzYgMTM2IDI0OFYyMzJDMTM2IDIyMy4xNjIgMTI4LjgzNiAyMTYgMTIwIDIxNlpNMTIwIDM0NEgxMDRDOTUuMTY0IDM0NCA4OCAzNTEuMTYyIDg4IDM2MFYzNzZDODggMzg0LjgzNiA5NS4xNjQgMzkyIDEwNCAzOTJIMTIwQzEyOC44MzYgMzkyIDEzNiAzODQuODM2IDEzNiAzNzZWMzYwQzEzNiAzNTEuMTYyIDEyOC44MzYgMzQ0IDEyMCAzNDRaTTU0NCAzNTJDNTMwLjgwMSAzNTIgNTIwIDM2Mi43OTkgNTIwIDM3NkM1MjAgMzg5LjE5OSA1MzAuODAxIDQwMCA1NDQgNDAwUzU2OCAzODkuMTk5IDU2OCAzNzZDNTY4IDM2Mi43OTkgNTU3LjE5OSAzNTIgNTQ0IDM1MlpNMjQ4IDEzNkMyNTYuODM2IDEzNiAyNjQgMTI4LjgzNiAyNjQgMTIwVjEwNEMyNjQgOTUuMTYyIDI1Ni44MzYgODggMjQ4IDg4SDIzMkMyMjMuMTY0IDg4IDIxNiA5NS4xNjIgMjE2IDEwNFYxMjBDMjE2IDEyOC44MzYgMjIzLjE2NCAxMzYgMjMyIDEzNkgyNDhaTTU5NS4zNzUgMjk0LjVMNTc5LjUgMjI1LjYyNUM1NzIuODc1IDE5Ni41IDU0NyAxNzUuODc1IDUxNy4xMjUgMTc2SDM0NC4xMjVDMzE0LjI1IDE3NS44NzUgMjg4LjI1IDE5Ni41IDI4MS43NSAyMjUuNjI1TDI2NS4zNzUgMjk2LjEyNUMyNDEgMzA4LjUgMjI0IDMzMy41IDIyNCAzNjIuNjI1VjQxNy43NUMyMjQuMTI1IDQzNy43NSAyMzcgNDU1LjM3NSAyNTYgNDYxLjVWNDk2QzI1NiA1MDQuODc1IDI2My4xMjUgNTEyIDI3MiA1MTJTMjg4IDUwNC44NzUgMjg4IDQ5NlY0NjRINTc2VjQ5NkM1NzYgNTA0Ljg3NSA1ODMuMTI1IDUxMiA1OTIgNTEyUzYwOCA1MDQuODc1IDYwOCA0OTZWNDYxLjVDNjI3IDQ1NS4zNzUgNjM5Ljg3NSA0MzcuNzUgNjQwIDQxNy43NVYzNjIuNjI1QzY0MCAzMzMuMTI1IDYyMi41IDMwNi4zNzUgNTk1LjM3NSAyOTQuNVpNMzEyLjg3NSAyMzIuNzVDMzE2LjI1IDIxOC4yNSAzMjkuMTI1IDIwOCAzNDQuMTI1IDIwOEg1MTcuMTI1QzUzMiAyMDggNTQ1IDIxOC4yNSA1NDguMzc1IDIzMi43NUw1NjEuMTI1IDI4OEgzMDAuMTI1TDMxMi44NzUgMjMyLjc1Wk02MDggNDE3Ljc1QzYwOCA0MjUuNjI1IDYwMS42MjUgNDMyIDU5My43NSA0MzJIMjcwLjI1QzI2Mi4zNzUgNDMyIDI1NiA0MjUuNjI1IDI1NiA0MTcuNzVWMzYyLjYyNUMyNTYgMzM5LjEyNSAyNzUuMTI1IDMyMCAyOTguNjI1IDMyMEg1NjUuMzc1QzU4OC44NzUgMzIwIDYwOCAzMzkuMTI1IDYwOCAzNjIuNjI1VjQxNy43NVpNMzIwIDM1MkMzMDYuODAxIDM1MiAyOTYgMzYyLjc5OSAyOTYgMzc2QzI5NiAzODkuMTk5IDMwNi44MDEgNDAwIDMyMCA0MDBTMzQ0IDM4OS4xOTkgMzQ0IDM3NkMzNDQgMzYyLjc5OSAzMzMuMTk5IDM1MiAzMjAgMzUyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CarBuilding: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M120 88H104C95.164 88 88 95.162 88 104V120C88 128.836 95.164 136 104 136H120C128.836 136 136 128.836 136 120V104C136 95.162 128.836 88 120 88ZM320 48V112C320 120.836 327.164 128 336 128S352 120.836 352 112V48C352 21.49 330.51 0 304 0H48C21.49 0 0 21.49 0 48V464C0 472.799 7.199 480 16 480S32 472.799 32 464V48C32 39.162 39.164 32 48 32H304C312.836 32 320 39.162 320 48ZM120 216H104C95.164 216 88 223.162 88 232V248C88 256.836 95.164 264 104 264H120C128.836 264 136 256.836 136 248V232C136 223.162 128.836 216 120 216ZM120 344H104C95.164 344 88 351.162 88 360V376C88 384.836 95.164 392 104 392H120C128.836 392 136 384.836 136 376V360C136 351.162 128.836 344 120 344ZM544 352C530.801 352 520 362.799 520 376C520 389.199 530.801 400 544 400S568 389.199 568 376C568 362.799 557.199 352 544 352ZM248 136C256.836 136 264 128.836 264 120V104C264 95.162 256.836 88 248 88H232C223.164 88 216 95.162 216 104V120C216 128.836 223.164 136 232 136H248ZM595.375 294.5L579.5 225.625C572.875 196.5 547 175.875 517.125 176H344.125C314.25 175.875 288.25 196.5 281.75 225.625L265.375 296.125C241 308.5 224 333.5 224 362.625V417.75C224.125 437.75 237 455.375 256 461.5V496C256 504.875 263.125 512 272 512S288 504.875 288 496V464H576V496C576 504.875 583.125 512 592 512S608 504.875 608 496V461.5C627 455.375 639.875 437.75 640 417.75V362.625C640 333.125 622.5 306.375 595.375 294.5ZM312.875 232.75C316.25 218.25 329.125 208 344.125 208H517.125C532 208 545 218.25 548.375 232.75L561.125 288H300.125L312.875 232.75ZM608 417.75C608 425.625 601.625 432 593.75 432H270.25C262.375 432 256 425.625 256 417.75V362.625C256 339.125 275.125 320 298.625 320H565.375C588.875 320 608 339.125 608 362.625V417.75ZM320 352C306.801 352 296 362.799 296 376C296 389.199 306.801 400 320 400S344 389.199 344 376C344 362.799 333.199 352 320 352Z" />
    </Icon>
);

export default CarBuilding;

import { Icon } from "../../index";

/**
 * A component that renders the `hand-fist` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-fist?s=light hand-fist}
 * @preview ![hand-fist](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjAgNjRDMzUwLjIxNSA2NCAzNDEuMTQ2IDY2Ljc0NiAzMzMuMTMzIDcxLjE3NkMzMjUuOTM5IDQ4LjU0OSAzMDQuOTc5IDMyIDI4MCAzMkMyNzAuMjE1IDMyIDI2MS4xNDYgMzQuNzQ2IDI1My4xMzMgMzkuMTc2QzI0NS45MzkgMTYuNTQ5IDIyNC45NzkgMCAyMDAgMEMxNzUuMDIzIDAgMTU0LjA2MiAxNi41NDcgMTQ2Ljg2NyAzOS4xNzRDMTM4Ljg1NCAzNC43NDQgMTI5Ljc4NSAzMiAxMjAgMzJDODkuMTIzIDMyIDY0IDU3LjEyMSA2NCA4OFYxOTIuNDAyQzQ0LjY4NiAyMDcuMDIgMzIgMjI5Ljk2NyAzMiAyNTZWMzIwLjQyMkMzMiAzNDUuMjUgNDMuMjUgMzY4LjIzNCA2Mi44NzUgMzgzLjUxNkw5NiA0MDkuMjVWNDk2Qzk2IDUwNC44NDQgMTAzLjE1NiA1MTIgMTEyIDUxMlMxMjggNTA0Ljg0NCAxMjggNDk2VjQwMC43MTlDMTI4IDM5MC41ODIgMTE5LjY2NCAzODYuNTM0IDExNi4xNTYgMzg0LjM5MUw4Mi41IDM1OC4yNUM3MC43NSAzNDkuMDk0IDY0IDMzNS4zMTIgNjQgMzIwLjQyMlYyNTZDNjQgMjI5LjUzMSA4NS41MzEgMjA4IDExMiAyMDhIMTkyQzIwOS42NTYgMjA4IDIyNCAyMjIuMzU5IDIyNCAyNDBTMjA5LjY1NiAyNzIgMTkyIDI3MkgxNDRDMTM1LjE1NiAyNzIgMTI4IDI3OS4xNTYgMTI4IDI4OFMxMzUuMTU2IDMwNCAxNDQgMzA0SDE5MkMyMjMuOTIyIDMwNCAyNTAuMjQyIDI4MC40MzIgMjU1LjAwOCAyNDkuODE0QzI2Mi41NTkgMjUzLjY0MSAyNzAuOTY3IDI1NiAyODAgMjU2QzI5NS42NzggMjU2IDMwOS44MjggMjQ5LjQ4NiAzMjAuMDAyIDIzOS4wN0MzMzAuMTc2IDI0OS40ODYgMzQ0LjMyNCAyNTYgMzYwIDI1NkMzNjguNjIxIDI1NiAzNzYuNjk3IDI1My44NzkgMzg0IDI1MC4zODVWMjg4QzM4NCAzMjkuMjM0IDM2Mi44NzUgMzY3LjEyNSAzMjcuNSAzODkuMzU5QzMyMi44MTIgMzkyLjI4MSAzMjAgMzk3LjQwNiAzMjAgNDAyLjkwNlY0OTZDMzIwIDUwNC44NDQgMzI3LjE1NiA1MTIgMzM2IDUxMlMzNTIgNTA0Ljg0NCAzNTIgNDk2VjQxMS40MzhDMzkyLjI1IDM4Mi44MjggNDE2IDMzNy4zMTIgNDE2IDI4OFYxMjBDNDE2IDg5LjEyMSAzOTAuODc5IDY0IDM2MCA2NFpNOTYgMTc3LjYxOVY4OEM5NiA3NC43NDYgMTA2Ljc0NiA2NCAxMjAgNjRDMTMzLjI1NiA2NCAxNDQgNzQuNzQ2IDE0NCA4OFYxNzZIMTEyQzEwNi41MiAxNzYgMTAxLjE3MiAxNzYuNTY0IDk2IDE3Ny42MTlaTTE5MiAxNzZIMTc2VjU2QzE3NiA0Mi43NDYgMTg2Ljc0NiAzMiAyMDAgMzJDMjEzLjI1NiAzMiAyMjQgNDIuNzQ2IDIyNCA1NlYxODQuOTA0QzIxNC41NDcgMTc5LjM5MSAyMDMuNzA3IDE3NiAxOTIgMTc2Wk0zMDQgMjAwQzMwNCAyMTMuMjU0IDI5My4yNTYgMjI0IDI4MCAyMjRDMjY2Ljc0NiAyMjQgMjU2IDIxMy4yNTQgMjU2IDIwMFY4OEMyNTYgNzQuNzQ2IDI2Ni43NDYgNjQgMjgwIDY0QzI5My4yNTYgNjQgMzA0IDc0Ljc0NiAzMDQgODhWMjAwWk0zNjAgMjI0QzM0Ni43NDYgMjI0IDMzNiAyMTMuMjU0IDMzNiAyMDBWMTIwQzMzNiAxMDYuNzQ2IDM0Ni43NDYgOTYgMzYwIDk2QzM3My4yNTYgOTYgMzg0IDEwNi43NDYgMzg0IDEyMFYyMDBDMzg0IDIxMy4yNTQgMzczLjI1NiAyMjQgMzYwIDIyNFoiLz48L3N2Zz4=|width=32|height=32)
 */
const HandFist: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M360 64C350.215 64 341.146 66.746 333.133 71.176C325.939 48.549 304.979 32 280 32C270.215 32 261.146 34.746 253.133 39.176C245.939 16.549 224.979 0 200 0C175.023 0 154.062 16.547 146.867 39.174C138.854 34.744 129.785 32 120 32C89.123 32 64 57.121 64 88V192.402C44.686 207.02 32 229.967 32 256V320.422C32 345.25 43.25 368.234 62.875 383.516L96 409.25V496C96 504.844 103.156 512 112 512S128 504.844 128 496V400.719C128 390.582 119.664 386.534 116.156 384.391L82.5 358.25C70.75 349.094 64 335.312 64 320.422V256C64 229.531 85.531 208 112 208H192C209.656 208 224 222.359 224 240S209.656 272 192 272H144C135.156 272 128 279.156 128 288S135.156 304 144 304H192C223.922 304 250.242 280.432 255.008 249.814C262.559 253.641 270.967 256 280 256C295.678 256 309.828 249.486 320.002 239.07C330.176 249.486 344.324 256 360 256C368.621 256 376.697 253.879 384 250.385V288C384 329.234 362.875 367.125 327.5 389.359C322.812 392.281 320 397.406 320 402.906V496C320 504.844 327.156 512 336 512S352 504.844 352 496V411.438C392.25 382.828 416 337.312 416 288V120C416 89.121 390.879 64 360 64ZM96 177.619V88C96 74.746 106.746 64 120 64C133.256 64 144 74.746 144 88V176H112C106.52 176 101.172 176.564 96 177.619ZM192 176H176V56C176 42.746 186.746 32 200 32C213.256 32 224 42.746 224 56V184.904C214.547 179.391 203.707 176 192 176ZM304 200C304 213.254 293.256 224 280 224C266.746 224 256 213.254 256 200V88C256 74.746 266.746 64 280 64C293.256 64 304 74.746 304 88V200ZM360 224C346.746 224 336 213.254 336 200V120C336 106.746 346.746 96 360 96C373.256 96 384 106.746 384 120V200C384 213.254 373.256 224 360 224Z" />
    </Icon>
);

export default HandFist;
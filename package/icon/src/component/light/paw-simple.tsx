
import { Icon } from "../../index";

/**
 * A component that renders the `paw-simple` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/paw-simple?s=light paw-simple}
 * @preview ![paw-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjcuMjUgMzAwLjc1QzM0MSAyODYuMDAxIDMyMC4xMjUgMjM5LjM3NSAzMDAuMTI1IDIwM0MyODQuMzc1IDE3NC4yNSAyNTQuMjUgMTYwIDIyNCAxNjBTMTYzLjYyNSAxNzQuMjUgMTQ3Ljg3NSAyMDNDMTI3LjUgMjM5Ljg3NSAxMDcuNzUgMjg1LjUgODAuNjI1IDMwMC43NUM1MS42MjUgMzE3LjEyNSAzMiAzNDguMTI1IDMyIDM4NEMzMiA0MzcgNzUgNDc5Ljg3NSAxMjggNDc5Ljg3NUMxMjkuMjUgNDgwIDEzMC42MjUgNDgwIDEzMS44NzUgNDgwQzE4MC43NSA0ODAgMjAwLjc1IDQ0OCAyMjQgNDQ4UzI2Ny4yNSA0ODAgMzE2LjEyNSA0ODBDMzE3LjM3NSA0ODAgMzE4Ljc1IDQ4MCAzMjAgNDc5Ljg3NUMzNzMgNDc5Ljg3NSA0MTYgNDM3IDQxNiAzODRDNDE2IDM0OC4xMjUgMzk2LjM3NSAzMTcuMTI1IDM2Ny4yNSAzMDAuNzVaTTMxOC44NzUgNDQ4SDMxNi4xMjVDMjk2IDQ0OCAyODMuMTI1IDQ0MC4yNSAyNjkuMzc1IDQzMi4xMjVDMjU2Ljc1IDQyNC41IDI0Mi4yNSA0MTYgMjI0IDQxNlMxOTEuMzc1IDQyNC41IDE3OC42MjUgNDMyLjEyNUMxNjQuODc1IDQ0MC4yNSAxNTIgNDQ4IDEzMS44NzUgNDQ4TDEyOCA0NDcuODc1QzkyLjc1IDQ0Ny44NzUgNjQgNDE5LjI1IDY0IDM4NEM2NCAzNjEuMTI1IDc2LjM3NSAzMzkuODc1IDk2LjM3NSAzMjguNjI1QzEyNi44NzUgMzExLjUgMTQ2LjUgMjc0LjEyNSAxNjUuMzc1IDIzOC4xMjVDMTY4Ljg3NSAyMzEuMzc1IDE3Mi4zNzUgMjI0Ljc1IDE3NS44NzUgMjE4LjM3NUMxODUgMjAxLjg3NSAyMDMgMTkyIDIyNCAxOTJTMjYzIDIwMS44NzUgMjcyLjEyNSAyMTguMzc1QzI3NS4zNzUgMjI0LjM3NSAyNzguNzUgMjMwLjYyNSAyODIuMTI1IDIzNy4xMjVDMzAxLjUgMjczLjc1IDMyMS42MjUgMzExLjc1IDM1MS42MjUgMzI4LjYyNUMzNzEuNjI1IDMzOS44NzUgMzg0IDM2MS4xMjUgMzg0IDM4NEMzODQgNDE5LjI1IDM1NS4yNSA0NDcuODc1IDMxOC44NzUgNDQ4Wk0xMTIgMjAwQzExMiAxNjkuMTI1IDg2Ljg3NSAxNDQgNTYgMTQ0UzAgMTY5LjEyNSAwIDIwMFMyNS4xMjUgMjU2IDU2IDI1NlMxMTIgMjMwLjg3NSAxMTIgMjAwWk0zMiAyMDBDMzIgMTg2Ljc1IDQyLjc1IDE3NiA1NiAxNzZTODAgMTg2Ljc1IDgwIDIwMFM2OS4yNSAyMjQgNTYgMjI0UzMyIDIxMy4yNSAzMiAyMDBaTTM5MiAxNDRDMzYxLjEyNSAxNDQgMzM2IDE2OS4xMjUgMzM2IDIwMFMzNjEuMTI1IDI1NiAzOTIgMjU2UzQ0OCAyMzAuODc1IDQ0OCAyMDBTNDIyLjg3NSAxNDQgMzkyIDE0NFpNMzkyIDIyNEMzNzguNzUgMjI0IDM2OCAyMTMuMjUgMzY4IDIwMFMzNzguNzUgMTc2IDM5MiAxNzZTNDE2IDE4Ni43NSA0MTYgMjAwUzQwNS4yNSAyMjQgMzkyIDIyNFpNMjk2IDE0NEMzMjYuODc1IDE0NCAzNTIgMTE4Ljg3NSAzNTIgODhTMzI2Ljg3NSAzMiAyOTYgMzJTMjQwIDU3LjEyNSAyNDAgODhTMjY1LjEyNSAxNDQgMjk2IDE0NFpNMjk2IDY0QzMwOS4yNSA2NCAzMjAgNzQuNzUgMzIwIDg4UzMwOS4yNSAxMTIgMjk2IDExMlMyNzIgMTAxLjI1IDI3MiA4OFMyODIuNzUgNjQgMjk2IDY0Wk0xNTIgMTQ0QzE4Mi44NzUgMTQ0IDIwOCAxMTguODc1IDIwOCA4OFMxODIuODc1IDMyIDE1MiAzMlM5NiA1Ny4xMjUgOTYgODhTMTIxLjEyNSAxNDQgMTUyIDE0NFpNMTUyIDY0QzE2NS4yNSA2NCAxNzYgNzQuNzUgMTc2IDg4UzE2NS4yNSAxMTIgMTUyIDExMkMxMzguNzUgMTEyIDEyOCAxMDEuMjUgMTI4IDg4UzEzOC43NSA2NCAxNTIgNjRaIi8+PC9zdmc+|width=32|height=32)
 */
const PawSimple: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M367.25 300.75C341 286.001 320.125 239.375 300.125 203C284.375 174.25 254.25 160 224 160S163.625 174.25 147.875 203C127.5 239.875 107.75 285.5 80.625 300.75C51.625 317.125 32 348.125 32 384C32 437 75 479.875 128 479.875C129.25 480 130.625 480 131.875 480C180.75 480 200.75 448 224 448S267.25 480 316.125 480C317.375 480 318.75 480 320 479.875C373 479.875 416 437 416 384C416 348.125 396.375 317.125 367.25 300.75ZM318.875 448H316.125C296 448 283.125 440.25 269.375 432.125C256.75 424.5 242.25 416 224 416S191.375 424.5 178.625 432.125C164.875 440.25 152 448 131.875 448L128 447.875C92.75 447.875 64 419.25 64 384C64 361.125 76.375 339.875 96.375 328.625C126.875 311.5 146.5 274.125 165.375 238.125C168.875 231.375 172.375 224.75 175.875 218.375C185 201.875 203 192 224 192S263 201.875 272.125 218.375C275.375 224.375 278.75 230.625 282.125 237.125C301.5 273.75 321.625 311.75 351.625 328.625C371.625 339.875 384 361.125 384 384C384 419.25 355.25 447.875 318.875 448ZM112 200C112 169.125 86.875 144 56 144S0 169.125 0 200S25.125 256 56 256S112 230.875 112 200ZM32 200C32 186.75 42.75 176 56 176S80 186.75 80 200S69.25 224 56 224S32 213.25 32 200ZM392 144C361.125 144 336 169.125 336 200S361.125 256 392 256S448 230.875 448 200S422.875 144 392 144ZM392 224C378.75 224 368 213.25 368 200S378.75 176 392 176S416 186.75 416 200S405.25 224 392 224ZM296 144C326.875 144 352 118.875 352 88S326.875 32 296 32S240 57.125 240 88S265.125 144 296 144ZM296 64C309.25 64 320 74.75 320 88S309.25 112 296 112S272 101.25 272 88S282.75 64 296 64ZM152 144C182.875 144 208 118.875 208 88S182.875 32 152 32S96 57.125 96 88S121.125 144 152 144ZM152 64C165.25 64 176 74.75 176 88S165.25 112 152 112C138.75 112 128 101.25 128 88S138.75 64 152 64Z" />
    </Icon>
);

export default PawSimple;
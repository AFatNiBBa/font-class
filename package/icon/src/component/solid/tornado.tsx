
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `tornado` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tornado?s=solid tornado}
 * @preview ![tornado](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDcuNzgxIDQyLjA5NEM0MTUuMzEyIDM1LjUzMSA0MTcuOTk5IDI0Ljk2OSA0MTQuNDY4IDE1LjU5NEM0MTAuOTY4IDYuMjE5IDQwMS45OTggMCAzOTEuOTk4IDBMMjQuMTQ2IDAuMDMxQzExLjE0NiAwLjAzMSAwLjQ5IDEwLjQwNiAwLjE0NiAyMy40MDZDLTAuNTU5IDUwLjMyMiAxLjMzMiA3NC4xOCA0LjkyNyA5NS45MzhIMzU4Ljg0N0MzNjcuOTE5IDgwLjcxNyAzODMuNDAyIDYzLjMzOCA0MDcuNzgxIDQyLjA5NFpNMzg3LjY1NCAxOTUuOTA2QzM2NS42MzIgMTcwLjU3NiAzNDguNjk3IDE1MC45OTQgMzQ4LjY1NiAxMjcuOTM4SDEyLjAyN0MyMy40OTggMTY4LjM0IDQyLjM3OCAxOTkuMjc5IDY1LjE1IDIyMy45MzhINDEwLjk1MUM0MDMuMzc0IDIxNC4xMDcgMzk1LjQgMjA0LjgxNCAzODcuNjU0IDE5NS45MDZaTTMwMy41ODkgNDg1LjM0NEMzMDIuNDY0IDQ5NS40NjkgMzA3LjgzOSA1MDUuMTg4IDMxNy4wMjcgNTA5LjYyNUMzMjAuMzM5IDUxMS4yMTkgMzIzLjkwNCA1MTIgMzI3LjQzNSA1MTJDMzMzLjY1NCA1MTIgMzM5Ljc3OSA1MDkuNTk0IDM0NC4zNzMgNTA1QzM4OC4xMDEgNDYxLjM4OSA0MTcuNzEyIDQyMS4zMjYgNDMzLjczNCAzODMuOTM4SDI4NS4xMDNDMzAwLjgwNCA0MDguNTc0IDMwOC42NDYgNDQwLjAxIDMwMy41ODkgNDg1LjM0NFpNNDMxLjYzNiAyNTUuOTM4SDEwMC4zOTRDMTI3LjAxMSAyNzYuMjA5IDE1NS43MzggMjkxLjYxMyAxODIuNCAzMDUuODQ0QzIxMC41NDIgMzIwLjg1NCAyMzYuNDEyIDMzNC43MDEgMjU3LjEwMSAzNTEuOTM4SDQ0My45MjNDNDQ2LjM3MyAzNDEuMTAyIDQ0Ny45OTQgMzMwLjQxNiA0NDcuOTk5IDMyMEM0NDguMDEzIDI5NS40MTIgNDQxLjM0OSAyNzQuNTU1IDQzMS42MzYgMjU1LjkzOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Tornado(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M407.781 42.094C415.312 35.531 417.999 24.969 414.468 15.594C410.968 6.219 401.998 0 391.998 0L24.146 0.031C11.146 0.031 0.49 10.406 0.146 23.406C-0.559 50.322 1.332 74.18 4.927 95.938H358.847C367.919 80.717 383.402 63.338 407.781 42.094ZM387.654 195.906C365.632 170.576 348.697 150.994 348.656 127.938H12.027C23.498 168.34 42.378 199.279 65.15 223.938H410.951C403.374 214.107 395.4 204.814 387.654 195.906ZM303.589 485.344C302.464 495.469 307.839 505.188 317.027 509.625C320.339 511.219 323.904 512 327.435 512C333.654 512 339.779 509.594 344.373 505C388.101 461.389 417.712 421.326 433.734 383.938H285.103C300.804 408.574 308.646 440.01 303.589 485.344ZM431.636 255.938H100.394C127.011 276.209 155.738 291.613 182.4 305.844C210.542 320.854 236.412 334.701 257.101 351.938H443.923C446.373 341.102 447.994 330.416 447.999 320C448.013 295.412 441.349 274.555 431.636 255.938Z" />
        </Icon>
    </>
}
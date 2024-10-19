
import { Icon } from "../../index";

/**
 * A component that renders the `shuffle` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shuffle?s=thin shuffle}
 * @preview ![shuffle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MjkuNjU2IDI5OC4zNDRDNDI2LjUzMSAyOTUuMjE5IDQyMS40NjkgMjk1LjIxOSA0MTguMzQ0IDI5OC4zNDRTNDE1LjIxOSAzMDYuNTMxIDQxOC4zNDQgMzA5LjY1Nkw0ODQuNjg4IDM3NkgzMzZDMzI4LjQ2OSAzNzYgMzIxLjMxMiAzNzIuNDA2IDMxNi44MTIgMzY2LjM3NUwyNzguNDA2IDMxNS4xODhDMjc1Ljc1IDMxMS42NTYgMjcwLjcxOSAzMTEuMDMxIDI2Ny4xODggMzEzLjU5NEMyNjMuNjU2IDMxNi4yNSAyNjIuOTM4IDMyMS4yODEgMjY1LjU5NCAzMjQuODEyTDMwNCAzNzUuOTY5QzMxMS41IDM4NiAzMjMuNDY5IDM5MiAzMzYgMzkySDQ4NC42ODhMNDE4LjM0NCA0NTguMzQ0QzQxNS4yMTkgNDYxLjQ2OSA0MTUuMjE5IDQ2Ni41MzEgNDE4LjM0NCA0NjkuNjU2QzQxOS45MDYgNDcxLjIxOSA0MjEuOTM4IDQ3MiA0MjQgNDcyUzQyOC4wOTQgNDcxLjIxOSA0MjkuNjU2IDQ2OS42NTZMNTA5LjY1NiAzODkuNjU2QzUxMi43ODEgMzg2LjUzMSA1MTIuNzgxIDM4MS40NjkgNTA5LjY1NiAzNzguMzQ0TDQyOS42NTYgMjk4LjM0NFpNMzM2IDEzNkg0ODQuNjg4TDQxOC4zNDQgMjAyLjM0NEM0MTUuMjE5IDIwNS40NjkgNDE1LjIxOSAyMTAuNTMxIDQxOC4zNDQgMjEzLjY1NkM0MTkuOTA2IDIxNS4yMTkgNDIxLjkzOCAyMTYgNDI0IDIxNlM0MjguMDk0IDIxNS4yMTkgNDI5LjY1NiAyMTMuNjU2TDUwOS42NTYgMTMzLjY1NkM1MTIuNzgxIDEzMC41MzEgNTEyLjc4MSAxMjUuNDY5IDUwOS42NTYgMTIyLjM0NEw0MjkuNjU2IDQyLjM0NEM0MjYuNTMxIDM5LjIxOSA0MjEuNDY5IDM5LjIxOSA0MTguMzQ0IDQyLjM0NFM0MTUuMjE5IDUwLjUzMSA0MTguMzQ0IDUzLjY1Nkw0ODQuNjg4IDEyMEgzMzZDMzIzLjQ2OSAxMjAgMzExLjUgMTI2IDMwNCAxMzZMMTMxLjE4OCAzNjYuNDA2QzEyNi42ODggMzcyLjQwNiAxMTkuNTMxIDM3NiAxMTIgMzc2SDhDMy41OTQgMzc2IDAgMzc5LjU5NCAwIDM4NFMzLjU5NCAzOTIgOCAzOTJIMTEyQzEyNC41MzEgMzkyIDEzNi41IDM4NiAxNDQgMzc2TDMxNi44MTIgMTQ1LjU5NEMzMjEuMzEyIDEzOS41OTQgMzI4LjQ2OSAxMzYgMzM2IDEzNlpNOCAxMzZIMTEyQzExOS41MzEgMTM2IDEyNi42ODggMTM5LjU5NCAxMzEuMTg4IDE0NS42MjVMMTY5LjU5NCAxOTYuODEyQzE3MS4xODggMTk4LjkwNiAxNzMuNTYyIDIwMCAxNzYgMjAwQzE3Ny42ODggMjAwIDE3OS4zNzUgMTk5LjQ2OSAxODAuODEyIDE5OC40MDZDMTg0LjM0NCAxOTUuNzUgMTg1LjA2MiAxOTAuNzE5IDE4Mi40MDYgMTg3LjE4OEwxNDQgMTM2LjAzMUMxMzYuNSAxMjYgMTI0LjUzMSAxMjAgMTEyIDEyMEg4QzMuNTk0IDEyMCAwIDEyMy41OTQgMCAxMjhTMy41OTQgMTM2IDggMTM2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Shuffle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M429.656 298.344C426.531 295.219 421.469 295.219 418.344 298.344S415.219 306.531 418.344 309.656L484.688 376H336C328.469 376 321.312 372.406 316.812 366.375L278.406 315.188C275.75 311.656 270.719 311.031 267.188 313.594C263.656 316.25 262.938 321.281 265.594 324.812L304 375.969C311.5 386 323.469 392 336 392H484.688L418.344 458.344C415.219 461.469 415.219 466.531 418.344 469.656C419.906 471.219 421.938 472 424 472S428.094 471.219 429.656 469.656L509.656 389.656C512.781 386.531 512.781 381.469 509.656 378.344L429.656 298.344ZM336 136H484.688L418.344 202.344C415.219 205.469 415.219 210.531 418.344 213.656C419.906 215.219 421.938 216 424 216S428.094 215.219 429.656 213.656L509.656 133.656C512.781 130.531 512.781 125.469 509.656 122.344L429.656 42.344C426.531 39.219 421.469 39.219 418.344 42.344S415.219 50.531 418.344 53.656L484.688 120H336C323.469 120 311.5 126 304 136L131.188 366.406C126.688 372.406 119.531 376 112 376H8C3.594 376 0 379.594 0 384S3.594 392 8 392H112C124.531 392 136.5 386 144 376L316.812 145.594C321.312 139.594 328.469 136 336 136ZM8 136H112C119.531 136 126.688 139.594 131.188 145.625L169.594 196.812C171.188 198.906 173.562 200 176 200C177.688 200 179.375 199.469 180.812 198.406C184.344 195.75 185.062 190.719 182.406 187.188L144 136.031C136.5 126 124.531 120 112 120H8C3.594 120 0 123.594 0 128S3.594 136 8 136Z" />
    </Icon>
);

export default Shuffle;
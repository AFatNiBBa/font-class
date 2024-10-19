
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `cat` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cat?s=thin cat}
 * @preview ![cat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYgMTI4LjAwMUM0MDcuMTI1IDEyOC4wMDEgNDAwIDEzNS4xMjYgNDAwIDE0NC4wMDFTNDA3LjEyNSAxNjAuMDAxIDQxNiAxNjAuMDAxUzQzMiAxNTIuODc2IDQzMiAxNDQuMDAxUzQyNC44NzUgMTI4LjAwMSA0MTYgMTI4LjAwMVpNNTcxLjIwMyAwLjY5OEM1NjguMzEzIC0wLjU5NyA1NjQuOTA2IC0wLjAyMSA1NjIuNTc4IDIuMTUxTDQ5NS41NDcgNjQuMDJINDMyLjQ1M0wzNjUuNDIyIDIuMTUxQzM2My4wOTQgLTAuMDIxIDM1OS42ODggLTAuNjI4IDM1Ni43OTcgMC42OThDMzUzLjg3NSAxLjk3OSAzNTIgNC44NTQgMzUyIDguMDI2VjE2MC4wMUMzNTIgMTY1LjQ4NSAzNTIuODU0IDE3MC43MzMgMzUzLjYxNyAxNzYuMDAxSDI5NkMyMTMuNSAxNzYuMDAxIDE0Mi41MzMgMjI2LjIyMyAxMTIgMjk3LjY5VjIwMC4wMDFDMTEyIDE0Mi42NTcgNjUuMzQ0IDk2LjAwMSA4IDk2LjAwMUMzLjU3OCA5Ni4wMDEgMCA5OS41NzkgMCAxMDQuMDAxUzMuNTc4IDExMi4wMDEgOCAxMTIuMDAxQzU2LjUzMSAxMTIuMDAxIDk2IDE1MS40NjkgOTYgMjAwLjAwMVY0MjQuMDAxQzk2IDQ3Mi41MzIgMTM1LjQ2OSA1MTIuMDAxIDE4NCA1MTIuMDAxSDM2MEMzNjQuNDIyIDUxMi4wMDEgMzY4IDUwOC40MjIgMzY4IDUwNC4wMDFWNDcyLjAwMUMzNjggNDQ5LjkzOCAzNTAuMDYyIDQzMi4wMDEgMzI4IDQzMi4wMDFIMzA3LjA5NEw0MDggMzY2LjcwNFY0ODAuMDAxQzQwOCA0OTcuNjQxIDQyMi4zNTkgNTEyLjAwMSA0NDAgNTEyLjAwMUg0NzJDNDg5LjY0MSA1MTIuMDAxIDUwNCA0OTcuNjQxIDUwNCA0ODAuMDAxVjI2NC4yOUM1NDUuOTkyIDI0OC4xMiA1NzYgMjA3LjYyNCA1NzYgMTYwLjAxVjguMDI2QzU3NiA0Ljg1NCA1NzQuMTI1IDEuOTc5IDU3MS4yMDMgMC42OThaTTQ4OCA0ODAuMDAxQzQ4OCA0ODguODI5IDQ4MC44MjggNDk2LjAwMSA0NzIgNDk2LjAwMUg0NDBDNDMxLjE3MiA0OTYuMDAxIDQyNCA0ODguODI5IDQyNCA0ODAuMDAxVjM1Mi4wMDFDNDI0IDM0NS42NDMgNDE2Ljk2NyAzNDEuODY4IDQxMS42NTYgMzQ1LjI4MkwyODggNDI1LjI5NlY0MTYuMDAxQzI4OCAzNjMuMDYzIDI0NC45MzggMzIwLjAwMSAxOTIgMzIwLjAwMUMxODcuNTc4IDMyMC4wMDEgMTg0IDMyMy41NzkgMTg0IDMyOC4wMDFTMTg3LjU3OCAzMzYuMDAxIDE5MiAzMzYuMDAxQzIzNi4xMDkgMzM2LjAwMSAyNzIgMzcxLjg5MSAyNzIgNDE2LjAwMVY0NDAuMDAxQzI3MiA0NDQuNDE5IDI3NS41ODIgNDQ4LjAwMSAyODAgNDQ4LjAwMUgzMjhDMzQxLjIzNCA0NDguMDAxIDM1MiA0NTguNzY2IDM1MiA0NzIuMDAxVjQ5Ni4wMDFIMTg0QzE0NC4yOTcgNDk2LjAwMSAxMTIgNDYzLjcwNCAxMTIgNDI0LjAwMVYzNzYuMDAxQzExMiAyNzQuNTQ3IDE5NC41NDcgMTkyLjAwMSAyOTYgMTkyLjAwMUgzNTcuMjIxQzM3MS4wOTIgMjM4LjEgNDEzLjQ0MSAyNzIuMDAxIDQ2NCAyNzIuMDAxQzQ3Mi4yNTQgMjcyLjAwMSA0ODAuMjQ4IDI3MC45NzEgNDg4IDI2OS4yNjhWNDgwLjAwMVpNNTYwIDE2MC4wMUM1NjAgMjEyLjk0NCA1MTYuOTM4IDI1Ni4wMDMgNDY0IDI1Ni4wMDNTMzY4IDIxMi45NDQgMzY4IDE2MC4wMVYyNi4yOUw0MjMuOTA2IDc3Ljg5NUM0MjUuMzc1IDc5LjI2OCA0MjcuMzEyIDgwLjAxOCA0MjkuMzI4IDgwLjAxOEg0OTguNjcyQzUwMC42ODggODAuMDE4IDUwMi42MjUgNzkuMjY4IDUwNC4wOTQgNzcuODk1TDU2MCAyNi4yOVYxNjAuMDFaTTQ5NiAxNDQuMDAxQzQ5NiAxNTIuODc2IDUwMy4xMjUgMTYwLjAwMSA1MTIgMTYwLjAwMVM1MjggMTUyLjg3NiA1MjggMTQ0LjAwMVM1MjAuODc1IDEyOC4wMDEgNTEyIDEyOC4wMDFTNDk2IDEzNS4xMjYgNDk2IDE0NC4wMDFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Cat(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M416 128.001C407.125 128.001 400 135.126 400 144.001S407.125 160.001 416 160.001S432 152.876 432 144.001S424.875 128.001 416 128.001ZM571.203 0.698C568.313 -0.597 564.906 -0.021 562.578 2.151L495.547 64.02H432.453L365.422 2.151C363.094 -0.021 359.688 -0.628 356.797 0.698C353.875 1.979 352 4.854 352 8.026V160.01C352 165.485 352.854 170.733 353.617 176.001H296C213.5 176.001 142.533 226.223 112 297.69V200.001C112 142.657 65.344 96.001 8 96.001C3.578 96.001 0 99.579 0 104.001S3.578 112.001 8 112.001C56.531 112.001 96 151.469 96 200.001V424.001C96 472.532 135.469 512.001 184 512.001H360C364.422 512.001 368 508.422 368 504.001V472.001C368 449.938 350.062 432.001 328 432.001H307.094L408 366.704V480.001C408 497.641 422.359 512.001 440 512.001H472C489.641 512.001 504 497.641 504 480.001V264.29C545.992 248.12 576 207.624 576 160.01V8.026C576 4.854 574.125 1.979 571.203 0.698ZM488 480.001C488 488.829 480.828 496.001 472 496.001H440C431.172 496.001 424 488.829 424 480.001V352.001C424 345.643 416.967 341.868 411.656 345.282L288 425.296V416.001C288 363.063 244.938 320.001 192 320.001C187.578 320.001 184 323.579 184 328.001S187.578 336.001 192 336.001C236.109 336.001 272 371.891 272 416.001V440.001C272 444.419 275.582 448.001 280 448.001H328C341.234 448.001 352 458.766 352 472.001V496.001H184C144.297 496.001 112 463.704 112 424.001V376.001C112 274.547 194.547 192.001 296 192.001H357.221C371.092 238.1 413.441 272.001 464 272.001C472.254 272.001 480.248 270.971 488 269.268V480.001ZM560 160.01C560 212.944 516.938 256.003 464 256.003S368 212.944 368 160.01V26.29L423.906 77.895C425.375 79.268 427.312 80.018 429.328 80.018H498.672C500.688 80.018 502.625 79.268 504.094 77.895L560 26.29V160.01ZM496 144.001C496 152.876 503.125 160.001 512 160.001S528 152.876 528 144.001S520.875 128.001 512 128.001S496 135.126 496 144.001Z" />
        </Icon>
    </>
}

import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `shower-down` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shower-down?s=thin shower-down}
 * @preview ![shower-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTUuOTkgNDE2QzI1My43NDQgNDE2IDI1MS40OTQgNDE3LjM1NSAyNTAuNjcgNDIwLjE1NkMyNDIuMTY4IDQ0OS43NDQgMjI0IDQ1Ny43NDQgMjI0IDQ3OC41OEMyMjQgNDk3LjA4MiAyMzguMzM0IDUxMiAyNTYuMDA0IDUxMkMyNzMuNjcyIDUxMiAyODguMDA2IDQ5Ny4wODIgMjg4LjAwNiA0NzguNThDMjg4LjAwNiA0NTcuNjYgMjY5LjgzOCA0NDkuODI2IDI2MS4zMzggNDIwLjE1NkMyNjAuNTggNDE3LjQxOCAyNTguMjg3IDQxNiAyNTUuOTkgNDE2Wk0yNzIuMDA2IDQ3OC41OEMyNzIuMDA2IDQ4OC4xODYgMjY0LjgyOCA0OTYgMjU2LjAwNCA0OTZTMjQwIDQ4OC4xODYgMjQwIDQ3OC41OEMyNDAgNDcyLjgwMSAyNDIuNjggNDY4LjU4NiAyNDguMjUyIDQ2MC4zNTVDMjUwLjY4MiA0NTYuNzY2IDI1My4zNTkgNDUyLjgxMSAyNTUuOTk4IDQ0OC4yMjVDMjU4LjY0OCA0NTIuODMyIDI2MS4zMzggNDU2Ljc5NSAyNjMuNzc3IDQ2MC4zOTFDMjY5LjQ4MiA0NjguNzk5IDI3Mi4wMDYgNDcyLjc2MiAyNzIuMDA2IDQ3OC41OFpNMTI3Ljk4MiA0MTZDMTI1LjczNiA0MTYgMTIzLjQ4NiA0MTcuMzU1IDEyMi42NjIgNDIwLjE1NkMxMTQuMTYyIDQ0OS43NDQgOTUuOTk0IDQ1Ny43NDQgOTUuOTk0IDQ3OC41OEM5NS45OTQgNDk3LjA4MiAxMTAuMzI4IDUxMiAxMjcuOTk2IDUxMkMxNDUuNjY2IDUxMiAxNjAgNDk3LjA4MiAxNjAgNDc4LjU4QzE2MCA0NTcuNjYgMTQxLjgzMiA0NDkuODI2IDEzMy4zMyA0MjAuMTU2QzEzMi41NzIgNDE3LjQxOCAxMzAuMjc5IDQxNiAxMjcuOTgyIDQxNlpNMTQ0IDQ3OC41OEMxNDQgNDg4LjE4NiAxMzYuODIgNDk2IDEyNy45OTYgNDk2UzExMS45OTQgNDg4LjE4NiAxMTEuOTk0IDQ3OC41OEMxMTEuOTk0IDQ3Mi44MDEgMTE0LjY3MiA0NjguNTg4IDEyMC4yNDQgNDYwLjM1NUMxMjIuNjc0IDQ1Ni43NjYgMTI1LjM1NCA0NTIuODExIDEyNy45OTIgNDQ4LjIyNUMxMzAuNjQzIDQ1Mi44MzIgMTMzLjMzIDQ1Ni43OTUgMTM1Ljc3IDQ2MC4zODlDMTQxLjQ3NyA0NjguNzk5IDE0NCA0NzIuNzYyIDE0NCA0NzguNThaTTY5LjMzIDI5Mi4xNTZDNjguNTcyIDI4OS40MTggNjYuMjc5IDI4OCA2My45ODIgMjg4QzYxLjczNiAyODggNTkuNDg2IDI4OS4zNTUgNTguNjYyIDI5Mi4xNTZDNTAuMTYyIDMyMS43NDQgMzEuOTk0IDMyOS43NDQgMzEuOTk0IDM1MC41OEMzMS45OTQgMzY5LjA4MiA0Ni4zMjggMzg0IDYzLjk5NiAzODRDODEuNjY2IDM4NCA5NiAzNjkuMDgyIDk2IDM1MC41OEM5NiAzMjkuNjYgNzcuODMyIDMyMS44MjYgNjkuMzMgMjkyLjE1NlpNNjMuOTk2IDM2OEM1NS4xNzIgMzY4IDQ3Ljk5NCAzNjAuMTg2IDQ3Ljk5NCAzNTAuNThDNDcuOTk0IDM0NC44MDEgNTAuNjcyIDM0MC41ODggNTYuMjQ0IDMzMi4zNTVDNTguNjc0IDMyOC43NjYgNjEuMzU0IDMyNC44MTEgNjMuOTkyIDMyMC4yMjVDNjYuNjQzIDMyNC44MzIgNjkuMzMgMzI4Ljc5NSA3MS43NyAzMzIuMzg5Qzc3LjQ3NyAzNDAuNzk5IDgwIDM0NC43NjIgODAgMzUwLjU4QzgwIDM2MC4xODYgNzIuODIgMzY4IDYzLjk5NiAzNjhaTTE5Ny4zMyAyOTIuMTU2QzE5Ni41NzIgMjg5LjQxOCAxOTQuMjc5IDI4OCAxOTEuOTgyIDI4OEMxODkuNzM2IDI4OCAxODcuNDg2IDI4OS4zNTUgMTg2LjY2MiAyOTIuMTU2QzE3OC4xNjIgMzIxLjc0NCAxNTkuOTk0IDMyOS43NDQgMTU5Ljk5NCAzNTAuNThDMTU5Ljk5NCAzNjkuMDgyIDE3NC4zMjggMzg0IDE5MS45OTYgMzg0QzIwOS42NjYgMzg0IDIyNCAzNjkuMDgyIDIyNCAzNTAuNThDMjI0IDMyOS42NiAyMDUuODMyIDMyMS44MjYgMTk3LjMzIDI5Mi4xNTZaTTE5MS45OTYgMzY4QzE4My4xNzIgMzY4IDE3NS45OTQgMzYwLjE4NiAxNzUuOTk0IDM1MC41OEMxNzUuOTk0IDM0NC44MDEgMTc4LjY3MiAzNDAuNTg4IDE4NC4yNDQgMzMyLjM1NUMxODYuNjc0IDMyOC43NjYgMTg5LjM1NCAzMjQuODExIDE5MS45OTIgMzIwLjIyNUMxOTQuNjQzIDMyNC44MzIgMTk3LjMzIDMyOC43OTUgMTk5Ljc3IDMzMi4zODlDMjA1LjQ3NyAzNDAuNzk5IDIwOCAzNDQuNzYyIDIwOCAzNTAuNThDMjA4IDM2MC4xODYgMjAwLjgyIDM2OCAxOTEuOTk2IDM2OFpNMzE5Ljk4MiAyODhDMzE3LjczNiAyODggMzE1LjQ4NiAyODkuMzU1IDMxNC42NjIgMjkyLjE1NkMzMDYuMTYyIDMyMS43NDQgMjg3Ljk5NCAzMjkuNzQ0IDI4Ny45OTQgMzUwLjU4QzI4Ny45OTQgMzY5LjA4MiAzMDIuMzI4IDM4NCAzMTkuOTk2IDM4NEMzMzcuNjY2IDM4NCAzNTIgMzY5LjA4MiAzNTIgMzUwLjU4QzM1MiAzMjkuNjYgMzMzLjgzMiAzMjEuODI2IDMyNS4zMyAyOTIuMTU2QzMyNC41NzIgMjg5LjQxOCAzMjIuMjc5IDI4OCAzMTkuOTgyIDI4OFpNMzM2IDM1MC41OEMzMzYgMzYwLjE4NiAzMjguODIgMzY4IDMxOS45OTYgMzY4UzMwMy45OTQgMzYwLjE4NiAzMDMuOTk0IDM1MC41OEMzMDMuOTk0IDM0NC44MDEgMzA2LjY3MiAzNDAuNTg4IDMxMi4yNDQgMzMyLjM1NUMzMTQuNjc0IDMyOC43NjYgMzE3LjM1NCAzMjQuODExIDMxOS45OTIgMzIwLjIyNUMzMjIuNjQzIDMyNC44MzIgMzI1LjMzIDMyOC43OTUgMzI3Ljc3IDMzMi4zODlDMzMzLjQ3NyAzNDAuNzk5IDMzNiAzNDQuNzYyIDMzNiAzNTAuNThaTTMyIDIwOEMzNi40MDYgMjA4IDQwIDIwNC40MjIgNDAgMjAwQzQwIDEyOCA5MS4xMjUgNjUuMzU5IDE2MS41OTQgNTEuMDYyTDE2OCA0OS43NVYyNEMxNjggMTkuNTk0IDE3MS41OTQgMTYgMTc2IDE2SDIwOEMyMTIuNDA2IDE2IDIxNiAxOS41OTQgMjE2IDI0VjQ5Ljc1TDIyMi40MDYgNTEuMDYyQzI5Mi44NzUgNjUuMzU5IDM0NCAxMjggMzQ0IDIwMEMzNDQgMjA0LjQyMiAzNDcuNTk0IDIwOCAzNTIgMjA4UzM2MCAyMDQuNDIyIDM2MCAyMDBDMzYwIDEyMi42MjUgMzA2LjU2MiA1NS4wMzEgMjMyIDM2LjgxMlYyNEMyMzIgMTAuNzY2IDIyMS4yMTkgMCAyMDggMEgxNzZDMTYyLjc4MSAwIDE1MiAxMC43NjYgMTUyIDI0VjM2LjgxMkM3Ny40MzggNTUuMDMxIDI0IDEyMi42MjUgMjQgMjAwQzI0IDIwNC40MjIgMjcuNTk0IDIwOCAzMiAyMDhaTTM3NiAyNDBIOEMzLjU5NCAyNDAgMCAyNDMuNTc4IDAgMjQ4UzMuNTk0IDI1NiA4IDI1NkgzNzZDMzgwLjQwNiAyNTYgMzg0IDI1Mi40MjIgMzg0IDI0OFMzODAuNDA2IDI0MCAzNzYgMjQwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ShowerDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M255.99 416C253.744 416 251.494 417.355 250.67 420.156C242.168 449.744 224 457.744 224 478.58C224 497.082 238.334 512 256.004 512C273.672 512 288.006 497.082 288.006 478.58C288.006 457.66 269.838 449.826 261.338 420.156C260.58 417.418 258.287 416 255.99 416ZM272.006 478.58C272.006 488.186 264.828 496 256.004 496S240 488.186 240 478.58C240 472.801 242.68 468.586 248.252 460.355C250.682 456.766 253.359 452.811 255.998 448.225C258.648 452.832 261.338 456.795 263.777 460.391C269.482 468.799 272.006 472.762 272.006 478.58ZM127.982 416C125.736 416 123.486 417.355 122.662 420.156C114.162 449.744 95.994 457.744 95.994 478.58C95.994 497.082 110.328 512 127.996 512C145.666 512 160 497.082 160 478.58C160 457.66 141.832 449.826 133.33 420.156C132.572 417.418 130.279 416 127.982 416ZM144 478.58C144 488.186 136.82 496 127.996 496S111.994 488.186 111.994 478.58C111.994 472.801 114.672 468.588 120.244 460.355C122.674 456.766 125.354 452.811 127.992 448.225C130.643 452.832 133.33 456.795 135.77 460.389C141.477 468.799 144 472.762 144 478.58ZM69.33 292.156C68.572 289.418 66.279 288 63.982 288C61.736 288 59.486 289.355 58.662 292.156C50.162 321.744 31.994 329.744 31.994 350.58C31.994 369.082 46.328 384 63.996 384C81.666 384 96 369.082 96 350.58C96 329.66 77.832 321.826 69.33 292.156ZM63.996 368C55.172 368 47.994 360.186 47.994 350.58C47.994 344.801 50.672 340.588 56.244 332.355C58.674 328.766 61.354 324.811 63.992 320.225C66.643 324.832 69.33 328.795 71.77 332.389C77.477 340.799 80 344.762 80 350.58C80 360.186 72.82 368 63.996 368ZM197.33 292.156C196.572 289.418 194.279 288 191.982 288C189.736 288 187.486 289.355 186.662 292.156C178.162 321.744 159.994 329.744 159.994 350.58C159.994 369.082 174.328 384 191.996 384C209.666 384 224 369.082 224 350.58C224 329.66 205.832 321.826 197.33 292.156ZM191.996 368C183.172 368 175.994 360.186 175.994 350.58C175.994 344.801 178.672 340.588 184.244 332.355C186.674 328.766 189.354 324.811 191.992 320.225C194.643 324.832 197.33 328.795 199.77 332.389C205.477 340.799 208 344.762 208 350.58C208 360.186 200.82 368 191.996 368ZM319.982 288C317.736 288 315.486 289.355 314.662 292.156C306.162 321.744 287.994 329.744 287.994 350.58C287.994 369.082 302.328 384 319.996 384C337.666 384 352 369.082 352 350.58C352 329.66 333.832 321.826 325.33 292.156C324.572 289.418 322.279 288 319.982 288ZM336 350.58C336 360.186 328.82 368 319.996 368S303.994 360.186 303.994 350.58C303.994 344.801 306.672 340.588 312.244 332.355C314.674 328.766 317.354 324.811 319.992 320.225C322.643 324.832 325.33 328.795 327.77 332.389C333.477 340.799 336 344.762 336 350.58ZM32 208C36.406 208 40 204.422 40 200C40 128 91.125 65.359 161.594 51.062L168 49.75V24C168 19.594 171.594 16 176 16H208C212.406 16 216 19.594 216 24V49.75L222.406 51.062C292.875 65.359 344 128 344 200C344 204.422 347.594 208 352 208S360 204.422 360 200C360 122.625 306.562 55.031 232 36.812V24C232 10.766 221.219 0 208 0H176C162.781 0 152 10.766 152 24V36.812C77.438 55.031 24 122.625 24 200C24 204.422 27.594 208 32 208ZM376 240H8C3.594 240 0 243.578 0 248S3.594 256 8 256H376C380.406 256 384 252.422 384 248S380.406 240 376 240Z" />
        </Icon>
    </>
}
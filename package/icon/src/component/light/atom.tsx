
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `atom` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/atom?s=light atom}
 * @preview ![atom](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDQuNzUgMjU2QzQ2MC4yNSAyMzUuNzUgNDcxLjUgMjE1LjM3NSA0NzYuNjI1IDE5NkM0ODIuNjI1IDE3My4zNzUgNDgwLjYyNSAxNTIuNjI1IDQ3MC42MjUgMTM1Ljc1QzQ1Mi4zNzUgMTA1LjI1IDQxMC4yNSA5Mi44NzUgMzU3LjEyNSA5Ny4zNzVDMzMzLjg3NSAzNy43NSAyOTcuNjI1IDAgMjU2IDBTMTc4LjEyNSAzNy43NSAxNTUgOTcuMzc1QzEwMS43NSA5Mi44NzUgNTkuNjI1IDEwNS4yNSA0MS41IDEzNS43NUMzMS4zNzUgMTUyLjYyNSAyOS4zNzUgMTczLjM3NSAzNS4zNzUgMTk2QzQwLjUgMjE1LjM3NSA1MS43NSAyMzUuNzUgNjcuMjUgMjU2QzUxLjc1IDI3Ni4yNSA0MC41IDI5Ni42MjUgMzUuMzc1IDMxNkMyOS4zNzUgMzM4LjYyNSAzMS4zNzUgMzU5LjM3NSA0MS4zNzUgMzc2LjI1QzU3LjI1IDQwMi43NSA5MSA0MTUuNzUgMTM0LjUgNDE1Ljc1QzE0MC44NzUgNDE1Ljc1IDE0OCA0MTQuNSAxNTQuNzUgNDE0QzE3OCA0NzMuODc1IDIxNC4yNSA1MTIgMjU2IDUxMlMzMzQgNDczLjg3NSAzNTcuMjUgNDE0QzM2NCA0MTQuNSAzNzEuMTI1IDQxNS43NSAzNzcuNSA0MTUuNzVDNDIxIDQxNS43NSA0NTQuNzUgNDAyLjc1IDQ3MC41IDM3Ni4yNUM0ODAuNjI1IDM1OS4zNzUgNDgyLjYyNSAzMzguNjI1IDQ3Ni42MjUgMzE2QzQ3MS41IDI5Ni42MjUgNDYwLjI1IDI3Ni4yNSA0NDQuNzUgMjU2Wk02OC44NzUgMzU5Ljc1QzYzLjM3NSAzNTAuNSA2Mi41IDMzOC41IDY2LjI1IDMyNC4yNUM3MCAzMTAuNSA3Ny44NzUgMjk1Ljg3NSA4OC42MjUgMjgxQzEwMi4xMjUgMjk0Ljg3NSAxMTYuNjI1IDMwNy42MjUgMTMxLjg3NSAzMTkuMzc1QzEzNC41IDM0MSAxMzguNzUgMzYyLjM3NSAxNDQuNSAzODMuMzc1QzEwNi43NSAzODUuMjUgNzkuMTI1IDM3Ni44NzUgNjguODc1IDM1OS43NVpNMTI4LjM3NSAyNzQuNzVDMTIxLjYyNSAyNjguNSAxMTUuMjUgMjYyLjI1IDEwOS4yNSAyNTZDMTE1LjI1IDI0OS43NSAxMjEuNjI1IDI0My41IDEyOC4zNzUgMjM3LjI1QzEyOC4yNSAyNDMuNSAxMjggMjQ5LjYyNSAxMjggMjU2UzEyOC4yNSAyNjguNSAxMjguMzc1IDI3NC43NVpNMTMxLjg3NSAxOTIuNUMxMTYuNjI1IDIwNC4yNSAxMDIuMTI1IDIxNy4xMjUgODguNjI1IDIzMUM3Ny44NzUgMjE2LjEyNSA3MCAyMDEuMzc1IDY2LjI1IDE4Ny43NUM2Mi41IDE3My41IDYzLjM3NSAxNjEuNSA2OC44NzUgMTUyLjI1Qzc4LjEyNSAxMzYuNzUgMTAxLjYyNSAxMjguMjUgMTM0LjEyNSAxMjguMjVDMTM3LjM3NSAxMjguMjUgMTQxIDEyOC41IDE0NC41IDEyOC42MjVDMTM4Ljc1IDE0OS42MjUgMTM0LjUgMTcxIDEzMS44NzUgMTkyLjVaTTM0My43NSAxNjdDMzM1LjM3NSAxNjEuNzUgMzI2Ljg3NSAxNTYuNSAzMTcuODc1IDE1MS41QzMxMS41IDE0Ny44NzUgMzA1IDE0NC42MjUgMjk4LjYyNSAxNDEuMzc1QzMxMC42MjUgMTM3Ljc1IDMyMi44NzUgMTM0Ljg3NSAzMzUuMTI1IDEzMi41QzMzOCAxNDIgMzQxLjg3NSAxNTcuMzc1IDM0My43NSAxNjdaTTI1NiAzMkMyODAuMTI1IDMyIDMwNS41IDU4IDMyNC4yNSAxMDJDMzAwLjg3NSAxMDYuNzUgMjc4LjEyNSAxMTMuNSAyNTYgMTIyLjI1QzIzMy44NzUgMTEzLjUgMjExLjEyNSAxMDYuNzUgMTg3Ljc1IDEwMkMyMDYuNSA1OCAyMzEuODc1IDMyIDI1NiAzMlpNMTc2Ljg3NSAxMzIuNUMxODkuMTI1IDEzNC44NzUgMjAxLjM3NSAxMzcuNzUgMjEzLjM3NSAxNDEuMzc1QzIwNyAxNDQuNjI1IDIwMC41IDE0OCAxOTQuMTI1IDE1MS41QzE4NS4xMjUgMTU2LjUgMTc2LjYyNSAxNjEuNzUgMTY4LjI1IDE2N0MxNzAuMTI1IDE1Ny4zNzUgMTc0IDE0MiAxNzYuODc1IDEzMi41Wk0xNjguMjUgMzQ1QzE3Ni42MjUgMzUwLjI1IDE4NS4xMjUgMzU1LjUgMTk0LjEyNSAzNjAuNUMyMDAuODc1IDM2NC4yNSAyMDcuNSAzNjcgMjE0LjI1IDM3MC4zNzVDMjAyIDM3NC4xMjUgMTg5LjUgMzc3LjEyNSAxNzYuODc1IDM3OS41QzE3My4zNzUgMzY4LjEyNSAxNzAuNjI1IDM1Ni42MjUgMTY4LjI1IDM0NVpNMjU2IDQ4MEMyMzEuODc1IDQ4MCAyMDYuMjUgNDUzLjc1IDE4Ny42MjUgNDA5LjVDMjExIDQwNC43NSAyMzMuODc1IDM5OCAyNTYgMzg5LjI1QzI3OC4xMjUgMzk4IDMwMSA0MDQuNzUgMzI0LjM3NSA0MDkuNUMzMDUuNzUgNDUzLjc1IDI4MC4xMjUgNDgwIDI1NiA0ODBaTTMzNS4xMjUgMzc5LjVDMzIyLjUgMzc3LjEyNSAzMTAuMTI1IDM3NC4xMjUgMjk3Ljg3NSAzNzAuMzc1QzMwNC41IDM2NyAzMTEuMjUgMzY0LjI1IDMxNy44NzUgMzYwLjVDMzI2Ljg3NSAzNTUuNSAzMzUuMzc1IDM1MC4yNSAzNDMuNzUgMzQ1QzM0MS4zNzUgMzU3LjEyNSAzMzguMzc1IDM2OC42MjUgMzM1LjEyNSAzNzkuNVpNMzQ5Ljg3NSAzMDJDMzM0LjYyNSAzMTMuMTI1IDMxOC43NSAzMjMuMzc1IDMwMi4zNzUgMzMyLjVDMjg3LjI1IDM0MC44NzUgMjcxLjg3NSAzNDguNSAyNTYgMzU1LjEyNUMyNDAuMTI1IDM0OC41IDIyNC43NSAzNDAuODc1IDIwOS42MjUgMzMyLjVDMTkzLjI1IDMyMy4zNzUgMTc3LjM3NSAzMTMuMTI1IDE2Mi4xMjUgMzAyLjEyNUMxNjAuNzUgMjg3LjM3NSAxNjAgMjcyIDE2MCAyNTZTMTYwLjc1IDIyNC42MjUgMTYyLjEyNSAyMTBDMTc3LjM3NSAxOTguODc1IDE5My4yNSAxODguNjI1IDIwOS42MjUgMTc5LjVDMjI0Ljc1IDE3MSAyNDAuMTI1IDE2My41IDI1NiAxNTYuNzVDMjcxLjg3NSAxNjMuNSAyODcuMjUgMTcxIDMwMi4zNzUgMTc5LjVDMzE4Ljc1IDE4OC42MjUgMzM0LjYyNSAxOTguODc1IDM0OS44NzUgMjA5Ljg3NUMzNTEuMjUgMjI0LjYyNSAzNTIgMjQwIDM1MiAyNTZTMzUxLjI1IDI4Ny4zNzUgMzQ5Ljg3NSAzMDJaTTM3OCAxMjguMjVDNDEwLjM3NSAxMjguMjUgNDMzLjg3NSAxMzYuNzUgNDQzLjEyNSAxNTIuMjVDNDQ4LjYyNSAxNjEuNSA0NDkuNSAxNzMuNSA0NDUuNzUgMTg3Ljc1QzQ0MiAyMDEuMzc1IDQzNC4xMjUgMjE2LjEyNSA0MjMuMzc1IDIzMUM0MDkuODc1IDIxNy4xMjUgMzk1LjM3NSAyMDQuMjUgMzgwLjEyNSAxOTIuNjI1QzM3Ny41IDE3MSAzNzMuMjUgMTQ5LjYyNSAzNjcuNSAxMjguNzVDMzcxIDEyOC41IDM3NC42MjUgMTI4LjI1IDM3OCAxMjguMjVaTTM4My42MjUgMjM3LjI1QzM5MC4zNzUgMjQzLjUgMzk2Ljc1IDI0OS43NSA0MDIuNzUgMjU2QzM5Ni43NSAyNjIuMjUgMzkwLjM3NSAyNjguNSAzODMuNjI1IDI3NC43NUMzODMuNzUgMjY4LjUgMzg0IDI2Mi4zNzUgMzg0IDI1NlMzODMuNzUgMjQzLjUgMzgzLjYyNSAyMzcuMjVaTTQ0My4xMjUgMzU5Ljc1QzQzMi44NzUgMzc2Ljg3NSA0MDUuMjUgMzg1LjI1IDM2Ny41IDM4My4zNzVDMzczLjI1IDM2Mi4zNzUgMzc3LjUgMzQxIDM4MC4xMjUgMzE5LjM3NUMzOTUuMzc1IDMwNy43NSA0MDkuODc1IDI5NC44NzUgNDIzLjM3NSAyODFDNDM0LjEyNSAyOTUuODc1IDQ0MiAzMTAuNSA0NDUuNzUgMzI0LjI1QzQ0OS41IDMzOC41IDQ0OC42MjUgMzUwLjUgNDQzLjEyNSAzNTkuNzVaTTI1NiAyMzJDMjQyLjc1IDIzMiAyMzIgMjQyLjc1IDIzMiAyNTZTMjQyLjc1IDI4MCAyNTYgMjgwUzI4MCAyNjkuMjUgMjgwIDI1NlMyNjkuMjUgMjMyIDI1NiAyMzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Atom(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M444.75 256C460.25 235.75 471.5 215.375 476.625 196C482.625 173.375 480.625 152.625 470.625 135.75C452.375 105.25 410.25 92.875 357.125 97.375C333.875 37.75 297.625 0 256 0S178.125 37.75 155 97.375C101.75 92.875 59.625 105.25 41.5 135.75C31.375 152.625 29.375 173.375 35.375 196C40.5 215.375 51.75 235.75 67.25 256C51.75 276.25 40.5 296.625 35.375 316C29.375 338.625 31.375 359.375 41.375 376.25C57.25 402.75 91 415.75 134.5 415.75C140.875 415.75 148 414.5 154.75 414C178 473.875 214.25 512 256 512S334 473.875 357.25 414C364 414.5 371.125 415.75 377.5 415.75C421 415.75 454.75 402.75 470.5 376.25C480.625 359.375 482.625 338.625 476.625 316C471.5 296.625 460.25 276.25 444.75 256ZM68.875 359.75C63.375 350.5 62.5 338.5 66.25 324.25C70 310.5 77.875 295.875 88.625 281C102.125 294.875 116.625 307.625 131.875 319.375C134.5 341 138.75 362.375 144.5 383.375C106.75 385.25 79.125 376.875 68.875 359.75ZM128.375 274.75C121.625 268.5 115.25 262.25 109.25 256C115.25 249.75 121.625 243.5 128.375 237.25C128.25 243.5 128 249.625 128 256S128.25 268.5 128.375 274.75ZM131.875 192.5C116.625 204.25 102.125 217.125 88.625 231C77.875 216.125 70 201.375 66.25 187.75C62.5 173.5 63.375 161.5 68.875 152.25C78.125 136.75 101.625 128.25 134.125 128.25C137.375 128.25 141 128.5 144.5 128.625C138.75 149.625 134.5 171 131.875 192.5ZM343.75 167C335.375 161.75 326.875 156.5 317.875 151.5C311.5 147.875 305 144.625 298.625 141.375C310.625 137.75 322.875 134.875 335.125 132.5C338 142 341.875 157.375 343.75 167ZM256 32C280.125 32 305.5 58 324.25 102C300.875 106.75 278.125 113.5 256 122.25C233.875 113.5 211.125 106.75 187.75 102C206.5 58 231.875 32 256 32ZM176.875 132.5C189.125 134.875 201.375 137.75 213.375 141.375C207 144.625 200.5 148 194.125 151.5C185.125 156.5 176.625 161.75 168.25 167C170.125 157.375 174 142 176.875 132.5ZM168.25 345C176.625 350.25 185.125 355.5 194.125 360.5C200.875 364.25 207.5 367 214.25 370.375C202 374.125 189.5 377.125 176.875 379.5C173.375 368.125 170.625 356.625 168.25 345ZM256 480C231.875 480 206.25 453.75 187.625 409.5C211 404.75 233.875 398 256 389.25C278.125 398 301 404.75 324.375 409.5C305.75 453.75 280.125 480 256 480ZM335.125 379.5C322.5 377.125 310.125 374.125 297.875 370.375C304.5 367 311.25 364.25 317.875 360.5C326.875 355.5 335.375 350.25 343.75 345C341.375 357.125 338.375 368.625 335.125 379.5ZM349.875 302C334.625 313.125 318.75 323.375 302.375 332.5C287.25 340.875 271.875 348.5 256 355.125C240.125 348.5 224.75 340.875 209.625 332.5C193.25 323.375 177.375 313.125 162.125 302.125C160.75 287.375 160 272 160 256S160.75 224.625 162.125 210C177.375 198.875 193.25 188.625 209.625 179.5C224.75 171 240.125 163.5 256 156.75C271.875 163.5 287.25 171 302.375 179.5C318.75 188.625 334.625 198.875 349.875 209.875C351.25 224.625 352 240 352 256S351.25 287.375 349.875 302ZM378 128.25C410.375 128.25 433.875 136.75 443.125 152.25C448.625 161.5 449.5 173.5 445.75 187.75C442 201.375 434.125 216.125 423.375 231C409.875 217.125 395.375 204.25 380.125 192.625C377.5 171 373.25 149.625 367.5 128.75C371 128.5 374.625 128.25 378 128.25ZM383.625 237.25C390.375 243.5 396.75 249.75 402.75 256C396.75 262.25 390.375 268.5 383.625 274.75C383.75 268.5 384 262.375 384 256S383.75 243.5 383.625 237.25ZM443.125 359.75C432.875 376.875 405.25 385.25 367.5 383.375C373.25 362.375 377.5 341 380.125 319.375C395.375 307.75 409.875 294.875 423.375 281C434.125 295.875 442 310.5 445.75 324.25C449.5 338.5 448.625 350.5 443.125 359.75ZM256 232C242.75 232 232 242.75 232 256S242.75 280 256 280S280 269.25 280 256S269.25 232 256 232Z" />
        </Icon>
    </>
}

import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `yoast` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/yoast?s=brands yoast}
 * @preview ![yoast](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05MS4zIDc2aDE4NmwtNyAxOC45aC0xNzljLTM5LjcgMC03MS45IDMxLjYtNzEuOSA3MC4zdjIwNS40YzAgMzUuNCAyNC45IDcwLjMgODQgNzAuM1Y0NjBIOTEuM0M0MS4yIDQ2MCAwIDQxOS44IDAgMzcwLjVWMTY1LjJDMCAxMTUuOSA0MC43IDc2IDkxLjMgNzZ6bTIyOS4xLTU2aDY2LjVDMjQzLjEgMzk4LjEgMjQxLjIgNDE4LjkgMjAyLjIgNDU5LjNjLTIwLjggMjEuNi00OS4zIDMxLjctNzguMyAzMi43di01MS4xYzQ5LjItNy43IDY0LjYtNDkuOSA2NC42LTc1LjMgMC0yMC4xLjYtMTIuNi04Mi4xLTIyMy4yaDYxLjRMMjE4LjIgMjk5IDMyMC40IDIwek00NDggMTYxLjVWNDYwSDIzNGM2LjYtOS42IDEwLjctMTYuMyAxMi4xLTE5LjRoMTgyLjVWMTYxLjVjMC0zMi41LTE3LjEtNTEuOS00OC4yLTYyLjlsNi43LTE3LjZjNDEuNyAxMy42IDYwLjkgNDMuMSA2MC45IDgwLjV6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Yoast(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M91.3 76h186l-7 18.9h-179c-39.7 0-71.9 31.6-71.9 70.3v205.4c0 35.4 24.9 70.3 84 70.3V460H91.3C41.2 460 0 419.8 0 370.5V165.2C0 115.9 40.7 76 91.3 76zm229.1-56h66.5C243.1 398.1 241.2 418.9 202.2 459.3c-20.8 21.6-49.3 31.7-78.3 32.7v-51.1c49.2-7.7 64.6-49.9 64.6-75.3 0-20.1.6-12.6-82.1-223.2h61.4L218.2 299 320.4 20zM448 161.5V460H234c6.6-9.6 10.7-16.3 12.1-19.4h182.5V161.5c0-32.5-17.1-51.9-48.2-62.9l6.7-17.6c41.7 13.6 60.9 43.1 60.9 80.5z" />
        </Icon>
    </>
}